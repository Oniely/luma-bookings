import PaymentOption from "@/components/AdminUI/PaymentOption";

export default function Page() {
	return (
		<div style={styles.container}>
			<div style={styles.content}>
				<PaymentOption />
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		padding: "20px",
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
		padding: 0,
	},

	menuItem: {
		padding: "10px",
		cursor: "pointer",
		fontWeight: "bold",
	},

	content: {
		width: "100%",
		height: "100%",
		overflow: "auto",
	},
};
