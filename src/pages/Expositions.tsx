
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArtworkGrid from '../components/ArtworkGrid';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Exhibition {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  image: string;
  status: 'current' | 'upcoming' | 'past';
  location: string;
}

const Expositions = () => {
  const [activeTab, setActiveTab] = useState<'artworks' | 'current' | 'upcoming' | 'past'>('artworks');

  const exhibitions: Exhibition[] = [
    {
      id: 1,
      title: "Reflexões da Modernidade",
      description: "Uma exploração profunda das tensões urbanas através de pintura e técnica mista contemporânea.",
      startDate: "2024-01-15",
      endDate: "2024-03-30",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600",
      status: 'current',
      location: "Galeria Nacional de Arte, São Paulo"
    },
    {
      id: 2,
      title: "Geometrias Orgânicas",
      description: "Um diálogo entre formas geométricas e elementos naturais em uma coleção única de obras.",
      startDate: "2024-02-01",
      endDate: "2024-04-15",
      image: "https://images.unsplash.com/photo-1594736797933-d0d6a5d80b62?w=800&h=600",
      status: 'current',
      location: "Centro Cultural Vila Madalena"
    },
    {
      id: 3,
      title: "Horizontes Futuros",
      description: "Paisagens reimaginadas através da perspectiva da arte contemporânea e visões futuras.",
      startDate: "2024-04-20",
      endDate: "2024-06-30",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600",
      status: 'upcoming',
      location: "Museu de Arte Moderna, Rio de Janeiro"
    },
    {
      id: 4,
      title: "Memórias Fragmentadas",
      description: "Uma investigação sobre memória e tempo através de instalações e pinturas expressivas.",
      startDate: "2023-10-01",
      endDate: "2023-12-31",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600",
      status: 'past',
      location: "Pinacoteca do Estado de São Paulo"
    }
  ];

  const filteredExhibitions = exhibitions.filter(exhibition => exhibition.status === activeTab);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'text-green-600 bg-green-100';
      case 'upcoming': return 'text-blue-600 bg-blue-100';
      case 'past': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'current': return 'Em Cartaz';
      case 'upcoming': return 'Em Breve';
      case 'past': return 'Finalizada';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-warm to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6 fade-in">
            Obras e Exposições
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed slide-up">
            Explore o portfólio completo de Simone Oliveira e acompanhe suas exposições em 
            galerias e museus renomados pelo Brasil.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-1 bg-gray-100 p-1 rounded-lg mb-12 max-w-lg mx-auto">
            {[
              { key: 'artworks', label: 'Obras' },
              { key: 'current', label: 'Em Cartaz' },
              { key: 'upcoming', label: 'Em Breve' },
              { key: 'past', label: 'Passadas' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-1 py-2 px-4 rounded-md font-inter font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'artworks' ? (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
                  Coleção Completa
                </h2>
                <p className="font-inter text-gray-600 max-w-2xl mx-auto">
                  Descubra as obras mais recentes e emblemáticas de Simone Oliveira, 
                  cada uma contando uma história única através de cores e formas.
                </p>
              </div>
              <ArtworkGrid />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredExhibitions.map((exhibition) => (
                <div key={exhibition.id} className="group cursor-pointer gallery-transition hover:scale-105">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={exhibition.image}
                        alt={exhibition.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(exhibition.status)}`}>
                          {getStatusText(exhibition.status)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
                        {exhibition.title}
                      </h3>
                      <p className="font-inter text-terracotta font-medium mb-3">
                        Simone Oliveira
                      </p>
                      <p className="font-inter text-gray-600 mb-4 leading-relaxed">
                        {exhibition.description}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span>
                          {formatDate(exhibition.startDate)} - {formatDate(exhibition.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <MapPin size={16} className="mr-2" />
                        <span>{exhibition.location}</span>
                      </div>
                      <Link 
                        to={`/expositions/${exhibition.id}`}
                        className="inline-flex items-center text-terracotta font-medium hover:text-terracotta/80 transition-colors"
                      >
                        Ver Detalhes
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab !== 'artworks' && filteredExhibitions.length === 0 && (
            <div className="text-center py-16">
              <p className="font-inter text-gray-500 text-lg">
                Nenhuma exposição encontrada nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Expositions;
