import { map_layout } from './map_layout.js';
import { player_state } from '../player_state.js';

export const map_renderer = {
    render() {
        const container = document.getElementById('map-container');
        if (!container) return;

        // Clear the scanner before redrawing
        container.innerHTML = '';

        map_layout.landmarks.forEach(node => {
            // Check if player has discovered the location or if it's always visible
            if (node.is_visible || player_state.discovered_nodes.includes(node.id)) {
                this.createNodeElement(node, container);
            }
        });
    },

    createNodeElement(node, container) {
        const el = document.createElement('div');
        el.className = 'map-node';
        el.id = `node-${node.id}`;
        
        // Positioning: Convert grid coordinates to percentages
        el.style.left = `${node.x}%`;
        el.style.top = `${node.y}%`;
        el.style.position = 'absolute';
        el.style.transform = 'translate(-50%, -50%)'; // Center icon on point

        // Inject the SVG icon from symbols.js
        el.innerHTML = node.icon;

        // Add interaction
        el.title = node.name;
        el.onclick = () => this.handleNodeClick(node);

        container.appendChild(el);
    },

    handleNodeClick(node) {
        // Logic for movement or interaction
        console.log(`Analyzing: ${node.name}`);
        document.getElementById('event-log').innerHTML = `> Targeting: ${node.name}...`;
        
        // Update player position in state
        player_state.position.x = node.x;
        player_state.position.y = node.y;
    }
};
