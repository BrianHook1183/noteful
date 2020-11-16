import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  };

  // this logs errors to the console
  componentDidCatch(error, info) {
    console.log('the error from ErrorBoundary is: ', error);
    console.log('the info from ErrorBoundary is: ', info);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="ErrorBoundary">
          <h2>There was an error with a child component.</h2>
        </div>
      );
    };
    return this.props.children;
  };
};

export default ErrorBoundary;