document.getElementById('spinButton').addEventListener('click', function() {
    const outcomes = ['🍒', '🍋', '🍊', '🍉', '🍇'];
    const result = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * outcomes.length);
        result.push(outcomes[randomIndex]);
    }
    document.getElementById('result').innerText = result.join(' | ');
});
