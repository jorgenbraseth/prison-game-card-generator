const CARDS = [
    {type: "INMATE", subType: "UNALIGNED", rarity: "COMMON", count: 10, faction: "UNALIGNED", name: "Buddy", rank: 1, beat: 3},

    {type: "INMATE", subType: "UNALIGNED", rarity: "COMMON", faction: "UNALIGNED", name: "Fixer", rank: 5, beat: 5, buy: 15, loot:"2 contraband",
        ability:"<strong>Play this inmate as a favour.</strong><br/><br/>Pay 10 {cigg}: draw 5 contraband. Do this only once."
    },
    {type: "INMATE", subType: "UNALIGNED", rarity: "COMMON", faction: "UNALIGNED", name: "Easy target", rank: 1, beat: 3, buy: 2, loot:"1 contraband"},
    {type: "INMATE", subType: "UNALIGNED", rarity: "COMMON", faction: "UNALIGNED", name: "Hoarder", rank: 1, beat: 5, buy: 5, loot:"1 contraband, draw 1 card"},
    {type: "INMATE", subType: "UNALIGNED", rarity: "COMMON", faction: "UNALIGNED", name: "Weasel", rank: 1, beat: 5, buy: 6, loot:"1 favour"},
    {type: "INMATE", subType: "UNALIGNED", rarity: "COMMON", faction: "UNALIGNED", name: "Snitch", rank: 2, beat: 5, buy: 5, loot:"2 contraband",
        additionalCost:"You may frame 1 inmate instead of buying this inmate"},

    {type: "INMATE", subType: "WHITE", rarity: "COMMON", name: "Redneck", faction: "WHITE", rank: 1, buy: 3, beat: 4, loot:"1 contraband"},
    {type: "INMATE", subType: "WHITE", rarity: "COMMON", name: "Skinhead", faction: "WHITE", rank: 3, buy: 5, beat: 7, loot:"2 contraband"},
    {type: "INMATE", subType: "WHITE", rarity: "COMMON", name: "Boot boy", faction: "WHITE", rank: 5, buy: 10, beat: 12, loot:"3 contraband, 1 favour"},
    {type: "INMATE", subType: "WHITE", rarity: "UNCOMMON", name: "Old Nazi", faction: "WHITE", rank: 5, buy: 10, beat: 12, loot: "1 Favour, 1 contraband",
        ability: "<strong>Leader 1</strong><br/>You may have 1 <strong>White</strong> inmate join a fight where this inmate is already fighting."
    },
    {type: "INMATE", subType: "WHITE", rarity: "RARE", name: "Siegfried Kankerhoor", faction: "WHITE", rank: 5, buy: 15, beat: 5, loot: "1 Favour, 1 contraband",
        ability: "When this inmate starts or joins a fight, show the top 5 cards of your deck. Add any White inmates to the fight for free. Put the rest of the cards in your spent pile."
    },

    {type: "INMATE", subType: "BLACK", rarity: "COMMON", name: "Black 1", faction: "BLACK", rank: 1, buy: 3, beat: 4, loot:"1 contraband"},
    {type: "INMATE", subType: "BLACK", rarity: "COMMON", name: "Black 2", faction: "BLACK", rank: 3, buy: 5, beat: 7, loot:"2 contraband"},
    {type: "INMATE", subType: "BLACK", rarity: "COMMON", name: "Black 3", faction: "BLACK", rank: 5, buy: 10, beat: 12, loot:"3 contraband, 1 favour"},
    {type: "INMATE", subType: "BLACK", rarity: "UNCOMMON", name: "Beret worthy", faction: "BLACK", rank: 5, buy: 10, beat: 12, loot: "1 Favour, 1 contraband",
        ability: "<strong>Leader 1</strong><br/>You may have 1 <strong>Black</strong> inmate join a fight for free where this inmate is already fighting."
    },
    {type: "INMATE", subType: "BLACK", rarity: "RARE", name: "Doctor S", faction: "BLACK", rank: 5, buy: 15, beat: 10, loot: "1 Favour, 1 contraband",
        ability: "This inmate has double {power} when fighting White supremacist inmates."
    },

    {type: "INMATE", subType: "ASIAN", rarity: "COMMON", name: "Asian 1", faction: "ASIAN", rank: 1, buy: 3, beat: 4, loot:"1 contraband"},
    {type: "INMATE", subType: "ASIAN", rarity: "COMMON", name: "Asian 2", faction: "ASIAN", rank: 3, buy: 5, beat: 7, loot:"2 contraband"},
    {type: "INMATE", subType: "ASIAN", rarity: "COMMON", name: "Asian 3", faction: "ASIAN", rank: 5, buy: 10, beat: 12, loot:"3 contraband, 1 favour"},
    {type: "INMATE", subType: "ASIAN", rarity: "UNCOMMON", name: "Asian Leader", faction: "ASIAN", rank: 5, buy: 10, beat: 12, loot: "1 Favour, 1 contraband",
        ability: "<strong>Leader 1</strong><br/>You may have 1 <strong>Asian</strong> inmate join a fight for free where this inmate is already fighting."
    },
    {type: "INMATE", subType: "ASIAN", rarity: "RARE", name: "Ken Lee", faction: "ASIAN", rank: 5, buy: 15, beat: 10, loot: "1 Favour, 1 contraband",
        ability: "When this inmate joins a fight, draw 2 cards."
    },

    {type: "INMATE", subType: "LATINO", rarity: "COMMON", name: "Latino 1", faction: "LATINO", rank: 1, buy: 3, beat: 4, loot:"1 contraband"},
    {type: "INMATE", subType: "LATINO", rarity: "COMMON", name: "Latino 2", faction: "LATINO", rank: 3, buy: 5, beat: 7, loot:"2 contraband"},
    {type: "INMATE", subType: "LATINO", rarity: "COMMON", name: "Latino 3", faction: "LATINO", rank: 5, buy: 10, beat: 12, loot:"3 contraband, 1 favour"},
    {type: "INMATE", subType: "LATINO", rarity: "UNCOMMON", name: "Latino Leader", faction: "LATINO", rank: 5, buy: 10, beat: 12, loot: "1 Favour, 1 contraband",
        ability: "<strong>Leader 1</strong><br/>You may have 1 <strong>Latino</strong> inmate join a fight for free where this inmate is already fighting."
    },
    {type: "INMATE", subType: "LATINO", rarity: "RARE", name: "Latino Special", faction: "LATINO", rank: 5, buy: 15, beat: 10, loot: "1 Favour, 1 contraband",
        ability: "This inmate can equip up to 3 weapons in a fight"
    },

    { type: "GUARD", rarity: "UNCOMMON", name: "Guard 2", buy: 15,
        additionalCost: "Frame 2 inmates", ability: "Take 2 contraband. Draw 1 card."
    },
    {type: "GUARD", rarity: "UNCOMMON", name: "Guard 1", buy: 5,
        additionalCost: "Frame 1 inmate", ability: "The effect of all items are removed from the current fight."
    },
    {type: "GUARD", rarity: "UNCOMMON", name: "Ku Klux Guard", buy: 10,
        additionalCost: "Frame 1 non-white inmate", ability: "Draw a favour. Gain 1 White popularity."
    },
    {type: "GUARD", rarity: "UNCOMMON", name: "Malcom Guard", buy: 10,
        additionalCost: "Frame 1 white inmate", ability: "Draw a favour. Gain 1 Black popularity."
    },

    {type: "CONTRABAND", subType: "VALUABLE", rarity: "COMMON", count: 20, name: "Cigarette", value: 1},
    {type: "CONTRABAND", subType: "VALUABLE", rarity: "COMMON", count: 20, name: "Half a pack", value: 5},
    {type: "CONTRABAND", subType: "VALUABLE", rarity: "UNCOMMON", count: 10, name: "Full pack", value: 10},
    {type: "CONTRABAND", subType: "VALUABLE", rarity: "RARE", count: 5, name: "Joint", value: 20},

    {type: "CONTRABAND", subType: "PLAN", rarity: "COMMON", name: "Plan: Shank", value: 10,
        parts: "<strong>Sharp Edge</strong> ,<strong>Wrapping</strong>",
        assemble: "Take 1 <strong>Shank</strong>. Put it into your hand"
    },
    {type: "WEAPON", rarity: "COMMON", count: 5, name: "Shank", value: 20,
        ability: "+3 {power} to one unarmed inmate in the current fight."
    },
    {type: "CONTRABAND", subType: "MATERIAL", rarity: "COMMON", count: 10, name: "Piece of Glass",
        materialType: "Sharp Edge",
        ability: "+1 {power} to one unarmed inmate in the current fight", value: 10
    },
    {type: "CONTRABAND", subType: "MATERIAL", rarity: "COMMON", count: 10, name: "Nylon Stocking",
        materialType: "Wrapping", value: 8
    },
    {type: "CONTRABAND", subType: "MATERIAL", rarity: "COMMON", count: 10, name: "Gaffer Tape",
        materialType: "Wrapping", value: 8
    },

    {type: "FAVOUR", rarity: "COMMON", count: 10, name: "Here, I found this!",
        ability: "Take 1 contraband, put it in your hand"
    },
    {type: "FAVOUR", rarity: "COMMON", count: 10, name: "Got you something!",
        ability: "Take 2 contraband, put them in your hand"
    },
    {type: "FAVOUR", rarity: "RARE", count: 5, name: "This is my friend...",
        ability: "Take 1 favour and 1 contraband, put them in your hand"
    },
    {type: "FAVOUR", rarity: "COMMON", count: 10, name: "Run!",
        ability: "Draw 3 cards"
    }
];
