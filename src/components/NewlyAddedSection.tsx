import { useEffect, useRef, useState } from "react";
import { Flame } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Oversized Black Tee",
    price: "₹799",
    image: "/products/oversized-tee.jpeg",
  },
  {
    id: 2,
    name: "Premium Hoodie",
    price: "₹1299",
    image: "/products/hoodie.jpeg",
  },
  {
    id: 3,
    name: "Varsity Jacket",
    price: "₹1499",
    image: "/products/jacket.jpg",
  },
  {
    id: 4,
    name: "Corporate Combo Pack",
    price: "Custom Pricing",
    image: "/products/combo.jpg",
  },
  {
    id: 5,
    name: "Streetwear Cap",
    price: "₹299",
    image: "/products/caps.jpg",
  },
  {
    id: 6,
    name: "Unisex Regular Fit Tee",
    price: "₹499",
    image: "/products/regular-tee.jpeg", // add image in /public/products/
  },
];

const WHATSAPP_NUMBER = "917892866463"; // Your WhatsApp number

const NewlyAddedSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);

  /* ================= AUTOPLAY ================= */
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [paused]);

  /* ================= SWIPE ================= */
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      setActive((prev) => (prev + 1) % products.length);
    }
    if (diff < -50) {
      setActive((prev) => (prev - 1 + products.length) % products.length);
    }
  };

  /* ================= WHATSAPP ================= */
  const sendWhatsApp = (product) => {
    const msg =
      "Hi Peace Print's\n\n" +
      "I'm interested in:\n\n" +
      "Product: " +
      product.name +
      "\n" +
      "Price: " +
      product.price +
      "\n\n" +
      "Please share more details.";

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <section
      id="products"
      className="py-24 bg-background overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-2">
          Newly <span className="text-primary">Launched</span> 🔥
        </h2>
        <p className="text-muted-foreground text-sm mb-10 text-center">
          Your ideas, our prints —
          <span className="text-primary font-semibold">
            {" "}
            customized apparel
          </span>
          , crafted & printed with <span className="text-primary">love ❤️</span>
        </p>

        {/* ================= CAROUSEL ================= */}
        <div
          className="relative h-[420px] flex items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {products.map((product, index) => {
            const total = products.length;
            let offset = index - active;

            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            if (Math.abs(offset) > 2) return null;

            return (
              <div
                key={product.id}
                onClick={() => sendWhatsApp(product)}
                className="absolute cursor-pointer transition-all duration-700 ease-out"
                style={{
                  transform: `
          translateX(${offset * 260}px)
          scale(${offset === 0 ? 1 : 0.85})
          rotateY(${offset * -10}deg)
        `,
                  zIndex: offset === 0 ? 20 : 10 - Math.abs(offset),
                  opacity: offset === 0 ? 1 : 0.6,
                }}
              >
                <div className="w-[260px] sm:w-[300px] h-[360px] rounded-3xl overflow-hidden bg-card border border-border shadow-xl hover:shadow-2xl transition">
                  <div className="relative h-[70%]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />

                    <span className="absolute top-3 left-3 flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 text-xs rounded-full font-semibold">
                      <Flame className="w-4 h-4" /> NEW
                    </span>
                  </div>

                  <div className="p-4 text-left">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-primary font-bold mt-1">
                      {product.price}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Tap to chat on WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewlyAddedSection;
