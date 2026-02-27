export const abandoned_cache = {
    id: "abandoned_cache",
    label: "Old Supply Crate",
    type: "discovery",
    trigger_type: "on_tile_reveal",
    loot_table: [
        { item: "copper_wire", qty: 10, chance: 0.5 },
        { item: "basic_circuit", qty: 1, chance: 0.1 }
    ],
    desc: "A rusted box from a previous cycle. It's dented, but there's stuff inside."
};
