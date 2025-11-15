import { Award, CheckCircle2, FileCheck, Microscope } from "lucide-react";

const Quality = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Quality & <span className="text-primary">Certification</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our commitment to excellence in every grain
            </p>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Quality Assurance Process</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Sourcing</h3>
                    <p className="text-muted-foreground text-sm">
                      Direct procurement from trusted farmers in Unjha region. Only premium quality raw materials selected.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Testing</h3>
                    <p className="text-muted-foreground text-sm">
                      Rigorous laboratory testing for purity, moisture content, and quality parameters at every stage.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Processing</h3>
                    <p className="text-muted-foreground text-sm">
                      Advanced machinery for cleaning, sorting, and grading. Maintained in hygienic conditions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Certification</h3>
                    <p className="text-muted-foreground text-sm">
                      Final quality check and certification before packaging. Complete traceability maintained.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Quality Standards We Follow
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Export Standards</h3>
                <p className="text-sm text-muted-foreground">
                  Compliant with international export quality norms
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <FileCheck className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Food Safety</h3>
                <p className="text-sm text-muted-foreground">
                  FSSAI certified and food-grade processing
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Microscope className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Lab Tested</h3>
                <p className="text-sm text-muted-foreground">
                  Every batch tested for quality parameters
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Our Quality Features</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Machine Cleaning & Sorting</h3>
                  <p className="text-sm text-muted-foreground">
                    Multi-stage cleaning process removes impurities, damaged seeds, and foreign matter
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Grading System</h3>
                  <p className="text-sm text-muted-foreground">
                    Precision grading based on size, color, and quality to meet specific customer requirements
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Moisture Control</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimal moisture levels maintained for extended shelf life and preserved quality
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Hygienic Packaging</h3>
                  <p className="text-sm text-muted-foreground">
                    Food-grade packaging materials in clean environment to prevent contamination
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Traceability</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete batch tracking from farm to final packaging for quality accountability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-6">
              Certified for Export Excellence
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Our products meet all international quality and safety standards, making them ready for global markets. We hold necessary export certifications and documentation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 bg-primary-foreground/10 rounded-lg backdrop-blur">
                <p className="font-semibold">FSSAI</p>
                <p className="text-sm opacity-75">Certified</p>
              </div>
              <div className="p-4 bg-primary-foreground/10 rounded-lg backdrop-blur">
                <p className="font-semibold">Export</p>
                <p className="text-sm opacity-75">Licensed</p>
              </div>
              <div className="p-4 bg-primary-foreground/10 rounded-lg backdrop-blur">
                <p className="font-semibold">Quality</p>
                <p className="text-sm opacity-75">Tested</p>
              </div>
              <div className="p-4 bg-primary-foreground/10 rounded-lg backdrop-blur">
                <p className="font-semibold">ISO</p>
                <p className="text-sm opacity-75">Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
