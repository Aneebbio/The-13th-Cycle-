export const guardian_defense = {
    id: "guardian_defense",
    label: "Security Protocol 00",
    type: "combat_event",
    trigger: "on_obelisk_activation",
    enemy: {
        name: "Void Sentinel",
        health: 500,
        damage: 40
    },
    failure_penalty: { break_equipment: "hand_slot" },
    desc: "The ground shakes as a dormant defense unit rises from the dust. It does not recognize your bio-signature."
};
