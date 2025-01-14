'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "หน้าแรก", href: "#" },
    { name: "ฟีเจอร์", href: "#features" },
    { name: "เกี่ยวกับเรา", href: "#about" },
    { name: "ติดต่อ", href: "#contact" }
  ];

  return (
    <nav className="fixed w-full bg-primary bg-opacity-95 text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src="/logo.png" alt="FairBlock Logo" className='h-16 bg-white rounded-md m-10' />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gray-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-white hover:bg-primary-dark rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full text-center bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 h-screen flex items-center">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
          นวัตกรรมบล็อกเชนเพื่อธุรกรรมที่เป็นธรรม
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          ปฏิวัติการทำธุรกรรมด้วยเทคโนโลยีบล็อกเชนที่ปลอดภัย โปร่งใส ตรวจสอบได้ทุกขั้นตอน
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            เริ่มต้นใช้งานฟรี
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all">
            ศึกษาเพิ่มเติม
          </button>
        </div>
      </div>
    </div>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      title: "Smart Contract อัจฉริยะ",
      description: "ระบบสัญญาอัจฉริยะที่ทำงานอัตโนมัติ ปลอดภัย และเชื่อถือได้",
      icon: "🔒"
    },
    {
      title: "ระบบตรวจสอบย้อนหลัง",
      description: "ตรวจสอบประวัติการทำธุรกรรมทั้งหมดได้อย่างโปร่งใส",
      icon: "📊"
    },
    {
      title: "การยืนยันตัวตนแบบ Multi-Sig",
      description: "เพิ่มความปลอดภัยด้วยระบบยืนยันตัวตนหลายชั้น",
      icon: "🔐"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
          ฟีเจอร์ครบครัน เพื่อธุรกรรมที่สมบูรณ์แบบ
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-heading text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Trust Section Component
const TrustSection = () => {
  const trustPoints = [
    {
      title: "เทคโนโลยี Blockchain ระดับโลก",
      description: "ใช้เทคโนโลยีบล็อกเชนที่ได้มาตรฐานระดับสากล"
    },
    {
      title: "ระบบความปลอดภัยหลายชั้น",
      description: "การป้องกันข้อมูลด้วยระบบความปลอดภัยหลายระดับ"
    },
    {
      title: "ทีมผู้เชี่ยวชาญ 24/7",
      description: "ทีมสนับสนุนพร้อมให้คำปรึกษาตลอด 24 ชั่วโมง"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
          เหตุผลที่ลูกค้าไว้วางใจเรา
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trustPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-center p-6"
          >
            <h3 className="font-heading text-xl font-semibold mb-3">{point.title}</h3>
            <p className="text-gray-600">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  const footerLinks = {
    company: {
      title: "เกี่ยวกับเรา",
      links: ["เกี่ยวกับ FairBlock", "ติดต่อเรา", "ร่วมงานกับเรา"]
    },
    product: {
      title: "ผลิตภัณฑ์",
      links: ["Smart Contract", "ระบบยืนยันตัวตน", "API Documentation"]
    },
    resources: {
      title: "ข้อมูลเพิ่มเติม",
      links: ["บทความ", "คู่มือการใช้งาน", "คำถามที่พบบ่อย"]
    },
    legal: {
      title: "กฎหมาย",
      links: ["นโยบายความเป็นส่วนตัว", "เงื่อนไขการใช้งาน", "นโยบายคุกกี้"]
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {Object.entries(footerLinks).map(([key, section]) => (
          <div key={key}>
            <h4 className="font-heading text-lg font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 mt-12 pt-8 text-center">
        <p>© 2025 FairBlock. All rights reserved.</p>
        <p className="mt-2 text-sm">
          149/31 หมู่ 9 ต.บางโฉลง อ.บางพลี จ.สมุทรปราการ 10540
        </p>
      </div>
    </div>
  );
};

// Main Page Component
export default function HomePage() {
  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary to-secondary text-white pt-16">
        <HeroSection />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <FeaturesSection />
      </section>

      {/* Trust Section */}
      <section id="about" className="py-20 bg-background">
        <TrustSection />
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-accent text-white">
        <Footer />
      </footer>
    </div>
  );
}