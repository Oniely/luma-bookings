"use client";

import React, { useState } from "react";
import { Room, Transaction } from "@/lib/types";
import AdminRoomCard from "./AdminRoom/AdminRoomCard";
import AdminBookingCard from "./AdminBookings/AdminBookings";

// Mock Data
// const mockData = [
//   {
//     id: "qsw4523eds2wefw",
//     title: "San Monica estate",
//     image: "/src/assets/test-bg.jpg",
//     location: "SFBay, San Francisco, Financial District",
//     price: "$75",
//     dateAdded: "05/11/2022 4:40 PM (PST)",
//     host: {
//       name: "Frank Williams",
//       email: "frankie@leafsy.com",
//       phone: "(412) 436-7221",
//       avatar: "/frank.jpg",
//     },
//   },
//   {
//     id: "qsw4523eds2wefw1",
//     title: "New York estate",
//     image: "/test-bg.jpg",
//     location: "New York, Manhattan",
//     price: "$100",
//     dateAdded: "05/12/2022 4:40 PM (PST)",
//     host: {
//       name: "John Doe",
//       email: "john.doe@example.com",
//       phone: "(123) 456-7890",
//       avatar: "/john.jpg",
//     },
//   },
//   {
//     id: "qsw4523eds2wefw2",
//     title: "Los Angeles estate",
//     image: "/test-bg.jpg",
//     location: "Los Angeles, California",
//     price: "$80",
//     dateAdded: "05/13/2022 4:40 PM (PST)",
//     host: {
//       name: "Jane Doe",
//       email: "jane.doe@example.com",
//       phone: "(987) 654-3210",
//       avatar: "/jane.jpg",
//     },
//   },
// ];

const ManageBookings = ({ roomData }: { roomData: Transaction[] }) => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState(roomData);
    const [nameFilter, setNameFilter] = useState("");
    const [dateAddedFilter, setDateAddedFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        const filteredData = roomData.filter((item) =>
            item.reservation_id.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setData(filteredData);
    };

    const handleNameFilterChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setNameFilter(e.target.value);
        const filteredData = roomData.sort((a, b) => {
            if (e.target.value === "asc") {
                return a.reservation_id.localeCompare(b.reservation_id);
            } else if (e.target.value === "desc") {
                return b.reservation_id.localeCompare(a.reservation_id);
            } else {
                return 0;
            }
        });
        setData(filteredData);
    };

    // const handlePriceFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //   setPriceFilter(e.target.value);
    //   const filteredData = roomData.sort((a, b) => {
    //     if (e.target.value === "asc") {
    //       return a.room_price.localeCompare(b.room_price);
    //     } else if (e.target.value === "desc") {
    //       return b.price.localeCompare(a.price);
    //     } else {
    //       return 0;
    //     }
    //   });
    //   setData(filteredData);
    // };

    // const handleDelete = (id: string) => {
    //   const filteredData = mockData.filter((item) => item.id !== id);
    //   setData(filteredData);
    // };

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

                    <select
                        value={nameFilter}
                        onChange={() => {}}
                        style={{
                            padding: "8px",
                            width: "200px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            marginLeft: "10px",
                        }}
                    >
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>

                    <select
                        value={dateAddedFilter}
                        onChange={() => {}}
                        style={{
                            padding: "8px",
                            width: "200px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            marginLeft: "10px",
                        }}
                    >
                        <option value="asc">Latest</option>
                        <option value="desc">Oldest</option>
                    </select>

                    <select
                        value={priceFilter}
                        onChange={() => {}}
                        style={{
                            padding: "8px",
                            width: "200px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            marginLeft: "10px",
                        }}
                    >
                        <option value="asc">Lowest to Highest</option>
                        <option value="desc">Higest to Lowest</option>
                    </select>
                </div>

                <div style={styles.table as React.CSSProperties}>
                    {data.map((item) => (
                        <AdminBookingCard
                            key={item.reservation_id}
                            room_id={item.room_id}
                            reservation_date_end={item.reservation_date_end}
                            reservation_date_start={item.reservation_date_start}
                            reservation_id={item.reservation_id}
                            reservation_payment_amount={item.reservation_payment_amount}
                            reservation_payment_type={item.reservation_payment_type}
                            reservation_status={item.reservation_status}
                            user_id={item.user_id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageBookings;

const styles = {
    container: {
        display: "flex",
        padding: "20px",
    },

    sidebar: {
        width: "250px",
        background: "#f8f4f0",
        padding: "20px",
        borderRadius: "8px",
        marginRight: "20px",
    },

    menu: {
        listStyle: "none",
        padding: 0,
    },

    menuItem: {
        padding: "10px 0",
        cursor: "pointer",
        fontWeight: "bold",
    },

    content: {
        flex: 1,
    },

    searchBar: {
        marginBottom: "10px",
    },

    searchInput: {
        padding: "8px",
        width: "100%",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },

    table: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
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

    image: {
        width: "100px",
        height: "100px",
        borderRadius: "4px",
        marginRight: "10px",
    },

    details: {
        flex: 1,
    },

    host: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },

    actions: {
        position: "absolute",
        right: "15px",
        top: "15px",
    },

    menuButton: {
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
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
        borderBottom: "1px solid #eee",
    },
};
