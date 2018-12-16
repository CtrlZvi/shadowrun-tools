import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CharacterSheet from './components/5e/CharacterSheet';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <CharacterSheet />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
