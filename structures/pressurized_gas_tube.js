export const pressurized_gas_tube = {
    id: "pressurized_gas_tube",
    label: "Pressurized Gas Tube",
    type: "logistics",
    requires: { item: "steel_plate", quantity: 2, item2: "rubber", quantity2: 2 },
    allows: ["oxygen_gas", "hydrogen_gas", "methane_gas", "helium_gas"],
    desc: "Reinforced tubing designed to handle high-pressure gas transfer without leaking."
};
