// state.js
export const GameState = {
    rank: 13,
    currentPlanet: 'shack',
    inventory: {},
    
    save() {
        localStorage.setItem('InfinityStation_Save', JSON.stringify(this.inventory));
    }
};
