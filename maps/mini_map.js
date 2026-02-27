export const mini_map_ui = {
    id: "ui_minimap",
    template: `
        <div class="minimap-container">
            <div class="coords">X: <span id="curX">0</span> | Y: <span id="curY">0</span></div>
            <div class="sector-name" id="sectorName">Deep Space</div>
            <canvas id="miniGrid"></canvas>
        </div>
    `,
    css: `
        .minimap-container { border: 2px solid cyan; background: #001111; padding: 10px; font-family: 'Courier'; }
        .coords { color: #00ffff; font-weight: bold; }
    `
};
