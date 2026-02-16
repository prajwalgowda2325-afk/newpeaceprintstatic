import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTimes,
  FaChevronDown,
  FaGoogle,
} from "react-icons/fa";


/* ---------------- SOCIAL LINKS ---------------- */
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
  { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/917892866463" },
   {
    name: "Google Business",
    icon: FaGoogle,
    href: "https://share.google/5LuoQMrXtQm0kGDBU", // 🔴 replace with your actual link
  },
];

/* ---------------- MODAL ---------------- */
const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-3">
    <div className="relative w-full max-w-2xl rounded-xl bg-card border border-border p-5 sm:p-6 shadow-xl animate-scale-in">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-muted-foreground hover:text-primary transition"
      >
        <FaTimes />
      </button>

      <h3 className="text-lg sm:text-xl font-semibold mb-4">{title}</h3>

      <div className="max-h-[70vh] overflow-y-auto space-y-3 pr-1">
        {children}
      </div>
    </div>
  </div>
);

/* ---------------- ACCORDION ITEM ---------------- */
const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="border border-border rounded-lg overflow-hidden">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left text-sm sm:text-base font-medium bg-muted hover:bg-muted/70 transition"
    >
      <span>{title}</span>
      <FaChevronDown
        className={`shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180 text-primary" : ""
        }`}
      />
    </button>

    {isOpen && (
      <div className="px-4 py-3 text-xs sm:text-sm text-muted-foreground space-y-2 animate-accordion-down">
        {children}
      </div>
    )}
  </div>
);

/* ---------------- FOOTER ---------------- */
const Footer = () => {
  const [openModal, setOpenModal] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <>
      <footer className="bg-secondary border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-5">
            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>

            {/* TAGLINE */}
            <p className="text-sm text-muted-foreground text-center max-w-md">
              Premium customized apparel • Printed with care • Trusted by brands
              & individuals
            </p>

            {/* LINKS */}
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => {
                  setOpenModal("terms");
                  setOpenIndex(null);
                }}
                className="hover:text-primary transition"
              >
                Terms & Conditions
              </button>

              <button
                onClick={() => {
                  setOpenModal("faq");
                  setOpenIndex(null);
                }}
                className="hover:text-primary transition"
              >
                FAQ
              </button>
            </div>

            {/* COPYRIGHT */}
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} Peace Print’s. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ================= TERMS & CONDITIONS ================= */}
      {openModal === "terms" && (
        <Modal title="Terms & Conditions" onClose={() => setOpenModal(null)}>
          {[
            {
              title: "💳 Payment Policy",
              content: (
                <>
                  <p>
                    • Minimum <strong>50% advance payment</strong> is mandatory.
                  </p>
                  <p>
                    • Remaining amount must be paid{" "}
                    <strong>before delivery</strong>.
                  </p>
                  <p>
                    • <strong>Cash on Delivery (COD) is not available</strong>.
                  </p>
                </>
              ),
            },
            {
              title: "🎨 Design & Mockup Approval",
              content: (
                <>
                  <p>• Digital mockup will be shared for confirmation.</p>
                  <p>• Printing starts only after customer approval.</p>
                  <p>• Delayed approval may affect delivery timelines.</p>
                </>
              ),
            },
            {
              title: "❌ No Return / No Refund",
              content: (
                <>
                  <p>
                    • Customized products are non-returnable & non-refundable.
                  </p>
                  <p>• No changes once printing has started.</p>
                </>
              ),
            },
            {
              title: "🖨️ Printing Method Disclaimer",
              content: (
                <>
                  <p>• DTF, Screen Printing & Heat Press methods are used.</p>
                  <p>
                    • Minor color variation may occur due to fabric or screen
                    differences.
                  </p>
                </>
              ),
            },
            {
              title: "🚚 Delivery & Shipping Policy",
              content: (
                <>
                  <p>• Delivery timelines depend on order quantity.</p>
                  <p>• Courier delays are beyond our control.</p>
                  <p>• Shipping charges (if applicable) are extra.</p>
                </>
              ),
            },
            {
              title: "📦 Damage / Defect Claims",
              content: (
                <>
                  <p>
                    • Claims must be raised within <strong>24 hours</strong> of
                    delivery.
                  </p>
                  <p>• Unboxing video or photos are mandatory.</p>
                </>
              ),
            },
            {
              title: "⚠️ Order Cancellation",
              content: (
                <>
                  <p>• Orders cannot be cancelled after printing begins.</p>
                  <p>• Advance payment is non-refundable.</p>
                </>
              ),
            },
          ].map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Modal>
      )}

      {/* ================= FAQ ================= */}
      {openModal === "faq" && (
        <Modal
          title="Frequently Asked Questions"
          onClose={() => setOpenModal(null)}
        >
          {[
            {
              q: "Do you accept bulk or corporate orders?",
              a: "Yes, we handle bulk, corporate, and event orders.",
            },
            {
              q: "Can I provide my own design?",
              a: "Yes. You can share your design or our team can help you create one.",
            },
            {
              q: "Will I receive a mockup before printing?",
              a: "Yes, mockup approval is mandatory before printing.",
            },
            {
              q: "What printing methods do you use?",
              a: "We use DTF, Screen Printing, and Heat Press depending on the requirement.",
            },
            {
              q: "Is Cash on Delivery (COD) available?",
              a: "No. Cash on Delivery (COD) is not available. Orders are processed only after advance payment.",
            },
            {
              q: "How long does delivery take?",
              a: "Typically 3–7 working days after design approval.",
            },
            {
              q: "Do you ship outside Bangalore?",
              a: "Yes, we ship across India.",
            },
            {
              q: "How can I contact Peace Print’s?",
              a: (
                <span>
                  You can reach us via{" "}
                  <a
                    href="https://wa.me/917892866463"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    WhatsApp
                  </a>
                  ,{" "}
                  <a
                    href="https://www.instagram.com/thepeaceprints"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Instagram
                  </a>
                  , or{" "}
                  <a
                    href="https://www.facebook.com/thepeaceprints/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Facebook
                  </a>
                  .
                </span>
              ),
            },
          ].map((item, index) => (
            <AccordionItem
              key={index}
              title={item.q}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            >
              <p>{item.a}</p>
            </AccordionItem>
          ))}
        </Modal>
      )}
    </>
  );
};

export default Footer;
