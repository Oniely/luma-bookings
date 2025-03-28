"use client";

import React, { useState } from "react";
import { UserData } from "@/lib/types";
import AdminUser from "./AdminUser/AdminUser";
import OneUser from "./AdminUser/OneUser";

const ManageUsers = ({ userData }: { userData: UserData[] }) => {
	const [users, setUsers] = useState(userData);
	const [selectedUser, setSelectedUser] = useState<UserData>(users[0]);

	return (
		<div>
			<div style={styles.container}>
				<div style={styles.sidebar}>
					<div style={{ height: "100%", overflowY: "auto" }}>
						{users.map((user) => (
							<AdminUser
								onClick={() => setSelectedUser(user)}
								key={user.user_id}
								user={user}
								selected={selectedUser?.user_id}
							/>
						))}
					</div>
				</div>
				<div style={styles.mainContent}>
					<OneUser selectedUser={selectedUser} />
				</div>
			</div>
		</div>
	);
};

export default ManageUsers;

const styles = {
	container: {
		display: "flex",
		height: "100vh",
		fontFamily: "Arial, sans-serif",
		overflow: "hidden",
	},
	navbar: {
		display: "flex",
		flexDirection: "column", // change this to column
		justifyContent: "space-between",
		alignItems: "start",

		backgroundColor: "#007bff",
		color: "white",
		fontSize: "18px",
		position: "sticky", // add this to make the navbar sticky
		top: 0, // add this to make the navbar sticky
	},
	sidebar: {
		width: "30%",
		borderRight: "1px solid #ddd",
		padding: "10px",
		backgroundColor: "#F8F9FA",
		flexShrink: 0,
		overflowY: "auto" as React.CSSProperties["overflowY"],
		maxHeight: "100vh",
	},

	candidateItem: {
		display: "flex",
		alignItems: "center",
		padding: "20px",
		borderBottom: "1px solid #eee",
		cursor: "pointer",
		borderRadius: "8px",
		boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
		margin: "10px 0",
		flex: 1,
		[`@media (max-width: 768px)`]: {
			padding: "10px",
		},
		[`@media (max-width: 480px)`]: {
			padding: "5px",
		},
		[`@media (text-size-adjust: 200%)`]: {
			fontSize: "16px",
		},
		[`@media (text-size-adjust: 300%)`]: {
			fontSize: "20px",
		},
		[`@media (text-size-adjust: 400%)`]: {
			fontSize: "24px",
		},
	},
	selected: {
		backgroundColor: "#e0e0e0",
		border: "2px solid #007bff",
	},
	userAvatar: {
		width: "50px",
		height: "50px",
		borderRadius: "50%",
		backgroundColor: "#6C757D",
		color: "white",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontWeight: "bold",
		marginRight: "10px",
		flexShrink: 0, // add this to prevent the avatar from shrinking
		[`@media (max-width: 768px)`]: {
			width: "30px",
			height: "30px",
		},
		[`@media (max-width: 480px)`]: {
			width: "20px",
			height: "20px",
		},
	},
	userInfo: {
		display: "flex",
		flexDirection: "column",
		overflow: "hidden", // add this to hide the content when it overflows
		textOverflow: "ellipsis", // add this to show an ellipsis when the content overflows
		whiteSpace: "nowrap", // add this to prevent the content from wrapping to a new line
	},

	userName: {
		fontWeight: "bold",
		fontSize: "18px",
		overflow: "hidden", // add this to hide the content when it overflows
		textOverflow: "ellipsis", // add this to show an ellipsis when the content overflows
		whiteSpace: "nowrap", // add this to prevent the content from wrapping to a new line
	},

	userEmail: {
		fontWeight: "light",
		fontSize: "14px",
		overflow: "hidden", // add this to hide the content when it overflows
		textOverflow: "ellipsis", // add this to show an ellipsis when the content overflows
		whiteSpace: "nowrap", // add this to prevent the content from wrapping to a new line
	},
	statusBadge: {
		padding: "4px 8px",
		borderRadius: "5px",
		fontSize: "12px",
		marginTop: "5px",
	},

	mainContent: {
		flex: 1,
		padding: "20px",
		overflowY: "auto" as React.CSSProperties["overflowY"], // add this to make the content scrollable
	},
};
