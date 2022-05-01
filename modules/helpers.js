const helpers = {
    getPhrase: async function getPhrase() {
        const response = await fetch(`https://corporatebs-generator.sameerkumar.website/`);
        const result = await response.json();
        return result.phrase;
    },
    removePhrase: function removePhrase(phrase, phrases, setPhrases) {
        const updatePhrases = phrases.filter((ph) => ph !== phrase);
        setPhrases(updatePhrases);
    },
    checkValidEmail: function checkValidEmail(email) {
        if (email.includes("@") && email.length > 2) {
            return true
        }
        return false
    },
    checkValidPassword: function checkValidPassword(password) {
        if (password.length > 2) {
            return true
        }
        return false
    }
};

export default helpers;
