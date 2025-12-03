"use client";

import { useState } from "react";
import BookingModal from "@/components/BookingModal";
import { Midwife } from "@/data/midwives";

interface Props {
  midwife: Midwife;
}

export default function MidwifeBookingClient({ midwife }: Props) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsBookingModalOpen(true)}
        className="bg-[#AD6E9D] text-white px-6 py-2 rounded-full hover:bg-[#AD6E9D]/90 transition-colors"
      >
        Book Appointment
      </button>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        midwife={midwife}
      />
    </>
  );
}
