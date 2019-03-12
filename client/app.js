import React from "react";
import ReactDOM from "react-dom";

function helloWorld() {
  return React.createElement("h1", null, "Hello World");
}

function createElement() {
  return React.createElement("div", null, "createElement");
}

class Component extends React.Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

class PureComponent extends React.PureComponent {
  render() {
    return <div>{this.props.name}</div>;
  }
}

const createFunctionalComponent = name => <div>{name}</div>;

class MainComponent extends React.Component {
  render() {
    return (
      <>
        {helloWorld()}
        {createElement()}
        <Component name="Component" />
        <PureComponent name="PureComponent" />
        {createFunctionalComponent("functional component")}
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MainComponent />, rootElement);
