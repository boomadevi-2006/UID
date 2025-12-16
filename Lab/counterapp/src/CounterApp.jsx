// CounterApp.jsx
import React, { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("1");

  const parse = (s) => {
    if (s === "" || s === "-") return 0;
    const n = parseInt(s, 10);
    return Number.isNaN(n) ? 0 : n;
  };

  const step = parse(input);

  const onInputChange = (e) => {
    const val = e.target.value;
    if (/^-?\d*$/.test(val)) {
      setInput(val);
    }
  };

  const increment = () => setCount((p) => p + step);
  const decrement = () => setCount((p) => p - step);
  const reset = () => {
    setCount(0);
    setInput("1");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        maxWidth: 480,
        margin: "40px auto",
        padding: 20,
        border: "1px solid #eee",
        borderRadius: 10,
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
      }}
    >
      <h2 style={{ textAlign: "center", marginTop: 4 }}>Simple Counter</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 14,
          margin: "18px 0",
        }}
      >
        <button
          onClick={decrement}
          style={{
            width: 52,
            height: 52,
            fontSize: 22,
            borderRadius: 8,
            border: "1px solid #ddd",
            cursor: "pointer",
            background: "#fff",
          }}
        >
          -
        </button>
        <div
          style={{
            fontSize: 40,
            minWidth: 140,
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          {count}
        </div>
        <button
          onClick={increment}
          style={{
            width: 52,
            height: 52,
            fontSize: 22,
            borderRadius: 8,
            border: "1px solid #ddd",
            cursor: "pointer",
            background: "#fff",
          }}
        >
          +
        </button>
      </div>

      <label style={{ display: "block", marginBottom: 8, fontSize: 14 }}>
        Step (enter integer):
      </label>
      <input
        type="text"
        value={input}
        onChange={onInputChange}
        inputMode="numeric"
        pattern="-?[0-9]*"
        style={{
          width: "100%",
          padding: "8px 10px",
          fontSize: 16,
          boxSizing: "border-box",
          marginBottom: 12,
        }}
      />

      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={increment}
          style={{
            flex: 1,
            padding: "10px 12px",
            fontSize: 16,
            borderRadius: 8,
            border: "1px solid #ddd",
            cursor: "pointer",
            background: "#fff",
          }}
        >
          Increment
        </button>
        <button
          onClick={decrement}
          style={{
            flex: 1,
            padding: "10px 12px",
            fontSize: 16,
            borderRadius: 8,
            border: "1px solid #ddd",
            cursor: "pointer",
            background: "#fff",
          }}
        >
          Decrement
        </button>
        <button
          onClick={reset}
          style={{
            flex: 1,
            padding: "10px 12px",
            fontSize: 16,
            borderRadius: 8,
            border: "1px solid #ddd",
            cursor: "pointer",
            background: "#f7f7f7",
          }}
        >
          Reset
        </button>
      </div>

      <p style={{ marginTop: 12, fontSize: 13, color: "#444" }}>
        Current step value: <strong>{step}</strong>
      </p>
    </div>
  );
}
