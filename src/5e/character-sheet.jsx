var data = {
  "character-name": "Wade Wilson",
  "player-name": "Chris Laubach",
  "notes": "Test",
  domNodes: []
}

let CharacterSheet = React.createClass({
  displayName: 'CharacterSheetPage',
  render: function() {
    return (
      <div className="pdf">
        <CharacterSheetPage id='character-sheet-front' />
        <CharacterSheetPage id='character-sheet-back' />
      </div>
    );
  }
});

let CharacterSheetPage = React.createClass({
  displayName: 'CharacterSheetPage',
  render: function() {
    return (
      <div id={this.props.id} className="pdf-page">
        <CharacterSheetPageContent background={this.props.id + '.png'} />
      </div>
    );
  }
});

let CharacterSheetPageContent = React.createClass({
  displayName: 'CharacterSheetPageContent',
  render: function() {
    return (
      <div className="pdf-page-content">
        <Background src={this.props.background} />
        <Header />
        <Footer />
      </div>
    );
  }
});

let Background = React.createClass({
  displayName: 'Background',
  render: function() {
    return (
      <img src={this.props.src} className="background" />
    )
  }
});

let Header = React.createClass({
  displayName: 'Header',
  render: function() {
    return (
      <header className="name">
        <HeaderField name='character-name' label={'CHARACTER'} line={'______________________'} />
        <HeaderField name='player-name' label={'PLAYER'} line={'_________________________'} />
        <HeaderField name='notes' label={'NOTES'} line={'__________________________'} />
      </header>
    );
  }
});

let HeaderField = React.createClass({
  displayName: 'HeaderField',
  handleChange: function(event) {
    data[this.props.name] = event.target.value;
    for (node of data.domNodes) {
      node.forceUpdate();
    }
  },
  componentDidMount: function(arg1, arg2, arg3){
    data.domNodes.unshift(this)
  },
  render: function() {
    return (
      <fieldset name={this.props.name}>
        <label>
          {this.props.label}<span className="line">{this.props.line}</span>
        </label>
        <input type="text" value={data[this.props.name]} onChange={this.handleChange} ref="input" />
      </fieldset>
    );
  }
});

let Footer = React.createClass({
  displayName: 'Footer',
  render: function() {
    return (
      <footer className="copyright">
        © 2013 The Topps Company, Inc. Shadowrun is a registered trademark of The Topps Company, Inc., in the United States and/or other countries. Permission given to copy for personal use.
      </footer>
    )
  }
});

React.render(
  <CharacterSheet />,
  document.getElementById('character-sheet')
);