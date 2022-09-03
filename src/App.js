
import './App.css';
import React from 'react';
import {useState} from 'react';
import Color from './components/Color';
import AddColor from './components/AddColor';

function App() {
  const [colors,setColors]= useState(["red","blue","purple"]);

  
  return (
    <div className="App">
      <AddColor colors={colors} setColors={setColors}/>
      <div className='hi' style={{display:"flex"}}>
      {
        colors.map((el,i)=>{
          return<h2  key={i}><Color color={el}/></h2>
        })
      }
      </div>
    </div>
  );
}

export default App;
