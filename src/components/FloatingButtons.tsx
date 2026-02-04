import { ArrowUp,  } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-2 sm:gap-3 z-50">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`p-2.5 sm:p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917892866463?text=Hi%20Peace%20Print,%20I'm%20interested%20in%20custom%20printing."
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 sm:p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
