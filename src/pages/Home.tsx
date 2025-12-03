/* Hero Section */
<section className="relative w-full overflow-hidden">
  <div className="w-full h-[260px] sm:h-[350px] md:h-[500px] lg:h-[650px] relative">
    <img
      src={heroImage}
      alt="Solis International - Premium Spices"
      className="absolute inset-0 w-full h-full object-cover object-center"
    />
  </div>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center">
    <div className="container px-4">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          Premium Spices from <span className="text-primary">India</span> to the{" "}
          <span className="text-secondary">World</span>
        </h1>

        <p className="text-base md:text-lg mb-4 text-muted-foreground">
          Manufacturer, Exporter & Supplier of Spices and Oil Seeds
        </p>

        <p className="text-lg md:text-xl font-semibold mb-6 text-accent">
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
            className="border-primary text-primary hover:bg-primary/10"
          >
            <Link to="/contact">Send Enquiry</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
