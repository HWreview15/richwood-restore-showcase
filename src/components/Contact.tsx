import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-soft-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to restore your treasured pieces? Contact us today for a free consultation 
            and estimate on your restoration project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary font-serif">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-rich-wood font-bold">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Richwood, Ohio<br />
                    Serving Union County & surrounding areas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-rich-wood font-bold">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:+14051234567" className="hover:text-warm-brown transition-colors">
                      (405) 123-4567
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-rich-wood font-bold">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@robertsrestore.com" className="hover:text-warm-brown transition-colors">
                      info@robertsrestore.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-rich-wood font-bold">🕒</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Hours</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: By appointment</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="space-y-8">
            <Card className="shadow-warm bg-gradient-hero text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 font-serif">Free Consultation</h3>
                <p className="mb-6 text-soft-cream leading-relaxed">
                  Not sure where to start? We offer free consultations to assess your 
                  restoration needs and provide honest recommendations.
                </p>
                <Button 
                  size="lg"
                  className="bg-warm-gold hover:bg-accent text-rich-wood font-semibold px-8 py-4 shadow-warm transition-all duration-300"
                >
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-warm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-4 font-serif">Why Choose Us?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Family-owned and operated
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    20+ years of experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Quality materials and techniques
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Competitive pricing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Satisfaction guaranteed
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;