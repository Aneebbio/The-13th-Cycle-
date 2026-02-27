export const concrete_slab = {
    id: "concrete_slab",
    label: "Reinforced Concrete Slab",
    type: "structural_product",
    requires: { 
        item1: "cement_bag_full", quantity1: 1, 
        item2: "sand", quantity2: 2,
        item3: "gravel", quantity3: 2,
        item4: "purified_water", quantity4: 1,
        item5: "steel_beam", quantity5: 1 // For reinforcement (Rebar)
    },
    desc: "A heavy, cured block of reinforced concrete. The standard foundation for all station structures."
};
