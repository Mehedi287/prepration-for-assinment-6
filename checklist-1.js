const frind = {
    name: 'hasan',
    address: { vill: 'shuratuli', po: 'morjal' },
    favouriteGame: ['cricket', 'football', 8, , 13],
    tret: function () {
        this.name = this.name
        return this.name;
    }
}
console.log(frind.tret());
