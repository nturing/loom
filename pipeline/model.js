const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

// Sample texts
const texts = [
    "I love programming",
    "Programming is fun"
];

/**
 * Tokenizes the given text by converting it to lowercase and splitting it into tokens.
 * @param {string} text - The text to be tokenized.
 * @returns {Array<string>} - An array of tokens extracted from the text.
 */
// Step 1: Tokenization
function tokenizeText(text) {
    return tokenizer.tokenize(text.toLowerCase());
}

/**
 * Builds a vocabulary from an array of texts by tokenizing each text and adding unique tokens to a set.
 * @param {Array<string>} texts - An array of texts to build the vocabulary from.
 * @returns {Array<string>} - An array of unique tokens representing the vocabulary.
 */
// Step 2: Build Vocabulary
function buildVocabulary(texts) {
    const vocab = new Set();
    texts.forEach(text => {
        const tokens = tokenizeText(text);
        tokens.forEach(token => vocab.add(token));
    });
    return Array.from(vocab);
}

/**
 * Vectorizes the given text based on the provided vocabulary.
 * @param {string} text - The text to be vectorized.
 * @param {Array<string>} vocab - An array of unique tokens representing the vocabulary.
 * @returns {Array<number>} - An array representing the vectorized form of the text.
 */
// Step 3: Vectorize Text
function vectorizeText(text, vocab) {
    const tokens = tokenizeText(text);
    const vector = new Array(vocab.length).fill(0);
    
    tokens.forEach(token => {
        const index = vocab.indexOf(token);
        if (index !== -1) {
            vector[index] += 1; // You can use frequency or binary
        }
    });
    
    return vector;
}

/**
 * Creates a Bag of Words (BoW) pipeline to process an array of texts.
 * @param {Array<string>} texts - An array of texts to be processed.
 */
// Step 4: Create BoW Pipeline
const vocab = buildVocabulary(texts);
console.log('Vocabulary:', vocab);

texts.forEach(text => {
    const vector = vectorizeText(text, vocab);
    console.log(`Vector for "${text}":`, vector);
});
