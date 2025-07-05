import './App.css';

function App() {
  class Header{
    constructor(){
      this.color="red";
    }
    changeColor=()=>{
      document.getElementById("demo").innerHTML+=this.color;
    }
  }
  const myheader=new Header();
  window.addEventListener("load",()=>{
    myheader.changeColor();
  document.getElementById("btn").addEventListener("click",myheader.changeColor);
  });
  return (
    <div>
      <button id="btn">Click me</button>
      <div id="demo"></div>
    </div>
  );
}

export default App;
