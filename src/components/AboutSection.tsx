const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 px-6 sm:px-10 lg:px-20 bg-background text-foreground overflow-hidden">
      
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
            we’re a creative studio turning ideas into wearable statements.
            From bold oversized tees to premium hoodies, jackets, caps, and
            customized corporate gifts, we print confidence into every piece.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Whether you’re an individual, startup, college, or corporate team,
            we help you express your brand, vibe, and message with 
            high-quality fabrics, sharp prints, and attention to detail.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Custom T-Shirts
            </div>
            <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Oversized Tees
            </div>
            <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Hoodies & Jackets
            </div>
            <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Corporate Gifts
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative animate-fade-in-up delay-200">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/about-peace-prints.jpg"
              alt="Peace Print's Custom Apparel"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-6 shadow-xl backdrop-blur">
            <p className="text-3xl font-bold text-primary">1000+</p>
            <p className="text-sm text-muted-foreground">
              Happy Customers & Brands
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
