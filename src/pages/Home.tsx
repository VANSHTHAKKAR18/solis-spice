import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Globe, Leaf, TrendingUp } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-poster.jpg";
const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
            <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat md:bg-cover"
          style={{ backgroundImage: `url(${heroImage})`, backgroundColor: 'hsl(var(--muted))' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Premium Spices from <span className="text-primary">India</span> to the <span className="text-secondary">World</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Manufacturer, Exporter & Supplier of Spices and Oil Seeds
            </p>
            <p className="text-2xl font-semibold mb-8 text-accent">
              Pure Taste. Global Reach.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/contact">Send Enquiry</Link>
              </Button>
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
       
        
        <div className="container relative z-10 px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Premium Spices from <span className="text-primary">India</span> to the <span className="text-secondary">World</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Manufacturer, Exporter & Supplier of Spices and Oil Seeds
            </p>
            <p className="text-2xl font-semibold mb-8 text-accent">
              Pure Taste. Global Reach.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/contact">Send Enquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Carefully sourced and processed spices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Globe className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Global Exports</h3>
              <p className="text-sm text-muted-foreground">Serving customers worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Natural & Pure</h3>
              <p className="text-sm text-muted-foreground">100% natural without additives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Trusted Brand</h3>
              <p className="text-sm text-muted-foreground">Years of excellence in exports</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Welcome to <span className="text-primary">Solis International LLP</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Based in Unjha, Gujarat - the spice capital of India, Solis International LLP is a leading manufacturer, exporter & supplier of premium quality spices and oil seeds. With our commitment to quality, purity, and customer satisfaction, we serve global markets with the finest Indian spices.
            </p>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Premium Products</h2>
            <p className="text-lg text-muted-foreground">
              Discover our range of finest quality spices and seeds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFF4E3] border-t border-border/20">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto bg-background rounded-lg shadow-lg border border-border p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Get in touch to discuss your spice requirements. We're here to serve you with the finest quality products.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Send Enquiry Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
