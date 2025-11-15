import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductModal = ({ product, open, onOpenChange }: ProductModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Description</h3>
              <p className="text-foreground">{product.description}</p>
            </div>

            {product.botanicalName && (
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Botanical Name</h3>
                <p className="text-foreground italic">{product.botanicalName}</p>
              </div>
            )}

            {product.brand && (
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Brand</h3>
                <Badge variant={product.brand === "siesta" ? "default" : "secondary"} className="text-sm">
                  {product.brand === "siesta" ? "Siesta" : "Samip"}
                </Badge>
              </div>
            )}

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Available Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {product.packaging ? (
                  product.packaging.split(',').map((size, index) => (
                    <Badge key={index} variant="outline" className="text-sm px-3 py-1">
                      {size.trim()}
                    </Badge>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">Contact us for available sizes</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
