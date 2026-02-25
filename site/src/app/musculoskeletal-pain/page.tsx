import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Musculoskeletal Pain",
  description:
    "Holistic musculoskeletal pain management in Wicker Park, Chicago. Dr. Chavez offers supportive, holistic, and alternative therapies to help heal joint and muscle pain.",
};

export default function MusculoskeletalPainPage() {
  return (
    <ServicePageLayout
      title="Musculoskeletal Pain"
      image="/images/musculoskeletal-pain.jpg"
      imageAlt="Musculoskeletal pain treatment"
    >
      <p className="text-lg text-gray-600 mb-6">
        If you&apos;re plagued by multiple aches and pains throughout your joints
        and muscles, you may wonder if you&apos;re doomed to a lifetime of
        discomfort and painkillers. At the office of M. Chavez MD, SC, expert
        physician Dr. Chavez, and the team of health experts choose from a
        variety of supportive, holistic, and alternative therapies to help you
        heal and rehabilitate musculoskeletal pain.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Pain Management Services
      </h2>
      <ul className="space-y-3 mb-6">
        {[
          "Joint pain evaluation and treatment",
          "Muscle pain diagnosis and management",
          "Holistic and integrative therapies",
          "Rehabilitation programs",
          "Pain management strategies",
          "Alternative medicine options",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-gray-600">
        We believe in treating the whole person, not just the symptoms. Our team
        works with you to develop a comprehensive treatment plan that addresses
        the underlying causes of your pain and helps you regain your quality of
        life.
      </p>
    </ServicePageLayout>
  );
}
