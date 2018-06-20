import React from 'react';
import './index.css';
import {DashBoard} from './Dashboard.js';
import MyApp from './Topbar';
import NaviApp from './constant.js';


class App extends React.Component {
  render() {
    return (
               <div>                                                           
                      <MyApp />
                     <DashBoard />
                     <NaviApp />
               </div>
    );
  }
}

export default App;
