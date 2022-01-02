import React, { Component } from 'react';
import ToggleLanguage from './ToggleLanguage';
import { MyContext } from '../context/Mycontext';

const language = ['Javascript', 'Python'];
// export const MyContext = React.createContext(null);
export class ClassContext extends Component {
  render() {
    return (
      <div>
        <h3>Task for learning context api in class components.</h3>
        <MyContext.Provider value={language}>
          <ToggleLanguage />
        </MyContext.Provider>
      </div>
    );
  }
}

export default ClassContext;
