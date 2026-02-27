export const logistics_sorter = {
    id: "logistics_sorter",
    label: "Smart Item Sorter",
    type: "logistics_logic",
    requires: { 
        item1: "basic_circuit", quantity1: 2, 
        item2: "conveyor_belt", quantity2: 1,
        item3: "steel_plate", quantity3: 2
    },
    power_draw: 10,
    logic: "metadata_check", // Checks the resource.id
    desc: "A programmable hub that filters items. Essential for automated steel and concrete production."
};
