import { Arc, Chapter, Character, Comment } from "./types";
import mangaData from "./scraped_w5baek-kagurabachi.json";

// Kagurabachi launched in Weekly Shonen Jump on Aug 18 2023.
// Approximate a release date per chapter (weekly cadence).
const SERIES_START = new Date("2023-08-18T00:00:00Z").getTime();
const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

export const MOCK_CHAPTERS: Chapter[] = [...mangaData.chapters]
  .sort((a, b) => b.chapter_number - a.chapter_number)
  .map(ch => ({
    id: String(ch.chapter_number),
    number: ch.chapter_number,
    title: ch.chapter_title,
    releaseDate: new Date(SERIES_START + (ch.chapter_number - 1) * MS_PER_WEEK).toISOString(),
    pages: ch.image_urls,
  }));

export const CHARACTERS: Character[] = [
  {
    "id": "314801",
    "name": "Chihiro Rokuhira",
    "role": "Main Character",
    "grade": "Swordsman",
    "description": "Son and apprentice of the master swordsmith Kunishige Rokuhira. Wielder of the Enchanted Blade Enten, and a user of the Iai White Purity Style.",
    "image": "/characters/314801.jpg"
  },
  {
    "id": "326181",
    "name": "Hakuri Sazanami",
    "role": "Main Character",
    "grade": "Sorcerer",
    "description": "A young man disowned from the Sazanami clan. He witnessed Chihiro's bravery and was inspired by him, possessing two rare sorceries.",
    "image": "/characters/326181.jpg"
  },
  {
    "id": "314802",
    "name": "Togo Shiba",
    "role": "Supporting Character",
    "grade": "Veteran Sorcerer",
    "description": "Old friend of Kunishige Rokuhira, a former member of the Kamunabi, and a Seitei War veteran. He assists Chihiro.",
    "image": "/characters/314802.jpg"
  },
  {
    "id": "314803",
    "name": "Kunishige Rokuhira",
    "role": "Supporting Character",
    "grade": "Master Swordsmith",
    "description": "Master swordsmith who forged the six Enchanted Blades with a special technique known to no one else. Father of Chihiro.",
    "image": "/characters/314803.jpg"
  },
  {
    "id": "316062",
    "name": "Char Kyounagi",
    "role": "Supporting Character",
    "grade": "Survivor",
    "description": "A young orphan girl with unique regeneration powers living on the streets who was hunted for her abilities.",
    "image": "/characters/316062.jpg"
  },
  {
    "id": "317244",
    "name": "Genichi Soujou",
    "role": "Antagonist",
    "grade": "Weapons Dealer",
    "description": "A prominent weapons dealer who controls the underworld. He wielded the enchanted blade Cloud Gouger.",
    "image": "/characters/317244.jpg"
  },
  {
    "id": "325470",
    "name": "Hiyuki Kagari",
    "role": "Supporting Character",
    "grade": "Kamunabi Elite",
    "description": "Stated to be the 'strongest fighter of the Kamunabi', she wields the Flame Bone of the Starving, rivaling Enchanted Blades.",
    "image": "/characters/325470.jpg"
  },
  {
    "id": "318348",
    "name": "Soushirou Azami",
    "role": "Supporting Character",
    "grade": "Kamunabi Agent",
    "description": "An elite member of the Kamunabi who aids in tracking the Enchanted Blades.",
    "image": "/characters/318348.jpg"
  }
];

export const ARCS: Arc[] = [
  {
    "id": "intro",
    "title": "Introduction Arc",
    "description": "Chihiro starts his journey of vengeance and tracks down the enchanted blades.",
    "chapterStart": 1,
    "chapterEnd": 8,
    "image": "https://picsum.photos/600/300?random=20"
  },
  {
    "id": "sojo-fight",
    "title": "Sojo Conflict Arc",
    "description": "Chihiro clashes with Sojo Genichi over the possession of the Cloud Gouger blade.",
    "chapterStart": 9,
    "chapterEnd": 18,
    "image": "https://picsum.photos/600/300?random=21"
  },
  {
    "id": "rakuzaichi",
    "title": "Rakuzaichi Auction Arc",
    "description": "A high-stakes auction battle for the ownership of the remaining blades.",
    "chapterStart": 19,
    "chapterEnd": 35,
    "image": "https://picsum.photos/600/300?random=22"
  }
];

export const MOCK_COMMENTS: Comment[] = [
  {
    "id": "1",
    "user": "Fanatic99",
    "content": "Chihiro is devouring everyone! What an absolute legend.",
    "date": "2 hours ago",
    "likes": 155
  },
  {
    "id": "2",
    "user": "SeriesFan",
    "content": "Shiba is insane. Best character!",
    "date": "5 hours ago",
    "likes": 230
  },
  {
    "id": "3",
    "user": "Otaku",
    "content": "This manga is pure hype. The art is incredible.",
    "date": "1 day ago",
    "likes": 89
  }
];
