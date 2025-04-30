import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/chatbot/Chatbot';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder for chatbot messages - will be replaced with actual data
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
  const locale = 'en';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The science behind EfireX TRPL-E</h1>
            <p className="text-xl max-w-3xl">
              Our revolutionary mineral encapsulation technology provides superior protection against lithium battery fires.
            </p>
          </div>
        </section>
        
        {/* Technology Explanation */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Mineral Encapsulation Technology</h2>
                <p className="text-lg mb-6">
                  EfireX TRPL-E uses a proprietary mineral-based formula that creates a protective barrier around burning materials, effectively cutting off oxygen supply while rapidly cooling the thermal reaction.
                </p>
                <p className="text-lg mb-6">
                  Unlike traditional fire suppression agents that only cool or smother fires, our encapsulation technology addresses both aspects simultaneously, making it uniquely effective against high-temperature lithium battery fires.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mt-8">
                  <h3 className="font-bold text-xl mb-2">Key Advantages:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Withstands extreme temperatures exceeding 1250°C (2282°F)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Prevents thermal runaway propagation in battery cells</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>100% environmentally friendly and non-toxic</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Non-conductive and safe for use on electrical equipment</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-center">Cooling Power vs. Traditional Agents</h3>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-md p-6 mb-6">
                    {/* This would be replaced with an actual chart component */}
                    <div className="h-64 relative border border-gray-300 rounded bg-white p-4">
                      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
                        <div className="text-xs text-gray-500">Temperature</div>
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
                        <div className="text-xs text-gray-500 text-center">Time</div>
                      </div>
                    </div>
                    <div className="flex justify-center space-x-6">
                      <div className="flex items-center">
                        <div className="h-4 w-4 bg-amber-500 rounded-full mr-2"></div>
                        <span className="text-sm">EfireX/TPL</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-4 w-4 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm">Water</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-4 w-4 bg-gray-400 rounded-full mr-2"></div>
                        <span className="text-sm">Traditional Foam</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Tests show that EfireX TRPL-E reduces temperatures significantly faster than traditional fire suppression agents, preventing thermal runaway propagation in lithium battery cells.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Comparison Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">How EfireX TRPL-E Compares</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">EfireX TRPL-E</th>
                    <th className="py-4 px-6 text-center">Traditional Foam</th>
                    <th className="py-4 px-6 text-center">Water</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Temperature Resistance</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">Over 1250°C (2282°F)</td>
                    <td className="py-4 px-6 text-center text-red-600">Up to 200°C (392°F)</td>
                    <td className="py-4 px-6 text-center text-red-600">100°C (212°F) (boils)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-medium">Thermal Runaway Control</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">Excellent</td>
                    <td className="py-4 px-6 text-center text-red-600">Poor</td>
                    <td className="py-4 px-6 text-center text-red-600">Very Poor</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Environmental Impact</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">None (100% Natural)</td>
                    <td className="py-4 px-6 text-center text-red-600">Contains PFAS/PFOA</td>
                    <td className="py-4 px-6 text-center text-green-600">None</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-medium">Electrical Conductivity</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">Non-Conductive</td>
                    <td className="py-4 px-6 text-center text-yellow-600">Varies</td>
                    <td className="py-4 px-6 text-center text-red-600">Conductive</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Cleanup Required</td>
                    <td className="py-4 px-6 text-center text-green-600 font-bold">Minimal</td>
                    <td className="py-4 px-6 text-center text-red-600">Extensive</td>
                    <td className="py-4 px-6 text-center text-red-600">Extensive</td>
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
