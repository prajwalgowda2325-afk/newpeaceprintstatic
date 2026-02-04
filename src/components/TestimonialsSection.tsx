import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "VIJAYKUMAR MANE",
    rating: 5,
    text: `Absolutely Superb Quality! I recently ordered a T-shirt from Peace Prints, and I’m seriously impressed! The print quality is top-notch vibrant colors, sharp details, and it feels like it’ll last through many washes.`,
  },
  {
    name: "Anusha anusha Asha",
    rating: 5,
    text: `I’m really happy with my hoodie! The quality is excellent — soft, comfortable, and feels premium. The print came out exactly as I expected.`,
  },
  {
    name: "Shashi Kala",
    rating: 5,
    text: `Their custom t-shirt printing is top-notch — from the quality of the fabric to the precision of the print, everything exceeded my expectations.`,
  },
  {
    name: "Surya",
    rating: 4,
    text: `Absolutely loved the OG power star T-shirt! The design is bold, the fabric feels premium, and it perfectly captures the OG vibe.`,
  },
  {
    name: "Vikas A Bharadwaj",
    rating: 5,
    text: `The fabric quality is excellent, the design is exactly as requested, and the finishing is very neat.`,
  },
  {
    name: "Abhi Sidareddi",
    rating: 5,
    text: `Amazing custom printing on the jacket, it looks really good! Thanks for getting it done so quickly.`,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
            What Our Customers Say
          </h2>
        </div>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button className="swiper-prev absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-background border rounded-full p-2 shadow">
            <ChevronLeft />
          </button>
          <button className="swiper-next absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-background border rounded-full p-2 shadow">
            <ChevronRight />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-card border border-border rounded-2xl p-6 h-[320px] flex flex-col hover:border-primary/50 transition">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "fill-accent text-accent"
                                : "fill-muted text-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Text */}
                  {/* Text */}
                  <div className="overflow-y-auto flex-1 pr-1 scrollbar-hide">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
