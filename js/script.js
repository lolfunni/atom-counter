function atomCounter(string) {
    function parseNested(str) {
        const stack = [];
        let result = {};
        let currentMap = {};

        for (let i = 0; i < str.length; i++) {
            const char = str[i];

            if (char === '(' || char === '{' || char === '[') {
                stack.push(currentMap);
                currentMap = {};
            } else if (char === ')' || char === '}' || char === ']') {
                const lastMap = stack.pop();
                const multiplier = extractNumber(str, i + 1);
                i += multiplier.length;

                for (const [key, value] of Object.entries(currentMap)) {
                    lastMap[key] = (lastMap[key] || 0) + value * (multiplier || 1);
                }
                currentMap = lastMap;
            } else {
                const atom = extractAtom(str, i);
                const number = extractNumber(str, i + atom.length);
                i += atom.length + number.length - 1;

                currentMap[atom] = (currentMap[atom] || 0) + (number ? parseInt(number) : 1);
            }
        }

        return currentMap;
    }

    function extractAtom(str, index) {
        const match = str.slice(index).match(/([A-Z][a-z]?)/);
        return match ? match[0] : '';
    }

    function extractNumber(str, index) {
        const match = str.slice(index).match(/(\d+)/);
        return match ? match[0] : '';
    }

    function combineCounts(counts) {
        const result = {};
        for (const count of counts) {
            for (const [atom, number] of Object.entries(count)) {
                result[atom] = (result[atom] || 0) + number;
            }
        }
        return result;
    }

    const parsedCounts = [parseNested(string)];
    const totalCounts = combineCounts(parsedCounts);

    function addToHTML(counts) {
        const selector = document.querySelector('#result');
        let result = '';
        for (let key in counts) {
            result += key + ": " + counts[key] + "<br>";
        }
        selector.innerHTML = result;
    }

    addToHTML(totalCounts);
}

let form = document.querySelector('.text');
let input = form.querySelector('.formula');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        atomCounter(input.value);
    }
});
