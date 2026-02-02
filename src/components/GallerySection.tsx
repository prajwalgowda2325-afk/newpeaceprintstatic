import gallery1 from "@/assets/acharya.webp";
import gallery2 from "@/assets/bahubali.webp";
import gallery3 from "@/assets//karnataka.webp";
import gallery4 from "@/assets/voc.webp";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";



const galleryImages = [
  { src: gallery1, alt: "Custom t-shirt print" },
  { src: gallery2, alt: "Premium hoodies" },
  { src: gallery3, alt: "Event merchandise" },
  { src: gallery4, alt: "Embroidered cap" },
  { src: gallery5, alt: "Custom jacket" },
  { src: gallery6, alt: "Oversized tee" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg">
            Some of our work done till now
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-36 sm:h-48 md:h-64 object-cover rounded-lg sm:rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
