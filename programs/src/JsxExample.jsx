import React from 'react'

const JsxExample = () => {
  const num1 = 10;
  const num2 = 5;
  const sum = num1 + num2;
    setInterval(() => {
      const element = document.getElementById("clock");
      if (element) {
        element.innerText = `It is ${new Date().toLocaleTimeString()}`;
      }
    }, 1000);

  return (
    <div>
      
        <h1>Simple JSX Code </h1>
         <p>Addition of {num1} + {num2} = {sum}</p>
         <h1>Ternary operator</h1>
         <p>{sum > 0 ? "Sum is positive" : "Sum is zero or negative"}</p>
         <h1>Create Attribute of a class</h1>
         <h2 className="heading">Welcome to Sample project</h2>
      <p className="description">there is output of the program</p>
      <h1>Timer Application</h1>
      <h2 id="clock">It is --:--:--</h2>
    </div>
  )
}

export default JsxExample