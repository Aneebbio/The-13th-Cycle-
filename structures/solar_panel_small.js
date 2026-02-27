export const solar_panel_basic = {
    id: "solar_panel_basic",
    label: "Fixed Solar Panel",
    type: "generator",
    requires: { 
        item1: "silicon_wafer", quantity1: 2, 
        item2: "glass_sheet", quantity2: 2,
        item3: "copper_wire", quantity3: 4
    },
    output: { power: 40 }, // Low output, stationary
    desc: "A basic photovoltaic array. Simple to build, but loses power as the sun moves."
};
