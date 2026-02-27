export const power_transformer = {
    id: "power_transformer",
    label: "Step-Down Transformer",
    type: "power_logic",
    requires: { 
        item1: "transformer_coil", quantity1: 2, 
        item2: "steel_beam", quantity2: 1,
        item3: "capacitor", quantity3: 4
    },
    input_limit: 5000, 
    output_limit: 500,
    desc: "Converts high-voltage power from the reactor into safe levels for your basic structures."
};
