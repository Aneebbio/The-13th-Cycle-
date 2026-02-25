export const Whisper = {
    say(text) {
        const box = document.getElementById('infinity-whisper');
        const display = document.getElementById('whisper-text');
        if (!box || !display) return;
        display.innerText = text;
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 5000);
    }
};
