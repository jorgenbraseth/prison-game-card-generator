const CARDS = [
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", count: 10, faction: "UNALIGNED", name: "Buddy", rank: 1, beat: 3},

    {type: "PERSON", subType: "INMATE", rarity: "COMMON", faction: "UNALIGNED", name: "Fixer", rank: 5, beat: 5, buy: 15, loot:"2 contraband",
        ability:"<strong>Play this inmate as a favour.</strong><br/><br/>Pay 10 ciggs: draw 5 contraband."
    },

    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Redneck", faction: "WHITE", rank: 1, buy: 3, beat: 4, loot:"1 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Skinhead", faction: "WHITE", rank: 3, buy: 5, beat: 7, loot:"2 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Boot boy", faction: "WHITE", rank: 5, buy: 10, beat: 12, loot:"4 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "UNCOMMON", name: "Old Nazi", faction: "WHITE", rank: 5, buy: 10, beat: 12, loot: "1 Favour, 1 contraband",
        ability: "<strong>Leader 1</strong><br/>You may have 1 <strong>White</strong> inmate join a fight where this inmate is already fighting. Pay the inmate's cost normally."
    },
    {type: "PERSON", subType: "INMATE", rarity: "RARE", name: "Siegfried Kankerhoor", faction: "WHITE", rank: 5, buy: 15, beat: 5, loot: "1 Favour, 1 contraband",
        ability: "When this inmate starts or joins a fight, show the top 5 cards of your deck. Add any White inmates to the fight for free. Put the rest of the cards in your spent pile."
    },

    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Black 1", faction: "BLACK", rank: 1, buy: 3, beat: 4, loot:"1 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Black 2", faction: "BLACK", rank: 3, buy: 5, beat: 7, loot:"2 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Black 3", faction: "BLACK", rank: 5, buy: 10, beat: 12, loot:"4 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "UNCOMMON", name: "Beret worthy", faction: "BLACK", rank: 5, buy: 10, beat: 12, loot: "1 Favour, 1 contraband",
        ability: "<strong>Leader 1</strong><br/>You may have 1 <strong>Black</strong> inmate join a fight where this inmate is already fighting. Pay the inmate's cost normally."
    },
    {type: "PERSON", subType: "INMATE", rarity: "RARE", name: "Doctor S", faction: "BLACK", rank: 5, buy: 15, beat: 10, loot: "1 Favour, 1 contraband",
        ability: "This inmate has double power when fighting White supremacist inmates."
    },

    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Asian 1", faction: "ASIAN", rank: 1, buy: 3, beat: 4, loot:"1 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Asian 2", faction: "ASIAN", rank: 3, buy: 5, beat: 7, loot:"2 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Asian 3", faction: "ASIAN", rank: 5, buy: 10, beat: 12, loot:"4 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "UNCOMMON", name: "Asian Leader", faction: "ASIAN", rank: 5, buy: 10, beat: 12, loot: "1 Favour, 1 contraband",
        ability: "<strong>Leader 1</strong><br/>You may have 1 <strong>Asian</strong> inmate join a fight where this inmate is already fighting. Pay the inmate's cost normally."
    },
    {type: "PERSON", subType: "INMATE", rarity: "RARE", name: "Ken Lee", faction: "ASIAN", rank: 5, buy: 15, beat: 10, loot: "1 Favour, 1 contraband",
        ability: "When this inmate joins a fight, draw 2 cards."
    },

    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Latino 1", faction: "LATINO", rank: 1, buy: 3, beat: 4, loot:"1 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Latino 2", faction: "LATINO", rank: 3, buy: 5, beat: 7, loot:"2 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Latino 3", faction: "LATINO", rank: 5, buy: 10, beat: 12, loot:"4 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "UNCOMMON", name: "Latino Leader", faction: "LATINO", rank: 5, buy: 10, beat: 12, loot: "1 Favour, 1 contraband",
        ability: "<strong>Leader 1</strong><br/>You may have 1 <strong>Latino</strong> inmate join a fight where this inmate is already fighting. Pay the inmate's cost normally."
    },
    {type: "PERSON", subType: "INMATE", rarity: "RARE", name: "Latino Special", faction: "LATINO", rank: 5, buy: 15, beat: 10, loot: "1 Favour, 1 contraband",
        ability: "Other players can't play card in a fight where this inmate is fighting."
    },

    { type: "PERSON", subType: "GUARD", rarity: "RARE", name: "Guard 2", buy: 15,
        additionalCost: "Frame 2 inmates", ability: "Take 5 contraband. Draw 1 card."
    },
    {type: "PERSON", subType: "GUARD", rarity: "RARE", name: "Guard 1", buy: 5,
        additionalCost: "Frame 1 inmate", ability: "The effect of all items are removed from the current fight."
    },
    {type: "PERSON", subType: "GUARD", rarity: "RARE", name: "Ku Klux Guard", buy: 10,
        additionalCost: "Frame 1 non-white inmate", ability: "Draw a favour. Gain 1 White popularity."
    },
    {type: "PERSON", subType: "GUARD", rarity: "RARE", name: "Malcom Guard", buy: 10,
        additionalCost: "Frame 1 white inmate", ability: "Draw a favour. Gain 1 Black popularity."
    },

    {type: "CONTRABAND", subType: "VALUABLE", rarity: "COMMON", count: 20, name: "Cigarette", value: 1},

    {type: "CONTRABAND", subType: "VALUABLE", rarity: "COMMON", name: "Half a pack", value: 5},

    {type: "CONTRABAND", subType: "VALUABLE", rarity: "UNCOMMON", name: "Full pack", value: 10},
    {type: "CONTRABAND", subType: "VALUABLE", rarity: "RARE", name: "Joint", value: 20},

    {type: "CONTRABAND", subType: "PLAN", rarity: "COMMON", name: "Plan: Shank", value: 10,
        parts: "<strong>Sharp Edge</strong> ,<strong>Wrapping</strong>",
        assemble: "Take 1 <strong>Shank</strong>. Put it into your hand"
    },
    {type: "CONTRABAND", subType: "WEAPON", rarity: "COMMON", name: "Shank", value: 20,
        ability: "Add (5) to an one inmate's power until end of the current fight."
    },
    {type: "CONTRABAND", subType: "MATERIAL", rarity: "COMMON", name: "Piece of Glass",
        materialType: "Sharp Edge",
        ability: "Add (5) to one inmate's power until end of the current fight", value: 10
    },
    {type: "CONTRABAND", subType: "MATERIAL", rarity: "COMMON", name: "Nylon Stocking",
        materialType: "Wrapping",
    },
    {type: "CONTRABAND", subType: "MATERIAL", rarity: "COMMON", name: "Gaffer Tape",
        materialType: "Wrapping",
    },

    {type: "FAVOUR", rarity: "COMMON", name: "Here, I found this!",
        ability: "Take 1 contraband"
    },
    {type: "FAVOUR", rarity: "COMMON", name: "Got you something!",
        ability: "Take 2 contraband"
    },
    {type: "FAVOUR", rarity: "RARE", name: "This is my friend...",
        ability: "Take 1 favour"
    },
    {type: "FAVOUR", rarity: "COMMON", name: "Run!",
        ability: "Draw 2 cards"
    }
];
