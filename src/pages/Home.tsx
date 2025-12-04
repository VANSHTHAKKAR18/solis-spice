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

      {/* HERO SECTION */}
      <section className="relative h-auto overflow-hidden">
        <img 
          src={heroImage} 
          alt="Solis International - Premium Spices"
          className="w-full h-auto object-contain"
        />

        {/* Overlay to improve text visibility */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>

        {/* TEXT CONTENT */}
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4">
            <div className="max-w-lg ml-3 sm:ml-5 md:ml-10 lg:ml-16">
              
              <h1
                className="
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl
                  font-bold mb-3 text-white drop-shadow-lg
                "
              >
                Premium Spices from <span className="text-primary">India</span> to the{" "}
                <span className="text-secondary">World</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg mb-3 text-white drop-shadow-md">
                Manufacturer, Exporter & Supplier of Spices and Oil Seeds
              </p>

              <p className="text-base sm:text-lg md:text-xl font-semibold mb-6 text-yellow-300 drop-shadow-md">
                Pure Taste. Global Reach.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="default" className="bg-primary hover:bg-primary/90">
                  <Link to="/products">Explore Products</Link>
                </Button>

                <Button
                  asChild
                  size="default"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                >
                  <Link to="/contact">Send Enquiry</Link>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
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

      {/* ABOUT SECTION */}
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

      {/* FEATURED PRODUCTS */}
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

      {/* CTA SECTION */}
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
