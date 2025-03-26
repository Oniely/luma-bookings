import { PerkName } from "@/components/Room/Perks";

// TYPES in CLIENT
export interface UserSession {
	user_id: string;
	fullName: string;
	username: string;
	profile_url: string;
	exp: string;
}

// MODELS
export interface Room {
	room_id: string;
	room_name: string;
	room_type?: string;
	room_beds?: number;
	room_description: string;
	room_img_url: string[];
	room_price: number;
	room_max_guests: number;
	room_no_of_beds?: number;
	room_is_available?: boolean;
	room_is_guest_favorite?: boolean;
	room_perks?: PerkName[];
	room_occupied_dates?: Date[];
}

export interface Transaction {
	reservation_id: string;
	user_id: string;
	room_id: string;
	package_id?: string;
	event_id?: string;
	reservation_date_start: Date;
	reservation_date_end: Date;
	reservation_total_payment_amount: number;
	reservation_payment_type: string;
	reservation_description: string;
}

export interface Package {
	package_id: string;
	package_name: string;
	package_description: string;
	package_price: number;
	room_id: string;
	event_id: string;
}

export interface Employee {
	user_id: string;
	fullName: string;
	password: string;
	employee_role: string;
	profile_url: string;
}

export interface Review {
	review_id: string;
	user_id: string;
	room_id: string;
	review_rating: number;
	review_is_accomodating: boolean;
	review_has_helpful_staff: boolean;
	review_is_clean: boolean;
	review_is_comfortable: boolean;
	review_is_value_for_money: boolean;
	review_is_quiet: boolean;
	review_is_spacious: boolean;
	review_text: string;
}

export interface Event {
	event_id: string;
	event_description: string;
	event_price: number;
	event_date: string;
}
