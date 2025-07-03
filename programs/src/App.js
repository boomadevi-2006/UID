import logo from './logo.svg';
import './App.css';
let angle = 0;
function App() {
  var ctext = () => {
            let greet = document.getElementById("header");
            greet.innerHTML = (greet.innerHTML === "HELLO BOOMA") ? "HI BOOMA" : "HELLO BOOMA";
            
        }
        var ccolor= () =>{
            let c=document.getElementById("header");
            c.style.color = (c.style.color === "green") ? "red" : "green";   
        } 
        const crotate=()=>{
          let myimg=document.getElementById("myimg");
    myimg.style.transform = (myimg.style.transform === "rotate(-360deg)")? "rotate(0deg)":"rotate(-360deg)"
    myimg.style.transition = 'transform 1s  linear';
        }
          const changeStyle = () => {
    const text = document.getElementById('myText');
    text.style.fontSize = (text.style.fontSize==='30px')?"50px":"30px";
  };
  
  const findLargest = () => {
    const a = [12, 45, 7, 89, 32, 100, 54];
    let l = a[0];

    for (let i = 1; i < a.length; i++) {
      if (a[i] > l) {
        l = a[i];
      }
    }
    document.getElementById("Result").innerText = `The largest number is: ${l}`;
  };
  return (
    <div>
      <h1>Java script pgm to chage the content of HTML code by a click on button</h1>
       <h2 id="header">HELLO BOOMA</h2>
    <button onClick={ctext}>change text</button>
    <button onClick={ccolor}>change color</button>
    <h1>Javascript pgm to change source attribute of an image by click on button in react</h1>
    <img id="myimg" border='0' src={logo} width="200" />
    <button onClick={crotate}>rotate</button>
    <h1>Javascript pgm to change CSS style element by click on button</h1>
          <h2 id="myText">Hello Boomadevi</h2>
      <button onClick={changeStyle}>Change Style</button>
      <h1>Java script pgm to find largest number in array</h1>
      <button onClick={findLargest}>Find Largest</button>
      <p id="Result"></p>
    </div>
  );
}

export default App;
