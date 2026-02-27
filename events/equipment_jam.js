export const equipment_jam = {
    id: "equipment_jam",
    label: "Mechanical Jam",
    type: "malfunction",
    trigger_condition: "durability_below_20",
    effect: {
        action_fail_chance: 0.5, // 50% chance your tool won't work
        message: "Your tool is sparking and rattling. It needs repairs!"
    },
    desc: "The wear and tear of the wasteland has finally caught up with your equipment."
};
