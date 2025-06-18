
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArtworkGrid from '../components/ArtworkGrid';
import { ArrowRight, MapPin, Phone, Mail, Sparkles, Eye, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [{
    icon: Eye,
    label: 'Obras Criadas',
    value: '200+'
  }, {
    icon: Users,
    label: 'Colecionadores',
    value: '50+'
  }, {
    icon: Sparkles,
    label: 'Exposições',
    value: '25+'
  }];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />
      
      {/* Floating Elements Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-terracotta/10 to-light-blue/10 rounded-full blur-3xl floating" style={{
        left: mousePosition.x * 0.02 + '%',
        top: mousePosition.y * 0.02 + '%'
      }} />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-light-green/10 to-terracotta/10 rounded-full blur-3xl floating" style={{
        right: mousePosition.x * 0.01 + '%',
        bottom: mousePosition.y * 0.01 + '%',
        animationDelay: '2s'
      }} />
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080')] bg-cover bg-center opacity-5 parallax-bg"></div>
        
        <div className={`text-center z-10 px-4 max-w-5xl mx-auto ${isLoaded ? 'hero-reveal' : 'opacity-0'}`}>
          {/* Logo Principal */}
          <div className="mb-12 flex justify-center">
            <img src="/lovable-uploads/60be0771-f73f-46f6-9c94-1fd11dbcf2fc.png" alt="Simone Oliveira Art Gallery" className="h-32 md:h-40 lg:h-48 w-auto hover-lift" />
          </div>
          
          <p className="font-inter text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Explore o universo artístico de Simone Oliveira, onde cada obra conta uma história única através de 
            <span className="text-terracotta font-medium"> cores vibrantes e formas expressivas </span> 
            que tocam a alma
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className="glass-card p-6 text-center hover-lift stagger-animation" style={{
            animationDelay: `${0.8 + index * 0.2}s`
          }}>
                <stat.icon size={24} className="mx-auto mb-3 text-terracotta" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-terracotta/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-terracotta rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-neutral-warm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal-up">
              <div className="inline-flex items-center px-6 py-3 bg-terracotta/10 rounded-full mb-8">
                <span className="text-sm font-medium text-terracotta">Sobre a Artista</span>
              </div>
              
              <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Visão 
                <span className="text-gradient"> Artística</span>
              </h2>
              
              <p className="font-inter text-lg text-gray-600 leading-relaxed mb-6 font-light">
                Simone Oliveira é uma artista que dedica sua vida à criação de obras que 
                desafiam convenções e exploram as profundezas da experiência humana. Cada pincelada 
                carrega sua paixão pela arte e sua visão única do mundo.
              </p>
              
              <p className="font-inter text-lg text-gray-600 leading-relaxed mb-10 font-light">
                Com mais de uma década de dedicação à arte, Simone desenvolveu um estilo próprio que 
                combina técnicas tradicionais com elementos modernos, criando um diálogo visual 
                que ressoa com diferentes gerações de apreciadores da arte.
              </p>
              
              <Link to="/artists" className="inline-flex items-center text-terracotta font-inter font-medium hover:text-terracotta/80 transition-all duration-300 group">
                Conheça mais sobre Simone
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="reveal-up" style={{
            animationDelay: '0.3s'
          }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 to-light-blue/20 rounded-3xl transform rotate-3"></div>
                <img src="/lovable-uploads/1730db82-b48a-4890-a40a-92dcfb123144.png" alt="Simone Oliveira - Retrato" className="relative w-full h-full object-cover rounded-3xl shadow-modern hover-lift" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-terracotta/10 rounded-full mb-8">
              <Sparkles size={16} className="mr-2 text-terracotta" />
              <span className="text-sm font-medium text-terracotta">Obras de Destaque</span>
            </div>
            
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Criações de <span className="text-gradient">Simone</span>
            </h2>
            
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Explore uma seleção cuidadosa das obras mais marcantes de Simone Oliveira, 
              cada uma contando uma história única através de cores, formas e emoções.
            </p>
          </div>
          
          <ArtworkGrid />
          
          <div className="text-center mt-16">
            <Link to="/expositions" className="modern-button group">
              <span className="relative z-10 flex items-center">
                Ver Todas as Obras
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Artist in Studio Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-neutral-warm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <img 
                src="/lovable-uploads/e06b8e32-b139-4ac9-9789-dd2d68767dca.png" 
                alt="Simone Oliveira pintando em seu ateliê" 
                className="w-full h-96 object-cover rounded-3xl shadow-modern hover-lift"
              />
            </div>
            <div className="lg:col-span-1">
              <img 
                src="/lovable-uploads/79f14aaa-ddef-4045-8d3e-50714c9dc43b.png" 
                alt="Simone Oliveira criando arte" 
                className="w-full h-96 object-cover rounded-3xl shadow-modern hover-lift"
              />
            </div>
            <div className="lg:col-span-1 flex flex-col justify-center">
              <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
                No Ateliê
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed mb-6">
                Acompanhe Simone em seu processo criativo, onde cada obra nasce da paixão 
                e dedicação à arte. Seu ateliê é um espaço de inspiração e criatividade.
              </p>
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/03348f07-97c9-429b-a76d-774e1979a3e4.png" 
                  alt="Simone Oliveira com pincéis" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="reveal-up">
              <div className="inline-flex items-center px-6 py-3 bg-terracotta/10 rounded-full mb-8">
                <span className="text-sm font-medium text-terracotta">Localização</span>
              </div>
              
              <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight">
                Visite o Ateliê
              </h2>
              
              <div className="space-y-8">
                {[{
                icon: MapPin,
                title: 'Ateliê',
                content: 'Rua das Artes, 123\nVila Madalena, São Paulo - SP\nCEP: 05414-001'
              }, {
                icon: Phone,
                title: 'Telefone',
                content: '(11) 3456-7890'
              }, {
                icon: Mail,
                title: 'E-mail',
                content: 'contato@simoneoliveira.art'
              }].map((item, index) => (
                    <div key={item.title} className="flex items-start space-x-6 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center group-hover:bg-terracotta/20 transition-colors duration-300">
                        <item.icon size={24} className="text-terracotta" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  ))}
              </div>
              
              <div className="mt-12">
                <Link to="/contact" className="modern-button group">
                  <span className="relative z-10 flex items-center text-slate-950 text-right">
                    Entre em Contato
                    <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="h-96 lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-modern hover-lift reveal-up" style={{
            animationDelay: '0.3s'
          }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0963555469983!2d-46.68266708502189!3d-23.562308084682793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579f4b0c7b95%3A0x2b2b8b8b8b8b8b8b!2sVila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1649876543210!5m2!1spt!2sbr" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização do Ateliê de Simone Oliveira" className="filter grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
