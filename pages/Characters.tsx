import React from 'react';
import SEOHead from '../components/SEOHead';
import { CHARACTERS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Characters: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEOHead
        title="Kagurabachi Characters Guide — Chihiro, Hishaku & All Cast"
        description="Complete Kagurabachi character guide. Chihiro Rokuhira, Shiba, Hakuri Sazanami, Hishaku members, enchanted blade bearers and more — profiles, abilities, and backstories."
        canonicalUrl="https://kagurabachimanga.online/characters"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Kagurabachi Characters Guide — Chihiro, Hishaku & All Cast",
          "description": "Complete Kagurabachi character guide with profiles, abilities, and backstories for every major character.",
          "url": "https://kagurabachimanga.online/characters",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Kagurabachi Manga",
            "url": "https://kagurabachimanga.online/"
          }
        }}
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kagurabachimanga.online/" },
              { "@type": "ListItem", "position": 2, "name": "Characters", "item": "https://kagurabachimanga.online/characters" }
            ]
          }
        ]}
      />

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Kagurabachi Manga Characters</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Comprehensive database of every character in the Kagurabachi manga. Learn about their sports, abilities, and relationships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHARACTERS.map((char) => (
          <div key={char.id} className="group flex flex-col bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 hover:border-bb-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-bb-blue/10">
            <div className="aspect-[3/4] relative overflow-hidden bg-gray-800">
              <img 
                src={char.image} 
                alt={`${char.name} - Kagurabachi`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-2 py-1 bg-bb-blue/90 text-white text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                  {char.role}
                </span>
                <h2 className="text-2xl font-bold text-white leading-tight mb-1">{char.name}</h2>
                <p className="text-gray-300 text-xs font-medium uppercase tracking-wide">{char.grade}</p>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {char.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;