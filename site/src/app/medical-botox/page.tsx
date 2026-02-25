import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Medical Botox",
  description:
    "Medical Botox treatments in Wicker Park, Chicago for migraines, hyperhidrosis, and more. Board-certified family physician Dr. Chavez offers therapeutic Botox beyond cosmetic use.",
};

export default function MedicalBotoxPage() {
  return (
    <ServicePageLayout
      title="Medical Botox"
      image="/images/medical-botox.jpg"
      imageAlt="Medical Botox treatment"
    >
      <p className="text-lg text-gray-600 mb-6">
        While millions of people have been able to erase lines and wrinkles with
        Botox injections, that&apos;s not the only use for the neuromodulator.
        Dedicated to helping their patients live their best life, board-certified
        family physician Milton Chavez, MD, offers medical Botox to treat many
        conditions, including migraines and hyperhidrosis (excessive sweating).
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Medical Botox Treatments
      </h2>
      <ul className="space-y-3 mb-6">
        {[
          "Chronic migraine treatment",
          "Hyperhidrosis (excessive sweating) treatment",
          "Muscle spasticity management",
          "TMJ disorder relief",
          "Personalized treatment plans",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-gray-600">
        Medical Botox works by temporarily blocking nerve signals to targeted
        muscles, providing relief from a variety of conditions. Schedule a
        consultation to discuss whether medical Botox is right for you.
      </p>
    </ServicePageLayout>
  );
}
