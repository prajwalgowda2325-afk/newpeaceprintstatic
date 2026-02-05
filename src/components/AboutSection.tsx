const AboutSection = () => {
  const clients = [
    "/clients/acharya.png",
    "/clients/voc.png",
    "/clients/zingry.png",
    "/clients/loundrychamp.png",
    "/clients/mercedesbenztruck.png",
    "/clients/blingsevents.png",
    "/clients/kidzee.png",
    "/clients/peacekannadiga.png",
    "/clients/sunmobility.png",
    "/clients/appartment.png",
    "/clients/pspk.png",
    "/clients/peacekichen.png",
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-6 sm:px-10 lg:px-20 bg-background text-foreground overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 animate-fade-in-up">
          <span className="inline-block text-sm tracking-widest uppercase text-primary font-semibold">
            About Us
          </span>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Wear Your <span className="text-primary">Identity</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            <strong>Peace Print’s</strong> is more than just a clothing brand —
            we’re a creative studio turning ideas into wearable statements. From
            bold oversized tees to premium hoodies, jackets, caps, and
            customized corporate gifts, we print confidence into every piece.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Whether you’re an individual, startup, college, or corporate team,
            we help you express your brand, vibe, and message with high-quality
            fabrics, sharp prints, and attention to detail.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {[
              "Custom T-Shirts",
              "Oversized Tees",
              "Hoodies & Jackets",
              "Corporate Gifts",
            ].map((item) => (
              <div
                key={item}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative animate-fade-in-up delay-200">
          <div className="relative rounded-sm overflow-hidden shadow-sm">
            <img
              src="/favicon.png"
              alt="Peace Print's Custom Apparel"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-6 shadow-xl backdrop-blur">
            <p className="text-3xl font-bold text-primary">500+</p>
            <p className="text-sm text-muted-foreground">
              Happy Customers & Brands
            </p>
          </div>
        </div>
      </div>

      {/* ================= OUR CLIENTS MARQUEE ================= */}
      <div className="max-w-7xl mx-auto mt-24">
        <h3 className="text-center text-xl sm:text-2xl font-semibold mb-8">
          Trusted by <span className="text-primary">Our Clients</span>
        </h3>

        <div className="relative overflow-hidden group">
          <div className="flex w-max animate-marquee lg:animate-marquee-lg gap-10">
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[120px] h-[60px] rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition"
              >
                <img
                  src={logo}
                  alt="Client Logo"
                  className="max-h-10 object-contain  transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ====================================================== */}
    </section>
  );
};

export default AboutSection;
