import Image from "next/image"

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section with Background and Wave */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white text-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bgmainhero.png"
            alt="About Us Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-800  max-w-3xl mx-auto leading-relaxed">
            We are a global technology and consulting company delivering innovative solutions for digital transformation and business growth across industries.
          </p>
        </div>

        {/* Wave Divider */}
        <div className="absolute -bottom-px left-0 w-full z-0">
          <svg
            viewBox="0 0 1440 325"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-[60px] lg:h-[100px]"
          >
            <path
              d="M810.109 190.723V324.906H1439.97V141.635C1399.11 107.824 1358.5 72.4044 1316.96 48.4386C1146.99 -48.5261 971.704 0.680438 810.109 190.723Z"
              fill="#0A6373"
            />
            <path
              d="M654.316 239.05C706.182 255.407 756.402 284.718 808.124 302.496C881.8 327.838 958.526 329.369 1032.09 303.091C1103.57 277.612 1177.69 215.47 1248.33 183.899C1310.97 155.889 1379.36 144.355 1440 179.351V324.595H366.918V283.141C458.546 224.252 557.938 209.003 654.316 239.052V239.05Z"
              fill="#E66C6C"
            />
            <path
              d="M0 185.047L29.9989 177.248C59.9979 169.739 119.996 153.704 179.994 165.586C239.991 177.029 299.989 216.391 359.987 239.498C419.985 263.043 479.983 270.332 539.981 262.824C599.979 255.025 659.976 231.699 719.974 212.237C779.972 193.066 839.97 177.03 899.968 188.911C959.966 200.355 1019.96 239.717 1079.96 251.162C1139.96 263.043 1199.96 247.007 1259.95 251.162C1319.95 255.028 1379.95 278.35 1409.95 290.013L1439.97 301.858L1439.95 325H0V185.047Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container">
          {/* Who We Are */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Who We Are</h2>
            <p className="text-lg text-neutral-600 text-left leading-relaxed">
              ClickSkill is a next-generation software company offering a broad portfolio of technology solutions and services. We bring together deep industry experience, technical expertise, and agile methodologies to help businesses thrive in a rapidly evolving digital landscape.
              <br /><br />
              Our team of highly skilled professionals is committed to delivering innovative, scalable, and secure software tailored to each client’s unique needs. From consulting and custom development to full-scale enterprise solutions, we partner with organizations across diverse industries to solve complex challenges and create lasting impact.
            </p>
          </div>

          {/* What We Believe */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">What We Believe</h2>
            <p className="text-lg text-neutral-600 text-left leading-relaxed">
              At ClickSkill, our philosophy is rooted in creating strategic, innovative, and tailored solutions that meet each client's goals—while staying within budget and on schedule.
              <br /><br />
              Since day one, we've been committed to delivering forward-thinking technologies that drive real business value.
              <br /><br />
              We believe our success is directly tied to our clients' success, and that mindset fuels every solution we design.
              <br /><br />
              Our dedication, transparency, and customer-first approach have earned us lasting relationships and consistent results.
            </p>
          </div>

          {/* What We Offer */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">What We Offer</h2>
            <p className="text-lg text-neutral-600 text-left leading-relaxed">
              We offer a unique blend of business insight, technical excellence, and proven leadership. Our approach draws from decades of combined experience and a deep understanding of global industry trends.
              <br /><br />
              By aligning our solutions with your business goals and leveraging best-in-class tools, methodologies, and talent, we bring measurable value to your organization.
              <br /><br />
              Innovation, quality, and accountability are not just principles—they are core values we deliver on every day.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Why Choose Us</h2>
            <p className="text-lg text-neutral-600 text-left leading-relaxed">
              ClickSkill is one of the fastest-growing software firms—recognized for our ability to serve as a true end-to-end technology partner.
              <br /><br />
              <strong>An all-round partner for your business needs:</strong>
              <br />
              <strong>Global Delivery Model:</strong> Our Global Capability Centers (GCCs) allow us to provide 24/7 support, fast delivery cycles, and significant cost efficiencies. By combining onshore client engagement with offshore technical execution, we offer a competitive edge without compromising quality.
              <br /><br />
              <strong>As Consulting Experts:</strong> We help you shape digital strategies and products that align with your unique business goals.
              <br />
              <strong>As Technology Experts:</strong> We deliver scalable and future-ready systems built with compatibility across platforms and modern frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose ClickSkill (Highlights) */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Why Choose ClickSkill</h2>
            <p className="text-xl text-neutral-600">
              We combine deep domain expertise, modern technologies, and agile execution to deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Client-Centric Approach</h3>
              <p className="text-neutral-600">Tailored solutions built around your goals and challenges.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Expert Team</h3>
              <p className="text-neutral-600">Multidisciplinary professionals with global experience.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Proven Results</h3>
              <p className="text-neutral-600">Track record of transforming processes and scaling growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Build the Future Together</h2>
            <p className="text-xl mb-8 text-white/90">
              Partner with us to accelerate your digital transformation with innovation, integrity, and impact.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
