"use client"
import React, { useState } from 'react';
import { 
  Droplets, 
  Bot, 
  Menu, 
  X, 
  ChevronRight, 
  Play,
  MessageCircle,
  BarChart3,
  TrendingUp,
  MapPin,
  Shield,
  Clock,
  Users,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  CheckCircle,
  Activity,
  Database,
  Eye
} from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const features = [
    {
      icon: MessageCircle,
      title: "Natural Language Queries",
      description: "Ask questions like 'Show me over-exploited areas in State X'",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Activity,
      title: "Historical Trends",
      description: "View groundwater levels and trends over time",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Eye,
      title: "Interactive Visualizations",
      description: "Charts and maps for easy insights",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const additionalFeatures = [
    {
      icon: MapPin,
      title: "Real-time Monitoring",
      description: "Track groundwater levels across 248 talukas in Gujarat with live updates and alerts."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-powered forecasting to predict water scarcity and help in proactive planning."
    },
    {
      icon: Shield,
      title: "Early Warning System",
      description: "Get instant alerts when water levels drop below critical thresholds."
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly integrates with government databases and satellite imagery."
    }
  ];

  const stats = [
    { number: "248", label: "Talukas Monitored", color: "text-blue-600" },
    { number: "15+", label: "Years of Data", color: "text-green-600" },
    { number: "1000+", label: "Water Points", color: "text-purple-600" },
    { number: "24/7", label: "Monitoring", color: "text-orange-600" }
  ];

  const ChatBot = () => (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      chatOpen ? 'w-80 h-96' : 'w-16 h-16'
    }`}>
      {!chatOpen ? (
        <button
          onClick={() => setChatOpen(true)}
          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 animate-pulse hover:scale-110"
        >
          <Bot className="w-8 h-8 text-white" />
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl border h-full flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6" />
              <div>
                <span className="font-semibold block">Water Assistant</span>
                <span className="text-xs text-blue-100">Online now</span>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <p className="text-sm text-gray-700">👋 Hello! I'm your water data assistant. I can help you with:</p>
                <ul className="mt-2 text-xs text-gray-600 space-y-1">
                  <li>• Groundwater levels by taluka</li>
                  <li>• Historical trend analysis</li>
                  <li>• Rainfall and weather data</li>
                  <li>• Water quality reports</li>
                </ul>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs hover:bg-blue-200 transition-colors">
                  Show Ahmedabad data
                </button>
                <button className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs hover:bg-green-200 transition-colors">
                  Rainfall forecast
                </button>
                <button className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs hover:bg-orange-200 transition-colors">
                  Critical areas
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask about water data..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <Image src="/logo.png" alt="Logo" width={200} height={200}/>
                {/* <Droplets className="w-6 h-6 text-white" /> */}
              </div>
              <div>
                <h1 className="text-xl text-gray-900 font-poppins font-bold capitalize cursor-pointer">Shayog</h1>
                <p className="text-xs text-gray-500">Groundwater Intelligence Platform</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#dashboard" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Dashboard</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <Link  href="/ChatBot" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">ChatBot</Link>
              
              <div className="flex items-center gap-3">
                <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  Sign In
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all font-medium">
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
                <a href="#dashboard" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Dashboard</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
                <div className="flex flex-col gap-3 pt-4 border-t">
                  <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-left">
                    Sign In
                  </button>
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all font-medium">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                Real-time Water Monitoring
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Groundwater</span><br />
                Management 
                {/* for Gujarat */}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Monitor groundwater levels across{/*248  */} talukas with AI-powered insights, 
                predictive analytics, and real-time alerts to ensure sustainable water management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  Explore Dashboard
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all font-semibold text-lg flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Live Water Levels</h3>
                  <div className="flex items-center gap-2 text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'Ahmedabad', level: 75, status: 'Good' },
                    { name: 'Gandhinagar', level: 45, status: 'Moderate' },
                    { name: 'Vadodara', level: 30, status: 'Critical' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.status}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-blue-600">{item.level}%</p>
                        <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                          <div 
                            className={`h-2 rounded-full ${
                              item.level > 60 ? 'bg-green-500' : 
                              item.level > 30 ? 'bg-orange-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${item.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools and insights to help you make informed decisions about groundwater management
            </p>
          </div>
          
          {/* Primary Features from Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Water Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of water professionals using our platform to make data-driven decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-20 h-20 bg-gradient-to-r  rounded-xl flex items-center justify-center">
                                  <Image src="/logo.png" alt="Logo" width={200} height={200} style={{borderRadius:"50px"}}/>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Gujarat Water Monitor</h3>
                  <p className="text-gray-400 text-sm">Groundwater Intelligence Platform</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {`Empowering sustainable water management through advanced monitoring, 
                AI-powered analytics, and real-time insights across Gujarat's talukas.`}
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dashboard</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Sources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">info@gujaratwatermonitor.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">+91 79 1234 5678</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <span className="text-gray-400">Gandhinagar, Gujarat, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Gujarat Water Monitor. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default HomePage;