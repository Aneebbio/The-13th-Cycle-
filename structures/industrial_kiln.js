export const industrial_kiln = {
    id: "industrial_kiln",
    label: "Industrial Kiln",
    type: "processor",
    requires: { 
        item1: "steel_plate", quantity1: 10, 
        item2: "concrete_slab", quantity2: 4,
        item3: "electromagnet", quantity3: 2
    },
    input: { item: "limestone", rate: 5 },
    output: { item: "cement_dust", rate: 5 },
    power_draw: 200, // Requires heat
    desc: "A massive rotating furnace. Essential for processing limestone, clay, and glass."
};
