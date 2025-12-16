// ItemForm.jsx
import React, { useState } from "react";

export default function ItemForm() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    quantity: "",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.description || !form.quantity) {
      alert("Please fill in all fields");
      return;
    }

    const newItem = {
      id: Date.now(),
      name: form.name,
      description: form.description,
      quantity: parseInt(form.quantity, 10),
    };

    setItems([...items, newItem]);
    setForm({ name: "", description: "", quantity: "" }); // reset form
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Add Item</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Item Name"
          style={{ padding: "8px", fontSize: "14px" }}
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          style={{ padding: "8px", fontSize: "14px" }}
        />
        <input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          style={{ padding: "8px", fontSize: "14px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            background: "seagreen",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Item
        </button>
      </form>

      <h3>Items List</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> — {item.description} (Qty:{" "}
            {item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}
