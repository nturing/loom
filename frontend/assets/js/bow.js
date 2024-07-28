// Function to preprocess text
function preprocessText(text) {
    return text.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/);
}

// Function to create BoW
function createBoW(texts) {
    const vocabulary = new Set();
    const bowData = [];

    texts.forEach(text => {
        const tokens = preprocessText(text);
        tokens.forEach(token => vocabulary.add(token));
    });

    const vocabArray = Array.from(vocabulary);
    texts.forEach(text => {
        const tokens = preprocessText(text);
        const counter = {};
        tokens.forEach(token => {
            if (counter[token]) {
                counter[token]++;
            } else {
                counter[token] = 1;
            }
        });
        const bowVector = vocabArray.map(word => counter[word] || 0);
        bowData.push(bowVector);
    });

    return { vocabulary: vocabArray, bowData };
}

// Function to update visualization
function updateVisualization() {
    const textInput = document.getElementById('textInput').value.split('\n').filter(line => line.trim() !== '');
    if (textInput.length === 0) {
        alert('Please enter some text.');
        return;
    }

    const { vocabulary, bowData } = createBoW(textInput);
    const wordFrequencies = vocabulary.map((word, index) => ({
        word,
        frequency: bowData.reduce((sum, vec) => sum + vec[index], 0)
    }));

    wordFrequencies.sort((a, b) => b.frequency - a.frequency);

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const x = d3.scaleBand()
        .domain(wordFrequencies.map(d => d.word))
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, d3.max(wordFrequencies, d => d.frequency)])
        .nice()
        .range([height, 0]);

    d3.select("#chart").selectAll("*").remove(); // Clear previous chart

    const svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    svg.selectAll(".bar")
        .data(wordFrequencies)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.word))
        .attr("y", d => y(d.frequency))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.frequency));

    svg.append("g")
        .attr("class", "axis x-axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x))
      .selectAll("text")
        .attr("class", "axis-label")
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(45)")
        .style("text-anchor", "start");

    svg.append("g")
        .attr("class", "axis y-axis")
        .call(d3.axisLeft(y));
}
