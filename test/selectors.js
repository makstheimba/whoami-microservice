const mocha = require('mocha');
const expect = require('chai').expect;
const requestSelectors = require.main.require('selectors');

describe('Request selector', function() {
    describe('#getUserFirstLanguage', function() {
        const requestLanguage = 'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4';
        const userFirstLanguage = requestSelectors.getUserFirstLanguage(requestLanguage);

        it('should return a string', function() {
            expect(userFirstLanguage).to.be.a('string');
        });
        it('should return main user language', function() {
            expect(userFirstLanguage).to.be.equal('ru-RU');
        });
    });

    describe('#getUserPlatform', function() {
        const requestAgent =
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.89 Safari/537.36';
        const userPlatform = requestSelectors.getUserPlatform(requestAgent);

        it('should return a string', function() {
            expect(userPlatform).to.be.a('string');
        });
        it('should return user browser and platform', function() {
            expect(userPlatform).to.be.equal('Mozilla/5.0 (X11; Linux x86_64)')
        });
    })
});
