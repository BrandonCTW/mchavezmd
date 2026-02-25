import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about M. Chavez MD, SC - a family medicine practice in Wicker Park, Chicago specializing in procedural medicine and preventive health under the direction of Dr. Milton Chavez.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">About</h1>
          <div className="mt-4 h-1 w-20 bg-secondary rounded-full" />
        </div>
      </section>

      {/* Our Practice */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Practice
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. Milton Chavez MD, SC is a family medicine practice located in
                Wicker Park, Chicago, that specializes in procedural medicine and
                preventive health. Under the medical direction of board-certified
                family medicine physician, Dr. Chavez, the team is focused on
                inspiring patients to achieve optimal health, wellness, and
                healing through efficient service and high-quality consultations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                From prevention to wellness to management of acute and chronic
                health issues, the team at M. Chavez MD, SC provides the
                exceptional care needed to meet each patient&apos;s needs. In
                addition to primary care services for the management of
                men&apos;s and women&apos;s health, the full-service practice
                also provides specialized care for many common health concerns,
                including acne, neck pain and back pain, and neuropathy.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. Chavez and his team view themselves as patient advocates and
                guides, providing patients with all the available treatment
                options, and then working together to devise a plan that achieves
                optimal health and wellness.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For compassionate care from a team that values integrity and
                respect, contact M. Chavez MD, SC, by phone or online today.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Link
                href="/schedule"
                className="flex items-center justify-center gap-2 w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary-dark transition-colors text-lg"
              >
                <Calendar size={20} />
                Book Appointment
              </Link>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                  <MapPin size={18} className="text-primary" />
                  Location
                </h3>
                <p className="text-gray-600 text-sm">
                  1509 N Western Ave
                  <br />
                  Unit A
                  <br />
                  Chicago, IL 60622
                </p>
                <h3 className="flex items-center gap-2 text-lg font-semibold mt-5 mb-3">
                  <Phone size={18} className="text-primary" />
                  Contact
                </h3>
                <a
                  href="tel:7732273303"
                  className="text-primary font-medium hover:text-primary-dark"
                >
                  (773) 227-3303
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Staff
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Dr. Chavez */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-80">
                <Image
                  src="/team/dr-chavez.jpg"
                  alt="Dr. Milton Chavez MD, FAAFP"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Dr. Chavez MD, FAAFP
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  Medical Director
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Over 28 years of experience in Family Medicine, Dr. Chavez
                  specializes in family medicine, non-operative orthopedics and
                  minor outpatient surgery. His mission is to inspire those
                  seeking their optimal health, wellness, and healing through
                  efficient service, quality consultations, and his core values:
                  integrity and respect.
                </p>
              </div>
            </div>

            {/* Karen Corona */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-80">
                <Image
                  src="/team/karen-corona.jpg"
                  alt="Karen Corona MSN, APRN, FNP-C"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Karen Corona MSN, APRN, FNP-C
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  Family Nurse Practitioner
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Karen Corona is a board-certified Family Nurse Practitioner
                  with over five years of diverse healthcare experience. Her
                  clinical background spans women&apos;s health, family medicine,
                  inpatient care, surgical settings, and medical weight loss. She
                  is dedicated to delivering evidence-based, compassionate care
                  while fostering strong, collaborative relationships with her
                  patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
