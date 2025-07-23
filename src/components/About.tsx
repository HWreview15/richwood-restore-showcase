import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-soft-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
            About Roberts Restore & More
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over two decades of experience in restoration and craftsmanship, 
            we take pride in bringing your cherished items back to their former glory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-warm hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-rich-wood">20+</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Years Experience</h3>
              <p className="text-muted-foreground">
                Two decades of expertise in furniture restoration, refinishing, and custom craftsmanship.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-warm hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-rich-wood">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                We stand behind our work with a commitment to excellence and customer satisfaction.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-warm hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-rich-wood">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Local & Trusted</h3>
              <p className="text-muted-foreground">
                Proudly serving Richwood, Ohio and surrounding communities with personalized service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;