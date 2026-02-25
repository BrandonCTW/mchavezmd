"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-primary text-white text-center py-3 px-4 relative">
      <Link
        href="/schedule"
        className="text-sm md:text-base font-medium tracking-wide hover:underline"
      >
        Click Here or Call to Schedule An Appointment
      </Link>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
        aria-label="Close announcement"
      >
        <X size={18} />
      </button>
    </div>
  );
}
