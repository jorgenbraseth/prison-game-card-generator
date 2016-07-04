const CARDS = [
    {
        rarity: "COMMON",
        type: "PERSON",
        subType:"INMATE",
        name:"Buddy",
        faction: "UNALIGNED",

        buy: 0,
        beat: 2
    },{
        rarity: "COMMON",
        type: "PERSON",
        subType:"INMATE",
        name:"Nazi Wannabe",
        faction: "WHITE",

        buy: 2,
        beat: 3,
        loot: "1 Contraband",
    },{
        rarity: "UNCOMMON",
        type: "PERSON",
        subType:"INMATE",
        name:"Old Nazi",
        faction: "WHITE",

        buy: 8,
        beat: 10,
        loot: "2 Contraband",
        ability: "Add any number of white supremacists to a fight where this inmate is fighting."
    },
    {
        rarity: "RARE",
        type: "PERSON",
        subType:"INMATE",
        name:"Ken Lee",
        faction: "ASIAN",

        buy: 8,
        beat: 8,
        loot: "3 Contraband",
        ability: "Add any number of asian inmates to a fight where this inmate is fighting."
    },
    {
        rarity: "UNCOMMON",
        type: "PERSON",
        subType:"INMATE",
        name:"Gang Banger",
        faction: "BLACK",

        buy: 6,
        beat: 5,
    },
    {
        rarity: "RARE",
        type: "CONTRABAND",
        subType:"VALUABLE",
        name:"Joint",
        value: 20
    },{
        rarity: "RARE",
        type: "CONTRABAND",
        subType:"VALUABLE",
        name:"Pack of Cigarettes",
        value: 10
    },{
        rarity: "COMMON",
        type: "CONTRABAND",
        subType:"VALUABLE",
        name:"Cigarette",
        value: 1
    },{
        rarity: "UNCOMMON",
        type: "CONTRABAND",
        subType:"PLAN",
        name:"Plan: Shank",
        value: 10,
        ability: "Assemble <strong>Sharp Edge</strong> ,<strong>Wrapping</strong>:<br/> Put a <strong>Shank</strong> into your hand"
    },{
        rarity: "UNCOMMON",
        type: "CONTRABAND",
        subType:"WEAPON",
        name:"Shank",
        value: 20,
        ability: "Add (5) to an one inmate's power until end of the current fight."
    },{
        rarity: "UNCOMMON",
        type: "CONTRABAND",
        subType: "MATERIAL",
        name: "Piece of Glass",
        ability:" <strong>Sharp Edge</strong><br/><br/> Add (2) to one inmate's power until end of the current fight",
        value: 5
    },{
        rarity: "UNCOMMON",
        type: "CONTRABAND",
        subType: "MATERIAL",
        name: "Nylon Stocking",
        ability:"<strong>Wrapping</strong>",
        value: 3
    }


];