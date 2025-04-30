import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/chatbot/Chatbot';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder para mensajes del chatbot - será reemplazado con datos reales
const chatbotMessages = {
  en: {
    "What is EfireX TRPL-E?": "EfireX TRPL-E is a water-based, mineral encapsulator agent designed to suppress lithium battery fires.",
    "Why are lithium battery fires dangerous?": "Because they can reach temperatures over 1000°C and can cause explosions and toxic gas release."
  },
  es: {
    "¿Qué es EfireX TRPL-E?": "EfireX TRPL-E es un agente encapsulador mineral en base acuosa diseñado para extinguir incendios de baterías de litio.",
    "¿Por qué son peligrosos los incendios de baterías de litio?": "Porque pueden alcanzar temperaturas superiores a 1000°C y causar explosiones y liberación de gases tóxicos."
  }
};

export default function HomePage() {
  const locale = 'es';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      
      <main className="flex-grow">
        {/* Sección Hero */}
        <section className="relative h-screen">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/hero.png" 
              alt="EfireX TRPL-E extinguiendo incendio de batería de litio" 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="container-custom relative z-10 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
              Cuando las baterías de litio arden, solo la verdadera innovación puede detenerlas.
            </h1>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/es/technology" className="btn-primary">
                Conocer Más
              </Link>
              <Link href="/es/products" className="btn-secondary">
                Comprar Ahora
              </Link>
              <Link href="/es/applications" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition-colors">
                Industrias que Protegemos
              </Link>
            </div>
          </div>
        </section>
        
        {/* Vista previa de la sección de Tecnología */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">La ciencia detrás de EfireX TRPL-E</h2>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Agente de encapsulación mineral</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Resiste temperaturas &gt;1250°C</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Controla el thermal runaway en baterías de litio</span>
                  </li>
                </ul>
                <Link href="/es/technology" className="inline-block mt-6 text-blue-600 font-semibold hover:text-blue-800">
                  Conoce más sobre nuestra tecnología →
                </Link>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">Poder de Enfriamiento vs. Agentes Tradicionales</h3>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-md p-4">
                    {/* Esto sería reemplazado con un componente de gráfico real */}
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex justify-between">
                        <div className="h-4 w-4 bg-amber-500 rounded-full"></div>
                        <span className="text-sm">EfireX/TPL</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Agua</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="h-4 w-4 bg-gray-400 rounded-full"></div>
                        <span className="text-sm">Espuma Tradicional</span>
                      </div>
                      <div className="border-t border-gray-300 pt-2 text-center">
                        <span className="text-sm font-medium">Tiempo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección de Industrias */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Industrias que Protegemos</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Vehículos Eléctricos</h3>
                <p className="text-gray-600">Protección para baterías de vehículos eléctricos durante la carga, operación y almacenamiento.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Aviación</h3>
                <p className="text-gray-600">Soluciones de seguridad para baterías de aeronaves y sistemas electrónicos.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Centros de Datos</h3>
                <p className="text-gray-600">Protección crítica para salas de servidores y sistemas de energía de respaldo.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Almacenamiento de Baterías</h3>
                <p className="text-gray-600">Seguridad para instalaciones de almacenamiento de energía e instalaciones solares.</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/es/applications" className="btn-primary">
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer locale={locale} />
      <Chatbot locale={locale} messages={chatbotMessages} />
    </div>
  );
}
