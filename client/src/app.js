import React from "react";
import ReactDOM from "react-dom";

import styles from './app.scss';
//import styles from './App.css';
import styles2 from "./sample.less";

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
  render() {
    return (
      <div className={styles.ap9p}>
        {helloWorld()}
        {createElement()}
        <Component name="Component" />
        <PureComponent name="PureComponent" />
        {createFunctionalComponent("functional component")}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MainComponent />, rootElement);
