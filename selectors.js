const getUserFirstLanguage = (userLanguage) => userLanguage.split(',')[0] || '';
const getUserPlatform = (userAgent) => (userAgent.split(')')[0] || '(') + ')';

module.exports = {
    getUserFirstLanguage,
    getUserPlatform,
}