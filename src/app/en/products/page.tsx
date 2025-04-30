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

export default function ProductsPage() {
  const locale = 'en';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Products</h1>
            <p className="text-xl max-w-3xl">
              Discover our range of EfireX TRPL-E fire suppression solutions for lithium battery protection.
            </p>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* EFX-9L Extinguisher */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-32 w-32 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">EFX-9L Extinguisher</h3>
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">Portable</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Technical Specifications:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Capacity: 9 Liters</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Weight: 13.5 kg (full)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Discharge Range: 4-6 meters</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Discharge Time: 45-60 seconds</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">UL Certified</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Non-Conductive</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">PFAS Free</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <Link href="/en/contact" className="text-blue-600 hover:text-blue-800 font-semibold">
                      Buy Now
                    </Link>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      Download SDS
                    </a>
                  </div>
                </div>
              </div>
              
              {/* TRPL-E 5 Gallon */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-32 w-32 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">TRPL-E 5 Gallon</h3>
                    <span className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full">Medium</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Technical Specifications:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Capacity: 5 Gallons (18.9 L)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Weight: 21 kg</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Shelf Life: 5+ years</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Compatible with standard pumps</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Biodegradable</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Non-Toxic</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Food Safe</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <Link href="/en/contact" className="text-blue-600 hover:text-blue-800 font-semibold">
                      Buy Now
                    </Link>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      Download SDS
                    </a>
                  </div>
                </div>
              </div>
              
              {/* TRPL-E 250 Gallon */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-32 w-32 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">TRPL-E 250 Gallon</h3>
                    <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">Industrial</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Technical Specifications:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Capacity: 250 Gallons (946 L)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Tote Dimensions: Standard IBC</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Ideal for large facilities</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Compatible with fire suppression systems</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">UL Certified</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Marine Safe</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Chemical Free</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <Link href="/en/contact" className="text-blue-600 hover:text-blue-800 font-semibold">
                      Buy Now
                    </Link>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      Download SDS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-blue-50">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Common Features Across All Products</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">100% All Natural</h3>
                <p className="text-gray-600">Made from natural minerals with no synthetic chemicals or harmful additives.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Non-Conductive</h3>
                <p className="text-gray-600">Safe to use on energized electrical equipment without risk of electrical shock.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Biodegradable</h3>
                <p className="text-gray-600">Environmentally friendly and breaks down naturally without harmful residues.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">PFAS/PFOA Free</h3>
                <p className="text-gray-600">Contains no harmful forever chemicals found in traditional firefighting foams.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer locale={locale} />
      
    </div>
  );
}
