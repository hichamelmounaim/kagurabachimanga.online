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
    "id": "chihiro",
    "name": "Chihiro Rokuhira",
    "role": "Protagonist",
    "grade": "Swordsman",
    "description": "The wielder of the Enchanted Blade Enten, seeking revenge for his father's murder.",
    "image": "https://picsum.photos/400/600?random=10"
  },
  {
    "id": "shiba",
    "name": "Shiba",
    "role": "Ally",
    "grade": "Sorcerer",
    "description": "A close friend of Chihiro's father and a powerful sorcerer who assists Chihiro on his mission.",
    "image": "https://picsum.photos/400/600?random=11"
  },
  {
    "id": "char",
    "name": "Char Kyonagi",
    "role": "Main Character",
    "grade": "Survivor",
    "description": "A young girl with unique healing powers who is protected by Chihiro.",
    "image": "https://picsum.photos/400/600?random=12"
  },
  {
    "id": "sojo",
    "name": "Sojo Genichi",
    "role": "Villain",
    "grade": "Antagonist",
    "description": "A ruthless arms dealer who wields the Enchanted Blade Cloud Gouger and clashes with Chihiro.",
    "image": "https://picsum.photos/400/600?random=13"
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
