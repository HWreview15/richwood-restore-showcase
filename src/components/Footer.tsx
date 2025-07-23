const Footer = () => {
  return (
    <footer className="bg-rich-wood text-soft-cream py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4 text-warm-gold">
              Roberts Restore & More
            </h3>
            <p className="text-sm leading-relaxed">
              Expert craftsmanship and restoration services in Richwood, Ohio. 
              Bringing new life to your treasured pieces with care and precision.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-warm-gold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Furniture Restoration</li>
              <li>Custom Woodworking</li>
              <li>Refinishing Services</li>
              <li>Repair & Maintenance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-warm-gold">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>Richwood, Ohio</p>
              <p>
                <a href="tel:+14051234567" className="hover:text-warm-gold transition-colors">
                  (405) 123-4567
                </a>
              </p>
              <p>
                <a href="mailto:info@robertsrestore.com" className="hover:text-warm-gold transition-colors">
                  info@robertsrestore.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-brown pt-8 text-center">
          <p className="text-sm">
            © 2024 Roberts Restore & More. All rights reserved. | Proudly serving Richwood, Ohio & surrounding areas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;