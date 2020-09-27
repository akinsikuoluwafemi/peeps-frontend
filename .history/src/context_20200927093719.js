import React, { Component, createContext } from "react";

const RequestContext = createContext();

class RequestProvider extends Component {
  state = {
    showChat: null
    
    
  };


 



  
  

  
  

  render() {
    
    
    return (
      <RequestContext.Provider
        value={{
          ...this.state,
          
        }}
      >
        {this.props.children}
      </RequestContext.Provider>
    );
  }
}

const RequestConsumer = RequestContext.Consumer;

export { RequestProvider, RequestConsumer, RequestContext };
