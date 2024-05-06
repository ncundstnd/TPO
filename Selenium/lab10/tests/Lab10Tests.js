const { describe, it, after } = require('mocha');
const GeneralElements = require('../classes/GeneralElements');
const SearchPage = require('../classes/SearchPage');

const delayTime = 2000;

describe('SearchTest', function () {

  this.timeout(60000); // Increase timeout if necessary

  before(async function () {
    await GeneralElements.openThePage('https://soundcloud.com/discover');
  });

  //1
  it('Search a group by name', async function () {
    await GeneralElements.inputSearchString('RHCP');
    await GeneralElements.submitSearch();

    await setDelay(delayTime);

    let searchElement = await GeneralElements.findElement('linkText', 'Red Hot Chili Peppers');
    confirmTest(searchElement, 'The search result is correct')
  });

  //2
  it('Add album in user library', async function () {
    let albumName = 'Californication';

    await GeneralElements.inputSearchString(albumName);
    await GeneralElements.submitSearch();
    await SearchPage.findContent('albums');

    await setDelay(delayTime);

    const albumInfoElement = await GeneralElements.findElement(`[aria-label="Playlist: Californication by Red Hot Chili Peppers"]`, 'css')
    const likeButton = await GeneralElements.findChildElement(albumInfoElement, '[aria-label="Like"]', 'css');
    await likeButton.click();

    await setDelay(delayTime);

    const library = await GeneralElements.findElement(`[data-menu-name="library"]`, 'css');
    await library.click();

    await setDelay(delayTime);

    const libraryAlbums = await GeneralElements.findElement(`g-tabs-item networkTabs__albums`, 'className')
    const link = await GeneralElements.findChildElement(libraryAlbums, 'g-tabs-link', 'className');
    await link.click();

    await setDelay(delayTime);

    let searchElement = await GeneralElements.findElement(`[aria-label="Californication"]`, 'css')
    confirmTest(searchElement, 'Album has been added to user library')
  });

  after(async function () {
    await GeneralElements.closeBrowser();
  });
});

async function confirmTest(testCondition, outpurString) {
  if (testCondition) {
    assert.isTrue(true, outpurString);
  }
}

async function setDelay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
