import { Award, Target, Users, Globe2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Solis International LLP</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your Trusted Partner in Premium Spice Exports from India
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Established in Unjha, Solis International LLP has been delivering premium Indian spices and oil seeds to domestic and global markets. Through our brands Siesta and Samip, we uphold the legacy of purity, taste, and quality that defines the Indian spice trade.
              </p>
              <p>
                As a family-run business based in Unjha - the spice capital of India - we have deep roots in the region's rich agricultural heritage. Our journey began with a simple vision: to bring the authentic flavors and aromas of Indian spices to the global market while maintaining the highest standards of quality and purity.
              </p>
              <p>
                At Solis International LLP, we understand that quality is not just about the product - it's about the entire process. From sourcing from the best farms to state-of-the-art processing and packaging, every step is carefully monitored to ensure that our products meet international standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                Uncompromising standards in every product we export
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Target className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Customer Focus</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated to meeting and exceeding client expectations
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Integrity</h3>
              <p className="text-sm text-muted-foreground">
                Transparent and ethical business practices always
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Global Vision</h3>
              <p className="text-sm text-muted-foreground">
                Connecting Indian quality with worldwide markets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Infrastructure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Processing Facilities</h3>
                <p className="text-muted-foreground">
                  Our modern processing units are equipped with advanced machinery for cleaning, sorting, and grading spices. We maintain strict hygiene standards and follow international food safety protocols.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Quality Control Lab</h3>
                <p className="text-muted-foreground">
                  In-house laboratory with latest testing equipment ensures every batch meets required specifications for moisture, purity, and quality parameters before export.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Storage Facilities</h3>
                <p className="text-muted-foreground">
                  Temperature-controlled warehouses protect our products from contamination and maintain freshness, preserving the natural aroma and flavor of our spices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Packaging Unit</h3>
                <p className="text-muted-foreground">
                  Specialized packaging facility ensures products are packed according to customer requirements with proper labeling and documentation for international shipping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Why Choose Solis International LLP?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Premium Quality:</span> Sourced from the best farms in Unjha and processed with care
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Export Experience:</span> Years of successful international trade and satisfied global clients
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Competitive Pricing:</span> Direct sourcing and efficient operations ensure value for money
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Reliable Supply:</span> Consistent availability and timely delivery to meet your business needs
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Own Brand Focus:</span> All products sold exclusively under our Siesta and Samip brands - we do not offer private labeling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
