var source = document.getElementById("person-template").innerHTML;
var template = Handlebars.compile(source);

var generatedByRarity = CARDS.map((card) => {
    if(card.count){
        var cards = [];
        for (var i = 0; i < card.count; i++) {
            cards.push(card);
        }
        return cards;
    }
    return card;
    switch (card.rarity){
        case "COMMON":
            return [card,card,card,card];
        case "UNCOMMON":
            return [card,card]
        case "RARE":
            return [card]
    }
});
var flatMapped = [].concat.apply([], generatedByRarity)
flatMapped.forEach((card) => {
    document.write(template(card))
});