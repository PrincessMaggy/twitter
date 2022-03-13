import React, { useState } from 'react';
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';
import './styles/App.css';


function App() {
  const [name, setName] = useState('Maggy');
  const [userInput, setInput] = useState('');
  const [tweets, setTweets] = useState ([]);
  return (
    <div className="App">

    <CreateTweet 
     userInput ={userInput}
     setInput ={setInput}
     tweets ={tweets}
     setTweets={setTweets}
    /> 
    <TweetList 
    name ={name}
    tweets = {tweets}
    setTweets ={setTweets} />

    </div>
  );
}

export default App;
