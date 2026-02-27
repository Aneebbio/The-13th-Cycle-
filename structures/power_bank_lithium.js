export const power_bank_lithium = {
    id: "power_bank_lithium",
    label: "Lithium Power Bank",
    type: "storage",
    requires: { 
        item1: "lithium_ion_battery", quantity1: 8, 
        item2: "steel_plate", quantity2: 4,
        item3: "basic_circuit", quantity3: 2
    },
    storage_capacity: 8000,
    desc: "Advanced energy storage unit with smart charge controllers."
};
