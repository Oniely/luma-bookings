import Link from "next/link";

export default function ManageHotelsSideBar(){
    return (
            <div style={styles.sidebar}>
				<ul style={styles.menu}>
					<li style={styles.menuItem}><Link href="/manage-hotels">Dashboard</Link></li>
					<li style={styles.menuItem}><Link href="/manage-hotels/bookings">Bookings</Link></li>
				</ul>
			</div>
    );
}

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
