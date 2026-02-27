export const ancient_obelisk = {
    id: "ancient_obelisk",
    label: "Monolith Alpha",
    type: "ancient_structure",
    x: 88, y: 12, // Far from the starting base
    is_visible: false,
    requires_to_activate: { 
        item1: "super_capacitor", quantity1: 5, 
        item2: "heavy_water", quantity2: 50 
    },
    reward: "blueprint_infinity_core",
    desc: "A towering spire of unknown alloy. It hums with a frequency that matches the 13th Pulse."
};
