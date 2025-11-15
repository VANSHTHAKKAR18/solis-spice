import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Package, TrendingUp } from "lucide-react";
import bothBrands from "@/assets/brands/both-brands-catalog.jpg";

const Brands = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Brands</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Unjha's Famous - Premium Quality Spices & Seeds
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
              <p className="text-sm font-medium text-foreground">
                <strong>Important:</strong> Solis International LLP sells products exclusively under its own registered brands – <span className="text-primary font-semibold">Siesta</span> and <span className="text-secondary font-semibold">Samip</span>. We do not offer private labeling or custom packaging for other companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Siesta Brand */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                <span className="text-primary">Siesta</span> - Premium Consumer Spices
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Siesta represents the finest quality spices from Unjha, Gujarat. Known for "Best Quality with Originality", our Siesta brand delivers pure, authentic spices that bring the genuine taste of India to kitchens worldwide.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">100% Natural Quality</h4>
                    <p className="text-muted-foreground">Premium quality products with originality - no additives, no preservatives</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Consumer Packaging</h4>
                    <p className="text-muted-foreground">Available in sizes from 50g to 30kg for households and businesses</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Unjha's Famous</h4>
                    <p className="text-muted-foreground">Trusted brand from India's spice capital with decades of expertise</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Samip Brand */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                <span className="text-secondary">Samip</span> - Bulk & Export Range
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our Samip brand is designed for bulk buyers and B2B clients looking for premium quality spices in larger quantities. Perfect for food manufacturers, restaurants, and international distributors.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Wholesale Packaging</h4>
                    <p className="text-muted-foreground">Available in bulk quantities from 1kg to 30kg bags, perfect for commercial use</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Competitive Pricing</h4>
                    <p className="text-muted-foreground">Direct from manufacturer pricing for bulk orders and regular buyers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Export Quality</h4>
                    <p className="text-muted-foreground">International standard packaging and quality control for global markets</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range Showcase */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Our Complete Product Range
          </h2>
          <div className="max-w-6xl mx-auto">
            <img 
              src={bothBrands} 
              alt="Complete Product Range - Siesta and Samip Brands"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center mt-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you choose Siesta or Samip, you're choosing the Solis International LLP promise of quality, purity, and reliability. Both brands undergo the same rigorous quality control processes and are backed by our decades of expertise in spice exports from Unjha, Gujarat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
