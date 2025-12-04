import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import { products } from "@/data/products";
import { createClient } from "@supabase/supabase-js";

// ⬇️ Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY!
);

const formSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(2).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(10).max(20),
  country: z.string().min(2).max(100),
  products: z.array(z.string()).min(1),
  message: z.string().min(10).max(1000),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      products: [],
      message: "",
    },
  });

  // ⬇️ SUBMIT FUNCTION UPDATED WITH SUPABASE INSERT
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("enquiries").insert([
        {
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          country: data.country,
          products: data.products,
          message: data.message,
          created_at: new Date(),
        },
      ]);

      if (error) throw error;

      toast.success("Enquiry Submitted Successfully!", {
        description: "We will contact you soon regarding your requirements.",
      });

      form.reset();
    } catch (error: any) {
      toast.error("Failed to submit enquiry", {
        description: error.message || "Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with us for your spice requirements
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* Left Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the enquiry form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    Unjha, Gujarat<br />India - 384170
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                  <p className="text-sm text-muted-foreground">+91 9898191644</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">solisinternational@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2 text-foreground">Business Hours</h3>
              <p className="text-sm text-muted-foreground">
                Monday - Saturday: 9:00 AM - 6:00 PM IST<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send Enquiry</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Full Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Company */}
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Ltd." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone *</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 234 567 8900" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Country */}
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country *</FormLabel>
                        <FormControl>
                          <Input placeholder="United States" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Products */}
                  <FormField
                    control={form.control}
                    name="products"
                    render={() => (
                      <FormItem>
                        <FormLabel>Products Interested In *</FormLabel>
                        <div className="grid grid-cols-2 gap-3 mt-2">
                          {products.map((product) => (
                            <FormField
                              key={product.id}
                              control={form.control}
                              name="products"
                              render={({ field }) => (
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(product.name)}
                                      onCheckedChange={(checked) => {
                                        const value = field.value || [];
                                        if (checked) {
                                          field.onChange([...value, product.name]);
                                        } else {
                                          field.onChange(
                                            value.filter((v) => v !== product.name)
                                          );
                                        }
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal cursor-pointer">
                                    {product.name}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide details about your requirements"
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </Button>

                </form>
              </Form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
