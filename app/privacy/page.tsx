import Image from "next/image"

export default function PrivacyPolicy() {
  return (
    <div className="pt-20">
      {/* Hero Section with Background */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white text-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bgmainhero.png"
            alt="Privacy Policy Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-800 mt-4 max-w-2xl mx-auto">
            Learn how we handle your data and protect your privacy at ClickSkill.
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

      {/* Main Article Content */}
      <article className="p-8 max-w-4xl mx-auto text-gray-800">
        <p className="mb-4">
          ClickSkill values your privacy. This Privacy Policy outlines the types of personal information we collect,
          how we use it, and how we safeguard your data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <p className="mb-4">
          We collect information you provide directly, such as when you fill out a form or contact us, and data
          automatically collected from your device.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <p className="mb-4">
          We use your information to respond to inquiries, provide services, improve user experience, and communicate
          updates.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Sharing</h2>
        <p className="mb-4">
          We do not sell your personal data. We may share your data with trusted service providers as necessary to
          deliver our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your information against unauthorized access or
          disclosure.
        </p>
      </article>
    </div>
  )
}
