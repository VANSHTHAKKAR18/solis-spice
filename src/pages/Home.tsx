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

      {/* ================= HERO SECTION (TEXT LEFT + IMAGE RIGHT) ================ */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-4 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT — TEXT */}
          <div className="order-2 md:order-1">
            <div className="bg-white/70 backdrop-blur-sm p-5 rounded-lg shadow-sm inline-block">

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 text-[#4A2400] leading-tight">
                Premium Spices from <span className="text-primary">India</span> to the{" "}
                <span className="text-secondary">World</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-[#3A2A1A]">
                Manufacturer, Exporter & Supplier of Spices
              </p>

              <p className="text-sm sm:text-lg md:text-xl font-bold mb-5 text-[#B85C00]">
                Pure Taste. Global Reach.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-3">
                <Button asChild size="default" className="bg-primary hover:bg-primary/90 text-white">
                  <Link to="/products">Explore Products</Link>
                </Button>

                {/* FIXED — MADE DARK BORDER + DARK TEXT */}
                <Button
                  asChild
                  size="default"
                  variant="outline"
                  className="border-[#4A2400] text-[#4A2400] hover:bg-[#4A2400]/10"
                >
                  <Link to="/contact">Send Enquiry</Link>
                </Button>
              </div>

            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="order-1 md:order-2">
            <img
              src={heroImage}
              alt="Solis Spices"
              className="w-full h-auto rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
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

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Welcome to <span className="text-primary">Solis International LLP</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Based in Unjha, Gujarat — the spice capital of India, Solis International LLP
              is a leading manufacturer, exporter & supplier of premium spices and oil seeds.
              Our commitment to quality and purity allows us to serve customers across India and globally.
            </p>

            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Premium Products</h2>
            <p className="text-lg text-muted-foreground">Discover our finest spices & seeds</p>
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
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-[#FFF4E3] border-t border-border/20">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto bg-background rounded-lg shadow-lg border border-border p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Partner With Us?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Send your requirements — we deliver the finest spices.
            </p>

            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
              <Link to="/contact">Send Enquiry Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

