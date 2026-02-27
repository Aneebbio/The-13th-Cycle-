export const windmill_advanced = {
    id: "windmill_advanced",
    label: "Advanced Kinetic Turbine",
    type: "generator",
    requires: { 
        item1: "steel_gear", quantity1: 4, 
        item2: "aluminum_plate", quantity2: 6,
        item3: "basic_circuit", quantity3: 2
    },
    output: { power: 150 },
    efficiency: "high",
    desc: "Uses lightweight materials and computer-aligned blades to triple power output."
};
