export const travel_cost = {
    on_foot: { oxygen: 5, calorie: 10, speed: 1 },
    rover_vehicle: { fuel: 2, oxygen: 1, speed: 5 }, // Faster, costs fuel
    
    terrains: {
        flat_ground: { multiplier: 1.0 },
        mountain_pass: { multiplier: 2.5 }, // Costs more to cross
        vacuum_void: { multiplier: 5.0, requires: "space_suit" }
    }
};
