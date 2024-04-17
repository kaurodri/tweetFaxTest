function filterMessage(txt, keyword, base, database, silence) {

    if (!database[keyword]) {
        return `${keyword} não encontrado.`;
    }
    
    const keywordList = database[keyword];
    const regex = RegExp(`(${keywordList.join("|")})`, 'i');
    
    if (regex.test(txt.toLowerCase()) || keywordList[0] === base) {
        const silenceRegex = RegExp(`(${silence.join("|")})`, 'i');
        return !silenceRegex.test(txt.toLowerCase());
    }
    
    return false;
}
module.exports = filterMessage;