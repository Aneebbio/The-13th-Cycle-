export const visibility_settings = {
    default_state: "hidden", // Tiles start black
    scan_range: 2,           // How many tiles you can see around you
    unlocked_tiles: ["0,0"], // The starting base is always visible
    
    types: {
        hidden: { color: "#000000", opacity: 1.0 },
        scanned: { color: "#1a1a2e", opacity: 0.5 }, // Dimly lit
        active: { color: "#00ffff", opacity: 0.0 }   // Fully visible
    }
};
