import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Furniture Restoration",
      description: "Expert restoration of antique and vintage furniture, bringing pieces back to their original beauty.",
      features: ["Antique refinishing", "Wood repair", "Hardware restoration", "Custom matching"]
    },
    {
      title: "Custom Woodworking",
      description: "Handcrafted custom pieces built to your specifications with attention to detail.",
      features: ["Custom cabinetry", "Built-in storage", "Furniture repair", "Wood staining"]
    },
    {
      title: "Refinishing Services",
      description: "Professional refinishing services to revitalize your furniture and woodwork.",
      features: ["Stripping & sanding", "Stain application", "Protective finishes", "Color matching"]
    },
    {
      title: "Repair & Maintenance",
      description: "Comprehensive repair services to extend the life of your furniture and fixtures.",
      features: ["Joint repair", "Hardware replacement", "Structural fixes", "Preventive care"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From complete restorations to custom craftsmanship, we offer comprehensive services 
            to meet all your furniture and woodworking needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-warm hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;