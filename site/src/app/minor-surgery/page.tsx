import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Minor Surgery",
  description:
    "Same-day minor surgical procedures in Wicker Park, Chicago. Dr. Chavez offers mole removal, skin tag removal, cyst removal, and more - no referrals required.",
};

export default function MinorSurgeryPage() {
  return (
    <ServicePageLayout
      title="Minor Surgery"
      image="/images/minor-surgery.jpg"
      imageAlt="Minor surgery procedure"
    >
      <p className="text-lg text-gray-600 mb-6">
        If you have a mole, skin tag, or cyst that affects your quality of life,
        minor surgery can provide same-day care. At M. Chavez MD, SC,
        board-certified physician Milton Chavez, MD, offers minor surgery for
        common skin issues. There&apos;s no wait or referrals required, and most
        procedures take less than an hour.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Minor Surgery Procedures
      </h2>
      <ul className="space-y-3 mb-6">
        {[
          "Mole removal",
          "Skin tag removal",
          "Cyst removal and drainage",
          "Lesion biopsy",
          "Cryosurgery for skin lesions",
          "Wound care and management",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-gray-600">
        Our practice provides convenient, in-office procedures so you can receive
        the care you need without lengthy wait times or specialist referrals.
        Contact us to schedule a consultation.
      </p>
    </ServicePageLayout>
  );
}
