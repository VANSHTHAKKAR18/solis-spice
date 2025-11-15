import siestaAjwainImg from "@/assets/products/siesta/ajwain-500g.jpg";
import siestaCuminImg from "@/assets/products/siesta/cumin-500g.jpg";
import siestaBigMustardImg from "@/assets/products/siesta/big-mustard-1kg.jpg";
import siestaFennelImg from "@/assets/products/siesta/fennel-1kg.jpg";
import siestaFenugreekImg from "@/assets/products/siesta/fenugreek-500g.jpg";
import siestaMustardImg from "@/assets/products/siesta/mustard-500g.jpg";
import siestaSesameImg from "@/assets/products/siesta/sesame-1kg.jpg";
import siestaMukhwasImg from "@/assets/products/siesta/mukhwas-500g.jpg";
import samipAjwainImg from "@/assets/products/samip-ajwain-500g.jpg";
import samipJeeraImg from "@/assets/products/samip-jeera-1kg.jpg";
import samipMagajImg from "@/assets/products/samip-magaj-1kg.jpg";
import samipSaufImg from "@/assets/products/samip-sauf-1kg.jpg";
import samipTilImg from "@/assets/products/samip-til-1kg.jpg";

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  botanicalName?: string;
  brand?: "siesta" | "samip";
  packaging?: string;
}

export const products: Product[] = [
  // Siesta Brand Products
  {
    id: "siesta-cumin",
    name: "Cumin (Jeera)",
    image: siestaCuminImg,
    description: "Premium quality cumin seeds from Unjha. UNJHA'S FAMOUS Siesta brand cumin seeds with distinctive aroma and flavor.",
    botanicalName: "Cuminum cyminum",
    brand: "siesta",
    packaging: "50g, 100g, 200g, 500g, 1kg, 30kg"
  },
  {
    id: "siesta-ajwain",
    name: "Ajwain (Carom Seeds)",
    image: siestaAjwainImg,
    description: "High-quality carom seeds from Unjha. UNJHA'S FAMOUS Siesta brand with strong aromatic properties.",
    botanicalName: "Trachyspermum ammi",
    brand: "siesta",
    packaging: "50g, 100g, 200g, 500g, 1kg, 30kg"
  },
  {
    id: "siesta-fenugreek",
    name: "Fenugreek (Methi)",
    image: siestaFenugreekImg,
    description: "Premium fenugreek seeds from Unjha. UNJHA'S FAMOUS Siesta brand with rich nutritional value.",
    botanicalName: "Trigonella foenum-graecum",
    brand: "siesta",
    packaging: "50g, 100g, 200g, 500g, 1kg, 30kg"
  },
  {
    id: "siesta-mustard",
    name: "Mustard Seeds (Rai)",
    image: siestaMustardImg,
    description: "Superior quality mustard seeds from Unjha. UNJHA'S FAMOUS Siesta brand perfect for tempering and seasoning.",
    botanicalName: "Brassica juncea",
    brand: "siesta",
    packaging: "50g, 100g, 200g, 500g, 1kg, 30kg"
  },
  {
    id: "siesta-big-mustard",
    name: "Big Mustard Seeds",
    image: siestaBigMustardImg,
    description: "Large-sized premium mustard seeds from Unjha. UNJHA'S FAMOUS Siesta brand with intense flavor.",
    botanicalName: "Brassica nigra",
    brand: "siesta",
    packaging: "50g, 100g, 200g, 500g, 1kg, 30kg"
  },
  {
    id: "siesta-fennel",
    name: "Fennel Seeds (Saunf)",
    image: siestaFennelImg,
    description: "Premium fennel seeds from Unjha. UNJHA'S FAMOUS Siesta brand with sweet, aromatic flavor.",
    botanicalName: "Foeniculum vulgare",
    brand: "siesta",
    packaging: "50g, 100g, 200g, 500g, 1kg, 30kg"
  },
  {
    id: "siesta-sesame",
    name: "Sesame Seeds (Til)",
    image: siestaSesameImg,
    description: "High-quality white and natural sesame seeds from Unjha. UNJHA'S FAMOUS Siesta brand rich in nutrients.",
    botanicalName: "Sesamum indicum",
    brand: "siesta",
    packaging: "50g, 100g, 200g, 500g, 1kg, 30kg"
  },
  {
    id: "siesta-mukhwas",
    name: "Mukhwas",
    image: siestaMukhwasImg,
    description: "Traditional Indian mouth freshener blend of fennel, sesame, and aromatic seeds. UNJHA'S FAMOUS Siesta brand.",
    brand: "siesta",
    packaging: "500g"
  },
  
  // Samip Brand Products
  {
    id: "samip-cumin",
    name: "Samip Cumin Seeds (Jeera)",
    image: samipJeeraImg,
    description: "High-quality cumin seeds in various pack sizes. Ideal for family kitchens, restaurants and bulk buyers.",
    botanicalName: "Cuminum cyminum",
    brand: "samip",
    packaging: "₹5, ₹10, 50g, 100g, 200g, 250g, 500g, 1kg, 30kg"
  },
  {
    id: "samip-fennel",
    name: "Samip Fennel Seeds (Saunf)",
    image: samipSaufImg,
    description: "Sweet, aromatic fennel seeds in 1kg pack. Popular for mouth freshening and cooking.",
    botanicalName: "Foeniculum vulgare",
    brand: "samip",
    packaging: "1kg"
  },
  {
    id: "samip-sesame",
    name: "Samip Sesame Seeds (Til)",
    image: samipTilImg,
    description: "Natural sesame seeds in 1kg packaging. Rich in nutrients and essential for Indian cuisine.",
    botanicalName: "Sesamum indicum",
    brand: "samip",
    packaging: "1kg"
  },
  {
    id: "samip-ajwain",
    name: "Samip Ajwain Seeds",
    image: samipAjwainImg,
    description: "Premium quality carom seeds in various sizes. Perfect for daily kitchen use and bulk requirements.",
    botanicalName: "Trachyspermum ammi",
    brand: "samip",
    packaging: "₹5, ₹10, 500g"
  },
  {
    id: "samip-magaj",
    name: "Samip Magaj (Melon Seeds)",
    image: samipMagajImg,
    description: "Premium melon seeds in convenient 1kg packaging. Nutritious and versatile for various uses.",
    brand: "samip",
    packaging: "1kg"
  },
];
