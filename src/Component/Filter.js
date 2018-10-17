import React, { Component } from 'react';
import {connect} from 'react-redux';

class Filter extends Component{
    render(){
        const { filterMode , dispatch} = this.props;
        return(
            <select 
                    className="word"
                    value={filterMode}
                    onChange={evt => dispatch({type : 'SET_FILTER_MODE' , filterMode : evt.target.value}) }>
                    <option value="Show_All">Show All</option>
                    <option value="Show_Memoried">Show Memoried</option>
                    <option value="Show_Forgot">Show Forgot</option>
                </select>
        );
    }
}

const mapstate = state => ({filterMode : state.filterMode});
export default connect(mapstate)(Filter);