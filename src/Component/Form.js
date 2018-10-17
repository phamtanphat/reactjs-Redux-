import React, { Component } from 'react';
import {connect} from 'react-redux';
class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            txtEn : '',
            txtVn : ''
        }
        this.addWord = this.addWord.bind(this);
    }
    addWord(){
        const { txtEn , txtVn  } = this.state;
        const { onaddWord } = this.props;
        const word = {
            id : Date.now() + '',
            en : txtEn,
            vn : txtVn,
            isMemorized : false
        }
        onaddWord(word);
        this.setState({txtEn : '' , txtVn : ''});
    }
    render(){
        const { txtEn , txtVn } = this.state;
        const { dispatch } = this.props;
        if(!this.props.shouldShowForm) return (
            <button 
                className="btn btn-success"
                style={{width : 200 ,margin : 10}}
                onClick={() =>  dispatch({type : 'TOGGLE_FORM'})}>
                        +
            </button>
        );
        return (
            <div className="form-group word-from" >
                <input
                    placeholder="English"
                    className="form-control"
                    value={txtEn}
                    onChange={evt => this.setState({txtEn : evt.target.value})}/>
                <br />
                <input
                    placeholder="Vietnamese"
                    className="form-control"
                    value={txtVn}
                    onChange={evt => this.setState({txtVn : evt.target.value})}/>
                <br />
                <div className="btn-container">
                    <button 
                        className="btn btn-success"
                        onClick={()=>{
                            const word = {
                                id : Math.random() + '',
                                en : txtEn,
                                vn : txtVn,
                                isMemorized : false
                            }
                            dispatch({type : 'ADD_WORD' , word : word})
                            this.setState({txtEn : '' ,txtVn : ''});
                        }}>
                        Add word
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => dispatch({type : 'TOGGLE_FORM'})}>
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
}

const mapstate = state => ({shouldShowForm : state.shouldShowForm});
export default connect(mapstate)(Form);