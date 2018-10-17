import React, { Component } from 'react';
import Word from './Word.js';
import Form from './Form.js';
import Filter from './Filter.js';
import {connect} from 'react-redux';

class List extends Component{
    get FilterWord(){
        return(
        this.props.words.filter(w => {
            if(this.props.filterMode === 'Show_Memoried' && !w.isMemorized) return false; 
            if(this.props.filterMode === 'Show_Forgot' && w.isMemorized) return false;
            return true;    
        }));
       
    }
    render(){
        return(
                <div>
                <Form />
                <br/>
                <Filter/>
                {this.FilterWord.map(w => 
                    <Word
                         word={w} 
                         key={w.id}/>)}
            </div>
        );
    }
}

const mapstate = state => ({words : state.words , filterMode : state.filterMode});
 
export default connect(mapstate)(List);