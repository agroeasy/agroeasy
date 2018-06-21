import React from 'react';
import './index.css';
import AppTop from './Topbar';
import {AppBody} from './Body.js';
import AppButtom from './constant.js';


class App extends React.Component {
  render() {
    return (
               <div>                                                           
                      <AppTop />
                      <AppBody />
                      <AppButtom />
               </div>
    );
  }
}

export default App;
