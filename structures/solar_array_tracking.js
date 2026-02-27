export const solar_array_tracking = {
    id: "solar_array_tracking",
    label: "Dual-Axis Solar Array",
    type: "generator",
    requires: { 
        item1: "solar_panel_basic", quantity1: 2, 
        item2: "electromagnet", quantity2: 2,
        item3: "basic_circuit", quantity3: 1
    },
    output: { power: 120 }, // High output due to tracking
    desc: "Motorized panels that follow the sun's trajectory across the sky."
};
