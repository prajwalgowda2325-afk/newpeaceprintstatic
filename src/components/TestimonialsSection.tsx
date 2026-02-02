import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "VIJAYKUMAR MANE",
    rating: 5,
    text: `Absolutely Superb Quality! I recently ordered a T-shirt from Peace Prints, and I’m seriously impressed! The print quality is top-notch vibrant colors, sharp details, and it feels like it’ll last through many washes. The fabric is comfortable too, which is a bonus. Overall, an awesome experience. Highly recommend them if you’re looking for great T-shirt prints`,
  },
  {
    name: "Anusha anusha Asha",
    rating: 5,
    text: `I’m really happy with my hoodie! The quality is excellent — soft, comfortable, and feels premium. The print came out exactly as I expected, clear and vibrant. Big thanks to Peace Prints for the great work! Their customer service was quick to respond, and delivery was super fast too. Overall, an amazing experience`,
  },
  {
    name: "Shashi Kala",
    rating: 5,
    text: `I couldn’t be happier with my experience with Peace Prints. Their custom t-shirt printing is top-notch — from the quality of the fabric to the precision of the print, everything exceeded my expectations.
The design came out exactly as I envisioned it: vibrant, clean, and long-lasting. What really stood out was their attention to detail and customer service. They were responsive, helpful with design tweaks, and made the whole process smooth and stress-free.
If you're looking for custom t-shirts that combine creativity, quality, and care — Peace Prints is the way to go. I’ll definitely be coming back for more!`,
  },
  {
    name: "Surya",
    rating: 4,
    text: `Absolutely loved the OG power star T-shirt! The design is bold, the fabric feels premium, and it perfectly captures the OG vibe. Wearing it feels like carrying Powerstar's energy with me. Totally worth it! Good quality T-shirt with a cool powerstar design. Comfortable to wear and looks great. Loved it.`,
  },
  {
    name: "Vikas A Bharadwaj",
    rating: 5,
    text:`I’m extremely impressed with the custom-made t-shirt. The fabric quality is excellent, the design is exactly as requested, and the finishing is very neat. Thank you for the wonderful service — highly recommended!`,
  },
  {
    name: "Abhi Sidareddi",
    rating: 5,
    text: `Amazing custom printing on the jacket,it looks really good! Thanks for getting it done so quickly, in just 30 minutes`,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
            Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Don't just take our word for it — hear from our satisfied customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Header with Avatar and Name */}
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm sm:text-base">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</h4>
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          i < testimonial.rating 
                            ? "fill-accent text-accent" 
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
