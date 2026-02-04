import { useState } from "react";
import { X } from "lucide-react";

export default function ServiceDetails({ selectedService }) {
  const [showSamples, setShowSamples] = useState(false);

  if (!selectedService) return null;

  return (
    <>
      <div className="mt-4 space-y-6">
        {/* Description */}
        <p className="text-muted-foreground">
          {selectedService.description}
        </p>

        {/* Custom Pricing */}
        {selectedService.customPricing ? (
          <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
            <h4 className="font-semibold text-lg mb-2">
              Custom Pricing Based on Requirements
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Quantity</li>
              <li>• Product types</li>
              <li>• Customization</li>
              <li>• Packaging</li>
            </ul>
            {selectedService.bulkNote && (
              <p className="text-sm text-muted-foreground mt-4">
                {selectedService.bulkNote}
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">
              Pricing by Quality & Quantity
            </h4>

            {selectedService.gsmOptions?.map((option, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-border">
                <h5 className="text-primary font-medium mb-3">
                  {option.gsm}
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {option.tiers.map((tier, i) => (
                    <div
                      key={i}
                      className="flex justify-between p-2 rounded-lg bg-secondary"
                    >
                      <span className="text-sm text-muted-foreground">
                        {tier.quantity}
                      </span>
                      <span className="font-semibold">
                        {tier.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Shipping */}
        <div className="p-4 rounded-xl bg-muted/50 border border-border">
          <p className="text-sm text-muted-foreground">
            🚚 <span className="font-medium">Shipping:</span>{" "}
            {selectedService.shippingNote}
          </p>
        </div>

        {/* View Samples */}
        {selectedService.samples && (
          <button
            onClick={() => setShowSamples(true)}
            className="w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
          >
            View Samples
          </button>
        )}
      </div>

      {/* Samples Modal */}
      {showSamples && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="relative bg-background rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowSamples(false)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>

            <h3 className="text-xl font-semibold mb-4">
              Sample Designs
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {selectedService.samples?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Sample"
                  className="rounded-xl h-40 w-full object-cover border"
                />
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary/10 text-center">
              <p className="text-sm text-muted-foreground">
                For more details & customization
              </p>
              <p className="text-lg font-semibold text-primary">
                📞 +91 78928 66463
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
