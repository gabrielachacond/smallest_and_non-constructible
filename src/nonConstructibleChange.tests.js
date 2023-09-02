const { debug } = require("console");
const { nonConstructibleChange } = require("./nonConstructibleChange");

debug
test1 ('Return empty position if not found', ()=>{
    const result = 4;
    expect(nonConstructibleChange([1,2,5])).toStrictEqual(result)
});

debug
test2 ('Return empty position if not found', ()=>{
    const result = 20;
    expect(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])).toStrictEqual(result)
});
