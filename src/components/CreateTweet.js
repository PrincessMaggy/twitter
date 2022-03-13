import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const CreateTweet = ({tweets, setTweets, userInput, setInput}) =>{

    //functions
    const inputHandle = (e) =>{
        setInput(e.target.value);
    };
    const submitTweet =(e) =>{
        e.preventDefault();
        setTweets([...tweets, {message:userInput, id: uuidv4() }]);
        setInput('');
    };
    return(
        <div>
            <h1> TWITTER LITE</h1>
            <form onSubmit={submitTweet}>
                <textarea 
                    value={userInput} 
                    onChange={inputHandle} 
                    cols='30' 
                    rows='10'
                ></textarea>
                <button> Submit</button>
            </form>
        </div>
    );

};
export default CreateTweet;
