"use client";

import React, { useState } from "react";

// Mock Data
const mockData = [
  {
    title: "Event 1",
    description: "this is event 1",
    price: "900",
    dates: "05/11/2022",
    id: "qsw4523eds2wefw",
    dateAdded: "05/11/2022 4:40 PM (PST)",
  },

  {
    title: "Event 2",
    description: "this is event 2",
    price: "1900",
    dates: "05/21/2022",
    id: "qsw4523eds2wefp",
    dateAdded: "05/12/2022 4:40 PM (PST)",
  },

  {
    title: "Event 3",
    description: "this is event 3",
    price: "2900",
    dates: "05/09/2022",
    id: "qsw4523eds2wefw2",
    dateAdded: "05/13/2022 4:40 PM (PST)",
  },
];

const Events = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(mockData);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrices, setNewPrices] = useState("");
  const [newDates, setNewDates] = useState("");

const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value);
  const filteredData = mockData.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
  setData(filteredData);
};

const handleAdd = () => {
  const newId = Math.random().toString(36).substr(2, 9);
  const newData = [...data, { id: newId, title: newTitle, dateAdded: new Date().toLocaleString() }];
  setData(newData);
  setModalOpen(false);
  setNewTitle("");
};

const handleDelete = (id: string) => {
  const filteredData = mockData.filter((item) => item.id !== id);
  setData(filteredData);
};

return (
  <div style={styles.container}>
    <div style={styles.content}>
      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search properties"
          value={search}
          onChange={handleSearchChange}
          style={styles.searchInput}
        />
      </div>

      {/* tables */}
      <div style={styles.table}>
        {data.map((item) => (
        // list of items
          <div key={item.id} style={styles.row}>
            <div style={styles.details}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.description}><span>{item.description}</span></p>
              <p style={styles.description}>Dates: <span>{item.dates}</span></p>
              <p style={styles.description}>Price: <span>{item.price}</span></p>
            </div>

            <div style={styles.info}>
              <p style={styles.description}>ID: {item.id}</p>
              <p style={styles.description}>Date Added: {item.dateAdded}</p>
            </div>
            
            {/* action button */}
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
            <h2 style={styles.modalTitle}>Add Events</h2>
            <input style={styles.modalInput} type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Title" />

            <input style={styles.modalInput} type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Description" />

            <input style={styles.modalInput} type="text" value={newPrices} onChange={(e) => setNewPrices(e.target.value)} placeholder="Prices" />

            <input style={styles.modalInput} type="text" value={newDates} onChange={(e) => setNewDates(e.target.value)} placeholder="Dates" />
            
            <button style={styles.modalAddButton} onClick={handleAdd}>Add</button>
            <button style={styles.modalCancelButton} onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
        </div>
    )}

    </div>
  </div>
);
};

export default Events;

const styles = {
  container: { 
    display: "flex", 
    padding: "20px",
  },

  content: { 
    flex: 1 
  },

  searchBar: { 
    marginBottom: "10px",
  },

  searchInput: { 
    padding: "8px", 
    width: "100%", 
    borderRadius: "8px", 
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
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

  info: { 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "flex-start", 
    textAlign: "left",
    paddingRight: "50px",
    paddingTop: "50px",
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
