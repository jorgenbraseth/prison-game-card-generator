var source = document.getElementById("person-template").innerHTML;
var template = Handlebars.compile(source);

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var generatedByRarity = CARDS.map((card) => {
// var generatedByRarity = shuffleArray(CARDS).map((card) => {
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