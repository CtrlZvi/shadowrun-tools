/// <reference path="../../../typings/react/react.d.ts" />
import * as React from "react";

interface IData {
  [index: string]: any;
  "character-name": string;
  "player-name": string;
  "notes": string;
  "domNodes": React.Component<IHeaderFieldProps, {}>[];
}

let data: IData = {
  "character-name": "Wade Wilson",
  "player-name": "Chris Laubach",
  "notes": "Test",
  domNodes: []
};

class Background extends React.Component<{}, {}> {
  props: {
    src: string;
  };
  render() {
    return (
      <img src={this.props.src} className="background" />
    );
  }
}

interface IHeaderFieldProps {
  name: string;
  label: string;
  line: string;
}

class HeaderField extends React.Component<IHeaderFieldProps, {}> {
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

class CharacterSheetPageContent extends React.Component<{}, {}> {
  props: {
    background: string
  };
  render() {
    return (
      <div className="pdf-page-content">
        <Background src={this.props.background} />
        <Header />
        <Footer />
      </div>
    );
  }
}

class CharacterSheetPage extends React.Component<{}, {}> {
  props: {
    id: string
  };
  render() {
    return (
      <div id={this.props.id} className="pdf-page">
        <CharacterSheetPageContent background={this.props.id + ".png"} />
      </div>
    );
  }
}

class CharacterSheet extends React.Component<{}, {}> {
  render() {
    return (
      <div className="pdf">
        <CharacterSheetPage id="character-sheet-front" />
        <CharacterSheetPage id="character-sheet-back" />
      </div>
    );
  }
}

React.render(
  <CharacterSheet />,
  document.getElementById("character-sheet")
);
