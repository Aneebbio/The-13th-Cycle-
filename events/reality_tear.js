export const reality_tear = {
    id: "reality_tear",
    label: "Space-Time Instability",
    type: "travel_event",
    trigger: "on_teleport",
    chance: 0.05, // 5% chance
    penalty: {
        damage_player: 20,
        misplace_player: { range: 10 } // Drops you 10 tiles away from the gate
    },
    desc: "The portal flickered during transit. You arrived, but your molecules feel... wrong."
};
