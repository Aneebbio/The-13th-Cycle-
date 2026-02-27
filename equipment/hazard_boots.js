export const hazard_boots = {
    id: "hazard_boots",
    label: "Hazard Environment Boots",
    type: "armor",
    slot: "feet",
    requires: { 
        item1: "rubber", quantity1: 8, 
        item2: "steel_plate", quantity2: 2 
    },
    bonus: { movement_speed: +1.2, hazard_resistance: "20%" },
    durability: 200,
    desc: "Thick rubber soles and steel plating protect your feet from sharp scrap and hot vents."
};
