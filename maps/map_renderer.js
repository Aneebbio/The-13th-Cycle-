import { icon_player } from './symbols.js';
// ... inside your map_renderer object ...

render() {
    const container = document.getElementById('map-container');
    if (!container) return;
    container.innerHTML = '';

    // Draw Landmarks
    map_layout.landmarks.forEach(node => {
        if (node.is_visible || player_state.discovered_nodes.includes(node.id)) {
            this.createNodeElement(node, container);
        }
    });

    // DRAW PLAYER POSITION
    const playerMarker = document.createElement('div');
    playerMarker.className = 'map-node player-marker';
    playerMarker.style.left = `${player_state.position.x}%`;
    playerMarker.style.top = `${player_state.position.y}%`;
    playerMarker.style.position = 'absolute';
    playerMarker.style.zIndex = '10'; // Keep player on top
    playerMarker.innerHTML = icon_player;
    container.appendChild(playerMarker);
}
