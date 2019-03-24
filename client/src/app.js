import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './screens/mainPage';

//import styles from './app.scss';
import styles from './app.css';
//import styles2 from "./sample.less";

function helloWorld() {
  return React.createElement("h1", null, "Hello World");
}

function createElement() {
  return React.createElement("div", null, "createElement");
}

class Component extends React.Component {
  render() {
    return <div className={styles.app}>{this.props.name}</div>;
  }
}

class PureComponent extends React.PureComponent {
  render() {
    return <div className={styles2.header} >{this.props.name}</div>;
  }
}

const createFunctionalComponent = name => <div>{name}</div>;

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler() {
    console.log('onChangeHandler')
  };
  
  onClickHandler(event) {
    console.log('onClickHandler');
    console.log(event.keyCode);
  };
  
  render() {
    return (
      <div className={styles.app}>
        <MainPage></MainPage>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MainComponent />, rootElement);

/*

<div className={styles.ap2p}>
        {helloWorld()}
        {createElement()}
        <Component name="Component" />
        <PureComponent name="PureComponent" />
        {createFunctionalComponent("functional component")}
        <MainPage></MainPage>
      </div>
      */