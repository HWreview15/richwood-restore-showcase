import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restoration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
          Roberts Restore
          <span className="block text-warm-gold">& More</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-soft-cream leading-relaxed max-w-2xl mx-auto">
          Expert craftsmanship and restoration services in Richwood, Ohio. 
          Bringing new life to your treasured pieces with care and precision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-warm-gold hover:bg-accent text-rich-wood font-semibold px-8 py-4 text-lg shadow-warm transition-all duration-300 hover:shadow-elegant"
          >
            Get Free Estimate
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-soft-cream text-soft-cream hover:bg-soft-cream hover:text-rich-wood px-8 py-4 text-lg transition-all duration-300"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;