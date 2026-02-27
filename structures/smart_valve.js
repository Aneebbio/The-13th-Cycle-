export const smart_valve = {
    id: "smart_valve",
    label: "Logic-Gated Valve",
    type: "logistics_fluid",
    requires: { 
        item1: "transistor", quantity1: 4, 
        item2: "fluid_pipe_iron", quantity2: 1,
        item3: "capacitor", quantity3: 1
    },
    allows: ["all_liquids", "all_gases"],
    desc: "A motorized valve that can be set to only allow specific fluids (like Petrol) to pass through."
};
