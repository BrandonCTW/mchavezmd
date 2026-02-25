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
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Star,
  Shield,
  Car,
  CalendarCheck,
} from "lucide-react";

const services = [
  {
    title: "Family Medicine",
    href: "/family-medicine",
    icon: Stethoscope,
    image: "/images/family-medicine.jpg",
    description: "Comprehensive primary care for the entire family.",
    accent: "bg-primary",
  },
  {
    title: "Knee Pain",
    href: "/knee-pain",
    icon: Bone,
    image: "/images/knee-pain.jpg",
    description: "Evaluations and treatment to restore mobility.",
    accent: "bg-secondary",
  },
  {
    title: "Regenerative Medicine",
    href: "/regenerative-medicine",
    icon: FlaskConical,
    image: "/images/regenerative-medicine.jpg",
    description: "Pioneering soft-tissue repair and rejuvenation.",
    accent: "bg-accent",
  },
  {
    title: "Medical Botox",
    href: "/medical-botox",
    icon: Syringe,
    image: "/images/medical-botox.jpg",
    description: "Migraines, hyperhidrosis, and more.",
    accent: "bg-primary-light",
  },
  {
    title: "Minor Surgery",
    href: "/minor-surgery",
    icon: Scissors,
    image: "/images/minor-surgery.jpg",
    description: "Same-day moles, skin tags, and cyst removal.",
    accent: "bg-secondary-light",
  },
  {
    title: "Musculoskeletal Pain",
    href: "/musculoskeletal-pain",
    icon: Activity,
    image: "/images/musculoskeletal-pain.jpg",
    description: "Holistic joint and muscle rehabilitation.",
    accent: "bg-primary-dark",
  },
  {
    title: "Women's Health",
    href: "/womens-wellness",
    icon: Heart,
    image: "/images/immediate-care.jpg",
    description: "Care from puberty through menopause.",
    accent: "bg-accent-light",
  },
  {
    title: "Men's Health",
    href: "/mens-wellness",
    icon: Users,
    image: "/images/hero-stethoscope.jpg",
    description: "Tailored to men's unique health needs.",
    accent: "bg-secondary",
  },
];

export default function Homepage3() {
  return (
    <div>
      {/* Hero - Dark, Bold, Full-Width */}
      <section className="relative min-h-[95vh] flex items-center bg-gray-950 overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-stethoscope.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/80 to-gray-950" />
        </div>

        {/* Decorative geometric shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-primary/20 hidden lg:block" />
        <div className="absolute bottom-32 right-32 w-40 h-40 rounded-full border border-secondary/20 hidden lg:block" />
        <div className="absolute top-40 right-40 w-4 h-4 rounded-full bg-accent/40 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm text-white/80">
                Accepting New Patients in Wicker Park
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight">
              PROCEDURAL
              <br />
              MEDICINE.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-light to-accent">
                AUTHENTIC CARE.
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/60 max-w-lg">
              Board-certified. 28+ years. Family medicine meets procedural
              expertise in the heart of Chicago.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/schedule"
                className="group inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02]"
              >
                Book Now
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="tel:7732273303"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors border border-white/10"
              >
                <Phone size={20} />
                (773) 227-3303
              </a>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, value: "28+", label: "Years Experience" },
                { icon: Star, value: "FAAFP", label: "Board Certified" },
                { icon: CalendarCheck, value: "Walk-Ins", label: "Welcome" },
                { icon: Car, value: "Free", label: "Parking" },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10">
                      <Icon size={18} className="text-secondary-light" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">
                        {stat.value}
                      </p>
                      <p className="text-white/50 text-xs">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services - Bento Grid */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-secondary font-bold text-sm uppercase tracking-[0.2em] mb-2">
                What We Do
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Our Services
              </h2>
            </div>
            <p className="text-white/50 max-w-md text-sm">
              From preventive care to specialized treatments, we provide
              comprehensive medical services for the whole family.
            </p>
          </div>

          {/* Bento grid - asymmetric */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Featured large card */}
            <Link
              href={services[0].href}
              className="group lg:row-span-2 relative rounded-2xl overflow-hidden min-h-[20rem]"
            >
              <Image
                src={services[0].image}
                alt={services[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-md bg-primary">
                    <Stethoscope size={14} className="text-white" />
                  </div>
                  <span className="text-xs text-white/60 uppercase tracking-wider font-bold">
                    Core Service
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {services[0].title}
                </h3>
                <p className="text-white/60 text-sm">
                  {services[0].description}
                </p>
              </div>
            </Link>

            {/* Remaining service cards */}
            {services.slice(1).map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all p-6 flex flex-col justify-between min-h-[10rem]"
                >
                  {/* Background image revealed on hover */}
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover opacity-0 group-hover:opacity-20 scale-105 group-hover:scale-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative flex items-start justify-between">
                    <div
                      className={`p-2.5 rounded-xl ${service.accent} bg-opacity-20`}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-white/40 text-sm">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team - Bold Cards with Number Accents */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-secondary font-bold text-sm uppercase tracking-[0.2em] mb-2">
              Your Providers
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Meet the Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Dr. Chavez */}
            <div className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all">
              <div className="relative h-80">
                <Image
                  src="/team/dr-chavez.jpg"
                  alt="Dr. Milton Chavez MD, FAAFP"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-primary rounded-xl px-3 py-1.5">
                  <span className="text-xs font-bold text-white">
                    Medical Director
                  </span>
                </div>
              </div>
              <div className="p-6 -mt-12 relative">
                <h3 className="text-2xl font-bold text-white">
                  Dr. Milton Chavez
                </h3>
                <p className="text-secondary font-semibold text-sm mt-1">
                  MD, FAAFP
                </p>
                <p className="text-white/50 text-sm mt-3 leading-relaxed">
                  Board-certified family physician with 28+ years of experience
                  in family medicine, non-operative orthopedics, and minor
                  outpatient surgery.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Family Medicine", "Orthopedics", "Minor Surgery"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full border border-white/5"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Karen Corona */}
            <div className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-secondary/30 transition-all">
              <div className="relative h-80">
                <Image
                  src="/team/karen-corona.jpg"
                  alt="Karen Corona MSN, APRN, FNP-C"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-secondary rounded-xl px-3 py-1.5">
                  <span className="text-xs font-bold text-white">
                    Nurse Practitioner
                  </span>
                </div>
              </div>
              <div className="p-6 -mt-12 relative">
                <h3 className="text-2xl font-bold text-white">Karen Corona</h3>
                <p className="text-secondary font-semibold text-sm mt-1">
                  MSN, APRN, FNP-C
                </p>
                <p className="text-white/50 text-sm mt-3 leading-relaxed">
                  Board-certified family nurse practitioner with diverse
                  experience in women&apos;s health, family medicine, inpatient
                  care, surgical settings, and medical weight loss.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Women's Health", "Weight Loss", "Family Medicine"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full border border-white/5"
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

      {/* Testimonials - Bold Accent Style */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col justify-center">
              <p className="text-secondary font-bold text-sm uppercase tracking-[0.2em] mb-2">
                Reviews
              </p>
              <h2 className="text-4xl font-black text-white mb-4">
                Trusted by
                <br />
                Our Patients
              </h2>
              <p className="text-white/50 text-sm">
                Real feedback from real patients who trust us with their health.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-6 border border-primary/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <blockquote className="text-white/80 leading-relaxed text-sm">
                  &ldquo;My visit with Dr. Chavez is always pleasant. I love
                  that the Doctors take your appointment on time, very attentive
                  and professional and knowledgeable of my medical
                  history.&rdquo;
                </blockquote>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white font-bold text-xs">JH</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Janneth H.
                    </p>
                    <p className="text-white/40 text-xs">
                      via{" "}
                      <a
                        href="https://www.tebra.com/care/provider/milton-chavez-md-1700869450"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-secondary"
                      >
                        Tebra
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl p-6 border border-secondary/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <blockquote className="text-white/80 leading-relaxed text-sm">
                  &ldquo;Dr. Chavez has my highest recommendation. He is
                  knowledgeable, intelligent, empathic, consistent, thorough and
                  soft-spoken. Basically, he delivers what most people want and
                  deserve from their MD.&rdquo;
                </blockquote>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-white font-bold text-xs">CM</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Chad M.</p>
                    <p className="text-white/40 text-xs">Verified Patient</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location - Dark Map Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-secondary font-bold text-sm uppercase tracking-[0.2em] mb-2">
                Find Us
              </p>
              <h2 className="text-4xl font-black text-white mb-6">
                Heart of Wicker Park
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/10">
                    <MapPin size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-white">
                      1509 N Western Ave, Unit A
                    </p>
                    <p className="text-white/50 text-sm">
                      Chicago, IL 60622 - Corner of Western & LeMoyne
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-white/10">
                    <Phone size={18} className="text-secondary" />
                  </div>
                  <a
                    href="tel:7732273303"
                    className="text-white font-bold hover:text-secondary transition-colors"
                  >
                    (773) 227-3303
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/10">
                    <Clock size={18} className="text-secondary" />
                  </div>
                  <div className="text-sm space-y-1.5">
                    {[
                      ["Mon", "8a-5p"],
                      ["Tue", "8a-6p"],
                      ["Wed-Fri", "8a-4p"],
                      ["Sat", "8a-12p"],
                    ].map(([day, hours]) => (
                      <div key={day} className="flex gap-3">
                        <span className="text-white/50 w-16">{day}</span>
                        <span className="text-white font-medium">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Wicker Park",
                  "Lincoln Park",
                  "Bucktown",
                  "Logan Square",
                  "Ukrainian Village",
                ].map((area) => (
                  <span
                    key={area}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/60 border border-white/10"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-80 lg:h-[28rem] border border-white/10">
              <iframe
                src="https://maps.google.com/maps?q=1509+N+Western+Ave+Unit+A+Chicago+IL+60622&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="M. Chavez MD, SC - 1509 N Western Ave, Chicago, IL"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Gradient Bold */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-light to-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            YOUR HEALTH
            <br />
            IS WORTH IT.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Walk-ins welcome. New patients accepted. Most PPO insurance plans
            accepted - and cash pay options available too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center gap-3 bg-gray-950 text-white hover:bg-gray-800 px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-[1.02]"
            >
              Schedule Appointment
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:7732273303"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 px-10 py-5 rounded-xl font-bold text-lg transition-colors"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
