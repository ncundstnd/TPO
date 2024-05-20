const { describe, it, after } = require('mocha');
const GeneralElements = require('../pages/GeneralElements');
const SearchPage = require('../pages/SearchPage');

const delayTime = 2000;

describe('SearchTest', function () {

  this.timeout(90000); // Increase timeout if necessary

  before(async function () {
    await GeneralElements.openThePage('https://soundcloud.com/discover');
  });

  // //1
  // it('Search a group by name', async function () {
  //   await setDelay(delayTime / 5);

  //   groupName = "RHCP";

  //   for (let index = 0; index < groupName.length; index++) {
  //     await GeneralElements.inputSearchString(groupName[index]);
  //     await setDelay(delayTime / 6);
  //   }

  //   await setDelay(delayTime / 2);

  //   await GeneralElements.submitSearch();

  //   await setDelay(delayTime);

  //   let searchElement = await GeneralElements.findElement('linkText', 'Red Hot Chili Peppers');
  //   confirmTest(searchElement, 'The search result is correct')
  // });

  // //2
  // it('Add album in user library', async function () {
  //   let albumName = 'мои (твои) тёмные желания';

  //   await setDelay(delayTime);

  //   await GeneralElements.clearSearchString();

  //   for (let index = 0; index < albumName.length; index++) {
  //     await GeneralElements.inputSearchString(albumName[index]);
  //     await setDelay(delayTime / 7);
  //   }

  //   await setDelay(delayTime);

  //   await GeneralElements.submitSearch();

  //   await setDelay(delayTime);

  //   await SearchPage.findContent('albums');

  //   await setDelay(delayTime);

  //   const albumInfoElement = await GeneralElements.findElement(`[aria-label="Playlist: мои (твои) тёмные желания by ooes"]`, 'css')
  //   const likeButton = await GeneralElements.findChildElement(albumInfoElement, '[aria-label="Like"]', 'css');
  //   await likeButton.click();

  //   await setDelay(delayTime * 5);

  //   const library = await GeneralElements.findElement(`[data-menu-name="library"]`, 'css');
  //   await library.click();

  //   await setDelay(delayTime);

  //   const libraryAlbums = await GeneralElements.findElement(`g-tabs-item networkTabs__albums`, 'className')
  //   const link = await GeneralElements.findChildElement(libraryAlbums, 'g-tabs-link', 'className');
  //   await link.click();

  //   await setDelay(delayTime);

  //   let searchElement = await GeneralElements.findElement(`[aria-label="мои (твои) тёмные желания"]`, 'css')
  //   confirmTest(searchElement, 'Album has been added to user library')
  // });

  // //3
  // it('Following singer', async function () {
  //   let singerName = 'maassacre';

  //   await setDelay(delayTime);

  //   await GeneralElements.clearSearchString();

  //   for (let index = 0; index < singerName.length; index++) {
  //     await GeneralElements.inputSearchString(singerName[index]);
  //     await setDelay(delayTime / 8);
  //   }

  //   await setDelay(delayTime);

  //   await GeneralElements.submitSearch();

  //   await setDelay(delayTime);

  //   const button = await SearchPage.findElement('//*[@id="content"]/div/div/div[2]/div/div/div[1]/div/ul/li[3]', 'xpath');
  //   await button.click();

  //   await setDelay(delayTime);

  //   const likeButton = await GeneralElements.findElement('//*[@id="content"]/div/div/div[3]/div/div/div/ul/li[1]/div/div/div/div[2]/button', 'xpath');
  //   await likeButton.click();

  //   await setDelay(delayTime * 5);

  //   const library = await GeneralElements.findElement(`[data-menu-name="library"]`, 'css');
  //   await library.click();

  //   await setDelay(delayTime);

  //   const libraryAlbums = await GeneralElements.findElement(`g-tabs-item networkTabs__following`, 'className')
  //   const link = await GeneralElements.findChildElement(libraryAlbums, 'g-tabs-link', 'className');
  //   await link.click();

  //   await setDelay(delayTime);

  //   let searchElement = await GeneralElements.findElement(`//*[@id="content"]/div/div/div[2]/div/section/div/div[2]/div/ul/li[1]/div/div[2]/a`, 'xpath')
  //   confirmTest(searchElement, 'Following have been confirmed')
  // });

  //4
  // it('Create listen queue', async function () {
  //   await setDelay(delayTime);

  //   const library = await GeneralElements.findElement(`[data-menu-name="library"]`, 'css');
  //   await library.click();

  //   await setDelay(delayTime);

  //   const libraryPlaylists = await GeneralElements.findElement(`g-tabs-item networkTabs__sets`, 'className')
  //   const link = await GeneralElements.findChildElement(libraryPlaylists, 'g-tabs-link', 'className');
  //   await link.click();

  //   await setDelay(delayTime);

  //   const button = await GeneralElements.findElement('//*[@id="app"]/div[4]/section/div/div[3]/button[2]', 'xpath');
  //   await button.click();

  //   await setDelay(delayTime);

  //   await setDelay(delayTime);

  //   const anotherNewButton = await GeneralElements.findElement('//*[@id="app"]/div[4]/section/div/div[3]/div[6]/div/div[2]/a/div', 'xpath');
  //   await anotherNewButton.click();

  //   await setDelay(delayTime);

  //   let searchElement = await GeneralElements.findElement(`//*[@id="app"]/div[4]/section/div/div[1]/div/div[1]/button[1]`, 'xpath')
  //   confirmTest(searchElement, 'Queue was created')
  // });

  //4
  it('Create listen queue', async function () {
    await setDelay(delayTime);

    const library = await GeneralElements.findElement(`//*[@id="app"]/header/div/div[3]/ul/li/a`, 'xpath');
    await library.click();

    await setDelay(delayTime);

    const button = await GeneralElements.findElement('/html/body/div[4]/div/ul[4]/li[2]/a', 'xpath');
    await button.click();

    await setDelay(delayTime);

    // await setDelay(delayTime);

    

    // await setDelay(delayTime);

    const anotherNewButton = await GeneralElements.findElement('//*[@id="formControl_7342"]', 'xpath');
    await anotherNewButton.sendKeys('Ignatcov169@gmail.com');
    await anotherNewButton.click();
    // await setDelay(delayTime);

    let searchElement = await GeneralElements.findElement(`//*[@id="app"]/div[4]/section/div/div[1]/div/div[1]/button[1]`, 'xpath')
    confirmTest(searchElement, 'Queue was created')
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
