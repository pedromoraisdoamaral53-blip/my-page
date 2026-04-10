import React, { useEffect, useRef, useState } from 'react'
import {
  Bot,
  Cpu,
  Zap,
  Shield,
  BarChart3,
  Workflow,
  BrainCircuit,
  MessageSquareCode,
  Database,
  Cog,
  ArrowRight,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Globe,
  Globe2,
  ExternalLink,
  Play,
  Sparkles,
  Network,
  FileCode2,
} from 'lucide-react'
import RobotVideo from './RobotVideo'

/* ------------------------------------------------------------------ */
/* Intersection Observer Hook                                          */
/* ------------------------------------------------------------------ */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black-pure/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-accent to-amber-accent flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <Bot className="w-5 h-5 text-black" />
          </div>
          <span className="font-heading font-bold text-lg tracking-tight text-text-primary">
            Omni<span className="gradient-text">Bot</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {['Funcionalidades', 'Soluções', 'Contato'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              className="text-sm text-text-secondary hover:text-cyan-accent transition-colors duration-200 cursor-pointer"
            >
              {label}
            </a>
          ))}
          <a
            href="https://wa.me/5561995729377?text=Olá,%20tudo%20bem?%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços." target="_blank" rel="noopener noreferrer"
            className="btn-gradient !py-2.5 !px-6 !text-sm !rounded-lg cursor-pointer"
          >
            <span>Agendar Demo</span>
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href="https://wa.me/5561995729377?text=Olá,%20tudo%20bem?%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços." target="_blank" rel="noopener noreferrer"
          className="md:hidden btn-gradient !py-2 !px-4 !text-xs !rounded-lg cursor-pointer"
        >
          <span>Demo</span>
        </a>
      </div>
    </nav>
  )
}

/* ------------------------------------------------------------------ */
/* Hero Section                                                        */
/* ------------------------------------------------------------------ */
function HeroSection() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-accent/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-amber-accent/4 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left – Copy */}
          <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
            {/* Tag line */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-dark-900/60 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-cyan-accent" />
              <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">
                Inteligência Artificial Corporativa
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
              Sua Empresa{' '}
              <span className="gradient-text">Elevada</span>{' '}
              por Agentes de IA{' '}
              <span className="gradient-text">Inteligentes</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed max-w-xl mb-10">
              Desenvolvemos softwares corporativos personalizados com integração
              nativa de IA para otimizar processos complexos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5561995729377?text=Olá,%20tudo%20bem?%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços." target="_blank" rel="noopener noreferrer" className="btn-gradient text-center cursor-pointer">
                <span className="flex items-center justify-center gap-2">
                  Agendar Demonstração
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#funcionalidades"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-text-secondary hover:border-border-hover hover:text-text-primary transition-all duration-200 cursor-pointer"
              >
                Explorar Soluções
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12 pt-8 border-t border-border">
              {[
                { value: '98%', label: 'Eficiência' },
                { value: '3x', label: 'Produtividade' },
                { value: '24/7', label: 'Operação Autônoma' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading font-bold text-2xl gradient-text">{stat.value}</div>
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Robot Video / Visual */}
          <div
            className={`flex justify-center lg:justify-end ${
              isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'
            }`}
          >
            <div className="relative">
              {/* Floating glow behind */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-accent/8 to-amber-accent/5 rounded-3xl blur-3xl scale-95 animate-pulse-glow" />

              <div className="video-container relative w-full aspect-video sm:w-[480px] lg:w-[700px] lg:scale-110 lg:translate-x-8 mix-blend-screen flex items-center justify-center pointer-events-none">
                <RobotVideo />
                {/* Bottom label overlay */}
                <div className="absolute bottom-4 sm:-bottom-8 left-0 right-0 text-center pointer-events-none z-20">
                  <p className="text-xs text-text-muted font-medium tracking-widest uppercase text-white/50 backdrop-blur-sm mx-auto w-max px-3 py-1 rounded-full bg-black/30 border border-white/10">
                    AI Agent Ativo
                  </p>
                  <div className="flex items-center justify-center gap-1.5 mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-green-400 font-bold">Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Features Grid                                                       */
/* ------------------------------------------------------------------ */
const features = [
  {
    icon: BrainCircuit,
    title: 'Agentes Autônomos',
    description: 'IA que aprende e executa tarefas complexas de forma independente, otimizando fluxos de trabalho.',
  },
  {
    icon: Workflow,
    title: 'Automação de Processos',
    description: 'Automatize processos repetitivos e libere sua equipe para atividades estratégicas de alto valor.',
  },
  {
    icon: MessageSquareCode,
    title: 'Integração por API',
    description: 'Conecte-se facilmente a qualquer sistema existente via APIs RESTful e webhooks seguros.',
  },
  {
    icon: Shield,
    title: 'Segurança Enterprise',
    description: 'Criptografia de ponta-a-ponta, conformidade LGPD e auditorias de segurança contínuas.',
  },
  {
    icon: BarChart3,
    title: 'Analytics em Tempo Real',
    description: 'Dashboards inteligentes com métricas de performance e insights acionáveis para decisões rápidas.',
  },
  {
    icon: Database,
    title: 'Infraestrutura Escalável',
    description: 'Arquitetura cloud-native que escala automaticamente conforme a demanda do seu negócio.',
  },
]

function FeaturesSection() {
  const { ref, isVisible } = useInView()

  return (
    <section id="funcionalidades" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-dark-900/60 mb-6">
            <Cpu className="w-3.5 h-3.5 text-cyan-accent" />
            <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">
              Funcionalidades
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight mb-4">
            Tecnologia que <span className="gradient-text">transforma</span> resultados
          </h2>
          <p className="text-text-secondary">
            Ferramentas de IA avançadas projetadas para empresas que buscam excelência operacional.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`glow-card p-8 cursor-pointer ${
                isVisible ? `animate-fade-in-up delay-${(i + 1) * 100}` : 'opacity-0'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-dark-700 border border-border flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-cyan-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-text-primary">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Corporate Solutions                                                 */
/* ------------------------------------------------------------------ */
const solutions = [
  {
    icon: Cog,
    title: 'Automação de Processos Complexos',
    description:
      'Mapeamos e automatizamos fluxos de trabalho corporativos de ponta a ponta, eliminando gargalos e reduzindo erros humanos em até 95%.',
    tags: ['RPA', 'Workflow', 'Otimização'],
  },
  {
    icon: Network,
    title: 'IA Conversacional Empresarial',
    description:
      'Chatbots e assistentes virtuais treinados com dados do seu negócio, oferecendo atendimento humanizado 24/7 via WhatsApp, Web e Slack.',
    tags: ['NLP', 'Chatbot', 'Multicanal'],
  },
  {
    icon: FileCode2,
    title: 'Software Sob Medida com IA',
    description:
      'Desenvolvimento de plataformas corporativas com módulos de IA integrados — desde ERPs inteligentes até sistemas preditivos de vendas.',
    tags: ['Custom Dev', 'Machine Learning', 'Integração'],
  },
]

function SolutionsSection() {
  const { ref, isVisible } = useInView()

  return (
    <section id="solucoes" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-dark-900/60 mb-6">
            <Zap className="w-3.5 h-3.5 text-amber-accent" />
            <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">
              Soluções Corporativas
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight mb-4">
            IA aplicada ao <span className="gradient-text">seu negócio</span>
          </h2>
          <p className="text-text-secondary">
            Soluções personalizadas que combinam automação avançada e inteligência artificial para escalar operações.
          </p>
        </div>

        {/* Solutions cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className={`glow-card p-8 flex flex-col cursor-pointer ${
                isVisible ? `animate-fade-in-up delay-${(i + 1) * 100}` : 'opacity-0'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-accent/10 to-amber-accent/10 border border-border flex items-center justify-center mb-6">
                <s.icon className="w-7 h-7 text-cyan-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-text-primary">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-border text-text-muted bg-dark-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* CTA Section                                                         */
/* ------------------------------------------------------------------ */
function CTASection() {
  const { ref, isVisible } = useInView()

  return (
    <section id="cta" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <div
          className={`relative rounded-3xl border border-border bg-dark-900/50 p-12 sm:p-16 text-center overflow-hidden ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* Glow bg */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-accent/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-accent/4 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-dark-800/60 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-accent" />
              <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">
                Comece Agora
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight mb-4">
              Pronto para <span className="gradient-text">revolucionar</span> sua operação?
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-10">
              Agende uma demonstração personalizada e descubra como a inteligência artificial pode transformar
              os processos da sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5561995729377?text=Olá,%20tudo%20bem?%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient text-center cursor-pointer"
              >
                <span className="flex items-center justify-center gap-2">
                  Agendar Demonstração
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="https://wa.me/5561995729377?text=Olá,%20tudo%20bem?%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-text-secondary hover:border-cyan-accent/30 hover:text-text-primary transition-all duration-200 cursor-pointer"
              >
                Falar por WhatsApp
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer id="contato" className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-accent to-amber-accent flex items-center justify-center">
                <Bot className="w-4 h-4 text-black" />
              </div>
              <span className="font-heading font-bold text-text-primary">
                Omni<span className="gradient-text">Bot</span>
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Softwares corporativos com IA integrada para empresas que buscam o próximo nível.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Funcionalidades', href: '#funcionalidades' },
                { label: 'Soluções', href: '#solucoes' },
                { label: 'Demonstração', href: '#cta' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-text-muted hover:text-cyan-accent transition-colors duration-200 cursor-pointer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary mb-4">Contato</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:contato@omnibotsolutions.com" className="flex items-center gap-2 text-sm text-text-muted hover:text-cyan-accent transition-colors duration-200 cursor-pointer">
                  <Mail className="w-4 h-4" />
                  contato@omnibotsolutions.com
                </a>
              </li>
              <li>
                <a href="tel:+5561995729377" className="flex items-center gap-2 text-sm text-text-muted hover:text-cyan-accent transition-colors duration-200 cursor-pointer">
                  <Phone className="w-4 h-4" />
                  +55 (61) 99572-9377
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-text-muted">
                  <MapPin className="w-4 h-4" />
                  Taguatinga, Brasília — DF
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary mb-4">Social</h4>
            <div className="flex gap-3">
              {[
                { Icon: Globe, href: '#', label: 'LinkedIn' },
                { Icon: Globe2, href: '#', label: 'GitHub' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-border bg-dark-900 flex items-center justify-center text-text-muted hover:border-cyan-accent/30 hover:text-cyan-accent transition-all duration-200 cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} OmniBot Solutions. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors duration-200 cursor-pointer">
              Política de Privacidade
            </a>
            <a href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors duration-200 cursor-pointer">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/* Scroll‑to‑top                                                       */
/* ------------------------------------------------------------------ */
function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const h = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-dark-800 border border-border text-text-secondary hover:border-cyan-accent/30 hover:text-cyan-accent transition-all duration-300 cursor-pointer flex items-center justify-center ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  )
}

/* ------------------------------------------------------------------ */
/* App Root                                                            */
/* ------------------------------------------------------------------ */
export default function App() {
  return (
    <div className="bg-black-pure min-h-screen text-text-primary font-body">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
