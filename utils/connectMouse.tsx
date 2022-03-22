import React from "react";
import ReactDOM from "react-dom";

function connectMouseEvents(Component) {
  class MouseConnection extends React.Component {
    constructor(props) {
      super(props);

      this.state = { numberOfClicks: 0 };
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
      ReactDOM.findDOMNode(this).addEventListener("click", this.handleClick);
    }

    componentWillUnmount() {
      ReactDOM.findDOMNode(this).removeEventListener("click", this.handleClick);
    }

    handleClick() {
      this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
      console.log("=========> numberOfClicks", this.state.numberOfClicks + 1);
    }

    render() {
      return (
        <Component
          handleClick={this.handleClick}
          {...this.props}
          {...this.state}
        />
      );
    }
  }

  return MouseConnection;
}

export default connectMouseEvents;
