export const gate_activation = {
    id: "gate_activation",
    label: "Inputting Coordinates",
    requires_equipment: "translation_matrix",
    check_logic: {
        fragments_found: "count(address_fragment)",
        needed: 3
    },
    outcomes: {
        success: "Unlock: map_layout.js/the_13th_gate",
        partial: "Portal unstable. Destination: Random Tile",
        fail: "Coordinates incomplete. Portal remains dormant."
    },
    desc: "The rings begin to rotate. You must align the three glyphs to stabilize the wormhole."
};
