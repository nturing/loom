/**
 * Cleans text data by performing various operations.
 * @param {string} text - The text to be cleaned.
 * @returns {string} - The cleaned text.
 */
const cleanTextData = (text) => {
    // Convert text to lowercase
    text = text.toLowerCase();
    
    // Remove extra whitespace
    text = text.replace(/\s+/g, ' ').trim();
    
    // Remove special characters (keep only alphanumeric and spaces)
    text = text.replace(/[^a-z0-9\s]/g, '');
    
    // Replace empty or missing text with "N/A"
    if (!text) {
        text = 'N/A';
    }

    return text;
};

module.exports = { cleanTextData };
