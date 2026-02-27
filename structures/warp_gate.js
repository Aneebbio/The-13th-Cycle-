export const warp_gate = {
    id: "warp_gate",
    label: "Warp Gate Terminal",
    type: "teleporter",
    requires: { 
        item1: "super_capacitor", quantity1: 5, 
        item2: "quantum_chip", quantity2: 2,
        item3: "gold_wire", quantity3: 50
    },
    power_draw: 1000, // Very high power cost to keep the portal open
    function: "instant_travel",
    destination_node: null, // Set by player in the UI
    desc: "A massive ring that folds space-time. Allows instant travel to any other synced Warp Gate."
};
