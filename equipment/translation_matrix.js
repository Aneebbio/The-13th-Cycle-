export const translation_matrix = {
    id: "translation_matrix",
    label: "Ancient Translation Matrix",
    type: "accessory",
    slot: "head",
    requires: { 
        item1: "ancient_fragment", quantity1: 3, 
        item2: "advanced_processor", quantity2: 1 
    },
    ability: "decode_ancient_terminals",
    desc: "A visor that overlays modern data onto ancient glyphs. Required to set Portal destinations."
};
