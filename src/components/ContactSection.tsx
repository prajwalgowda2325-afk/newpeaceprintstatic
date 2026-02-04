import { Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            Reach Out
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Contact Us
          </h2>
        </div>

        {/* Contact Card */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-8">

            {/* Phone */}
            <a
              href="tel:+917892866463"
              className="group flex flex-col items-center text-center p-6 rounded-xl hover:bg-primary/5 transition"
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-xs text-muted-foreground mb-1">
                Phone / WhatsApp
              </p>
              <p className="font-semibold text-lg text-foreground">
                +91 78928 66463
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:thepeaceprints@gmail.com"
              className="group flex flex-col items-center text-center p-6 rounded-xl hover:bg-primary/5 transition"
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-xs text-muted-foreground mb-1">
                Email
              </p>
              <p className="font-semibold text-lg text-foreground break-all">
                thepeaceprints@gmail.com
              </p>
            </a>
          </div>

          {/* MAP BELOW */}
          <div className="h-[260px] sm:h-[320px] w-full border-t border-border">
            <iframe
              title="Peace Prints Location"
              src="https://www.google.com/maps?q=Peace+Print's+(Customized+T-Shirts),+Thotada+Guddadhalli+Village,+Bengaluru,+Karnataka+560073&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
