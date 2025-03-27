"use client";

import { Review } from "@/lib/types";
import React from "react";
import {
	Star,
	House,
	HandHelping,
	HeartHandshake,
	Brush,
	PiggyBank,
	VolumeX,
	Expand,
} from "lucide-react";

const styles: Record<string, React.CSSProperties> = {
	container: {
		margin: "0 auto",
		padding: "20px",
		height: "60vh",
	},
	summary: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
		margin: "-20px 0 10px 0",
		backgroundColor: "transparent", // Fixed
		padding: "10px",
		borderRadius: "10px",
		justifyContent: "center",
		textAlign: "center",
	},
	overallRating: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "5px",
		fontSize: "24px",
		textAlign: "center",
	},
	reviewsList: {
		display: "flex",
		flexDirection: "row",
		gap: "15px",
		overflowX: "auto",
		whiteSpace: "nowrap",
		scrollSnapType: "x mandatory",
		paddingBottom: "10px",
	},
	review: {
		display: "inline-block",
		minWidth: "300px",
		maxWidth: "300px",
		padding: "15px",
		backgroundColor: "transparent",
		scrollSnapAlign: "start",
		whiteSpace: "normal", // Fixed
		margin: "0 10px",
	},
	reviewIconsSet: {
		display: "flex",
		flexWrap: "wrap",
		gap: "8px",
		marginTop: "10px",
		marginBottom: "10px",
	},
	reviewIcon: {
		position: "absolute",
		bottom: 0,
		left: 0,
		backgroundColor: "#fff",
		padding: "4px",
		borderRadius: "4px",
		visibility: "hidden",
		opacity: 0,
		transition: "opacity 0.3s",
	},
	title: {
		fontWeight: 600, // Fixed
		fontSize: "20px",
		marginBottom: "5px",
	},
	button: {
		marginTop: "10px",
		background: "none",
		border: "none",
		color: "white",
		cursor: "pointer",
		padding: "0",
	},
};

const RatingsSummary = ({ overallRating }: { overallRating: number }) => {
	return (
		<div style={styles.summary}>
			<div style={styles.overallRating}>
				<Star /> <strong>{overallRating}</strong>{" "}
				<span>Overall rating</span>
			</div>
		</div>
	);
};

const ReviewItem = ({ review }: { review: any }) => {
	return (
		<div style={styles.review}>
			<p style={styles.title}>{review.fullName}</p>

			<div style={{ display: "flex", alignItems: "center" }}>
				{Array(5)
					.fill(0)
					.map((_, i) => (
						<Star
							key={i}
							color={i < review.review_rating ? "white" : "gray"}
							style={{ width: "20px", height: "20px" }}
						/>
					))}
				{/* review date */}
				{/* <span style={{ marginLeft: "8px" }}><small>{review.date}</small></span> */}
			</div>

			<div style={styles.reviewIconsSet}>
				{review.review_is_accomodating === true && (
					<div style={{ position: "relative" }}>
						<HandHelping size={20} color="#fff" />
						<span style={styles.reviewIcon}>Accommodating</span>
					</div>
				)}

				{review.review_has_helpful_staff === true && (
					<div style={{ position: "relative" }}>
						<HeartHandshake size={20} color="#fff" />
						<span style={styles.reviewIcon}>Has helpful staff</span>
					</div>
				)}

				{review.review_is_clean === true && (
					<div style={{ position: "relative" }}>
						<Brush size={20} color="#fff" />
						<span style={styles.reviewIcon}>Is clean</span>
					</div>
				)}

				{review.review_is_comfortable === true && (
					<div style={{ position: "relative" }}>
						<House size={20} color="#fff" />
						<span style={styles.reviewIcon}>Is comfortable</span>
					</div>
				)}

				{review.review_is_value_for_money === true && (
					<div style={{ position: "relative" }}>
						<PiggyBank size={20} color="#fff" />
						<span style={styles.reviewIcon}>
							Is value for money
						</span>
					</div>
				)}

				{review.review_is_quiet === true && (
					<div style={{ position: "relative" }}>
						<VolumeX size={20} color="#fff" />
						<span style={styles.reviewIcon}>Is quiet</span>
					</div>
				)}

				{review.review_is_spacious === true && (
					<div style={{ position: "relative" }}>
						<Expand size={20} color="#fff" />
						<span style={styles.reviewIcon}>Is spacious</span>
					</div>
				)}
			</div>

			{review.review_text !== null ? (
				<p>{review.review_text}</p>
			) : (
				<p>No reviews added</p>
			)}

			{/* <p>{expanded ? review.review_text : review.review_text.substring(0,100) + "..."}</p>
      {review.review_text.length > 100 && (
        <button style={styles.button} onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show less" : "Show more"}
        </button>
      )} */}
		</div>
	);
};

const UserReviews = ({ reviews }: { reviews: Review[] }) => {
	return (
		<div style={styles.container}>
			<RatingsSummary overallRating={4.5} />
			<div style={styles.reviewsList}>
				{reviews.map((review, index) => (
					<ReviewItem key={index} review={review} />
				))}
			</div>
		</div>
	);
};

export default UserReviews;
