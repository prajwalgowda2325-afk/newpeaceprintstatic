import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
            Reach Out
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Contact Us
          </h2>
        </div>

        {/* Business Card Style Contact */}
        <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-12 border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center">
            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="group flex flex-col items-center p-4 sm:p-6 rounded-xl hover:bg-primary/5 transition-colors"
            >
              <div className="p-3 sm:p-4 rounded-full bg-primary/10 text-primary mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                Phone / WhatsApp
              </p>
              <p className="text-foreground font-semibold text-base sm:text-lg">
                +91 78928 66463
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:thepeaceprints@gmail.com"
              className="group flex flex-col items-center p-4 sm:p-6 rounded-xl hover:bg-primary/5 transition-colors"
            >
              <div className="p-3 sm:p-4 rounded-full bg-primary/10 text-primary mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                Email
              </p>
              <p className="text-foreground font-semibold text-base sm:text-lg break-all sm:break-normal">
                thepeaceprints@gmail.com
              </p>
            </a>

            {/* Location */}
            <div className="flex flex-col items-center p-4 sm:p-6 rounded-xl">
              <a
                href="https://www.google.com/maps/dir//Peace+Print's+(Customized+T-Shirts),+Thotada+Guddadhalli+Village,+Bengaluru,+Totadaguddadahalli,+Karnataka+560073"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-4 sm:p-6 rounded-xl hover:bg-primary/5 transition-colors"
              >
                <div className="p-3 sm:p-4 rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                  Location
                </p>
                <p className="text-foreground font-semibold text-base sm:text-lg hover:text-primary transition">
                  Thotada Guddadhalli Village, Bengaluru, Totadaguddadahalli,
                  Karnataka 560073
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
