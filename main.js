const languageRegex = require(`./lib/wordlist.js`);
const badWordsList = require('./lib/badWordsList.json');
function check(word) {
    let regex = new RegExp('\n' + word +'\n');
            if (languageRegex.match(regex)) {
                return true;
            }
    return false;
};
function checkBad(text) {
    const words = text.split(/\s+/);
    for (const word of words) {
        if (badWordsList.includes(word.toLowerCase())) {
            return true;
        }
    }
    return false; 
}

module.exports = { checkBad, check };
