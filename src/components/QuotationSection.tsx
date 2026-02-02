import { useState } from "react";
import { Send } from "lucide-react";

const productTypes = [
  "T-Shirt",
  "Oversized Tee",
  "Hoodie",
  "Jacket",
  "Cap / Hat",
  "Corporate Gift Combo",
];

const QuotationSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-2xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
            Get Started
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Get a Custom Quote
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground px-2">
            Fill in your requirements and we'll get back to you with pricing
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-border">
          {submitted ? (
            <div className="text-center py-6 sm:py-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Send className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                Request Sent!
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We will contact you shortly with details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm sm:text-base"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Product Type */}
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Product Type
                </label>
                <select
                  id="product"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm sm:text-base"
                >
                  <option value="">Select a product</option>
                  {productTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  required
                  min="1"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm sm:text-base"
                  placeholder="How many pieces?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Message / Requirements
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us about your design, colors, deadline..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                Send Quote Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuotationSection;
