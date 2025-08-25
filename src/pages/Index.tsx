import { SplineSceneBasic } from "@/components/spline-demo";
import { SpotlightInteractive } from "@/components/ui/spotlight-interactive";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Spline Integration */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))]">
            3D Interactive Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of web applications with immersive 3D scenes and interactive spotlight effects.
          </p>
        </div>
        
        {/* Spline Scene Demo */}
        <div className="relative">
          <SpotlightInteractive className="z-0" size={300} />
          <SplineSceneBasic />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary-foreground text-xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Beautiful Design</h3>
            <p className="text-muted-foreground">Stunning visual effects with responsive design system.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary-foreground text-xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">High Performance</h3>
            <p className="text-muted-foreground">Optimized 3D scenes with lazy loading and smooth animations.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary-foreground text-xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern Stack</h3>
            <p className="text-muted-foreground">Built with React, TypeScript, Tailwind CSS, and Spline.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
