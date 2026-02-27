export const maintenance_depot = {
    id: "maintenance_depot",
    label: "Maintenance Depot",
    type: "utility",
    requires: { 
        item1: "iron_ingot", quantity1: 10, 
        item2: "basic_circuit", quantity2: 2,
        item3: "concrete_slab", quantity3: 5
    },
    power_draw: 50,
    function: "restore_durability",
    cost_per_point: { item: "steel_bolt", quantity: 1 },
    desc: "A specialized station for welding and recalibrating exploration equipment."
};
