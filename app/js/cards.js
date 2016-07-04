const CARDS = [
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", faction: "UNALIGNED", name: "Buddy", rank: 1, beat: 3},
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", faction: "UNALIGNED", name: "Buddy", rank: 1, beat: 3},
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", faction: "UNALIGNED", name: "Buddy", rank: 1, beat: 3},

    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "White 1", faction: "WHITE", rank: 1, buy: 3, beat: 4, loot:"1 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "White 2", faction: "WHITE", rank: 3, buy: 5, beat: 7, loot:"2 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "White 3", faction: "WHITE", rank: 5, buy: 10, beat: 12, loot:"4 contraband"},
    {
        type: "PERSON", subType: "INMATE", rarity: "UNCOMMON", name: "White Leader", faction: "WHITE", rank: 5, buy: 10, beat: 12, loot: "1 Favour, 1 contraband",
        ability: "<strong>Leader 1</strong><br/>You may have 1 <strong>White</strong> inmate join a fight where this inmate is already fighting. Pay the inmate's cost normally."
    },
    {
        type: "PERSON", subType: "INMATE", rarity: "RARE", name: "White Special", faction: "WHITE", rank: 5, buy: 15, beat: 5, loot: "1 Favour, 1 contraband",
        ability: "When this inmate starts or joins a fight, show the top 5 cards of your deck. Add any White inmates to the fight for free. Put the rest of the cards in your spent pile."
    },

    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Black 1", faction: "BLACK", rank: 1, buy: 3, beat: 4, loot:"1 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Black 2", faction: "BLACK", rank: 3, buy: 5, beat: 7, loot:"2 contraband"},
    {type: "PERSON", subType: "INMATE", rarity: "COMMON", name: "Black 3", faction: "BLACK", rank: 5, buy: 10, beat: 12, loot:"4 contraband"},
    {
        type: "PERSON", subType: "INMATE", rarity: "UNCOMMON", name: "Black Leader", faction: "BLACK", rank: 5, buy: 10, beat: 12, loot: "1 Favour, 1 contraband",
        ability: "<strong>Leader 1</strong><br/>You may have 1 <strong>Black</strong> inmate join a fight where this inmate is already fighting. Pay the inmate's cost normally."
    },
    {
        type: "PERSON", subType: "INMATE", rarity: "RARE", name: "Black Special", faction: "BLACK", rank: 5, buy: 15, beat: 10, loot: "1 Favour, 1 contraband",
        ability: "This inmate has double power when fighting White supremacist inmates."
    },

    {
        type: "PERSON", subType: "GUARD", rarity: "RARE", name: "Guard 1", faction: "GUARD", buy: 5,
        ability: "Additional cost: <strong>Frame 1 inmate.</strong><br/><br/>The effect of all items are removed from the current fight."
    },
    {
        type: "PERSON", subType: "GUARD", rarity: "RARE", name: "Guard 2", faction: "GUARD", buy: 15,
        ability: "Additional cost: <strong>Frame 2 inmates.</strong><br/><br/>Take 5 contraband. Draw 1 card."
    },
    {
        type: "PERSON", subType: "GUARD", rarity: "RARE", name: "Ku Klux Guard", faction: "GUARD", buy: 10,
        ability: "Additional cost: <strong>Frame 1 non-white inmate.</strong><br/><br/>Draw a favour. Gain 1 White popularity."
    },
    {
        type: "PERSON", subType: "GUARD", rarity: "RARE", name: "Malcom Guard", faction: "GUARD", buy: 10,
        ability: "Additional cost: <strong>Frame 1 white inmate.</strong><br/><br/>Draw a favour. Gain 1 Black popularity."
    },



    {type: "CONTRABAND", subType: "CIGGS", rarity: "COMMON", name: "Cigarette", value: 1},
    {type: "CONTRABAND", subType: "CIGGS", rarity: "COMMON", name: "Cigarette", value: 1},
    {type: "CONTRABAND", subType: "CIGGS", rarity: "COMMON", name: "Cigarette", value: 1},
    {type: "CONTRABAND", subType: "CIGGS", rarity: "COMMON", name: "Cigarette", value: 1},

    {type: "CONTRABAND", subType: "CIGGS", rarity: "COMMON", name: "Half a pack", value: 5},

    {type: "CONTRABAND", subType: "CIGGS", rarity: "UNCOMMON", name: "Full pack", value: 10},
    {type: "CONTRABAND", subType: "CIGGS", rarity: "RARE", name: "Joint", value: 20},

];


const CARDS_OLD = [
    {
        rarity: "COMMON",
        type: "PERSON",
        subType: "INMATE",
        name: "Buddy",
        faction: "UNALIGNED",

        buy: 0,
        beat: 2
    }, {
        rarity: "COMMON",
        type: "PERSON",
        subType: "INMATE",
        name: "Nazi Wannabe",
        faction: "WHITE",

        buy: 2,
        beat: 3,
        loot: "1 contraband",
    }, {
        rarity: "UNCOMMON",
        type: "PERSON",
        subType: "INMATE",
        name: "Old Nazi",
        faction: "WHITE",

        buy: 8,
        beat: 10,
        loot: "2 contraband",
        ability: "Add any number of white supremacists to a fight where this inmate is fighting."
    },
    {
        rarity: "RARE",
        type: "PERSON",
        subType: "INMATE",
        name: "Ken Lee",
        faction: "ASIAN",

        buy: 8,
        beat: 8,
        loot: "3 contraband",
        ability: "Add any number of asian inmates to a fight where this inmate is fighting."
    },
    {
        rarity: "UNCOMMON",
        type: "PERSON",
        subType: "INMATE",
        name: "Gang Banger",
        faction: "BLACK",

        buy: 6,
        beat: 5,
    },
    {
        rarity: "RARE",
        type: "CONTRABAND",
        subType: "VALUABLE",
        name: "Joint",
        value: 20
    }, {
        rarity: "RARE",
        type: "CONTRABAND",
        subType: "VALUABLE",
        name: "Pack of Cigarettes",
        value: 10
    }, {
        rarity: "COMMON",
        type: "CONTRABAND",
        subType: "VALUABLE",
        name: "Cigarette",
        value: 1
    }, {
        rarity: "UNCOMMON",
        type: "CONTRABAND",
        subType: "PLAN",
        name: "Plan: Shank",
        value: 10,
        ability: "Assemble <strong>Sharp Edge</strong> ,<strong>Wrapping</strong>:<br/> Put a <strong>Shank</strong> into your hand"
    }, {
        rarity: "UNCOMMON",
        type: "CONTRABAND",
        subType: "WEAPON",
        name: "Shank",
        value: 20,
        ability: "Add (5) to an one inmate's power until end of the current fight."
    }, {
        rarity: "UNCOMMON",
        type: "CONTRABAND",
        subType: "MATERIAL",
        name: "Piece of Glass",
        ability: " <strong>Sharp Edge</strong><br/><br/> Add (2) to one inmate's power until end of the current fight",
        value: 5
    }, {
        rarity: "UNCOMMON",
        type: "CONTRABAND",
        subType: "MATERIAL",
        name: "Nylon Stocking",
        ability: "<strong>Wrapping</strong>",
        value: 3
    }


];