import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Star, MessageCircle, Bookmark, Users } from 'lucide-react';
import { CHARACTERS } from '../constants';
import SEOHead from '../components/SEOHead';
import { useManga } from '../context/MangaContext';

const Home: React.FC = () => {
  const { chapters } = useManga();
  const latestChapter = chapters[0];
  const chapterCount = chapters.length;
  const [continueChapter, setContinueChapter] = React.useState<number | null>(null);

  React.useEffect(() => {
    const saved = localStorage.getItem('kagurabachi_last_chapter');
    if (saved) setContinueChapter(parseInt(saved, 10));
  }, []);

  const faqItems = [
    {
      question: 'How many chapters does Kagurabachi have?',
      answer: `Kagurabachi currently has ${chapterCount}+ chapters and is ongoing. New chapters release weekly in Weekly Shōnen Jump every Sunday.`,
    },
    {
      question: 'Is there a Kagurabachi anime?',
      answer: 'As of 2025, no Kagurabachi anime adaptation has been officially announced. Given the manga\'s explosive popularity — it won the Next Manga Award and regularly tops Jump reader polls — an anime announcement is widely anticipated. Stay tuned to this site for updates.',
    },
    {
      question: 'When is the next Kagurabachi chapter released?',
      answer: 'Kagurabachi releases a new chapter every Sunday in Weekly Shōnen Jump. Occasional breaks may apply. Check our chapter list for the latest release date.',
    },
    {
      question: 'Why Read Kagurabachi Manga on this Site?',
      answer: 'www.kagurabachimanga.online offers high-quality scans of every chapter, from Vol 1 to the latest, with no sign-up required. Our reader is optimized for mobile and desktop, with fast loading and clean layout.',
    },
    {
      question: 'Is Kagurabachi Manga Cancelled?',
      answer: 'No — Kagurabachi manga is not cancelled. It is actively ongoing and serialized weekly in Weekly Shōnen Jump. New chapters continue to release regularly.',
    },
    {
      question: 'Where should I start reading?',
      answer: 'Start with Chapter 1 (Vol 1) for the full experience. The story builds progressively — reading from the beginning is essential to appreciate the character growth and the enchanted blades lore.',
    },
    {
      question: 'Where to read Kagurabachi officially?',
      answer: 'The official English release is available on Viz Media and Manga Plus for the latest simulcast chapters. You can read the full archive here on www.kagurabachimanga.online — all chapters, free online.',
    },
    {
      question: 'What manga is similar to Kagurabachi?',
      answer: 'If you enjoy Kagurabachi, you\'ll likely love Demon Slayer, Jujutsu Kaisen, and Blue Exorcist — all feature a protagonist-driven revenge arc, supernatural swordplay, and dark fantasy themes similar to Kagurabachi\'s unique style.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Read Kagurabachi Manga Online Free in English | All Chapters"
        description={`Read Kagurabachi manga online for free in English. All ${chapterCount}+ chapters available. Chihiro's revenge story — the viral Shonen Jump hit by Takeru Hokazono.`}
        canonicalUrl="https://www.kagurabachimanga.online/"
        schema={{
          "@context": "https://schema.org",
          "@type": "ComicSeries",
          "name": "Kagurabachi",
          "alternateName": ["カグラバチ", "Kagura Bachi"],
          "author": {
            "@type": "Person",
            "name": "Takeru Hokazono"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Shueisha",
            "url": "https://www.shueisha.co.jp"
          },
          "genre": ["Action", "Dark Fantasy", "Shounen", "Supernatural", "Revenge"],
          "startDate": "2023-09-19",
          "inLanguage": "en",
          "numberOfEpisodes": chapterCount,
          "contentRating": "Teen",
          "isAccessibleForFree": true,
          "description": "Chihiro Rokuhira seeks revenge against the Hishaku sorcerers who killed his father and stole the Enchanted Blades.",
          "image": "https://www.kagurabachimanga.online/kagurabachi-manga-cover.webp",
          "url": "https://www.kagurabachimanga.online/",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "28000",
            "bestRating": "5",
            "worstRating": "1"
          }
        }}
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Kagurabachi Manga",
            "url": "https://www.kagurabachimanga.online/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.kagurabachimanga.online/manga?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Kagurabachi Characters",
            "description": "Main characters and antagonists in the Kagurabachi manga.",
            "itemListElement": CHARACTERS.map((char, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Person",
                "name": char.name,
                "description": char.description,
                "image": `https://www.kagurabachimanga.online${char.image}`
              }
            }))
          }
        ]}
      />

      {/* Hero Section */}
      <section
        className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-bb-dark py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/kagurabachi-manga-cover.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-bb-dark via-bb-dark/80 to-bb-dark/40 z-0 pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-heading font-black text-center uppercase tracking-tighter mb-4 drop-shadow-2xl leading-none">
            <span className="text-white">KAGURABACHI</span> <span className="text-bb-blue">MANGA</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl max-w-4xl text-center mb-10 font-medium leading-relaxed drop-shadow-md">
            Read Kagurabachi Manga Online Free in English — All {chapterCount}+ Chapters in HD.<br className="hidden sm:block" />
            No Sign-Up Required.
          </p>

          {/* Info Card */}
          <div className="w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 mb-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8">

              {/* Left Column: Stats & Meta */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">

                {/* Rating Block */}
                <div className="col-span-2 sm:col-span-4 flex items-center gap-3 mb-2" aria-label="rated 4.8 out of 5 stars">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4].map(i => <Star key={i} className="fill-yellow-400 text-yellow-400 w-5 h-5" />)}
                    <Star className="fill-yellow-400/30 text-yellow-400 w-5 h-5" />
                  </div>
                  <span className="text-3xl font-bold text-white">4.8</span>
                  <span className="text-sm text-gray-400 mt-1 ml-2">Average 4.8 / 5 out of 45k</span>
                </div>

                {/* Info Fields */}
                <div className="space-y-1">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Rank</span>
                  <span className="text-white font-medium">1st, 20M views</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Release</span>
                  <span className="text-white font-medium">Sep 19, 2023</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Status</span>
                  <span className="text-green-400 font-bold">Ongoing</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Chapters</span>
                  <span className="text-white font-medium">{chapterCount}+</span>
                </div>

                <div className="col-span-2 sm:col-span-4 flex flex-col gap-3 mt-2">
                  <div className="flex flex-wrap gap-2 items-center border-t border-white/5 pt-3">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mr-2">Author:</span>
                    <span className="text-white">Takeru Hokazono</span>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center border-t border-white/5 pt-3">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mr-2">Publisher:</span>
                    <span className="text-white">Shueisha / Weekly Shōnen Jump</span>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center border-t border-white/5 pt-3">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mr-2">Genre(s):</span>
                    {["Action", "Dark Fantasy", "Shounen", "Supernatural", "Revenge"].map(g => (
                      <span key={g} className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">
                        {g},
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 items-start border-t border-white/5 pt-3">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Synopsis:</span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Chihiro Rokuhira, a young boy seeking vengeance for his father's death, wields one of six enchanted blades to hunt the Hishaku — a dangerous group of rogue sorcerers who slaughtered his father and stole his life's work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Social Proof */}
              <div className="flex lg:flex-col justify-center items-center gap-8 min-w-[140px]">
                <div className="text-center group w-full">
                  <MessageCircle className="w-8 h-8 text-gray-500 group-hover:text-bb-blue mx-auto mb-2 transition-colors" />
                  <span className="block text-2xl font-bold text-white">256</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Comments</span>
                </div>
                <div className="w-px h-12 bg-white/10 lg:w-16 lg:h-px"></div>
                <button
                  onClick={() => {
                    alert('Press Ctrl+D (or Cmd+D on Mac) to bookmark this page!');
                  }}
                  className="text-center group cursor-pointer w-full focus:outline-none"
                  aria-label="Bookmark this page"
                >
                  <Bookmark className="w-8 h-8 text-bb-blue mx-auto mb-2 fill-bb-blue group-hover:scale-110 transition-transform" />
                  <span className="block text-2xl font-bold text-white">1k</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide group-hover:text-bb-blue transition-colors">Bookmark Now</span>
                </button>
              </div>
            </div>
          </div>

          {latestChapter && (
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              {continueChapter ? (
                <Link
                  to={`/chapter/${continueChapter}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-bb-blue hover:bg-blue-700 shadow-lg shadow-blue-900/20 transition-all hover:scale-105"
                >
                  ▶ Continue — Chapter {continueChapter}
                </Link>
              ) : (
                <Link
                  to="/chapter/1"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-bb-blue hover:bg-blue-700 shadow-lg shadow-blue-900/20 transition-all hover:scale-105"
                >
                  Start Reading — Chapter 1
                </Link>
              )}
              <Link
                to={`/chapter/${latestChapter.number}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-lg font-bold rounded-lg text-white hover:bg-white hover:text-black transition-all"
              >
                Latest: Chapter {latestChapter.number}
              </Link>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Latest Chapters Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <BookOpen className="text-bb-blue" /> Latest Releases
            </h2>
            <Link to="/manga" className="text-bb-blue hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {chapters.slice(0, 12).map((chapter) => (
              <Link
                key={chapter.id}
                to={`/chapter/${chapter.number}`}
                className="group relative flex flex-col justify-between h-full bg-white dark:bg-[#1a1a1a] rounded-lg border border-gray-200 dark:border-white/10 p-5 hover:border-bb-blue/50 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-bb-blue/10"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-bb-blue uppercase tracking-wider">
                    Chapter {chapter.number}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-bb-blue transition-colors line-clamp-2">
                    {chapter.title}
                  </h3>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Read Now</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-bb-blue group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Characters Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Users className="text-bb-blue" />
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">Main Characters</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHARACTERS.map((char) => (
              <div key={char.id} className="bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all group">
                <div className="aspect-[3/4] relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img 
                    src={char.image} 
                    alt={`${char.name} - Kagurabachi Character`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <span className="inline-block px-2 py-1 bg-bb-blue/90 text-white text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                      {char.role}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight mb-1">{char.name}</h3>
                    <p className="text-gray-300 text-xs font-medium uppercase tracking-wide">{char.grade}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-4 leading-relaxed">
                    {char.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About / Manga Overview */}
        <section className="mb-16">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-sm">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">About Kagurabachi</h2>
            <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 max-w-none space-y-4">
              <p>
                <strong className="text-gray-900 dark:text-white">Kagurabachi</strong> (カグラバチ) is a dark-fantasy action manga written and illustrated by <strong className="text-gray-900 dark:text-white">Takeru Hokazono</strong>. It has been serialized in <strong className="text-gray-900 dark:text-white">Weekly Shōnen Jump</strong> since September 19, 2023, published by <strong className="text-gray-900 dark:text-white">Shueisha</strong>. The series has been collected into tankobon volumes and won the <strong className="text-gray-900 dark:text-white">10th Next Manga Award in the Print Category</strong> — making it one of the fastest breakout hits in Jump history.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Synopsis</h3>
              <p>
                <strong className="text-gray-900 dark:text-white">Chihiro Rokuhira</strong> grew up watching his father, the legendary swordsmith Kunihiko Rokuhira, forge six extraordinary <strong className="text-gray-900 dark:text-white">Enchanted Blades</strong> — weapons imbued with sorcery powerful enough to reshape the world. One day, a ruthless group of sorcerers known as <strong className="text-gray-900 dark:text-white">the Hishaku</strong> slaughtered Kunihiko, stole the six blades, and left Chihiro with nothing but grief and a single blade his father hid away: <strong className="text-gray-900 dark:text-white">Enten</strong>.
              </p>
              <p>
                Armed with Enten and the swordsmanship his father drilled into him over years of brutal training, Chihiro sets out on a singular mission: <em>kill every member of the Hishaku and reclaim the stolen Enchanted Blades</em>. What follows is an intense, visceral journey through a world where sorcery and swordsmanship collide, and where the line between justice and vengeance blurs with every swing.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Key Characters</h3>
              <p>
                The series features a compelling cast including <strong className="text-gray-900 dark:text-white">Chihiro Rokuhira</strong> (the taciturn, revenge-driven protagonist), <strong className="text-gray-900 dark:text-white">Shiba</strong> (his pragmatic, morally flexible partner), <strong className="text-gray-900 dark:text-white">Hakuri Sazanami</strong> (a young sorcerer-in-training), and the various members of the <strong className="text-gray-900 dark:text-white">Hishaku</strong> — each one a formidable villain with their own philosophy and Enchanted Blade.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">The Enchanted Blades</h3>
              <p>
                The six <strong className="text-gray-900 dark:text-white">Enchanted Blades</strong> forged by Kunihiko are central to the plot. Each blade has a unique sorcery ability and is currently in the hands of different Hishaku members or their associates. Chihiro's blade, <strong className="text-gray-900 dark:text-white">Enten</strong>, grants him explosive, devastating power that makes him one of the most formidable fighters in the series. Other notable blades include <strong className="text-gray-900 dark:text-white">Cloud Gouger</strong>, which controls and compresses air into lethal attacks.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Why Read Kagurabachi?</h3>
              <p>
                Kagurabachi stands apart from other shonen manga through its relentlessly grim tone and a protagonist who is not here to make friends — Chihiro is cold, efficient, and laser-focused on his goal. The swordplay choreography is exceptionally dynamic, with Hokazono's art delivering explosive action sequences that feel kinetic on the page. The manga also weaves in a rich lore around sorcery, clans, and political intrigue that rewards attentive readers.
              </p>
              <p>
                Beyond the action, Kagurabachi explores themes of grief, legacy, and the cost of obsessive vengeance — giving it genuine emotional weight beneath the intense fight scenes. It became a viral phenomenon online shortly after launch, with fans dubbing it the "next big thing" in Jump, and the reader poll numbers back that up.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Series Information</h3>
              <ul className="list-none space-y-2 text-sm">
                <li><strong className="text-gray-900 dark:text-white">Author/Artist:</strong> Takeru Hokazono</li>
                <li><strong className="text-gray-900 dark:text-white">Publisher:</strong> Shueisha (Weekly Shōnen Jump)</li>
                <li><strong className="text-gray-900 dark:text-white">Serialization Start:</strong> September 19, 2023</li>
                <li><strong className="text-gray-900 dark:text-white">Status:</strong> Ongoing — new chapters weekly</li>
                <li><strong className="text-gray-900 dark:text-white">Genres:</strong> Action, Dark Fantasy, Shounen, Supernatural, Revenge</li>
                <li><strong className="text-gray-900 dark:text-white">Award:</strong> 10th Next Manga Award — Print Category</li>
                <li><strong className="text-gray-900 dark:text-white">English Publisher:</strong> Viz Media / Manga Plus</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="text-bb-blue" />
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqItems.map((faq) => (
              <div key={faq.question} className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {faq.question === 'Where should I start reading?' ? (
                    <>Start with <Link to="/chapter/1" className="text-bb-blue hover:underline">Chapter 1 (Vol 1)</Link> for the full experience. The story builds progressively — reading from the beginning is essential to appreciate the character growth and the enchanted blades lore.</>
                  ) : faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-sm">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">Read Kagurabachi Manga Online Free</h2>
            <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 max-w-none space-y-4">
              <p>
                Welcome to <strong>www.kagurabachimanga.online</strong> — the best place to <strong className="text-bb-blue">read Kagurabachi manga online free</strong>. We host high-quality scans of every chapter, from <strong>Kagurabachi manga Vol 1</strong> all the way to the latest release, updated as soon as new chapters drop. No sign-up required.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What is Kagurabachi?</h3>
              <p>
                <strong>Kagurabachi</strong> is a dark-fantasy action manga by <strong>Takeru Hokazono</strong>, serialized in Weekly Shōnen Jump since September 2023. The story follows Chihiro Rokuhira, who wields one of six enchanted blades forged by his father to hunt down the rogue sorcerer group Hishaku. Its iconic swordplay panels mixed with sorcery have made it one of the fastest-rising series in Jump history, winning the <strong>Next Manga Award</strong> and earning a dedicated global fanbase.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Read Kagurabachi Manga Here?</h3>
              <p>
                Unlike <strong>Viz</strong> or <strong>Manga Plus</strong> which limit the archive, <strong>www.kagurabachimanga.online</strong> lets you <strong>read Kagurabachi manga online</strong> — all {chapterCount}+ chapters, completely free. Our reader is optimized for mobile and desktop, loads every manga panel in HD, and works without an account. Whether you're catching up from <strong>Vol 1</strong> or following the weekly drops, this is the fastest, cleanest reading experience available. Also searchable as <em>kagura bachi</em> or <em>kagurabachi english</em>.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* More Manga Network Banner */}
      <div className="bg-[#0d1117] border-t border-white/5 py-14 px-4">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <span className="text-bb-blue text-xs font-bold uppercase tracking-widest block mb-2">More from Our Network</span>
          <h2 className="text-2xl font-heading font-bold text-white">Also Reading?</h2>
          <p className="text-gray-500 text-sm mt-2">Explore more top manga series — all free, all high quality.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { name: 'Blue Lock', url: 'https://www.readbluelockmanga.online/', desc: 'Soccer & ego battle', emoji: '⚽' },
            { name: 'Dandadan', url: 'https://www.readdandadanmanga.online/', desc: 'Aliens & ghosts chaos', emoji: '👾' },
            { name: 'Gachiakuta', url: 'https://www.readgachiakutamanga.online/', desc: 'Trash-powered warrior', emoji: '🗑️' },
            { name: 'Nano Machine', url: 'https://www.nanomachinemanga.online/', desc: 'Futuristic murim rise', emoji: '⚙️' },
            { name: 'Kingdom', url: 'https://www.readkingdommanga.online/', desc: '876 ch. epic history', emoji: '⚔️' },
          ].map(site => (
            <a key={site.url} href={site.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 p-5 bg-white/3 border border-white/5 rounded-xl hover:border-bb-blue/30 hover:bg-bb-blue/5 transition-all text-center">
              <span className="text-3xl">{site.emoji}</span>
              <span className="font-bold text-white text-sm group-hover:text-bb-blue transition-colors">{site.name}</span>
              <span className="text-xs text-gray-500">{site.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
