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
      <section className="relative w-full overflow-hidden">
        
        {/* Background Image */}
        <div className="w-full h-[260px] sm:h-[350px] md:h-[500px] lg:h-[650px] relative">
          <img
            src={heroImage}
            alt="Solis International - Premium Spices"
            className="
              absolute inset-0 w-full h-full 
              object-cover object-top     /* focus top on mobile */
              md:object-contain md:object-center /* full image on desktop */
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/25" />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-start md:items-center pt-4 md:pt-0">
          <div className="container px-4">
            <div className="max-w-xl">

              {/* Transparent Box With Text */}
              <div className="bg-white/50 md:bg-white/35 backdrop-blur-sm px-4 py-3 rounded-lg shadow-md inline-block">

                <h1
                  className="
                    text-lg sm:text-xl md:text-2xl lg:text-3xl
                    font-extrabold mb-2 text-[#4A2400]
                  "
                >
                  Premium Spices from
                  <span className="text-primary font-extrabold"> India </span>
                  to the
                  <span className="text-secondary font-extrabold"> World</span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg font-semibold mb-1 text-[#3A2A1A]">
                  Manufacturer, Exporter & Supplier of Spices
                </p>

                <p className="text-sm sm:text-lg md:text-xl font-bold text-[#B85C00]">
                  Pure Taste. Global Reach.
                </p>

              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
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


      {/* FEATURES */}
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


      {/* ABOUT PREVIEW */}
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
