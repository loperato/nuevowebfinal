import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/chatbot/Chatbot';
import Image from 'next/image';
import Link from 'next/link';

export default function ResourcesPage() {
  const locale = 'es';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Recursos</h1>
            <p className="text-xl max-w-3xl">
              Acceda a documentación técnica, hojas de datos de seguridad y materiales educativos sobre EfireX TRPL-E.
            </p>
          </div>
        </section>
        
        {/* Downloads Section */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Descargas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SDS Document */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <svg className="h-24 w-24 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Hoja de Seguridad (SDS)</h3>
                  <p className="text-gray-600 mb-4">
                    Información completa de seguridad para EfireX TRPL-E, incluyendo manipulación, almacenamiento y procedimientos de emergencia.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar SDS
                  </a>
                </div>
              </div>
              
              {/* Product Catalog */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <svg className="h-24 w-24 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Catálogo de Productos EfireX</h3>
                  <p className="text-gray-600 mb-4">
                    Catálogo completo de productos EfireX TRPL-E, incluyendo especificaciones, aplicaciones e información de pedidos.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar Catálogo
                  </a>
                </div>
              </div>
              
              {/* UL Certification */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <svg className="h-24 w-24 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Certificación UL</h3>
                  <p className="text-gray-600 mb-4">
                    Documentos oficiales de certificación UL para EfireX TRPL-E, verificando el cumplimiento de los estándares de seguridad.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar Certificado
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Videos Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Videos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Video 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-20 w-20 text-blue-600 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Demostración de EfireX TRPL-E</h3>
                  <p className="text-gray-600 mb-4">
                    Vea EfireX TRPL-E en acción mientras extingue eficazmente un incendio de batería de litio en tiempo real.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Ver Video
                  </a>
                </div>
              </div>
              
              {/* Video 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-20 w-20 text-blue-600 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Prevención de Thermal Runaway</h3>
                  <p className="text-gray-600 mb-4">
                    Aprenda cómo EfireX TRPL-E previene el thermal runaway en baterías de litio y protege infraestructuras críticas.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Ver Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Preguntas Frecuentes</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">¿Qué hace que EfireX TRPL-E sea diferente de los extintores tradicionales?</h3>
                  <p className="text-gray-700">
                    EfireX TRPL-E utiliza una tecnología patentada de encapsulación mineral que puede soportar temperaturas superiores a 1250°C (2282°F), lo que lo hace especialmente eficaz contra incendios de baterías de litio. A diferencia de los agentes tradicionales, crea una barrera protectora que previene la reignición mientras enfría rápidamente la reacción térmica.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">¿Es seguro usar EfireX TRPL-E en equipos eléctricos energizados?</h3>
                  <p className="text-gray-700">
                    Sí, EfireX TRPL-E no es conductivo y ha sido probado y certificado como seguro para su uso en equipos eléctricos energizados hasta 100,000 voltios, lo que lo hace ideal para centros de datos, estaciones de carga de vehículos eléctricos y otras aplicaciones eléctricas.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">¿Qué tan ecológico es EfireX TRPL-E?</h3>
                  <p className="text-gray-700">
                    EfireX TRPL-E es 100% biodegradable, no tóxico y no contiene químicos PFAS/PFOA. Es seguro para ambientes marinos e instalaciones de procesamiento de alimentos, con un impacto ambiental mínimo y sin preocupaciones por residuos peligrosos.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">¿Cuál es la vida útil de EfireX TRPL-E?</h3>
                  <p className="text-gray-700">
                    EfireX TRPL-E tiene una vida útil de más de 5 años con un rendimiento estable cuando se almacena según las recomendaciones. Aún se recomienda la inspección regular como parte de los protocolos estándar de seguridad contra incendios.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">¿Se puede usar EfireX TRPL-E en sistemas automáticos de extinción de incendios?</h3>
                  <p className="text-gray-700">
                    Sí, EfireX TRPL-E es compatible con sistemas estándar de extinción de incendios y puede integrarse en sistemas automáticos de rociadores, unidades especializadas de extinción de incendios de baterías e instalaciones personalizadas para diversas aplicaciones.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-700 mb-4">¿Tiene más preguntas? Nuestro chatbot puede ayudar, o contacte a nuestro equipo de soporte.</p>
                <Link href="/es/contact" className="btn-primary">
                  Contactar Soporte
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer locale={locale} />
      <Chatbot locale={locale} />
    </div>
  );
}
