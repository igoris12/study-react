import React, { Component } from 'react';
import { MyContext } from '../context/Mycontext';

export class ToggleLanguage extends Component {
  constructor() {
    super();
    this.state = { language: 0 };
    this.languageHandler = this.languageHandler.bind(this);
  }

  languageHandler(state) {
    state == 0
      ? this.setState({ language: 1 })
      : this.setState({ language: 0 });
  }

  render() {
    const value = this.context;

    return (
      <>
        <p>
          The best language is <strong>"{value[this.state.language]}"</strong>
        </p>
        <button
          className="but"
          onClick={() => this.languageHandler(this.state.language)}
        >
          Change language
        </button>
      </>
    );
  }
}
ToggleLanguage.contextType = MyContext;

export default ToggleLanguage;
