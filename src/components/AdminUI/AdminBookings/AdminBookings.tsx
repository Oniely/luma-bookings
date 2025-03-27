import { Room } from "@/lib/types";
import { Transaction } from "@/lib/types";

export default function AdminBookingCard({room_id, reservation_id, reservation_date_start, reservation_date_end, reservation_payment_amount, reservation_payment_type, reservation_status, user_id}: Transaction){
    return(
    <div key={room_id} style={styles.row}>
        <div style={styles.details}>
          <h3>{reservation_id}</h3>
          <p>{user_id}</p>
          <p>Price: ${reservation_payment_amount}</p>
        <p>Date Start: {reservation_date_start.toString()}</p>
        <p>Date End: {reservation_date_end.toString()}</p>
        <p>Payment Type: {reservation_payment_type}</p>
        <p>Status: {reservation_status}</p>
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
  