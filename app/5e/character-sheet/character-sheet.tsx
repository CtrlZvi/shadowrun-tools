/// <reference path="../../../typings/react/react.d.ts" />
import * as React from "react";

import * as Attributes from "./attributes";
import * as Skills from "./skills";

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

class StatTitle extends React.Component<React.Props<StatTitle>, {}> {
  render() {
    return (
      <div className="stat-title-box">
        <div className="stat-title">
          {this.props.children}
        </div>
      </div>
    );
  }
}

enum Column {
  Left,
  Right
}

interface StatBlockProps extends React.Props<StatBlock> {
  column: Column;
}

class StatBlock extends React.Component<StatBlockProps, {}> {
    render(): JSX.Element {
      return (
        <div className={"stat-block stat-column-" + Column[this.props.column].toLowerCase()}>
          {this.props.children}
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

class SkillHeading extends React.Component<{}, {}> {
  render() {
    return (
      <div className="skill-block-heading">
        <span>Skill</span>
        <span>RTG</span>
        <span>Type</span>
      </div>
    );
  }
}

class SkillDropDown extends React.Component<{}, {}> {
  render() {
    let optgroups: JSX.Element[] = [];
    for (let attribute of Attributes.attributes) {
      let options: JSX.Element[] = [];
      for (let skill of Skills.getSkillsByAttribute(attribute)) {
        options.push(
          <option value={skill.id.toString()}>{skill.displayName}</option>
        );
      }
      if (options.length)  {
        optgroups.push(
          <optgroup label={attribute.displayName}>
            {options}
          </optgroup>
        );
      }
    }
    return (
      <select required className="skill-dropdown">
        {optgroups}
      </select>
    );
  }
}

class Skill extends React.Component<React.Props<Skill>, {}> {
  render() {
    return (
      <div className="skill">
        <SkillDropDown />
        A/K
      </div>
    );
  }
}

class CharacterSheetPage extends React.Component<{}, {}> {
  render() {
    return (
      <div className="pdf-page">
        <div className="pdf-page-content">
          <Header />
          <Stats {...this.props} >
          </Stats>
          <Footer />
        </div>
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
      <StatBlock column={Column.Left}>
        <StatTitle>PERSONAL DATA</StatTitle>
      </StatBlock>
      <StatBlock column={Column.Left}>
        <StatTitle>ATTRIBUTES</StatTitle>
      </StatBlock>
      <StatBlock column={Column.Left}>
        <StatTitle>SKILLS</StatTitle>
        <div className="skill-block">
          <SkillHeading />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <SkillHeading />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </StatBlock>
      <StatBlock column={Column.Left}>
        <StatTitle>IDS / LIFESTYLES / CURRENCY</StatTitle>
      </StatBlock>
      <StatBlock column={Column.Right}>
        <StatTitle>CORE COMBAT INFO</StatTitle>
      </StatBlock>
      <StatBlock column={Column.Right}>
        <StatTitle>CONDITION MONITOR</StatTitle>
      </StatBlock>
      <StatBlock column={Column.Right}>
        <StatTitle>QUALITIES</StatTitle>
      </StatBlock>
      <StatBlock column={Column.Right}>
        <StatTitle>CONTACTS</StatTitle>
      </StatBlock>
    </CharacterSheetPage>
    <CharacterSheetPage>
      <StatBlock column={Column.Left}>
        <StatTitle>RANGED WEAPONS</StatTitle>
      </StatBlock>
      <StatBlock column={Column.Left}>
        <StatTitle>ARMOR</StatTitle>
      </StatBlock>
      <StatBlock column={Column.Left}>
        <StatTitle>AUGMENTATIONS</StatTitle>
      </StatBlock>
      <StatBlock column={Column.Left}>
        <StatTitle>GEAR</StatTitle>
      </StatBlock>
      <StatBlock column={Column.Right}>
        <StatTitle>MELEE WEAPONS</StatTitle>
      </StatBlock>
      <StatBlock column={Column.Right}>
        <StatTitle>CYBERDECK</StatTitle>
      </StatBlock>
      <StatBlock column={Column.Right}>
        <StatTitle>VEHICLE</StatTitle>
      </StatBlock>
      <StatBlock column={Column.Right}>
        <StatTitle>
          SPELLS / PREPARATIONS
          <br />
          RITUALS / COMPLEX FORMS
        </StatTitle>
      </StatBlock>
      <StatBlock column={Column.Right}>
        <StatTitle>
          ADEPT POWERS <span className="stat-title-small-caps">or</span> OTHER ABILITIES
        </StatTitle>
      </StatBlock>
    </CharacterSheetPage>
  </CharacterSheet>,
  document.getElementById("character-sheet")
);
