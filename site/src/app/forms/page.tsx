import { Metadata } from "next";
import Link from "next/link";
import { FileText, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Office Forms",
  description:
    "Access patient intake forms and office documents for M. Chavez MD, SC. Complete forms before your visit to save time.",
};

export default function FormsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Office Forms
          </h1>
          <div className="mt-4 h-1 w-20 bg-secondary rounded-full" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
            <FileText size={40} className="text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Patient Forms
          </h2>
          <p className="text-gray-600 mb-8">
            At your first visit, you will be required to fill out and sign
            certain forms which authorize us to care for you or your loved one.
            Please bring a picture ID and your insurance card to all your visits.
          </p>
          <p className="text-gray-600 mb-8">
            For questions about forms or to request documents, please contact our
            office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7732273303"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Call (773) 227-3303
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
