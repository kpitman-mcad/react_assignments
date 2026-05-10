// Object array of aventure location and text details.

export const data = [
  {
    id: 0,
    room: "enter",
    title: "Standing outside the Dungeon",
    description:
      "Storm clouds pour across the sky, crackling with lightning that brightens the landscape in sharp long shadows, while the thunder rolls rumbling and cacophonous. The branches of trees lash in the wind and rain pelts your cloak, soaking you through to your shivering skin. Ahead of you, in the shadow of a rocky outcrop NORTH of the trailside, you catch sight of a timber door set in the stone slope. It is gnarled and scored by unknown eons. Perhaps someone inside would be willing to provide you with shelter?",
    item: "torch",
    itemdescription: "There is a lit torch in a sconce near the door...",
    itempickup: "You pull the torch from the wall.",
    itemdrop: "Perhaps you should keep your only light source...",
  },

  {
    id: 1,
    room: "1A",
    title: "Treasure Room",
    description:
      "The room you have entered is warm, and inviting. A cozy fireplace roars in the corner, and the walls are covered in stack upon stack of ancient tomes. Books and scrolls cover every shelf and are piled haphazardly across every surface, spilling onto the floor. A small round table pokes out from the piled volumes. There rests a thin notebook with a midnight blue cover that seems to shift and dance under your gaze. SOUTH is an ancient DOOR hanging open. EAST is a long hallway lined with paintings.",
    item: "book",
    itemdescription: "The blue book calls out to you...",
    itempickup: "The book snaps into your hand, humming gently.",
    itemdrop:
      "You discard the blue book, and it swirls away in a puff of dust...",
  },

  {
    id: 2,
    room: "1B",
    title: "Hallway of Paintings",
    description:
      "As you walk into the long wood-panneled hallway, you notice something strange about the paintings hanging at regular intervals along the walls. The images are moving! You pass by verdant landscapes, your perspective shifting, like peering through a window into another world. In the distance, a farmer looks up from his harvest and waves. You wave back self-consciously as you admire the idyllic landscape in the painting. WEST is the light of a crackling fire. EAST you can hear low voices, and SOUTH is a metal door.",
    item: false,
    itemdescription: "",
  },

  {
    id: 3,
    room: "1C",
    title: "Orc Poker Game",
    description:
      "The door creaks as you carefully enter the room. Seated at a round table are half a dozen orcs playing what appears to be a robust game of poker. You sidle up and ask to join, and the orcs welcome you with fanged smiles and sinister laughter. As you play, the hours blend together into a haze, when suddenly you awake to find yourself alone in a silent, dark chamber, where cobwebs now dangle from your aching limbs. SOUTH is a warm draft and WEST is a long hallway.",
    item: "note",
    itemdescription: "There is crumpled note on the ground at your feet...",
    itempickup:
      "The note reads, 'I'm with stuupyd' with a small arrow scrawled toward you. Hmm.",
    itemdrop: "The note bursts into flames and vanishes...",
  },

  {
    id: 4,
    room: "2A",
    title: "Great Hall of Ghosts",
    description:
      "You step into a bright dining hall, sparklingly decorated in extravagant finery. The walls are filigreed with gold inlay, and patterned with intricate designs. There is a long oak table, heaped with rotting food, and surrounded by tall-backed chairs. Each seat is occupied by a translucent ghost, ravenously gorging on the fetid bounty. They turn sharply in unison, and silently watch as you pass. SOUTH is an echoing cavern. EAST is a narrow bridge, and NORTH is a gilded ancient door that hangs slightly ajar.",
    item: false,
    itemdescription: "",
  },

  {
    id: 5,
    room: "2B",
    title: "Chasm Bridge",
    description:
      "The narrow stone bridge arcs across a deep chasm, filled with glowing fog that moves and shifts with the passage of strange writhing shapes. As you cross the span, small pebbles fall away from the edges of the narrow path, soundlessly swallowed by the churning void. There is a small landing with three metal doors facing NORTH, WEST, and EAST. To the SOUTH is the entrance to the Dungeon.",
    item: "staff",
    itemdescription: "A gnarled wooden staff lies across the path ahead...",
    itempickup: "The smooth surface of the staff fits neatly in your hand.",
    itemdrop:
      "A voice cries, 'You shall not paaaaaasss...' as the staff twirls away...",
  },

  {
    id: 6,
    room: "2C",
    title: "Monster's Lair",
    description:
      "You step into the rough brick room, and are immediately blasted by a wave of hot, fetid air. The room bellows and groans with strange low rumbles, and the wall ahead of you is covered in odd tiles that shimmer like obsidian. As you step closer, the wall shifts and rises, like the flank of some ancient leviathan from the old legends. To the WEST is a metal door covered in rust. To the NORTH you hear low voices. SOUTH is a crack in the wall that may be passable.",
    item: "key",
    itemdescription:
      "A small copper key hangs from a rusty nail in the brick wall...",
    itempickup: "You hold the key to my heart.",
    itemdrop:
      "Sure, ok, you probably didn't need that. A stinky rat runs off with it...",
  },

  {
    id: 7,
    room: "3A",
    title: "Cavern of Whispers",
    description:
      "The cavern soars above you, arching away in darkness. From the high distant ceiling, stalactites reach down toward you like skeletal fingers. You are surrounded by a forest of thick stone stalamites, hulking shapes that recede like a silent, slender army of willowy creatures. Their calcified surfaces testify to the eons they have witnessed. You hear strange moaning cries from the NORTH. To the EAST is the entrance to the Dungeon.",
    item: "sword",
    itemdescription:
      "Glinting in the darkness, leaning against a stalagmite, is an ancient pitted sword...",
    itempickup:
      "You grap the blade with a flourish, thrust it into your waistband, cutting right through the belt.",
    itemdrop: "The sword clatters on the stones, shattering like Narsil...",
  },

  {
    id: 8,
    room: "3B",
    title: "Dungeon Entryway",
    description:
      "The large wooden door has slammed shut behind you. The only light in the murky stone room is provided by the flickering torch clenched tight in your hand. The walls are slick with glistening slime. Away in the echoing distance you hear the cries of some sinister beast from deep in the dungeon. Ahead of you to the NORTH is a deep chasm spanned by a thin stone bridge. To the WEST, a murky cavern. To the East is a narrow portal into a shadowed tunnel.",
    item: false,
    itemdescription: "",
  },

  {
    id: 9,
    room: "3C",
    title: "Pit Trap",
    description:
      "You scramble and crawl into the room, pushing your way through the mud and muck of the dungeon floor, pushing your torch along ahead of you. Eventually you emerge into a low room, where a strong wind billows and roars up into your face. You suddenly find yourself teetering at the mouth of a fathomless pit. You leap back against the wall, panicked. If you shimmy along the narrow ledge, you might reach a crack in the NORTH wall that is passable, or a low tunnel to the WEST.",
    item: false,
    itemdescription: "",
  },

  {
    id: 10,
    room: "exit",
    title: "Into the land of painted light",
    description:
      "You have escaped from the dungeon by crawling into a magical painting! Wow! In the distance you see rolling hills spotted with golden trees that shift in the gentle breeze. A winding path leads away toward the open gate of a shining white castle, crowned with towers that scrape the azure sky. Beyond that, rugged peaks crested by icy fields of snow march off into the infinite distance, promising leagues of adventure awaiting you in this far reaching realm... layers upon layers upon layers of possibilities... like an onion! Dungeonion!",
    item: false,
    itemdescription:
      "You feel a bit unprepared for taking that kind of journey...",
    endingdescription:
      "You sure are glad you picked up all that stuff in the dungeon! What a relief to be prepared!",
  },
];
