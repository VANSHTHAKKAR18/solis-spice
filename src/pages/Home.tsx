{/* Hero Section */}
<section className="relative h-auto overflow-hidden">
  <img 
    src={heroImage} 
    alt="Solis International - Premium Spices"
    className="w-full h-auto object-contain"
  />

  {/* Slight darker background for text visibility */}
  <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center">
    <div className="container px-4">
      <div className="max-w-lg ml-2 sm:ml-4 md:ml-6 lg:ml-10">  {/* ← shifts text LEFT */}

        <h1
          className="
            text-xl sm:text-2xl md:text-3xl lg:text-4xl    /* smaller than before */
            font-bold mb-3 text-white drop-shadow-lg
          "
        >
          Premium Spices from <span className="text-primary">India</span> to the{" "}
          <span className="text-secondary">World</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg mb-3 text-white drop-shadow-md">
          Manufacturer, Exporter & Supplier of Spices and Oil Seeds
        </p>

        <p className="text-base sm:text-lg md:text-xl font-semibold mb-5 text-yellow-300 drop-shadow-md">
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
