import Link from 'next/link';
import { ArrowRight, Star, ShoppingCart, Clock } from 'lucide-react';
import products from '@/data/products.json';
import { Product } from '@/types/product';

export default function Home() {
  const featuredProducts = products.slice(0, 4) as unknown as Product[];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Limited Time Offer - 20% Off</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Premium Electronics & Appliances
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Discover the latest in home technology. From smart TVs to energy-efficient appliances, 
                we have everything you need to upgrade your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4">🏠</div>
                  <h3 className="text-2xl font-semibold mb-2">Smart Home Solutions</h3>
                  <p className="text-blue-100">Transform your living space with cutting-edge technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium electronics and home appliances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-square bg-gray-200 flex items-center justify-center relative">
                  <div className="text-4xl">📺</div>
                  {product.originalPrice > product.price && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      SALE
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">{product.brand}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      href={`/product/${product.slug}`}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center"
                    >
                      View Details
                    </Link>
                    <button className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Trusted by thousands of satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Excellent service and quality products. The Samsung TV I bought exceeded my expectations. Highly recommended!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Fast delivery and great prices. The Dyson vacuum is amazing and the customer support was very helpful.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mike Chen</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Best electronics store I&apos;ve found. Competitive prices, quality products, and outstanding service!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ahmed Ali</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Al Imran Electronics?</h2>
            <p className="text-lg text-gray-600">We&apos;re committed to providing the best shopping experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over $500</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Warranty</h3>
              <p className="text-gray-600">Extended warranty on all products</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
