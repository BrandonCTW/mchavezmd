import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Stethoscope,
  Syringe,
  Bone,
  FlaskConical,
  Scissors,
  Activity,
  Users,
  Clock,
  MapPin,
  Phone,
  Quote,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Family Medicine",
    href: "/family-medicine",
    icon: Stethoscope,
    description:
      "Comprehensive and compassionate primary care focused on helping you achieve optimal health and wellness.",
  },
  {
    title: "Knee Pain",
    href: "/knee-pain",
    icon: Bone,
    description:
      "Comprehensive evaluations and treatment plans to alleviate knee discomfort and restore mobility.",
  },
  {
    title: "Regenerative Medicine",
    href: "/regenerative-medicine",
    icon: FlaskConical,
    description:
      "Pioneering regenerative medicine for soft-tissue repair, chronic pain relief, and rejuvenation.",
  },
  {
    title: "Medical Botox",
    href: "/medical-botox",
    icon: Syringe,
    description:
      "Medical Botox treatments for migraines, hyperhidrosis, and other conditions beyond cosmetic use.",
  },
  {
    title: "Minor Surgery",
    href: "/minor-surgery",
    icon: Scissors,
    description:
      "Same-day minor surgical procedures for moles, skin tags, and cysts - no referrals required.",
  },
  {
    title: "Musculoskeletal Pain",
    href: "/musculoskeletal-pain",
    icon: Activity,
    description:
      "Holistic and alternative therapies to help you heal and rehabilitate joint and muscle pain.",
  },
  {
    title: "Women's Health",
    href: "/womens-wellness",
    icon: Heart,
    description:
      "Comprehensive care throughout a woman's journey from puberty through menopause.",
  },
  {
    title: "Men's Health",
    href: "/mens-wellness",
    icon: Users,
    description:
      "Individualized, holistic care tailored to men's unique healthcare needs and conditions.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-[#3a2560] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-stethoscope.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-secondary-light font-medium mb-4 text-lg">
              Welcome to M. Chavez MD, SC
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Procedural Medicine.
              <br />
              <span className="text-secondary-light">Authentic Care.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              Board-certified family medicine practice in Wicker Park, Chicago
              specializing in procedural medicine and preventive health.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Schedule Appointment
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:7732273303"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Phone size={20} />
                (773) 227-3303
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary-dark text-white py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "28+", label: "Years in Family Medicine" },
              { value: "FAAFP", label: "Board-Certified Fellow" },
              { value: "Walk-Ins", label: "Always Welcome" },
              { value: "Free", label: "Parking Available" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl md:text-3xl font-bold text-secondary-light">
                  {stat.value}
                </span>
                <span className="text-sm text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Info */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <blockquote className="text-lg text-gray-600 italic border-l-4 border-primary pl-6 mb-8">
                &ldquo;The entire team at M. Chavez, MD, SC strives to inspire
                and aid those seeking their optimal health, wellness and healing
                through efficient service, quality consultations and our core
                values: integrity and respect.&rdquo;
              </blockquote>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We specialize in procedural medicine and preventive health and
                wellness and offer a variety of services from weight loss
                management to travel medicine. Our vision is to be your entry
                point for comprehensive and complete care in Wicker Park and
                surrounding areas.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Meet Our Team
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock size={22} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Office / Telehealth Hours
                  </h3>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    ["Monday", "8:00a - 5:00p"],
                    ["Tuesday", "8:00a - 6:00p"],
                    ["Wednesday", "8:00a - 4:00p"],
                    ["Thursday", "8:00a - 4:00p"],
                    ["Friday", "8:00a - 4:00p"],
                    ["Saturday", "8:00a - 12:00p"],
                  ].map(([day, hours]) => (
                    <div
                      key={day}
                      className="flex justify-between py-1 border-b border-gray-100 last:border-0"
                    >
                      <span className="font-medium text-gray-700">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6">
                <Quote size={28} className="text-primary/40 mb-3" />
                <blockquote className="text-gray-700 italic">
                  &ldquo;Dr. Chavez has my highest recommendation. He is
                  knowledgeable, intelligent, empathic, consistent, thorough and
                  soft-spoken. Basically, he delivers what most people want and
                  deserve from their MD.&rdquo;
                </blockquote>
                <p className="mt-3 text-sm font-semibold text-primary">
                  - Chad M.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <div className="mt-4 h-1 w-20 bg-primary rounded-full mx-auto" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From preventive care to specialized treatments, we provide
              comprehensive medical services for the whole family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/20"
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary transition-colors">
                    <Icon
                      size={24}
                      className="text-primary group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium">
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet Our Team
            </h2>
            <div className="mt-4 h-1 w-20 bg-primary rounded-full mx-auto" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Board-certified physicians and practitioners dedicated to your
              health and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Dr. Chavez */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-72">
                <Image
                  src="/team/dr-chavez.jpg"
                  alt="Dr. Milton Chavez MD, FAAFP"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Dr. Milton Chavez
                </h3>
                <p className="text-primary font-semibold text-sm mt-1">
                  MD, FAAFP - Medical Director
                </p>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  Board-certified family physician with 28+ years of experience
                  specializing in family medicine, non-operative orthopedics, and
                  minor outpatient surgery.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Family Medicine", "Orthopedics", "Minor Surgery"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Karen Corona */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-72">
                <Image
                  src="/team/karen-corona.jpg"
                  alt="Karen Corona MSN, APRN, FNP-C"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Karen Corona
                </h3>
                <p className="text-primary font-semibold text-sm mt-1">
                  MSN, APRN, FNP-C - Family Nurse Practitioner
                </p>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  Board-certified family nurse practitioner with diverse
                  experience in women&apos;s health, family medicine, inpatient
                  care, surgical settings, and medical weight loss.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Women's Health", "Weight Loss", "Family Medicine"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / CTA */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[28rem] rounded-xl overflow-hidden">
                <Image
                  src="/images/hero-stethoscope.jpg"
                  alt="M. Chavez MD, SC practice"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent" />
              </div>
              <div className="absolute bottom-4 right-4 bg-white rounded-xl p-5 shadow-lg max-w-[180px]">
                <p className="text-3xl font-bold text-primary">28+</p>
                <p className="text-sm text-gray-600">
                  Years in Family Medicine
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Schedule Your Appointment Today
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you are interested in wellness and prevention, have an
                acute or chronic illness or require procedural services, our goal
                is always to prevent, maintain and optimize your well-being every
                step of the way.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. Chavez and each of our clinicians are board certified in
                Family Medicine. We are located in Wicker Park and we proudly
                extend our expertise to the surrounding areas of Lincoln Park,
                Bucktown, Logan Square and the Ukrainian Village.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Book Appointment
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Serving Wicker Park & Surrounding Areas
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Conveniently located at the corner of Western Ave and LeMoyne Ave in
            Wicker Park, with free parking available.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Wicker Park",
              "Lincoln Park",
              "Bucktown",
              "Logan Square",
              "Ukrainian Village",
            ].map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-white rounded-lg py-3 px-5 shadow-sm whitespace-nowrap"
              >
                <MapPin size={14} className="text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="bg-gradient-to-r from-accent to-accent-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Health Is Worth It
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Walk-ins welcome. New patients accepted. Most PPO insurance plans
            accepted - and cash pay options available too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center gap-2 bg-white text-accent hover:bg-white/90 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-md"
            >
              Schedule Appointment
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:7732273303"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              <Phone size={20} />
              (773) 227-3303
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
