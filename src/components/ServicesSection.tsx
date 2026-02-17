import { useState } from "react";
import { Shirt, Package, Layers, Award, HardHat, Gift, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PricingTier {
  quantity: string;
  price: string;
}

interface GsmOption {
  gsm: string;
  tiers: PricingTier[];
}

interface ServiceDetail {
  icon: React.ElementType;
  title: string;
  description: string;
  basePrice: string;
  priceNote: string;
  gsmOptions?: GsmOption[];
  bulkNote?: string;
  shippingNote: string;
  customPricing?: boolean;
  samples?: string[];
}

const services: ServiceDetail[] = [
  {
    icon: Shirt,
    title: "Customized T-Shirts",
    description:
      "Premium tees with your designs, perfect for branding, events, teams, and everyday wear.",
    basePrice: "₹349",
    priceNote: "onwards",
    gsmOptions: [
      {
        gsm: "REGULAR  T-Shirts (Premium) 180GSM TO 220GSM",
        tiers: [
          { quantity: "1-10 pcs", price: "₹499/pc" },
          { quantity: "11-50 pcs", price: "₹449/pc" },
          { quantity: "51-100 pcs", price: "₹399/pc" },
          { quantity: "100+ pcs", price: "₹349/pc" },
        ],
      },
      // {
      //   gsm: "180 GSM (Premium)",
      //   tiers: [
      //     { quantity: "1-10 pcs", price: "₹349/pc" },
      //     { quantity: "11-50 pcs", price: "₹319/pc" },
      //     { quantity: "51-100 pcs", price: "₹289/pc" },
      //     { quantity: "100+ pcs", price: "₹259/pc" },
      //   ],
      // },
      {
        gsm: "Collar Polo T-Shirts (Premium) 220GSM",
        tiers: [
          { quantity: "1-10 pcs", price: "₹599/pc" },
          { quantity: "11-20 pcs", price: "₹459/pc" },
          { quantity: "21-30 pcs", price: "₹399/pc" },
          { quantity: "30+ pcs", price: "₹359/pc" },
        ],
      },
    ],
    bulkNote: "Orders above 250 pcs: Special wholesale rates available",
    shippingNote:
      "Free shipping on orders above ₹2,000 | Flat ₹99 for smaller orders",
  },
  {
    icon: Layers,
    title: "Oversized Tees",
    description: "Trendy streetwear-style oversized fits",
    basePrice: "₹649",
    priceNote: "onwards",
    gsmOptions: [
      {
        gsm: "260 GSM (Premium)",
        tiers: [
          { quantity: "1-10 pcs", price: "₹799/pc" },
          { quantity: "11-50 pcs", price: "₹749/pc" },
          { quantity: "51-100 pcs", price: "₹699/pc" },
          { quantity: "100+ pcs", price: "₹649/pc" },
        ],
      },
      // {
      //   gsm: "240 GSM (Premium)",
      //   tiers: [
      //     { quantity: "1-10 pcs", price: "₹449/pc" },
      //     { quantity: "11-50 pcs", price: "₹419/pc" },
      //     { quantity: "51-100 pcs", price: "₹389/pc" },
      //     { quantity: "100+ pcs", price: "₹359/pc" },
      //   ],
      // },
      // {
      //   gsm: "280 GSM (Drop Shoulder)",
      //   tiers: [
      //     { quantity: "1-10 pcs", price: "₹499/pc" },
      //     { quantity: "11-50 pcs", price: "₹469/pc" },
      //     { quantity: "51-100 pcs", price: "₹439/pc" },
      //     { quantity: "100+ pcs", price: "₹399/pc" },
      //   ],
      // },
    ],
    bulkNote: "Orders above 250 pcs: Special wholesale rates available",
    shippingNote:
      "Free shipping on orders above ₹2,500 | Flat ₹99 for smaller orders",
  },
  {
    icon: Package,
    title: "Hoodies",
    description: "Cozy hoodies for all seasons",
    basePrice: "₹949",
    priceNote: "onwards",
    gsmOptions: [
      {
        gsm: "300 GSM (Premium)",
        tiers: [
          { quantity: "1-10 pcs", price: "₹1299/pc" },
          { quantity: "11-50 pcs", price: "₹1199/pc" },
          { quantity: "51-100 pcs", price: "₹999/pc" },
          { quantity: "100+ pcs", price: "₹949/pc" },
        ],
      },
      // {
      //   gsm: "400 GSM (Heavy Fleece)",
      //   tiers: [
      //     { quantity: "1-10 pcs", price: "₹849/pc" },
      //     { quantity: "11-50 pcs", price: "₹799/pc" },
      //     { quantity: "51-100 pcs", price: "₹749/pc" },
      //     { quantity: "100+ pcs", price: "₹699/pc" },
      //   ],
      // },
      // {
      //   gsm: "500 GSM (Premium Winter)",
      //   tiers: [
      //     { quantity: "1-10 pcs", price: "₹999/pc" },
      //     { quantity: "11-50 pcs", price: "₹949/pc" },
      //     { quantity: "51-100 pcs", price: "₹899/pc" },
      //     { quantity: "100+ pcs", price: "₹849/pc" },
      //   ],
      // },
    ],
    bulkNote: "Orders above 200 pcs: Special wholesale rates available",
    shippingNote:
      "Free shipping on orders above ₹3,000 | Flat ₹149 for smaller orders",
  },
  {
    icon: Award,
    title: "Jackets",
    description: "Custom bomber & varsity jackets",
    basePrice: "₹899",
    priceNote: "onwards",
    gsmOptions: [
      {
        gsm: "Bomber Jacket (Polyester)",
        tiers: [
          { quantity: "1-10 pcs", price: "₹1099/pc" },
          { quantity: "11-50 pcs", price: "₹999/pc" },
          { quantity: "51-100 pcs", price: "₹949/pc" },
          { quantity: "100+ pcs", price: "₹899/pc" },
        ],
      },
      {
        gsm: "Varsity Jacket (Wool Blend)",
        tiers: [
          { quantity: "1-10 pcs", price: "₹1,499/pc" },
          { quantity: "11-50 pcs", price: "₹1,399/pc" },
          { quantity: "51-100 pcs", price: "₹1,299/pc" },
          { quantity: "100+ pcs", price: "₹1,199/pc" },
        ],
      },
      {
        gsm: "Denim Jacket",
        tiers: [
          { quantity: "1-10 pcs", price: "₹1,299/pc" },
          { quantity: "11-50 pcs", price: "₹1,199/pc" },
          { quantity: "51-100 pcs", price: "₹1,099/pc" },
          { quantity: "100+ pcs", price: "₹999/pc" },
        ],
      },
    ],
    bulkNote: "Orders above 100 pcs: Special wholesale rates available",
    shippingNote:
      "Free shipping on orders above ₹5,000 | Flat ₹199 for smaller orders",
  },
  {
    icon: HardHat,
    title: "Hats / Caps",
    description: "Embroidered & printed headwear",
    basePrice: "₹149",
    priceNote: "onwards",
    gsmOptions: [
      {
        gsm: "Baseball Cap (Cotton)",
        tiers: [
          { quantity: "1-25 pcs", price: "₹299/pc" },
          { quantity: "26-50 pcs", price: "₹249/pc" },
          { quantity: "51-100 pcs", price: "₹199/pc" },
          { quantity: "100+ pcs", price: "₹149/pc" },
        ],
      },
      {
        gsm: "Snapback Cap",
        tiers: [
          { quantity: "1-25 pcs", price: "₹249/pc" },
          { quantity: "26-50 pcs", price: "₹229/pc" },
          { quantity: "51-100 pcs", price: "₹209/pc" },
          { quantity: "100+ pcs", price: "₹189/pc" },
        ],
      },
      {
        gsm: "Bucket Hat",
        tiers: [
          { quantity: "1-25 pcs", price: "₹279/pc" },
          { quantity: "26-50 pcs", price: "₹259/pc" },
          { quantity: "51-100 pcs", price: "₹239/pc" },
          { quantity: "100+ pcs", price: "₹219/pc" },
        ],
      },
    ],
    bulkNote: "Orders above 500 pcs: Special wholesale rates available",
    shippingNote:
      "Free shipping on orders above ₹1,500 | Flat ₹79 for smaller orders",
  },
  {
    icon: Gift,
    title: "Corporate Gift Combos",
    description: "Complete branding packages",
    basePrice: "Custom",
    priceNote: "Get a quote",
    customPricing: true,
    bulkNote: "Includes: T-shirts, Caps, Bags, Notebooks, Bottles & more",
    shippingNote: "Free shipping on all corporate orders | Pan India delivery",
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(
    null,
  );

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Click on any product to see detailed pricing
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="group p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center cursor-pointer hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 text-primary mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <h3 className="font-display text-sm sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-2 line-clamp-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                {service.description}
              </p>
              <div className="pt-2 sm:pt-3 border-t border-border">
                <span className="text-lg sm:text-2xl font-bold text-primary">
                  {service.basePrice}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground ml-1">
                  {service.priceNote}
                </span>
              </div>
              <p className="text-xs text-primary mt-2  group-hover:opacity-100 transition-opacity ">
                Tap for details →
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-center text-muted-foreground mt-8 sm:mt-12 text-sm sm:text-lg">
          Bulk orders & corporate branding available
        </p>
      </div>

      {/* Pricing Detail Modal */}
      <Dialog
        open={!!selectedService}
        onOpenChange={() => setSelectedService(null)}
      >
        <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border mx-2 sm:mx-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 text-primary">
                    <selectedService.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  {selectedService.title}
                </DialogTitle>
              </DialogHeader>

              <div className="mt-4 space-y-6">
                {/* Description */}
                <p className="text-muted-foreground">
                  {selectedService.description}
                </p>

                {/* Custom Pricing Message for Corporate */}
                {selectedService.customPricing ? (
                  <div className="space-y-4">
                    <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                      <h4 className="font-semibold text-lg text-foreground mb-2">
                        Custom Pricing Based on Requirements
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Corporate gift combos are tailored to your specific
                        needs. Pricing depends on:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Quantity of items per combo</li>
                        <li>• Types of products included</li>
                        <li>• Customization complexity</li>
                        <li>• Packaging requirements</li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {selectedService.bulkNote}
                    </p>
                  </div>
                ) : (
                  /* GSM Options & Pricing Tiers */
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-base sm:text-lg text-foreground">
                      Pricing by Quality & Quantity
                    </h4>
                    {selectedService.gsmOptions?.map((option, idx) => (
                      <div
                        key={idx}
                        className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-background border border-border"
                      >
                        <h5 className="font-medium text-primary mb-2 sm:mb-3 text-sm sm:text-base">
                          {option.gsm}
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {option.tiers.map((tier, tierIdx) => (
                            <div
                              key={tierIdx}
                              className="flex justify-between items-center p-2 rounded-lg bg-secondary"
                            >
                              <span className="text-xs sm:text-sm text-muted-foreground">
                                {tier.quantity}
                              </span>
                              <span className="font-semibold text-sm sm:text-base text-foreground">
                                {tier.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bulk Order Note */}
                {selectedService.bulkNote && !selectedService.customPricing && (
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <p className="text-sm font-medium text-primary">
                      🎁 {selectedService.bulkNote}
                    </p>
                  </div>
                )}

                {/* Shipping Info */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <p className="text-sm text-muted-foreground">
                    🚚{" "}
                    <span className="font-medium text-foreground">
                      Shipping:
                    </span>{" "}
                    {selectedService.shippingNote}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
