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

export default function TechnologyPage() {
  const locale = 'es';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      
      <main className="flex-grow">
        {/* Sección Hero */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">La ciencia detrás de EfireX TRPL-E</h1>
            <p className="text-xl max-w-3xl">
              Nuestra revolucionaria tecnología de encapsulación mineral proporciona una protección superior contra incendios de baterías de litio.
            </p>
          </div>
        </section>
        
        {/* Explicación de la Tecnología */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Tecnología de Encapsulación Mineral</h2>
                <p className="text-lg mb-6">
                  EfireX TRPL-E utiliza una fórmula mineral patentada que crea una barrera protectora alrededor de los materiales en combustión, cortando eficazmente el suministro de oxígeno mientras enfría rápidamente la reacción térmica.
                </p>
                <p className="text-lg mb-6">
                  A diferencia de los agentes tradicionales de extinción de incendios que solo enfrían o sofocan los incendios, nuestra tecnología de encapsulación aborda ambos aspectos simultáneamente, haciéndola excepcionalmente efectiva contra incendios de baterías de litio de alta temperatura.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mt-8">
                  <h3 className="font-bold text-xl mb-2">Ventajas Clave:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Resiste temperaturas extremas superiores a 1250°C (2282°F)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Previene la propagación del thermal runaway en celdas de baterías</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>100% ecológico y no tóxico</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No conductivo y seguro para usar en equipos eléctricos</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-center">Poder de Enfriamiento vs. Agentes Tradicionales</h3>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-md p-6 mb-6">
                    {/* Esto sería reemplazado con un componente de gráfico real */}
                    <div className="h-64 relative border border-gray-300 rounded bg-white p-4">
                      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
                        <div className="text-xs text-gray-500">Temperatura</div>
                        <div className="flex-grow relative">
                          {/* EfireX/TPL line */}
                          <div className="absolute top-[20%] left-0 w-full h-1 bg-amber-500"></div>
                          <div className="absolute top-[20%] left-0 w-full h-1 bg-amber-500 transform -rotate-6 origin-left"></div>
                          
                          {/* Water line */}
                          <div className="absolute top-[20%] left-0 w-full h-1 bg-blue-500"></div>
                          <div className="absolute top-[20%] left-0 w-full h-1 bg-blue-500 transform -rotate-30 origin-left"></div>
                          
                          {/* Traditional Foam line */}
                          <div className="absolute top-[20%] left-0 w-full h-1 bg-gray-400"></div>
                          <div className="absolute top-[20%] left-0 w-full h-1 bg-gray-400 transform -rotate-15 origin-left"></div>
                        </div>
                        <div className="text-xs text-gray-500 text-center">Tiempo</div>
                      </div>
                    </div>
                    <div className="flex justify-center space-x-6">
                      <div className="flex items-center">
                        <div className="h-4 w-4 bg-amber-500 rounded-full mr-2"></div>
                        <span className="text-sm">EfireX/TPL</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-4 w-4 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm">Agua</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-4 w-4 bg-gray-400 rounded-full mr-2"></div>
                        <span className="text-sm">Espuma Tradicional</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Las pruebas muestran que EfireX TRPL-E reduce las temperaturas significativamente más rápido que los agentes tradicionales de extinción de incendios, previniendo la propagación del thermal runaway en celdas de baterías de litio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección de Comparación */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Cómo se Compara EfireX TRPL-E</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Característica</th>
                    <th className="py-4 px-6 text-center">EfireX TRPL-E</th>
                    <th className="py-4 px-6 text-center">Espuma Tradicional</th>
                    <th className="py-4 px-6 text-center">Agua</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Resistencia a Temperatura</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">Más de 1250°C (2282°F)</td>
                    <td className="py-4 px-6 text-center text-red-600">Hasta 200°C (392°F)</td>
                    <td className="py-4 px-6 text-center text-red-600">100°C (212°F) (hierve)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-medium">Control de Thermal Runaway</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">Excelente</td>
                    <td className="py-4 px-6 text-center text-red-600">Pobre</td>
                    <td className="py-4 px-6 text-center text-red-600">Muy Pobre</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Impacto Ambiental</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">Ninguno (100% Natural)</td>
                    <td className="py-4 px-6 text-center text-red-600">Contiene PFAS/PFOA</td>
                    <td className="py-4 px-6 text-center text-green-600">Ninguno</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-medium">Conductividad Eléctrica</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">No Conductivo</td>
                    <td className="py-4 px-6 text-center text-yellow-600">Varía</td>
                    <td className="py-4 px-6 text-center text-red-600">Conductivo</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Limpieza Requerida</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">Mínima</td>
                    <td className="py-4 px-6 text-center text-red-600">Extensa</td>
                    <td className="py-4 px-6 text-center text-red-600">Extensa</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      
      <Footer locale={locale} />
      <Chatbot locale={locale} messages={chatbotMessages} />
    </div>
  );
}
