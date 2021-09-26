// Importing a ReactDom Project The React Library
import ReactDOM from 'react-dom';

import './index.css';
// Importing App.js from the app file which is a component
import App from './App.js';
// Second argument is a basic javascript HTML DOM from the .html file found in the public folder 
// The First argument is 
ReactDOM.render(<App />, document.getElementById('root'));
