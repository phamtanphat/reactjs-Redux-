import React, { Component } from 'react';
import { connect } from 'react-redux';
import Child from './Child';
class Parent extends Component {
   
    render() {
        return (
            <div>
                <h3>Value :  {this.props.count} </h3>
                <Child />
            </div>
        );
    }
}
export default connect(state => ({ count : state.count}))(Parent);