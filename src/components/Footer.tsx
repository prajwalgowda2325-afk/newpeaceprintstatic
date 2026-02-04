import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/thepeaceprints",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/thepeaceprints/",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/917892866463",
  },
];


const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {/* Social Links - Icon Only */}
          <div className="flex gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            Follow us for latest designs & offers
          </p>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Peace Print's. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
