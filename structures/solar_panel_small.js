export const solar_panel_small = {
    id: "solar_panel_small",
    label: "Fixed Solar Array",
    type: "generator",
    requires: { 
        item1: "silicon_wafer", quantity1: 4, 
        item2: "glass_sheet", quantity2: 2,
        item3: "copper_wire", quantity3: 5
    },
    output: { power: 80 },
    desc: "A basic photovoltaic panel. Only works during daylight cycles."
};
