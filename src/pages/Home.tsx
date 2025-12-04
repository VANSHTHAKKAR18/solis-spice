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
      <section className="relative w-full overflow-hidden">
        {/* Background Image */}
        <div className="w-full h-[260px] sm:h-[350px] md:h-[500px] lg:h-[650px] relative">
          <img
            src={heroImage}
            alt="Solis International - Premium Spices"
            className="
              absolute inset-0 w-full h-full 
              object-cover object-top
              md:object-contain md:object-center
            "
          />

          {/* Strong overlay on mobile, lighter overlay on desktop */}
          <div className="absolute inset-0 bg-black/55 md:bg-black/25"></div>
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-start md:items-center pt-3 sm:pt-6 md:pt-0">
          <div className="container px-4">
            <div className="max-w-xl">

              <h1
                className="
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                  font-extrabold mb-3 md:mb-4 
                  text-white drop-shadow-xl leading-tight
                "
              >
                Premium Spices from <span className="text-orange-400">India</span> to the{" "}
                <span className="text-green-400">World</span>
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

      {/* ------ REST OF YOUR PAGE BELOW HERE ------ */}

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

    </div>
  );
};

export default Home;
