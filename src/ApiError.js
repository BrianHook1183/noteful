import React from 'react';

class ApiError extends React.Component {
  state = { 
    hasError: false
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {      
      return (
        <h2>There was an error with the API.</h2>
      );
    }
    return this.props.children;
  }  
}
 
export default ApiError;