export const battery_rack_small = {
    id: "battery_rack_small",
    label: "Small Battery Rack",
    type: "storage",
    requires: { 
        item1: "lead_acid_battery", quantity1: 4, 
        item2: "iron_ingot", quantity2: 2,
        item3: "copper_wire", quantity3: 5
    },
    storage_capacity: 400, // Total energy held
    desc: "A basic metal frame holding lead-acid batteries for night-time power."
};
