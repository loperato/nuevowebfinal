import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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

export default function HomePage() {
  const locale = 'en';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/hero2.png" 
              alt="EfireX TRPL-E extinguishing lithium battery fire" 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="container-custom relative z-10 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
              When lithium batteries ignite, only true innovation can stop them.
            </h1>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/en/technology" className="btn-primary">
                Learn More
              </Link>
              <Link href="/en/products" className="btn-secondary">
                Buy Now
              </Link>
              <Link href="/en/applications" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition-colors">
                Industries We Protect
              </Link>
            </div>
          </div>
        </section>
        
        {/* Technology Section Preview */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">The science behind EfireX TRPL-E</h2>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mineral encapsulation agent</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Withstands temperatures &gt;1250°C</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Controls thermal runaway in lithium batteries</span>
                  </li>
                </ul>
                <Link href="/en/technology" className="inline-block mt-6 text-blue-600 font-semibold hover:text-blue-800">
                  Learn more about our technology →
                </Link>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">Cooling Power vs. Traditional Agents</h3>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-md p-4">
                    {/* This would be replaced with an actual chart component */}
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex justify-between">
                        <div className="h-4 w-4 bg-amber-500 rounded-full"></div>
                        <span className="text-sm">EfireX/TPL</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Water</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="h-4 w-4 bg-gray-400 rounded-full"></div>
                        <span className="text-sm">Traditional Foam</span>
                      </div>
                      <div className="border-t border-gray-300 pt-2 text-center">
                        <span className="text-sm font-medium">Time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Industries Section */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Industries We Protect</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Electric Vehicles</h3>
                <p className="text-gray-600">Protection for EV batteries during charging, operation, and storage.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Aviation</h3>
                <p className="text-gray-600">Safety solutions for aircraft batteries and electronic systems.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Centers</h3>
                <p className="text-gray-600">Critical protection for server rooms and backup power systems.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Battery Storage</h3>
                <p className="text-gray-600">Safety for energy storage facilities and solar installations.</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/en/applications" className="btn-primary">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer locale={locale} />
      
    </div>
  );
}
