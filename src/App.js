import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {useState}from'react';
function App() {
  const[contador, setContador] = useState(0);
  function increment(){
   setContador(contador+1);
  }

  /*
  let contador = 0;
  function Increment(){
    contador++;
    console.log(contador);
  }
    */

  return (
    <div className="App">
      <Header tile="Header Param"/>
      <header className="App-header"/>

        <img src={logo} className="App-logo" alt="logo" />
      
        <p>{contador}</p> cliques!
        <button onClick={increment}>Cliques!!!!</button>

    </div>
  );
}

export default App;
