export const dust_storm = {
    id: "dust_storm",
    label: "Electro-Static Dust Storm",
    type: "environmental",
    trigger_chance: 0.1, // 10% chance per movement
    effects: {
        oxygen_drain: 2.0, // Drains oxygen 2x faster
        visibility: -5     // Shrinks the scanner range
    },
    desc: "Red dust clogs your filters and static electricity jams your sensors."
};
