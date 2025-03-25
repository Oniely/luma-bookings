"use client";

import React, { useState } from "react";
import Events from "@/components/AdminUI/Events";
import Packages from "@/components/AdminUI/Packages";
import PaymentOption from "@/components/AdminUI/PaymentOption";

const otherSettings = () => {
    const [activeMenu, setActiveMenu] = useState("events");
  
    const handleMenuClick = (menu: string) => {
      setActiveMenu(menu);
    };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <ul style={styles.menu}>
          <li style={styles.menuItem} onClick={() => handleMenuClick("events")}>
            Events
          </li>
          <li style={styles.menuItem} onClick={() => handleMenuClick("packages")}>
            Packages
          </li>
          <li
            style={styles.menuItem}
            onClick={() => handleMenuClick("paymentOptions")}
          >
            Payment Options
          </li>
        </ul>
        </div>
        
        {activeMenu === "events" && (
          <div style={styles.content}>
            <Events/>
          </div>
        )}

        {activeMenu === "packages" && (
          <div style={styles.content}>
            <Packages/>
          </div>
        )}

        {activeMenu === "paymentOptions" && (
          <div style={styles.content}>
            <PaymentOption />
          </div>
        )}

    </div>
  );
};

export default otherSettings;

const styles = {
    container: { 
      display: "flex", 
      padding: "20px" 
    },
  
    sidebar: { 
      height: "95vh",
      width: "400px", 
      background: "#f8f4f0", 
      padding: "20px", 
      borderRadius: "8px", 
      marginRight: "20px", 
    },
  
    menu: { 
      listStyle: "none", 
      padding: 0 
    },
  
    menuItem: { 
      padding: "10px", 
      cursor: "pointer", 
      fontWeight: "bold" 
    },

    content: {
        width: "100%",
        height: "100%",
        overflow: "auto",
      },
};