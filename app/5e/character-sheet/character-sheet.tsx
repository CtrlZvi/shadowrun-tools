/// <reference path="../../../typings/react/react.d.ts" />
import * as React from "react";

interface Data {
  [index: string]: any;
  "character-name": string;
  "player-name": string;
  "notes": string;
  "domNodes": React.Component<HeaderFieldProps, {}>[];
}

let data: Data = {
  "character-name": "Wade Wilson",
  "player-name": "Chris Laubach",
  "notes": "Test",
  "domNodes": []
};

interface HeaderFieldProps {
  name: string;
  label: string;
  line: string;
}

class HeaderField extends React.Component<HeaderFieldProps, {}> {
  componentDidMount() {
    data.domNodes.unshift(this);
  }
  render() {
    return (
      <fieldset name={this.props.name}>
        <label>
          {this.props.label}<span className="line">{this.props.line}</span>
        </label>
        <input type="text" value={data[this.props.name]} onChange={this.handleChange.bind(this)} ref="input" />
      </fieldset>
    );
  }
  private handleChange(event: React.FormEvent): void {
    data[this.props.name] = (event.target as HTMLInputElement).value;
    for (let node of data.domNodes) {
      node.forceUpdate();
    }
  }
}

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <header className="name">
        <HeaderField name="character-name" label={"CHARACTER"} line={"______________________"} />
        <HeaderField name="player-name" label={"PLAYER"} line={"_________________________"} />
        <HeaderField name="notes" label={"NOTES"} line={"__________________________"} />
      </header>
    );
  }
}

class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <footer className="copyright">
        © 2013 The Topps Company, Inc. Shadowrun is a registered trademark of The Topps Company, Inc.,
        in the United States and/or other countries. Permission given to copy for personal use.
      </footer>
    );
  }
}

enum Column {
  Left,
  Right
}

interface StatBlockProps extends React.Props<StatBlock> {
  name?: string;
  column: Column;
}

class StatTitle extends React.Component<StatBlockProps, {}> {
  render() {
    return (
      <div className={"stat-title-box stat-column-" + Column[this.props.column].toLowerCase()}>
        <div className="stat-title">
          {this.props.name ? this.props.name : this.props.children}
        </div>
      </div>
    );
  }
}

class StatBlock extends React.Component<StatBlockProps, {}> {
    render() {
      return (
        <div className="stat-block">
          <StatTitle {...this.props} />
        </div>
      );
    }
}

class Stats extends React.Component<React.Props<Stats>, {}> {
  render() {
    return (
      <div className="stats">
        {this.props.children}
      </div>
    );
  }
}

class CharacterSheetPageContent extends React.Component<{}, {}> {
  render() {
    return (
      <div className="pdf-page-content">
        <Header />
        <Stats {...this.props} >
        </Stats>
        <Footer />
      </div>
    );
  }
}

class CharacterSheetPage extends React.Component<{}, {}> {
  render() {
    return (
      <div className="pdf-page">
        <CharacterSheetPageContent {...this.props} />
      </div>
    );
  }
}

class CharacterSheet extends React.Component<React.Props<CharacterSheet>, {}> {
  render() {
    return (
      <div className="pdf">
        {this.props.children}
      </div>
    );
  }
}

React.render(
  <CharacterSheet>
    <CharacterSheetPage>
      <StatBlock name="PERSONAL DATA" column={Column.Left} />
      <StatBlock name="ATTRIBUTES" column={Column.Left} />
      <StatBlock name="SKILLS" column={Column.Left} />
      <StatBlock name="IDS / LIFESTYLES / CURRENCY" column={Column.Left} />
      <StatBlock name="CORE COMBAT INFO" column={Column.Right} />
      <StatBlock name="CONDITION MONITOR" column={Column.Right} />
      <StatBlock name="QUALITIES" column={Column.Right} />
      <StatBlock name="CONTACTS" column={Column.Right} />
    </CharacterSheetPage>
    <CharacterSheetPage>
      <StatBlock name="RANGED WEAPONS" column={Column.Left} />
      <StatBlock name="ARMOR" column={Column.Left} />
      <StatBlock name="AUGMENTATIONS" column={Column.Left} />
      <StatBlock name="GEAR" column={Column.Left} />
      <StatBlock name="MELEE WEAPONS" column={Column.Right} />
      <StatBlock name="CYBERDECK" column={Column.Right} />
      <StatBlock name="VEHICLE" column={Column.Right} />
      <StatBlock column={Column.Right}>
        SPELLS / PREPARATIONS
        <br />
        RITUALS / COMPLEX FORMS
      </StatBlock>
      <StatBlock column={Column.Right}>
        ADEPT POWERS <span className="stat-title-small-caps">or</span> OTHER ABILITIES
      </StatBlock>
    </CharacterSheetPage>
  </CharacterSheet>,
  document.getElementById("character-sheet")
);
