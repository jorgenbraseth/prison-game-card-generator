var source = document.getElementById("person-template").innerHTML;
var template = Handlebars.compile(source);

var generatedByRarity = CARDS.map((card) => {
    if(!card.count){
        switch (card.rarity){
            case "COMMON":
                card.count = 4;
                break;
            case "UNCOMMON":
                card.count = 2;
                break;
            case "RARE":
                card.count = 1;
                break;
        }
    }

    var cardAttribs = [];
    cardAttribs.push(card.type.toLowerCase());
    if(card.subType){cardAttribs.push(card.subType.toLowerCase())}

    card.img = cardAttribs.join("_");

    // return card;
    var cards = [];
    for (var i = 0; i < card.count; i++) {
        cards.push(card);
    }
    return cards;
});
var flatMapped = [].concat.apply([], generatedByRarity)
flatMapped.forEach((card) => {
    var rendered = template(card);

    document.write(rendered
        .replace("{power}","<span class='icon power'></span>")
        .replace("{cigg}","<span class='icon cigg'></span>")
    )
});