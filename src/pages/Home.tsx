{/* Hero Section */}
<section className="relative w-full overflow-hidden">

  {/* Background Image */}
  <div className="w-full h-[260px] sm:h-[350px] md:h-[500px] lg:h-[650px] relative">
    <img
      src={heroImage}
      alt="Solis International - Premium Spices"
      className="absolute inset-0 w-full h-full object-cover object-center"
    />
  </div>

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/50 md:bg-black/30"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center">
    <div className="container px-4">
      <div className="max-w-xl">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 
                       text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">
          Premium Spices from 
          <span className="text-orange-400"> India </span> 
          to the 
          <span className="text-green-400"> World</span>
        </h1>

        <p className="text-base md:text-lg mb-4 text-white drop-shadow-md">
          Manufacturer, Exporter & Supplier of Spices and Oil Seeds
        </p>

        <p className="text-lg md:text-xl font-semibold mb-6 text-yellow-300 drop-shadow-md">
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
