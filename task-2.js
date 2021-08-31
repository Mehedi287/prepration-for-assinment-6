const frind = {
    name: 'hasan',
    address: { vill: 'shuratuli', po: 'morjal' },
    favouriteGame: ['cricket', 'football', 8, , 13],
    tret: function () {
        this.name = this.name
        return this.name;
    }
}
const string = `my name is ${frind.name} my favourite game is ${frind.favouriteGame[1]} my village name is ${frind.address.vill}`;
console.log(string);