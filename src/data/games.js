// src/data/games.js
import placeholderImg from "../assets/images/games/placeholder.webp";

export const games = [
  {
    id: "troll-world-obby",
    title: "Troll World Obby [🌍ALL COUNTRIES]",
    slug: "troll-world-obby",
    description:
      "Parkour your way through every single country, while trolling your friends with slapsticks, fling guns, and nukes!",
    genre: "Adventure",
    tags: ["MULTIPLAYER", "ADVENTURE", "PARKOUR"],
    featured: true,
    isNew: true,
    isPopular: true,
    rating: 4.8,
    players: 12430,
    visits: 3250000,
    thumbnail: placeholderImg,
    heroImage: placeholderImg,
    platforms: ["desktop", "mobile"],
    releaseDate: "2025-05-14",
    robloxUrl: "https://www.roblox.com",
  },
  {
    id: "hide-and-seek",
    title: "Hide and Seek!",
    slug: "hide-and-seek",
    description:
      "Hide and Seek with a twist. The roles change every 10 seconds! Play with your friends. Available in 1v1, 2v2, 3v3… And so on!",
    genre: "Action",
    tags: ["CO-OP", "PVP", "ACTION"],
    featured: true,
    isNew: false,
    isPopular: true,
    rating: 4.6,
    players: 9840,
    visits: 8200000,
    thumbnail: placeholderImg,
    heroImage: placeholderImg,
    platforms: ["desktop", "mobile"],
    releaseDate: "2024-11-02",
    robloxUrl: "https://www.roblox.com",
  },
];
