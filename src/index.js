import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './css/style.css';
import './css/style.scss';

const Main = class Main extends Component {
  render() {
    return (
      <div className={'test'}>

        <div className={'scss'}>
          Scss test
        </div>

        <div className={styles.postcss}>
          Postcss test
        </div>

      </div>
    );
  }
};

ReactDOM.render(<Main />, document.getElementById('react-root'));
