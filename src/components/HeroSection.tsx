import heroImage from "@/assets/hero-apparel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Peace Print Premium Apparel"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Brand Name */}
          <h1 className="animate-hero-title font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
            Peace
            <span className="text-primary animate-glow-soft">Print's</span>
          </h1>

          {/* Services Line */}
          <p className="animate-fade-in-delay-1 text-sm sm:text-lg md:text-xl text-foreground/80 font-medium mb-3 sm:mb-4 px-2">
            Customized T-Shirts • Oversized Tees • Hoodies • Jackets • Caps
          </p>

          {/* Tagline */}
          <p className="animate-fade-in-delay-2 text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4 mb-6">
            Custom printing for individuals & corporate gifting
          </p>

          {/* Detailed Description */}
          <p className="animate-fade-up text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto px-4">
            At{" "}
            <span className="font-semibold text-foreground">Peace Prints</span>,
            we bring your ideas vividly to life with premium custom t-shirt
            printing.
          </p>

          <p className="animate-fade-up-delay-1 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto px-4 mt-3">
            Our methods include{" "}
            <span className="font-medium text-foreground">DTF</span>,
            <span className="font-medium text-foreground"> sublimation</span>,
            and
            <span className="font-medium text-foreground"> heat-press</span> —
            crafted for quality and comfort.
          </p>

          <p className="animate-fade-up-delay-2 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto px-4 mt-3">
            From one-off creations to bulk orders, enjoy affordable pricing,
            fast delivery, eco-friendly inks, expert color matching, and
            flexible design support.
          </p>

          <p className="animate-fade-up-delay-3 text-base sm:text-lg font-semibold text-primary mt-4">
            Pure Quality. Perfect Fit. Creative Expression.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
