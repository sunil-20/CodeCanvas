const kitchenSink = {
    favNum: 33,
    isFunny: true,
    colors:['red', 'orange']
};
console.log(kitchenSink["isFunny"]);
console.log(kitchenSink.colors);
kitchenSink.colors.push("Green");
console.log(kitchenSink.colors);
kitchenSink.isFunny = false;
console.log(kitchenSink);