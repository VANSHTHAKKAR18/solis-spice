import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { products, Product } from "@/data/products";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Premium quality spices and seeds from the heart of India
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductModal 
        product={selectedProduct}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />

      {/* Additional Info */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Product Specifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-4 text-foreground">Quality Parameters</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Purity: 99% - 99.9%</li>
                  <li>• Moisture Content: As per international standards</li>
                  <li>• Free from foreign matter and admixture</li>
                  <li>• Machine cleaned and sorted</li>
                  <li>• Natural color and aroma retained</li>
                </ul>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-4 text-foreground">Packaging Options</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• PP bags: 25kg, 50kg</li>
                  <li>• Consumer packs: 50g to 1kg</li>
                  <li>• Export-quality packing materials</li>
                  <li>• Food-grade packaging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">
              Looking for Bulk Quantities?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              We can supply large volumes with consistent quality. Get in touch for wholesale pricing and custom requirements.
            </p>
            <a
              href="/contact"
              className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
