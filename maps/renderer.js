export const map_renderer = {
    render(playerCoord, layout) {
        console.log(`Centering map on: ${playerCoord.x}, ${playerCoord.y}`);
        
        layout.landmarks.forEach(node => {
            if (this.isWithinScannerRange(playerCoord, node)) {
                this.drawIcon(node.x, node.y, node.icon, node.name);
            } else {
                this.drawFog(node.x, node.y);
            }
        });
    },

    isWithinScannerRange(p, n) {
        // Distance formula logic
        const dist = Math.sqrt(Math.pow(n.x - p.x, 2) + Math.pow(n.y - p.y, 2));
        return dist <= 5; // Scan range of 5 tiles
    }
};
