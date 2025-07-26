import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated with Our Latest Deals!</h3>
            <p className="text-blue-100 mb-6">Subscribe to our newsletter and never miss out on amazing offers</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white text-gray-900 border-0"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
                <Package className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold">ShopHub</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your ultimate shopping destination for quality products at unbeatable prices. We're committed to providing
              exceptional customer service and fast delivery.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-400 hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/electronics" className="text-gray-400 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/categories/clothing" className="text-gray-400 hover:text-white transition-colors">
                  Clothing & Fashion
                </Link>
              </li>
              <li>
                <Link href="/categories/home" className="text-gray-400 hover:text-white transition-colors">
                  Home & Garden
                </Link>
              </li>
              <li>
                <Link href="/categories/sports" className="text-gray-400 hover:text-white transition-colors">
                  Sports & Outdoors
                </Link>
              </li>
              <li>
                <Link href="/categories/beauty" className="text-gray-400 hover:text-white transition-colors">
                  Beauty & Health
                </Link>
              </li>
              <li>
                <Link href="/categories/books" className="text-gray-400 hover:text-white transition-colors">
                  Books & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">123 Shopping Street, Commerce City, CC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">support@shophub.com</span>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Customer Service Hours</h5>
              <p className="text-sm text-gray-400">
                Monday - Friday: 9:00 AM - 8:00 PM
                <br />
                Saturday: 10:00 AM - 6:00 PM
                <br />
                Sunday: 12:00 PM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2024 ShopHub. All rights reserved.</div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
          {/* <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-400">
              <span>🔒 Secure payments</span>
              <span>🚚 Fast delivery</span>
              <span>↩️ Easy returns</span>
              <span>⭐ 5-star service</span>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
