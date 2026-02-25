// finale.js
import { Whisper } from './whisper.js';

export const Finale = {
    checkInfluence(rank) {
        if (rank <= 5) {
            document.body.classList.add('corrupted');
            Whisper.say("We are becoming one...", 10);
        }
    }
};
