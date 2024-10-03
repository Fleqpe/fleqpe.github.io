const platformIcons = {
  poki: "images/poki-icon.png",
  googlePlay: "images/google-play-icon.png",
  crazy: "images/crazy-games-icon.png",
  steam: "images/steam-icon.png",
};
const games = [
  {
    id: "7",
    title: "Fantasy Idle Tycoon 2",
    imageUrl: "images/fantasy-idle-tycoon2.png",
    description:
      "Fantasy Idle Tycoon is an idle game where you must build yourself a blacksmith empire by managing your blacksmiths in this fantasy universe! Expand your empire by managing your investors.",
    urls: [
      { type: "poki", link: "https://poki.com/tr/g/fantasy-idle-tycoon-2" },
      {
        type: "crazy",
        link: "https://www.crazygames.com/game/fantasy-idle-tycoon-2",
      },
      { type: "steam", link: "" },
    ],
    isPaidApp: false,
    isNew: false,
    isUpdated: true,
    updateNotes: [
      {
        version: "1.0",
        date: "2024-09-20",
        title: "New Zone Volcano",
        notes: [
          "Added a new zone with 5 new playable levels.",
          "Improved performance on lower-end devices.",
          "Reduced the difficulty of higher levels.",
        ],
      },
      {
        version: "1.1",
        date: "2024-09-27",
        title: "Cosmetic System And Daily Quests",
        notes: [
          "Introduced a cosmetic item that can be used regardless of zone changes.",
          "A daily quest has been implemented that rewards players with in-game currency.",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Crafters Inc: Tycoon Empire",
    imageUrl: "images/crafters-inc.png",
    description:
      "Crafters Inc: Tycoon Empire is an idle game where you craft amazing items like weapons and armor. Hire helpers to boost production and sell your creations to expand your team and workshop. Keep crafting and growing your empire to create even cooler things!",
    urls: [
      {
        type: "poki",
        link: "https://poki.com/tr/g/crafters-inc-tycoon-empire",
      },
      { type: "googlePlay", link: "" },
      {
        type: "crazy",
        link: "https://www.crazygames.com/game/crafters-inc-tycoon-empire",
      },
      { type: "steam", link: "" },
    ],
    isPaidApp: false,
  },
  {
    id: "5",
    title: "Miner Madness Tycoon",
    imageUrl: "images/miner-madness.png",
    description:
      "Miner Madness Tycoon is an immersive game where you build a mining empire across time. Gather resources, amass wealth, and conquer the industry with engaging gameplay. Unleash your entrepreneurial skills and become the ultimate mining tycoon!",
    urls: [
      { type: "poki", link: "" },
      { type: "googlePlay", link: "" },
      {
        type: "crazy",
        link: "https://www.crazygames.com/game/time-to-mine---idle-tycoon",
      },
      { type: "steam", link: "" },
    ],
    isPaidApp: false,
  },
  {
    id: "4",
    title: "Slicer Cursor Idle",
    imageUrl: "images/slicer-cursor.png",
    description:
      "Slicer Cursor is a unique idle game where your cursor becomes a slicing machine. Slice enemies to level up and boost your slicing power. Enjoy the blend of action and strategy as you upgrade your cursor for maximum impact in this casual, incremental game!",
    urls: [
      { type: "poki", link: "" },
      { type: "googlePlay", link: "" },
      {
        type: "crazy",
        link: "https://www.crazygames.com/game/slicer-cursor-idle",
      },
      { type: "steam", link: "" },
    ],
    isPaidApp: false,
  },
  {
    id: "3",
    title: "Fantasy Idle Tycoon",
    imageUrl: "images/fantasy-idle-tycoon.png",
    description:
      "Fantasy Idle Tycoon is an idle game where you must build yourself a blacksmith empire by managing your blacksmiths in this fantasy universe! Expand your empire by managing your investors.",
    urls: [
      { type: "poki", link: "" },
      { type: "googlePlay", link: "" },
      {
        type: "crazy",
        link: "https://www.crazygames.com/game/fantasy-idle-tycoon",
      },
      { type: "steam", link: "" },
    ],
    isPaidApp: false,
  },
  {
    id: "2",
    title: "Fishing Society",
    imageUrl: "images/fishing-society.png",
    description:
      "Fishing Society lets you set sail, catch fish, and trade your haul for new gear and upgrades. Build your collection, explore the waters, and become the ultimate angler in this relaxing and rewarding adventure!",
    urls: [
      { type: "poki", link: "" },
      { type: "googlePlay", link: "" },
      { type: "crazy", link: "" },
      { type: "steam", link: "" },
    ],
    isPaidApp: false,
  },
  {
    id: "1",
    title: "Joe The Necromancer",
    imageUrl: "images/joe-the-necromancer.png",
    description:
      "In Joe the Necromancer, protect your character by leveling up your necromancy skills. With simple gameplay, focus on upgrading abilities to fend off enemies and survive the dangers of the dark arts!",
    urls: [
      { type: "poki", link: "" },
      { type: "googlePlay", link: "" },
      { type: "crazy", link: "" },
      { type: "steam", link: "" },
    ],
    isPaidApp: false,
  },
  {
    id: "0",
    title: "Antea: Crafting Simulator",
    imageUrl: "images/antea.png",
    description:
      "In Antea the Crafting Simulator, craft items through specialized buildings and earn money to upgrade them. Level up your structures to boost efficiency and dominate the crafting world!",
    urls: [
      { type: "poki", link: "" },
      { type: "googlePlay", link: "" },
      { type: "crazy", link: "" },
      { type: "steam", link: "" },
    ],
    isPaidApp: false,
  },
  // Add more games as needed
];
