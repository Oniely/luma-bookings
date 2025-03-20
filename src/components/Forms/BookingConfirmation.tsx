"use client"

import React from "react";
import PaymentMethod from "../ui/PaymentMethod";
import BookingInformation from "../ui/BookingInformation";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BookingConfirmation = () => {
    const router = useRouter();

    return (

        <div className="relative w-full h-dvh flex-end py-6 align-items-center justify-content-center">   

        <div className="px-24 mt-6 flex flex-row">
        <button className="px-4 py-3 text-black rounded-lg flex items-center justify-center gap-2" onClick={() => router.back()}>
            <ArrowLeft size={28} />
        </button>
            <text className="text-3xl mt-2 max-w-lg">Confirm Booking</text>
        </div>
        
        <div className="flex flex-row gap-6">
        {/* paymentMethods */}
        <div className="flex flex-col">
            <div className="px-40 mt-6">
            <text className="text-2xl mt-2 max-w-lg">Payment</text>
            </div>
            <PaymentMethod/>

            <div className="flex flex-col">
            <div className="px-40 mt-4">
                <p className="text-2xl whitespace-nowrap">Cancellation Policy</p>
                <p className="whitespace-nowrap">This reservation is non-refundable.</p>
            </div>
            </div>

        </div>

        {/* Booking */}
        <div className="flex flex-col w-full max-w-xl">
            <BookingInformation />
        </div>
        </div>

        </div>

        
        


        
    );
};

export default BookingConfirmation;