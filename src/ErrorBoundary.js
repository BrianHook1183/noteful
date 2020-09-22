import React from 'react';

class ErrorBoundary extends React.Component {
  state = { 
    hasError: false
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {      
      return console.log('ErrorBoundary ran') (<h2>There was an error with a child component.</h2>);
    }
    return this.props.children;
  }  
}
 
export default ErrorBoundary;