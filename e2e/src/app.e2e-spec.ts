import { browser, $, $$ } from 'protractor';

describe('ponyracer App', () => {

  it('should display messages in french', () => {
    browser.get('/');
    const titles = $$('h1');
    expect(titles.get(0).getText()).toEqual('Bienvenue dans Ponyracer', 'simple tag i18n');
    expect(titles.get(1).getText()).toEqual('Bienvenue dans Ponyracer.', 'updated tag i18n');
    expect(titles.get(2).getText()).toEqual('Bienvenue dans Ponyracer', 'tag with id i18n');
    expect(titles.get(3).getText()).toEqual('Bienvenue dans Ponyracer', 'tag with desc i18n');
    const p = $$('p');
    expect(p.get(0).getText()).toEqual('Bienvenue dans Ponyracer JB Nizet !', 'interpolation i18n');
    const img = $('img');
    expect(img.getAttribute('alt')).toEqual('poney qui court', 'alt attribute i18n');
    expect(img.getAttribute('title')).toEqual('Les poneys sont cools, n\'est-ce pas\xA0?', 'title attribute i18n');
    expect($('ns-root').getText()).toContain('Commençons à jouer.');
    // TODO: remove this when ICU ID are fixed
    expect(p.get(1).getText()).toEqual('Bonjour, 2 courses sont planifiées.', 'pluralization i18n');
  });
});
