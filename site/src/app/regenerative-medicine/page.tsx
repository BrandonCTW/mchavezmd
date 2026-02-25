import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Regenerative Medicine",
  description:
    "Pioneering regenerative medicine in Wicker Park, Chicago. Dr. Chavez offers treatments for soft-tissue repair, chronic pain from osteoarthritis, and aesthetic rejuvenation.",
};

export default function RegenerativeMedicinePage() {
  return (
    <ServicePageLayout
      title="Regenerative Medicine"
      image="/images/regenerative-medicine.jpg"
      imageAlt="Regenerative medicine treatment"
    >
      <p className="text-lg text-gray-600 mb-6">
        If you want to repair soft-tissue injuries, alleviate chronic pain from
        osteoarthritis, or even rejuvenate your appearance, the power of
        regenerative medicine can help you reach your goals. At M. Chavez MD, SC,
        Dr. Chavez is a pioneer in the use of regenerative medicine for medical
        and aesthetic procedures.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Regenerative Medicine Services
      </h2>
      <ul className="space-y-3 mb-6">
        {[
          "PRP (Platelet-Rich Plasma) therapy",
          "Soft tissue injury repair",
          "Osteoarthritis treatment",
          "Chronic pain management",
          "Aesthetic rejuvenation",
          "Personalized treatment plans",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-gray-600">
        Regenerative medicine harnesses your body&apos;s own healing abilities to
        promote tissue repair and reduce inflammation. Contact our office to
        learn if regenerative medicine is right for you.
      </p>
    </ServicePageLayout>
  );
}
