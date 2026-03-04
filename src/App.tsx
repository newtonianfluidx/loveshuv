import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Brain, MessageCircle, ShieldCheck, Activity, ArrowRight, CheckCircle2, XCircle, Star, Quote } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="relative w-12 h-12 text-[#A61919]">
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        {/* Grid */}
        <line x1="33" y1="15" x2="33" y2="85" />
        <line x1="66" y1="15" x2="66" y2="85" />
        <line x1="15" y1="33" x2="85" y2="33" />
        <line x1="15" y1="66" x2="85" y2="66" />
        
        {/* X's */}
        <path d="M18 18 L28 28 M28 18 L18 28" />
        <path d="M72 45 L82 55 M82 45 L72 55" />
        <path d="M45 72 L55 82 M55 72 L45 82" />
        
        {/* O's */}
        <circle cx="50" cy="23" r="5" />
        <circle cx="77" cy="77" r="5" />
        
        {/* Diagonal Line with Arrow */}
        <line x1="15" y1="85" x2="85" y2="15" strokeWidth="5" />
        <path d="M75 15 L85 15 L85 25" strokeWidth="5" />
        
        {/* Hearts (simplified) */}
        <path d="M 22 73 C 22 68, 30 68, 25 78 C 22 68, 14 68, 22 73 Z" fill="currentColor" stroke="none" transform="rotate(45 22 73)" />
        <path d="M 50 45 C 50 40, 58 40, 53 50 C 50 40, 42 40, 50 45 Z" fill="currentColor" stroke="none" transform="rotate(45 50 45)" />
        <path d="M 78 17 C 78 12, 86 12, 81 22 C 78 12, 70 12, 78 17 Z" fill="currentColor" stroke="none" transform="rotate(45 78 17)" />
      </svg>
    </div>
    <span className="text-4xl font-bold tracking-tight text-[#A61919]" style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', sans-serif" }}>luvshuv</span>
  </div>
);

const CONTENT = {
  unconventional: {
    heroBadge: "More Math, Less Swiping",
    heroTitle: <>Find your <span className="text-[#A61919]">long-term fit</span>, not just a match.</>,
    heroDesc: "Tired of endless swiping and low-intent matches? Luvshuv uses sophisticated psychological compatibility models to connect urban professionals seeking real commitment.",
    heroPrimaryBtn: "Get Early Access",
    heroSecondaryBtn: "Take the Compatibility Test",
    heroSocialProof: "Join 10,000+ dating-fatigued professionals",
    mockupScoreLabel: "Compatibility Score",
    mockupScore: "94%",
    mockupTag1: "Secure Attachment",
    mockupTag2: "Direct Communicator",
    float1Label: "Psychometric Match",
    float1Title: "Deep Compatibility",
    float2Label: "High Intent",
    float2Title: "Real Conversations",
    problemSectionTitle: "Why Dating Apps Are Broken",
    problemSectionDesc: "Current apps reward looks and proximity, leading to endless low-intent matches and emotional fatigue. We built Luvshuv to fix this.",
    problemTitle: "The Old Way",
    problemList: [
      "Superficial matching based purely on looks & proximity",
      "Endless swiping leading to emotional fatigue",
      "Low-intent matches and ghosting",
      "No understanding of long-term compatibility"
    ],
    solutionTitle: "The Luvshuv Way",
    solutionList: [
      "Sophisticated psychological compatibility matching",
      "Fewer, but significantly higher-quality matches",
      "Gamified onboarding to understand values & expectations",
      "Matches optimized for sustained, real conversations"
    ],
    scienceTitle: "The Science of Connection",
    scienceDesc: "Our proprietary models go beyond the surface to find someone who truly fits your life.",
    feature1Title: "Psychometric Matching",
    feature1Desc: "We analyze attachment styles, communication preferences, and conflict resolution tactics.",
    feature2Title: "Behavioral Analytics",
    feature2Desc: "Continuous learning from real interactions to refine and improve your future matches.",
    feature3Title: "High-Intent Community",
    feature3Desc: "A curated pool of urban professionals explicitly seeking long-term, committed relationships.",
    audienceTitle: "Built for the dating-fatigued professional.",
    audienceDesc: "If you're 25-40, tired of the swipe grind, and actively seeking a long-term committed relationship, Luvshuv is designed specifically for you.",
    audienceList: ["Urban professionals", "Seeking long-term commitment", "Dissatisfied with swipe-based apps"],
    ctaTitle: "Ready to find your long-term fit?",
    ctaDesc: "Join our waitlist today and be the first to experience a dating app that actually understands compatibility."
  },
  conventional: {
    heroBadge: "More Swiping, More Matches",
    heroTitle: <>Find your <span className="text-[#A61919]">next date</span>, right around the corner.</>,
    heroDesc: "Ready to meet someone new? Our app uses location and visual preferences to connect you with singles in your area instantly.",
    heroPrimaryBtn: "Start Swiping",
    heroSecondaryBtn: "Browse Profiles",
    heroSocialProof: "Join 10,000+ active singles nearby",
    mockupScoreLabel: "Distance",
    mockupScore: "2 miles",
    mockupTag1: "Loves Travel",
    mockupTag2: "Foodie",
    float1Label: "Location Based",
    float1Title: "Singles Nearby",
    float2Label: "Instant Match",
    float2Title: "Quick Connections",
    problemSectionTitle: "Meeting People Made Easy",
    problemSectionDesc: "We make it incredibly simple to browse profiles, swipe on people you like, and start chatting immediately.",
    problemTitle: "Other Apps",
    problemList: [
      "Complicated signup processes and long quizzes",
      "Too few matches to choose from",
      "Hidden profiles and paywalls",
      "Overthinking the matching process"
    ],
    solutionTitle: "Our Way",
    solutionList: [
      "Quick setup with just your best photos",
      "Unlimited swiping to maximize your chances",
      "Location-based matching for easy meetups",
      "Simple, intuitive interface for fast connections"
    ],
    scienceTitle: "The Power of Proximity",
    scienceDesc: "We use advanced location algorithms to show you the best profiles right in your neighborhood.",
    feature1Title: "Visual First",
    feature1Desc: "Focus on what matters most initially - mutual physical attraction and shared interests.",
    feature2Title: "Location Tracking",
    feature2Desc: "Find singles who cross your path or live within a few miles of your current location.",
    feature3Title: "Massive User Base",
    feature3Desc: "A huge pool of active users means you'll never run out of new profiles to swipe through.",
    audienceTitle: "Built for the modern dater.",
    audienceDesc: "If you're single, ready to mingle, and want to meet new people quickly without overcomplicating things, this is for you.",
    audienceList: ["Active singles", "Looking for dates or casual meetups", "Love a fast-paced swiping experience"],
    ctaTitle: "Ready to start matching?",
    ctaDesc: "Join today and see who is waiting to meet you right now."
  }
};

// Common sections that remain identical across both variants
const COMMON_CONTENT = {
  howItWorks: {
    title: "How It Works",
    steps: [
      {
        number: "01",
        title: "Create Your Profile",
        desc: "Set up your profile in minutes. Add your best photos and tell us a bit about who you are and what you're looking for."
      },
      {
        number: "02",
        title: "Discover Matches",
        desc: "Our algorithm works in the background to present you with highly curated profiles that fit your preferences."
      },
      {
        number: "03",
        title: "Connect & Chat",
        desc: "When the feeling is mutual, start a conversation. Our platform is designed to encourage meaningful interactions."
      },
      {
        number: "04",
        title: "Meet in Real Life",
        desc: "Take it offline. We provide recommendations for great local spots for your first date."
      }
    ]
  },
  testimonials: {
    title: "Real Connections, Real Stories",
    desc: "Join thousands of others who have found exactly what they were looking for.",
    stories: [
      {
        name: "Michael & Emma",
        time: "Together for 2 years",
        quote: "We matched on a Tuesday, met for coffee on Thursday, and honestly haven't stopped talking since. The initial connection felt so natural.",
        image: "https://picsum.photos/seed/couple1/400/400"
      },
      {
        name: "David & James",
        time: "Engaged",
        quote: "I was so tired of dating apps before I tried this one. The quality of matches was just completely different from day one.",
        image: "https://picsum.photos/seed/couple2/400/400"
      },
      {
        name: "Sophia & Alex",
        time: "Married last month",
        quote: "It's rare to find an app that actually delivers on its promise. We both knew exactly what we wanted, and the app helped us find each other.",
        image: "https://picsum.photos/seed/couple3/400/400"
      }
    ]
  }
};

export default function App() {
  const [variant, setVariant] = useState<'unconventional' | 'conventional'>('unconventional');

  useEffect(() => {
    // 50/50 chance to show either variant
    const isConventional = Math.random() < 0.5;
    setVariant(isConventional ? 'conventional' : 'unconventional');
  }, []);

  const t = CONTENT[variant];
  const c = COMMON_CONTENT;

  return (
    <div className="min-h-screen bg-[#FDF8EE] text-gray-900 font-sans selection:bg-[#A61919] selection:text-white">
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#features" className="hover:text-[#A61919] transition-colors">Why Luvshuv</a>
          <a href="#how-it-works" className="hover:text-[#A61919] transition-colors">How it Works</a>
          <a href="#stories" className="hover:text-[#A61919] transition-colors">Success Stories</a>
        </div>
        <button className="bg-[#A61919] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#8A1515] transition-colors shadow-md">
          Join Waitlist
        </button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 space-y-8"
        >
          <div className="inline-block bg-[#A61919]/10 text-[#A61919] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
            {t.heroBadge}
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#A61919] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8A1515] transition-colors shadow-lg flex items-center justify-center gap-2">
              {t.heroPrimaryBtn} <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-sm">
              {t.heroSecondaryBtn}
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-8 h-8 rounded-full border-2 border-[#FDF8EE]" referrerPolicy="no-referrer" />
              ))}
            </div>
            <p>{t.heroSocialProof}</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2 relative"
        >
          {/* Abstract App Mockup */}
          <div className="relative w-full max-w-md mx-auto aspect-[9/19] bg-white rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden flex flex-col">
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-1/2 mx-auto z-20"></div>
            
            <div className="flex-1 bg-gray-50 p-6 flex flex-col gap-4 pt-12 relative z-10">
              <div className="flex justify-between items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div className="text-[#A61919] font-bold text-xl" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>luvshuv</div>
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex-1 flex flex-col">
                <img src="https://picsum.photos/seed/couple/400/400" alt="Match" className="w-full aspect-square object-cover rounded-xl mb-4" referrerPolicy="no-referrer" />
                <h3 className="text-2xl font-bold">{t.mockupName}</h3>
                <p className="text-gray-500 mb-4">Architect • 2 miles away</p>
                
                <div className="bg-[#A61919]/5 p-4 rounded-xl mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-[#A61919]">{t.mockupScoreLabel}</span>
                    <span className="font-bold text-[#A61919] text-xl">{t.mockupScore}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#A61919] h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>

                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600">{t.mockupTag1}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600">{t.mockupTag2}</span>
                </div>
              </div>

              <div className="flex justify-center gap-6 pb-4 mt-auto">
                <button className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors border border-gray-100">
                  <XCircle className="w-8 h-8" />
                </button>
                <button className="w-14 h-14 bg-[#A61919] rounded-full shadow-lg shadow-[#A61919]/30 flex items-center justify-center text-white hover:bg-[#8A1515] transition-colors">
                  <Heart className="w-7 h-7 fill-current" />
                </button>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-20 -left-4 md:-left-12 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
          >
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{t.float1Label}</p>
              <p className="font-bold text-gray-900">{t.float1Title}</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 -right-4 md:-right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
          >
            <div className="bg-blue-100 p-2 rounded-full text-blue-600">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{t.float2Label}</p>
              <p className="font-bold text-gray-900">{t.float2Title}</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Common Section: How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">{c.howItWorks.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
            
            {c.howItWorks.steps.map((step, i) => (
              <div key={i} className="relative bg-white">
                <div className="w-24 h-24 rounded-full bg-[#FDF8EE] border-4 border-white shadow-sm flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-[#A61919] font-mono">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{step.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section id="features" className="py-24 bg-[#FDF8EE]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">{t.problemSectionTitle}</h2>
            <p className="text-xl text-gray-600">{t.problemSectionDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* The Problem */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{t.problemTitle}</h3>
              </div>
              <ul className="space-y-4">
                {t.problemList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <XCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Solution */}
            <div className="bg-[#A61919]/5 p-8 rounded-3xl border border-[#A61919]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A61919]/10 rounded-bl-full -z-10"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#A61919] flex items-center justify-center text-white">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#A61919]">{t.solutionTitle}</h3>
              </div>
              <ul className="space-y-4">
                {t.solutionList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#A61919] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Section: Success Stories */}
      <section id="stories" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">{c.testimonials.title}</h2>
            <p className="text-xl text-gray-600">{c.testimonials.desc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {c.testimonials.stories.map((story, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 flex flex-col">
                <img src={story.image} alt={story.name} className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex text-[#A61919] mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                  </div>
                  <Quote className="w-8 h-8 text-gray-300 mb-4" />
                  <p className="text-gray-700 italic mb-6 flex-1">"{story.quote}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{story.name}</p>
                    <p className="text-sm text-gray-500">{story.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unfair Advantage / Features */}
      <section className="py-24 bg-[#FDF8EE]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">{t.scienceTitle}</h2>
            <p className="text-xl text-gray-600">{t.scienceDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: t.feature1Title,
                desc: t.feature1Desc
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: t.feature2Title,
                desc: t.feature2Desc
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: t.feature3Title,
                desc: t.feature3Desc
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-[#A61919]/10 text-[#A61919] flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="audience" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#A61919 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">{t.audienceTitle}</h2>
              <p className="text-xl text-gray-400">{t.audienceDesc}</p>
              <ul className="space-y-3 pt-4">
                {t.audienceList.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#A61919]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/prof1/400/500" alt="Professional" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/prof2/400/500" alt="Professional" className="rounded-2xl w-full h-64 object-cover mt-8" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#A61919] text-white text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.ctaTitle}</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">{t.ctaDesc}</p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-3xl mx-auto">
            <button 
              onClick={() => {
                // TODO: Add analytics tracking for positive response
                console.log(`User clicked "Interesting" for variant: ${variant}`);
              }}
              className="bg-gray-900 text-white px-8 py-5 rounded-2xl font-bold hover:bg-gray-800 transition-colors shadow-lg flex-1 text-lg"
            >
              I find this interesting and would be willing to join
            </button>
            <button 
              onClick={() => {
                // TODO: Add analytics tracking for negative response
                console.log(`User clicked "Not Interesting" for variant: ${variant}`);
              }}
              className="bg-white text-[#A61919] px-8 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-colors shadow-lg flex-1 text-lg"
            >
              This does not interest me
            </button>
          </div>
          <p className="mt-8 text-sm text-white/60">Your feedback helps us build a better experience.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#A61919]">Privacy Policy</a>
            <a href="#" className="hover:text-[#A61919]">Terms of Service</a>
            <a href="#" className="hover:text-[#A61919]">Contact Us</a>
          </div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Luvshuv. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
