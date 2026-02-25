export const Manifest = {
    planets: {
        shack: { name: "The Shack", ores: ["memory"], theme: "theme-shack" },
        earth: { name: "Earth", ores: ["iron", "copper"], theme: "theme-earth" },
        moon: { name: "The Moon", ores: ["iron", "helium3"], theme: "theme-moon" },
        mars: { name: "Mars", ores: ["titanium", "ancient_gears"], theme: "theme-mars" },
        sun: { name: "The Sun", ores: ["star_plasma"], theme: "theme-sun" },
        void: { name: "The Black Hole", ores: ["nothingness"], theme: "theme-void" }
    },
    blueprints: {
        starter_drill: { name: "Starter Drill", cost: { memory: 10 }, type: "drill" },
        nomad_ship: { name: "The Nomad (Ship)", cost: { iron: 100, copper: 50 }, unlocks: "moon" },
        vanguard_ship: { name: "The Vanguard", cost: { titanium: 500, helium3: 100 }, unlocks: "mars" },
        icarus_ship: { name: "The Icarus", cost: { ancient_gears: 20, titanium: 1000 }, unlocks: "sun" },
        void_shroud: { name: "The Shroud", cost: { star_plasma: 5000 }, unlocks: "void" }
    }
};
