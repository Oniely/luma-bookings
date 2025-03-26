import { Room } from "@/lib/types";

export default function AdminRoomCard({room_id, room_name, room_img_url, room_description, room_price}: Room){
    return(
    <div key={room_id} style={styles.row}>
        <img src={room_img_url[0]} alt={room_name} style={styles.image} />
        <div style={styles.details}>
          <h3>{room_name}</h3>
          <p>{room_description}</p>
          <p>Price: ${room_price}</p>
        </div>
      </div>)
    // <div key={item.id} style={styles.row}>
    //     <img src={item.image} style={styles.image} />
    //     <div style={styles.details}>
    //         <h3>{item.title}</h3>
    //         <p>ID: <span>{item.id}</span></p>
    //         <p>{item.location}</p>
    //         <p>Price: {item.price}</p>
    //         <p>Date Added: {item.dateAdded}</p>
    //     </div>
    //     <div style={styles.host}>
    //         <p>{item.host.name}</p>
    //         <p>{item.host.email}</p>
    //         <p>{item.host.phone}</p>
    //     </div>
    //     <div style={styles.actions}>
    //         <button style={styles.menuButton} onClick={() => setMenuOpen(menuOpen === item.id ? null : item.id)}>⋮</button>
    //         {menuOpen === item.id && (
    //         <div style={styles.dropdown}>
    //             <div style={styles.dropdownItem} onClick={() => console.log("Edit", item.id)}>Edit</div>
    //             <div style={styles.dropdownItem} onClick={() => handleDelete(item.id)}>Delete</div>
    //         </div>
    //         )}
    //     </div>
    // </div>   
}

const styles = {
    row: {
        display: "flex",
        background: "#fff",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        marginBottom: "10px",
      },
      image: {
        width: "100px",
        height: "100px",
        borderRadius: "4px",
        marginRight: "10px",
        objectFit: "cover" as React.CSSProperties['objectFit'],
      },
      details: {
        flex: 1,
      },
  };
  