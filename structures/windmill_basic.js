export const windmill_basic = {
    id: "windmill_basic",
    label: "Basic Wind Turbine",
    type: "generator",
    requires: { 
        item1: "iron_gear", quantity1: 4, 
        item2: "steel_beam", quantity2: 2,
        item3: "copper_wire", quantity3: 10
    },
    output: { power: 50 }, // Generates 50W
    efficiency: "low",
    desc: "A simple mechanical turbine that converts Earth's wind into low-voltage power."
};
