"use client";

import React, { useState } from "react";

// Mock Data
const mockData = [
  {
    id: "qsw4523eds2wefw",
    title: "Card Payment",
    dateAdded: "05/11/2022 4:40 PM (PST)",
  },

  {
    id: "qsw4523eds2wefw1",
    title: "GCash",
    dateAdded: "05/12/2022 4:40 PM (PST)",
  },

  {
    id: "qsw4523eds2wefw2",
    title: "Cash",
    dateAdded: "05/13/2022 4:40 PM (PST)",
  },
];

const PaymentOption = () => {
  const [data, setData] = useState(mockData);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const handleDelete = (id: string) => {
    const filteredData = mockData.filter((item) => item.id !== id);
    setData(filteredData);
  };

  const handleAdd = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    const newData = [...data, { id: newId, title: newTitle, dateAdded: new Date().toLocaleString() }];
    setData(newData);
    setModalOpen(false);
    setNewTitle("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.table}>
         {data.map((item) => (
          <div key={item.id} style={styles.row}>
            <div style={styles.details}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.description}>ID: <span>{item.id}</span></p>
              <p style={styles.description}>Date Added: {item.dateAdded}</p>
            </div>

            <div style={styles.actions}>
              <button style={styles.menuButton} onClick={() => setMenuOpen(menuOpen === item.id ? null : item.id)}>⋮</button>
              {menuOpen === item.id && (
                <div style={styles.dropdown}>
                  <div style={styles.dropdownItem} onClick={() => console.log("Edit", item.id)}>Edit</div>
                  <div style={styles.dropdownItem} onClick={() => handleDelete(item.id)}>Delete</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <button style={styles.addButton} onClick={() => setModalOpen(true)}>+</button>
      {modalOpen && (
        <div style={styles.modal}>
            <div style={styles.modalContent}>
            <h2 style={styles.modalTitle}>Add Payment Option</h2>
            <input style={styles.modalInput} type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Title" />
            <button style={styles.modalAddButton} onClick={handleAdd}>Add</button>
            <button style={styles.modalCancelButton} onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
        </div>
    )}
</div>
);

};

const styles = {
  container: { 
    display: "flex", 
    padding: "20px",
    
  },

  table: { 
    display: "flex", 
    flexDirection: "column", 
    gap: "10px",
    width: "100%",
  },

  row: { 
    display: "flex", 
    background: "#fff", 
    padding: "15px",
    borderRadius: "8px", 
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
    position: "relative",
    height: "auto", 
  },
  
  details: { 
    flex: 1,
    marginBottom: "10px", 
  },

  title: { 
    fontSize: "26px", 
    fontWeight: "semibold", 
    marginBottom: "30px"
  },

  description: { 
    fontSize: "16px", 
    fontWeight: "light",
  },

  actions: { 
    position: "absolute", 
    right: "15px", 
    top: "15px" 
  },

  menuButton: { 
    background: "transparent", 
    border: "none", 
    cursor: "pointer", 
    fontSize: "20px",
    fontWeight: "900",
  },

  dropdown: { 
    position: "absolute", 
    right: "0", 
    background: "#fff", 
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", 
    borderRadius: "4px", 
    padding: "5px", 
    display: "flex", 
    flexDirection: "column",
  },

  dropdownItem: { 
    padding: "8px", 
    cursor: "pointer", 
    borderBottom: "1px solid #eee" 
  },

  addButton: {
    position: "absolute",
    right: "20px",
    bottom: "60px",
    background: "#4CAF50",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "24px",
    fontWeight: "bold",
  },

  modal: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },

  modalTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  modalInput: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
  },

  modalAddButton: {
    background: "#4CAF50",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },

  modalCancelButton: {
    background: "#E74C3C",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default PaymentOption;