import { SplineSceneBasic } from "@/components/spline-demo";
import { SpotlightInteractive } from "@/components/ui/spotlight-interactive";
import { AIChat } from "@/components/AIChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Spline Integration */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))]">
            HOSPITAL DO CANCER DE MARINGÁ
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SEU AGENTE DE IA INTERNO PARA AUXILIAR EM PROCESSOS E DÚVIDAS
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
              <span className="text-primary-foreground text-xl">🧠</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Assistente Inteligente</h3>
            <p className="text-muted-foreground">Apoio em tempo real para responder e-mails, esclarecer dúvidas e otimizar a comunicação interna.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary-foreground text-xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Agilidade nos Processos</h3>
            <p className="text-muted-foreground">Automatiza tarefas administrativas, reduz tempo em atividades repetitivas e facilita fluxos internos no hospital.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary-foreground text-xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tecnologia Avançada</h3>
            <p className="text-muted-foreground">Baseado em Inteligência Artificial com modelos modernos, pronto para evoluir e se adaptar às necessidades da instituição.</p>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Assistente de IA</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas e consulte informações com nosso assistente de inteligência artificial
          </p>
        </div>
        <AIChat />
      </section>
    </div>
  );
};

export default Index;
