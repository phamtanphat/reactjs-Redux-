import React , {Component} from 'react';
import {connect} from 'react-redux';
//stateless component
//functional component
// export function Word(){
//     return(
//         <div>
//             <h3>One</h3>
//             <p3>Mot</p3>
//         </div>
//     );
// }
// const Word = (props) =>{
//     return(
//         <div>
//             <h3 style={{color : props.wordinfo.isMemorized ? 'green' : 'red'}}>
//                 {props.wordinfo.en}
//             </h3>
//             <p3>Mot</p3>
//         </div>
//     );
// }
// export default Word;

class Word extends Component{

    render(){
        const { word , dispatch} = this.props;
        return(
            <div className="word" key={word.id}>
                <div className="word-container">
                <h3 className="text-success">{word.en}</h3>
                <h3 className="text-danger">
                    {word.isMemorized ? '----' : word.vn}
                </h3>
                </div>
                <div className="btn-container">
                <button 
                    className={word.isMemorized ? 'btn btn-danger' : 'btn btn-success'}
                    onClick={() => dispatch({type : 'TOGGLE_WORD' , id : word.id})}>
                    {word.isMemorized ? 'Forgot' : 'Memoried'}
                </button>
        
                <button 
                    className="btn btn-warning"
                    onClick={() => dispatch({type : 'REMOVE_WORD' , id : word.id})}>
                    Remove
                </button>
                </div>
            </div>
        );
    }
}

export default connect()(Word);