import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

class SearchBarToggle extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
  
      this.props.onClick(e);
    }
  
    render() {
      return (
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-0 rounded-left" onClick={this.handleClick} onChange={this.props.onSearchBarChange}/>
        </Form>
      );
    }
}

export default SearchBarToggle;