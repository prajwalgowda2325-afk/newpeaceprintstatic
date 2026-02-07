const AboutSection = () => {
  const clients = [
    { src: "/clients/acharya.png", name: "Acharya Institute" },
    { src: "/clients/voc.png", name: "VOC" },
    { src: "/clients/zingry.png", name: "Zingry" },
    { src: "/clients/loundrychamp.png", name: "Laundry Champ" },
    { src: "/clients/mercedesbenztruck.png", name: "Mercedes Benz Truck" },
    { src: "/clients/blingsevents.png", name: "Bling Events" },
    { src: "/clients/kidzee.png", name: "Kidzee" },
    { src: "/clients/peacekannadiga.png", name: "Peace Kannadiga" },
    { src: "/clients/sunmobility.png", name: "Sun Mobility" },
    { src: "/clients/appartment.png", name: "Apartment" },
    { src: "/clients/pspk.png", name: "PSPK" },
    { src: "/clients/peacekichen.png", name: "Peace Kitchen" },
    { src: "/clients/meddy.png", name: "Meddy" },
    { src: "/clients/cafe.png", name: "Cafe" },
     { src: "/clients/sonali.png", name: "Sonali" },
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

        <div className="relative overflow-hidden">
          <div
            className="
      flex w-max gap-10
      animate-marquee lg:animate-marquee-lg
      hover:[animation-play-state:paused]
    "
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="
          group relative flex flex-col items-center justify-center
          min-w-[140px] h-[80px]
          rounded-xl bg-card border border-border
          shadow-sm hover:shadow-md transition
        "
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="
            max-h-14 max-w-[140px]
            object-contain transition duration-300
            group-hover:opacity-30
          "
                />

                {/* ✅ Name shows ONLY for hovered logo */}
                <span
                  className="
            absolute text-xs font-medium text-foreground
            opacity-0 group-hover:opacity-100
            transition
          "
                >
                  {client.name}
                </span>
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
