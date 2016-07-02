const CARDS = [
    {
        rarity: "COMMON",
        type: "PERSON",
        subType:"INMATE",
        name:"Buddy",

        pay: 0,
        beat: 0,
        force: 3,
        loot: null,
        ability: null
    },{
        rarity: "COMMON",
        type: "PERSON",
        subType:"INMATE",
        name:"Nazi Wannabe",
        faction: "White supremacists",

        pay: 2,
        beat: 3,
        force: 3,
        loot: "1 Contraband",
        ability: "-"
    },{
        rarity: "UNCOMMON",
        type: "PERSON",
        subType:"INMATE",
        name:"Old Nazi",
        faction: "White supremacists",

        pay: 8,
        beat: 10,
        force: 10,
        loot: "2 Contraband",
        ability: "Add any number of white supremacists to a fight where this inmate is fighting."
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
        effect: "Place a [Sharp Edge] and a [Wrapping] on this card: Destroy this card and all cards placed on it -> Put a [Shank] into your hand"
    },{
        rarity: "UNCOMMON",
        type: "CONTRABAND",
        subType:"WEAPON",
        name:"Shank",
        value: 20,
        effect: "Add (5) to an one inmate's power until end of the current fight."
    },{
        rarity: "UNCOMMON",
        type: "CONTRABAND",
        subType: "MATERIAL",
        name: "Piece of Glass",
        effect:" [Sharp Edge] - Add (2) to one inmate's power until end of the current fight",
        value: 5
    },{
        rarity: "UNCOMMON",
        type: "CONTRABAND",
        subType: "MATERIAL",
        name: "Nylon Stocking",
        effect:" [Wrapping]",
        value: 3
    }


];