import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Image from 'next/image';
import Link from 'next/link';

export default function ResourcesPage() {
  const locale = 'en';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl max-w-3xl">
              Access technical documentation, safety data sheets, and educational materials about EfireX TRPL-E.
            </p>
          </div>
        </section>
        
        {/* Downloads Section */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Downloads</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SDS Document */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <svg className="h-24 w-24 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Safety Data Sheet (SDS)</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive safety information for EfireX TRPL-E, including handling, storage, and emergency procedures.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download SDS
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
                  <h3 className="text-xl font-bold mb-2">EfireX Product Catalog</h3>
                  <p className="text-gray-600 mb-4">
                    Complete catalog of EfireX TRPL-E products, including specifications, applications, and ordering information.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Catalog
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
                  <h3 className="text-xl font-bold mb-2">UL Certification</h3>
                  <p className="text-gray-600 mb-4">
                    Official UL certification documents for EfireX TRPL-E, verifying compliance with safety standards.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Certificate
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
                  <h3 className="text-xl font-bold mb-2">EfireX TRPL-E Demonstration</h3>
                  <p className="text-gray-600 mb-4">
                    Watch EfireX TRPL-E in action as it effectively extinguishes a lithium battery fire in real-time.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch Video
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
                  <h3 className="text-xl font-bold mb-2">Thermal Runaway Prevention</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how EfireX TRPL-E prevents thermal runaway in lithium batteries and protects critical infrastructure.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">What makes EfireX TRPL-E different from traditional fire extinguishers?</h3>
                  <p className="text-gray-700">
                    EfireX TRPL-E uses a proprietary mineral encapsulation technology that can withstand temperatures over 1250°C (2282°F), making it uniquely effective against lithium battery fires. Unlike traditional agents, it creates a protective barrier that prevents reignition while rapidly cooling the thermal reaction.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">Is EfireX TRPL-E safe to use on energized electrical equipment?</h3>
                  <p className="text-gray-700">
                    Yes, EfireX TRPL-E is non-conductive and has been tested and certified safe for use on energized electrical equipment up to 100,000 volts, making it ideal for data centers, EV charging stations, and other electrical applications.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">How environmentally friendly is EfireX TRPL-E?</h3>
                  <p className="text-gray-700">
                    EfireX TRPL-E is 100% biodegradable, non-toxic, and contains no PFAS/PFOA chemicals. It's safe for marine environments and food processing facilities, with minimal environmental impact and no hazardous waste concerns.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">What is the shelf life of EfireX TRPL-E?</h3>
                  <p className="text-gray-700">
                    EfireX TRPL-E has a shelf life of 5+ years with stable performance when stored according to recommendations. Regular inspection is still recommended as part of standard fire safety protocols.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">Can EfireX TRPL-E be used in automatic fire suppression systems?</h3>
                  <p className="text-gray-700">
                    Yes, EfireX TRPL-E is compatible with standard fire suppression systems and can be integrated into automatic sprinkler systems, specialized battery fire suppression units, and custom installations for various applications.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-700 mb-4">Have more questions? Our chatbot can help, or contact our support team.</p>
                <Link href="/en/contact" className="btn-primary">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer locale={locale} />
      
    </div>
  );
}
