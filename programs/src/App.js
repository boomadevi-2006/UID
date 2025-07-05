import logo from './logo.svg';
import './App.css';

function App() {
  var ctext = () => {
    let greet = document.getElementById("header");
    greet.innerHTML = (greet.innerHTML === "HELLO BOOMA") ? "HI BOOMA" : "HELLO BOOMA";
  };

  var ccolor = () => {
    let c = document.getElementById("header");
    c.style.color = (c.style.color === "green") ? "red" : "green";
  };

  const crotate = () => {
    let myimg = document.getElementById("myimg");
    myimg.style.transform = (myimg.style.transform === "rotate(-360deg)") ? "rotate(0deg)" : "rotate(-360deg)";
    myimg.style.transition = 'transform 1s linear';
  };

  const changeStyle = () => {
    const text = document.getElementById('myText');
    text.style.fontSize = (text.style.fontSize === '30px') ? "50px" : "30px";
  };

  const findLargest = () => {
    const input = document.getElementById("inputNumbers").value;
    const str = input.split(',');
    const numbers = str.map(num => parseFloat(num.trim())).filter(n => !isNaN(n));
    if (numbers.length === 0) {
      document.getElementById("Result").innerText = "Please enter valid numbers";
      return;
    }
    let l = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > l) {
        l = numbers[i];
      }
    }
    document.getElementById("Result").innerText = `The largest number is: ${l}`;
  };

  const appendValue = (val) => {
    document.getElementById("calcDisplay").value += val;
  };

  const clearDisplay = () => {
    document.getElementById("calcDisplay").value = "";
  };

  const calculate = () => {
    try {
      let result = Function('"use strict";return (' + document.getElementById("calcDisplay").value + ')')();
      document.getElementById("calcDisplay").value = result;
    } catch (e) {
      document.getElementById("calcDisplay").value = "Error";
    }
  };

  const addTodo = () => {
    const input = document.getElementById("todoInput");
    const task = input.value.trim();
    if (task === "") return;

    const list = document.getElementById("todoList");
    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = () => list.removeChild(li);

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
  };

  return (
    <div>
      {/* Section 1: Text + Color Change */}
      <div className="section-container">
        <h1>JavaScript program to change the content by button click</h1>
        <h2 id="header">HELLO BOOMA</h2>
        <button onClick={ctext}>Change Text</button>
        <button onClick={ccolor}>Change Color</button>
      </div>

      {/* Section 2: Image Rotate */}
      <div className="section-container">
        <h1>Rotate image by button</h1>
        <img id="myimg" src={logo} width="200" alt="logo" />
        <button onClick={crotate}>Rotate</button>
      </div>

      {/* Section 3: Change Font Style */}
      <div className="section-container">
        <h1>Change CSS style on click</h1>
        <h2 id="myText">Hello Boomadevi</h2>
        <button onClick={changeStyle}>Change Style</button>
      </div>

      {/* Section 4: Find Largest Number */}
      <div className="section-container">
        <h1>Find Largest Number</h1>
        <input type="text" id="inputNumbers" placeholder="Enter numbers separated by comma" />
        <button onClick={findLargest}>Find Largest</button>
        <p id="Result"></p>
      </div>

      {/* Section 5: Simple Calculator */}
      <div className="section-container">
        <h1>Simple Calculator</h1>
        <div className="calculator">
          <input type="text" id="calcDisplay" className="display" readOnly />
          <div className="buttons">
            <button onClick={() => appendValue('7')}>7</button>
            <button onClick={() => appendValue('8')}>8</button>
            <button onClick={() => appendValue('9')}>9</button>
            <button onClick={() => appendValue('+')}>+</button>

            <button onClick={() => appendValue('4')}>4</button>
            <button onClick={() => appendValue('5')}>5</button>
            <button onClick={() => appendValue('6')}>6</button>
            <button onClick={() => appendValue('-')}>-</button>

            <button onClick={() => appendValue('1')}>1</button>
            <button onClick={() => appendValue('2')}>2</button>
            <button onClick={() => appendValue('3')}>3</button>
            <button onClick={() => appendValue('*')}>×</button>

            <button onClick={clearDisplay}>C</button>
            <button onClick={() => appendValue('0')}>0</button>
            <button onClick={calculate}>=</button>
            <button onClick={() => appendValue('/')}>÷</button>
          </div>
        </div>
      </div>

      {/* Section 6: To-Do List */}
      <div className="section-container">
        <h1>Simple To-Do List</h1>
        <input type="text" id="todoInput" placeholder="Enter a task" />
        <button onClick={addTodo}>Add Task</button>
        <ul id="todoList"></ul>
      </div>
    </div>
  );
}

export default App;
