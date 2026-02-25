import { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about M. Chavez MD, SC in Wicker Park, Chicago. Insurance, hours, parking, new patients, and more.",
};

export default function FAQsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Frequently Asked Questions
          </h1>
          <div className="mt-4 h-1 w-20 bg-secondary rounded-full" />
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <FAQAccordion />

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Have a question that&apos;s not listed here?
            </p>
            <a
              href="tel:7732273303"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Call Us: (773) 227-3303
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
