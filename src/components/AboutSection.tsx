import { siteConfig } from '@/config';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mengenal lebih dekat tentang passion dan journey saya di dunia teknologi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl transform -rotate-3"></div>
              
              {/* Profile image container */}
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-blue-200 rounded-xl flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <div className="text-8xl">👨‍💻</div>
                </div>
                
                {/* Status badge */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Available for work
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Passionate Web Developer
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {siteConfig.about.description}
              </p>
            </div>

            {/* Key highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">
                Hal yang Mendorong Saya:
              </h4>
              <ul className="space-y-3">
                {[
                  'Membangun aplikasi web yang berfokus pada pengguna (user-centric) untuk menyelesaikan masalah nyata.',
                  'Mendalami teknologi terdepan dan praktik terbaik (best practices) dalam industri.',
                  'Terus belajar dan selalu mengikuti perkembangan tren industri teknologi.',
                  'Menulis kode yang bersih, mudah dikelola (maintainable), dan skalabel.',
                  'Berkolaborasi dengan tim untuk memberikan pengalaman digital yang luar biasa'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-1">3+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-1">1+</div>
                <div className="text-sm text-gray-600">Years Learning</div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="pt-6">
              <a 
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Let&apos;s Work Together
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}