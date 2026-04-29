/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Camera, Calendar, Heart, GraduationCap, MapPin, Quote, ArrowDown, Users, School, BookOpen, ChevronRight, Image as ImageIcon, MessageSquare, User, X, Download, Maximize2, ArrowUpDown, Plus, Send, PenTool, Trophy, Award, Sparkles } from 'lucide-react';
import React, { useState, useMemo, useEffect, useRef } from 'react';

const WALL_MESSAGES = [
  { id: 1, text: "Hello its me your ADMIN!!", author: "AYUSH", color: "cream" },
  { id: 2, text: "you can leave mesage here", author: "Anonymous", color: "white" },
  { id: 3, text: "Aaayein Baigan", author: "Anonymous", color: "cream" },
  { id: 4, text: "Miss you guyss", author: "Anonymous", color: "white" },
  { id: 5, text: "NiVce", author: "Anonymous", color: "white" },
];

const StickyNote = ({ message }: { message: typeof WALL_MESSAGES[0], key?: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: Math.random() * 4 - 2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, rotate: 0, scale: 1.02 }}
      className="relative p-8 pt-12 shadow-xl min-h-[200px] flex flex-col justify-between bg-white"
    >
      {/* Tape Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 bg-white/40 backdrop-blur-md border border-black/5 z-10" />
      
      <p className="font-hand text-black text-3xl leading-snug">
        “{message.text}”
      </p>
      
      <div className="mt-8 pt-4 border-t border-black/10">
        <span className="font-serif text-lg text-black font-bold tracking-tight">
          {message.author}
        </span>
      </div>
    </motion.div>
  );
};

const TheWallSection = () => {
  return (
    <div className="relative min-h-screen bg-[#0a1128] overflow-hidden pt-24 md:pt-32 pb-48">
      {/* Deep Blue Texture/Grain */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.4)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24 space-y-6 md:space-y-8">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 border border-white/10 backdrop-blur-sm"
           >
              <Heart size={14} className="text-gold fill-gold" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Final Goodbyes</span>
           </motion.div>
           
           <h2 className="font-sans font-bold text-4xl sm:text-6xl md:text-8xl text-white tracking-tight px-4 leading-tight">
             Message Wall of Reflection
           </h2>
           
           <p className="font-sans text-stone-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-4 italic">
             A space to leave your final words, memories, and wishes. These notes will remain here as a testament to our journey.
           </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {WALL_MESSAGES.map((msg) => (
            <StickyNote key={msg.id} message={msg} />
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center">
            <button className="px-8 md:px-10 py-3 rounded-full border border-gold/30 text-gold bg-stone-950/40 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-stone-950 transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,164,19,0.3)]">
              Load more messages
            </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.a
        href={`https://wa.me/917894038559?text=${encodeURIComponent("heyy ayush i want to write something in the Wall ")}`}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(234,164,19,0.5)' }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[60] bg-gold text-stone-950 flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 rounded-full font-sans font-bold text-xs md:text-sm tracking-widest shadow-2xl group cursor-pointer no-underline"
      >
        <PenTool size={18} md:size={20} className="group-hover:rotate-12 transition-transform" />
        <span className="md:inline">Write a Message</span>
      </motion.a>
    </div>
  );
};

const MEDIA_ITEMS = [
  // 1st Year (14 photos)
  { id: 1, category: "1st yr", title: "", caption: "", image: "/img/vault/yr1p1.jpg" },
  { id: 2, category: "1st yr", title: "", caption: "", image: "/img/vault/yr1p2.jpg" },
  { id: 3, category: "1st yr", title: "", caption: "", image: "/img/vault/yr1p3.jpg" },
  { id: 4, category: "1st yr", title: "", caption: "", image: "/img/vault/yr1p4.jpg" },
  { id: 5, category: "1st yr", title: "", caption: "", image: "/img/vault/yr1p5.jpg" },
  { id: 6, category: "1st yr", title: "", caption: "", image: "/img/vault/yr1p6.jpg" },
  { id: 7, category: "1st yr", title: "", caption: "", image: "/img/vault/yr1p7.jpg" },
  { id: 8, category: "1st yr", title: "", caption: "", image: "/img/vault/yr1p8.jpg" },
  { id: 9, category: "1st yr", title: "", caption: "", image: "/img/vault/yr1p9.jpg" },
  { id: 10, category: "1st yr", title: "", caption: "", image: "/img/vault/yr1p10.jpg" },
  { id: 11, category: "1st yr", title: "", caption: "", image: "/img/vault/yr1p11.jpg" },
  { id: 12, category: "1st yr", title: "", caption: "", image: "/img/vault/yr1p12.jpg" },
  { id: 13, category: "1st yr", title: "", caption: "", image: "/img/vault/yr1p13.jpg" },
  { id: 14, category: "1st yr", title: "", caption: "", image: "/img/vault/yr1p14.JPG" },

  // 2nd Year (10 photos)
  { id: 15, category: "2nd yr", title: "", caption: "", image: "/img/vault/yr2p1.png" },
  { id: 16, category: "2nd yr", title: "", caption: "", image: "/img/vault/yr2p2.JPG" },
  { id: 17, category: "2nd yr", title: "", caption: "", image: "/img/vault/yr2p3.JPG" },
  { id: 18, category: "2nd yr", title: "", caption: "", image: "/img/vault/yr2p4.jpg" },
  { id: 19, category: "2nd yr", title: "", caption: "", image: "/img/vault/yr2p5.JPG" },
  { id: 20, category: "2nd yr", title: "", caption: "", image: "/img/vault/yr2p6.jpg" },
  { id: 21, category: "2nd yr", title: "", caption: "", image: "/img/vault/yr2p7.jpg" },
  { id: 22, category: "2nd yr", title: "", caption: "", image: "/img/vault/yr2p8.jpg" },
  { id: 23, category: "2nd yr", title: "", caption: "", image: "/img/vault/yr2p9.jpg" },
  { id: 24, category: "2nd yr", title: "", caption: "", image: "/img/vault/yr2p10.jpg" },
  { id: 25, category: "2nd yr", title: "", caption: "", image: "/img/vault/yr2p11.jpg" },

  // 3rd Year (7 photos)
  { id: 26, category: "3rd yr", title: "", caption: "", image: "/img/vault/yr3p1.jpg" },
  { id: 27, category: "3rd yr", title: "", caption: "", image: "/img/vault/yr3p2.jpg" },
  { id: 28, category: "3rd yr", title: "", caption: "", image: "/img/vault/yr3p3.jpg" },
  { id: 29, category: "3rd yr", title: "", caption: "", image: "/img/vault/yr3p4.jpg" },
  { id: 30, category: "3rd yr", title: "", caption: "", image: "/img/vault/yr3p5.jpg" },
  { id: 31, category: "3rd yr", title: "", caption: "", image: "/img/vault/yr3p6.jpg" },
  { id: 32, category: "3rd yr", title: "", caption: "", image: "/img/vault/yr3p7.jpg" },
];

const Lightbox = ({ item, onClose }: { item: typeof MEDIA_ITEMS[0], onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 md:p-12"
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 text-stone-400 hover:text-white transition-colors z-[110]"
      >
        <X size={28} />
      </button>

      <div className="relative w-full max-w-5xl group flex flex-col items-center">
        <motion.img 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          src={item.image} 
          alt={item.title}
          className="w-full h-auto max-h-[50vh] md:max-h-[70vh] object-contain rounded-xl shadow-2xl"
          referrerPolicy="no-referrer"
        />
        
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full text-left">
          <div className="space-y-2 max-w-xl">
            <span className="text-gold font-sans text-[10px] md:text-xs uppercase tracking-widest">{item.date}</span>
            <h3 className="text-2xl md:text-4xl font-serif text-stone-100 leading-tight">{item.title}</h3>
            <p className="text-stone-400 font-sans italic text-sm md:text-base leading-relaxed">{item.caption || item.description}</p>
          </div>
          
          <a 
            href={item.image} 
            download={`${item.title}.jpg`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-gold text-stone-950 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold uppercase text-[10px] md:text-xs tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(234,164,19,0.3)] w-full md:w-auto justify-center"
          >
            <Download size={16} /> Download High Res
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const MediaCard = ({ item, onClick }: { item: typeof MEDIA_ITEMS[0], onClick: () => void, key?: any }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className="group relative aspect-[3/2] rounded-xl overflow-hidden bg-stone-950 border border-stone-900 cursor-pointer"
    >
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-stone-300 font-serif text-lg mb-1">{item.date}</span>
        <p className="text-gold font-sans font-bold text-sm tracking-wide">
          {item.caption || item.title}
        </p>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Maximize2 size={16} className="text-stone-300" />
      </div>
    </motion.div>
  );
};

const MediaVaultSection = () => {
  const [activeFilter, setActiveFilter] = useState('All Memories');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [selectedItem, setSelectedItem] = useState<typeof MEDIA_ITEMS[0] | null>(null);

  const filters = ['All Memories', '1st yr', '2nd yr', '3rd yr', 'Others'];

  const filteredItems = useMemo(() => {
    let result = activeFilter === 'All Memories' 
      ? [...MEDIA_ITEMS] 
      : MEDIA_ITEMS.filter(item => item.category === activeFilter);

    if (sortOrder === 'newest') {
      result.sort((a, b) => b.id - a.id);
    } else {
      result.sort((a, b) => a.id - b.id);
    }
    return result;
  }, [activeFilter, sortOrder]);

  return (
    <div className="pt-24 md:pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-8 md:space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-stone-100">The Archive</h2>
          <p className="font-sans text-stone-500 max-w-md leading-relaxed text-sm md:text-base">
            A cinematic collection of fleeting moments, frozen in time. From the first lecture to the final goodbye.
          </p>
        </div>
        
        <button 
          onClick={() => setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest')}
          className="flex items-center gap-2 border border-stone-800 rounded-full py-2 md:py-3 px-5 md:px-6 text-[9px] md:text-[10px] uppercase tracking-widest text-stone-400 hover:text-white transition-all bg-stone-950/50"
        >
          <ArrowUpDown size={14} className="text-gold" />
          {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
        </button>
      </div>

      <div className="flex overflow-x-auto pb-4 gap-3 border-y border-stone-900 pt-8 no-scrollbar scroll-smooth">
        <div className="flex gap-3 min-w-max pb-4">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 md:px-6 py-2 rounded-full text-[9px] md:text-[10px] uppercase tracking-widest transition-all ${
                activeFilter === f 
                ? 'bg-gold text-stone-950 font-bold shadow-[0_0_15px_rgba(234,164,19,0.3)]' 
                : 'bg-stone-900 text-stone-500 hover:text-stone-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map(item => (
            <MediaCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

const STUDENTS = [
  { id: "R05423BCA001", name: "ADITYA PANIGRAHI", tag: "db boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA002", name: "ADYA ADITI MEHER", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA003", name: "ADYASHA BEHERA", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA004", name: "ANUBHAV PATI", tag: "db boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA007", name: "ARYAN KUMAR NATH", tag: "db boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA008", name: "ASHUTOSH THAKUR", tag: "hstl boys", quote: "A journey to remember.", image: "/img/ashutosh.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA009", name: "AYUSH DAS", tag: "hstl boys", quote: "HII its me your ADMIN", batchMessage: "Wishing everyone a bright future ahead! See you on the other side. 🎓", image: "/img/R05423BCA009.jpeg", instagram: "https://instagram.com/aayush_xid_su" },
  { id: "R05423BCA010", name: "BARSHA BAGARTY", tag: "db girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA011", name: "BISMAYA PRAKASH DIKSHIT", tag: "hstl boys", quote: "The Topper boy.", image: "/img/Bismaya.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA012", name: "DEBASIS PRAHARAJ", tag: "hstl boys", quote: "Bhai hai tu mera", image: "/img/debasish.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA013", name: "DEBASISH DASH", tag: "db boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA014", name: "DIBYA DISHA THAKUR", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA015", name: "DIBYASHA BABU", tag: "db girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA016", name: "DIPEN KUMAR HANS", tag: "hstl boys", quote: "The personal teacher", image: "/img/dpen.JPG", instagram: "https://instagram.com" },
  { id: "R05423BCA017", name: "GYANARANJAN SATPATHY", tag: "hstl boys", quote: "A journey to remember.", image: "/img/gyana.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA018", name: "JYOTI MAHANANDA", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA019", name: "JYOTIRMAYEE PRADHAN", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA020", name: "MADHUNISHA DANI", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA021", name: "MANISHA PATHY", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA022", name: "NIKURANI DASH", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA023", name: "PITAMBAR MAJHI", tag: "hstl boys", quote: "The kalahandia king.", image: "/img/Abhi.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA024", name: "PRAMOD SAHU", tag: "hstl boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA025", name: "PRITI MEHER", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA026", name: "PRIYANSU SEKHAR KATA", tag: "hstl boys", quote: "The Mastermind.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA027", name: "PURNIMA MEHER", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA028", name: "RASHMITA MEHER", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA029", name: "ROHAN KUMAR TRIPATHY", tag: "hstl boys", quote: "Coder of class", image: "/img/rohan.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA030", name: "ROSHAN SAHU", tag: "hstl boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA031", name: "RUTUPARNA JOSHI", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA032", name: "SAHIL DAS", tag: "hstl boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA033", name: "SAISHREE PANDA", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA035", name: "SANTOSHINI JHA", tag: "db girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA036", name: "SARITA PANDA", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA037", name: "SASMITA PATEL", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA038", name: "SHIWA SHIV MEHER", tag: "hstl boys", quote: "The NCC guy.", image: "/img/Shibashiv.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA039", name: "SIBASHISH PRADHAN", tag: "hstl boys", quote: "The one who give bike to all.", image: "/img/siba.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA040", name: "SNEHA SAHU", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA041", name: "SNEHASMITARANI BEHERA", tag: "db girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA042", name: "SOURAV RANJAN MISHRA", tag: "hstl boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA043", name: "SRUTI SAHU", tag: "hstl girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA044", name: "SUBHAMSHREE DORA", tag: "hstl boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA045", name: "TAMANNA PANIGRAHI", tag: "db girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BCA046", name: "TUSHAR RANJAN PADHAN", tag: "hstl boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BBA001", name: "ADYASHA MOHANTY", tag: "db girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BBA002", name: "AKASH MEHER", tag: "hstl boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BBA003", name: "AMAN GUPTA", tag: "db boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BBA004", name: "ANANYA MAHAPATRA", tag: "db girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BBA005", name: "ANKIT PANDA", tag: "hstl boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BBA006", name: "BIBEK KALET", tag: "hstl boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BBA009", name: "RUCHIKA COLLET", tag: "db girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BBA010", name: "SASWATI PRIYADARSHINI NAIK", tag: "db girls", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" },
  { id: "R05423BBA011", name: "SOMESH AGRAWAL", tag: "hstl boys", quote: "A journey to remember.", image: "/img/temp-pp.jpg", instagram: "https://instagram.com" }
];

const StudentModal = ({ student, onClose }: { student: typeof STUDENTS[0], onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const whatsappUrl = `https://wa.me/917894038559?text=${encodeURIComponent("Heyy Ayush i wantt to write something in my profile card")}`;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl bg-[#1a1614] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-stone-800/50"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-stone-950/50 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Left Section: Profile Info */}
        <div className="w-full md:w-5/12 relative aspect-[3/4] md:aspect-auto">
          <img 
            src={student.image} 
            alt={student.name}
            className="w-full h-full object-cover grayscale-0 brightness-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1614] via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-2">{student.name}</h2>
            <div className="flex items-center gap-3 text-gold text-xs uppercase tracking-widest font-bold mb-8">
              <span>{student.tag}</span>
              <span className="w-1 h-1 rounded-full bg-gold/50" />
              <span className="text-stone-400 font-mono font-normal tracking-normal">{student.id}</span>
            </div>
            <a 
              href={student.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="text-stone-300 hover:text-gold transition-colors inline-block"
            >
              <Camera size={24} />
            </a>
          </div>
        </div>

        {/* Right Section: Messages/Interaction */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-between h-full min-h-[400px]">
          <div className="space-y-12">
            <div>
              <p className="font-hand text-stone-400 text-2xl md:text-3xl leading-snug italic text-center md:text-left">
                "{student.quote}"
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <h3 className="text-stone-200 font-serif text-xl tracking-wide">Message for the Batch</h3>
                <span className="bg-stone-800 px-3 py-1 rounded text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                  {student.batchMessage ? '1 MESSAGE' : '0 MESSAGES'}
                </span>
              </div>
              
              <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
                {student.batchMessage ? (
                  <p className="font-serif italic text-stone-300 text-lg leading-relaxed px-4">
                    "{student.batchMessage}"
                  </p>
                ) : (
                  <>
                    <p className="font-serif italic text-stone-500 text-lg">No signatures yet.</p>
                    <p className="font-serif italic text-stone-600 text-base">Be the first to leave a memory.</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8">
             <a 
               href={whatsappUrl}
               target="_blank"
               rel="noreferrer"
               className="block w-full"
             >
                <div className="relative bg-stone-950/50 border border-stone-800 rounded-xl p-4 md:p-6 group hover:border-gold/30 transition-all">
                  <span className="text-stone-500 font-sans text-sm md:text-base italic">Write a farewell message...</span>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-stone-950 transition-all">
                    <Send size={18} />
                  </div>
                </div>
             </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StudentCard = ({ student, onClick }: { student: typeof STUDENTS[0], onClick: () => void, key?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group relative bg-stone-900/40 rounded-xl overflow-hidden border border-stone-800 hover:border-gold/30 transition-all duration-500 cursor-pointer"
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img 
          src={student.image} 
          alt={student.name}
          className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700 scale-100 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Quote Overlay */}
        <div className="absolute inset-0 bg-stone-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
          <p className="font-hand text-stone-200 text-2xl md:text-3xl leading-snug mb-6">
            "{student.quote}"
          </p>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-bold">Click to view</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-2xl text-stone-100 mb-4 group-hover:text-gold transition-colors">{student.name}</h3>
        <div className="flex justify-between items-end border-t border-stone-800/50 pt-4">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-stone-500 font-sans">{student.tag}</p>
            <p className="text-[10px] font-mono text-gold/60">{student.id}</p>
          </div>
          <a href={student.instagram} target="_blank" rel="noreferrer" className="text-stone-600 hover:text-[#E1306C] transition-colors">
            <Camera size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const YearbookSection = () => {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [selectedStudent, setSelectedStudent] = useState<typeof STUDENTS[0] | null>(null);
  
  const tags = ['All', 'hstl boys', 'hstl girls', 'db boys', 'db girls'];

  const filteredStudents = useMemo(() => {
    return STUDENTS.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
      const matchesTag = activeTag === 'All' || s.tag === activeTag;
      return matchesSearch && matchesTag;
    });
  }, [search, activeTag]);

  return (
    <div className="pt-24 md:pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 md:space-y-16">
      <div className="text-center space-y-4 md:space-y-6 max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-stone-100 leading-tight">The Class of '26</h2>
        <p className="font-sans text-stone-500 leading-relaxed text-sm md:text-base px-4">
          Faces that defined our journey. Moments that became memories. Click a card to sign their yearbook.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-center border-y border-stone-900 py-8">
        <div className="relative w-full md:max-w-xs group">
          <ArrowDown className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600 group-focus-within:text-gold transition-colors" size={16} />
          <input 
            type="text"
            placeholder="Find a classmate..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-stone-950 border border-stone-800 rounded-full py-3 md:py-3.5 pl-12 pr-6 text-sm text-stone-200 focus:outline-none focus:border-gold/50 transition-all font-sans"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {tags.map(m => (
            <button
              key={m}
              onClick={() => setActiveTag(m)}
              className={`px-4 md:px-6 py-2 rounded-full text-[9px] md:text-[10px] uppercase tracking-widest transition-all ${
                activeTag === m 
                ? 'bg-gold text-stone-950 font-bold' 
                : 'bg-stone-900 text-stone-500 hover:text-stone-300'
              }`}
            >
              {m === 'All' ? 'All Groups' : m}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredStudents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredStudents.map(student => (
            <StudentCard 
              key={student.id} 
              student={student} 
              onClick={() => setSelectedStudent(student)} 
            />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center border border-dashed border-stone-800 rounded-2xl mx-4">
          <User size={48} className="mx-auto text-stone-800 mb-4" />
          <p className="font-sans text-stone-600 italic">No students found matching your search...</p>
        </div>
      )}

      <AnimatePresence>
        {selectedStudent && (
          <StudentModal 
            student={selectedStudent} 
            onClose={() => setSelectedStudent(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const MEMORIES = [
  {
    id: 1,
    year: "2023",
    title: "The First Hello",
    description: "\"Do you know where Activity Hall of YCAT is?\" That was the question that started it all. We were lost, nervous, and carrying way too many bags.",
    caption: "First day on campus",
    image: "/img/yr2023.jpg",
  },
  {
    id: 2,
    year: "2024",
    title: "We Became the Seniors",
    description: "It was our turn to roll out the welcome mat. We planned, rehearsed, and stayed up way too late — so all our juniors could have a night to remember. Turns out, hosting is harder than attending.",
    caption: "Freshers' night — their first, our finest",
    image: "/img/yr2024.jpg",
  },
  {
    id: 3,
    year: "2025",
    title: "We Became the Super Seniors",
    description: "We returned the warmth we once received, making their farewell as special as they deserved. Saying goodbye wasn’t easy to those who guided us",
    caption: "Farewell night — their last, our heartfelt tribute.",
    image: "/img/yr2025.jpg",
  },
  {
    id: 4,
    year: "2026",
    title: "Beyond the Horizon",
    description: "A chapter closes, but the legacy remains. We step into the world not just as graduates, but as family, forever bound by the halls of Batch '26.",
    caption: "The light at the end of the tunnel",
    image: "/img/yr2026.jpg",
    isHighlight: true,
  }
];

const IntroPage = ({ onStart }: { onStart: () => void, key?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="h-screen w-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-[#050505]"
    >
      <div className="bg-grain opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(234,164,19,0.05)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="z-10 flex flex-col items-center w-full px-4"
      >
        <span className="font-hand text-gold text-xl md:text-3xl italic mb-6">
          A Journey We’ll Always Carry
        </span>

        <h1 className="flex flex-col md:flex-row items-center justify-center gap-x-8 font-serif text-stone-100 mb-8 md:mb-12">
          <span className="text-5xl sm:text-7xl md:text-[9rem] font-normal tracking-tight leading-none">Batch</span>
          <span className="text-5xl sm:text-7xl md:text-[9rem] font-normal italic text-stone-200/90 tracking-tighter leading-none">2023—26</span>
        </h1>

        <div className="w-16 h-px bg-gold/30 mb-8 md:mb-12" />

        <p className="text-stone-400 text-sm md:text-base max-w-md leading-relaxed mb-12 md:mb-16 font-sans">
          Three years of laughter, late nights, and lessons learned. Join us as we look back on the moments that defined us.
        </p>

        <motion.button
          onClick={onStart}
          whileHover={{ letterSpacing: '0.4em', color: '#fff' }}
          className="group flex flex-col items-center gap-6 cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-stone-500 transition-all">
            Click to start the journey
          </span>
          <div className="w-px h-16 md:h-24 bg-gradient-to-b from-stone-400 to-transparent group-hover:h-24 md:group-hover:h-32 transition-all duration-700" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const Navbar = ({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (s: string) => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { id: 'journey', label: 'The Journey' },
    { id: 'yearbook', label: 'Yearbook' },
    { id: 'media', label: 'Media Vault' },
    { id: 'wall', label: 'The Wall' },
    { id: 'pov', label: 'My POV' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-between items-center bg-stone-950/80 backdrop-blur-md border-b border-stone-900 px-6 lg:px-16">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gold/30 flex items-center justify-center">
            <GraduationCap className="text-gold" size={16} md:size={20} />
          </div>
          <span className="font-serif text-xl md:text-2xl text-stone-100 tracking-tight">Batch '26</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-sans text-xs uppercase tracking-widest transition-all relative py-2 ${
                activeSection === item.id ? 'text-gold' : 'text-stone-500 hover:text-stone-200'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div 
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 w-full h-px bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-100 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Users size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-stone-950 pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-2xl uppercase tracking-widest text-left py-4 border-b border-stone-900 ${
                  activeSection === item.id ? 'text-gold' : 'text-stone-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const JourneySection = () => {
  return (
    <div className="pt-24 md:pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto overflow-x-hidden">
      <div className="text-center mb-16 md:mb-24">
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold border border-gold/30 px-4 py-1 rounded-full mb-6 md:mb-8 inline-block shadow-[0_0_15px_rgba(234,164,19,0.1)]">
          Our History
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl mt-4 text-stone-100 leading-tight">The Journey: 2023 - 26</h2>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-[30px] md:left-1/2 -translate-x-[0.5px] top-0 w-px h-full bg-stone-800" />

        <div className="space-y-24 md:space-y-48 relative">
          {MEMORIES.map((memory, i) => {
            if (memory.isHighlight) {
              return (
                <div key={memory.id} className="relative pt-12 md:pt-24 pb-8 md:pb-12 flex flex-col items-center">
                   <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 top-[-30px] md:top-[-60px] z-10 transition-all">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gold border border-gold flex items-center justify-center shadow-[0_0_30px_rgba(234,164,19,0.4)]">
                      <span className="font-sans font-bold text-[10px] md:text-sm text-stone-950">{memory.year}</span>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full max-w-4xl px-4 pl-16 md:pl-4"
                  >
                    <div className="bg-stone-50 p-4 md:p-6 pb-12 md:pb-20 shadow-2xl relative max-w-4xl mx-auto">
                      <div className="aspect-video overflow-hidden bg-stone-200">
                        <img 
                          src={memory.image} 
                          alt={memory.title} 
                          className="w-full h-full object-cover grayscale md:hover:grayscale-0 transition-all duration-1000" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="mt-8 md:mt-12 flex flex-col items-center gap-4 text-center">
                        <h3 className="font-serif text-3xl sm:text-4xl md:text-6xl text-stone-900 mb-2">{memory.title}</h3>
                        <p className="font-hand text-stone-600 text-2xl sm:text-3xl md:text-5xl leading-none">
                          {memory.caption}
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 md:mt-12 text-center max-w-2xl mx-auto">
                        <p className="font-sans text-stone-400 text-base md:text-xl leading-relaxed italic px-4 md:px-6">
                          {memory.description}
                        </p>
                    </div>
                  </motion.div>
                </div>
              );
            }

            return (
              <div key={memory.id} className="relative">
                <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 top-[-30px] md:top-[-60px] z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-stone-950 border border-stone-800 flex items-center justify-center group hover:border-gold transition-colors duration-500">
                    <span className="font-sans font-bold text-[10px] md:text-xs text-gold/80 group-hover:text-gold">{memory.year}</span>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`flex flex-col md:flex-row items-center gap-10 md:gap-24 pl-16 md:pl-0 ${
                    i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 w-full flex justify-center">
                    <motion.div 
                      whileHover={{ rotate: 0, scale: 1.02 }}
                      className="bg-stone-50 p-3 md:p-4 pb-10 md:pb-12 shadow-2xl relative rotate-[-1deg] md:rotate-[-1deg] max-w-[320px] md:max-w-[400px] w-full"
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                        <img 
                          src={memory.image} 
                          alt={memory.title} 
                          className="w-full h-full object-cover grayscale md:hover:grayscale-0 transition-all duration-700" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="mt-6 md:mt-8 flex flex-col items-center gap-2">
                         <p className="font-hand text-stone-800 text-2xl md:text-3xl text-center leading-none px-2">
                           {memory.caption}
                         </p>
                         <div className="flex gap-1.5 md:gap-2 items-center opacity-40 mt-2 md:mt-3 pt-1 md:pt-2">
                            <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-orange-600/80" />
                            <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gold/80" />
                         </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex-1 space-y-4 md:space-y-6 text-left md:text-left">
                    <h3 className="font-serif text-3xl md:text-5xl text-stone-100">{memory.title}</h3>
                    <p className="font-sans text-stone-400 text-base md:text-lg leading-relaxed italic border-l-2 border-gold/20 pl-4 md:pl-6 py-1 md:py-2">
                      {memory.description}
                    </p>
                    <div className="pt-2">
                      <button className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-gold/60 hover:text-gold transition-colors flex items-center gap-2">
                        Read full log <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ExperiencePrompt = ({ onContinue }: { onContinue: () => void, key?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="bg-grain opacity-10 pointer-events-none" />
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-md space-y-8"
      >
        <div className="mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full border border-gold/20 flex items-center justify-center text-gold mb-4">
           <Maximize2 size={32} />
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-stone-100 leading-tight">Better on Desktop</h2>
        <p className="font-sans text-stone-400 text-sm md:text-base leading-relaxed italic">
          This archive is crafted as a cinematic experience. For the best visual journey and layout, viewing on a desktop is highly recommended.
        </p>
        <div className="pt-4 flex flex-col gap-4">
          <button 
            onClick={onContinue}
            className="bg-gold text-stone-950 px-8 py-4 rounded-full font-sans font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_30px_rgba(234,164,19,0.2)]"
          >
            Continue anyway
          </button>
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600 font-sans">
            Digital Heritage &bull; Batch '26
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const NameSearchSection = () => {
  const GRID_SIZE = 12;
  const NAMES_TO_FIND = 10;

  const [grid, setGrid] = useState<string[][]>([]);
  const [targetNames, setTargetNames] = useState<string[]>([]);
  const [foundNames, setFoundNames] = useState<string[]>([]);
  const [foundCoords, setFoundCoords] = useState<Set<string>>(new Set());
  const [selection, setSelection] = useState<{ start: [number, number], end: [number, number] } | null>(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [score, setScore] = useState(0);

  const generateGrid = () => {
    const freshGrid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
    const names = STUDENTS.map(s => s.name.split(' ')[0])
      .filter((n, i, self) => n.length >= 3 && n.length <= 10 && self.indexOf(n) === i)
      .sort(() => Math.random() - 0.5)
      .slice(0, NAMES_TO_FIND);

    const directions = [
      [0, 1], [1, 0], [1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1], [-1, 1]
    ];

    const finalNames: string[] = [];

    names.forEach(name => {
      let placed = false;
      let attempts = 0;
      const word = name.toUpperCase();

      while (!placed && attempts < 100) {
        attempts++;
        const dir = directions[Math.floor(Math.random() * directions.length)];
        const row = Math.floor(Math.random() * GRID_SIZE);
        const col = Math.floor(Math.random() * GRID_SIZE);

        if (
          row + dir[0] * (word.length - 1) >= 0 &&
          row + dir[0] * (word.length - 1) < GRID_SIZE &&
          col + dir[1] * (word.length - 1) >= 0 &&
          col + dir[1] * (word.length - 1) < GRID_SIZE
        ) {
          let canPlace = true;
          for (let i = 0; i < word.length; i++) {
            const char = freshGrid[row + dir[0] * i][col + dir[1] * i];
            if (char !== '' && char !== word[i]) {
              canPlace = false;
              break;
            }
          }

          if (canPlace) {
            for (let i = 0; i < word.length; i++) {
              freshGrid[row + dir[0] * i][col + dir[1] * i] = word[i];
            }
            finalNames.push(word);
            placed = true;
          }
        }
      }
    });

    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (freshGrid[r][c] === '') {
          freshGrid[r][c] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
    }

    setGrid(freshGrid);
    setTargetNames(finalNames);
    setFoundNames([]);
    setFoundCoords(new Set());
    setScore(0);
  };

  useEffect(() => {
    generateGrid();
  }, []);

  const handleCellDown = (r: number, c: number) => {
    setIsSelecting(true);
    setSelection({ start: [r, c], end: [r, c] });
  };

  const handleCellOver = (r: number, c: number) => {
    if (isSelecting && selection) {
      setSelection({ ...selection, end: [r, c] });
    }
  };

  const checkSelection = () => {
    setIsSelecting(false);
    if (!selection) return;

    const [r1, c1] = selection.start;
    const [r2, c2] = selection.end;
    
    // Check if it's a valid line (H, V, D)
    const dr = r2 - r1;
    const dc = c2 - c1;
    const distance = Math.max(Math.abs(dr), Math.abs(dc));
    
    if (distance < 2) {
      setSelection(null);
      return;
    };

    const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
    const stepC = dc === 0 ? 0 : dc / Math.abs(dc);

    if (Math.abs(dr) !== Math.abs(dc) && dr !== 0 && dc !== 0) {
      setSelection(null);
      return;
    }

    let word = "";
    for (let i = 0; i <= distance; i++) {
      word += grid[r1 + stepR * i][c1 + stepC * i];
    }

    if (targetNames.includes(word) && !foundNames.includes(word)) {
      setFoundNames(prev => [...prev, word]);
      setScore(s => s + 10);
      
      // Save coordinates of found word
      const newCoords = new Set(foundCoords);
      for (let i = 0; i <= distance; i++) {
        newCoords.add(`${r1 + stepR * i}-${c1 + stepC * i}`);
      }
      setFoundCoords(newCoords);
    }
    
    setSelection(null);
  };

  useEffect(() => {
    const handleGlobalUp = () => {
      if (isSelecting) checkSelection();
    };
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchend', handleGlobalUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [isSelecting, selection, grid, targetNames, foundNames]);

  const isSelected = (r: number, c: number) => {
    if (!selection) return false;
    const [r1, c1] = selection.start;
    const [r2, c2] = selection.end;
    const dr = r2 - r1;
    const dc = c2 - c1;
    const distance = Math.max(Math.abs(dr), Math.abs(dc));
    const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
    const stepC = dc === 0 ? 0 : dc / Math.abs(dc);

    if (Math.abs(dr) !== Math.abs(dc) && dr !== 0 && dc !== 0) return r === r1 && c === c1;

    for (let i = 0; i <= distance; i++) {
      if (r === r1 + stepR * i && c === c1 + stepC * i) return true;
    }
    return false;
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-center mb-12 space-y-4">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-100 tracking-tight">Name Hunt</h2>
        <p className="font-sans text-stone-400 text-sm md:text-base italic max-w-2xl mx-auto">
          Find your friends hidden in the digital chaos. 
          <br/>Drag horizontally, vertically, or diagonally to select.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start justify-center w-full">
        {/* Game Grid */}
        <div 
          className="relative select-none touch-none touch-pan-x bg-stone-900/30 p-2 rounded-xl backdrop-blur-sm border border-stone-800 pointer-events-auto"
          onMouseLeave={() => isSelecting && checkSelection()}
        >
          <div className="grid grid-cols-12 gap-1 md:gap-2">
            {grid.map((row, r) => 
              row.map((char, c) => (
                <div
                  key={`${r}-${c}`}
                  onMouseDown={() => handleCellDown(r, c)}
                  onMouseEnter={() => handleCellOver(r, c)}
                  onTouchStart={() => handleCellDown(r, c)}
                  onTouchMove={(e) => {
                    const touch = e.touches[0];
                    const element = document.elementFromPoint(touch.clientX, touch.clientY);
                    const dataCoord = element?.getAttribute('data-coord');
                    if (dataCoord) {
                      const [tr, tc] = dataCoord.split('-').map(Number);
                      handleCellOver(tr, tc);
                    }
                  }}
                  data-coord={`${r}-${c}`}
                  className={`
                    w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 
                    flex items-center justify-center 
                    text-sm md:text-lg font-mono font-bold
                    rounded-lg cursor-pointer transition-all duration-300
                    ${isSelected(r, c) 
                      ? 'bg-gold text-stone-950 scale-95 shadow-[0_0_15px_rgba(234,164,19,0.5)] z-10' 
                      : foundCoords.has(`${r}-${c}`)
                        ? 'bg-gold/20 text-gold border border-gold/30'
                        : 'bg-transparent text-stone-500 hover:bg-stone-800 hover:text-stone-300'
                    }
                  `}
                >
                  {char}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Word List and Score */}
        <div className="w-full lg:w-64 space-y-8 flex flex-col">
          <div className="bg-stone-900/50 rounded-xl p-6 border border-stone-800 space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-stone-800">
               <span className="text-stone-500 uppercase text-[10px] tracking-widest font-bold">Progress</span>
               <span className="text-gold font-mono">{foundNames.length}/{targetNames.length}</span>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-stone-500 uppercase text-[10px] tracking-widest font-bold">Score</span>
               <span className="text-2xl font-serif text-stone-100">{score}</span>
            </div>
          </div>

          <div className="bg-stone-950/50 rounded-xl p-6 border border-stone-800 flex-1">
             <h3 className="text-stone-400 uppercase text-[10px] tracking-widest font-bold mb-6">Names to Find</h3>
             <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {targetNames.map(name => (
                  <div 
                    key={name}
                    className={`text-sm tracking-wide font-sans ${foundNames.includes(name) ? 'text-gold/40 line-through' : 'text-stone-300'} transition-all`}
                  >
                    {name}
                  </div>
                ))}
             </div>
          </div>

          <button 
            onClick={generateGrid}
            className="w-full bg-stone-900 hover:bg-stone-800 text-stone-300 py-3 rounded-lg border border-stone-800 font-sans text-xs uppercase tracking-widest font-bold transition-all"
          >
            Refresh Board
          </button>
        </div>
      </div>
      
      {foundNames.length === targetNames.length && targetNames.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 text-center space-y-4"
        >
          <div className="text-gold flex justify-center mb-2">
            <Trophy size={48} className="animate-bounce" />
          </div>
          <h3 className="font-serif text-3xl text-white">Full Board Cleared!</h3>
          <p className="text-stone-400 italic">You know your batch inside out.</p>
        </motion.div>
      )}
    </div>
  );
};

const PROFESSORS = [
  {
    id: 1,
    name: "Dr. Jagamohan Padhi",
    role: "Head of Department & Principal",
    message: "Your leadership and vision shaped our journey in the best way possible. Thank you for guiding us with wisdom and inspiring us to aim higher every day.",
    image: "/img/temp-pp.jpg"
  },
  {
    id: 2,
    name: "Prof. Amit Meher",
    role: "Associate Professor",
    message: "Your dedication and clarity made learning truly enjoyable. Thank you for always encouraging us to push our limits and grow.",
    image: "/img/temp-pp.jpg"
  },
  {
    id: 3,
    name: "Prof. Sameeksha Mishra",
    role: "Professor",
    message: "Your patience and support created a space where we felt confident to learn and explore. Thank you for always believing in us.",
    image: "/img/temp-pp.jpg"
  },
  {
    id: 4,
    name: "Prof. Girija Sankar",
    role: "Professor",
    message: "Your knowledge and guidance have left a lasting impact on us. Thank you for shaping our understanding and inspiring excellence.",
    image: "/img/temp-pp.jpg"
  },
  {
    id: 5,
    name: "Prof. Suresh Dash",
    role: "Professor",
    message: "Your constant support and encouragement made a difference in our journey. Thank you for being a source of motivation and strength.",
    image: "/img/temp-pp.jpg"
  },
  {
    id: 6,
    name: "Prof. Khushi Agrawal",
    role: "Professor",
    message: "Your patience and support created a space where we felt confident to learn and explore. Thank you for always believing in us.",
    image: "img/temp-pp.jpg"
  }
];

const HallOfFameSection = () => {
  return (
    <div className="pt-24 md:pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 md:mb-24 space-y-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <span className="bg-gold/10 text-gold px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold border border-gold/20 mb-4 inline-block">
             Legacy & Gratitude
          </span>
        </motion.div>
        <h2 className="font-serif text-4xl md:text-6xl text-stone-100 tracking-tight">Hall of Fame</h2>
        <p className="font-sans text-stone-400 text-sm md:text-base italic max-w-2xl mx-auto leading-relaxed">
          A respectful tribute to the mentors who shaped our journey. Thank you for your patience, your knowledge, and your belief in us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {PROFESSORS.map((prof, i) => (
          <motion.div
            key={prof.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <div className="bg-stone-900/40 border border-stone-800 rounded-2xl p-6 md:p-8 space-y-8 backdrop-blur-sm hover:border-gold/30 transition-all duration-500 hover:-translate-y-2">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-2 border-stone-800 group-hover:border-gold/50 transition-colors duration-500">
                <img 
                  src={prof.image} 
                  alt={prof.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://picsum.photos/seed/prof${prof.id}/400/400`;
                  }}
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="text-center space-y-2">
                <h3 className="font-serif text-2xl text-stone-100">{prof.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">{prof.role}</p>
              </div>

              <div className="relative">
                <Quote size={20} className="text-stone-700 absolute -top-2 -left-2 opacity-50" />
                <p className="text-stone-400 font-sans italic text-sm leading-relaxed pt-2 px-4 text-center">
                  "{prof.message}"
                </p>
              </div>
              
              <div className="pt-6 border-t border-stone-800/50 flex justify-center">
                <div className="flex gap-2">
                   <Sparkles size={14} className="text-stone-700 group-hover:text-gold transition-colors" />
                   <span className="text-[10px] uppercase tracking-widest text-stone-600 group-hover:text-stone-400 transition-colors">Class of 2026 Gratitude</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 text-center p-12 border border-dashed border-stone-800 rounded-3xl"
      >
        <p className="font-serif text-xl md:text-2xl text-stone-500 italic">
          "The influence of a good teacher can never be erased."
        </p>
      </motion.div>
    </div>
  );
};

const PlaceholderSection = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center pt-32">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="space-y-6"
    >
      <div className="mx-auto w-24 h-24 rounded-full border border-stone-800 flex items-center justify-center text-gold mb-8 animate-pulse">
        {icon}
      </div>
      <h2 className="font-serif text-6xl text-stone-100">{title}</h2>
      <p className="font-sans text-stone-500 tracking-[0.2em] uppercase text-xs">Arriving shortly &bull; Batch '26 Archive</p>
    </motion.div>
  </div>
);

export default function App() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [activeSection, setActiveSection] = useState('journey');

  useEffect(() => {
    // Show prompt only if width is less than desktop threshold (1024px)
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setShowPrompt(true);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showPrompt ? (
        <ExperiencePrompt key="prompt" onContinue={() => setShowPrompt(false)} />
      ) : !hasStarted ? (
        <IntroPage key="intro" onStart={() => setHasStarted(true)} />
      ) : (
        <div key="main-app" className="min-h-screen bg-[#050505]">
          <div className="bg-grain opacity-10 pointer-events-none" />
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          
          <main>
            <AnimatePresence mode="wait">
              {activeSection === 'journey' && (
                <motion.div 
                  key="journey"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <JourneySection />
                </motion.div>
              )}
              {activeSection === 'yearbook' && (
                <motion.div 
                  key="yearbook"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <YearbookSection />
                </motion.div>
              )}
              {activeSection === 'media' && (
                <motion.div 
                  key="media"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <MediaVaultSection />
                </motion.div>
              )}
              {activeSection === 'wall' && (
                <motion.div 
                   key="wall"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.5 }}
                >
                  <TheWallSection />
                </motion.div>
              )}
              {activeSection === 'game' && (
                <motion.div 
                   key="game"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.05 }}
                   transition={{ duration: 0.5 }}
                >
                  <NameSearchSection />
                </motion.div>
              )}
              {activeSection === 'hall' && (
                <motion.div 
                   key="hall"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.5 }}
                >
                  <HallOfFameSection />
                </motion.div>
              )}
              {activeSection === 'pov' && (
                <motion.div 
                  key="pov"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <PlaceholderSection title="My POV" icon={<User size={48} />} />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          <footer className="relative bg-stone-950 border-t border-stone-900 pt-24 pb-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-16 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 lg:gap-8 mb-24">
                {/* Brand Column */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center">
                      <GraduationCap className="text-gold" size={20} />
                    </div>
                    <span className="font-serif text-2xl text-stone-100 tracking-tight">Batch '26</span>
                  </div>
                  <p className="text-stone-500 font-sans text-sm leading-relaxed max-w-xs">
                    Preserving the laughter, the struggles, and the unbreakable bonds of the Class of 2026. A digital capsule for our heritage.
                  </p>
                </div>

                {/* Navigation Column */}
                <div>
                  <h4 className="font-serif text-stone-200 text-lg mb-8 tracking-wide italic">Explore Archive</h4>
                  <ul className="space-y-4">
                    {[
                      { id: 'journey', label: 'The Journey' },
                      { id: 'yearbook', label: 'Yearbook' },
                      { id: 'media', label: 'Media Vault' },
                      { id: 'wall', label: 'The Wall' },
                      { id: 'game', label: 'Name Hunt' },
                      { id: 'hall', label: 'Hall of Fame' },
                    ].map((item) => (
                      <li key={item.id}>
                        <button 
                          onClick={() => {
                            setActiveSection(item.id);
                            window.scrollTo({ top: 0, behavior: 'instant' });
                          }}
                          className="text-stone-500 hover:text-gold font-sans text-xs uppercase tracking-widest transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-px bg-stone-800 group-hover:bg-gold group-hover:w-4 transition-all" />
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legacy Column */}
                <div>
                  <h4 className="font-serif text-stone-200 text-lg mb-8 tracking-wide italic">Digital Pillars</h4>
                  <div className="space-y-6">
                    <div className="group cursor-default">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-stone-600 mb-1 group-hover:text-stone-400 transition-colors">Admin & Archive Lead</p>
                      <p className="text-stone-400 font-serif group-hover:text-gold transition-colors">Ayush Das</p>
                    </div>
                    <div className="group cursor-default">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-stone-600 mb-1 group-hover:text-stone-400 transition-colors">Institute</p>
                      <a 
                        href="https://yuvodaya.in/" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-stone-400 font-serif hover:text-gold transition-colors inline-block"
                      >
                        YCAT
                      </a>
                    </div>
                    <div className="group cursor-default">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-stone-600 mb-1 group-hover:text-stone-400 transition-colors">Digital Engine</p>
                      <p className="text-stone-500 font-mono text-[11px]">React & Framer Motion</p>
                    </div>
                  </div>
                </div>

                {/* Contact Column */}
                <div className="relative">
                  <div className="bg-stone-900/30 border border-stone-800 p-8 rounded-2xl space-y-6 backdrop-blur-sm">
                    <h4 className="font-serif text-stone-200 text-lg tracking-wide italic">Leave a Mark</h4>
                    <p className="text-stone-500 font-sans text-xs leading-relaxed italic">
                      "Distance may grow, but these screens stay unchanged."
                    </p>
                    <button 
                      onClick={() => {
                        setActiveSection('wall');
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      className="w-full bg-gold text-stone-950 py-3 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2"
                    >
                      Sign the Wall <PenTool size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Copyright */}
              <div className="pt-12 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                <div className="flex items-center gap-6">
                  <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-stone-600 leading-loose">
                    &copy; 2026 Batch Heritage
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/30 animate-pulse" />
                  <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-stone-700 italic">
                    Forever we roam, forever we remain.
                  </p>
                </div>
                
                <div className="flex gap-8 items-center">
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="group flex items-center gap-3 text-stone-600 hover:text-gold transition-all"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-bold">Back to Top</span>
                    <div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center group-hover:border-gold/30 group-hover:-translate-y-1 transition-all">
                      <ArrowDown size={14} className="rotate-180" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative background patterns */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] -mb-48 -mr-48 pointer-events-none" />
            <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-stone-500/5 rounded-full blur-[100px] -mt-24 -ml-24 pointer-events-none" />
          </footer>
        </div>
      )}
    </AnimatePresence>
  );
}
