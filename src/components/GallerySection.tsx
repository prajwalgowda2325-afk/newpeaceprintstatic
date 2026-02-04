import { useEffect, useRef, useState } from "react";

import gallery1 from "@/assets/acharya.webp";
import gallery2 from "@/assets/bahubali.webp";
import gallery3 from "@/assets/karnataka.webp";
import gallery4 from "@/assets/voc.webp";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/voc.webp";
import gallery8 from "@/assets/voc.webp";

const galleryImages = [
  { src: gallery1, alt: "Custom t-shirt print" },
  { src: gallery2, alt: "Premium hoodies" },
  { src: gallery3, alt: "Event merchandise" },
  { src: gallery4, alt: "Embroidered cap" },
  { src: gallery5, alt: "Custom jacket" },
  { src: gallery6, alt: "Oversized tee" },
  { src: gallery7, alt: "Corporate branding" },
  { src: gallery8, alt: "Bulk order prints" },
];

const INITIAL_COUNT = 6;

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const touchStartX = useRef(0);
  const slideTimer = useRef(null);

  const total = galleryImages.length;
  const visibleImages = galleryImages.slice(0, INITIAL_COUNT);

  /* ---------- Lightbox helpers ---------- */
  const openImage = (index) => setCurrentIndex(index);
  const closeImage = () => setCurrentIndex(null);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % total);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + total) % total);

  /* ---------- Keyboard ---------- */
  useEffect(() => {
    if (currentIndex === null && !showModal) return;

    const handleKey = (e) => {
      if (e.key === "Escape") {
        closeImage();
        setShowModal(false);
      }
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, showModal]);

  /* ---------- Auto slideshow ---------- */
  useEffect(() => {
    if (currentIndex === null) return;
    slideTimer.current = setInterval(nextImage, 4000);
    return () => clearInterval(slideTimer.current);
  }, [currentIndex]);

  /* ---------- Swipe ---------- */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 50) nextImage();
    if (delta < -50) prevImage();
  };

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Gallery
          </h2>
          <p className="text-muted-foreground mt-2">
            Some of our work done till now
          </p>
        </div>

        {/* Masonry Grid (UNCHANGED SIZE) */}
        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {visibleImages.map((img, index) => (
            <button
              key={index}
              onClick={() => openImage(index)}
              className="w-full overflow-hidden rounded-xl focus:outline-none group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {/* View More Button */}
        {total > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
            >
              View More Images ({total - INITIAL_COUNT}+)
            </button>
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div
          className="fixed inset-0 z-40 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-background max-w-6xl w-full max-h-[85vh] rounded-2xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">All Images</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-xl hover:text-primary"
              >
                ✕
              </button>
            </div>

            {/* Full Masonry (same image sizes) */}
            <div className="columns-2 md:columns-3 gap-3 space-y-3">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => openImage(index)}
                  className="w-full overflow-hidden rounded-xl group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= LIGHTBOX ================= */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeImage}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImage}
              className="absolute -top-10 right-0 text-white text-xl hover:text-primary"
            >
              ✕
            </button>

            <div className="absolute -top-10 left-0 text-white text-sm">
              {currentIndex + 1} / {total}
            </div>

            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="mx-auto max-h-[70vh] object-contain rounded-xl"
            />

            <p className="text-center text-white/80 text-sm mt-3">
              {galleryImages[currentIndex].alt}
            </p>

            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-primary"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-primary"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
