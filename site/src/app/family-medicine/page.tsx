import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Family Medicine",
  description:
    "Comprehensive family medicine care in Wicker Park, Chicago. Board-certified physicians offering preventive health, wellness consultations, and management of acute and chronic conditions.",
};

export default function FamilyMedicinePage() {
  return (
    <ServicePageLayout
      title="Family Medicine"
      image="/images/family-medicine.jpg"
      imageAlt="Family medicine consultation"
    >
      <p className="text-lg text-gray-600 mb-6">
        When it comes to wellness, you need a provider who takes care of your
        overall health, not only your illness or disease. The family medicine
        team at M. Chavez MD, SC in Wicker Park, Chicago, which includes
        board-certified family physician Dr. Chavez, offers comprehensive and
        compassionate care focused on helping you achieve optimal health and
        wellness.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Comprehensive Primary Care
      </h2>
      <p className="text-gray-600 mb-6">
        Our integrative approach to care begins with a thorough screening for
        disease and illness. Patients receive an extensive evaluation including a
        focused history, physical and review of medical records to formulate an
        individualized treatment plan.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Family Medicine Services Include
      </h2>
      <ul className="space-y-3 mb-6">
        {[
          "Annual physicals and wellness exams",
          "Preventive health screenings",
          "Chronic disease management",
          "Acute illness treatment",
          "Immunizations and vaccinations",
          "Weight loss management",
          "Travel medicine",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-gray-600">
        Complementary and alternative treatment options are often recommended in
        addition to standard medical recommendations. Contact us to schedule your
        appointment today.
      </p>
    </ServicePageLayout>
  );
}
