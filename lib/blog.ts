export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  cover: string;
  coverAlt: string;
  readingMinutes: number;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "eternal-widespread-ownership",
    title: "Eternal, widespread ownership of the Web",
    excerpt:
      "A city that stays lit because the people inside it own the rooms. That is the Web we are building toward.",
    date: "2014-11-01",
    category: "Vision",
    cover: "/blog/elevator-bay.png",
    coverAlt: "A night harbour around a colossal tower ringed with light, industrial decks stretching over dark water.",
    readingMinutes: 6,
    body: [
      "We believe in eternal widespread ownership of the Web. Not as a slogan. As the reason this architecture exists.",
      "Today, too much of what people make lives on platforms they do not own. Accounts vanish. Feeds rewrite themselves. The record of a life online sits behind a company that can change the terms overnight.",
      "Real Time Web is a way to treat digital space the way we already treat a home or a workshop: something you can occupy, furnish, and keep. Morph.Space is how you join that space. Synx is how you operate inside it.",
      "Ownership here is not a product feature. It is the condition under which people will still bother to make things that last.",
    ],
  },
  {
    slug: "settlers-of-a-new-web",
    title: "Settlers chasing new opportunities",
    excerpt:
      "Someone has to stand at the rail first, look out over the unfinished city, and decide to stay.",
    date: "2014-11-08",
    category: "Field notes",
    cover: "/blog/rain-on-the-rail.png",
    coverAlt: "A figure in a long coat leaning on a rain-wet railing, watching a vast city and a golden sphere in the sky.",
    readingMinutes: 5,
    body: [
      "We are looking for settlers chasing new opportunities. People who would rather build a room than wait for a product to give them one.",
      "Settlers do not need a finished city. They need a plot, a way to arrive, and a reason to stay. Real Time Web is the plot. Morph.Space is the arrival. Synx is how the room stays running.",
      "This is slower work than launching an app. It is also the only kind of work that still belongs to the people who do it after the launch week is over.",
      "If that sounds like you, read the architecture, then come in through Morph.Space.",
    ],
  },
  {
    slug: "connect-anything-to-the-present",
    title: "Let anyone connect anything to the present",
    excerpt:
      "The present is a shared surface. If a thing can be represented, it should be able to arrive there without asking a platform first.",
    date: "2014-11-15",
    category: "Network",
    cover: "/blog/street-canyon.png",
    coverAlt: "A golden lattice sphere hovering between skyscrapers at night, craft moving through fog below.",
    readingMinutes: 5,
    body: [
      "We let anyone connect anything to the present. That line is the whole brief, written before the interface, before the diagrams, before the site.",
      "The old Web asked documents to wait. You requested a page, it arrived, you left. Real time means the surface stays open. Things can appear while you are still looking.",
      "Connecting anything is not a promise of magic. It is a refusal to decide, in advance, which objects are allowed to exist in public digital space. People will invent the rest.",
      "If you want to understand the network, start in the documentation. If you want to participate, Morph.Space is the door.",
    ],
  },
  {
    slug: "unknown-platforms-and-your-data",
    title: "Do not let unknown platforms govern your data",
    excerpt:
      "If you cannot leave with what you made, you were never a resident. You were inventory.",
    date: "2014-11-22",
    category: "Ownership",
    cover: "/blog/monsoon-canyon.png",
    coverAlt: "Lightning striking a woven sphere suspended in a rain-soaked canyon of towers.",
    readingMinutes: 6,
    body: [
      "Do not let unknown platforms govern your data. The sentence is blunt because the situation is blunt.",
      "When a service holds the only copy of your work, it does not have to be evil to be dangerous. It only has to change direction. Or get acquired. Or close.",
      "Real Time Web treats space and the things inside it as something you can keep. That is why the documentation is public, why Morph.Space is the join path, and why Synx exists as operations rather than a hidden backend.",
      "Governance of data should be visible. If you cannot see who holds the keys, assume it is not you.",
    ],
  },
  {
    slug: "make-amazing-things-together",
    title: "Make amazing things together",
    excerpt:
      "A network is only as interesting as what people build in it. The architecture is a table. The work happens around it.",
    date: "2014-11-29",
    category: "Culture",
    cover: "/blog/orb-at-street.png",
    coverAlt: "A molten gold orb resting between dark towers under a storm sky, light flooding the wet street.",
    readingMinutes: 4,
    body: [
      "Make amazing things together. That is the invitation, not the specification.",
      "Specification matters. Layers matter. Naming matters. None of it is the point. The point is that two people, far apart, can share a space that belongs to both of them and leave something there that neither could have made alone.",
      "We are not recruiting users into a feed. We are asking makers to treat the Web as a commons again: a place you enter with tools, not with a profile.",
      "The documentation is there so the table is sturdy. The work is still yours.",
    ],
  },
  {
    slug: "the-present-is-a-horizon",
    title: "The present is a horizon, not a feed",
    excerpt:
      "One side is still night. The other is already day. Real time is the line between them, kept open.",
    date: "2014-12-06",
    category: "Vision",
    cover: "/blog/terminator-line.png",
    coverAlt: "A city of lights on a ridge, facing a desert sunrise under a vast planetary arc.",
    readingMinutes: 5,
    body: [
      "The Web we inherited taught people to scroll a list that never ends. The present, in that model, is whatever the ranking happens to show.",
      "A horizon is different. It is a shared edge. You can stand on it with someone else. You can see what is arriving without being told what to look at.",
      "Real Time Web is an architecture for that kind of present: interconnected digital spaces that stay open while you are in them. Morph.Space is how you step onto the line. Synx is how the line holds.",
      "We are not replacing the document Web. We are giving people a place to be, together, when a document is not enough.",
    ],
  },
  {
    slug: "interconnected-digital-spaces",
    title: "Interconnected real time digital spaces",
    excerpt:
      "Not a feed. Not a document pile. Rooms that stay open, linked to other rooms, belonging to the people inside them.",
    date: "2014-12-13",
    category: "Architecture",
    cover: "/blog/generation-ship.png",
    coverAlt: "A cylindrical world-ship interior, gardens and terraces curving toward a golden ring of light.",
    readingMinutes: 7,
    body: [
      "Real Time Web is an architecture for interconnected real time digital spaces. That is the shortest true sentence we have.",
      "A space is not a page. It persists. People can enter it, leave it, and return to find it still there. Interconnection means those spaces can point at each other without collapsing into a single company's map.",
      "The World Wide Web gave us linked documents. This work is about linked presence: rooms, objects, and the channels between them.",
      "Start with the introduction in the documentation if you want the structure. This journal is for the reasons we are building it.",
    ],
  },
  {
    slug: "a-network-you-can-see",
    title: "A network you can actually see",
    excerpt:
      "If the connections are real, they should be legible. Hidden graphs belong to platforms. Open space belongs to people.",
    date: "2014-12-20",
    category: "Network",
    cover: "/blog/dyson-swarm.png",
    coverAlt: "A disk habitat drifting before a vast golden mesh of light, fragments glittering in the dark.",
    readingMinutes: 5,
    body: [
      "Most of the Web you use is a graph you are not allowed to see. You feel the edges when a friend disappears, when a search result moves, when a room you used yesterday is gone.",
      "Real Time Web is built so the space itself is the thing you inhabit, not a ranking over someone else's inventory.",
      "Seeing the network does not mean drowning in diagrams. It means knowing where you are, who shares the room, and how to leave with what you brought.",
      "Read the specification when you want the structure. Come through Morph.Space when you want the room.",
    ],
  },
  {
    slug: "ghost-space-and-the-mirror",
    title: "What hangs above the water",
    excerpt:
      "Every live space has a counterpart you cannot ignore: the record, the other side, the thing that must stay in bijection.",
    date: "2014-12-27",
    category: "Architecture",
    cover: "/blog/inverted-city.png",
    coverAlt: "Inverted towers hanging from a dark sky, mirrored in still water around a small sphere at the center.",
    readingMinutes: 6,
    body: [
      "Live space is only half of the picture. There is always another side: the persistent counterpart that has to stay true to what is happening now.",
      "If those two sides drift, people stop trusting the room. They stop leaving anything that matters.",
      "That is why the architecture talks about Ghost Space as a bijection, not as decoration. The mirror has to match. Not approximately. Exactly enough that a person can return.",
      "You do not need to operate the layers to use the Web. You do need to know that the reflection is part of the design, not an accident of a vendor's cache.",
    ],
  },
  {
    slug: "an-informal-visionary",
    title: "An informal visionary still has to arrive",
    excerpt:
      "The sphere is already there. The question is whether you will walk the ice to meet it, or wait for a tour.",
    date: "2015-01-03",
    category: "Culture",
    cover: "/blog/arctic-artifact.png",
    coverAlt: "A carved dark sphere hovering over ice, aurora overhead, ships moving between frozen towers.",
    readingMinutes: 5,
    body: [
      "The 2014 brief asked for informal visionaries: people who can see a structure before it has a product page.",
      "That is still the hiring filter. Not a job title. A temperament. You look at an empty surface and furnish it. You look at a closed platform and want a door.",
      "Real Time Web will not feel finished for a long time. That is the point. Finished products are already owned by someone else.",
      "If you are the sort of person who would cross the ice because the object is interesting, the documentation is waiting, and Morph.Space is the way in.",
    ],
  },
  {
    slug: "rooms-inside-the-rock",
    title: "Rooms carved into the rock",
    excerpt:
      "MAD is not a stack of brands. It is how a hollow world holds light, work, and people without collapsing.",
    date: "2015-01-10",
    category: "Architecture",
    cover: "/blog/hollow-asteroid.png",
    coverAlt: "A cavern city around a glowing golden core, starlight through holes in the stone vault.",
    readingMinutes: 6,
    body: [
      "A digital world needs a core that holds, and terraces where people actually live. Mix those up and you get a dashboard pretending to be a city.",
      "The architecture names this plainly: Morph, Access, Data. Understand the network, join the space, operate what you own.",
      "You do not have to live in the core. Most people should not. The core is there so the rooms do not vanish when a vendor changes a slide.",
      "Walk the documentation for the layers. Walk Morph.Space when you want a room with a view.",
    ],
  },
  {
    slug: "stacked-worlds",
    title: "Many worlds, one axis of light",
    excerpt:
      "Forests, deserts, cities, ice: each a space, each connected, none required to become the same place.",
    date: "2015-01-17",
    category: "Vision",
    cover: "/blog/stacked-floors.png",
    coverAlt: "Disk habitats stacked in a bright vertical axis, forests and cities hanging in a shared sky.",
    readingMinutes: 5,
    body: [
      "Interconnection does not mean sameness. The Web failed people when every room was forced into one feed, one profile, one company's gravity.",
      "Real Time Web is the opposite bet: many spaces, linked, real time, owned widely enough that no single disk can turn off the sun.",
      "You can plant a forest next to a city. You can leave. You can come back. The axis is the architecture. The worlds are yours.",
      "That is the work. That is why the journal exists beside the specification. Come make the next disk.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelated(slug: string, limit = 3) {
  const index = posts.findIndex((post) => post.slug === slug);
  if (index < 0) return posts.slice(0, limit);
  const related: BlogPost[] = [];
  for (let offset = 1; related.length < limit && offset < posts.length; offset += 1) {
    related.push(posts[(index + offset) % posts.length]);
  }
  return related;
}

export function formatPostDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
