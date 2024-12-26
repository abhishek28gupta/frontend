document.getElementById('calculate').addEventListener('click', function() {
    const name1 = document.getElementById('name1').value.toLowerCase().replace(/\s/g, '');
    const name2 = document.getElementById('name2').value.toLowerCase().replace(/\s/g, '');

    if (!name1 || !name2) {
        document.getElementById('result').textContent = "Please enter both names!";
        return;
    }

    // Step 1: Remove common letters
    let combined = name1 + name2;
    for (let char of name1) {
        if (name2.includes(char)) {
            combined = combined.replace(char, '').replace(char, '');
        }
    }

    // Step 2: Count remaining letters
    const count = combined.length;

    // Step 3: FLAMES logic
    const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];
    let index = 0;

    while (flames.length > 1) {
        index = (index + count - 1) % flames.length;
        flames.splice(index, 1);
    }

    // Step 4: Display result
    document.getElementById('result').textContent = `The relationship is: ${flames[0]}!`;
});
