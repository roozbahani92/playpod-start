import { forwardRef, useEffect, useRef } from "react";

const eventSubscribe = (Component) => {
  const EventReadHandler = (props) => {

    const rootRef = useRef(),
      handleEvent = (event) => {
        // Any event type we want to check
        if (event.type === "click") {
          // Do something and we can also remove the event from window.
          console.log(">>>Event:", event);
          // TraceSpan("button clicked", event);
        }
      },
      addEventListener = () => {
        // @ts-expect-error
        rootRef.current.addEventListener("click", handleEvent);
      },
      removeEventListener = () => {
        // @ts-expect-error
        rootRef.current.removeEventListener("click", handleEvent);
      };

    useEffect(() => {
      addEventListener();

      return () => removeEventListener;
    });

    // @ts-expect-error
    return <Component ref={rootRef} {...props} />;
  };

  return forwardRef((props, ref) => {
    return <EventReadHandler {...props} forwardedRef={ref} />;
  });
};

export { eventSubscribe };

// import React from "react";
// import ReactDOM from "react-dom";

// function eventSubscribe(Component) {
//   class EventReadHandler extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = { numberOfClicks: 0 };
//       this.handleClick = this.handleClick.bind(this);
//     }

//     componentDidMount() {
//       ReactDOM.findDOMNode(this).addEventListener("click", this.handleClick);
//     }

//     componentWillUnmount() {
//       ReactDOM.findDOMNode(this).removeEventListener("click", this.handleClick);
//     }

//     handleClick(event) {
//         // Any event type we want to check
//         if (event.type === "click") {
//           // Do something and we can also remove the event from window.
//           console.log(">>>Event:", event);
//           // TraceSpan("button clicked", event);
//         }
//       }

//     render() {
//       return <Component {...this.props} />;
//     }
//   }

//   return EventReadHandler;
// }

// export { eventSubscribe };
