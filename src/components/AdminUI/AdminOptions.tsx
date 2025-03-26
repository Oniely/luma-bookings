import Link from "next/link";

const OtherSettings = () => {

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <ul style={styles.menu}>

        <Link href={"/other-settings"}>
          <li style={styles.menuItem}>
            Payment Options
          </li>
        </Link>

        <Link href={"/other-settings/events"}>
          <li style={styles.menuItem}> 
            Events
          </li>
        </Link>

          <Link href={"/other-settings/packages"}>
          <li style={styles.menuItem}>
            Packages
          </li>
          </Link>

        </ul>
        </div>
    </div>
  );
};

export default OtherSettings;

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