// index.js
const { cleanData } = require('./clean');
const { createModel } = require('./model');
const { tokenizeData } = require('./tokenizer');
const { vectorizedData } = require('./vectorizer');

/**
 * Function to process data with data engineering pipeline mechanism
 * @param {*} rawData -- raw data can be static data, stream data or audio data
 * @returns 
 */
function processData(rawData) {
    let cleanedData = cleanData(rawData);
    let tokenizedData = tokenizeData(cleanedData);
    let vectorizedData = vectorizeData(tokenizedData);
    let model = createModel(vectorizedData);
    return model;
}

/**
 * Visualize Data function 
 * @param {*} data -- cleaned and tokenized data for visualization
 */
function visualizeData(data) {
    // Implement your data visualization logic here
    console.log('Visualizing data:', data);
}

module.exports = {
    processData,
    visualizeData
};
