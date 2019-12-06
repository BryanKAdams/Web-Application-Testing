import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import ekko from './img/ekko.webp'
import Dashboard from './components/Dashboard';
import Display from './components/Display'

function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [score, setScore] = useState(0);
  const [someoneOnBaseOne, setSomeoneOnBaseOne] = useState("no");
  const [someoneOnBaseTwo, setSomeoneOnBaseTwo] = useState("no");
  const [someoneOnBaseThree, setSomeoneOnBaseThree] = useState("no");

  const strike = () => {
    if(strikes === 2) {
      setStrikes(0);
      setBalls(0);
    }else{
      setStrikes(strikes + 1);
    }
  }
  const ball = () => {
    if(balls === 3){
      setBalls(0);
      setStrikes(0);
    }else{
      setBalls(balls + 1);
    }
  };

  const foul = () => {
    if(strikes === 2){
      setStrikes(2);
    }else{
      setStrikes(strikes + 1);
    }
  };

  const hit = () => {
    setStrikes(0);
    setBalls(0);
    setSomeoneOnBaseOne("yes");
    if(someoneOnBaseOne === "yes"){
      setSomeoneOnBaseTwo("yes")
    }
    if(someoneOnBaseTwo === "yes" && someoneOnBaseOne === "no"){
      setSomeoneOnBaseThree("yes")
      setSomeoneOnBaseTwo("no")
    }
    if(someoneOnBaseTwo ==="yes" && someoneOnBaseOne === "yes"){
      setSomeoneOnBaseThree("yes")
    }
   if(someoneOnBaseThree === "yes"){
      setScore(score + 1);
    }
  };
  const double = () => {
    setStrikes(0);
    setBalls(0);
    setSomeoneOnBaseTwo("yes");
  
  };  const triple = () => {
    setSomeoneOnBaseThree("yes");
    setStrikes(0);
    setBalls(0);

  };  const homerun = () => {
    setStrikes(0);
    setBalls(0);
    setScore(score + 1)
    };


  return (
    <div className="App">
      <Display strikes={strikes} balls={balls}  score={score} someoneOnBaseOne={someoneOnBaseOne} someoneOnBaseTwo={someoneOnBaseTwo} someoneOnBaseThree={someoneOnBaseThree} />
      <Dashboard ball={ball} strike={strike} foul={foul} hit={hit} double={double} triple={triple} homerun={homerun} />

  
    </div>
  );
}

export default App;
