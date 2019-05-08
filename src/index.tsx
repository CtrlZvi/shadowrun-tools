import { configure } from 'mobx';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import CharacterCreator from './components/CharacterCreator';

configure({
    enforceActions: 'observed',
    computedRequiresReaction: true,
    isolateGlobalState: true,
});

ReactDOM.render(
    <StrictMode><CharacterCreator /></StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
