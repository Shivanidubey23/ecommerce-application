"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Search, Menu, X, User, Heart, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount] = useState(3) // This would come from your cart state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span>📞 +1 (555) 123-4567</span>
              <span>✉️ support@shophub.com</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>🚚 Free shipping on orders over $50</span>
              <span>🔒 Secure checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
              <Package className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ShopHub
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search for products..."
                className="pl-10 pr-4 py-2 w-full border-2 border-gray-200 rounded-full focus:border-blue-500 transition-colors"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* User Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-1">
                  <User className="h-5 w-5" />
                  <span>Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link href="/login" className="w-full">
                    Sign In
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/register" className="w-full">
                    Create Account
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile" className="w-full">
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/orders" className="w-full">
                    My Orders
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-1">
              <Heart className="h-5 w-5" />
              <span>Wishlist</span>
            </Button>

            {/* Shopping Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative flex items-center space-x-1">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden md:inline">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center justify-center mt-4 space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            All Products
          </Link>
          <Link
            href="/categories/electronics"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Electronics
          </Link>
          <Link href="/categories/clothing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Clothing
          </Link>
          <Link href="/categories/home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Home & Garden
          </Link>
          <Link href="/categories/sports" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Sports
          </Link>
          <Link href="/deals" className="text-red-600 hover:text-red-700 font-medium transition-colors">
            🔥 Deals
          </Link>
        </nav>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-full border-2 border-gray-200 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/products" className="block text-gray-700 hover:text-blue-600 font-medium">
              All Products
            </Link>
            <Link href="/categories/electronics" className="block text-gray-700 hover:text-blue-600 font-medium">
              Electronics
            </Link>
            <Link href="/categories/clothing" className="block text-gray-700 hover:text-blue-600 font-medium">
              Clothing
            </Link>
            <Link href="/categories/home" className="block text-gray-700 hover:text-blue-600 font-medium">
              Home & Garden
            </Link>
            <Link href="/categories/sports" className="block text-gray-700 hover:text-blue-600 font-medium">
              Sports
            </Link>
            <Link href="/deals" className="block text-red-600 hover:text-red-700 font-medium">
              🔥 Deals
            </Link>
            <hr className="my-4" />
            <Link href="/login" className="block text-gray-700 hover:text-blue-600 font-medium">
              Sign In
            </Link>
            <Link href="/register" className="block text-gray-700 hover:text-blue-600 font-medium">
              Create Account
            </Link>
            <Link href="/profile" className="block text-gray-700 hover:text-blue-600 font-medium">
              My Profile
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
