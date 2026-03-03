export type RankedEntry = {
  rank: number
  name: string
  title: string
  avatar: string
  change: number
  tags?: string[]
  score: number
}

export const rankedEntries: RankedEntry[] = [
  {
    rank: 1,
    name: "Alexander Dreymon",
    title: "The Apex Predator",
    avatar: "https://i.pravatar.cc/150?img=11",
    change: 0,
    tags: ["Current Protagonist"],
    score: 97,
  },
  {
    rank: 2,
    name: "Marcus Bellingham",
    title: "The Dark Knight",
    avatar: "https://i.pravatar.cc/150?img=12",
    change: 2,
    tags: [],
    score: 94,
  },
  {
    rank: 3,
    name: "Theo Castellano",
    title: "Humble Mogger",
    avatar: "https://i.pravatar.cc/150?img=13",
    change: -1,
    score: 92,
  },
  {
    rank: 4,
    name: "Julian Ashford",
    title: "The Silent Storm",
    avatar: "https://i.pravatar.cc/150?img=14",
    change: 3,
    tags: ["Rising Fast"],
    score: 89,
  },
  {
    rank: 5,
    name: "Sebastian Varga",
    title: "Golden Ratio King",
    avatar: "https://i.pravatar.cc/150?img=15",
    change: -2,
    score: 87,
  },
  {
    rank: 6,
    name: "Dimitri Volkov",
    title: "The Enigma",
    avatar: "https://i.pravatar.cc/150?img=16",
    change: 0,
    score: 85,
  },
  {
    rank: 7,
    name: "Rafael Moreno",
    title: "Sun-Kissed Prodigy",
    avatar: "https://i.pravatar.cc/150?img=17",
    change: 1,
    score: 83,
  },
  {
    rank: 8,
    name: "Nikolai Petrov",
    title: "Ice Cold Symmetry",
    avatar: "https://i.pravatar.cc/150?img=18",
    change: -3,
    score: 81,
  },
  {
    rank: 9,
    name: "Lucian Blackwood",
    title: "The Phantom",
    avatar: "https://i.pravatar.cc/150?img=19",
    change: 2,
    score: 79,
  },
  {
    rank: 10,
    name: "Henrik Strand",
    title: "Nordic Thunder",
    avatar: "https://i.pravatar.cc/150?img=20",
    change: -1,
    score: 77,
  },
]

export const battleRoster: RankedEntry[] = [
  ...rankedEntries,
  {
    rank: 11,
    name: "Cassian Reed",
    title: "The Underdog",
    avatar: "https://i.pravatar.cc/150?img=21",
    change: 4,
    score: 75,
  },
  {
    rank: 12,
    name: "Orion Blake",
    title: "Midnight Contender",
    avatar: "https://i.pravatar.cc/150?img=22",
    change: 0,
    score: 73,
  },
  {
    rank: 13,
    name: "Ezra Montague",
    title: "The Architect",
    avatar: "https://i.pravatar.cc/150?img=23",
    change: -2,
    score: 71,
  },
  {
    rank: 14,
    name: "Felix Harrington",
    title: "Chrome Jaw",
    avatar: "https://i.pravatar.cc/150?img=24",
    change: 1,
    score: 69,
  },
  {
    rank: 15,
    name: "Atlas Wynter",
    title: "The Newcomer",
    avatar: "https://i.pravatar.cc/150?img=25",
    change: 5,
    score: 67,
  },
  {
    rank: 16,
    name: "Dorian Hale",
    title: "Velvet Menace",
    avatar: "https://i.pravatar.cc/150?img=26",
    change: -1,
    score: 65,
  },
  {
    rank: 17,
    name: "Roman Caldwell",
    title: "Steel Gaze",
    avatar: "https://i.pravatar.cc/150?img=27",
    change: 0,
    score: 63,
  },
  {
    rank: 18,
    name: "Jasper Thorne",
    title: "The Wildcard",
    avatar: "https://i.pravatar.cc/150?img=28",
    change: 3,
    score: 61,
  },
  {
    rank: 19,
    name: "Milo Ashcroft",
    title: "Baby Face Titan",
    avatar: "https://i.pravatar.cc/150?img=29",
    change: -4,
    score: 59,
  },
  {
    rank: 20,
    name: "Kieran Frost",
    title: "The Last Stand",
    avatar: "https://i.pravatar.cc/150?img=30",
    change: 2,
    score: 57,
  },
]
