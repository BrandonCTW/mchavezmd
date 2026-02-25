import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Knee Pain Treatment",
  description:
    "Comprehensive knee pain evaluations and treatment plans in Wicker Park, Chicago. Dr. Chavez offers personalized care to alleviate discomfort and restore mobility.",
};

export default function KneePainPage() {
  return (
    <ServicePageLayout
      title="Knee Pain"
      image="/images/knee-pain.jpg"
      imageAlt="Knee pain treatment"
    >
      <p className="text-lg text-gray-600 mb-6">
        Your knees are complex joints that assist with walking, running, sitting,
        and jumping. All these activities also place a lot of stress on the knee,
        which makes the joint vulnerable to injury and pain. At the Wicker Park,
        Chicago, family medicine practice M. Chavez MD, SC, board-certified
        physician Dr. Chavez offers comprehensive evaluations and treatment plans
        for knee pain to alleviate your discomfort.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Knee Pain Services
      </h2>
      <ul className="space-y-3 mb-6">
        {[
          "Diagnostic evaluations and imaging referrals",
          "Joint injections for pain relief",
          "Physical therapy referrals",
          "Regenerative treatments",
          "Pain management strategies",
          "Surgical referrals when needed",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-gray-600">
        Dr. Chavez takes a thorough approach to diagnosing and treating knee
        pain, working with you to develop a personalized plan that addresses the
        root cause of your discomfort and helps restore your quality of life.
      </p>
    </ServicePageLayout>
  );
}
