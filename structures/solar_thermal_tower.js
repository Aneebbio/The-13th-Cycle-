export const solar_thermal_tower = {
    id: "solar_thermal_tower",
    label: "Solar Thermal Tower",
    type: "advanced_generator",
    requires: { 
        item1: "steel_beam", quantity1: 10, 
        item2: "glass_sheet", quantity2: 20, // Used for mirrors
        item3: "reinforced_tank", quantity3: 1 
    },
    input: { item: "purified_water", rate: 5 },
    output: { power: 500, byproduct: "steam" },
    desc: "A massive mirror array that boils water to turn high-pressure turbines."
};
