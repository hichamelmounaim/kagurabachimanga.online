import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const About: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 min-h-screen">
            <SEOHead
                title="Kagurabachi Manga — Story, Characters, Volumes & Release Info"
                description="Kagurabachi (カグラバチ) by Takeru Hokazono. Serialized in Weekly Shonen Jump since Sept 2023. 122+ chapters, Next Manga Award winner. Read free online."
                canonicalUrl="https://www.kagurabachimanga.online/about"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Book",
                    "name": "Kagurabachi",
                    "alternateName": ["カグラバチ", "Kagura Bachi"],
                    "author": {
                        "@type": "Person",
                        "name": "Takeru Hokazono"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Shueisha"
                    },
                    "genre": ["Action", "Dark Fantasy", "Shounen", "Supernatural", "Revenge"],
                    "datePublished": "2023-09-19",
                    "inLanguage": "ja",
                    "description": "Chihiro Rokuhira seeks revenge against the Hishaku sorcerers who killed his father and stole the Enchanted Blades.",
                    "award": "10th Next Manga Award — Print Category",
                    "url": "https://www.kagurabachimanga.online/about"
                }}
                schemas={[
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kagurabachimanga.online/" },
                            { "@type": "ListItem", "position": 2, "name": "About Kagurabachi", "item": "https://www.kagurabachimanga.online/about" }
                        ]
                    }
                ]}
            />

            <h1 className="text-3xl md:text-4xl font-bold mb-2 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
                Kagurabachi Manga — Complete Guide
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-10 text-sm">
                Story, characters, volumes, and release information for <strong>Kagurabachi</strong> (カグラバチ) by Takeru Hokazono
            </p>

            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">

                {/* Quick stats */}
                <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                    {[
                        { label: 'Author', value: 'Takeru Hokazono' },
                        { label: 'Publisher', value: 'Shueisha' },
                        { label: 'Serialized In', value: 'Weekly Shōnen Jump' },
                        { label: 'Start Date', value: 'Sept 19, 2023' },
                        { label: 'Status', value: 'Ongoing' },
                        { label: 'Award', value: 'Next Manga Award' },
                    ].map(stat => (
                        <div key={stat.label} className="bg-gray-50 dark:bg-white/5 rounded-lg p-4 border border-gray-200 dark:border-white/10">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">{stat.label}</span>
                            <span className="text-gray-900 dark:text-white font-semibold text-sm">{stat.value}</span>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Synopsis</h2>
                <p>
                    <strong>Kagurabachi</strong> follows <strong>Chihiro Rokuhira</strong>, the son of master swordsmith Kunihiko Rokuhira. Kunihiko spent years forging six extraordinary <strong>Enchanted Blades</strong> — weapons imbued with sorcery capable of catastrophic destruction. One day, a ruthless criminal organization known as <strong>the Hishaku</strong> slaughtered Kunihiko, stole five of the six blades, and left behind only ruins and a grieving son.
                </p>
                <p>
                    Armed with the one blade his father managed to hide — <strong>Enten</strong>, a blade of immense destructive power — and the unrelenting swordsmanship Kunihiko drilled into him since childhood, Chihiro sets out to systematically hunt down and kill every member of the Hishaku. His mission: recover the stolen Enchanted Blades and avenge his father.
                </p>
                <p>
                    The world Hokazono builds is one where licensed sorcerers operate within a governmental framework, black-market sorcery is a thriving criminal enterprise, and the six Enchanted Blades are the most dangerous artifacts in existence. Chihiro's hunt pulls him into this underworld, forcing encounters with morally complex allies, terrifyingly powerful enemies, and the political machinations of the sorcery establishment.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Genres & Themes</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Action / Dark Fantasy</strong> — high-intensity swordplay meets supernatural sorcery</li>
                    <li><strong>Revenge</strong> — Chihiro's singular motivation drives every arc</li>
                    <li><strong>Grief & Legacy</strong> — the weight of a father's life's work and what it means to carry it forward</li>
                    <li><strong>Crime / Underworld</strong> — sorcery black markets, organized crime, government corruption</li>
                    <li><strong>Shounen</strong> — serialized in Weekly Shōnen Jump; protagonist grows stronger with each battle</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Key Characters</h2>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Chihiro Rokuhira</h3>
                <p>
                    The protagonist. Cold, ruthless, and laser-focused — Chihiro is not a typical shonen hero. He does not seek friendship or recognition; he seeks the Hishaku's destruction. His swordsmanship is extraordinary even without sorcery, and Enten amplifies it to catastrophic levels. His taciturn nature and single-minded drive make him one of the most distinctive protagonists in recent Jump history.
                </p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Shiba</h3>
                <p>
                    Chihiro's pragmatic, morally flexible partner. A former government sorcerer with deep connections across the underworld, Shiba acts as Chihiro's guide through the criminal sorcery ecosystem. His relationship with Chihiro is one of the series' most compelling dynamics — mutual utility that slowly deepens into genuine partnership.
                </p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Hakuri Sazanami</h3>
                <p>
                    A young sorcerer from the prestigious Sazanami clan who becomes entangled in Chihiro's mission. Hakuri provides a counterpoint to Chihiro's darkness — earnest, principled, and still figuring out where his loyalties lie.
                </p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">The Hishaku</h3>
                <p>
                    The primary antagonist organization. Each member is a powerful sorcerer who wields — or controls access to — one of the stolen Enchanted Blades. They are not a monolithic evil; each member has distinct motivations and philosophies, making them compelling opponents rather than mere obstacles.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Enchanted Blades</h2>
                <p>
                    The six Enchanted Blades forged by Kunihiko Rokuhira are the MacGuffins that drive the entire plot. Each blade is unique in its sorcery ability:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Enten</strong> — Chihiro's blade. Grants explosive, devastating offensive power.</li>
                    <li><strong>Cloud Gouger</strong> — Compresses and weaponizes air into lethal cutting attacks.</li>
                    <li>Four additional blades — scattered among Hishaku members and their associates, each with unique abilities revealed across the arcs.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Kagurabachi Went Viral</h2>
                <p>
                    Shortly after launch in September 2023, Kagurabachi became a viral sensation — largely due to an ironic meme ("enough time has passed") that spread across Reddit, Twitter/X, and TikTok. But the meme brought readers in, and the manga's quality kept them there. Within months, it was consistently topping Jump's reader polls, and it won the prestigious <strong>10th Next Manga Award in the Print Category</strong>, cementing its status as a legitimate breakout hit.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Read Kagurabachi Online</h2>
                <p>
                    You can <Link to="/chapter/1" className="text-bb-blue hover:underline">start reading Kagurabachi from Chapter 1</Link> right here, for free, in English. All chapters are available in high-quality scans with no sign-up required.
                </p>
                <div className="not-prose flex gap-4 mt-4">
                    <Link
                        to="/chapter/1"
                        className="inline-flex items-center px-6 py-3 bg-bb-blue hover:bg-blue-700 text-white font-bold rounded-lg transition-all"
                    >
                        Read from Chapter 1
                    </Link>
                    <Link
                        to="/manga"
                        className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                    >
                        All Chapters
                    </Link>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">About This Site</h2>
                <p className="lead text-xl text-gray-600 dark:text-gray-400">
                    Welcome to <strong>Kagurabachi Manga</strong> — the ultimate destination for fans of Takeru Hokazono's series.
                </p>
                <p>
                    Our mission is to provide the best possible reading experience for Kagurabachi fans worldwide — fast, clean, and accessible on any device. Whether you are catching up from the start or following weekly releases, we have every chapter ready for you.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>High Quality Scans:</strong> HD images, no watermarks.</li>
                    <li><strong>Fast Updates:</strong> New chapters available as soon as they release.</li>
                    <li><strong>No Sign-Up:</strong> Read instantly, no account required.</li>
                    <li><strong>Mobile-Optimized:</strong> Vertical scroll and horizontal swipe reader modes.</li>
                </ul>

                <p>
                    Questions or feedback? Email us at{' '}
                    <a href="mailto:Support@www.kagurabachimanga.online" className="text-bb-blue hover:underline">
                        Support@www.kagurabachimanga.online
                    </a>
                </p>

                <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl mt-12 border border-gray-200 dark:border-white/10">
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                        <strong>Disclaimer:</strong> This website is a fan project and is not affiliated with Takeru Hokazono, Weekly Shōnen Jump, Shueisha, or their partners. All manga content and characters belong to their respective copyright owners.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
