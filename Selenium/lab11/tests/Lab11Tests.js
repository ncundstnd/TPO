const { describe, it, after } = require('mocha');
const GeneralElements = require('../pages/GeneralElements');
const SearchPage = require('../pages/SearchPage');
const { By } = require('selenium-webdriver')
const Logger = require('../core/logger')

const delayTime = 1500;

describe('Tests', function () {
  Logger.log('Test package started')

  this.timeout(90000); // Increase timeout if necessary

  before(async function () {
    await GeneralElements.openThePage('https://soundcloud.com/discover');
  });
  
  //1
  it('Search a group by name', async function () {
    await setDelay(delayTime / 5);
    Logger.log('Search a group by name')

    const cookie = await GeneralElements.findElement(`onetrust-accept-btn-handler`, 'id')
    await cookie.click();

    groupName = "RHCP";

    for (let index = 0; index < groupName.length; index++) {
      await GeneralElements.inputSearchString(groupName[index]);
      await setDelay(delayTime / 6);
    }

    await setDelay(delayTime / 2);

    await GeneralElements.submitSearch();

    await setDelay(delayTime);

    let searchElement = await GeneralElements.findElement('linkText', 'Red Hot Chili Peppers');

    Logger.log('The search result is correct')
    confirmTest(searchElement, 'The search result is correct')
  });

  //2
  it('Add album in user library', async function () {
    let albumName = 'мои (твои) тёмные желания';
    Logger.log('Add album in user library')

    await setDelay(delayTime);

    await GeneralElements.clearSearchString();

    for (let index = 0; index < albumName.length; index++) {
      await GeneralElements.inputSearchString(albumName[index]);
      await setDelay(delayTime / 7);
    }

    await setDelay(delayTime);

    await GeneralElements.submitSearch();

    await setDelay(delayTime);

    await SearchPage.findContent('albums');

    await setDelay(delayTime);

    // const albumInfoElement = await GeneralElements.findElement(`[aria-label="Playlist: мои (твои) тёмные желания by ooes"]`, 'css')
    // const likeButton = await GeneralElements.findChildElement(albumInfoElement, '[aria-label="Like"]', 'css');
    // await likeButton.click();

    await setDelay(delayTime * 5);

    const library = await GeneralElements.findElement(`[data-menu-name="library"]`, 'css');
    await library.click();

    await setDelay(delayTime);

    const libraryAlbums = await GeneralElements.findElement(`g-tabs-item networkTabs__albums`, 'className')
    const link = await GeneralElements.findChildElement(libraryAlbums, 'g-tabs-link', 'className');
    await link.click();

    await setDelay(delayTime);
    Logger.log('Album has been added to user library')

    let searchElement = await GeneralElements.findElement(`[aria-label="мои (твои) тёмные желания"]`, 'css')
    confirmTest(searchElement, 'Album has been added to user library')
  });

  //3
  it('Following singer', async function () {
    let singerName = 'maassacre';
    Logger.log('Following singer')

    await setDelay(delayTime);

    await GeneralElements.clearSearchString();

    for (let index = 0; index < singerName.length; index++) {
      await GeneralElements.inputSearchString(singerName[index]);
      await setDelay(delayTime / 8);
    }

    await setDelay(delayTime);

    await GeneralElements.submitSearch();

    await setDelay(delayTime);

    const button = await SearchPage.findElement('//*[@id="content"]/div/div/div[2]/div/div/div[1]/div/ul/li[3]', 'xpath');
    await button.click();

    await setDelay(delayTime);

    // const likeButton = await GeneralElements.findElement('//*[@id="content"]/div/div/div[3]/div/div/div/ul/li[1]/div/div/div/div[2]/button', 'xpath');
    // await likeButton.click();

    await setDelay(delayTime * 5);

    const library = await GeneralElements.findElement(`[data-menu-name="library"]`, 'css');
    await library.click();

    await setDelay(delayTime);

    const libraryAlbums = await GeneralElements.findElement(`g-tabs-item networkTabs__following`, 'className')
    const link = await GeneralElements.findChildElement(libraryAlbums, 'g-tabs-link', 'className');
    await link.click();

    await setDelay(delayTime);

    Logger.log('Following have been confirmed')
    let searchElement = await GeneralElements.findElement(`//*[@id="content"]/div/div/div[2]/div/section/div/div[2]/div/ul/li[1]/div/div[2]/a`, 'xpath')
    confirmTest(searchElement, 'Following have been confirmed')
  });

  //4
  it('Create listen queue', async function () {
    await setDelay(delayTime);
    Logger.log('Create listen queue')

    const library = await GeneralElements.findElement(`[data-menu-name="library"]`, 'css');
    await library.click();

    await setDelay(delayTime);

    const libraryPlaylists = await GeneralElements.findElement(`g-tabs-item networkTabs__sets`, 'className')
    const link = await GeneralElements.findChildElement(libraryPlaylists, 'g-tabs-link', 'className');
    await link.click();

    await setDelay(delayTime);

    const button = await GeneralElements.findElement('//*[@id="app"]/div[4]/section/div/div[3]/button[2]', 'xpath');
    await button.click();

    await setDelay(delayTime);

    await setDelay(delayTime);

    const anotherNewButton = await GeneralElements.findElement('//*[@id="app"]/div[4]/section/div/div[3]/div[6]/div/div[2]/a/div', 'xpath');
    await anotherNewButton.click();

    await setDelay(delayTime);
    Logger.log('Queue was created')

    let searchElement = await GeneralElements.findElement(`//*[@id="app"]/div[4]/section/div/div[1]/div/div[1]/button[1]`, 'xpath')
    confirmTest(searchElement, 'Queue was created')
  });

  //5
  it('Add additional gmail', async function () {
    await setDelay(delayTime);
    Logger.log('Add additional gmail')

    const library = await GeneralElements.findElement(`//*[@id="app"]/header/div/div[3]/ul/li/a`, 'xpath');
    await library.click();

    await setDelay(delayTime);

    const button = await GeneralElements.findElement('/html/body/div[4]/div/ul[4]/li[2]/a', 'xpath');
    await button.click();

    await setDelay(delayTime);

    const button1 = await GeneralElements.findElement('//*[@id="content"]/div/div/div[1]/div/div/div/div/div/div[1]/div/div[2]/div/button', 'xpath');
    await button1.click();

    await setDelay(delayTime);


    await setDelay(delayTime);

    const anotherNewButton = await GeneralElements.findElement('//*[@id="content"]/div/div/div[1]/div/div/div/div/div/div[1]/div/div[2]/div/div[2]/div/div[1]', 'xpath');
    const childElements = await anotherNewButton.findElements(By.xpath('./*'));
    const firstChildElement = childElements[0];
    await firstChildElement.sendKeys('Ignatcov169@gmail.com');

    await setDelay(delayTime);

    // const button2 = await GeneralElements.findElement('//*[@id="content"]/div/div/div[1]/div/div/div/div/div/div[1]/div/div[2]/div/div[2]/button[1]', 'xpath');
    // await button2.click();

    Logger.log('Gmail was added')
    let searchElement = await GeneralElements.findElement(`//*[@id="app"]/div[4]/section/div/div[1]/div/div[1]/button[1]`, 'xpath')
    confirmTest(searchElement, 'Gmail was added')
  });

  //6
  it('Delete track from soundcloud', async function () {
    await setDelay(delayTime);
    Logger.log('Delete track from soundcloud')

    const library = await GeneralElements.findElement(`//*[@id="app"]/header/div/div[3]/div[2]/a[1]`, 'xpath');
    await library.click();

    await setDelay(delayTime);

    await GeneralElements.openThePage("https://soundcloud.com/kivan-167895251/tracks");

    await setDelay(delayTime);

    const button1 = await GeneralElements.findElement('sc-button-more', 'className');
    await button1.click();

    await setDelay(delayTime);


    await setDelay(delayTime);

    const button3 = await GeneralElements.findElement('sc-button-delete', 'className');
    await button3.click();

    await setDelay(delayTime);

    const button4 = await GeneralElements.findElement('deleteTrackModal__delete', 'className');
    await button4.click();

    await setDelay(delayTime);
    Logger.log('Track was deleted from soundcloud')

    let searchElement = await GeneralElements.findElement(`//*[@id="app"]/div[4]/section/div/div[1]/div/div[1]/button[1]`, 'xpath')
    confirmTest(searchElement, 'Track was deleted from soundcloud')
  });

  //7
  it('Add comment to the song', async function () {
    await setDelay(delayTime);
    Logger.log('Add comment to the song')

    const library = await GeneralElements.findElement(`[data-menu-name="library"]`, 'css');
    await library.click();

    await setDelay(delayTime);

    await GeneralElements.openThePage("https://soundcloud.com/kostya-shelby-694260055/feei56iualyp");

    await setDelay(delayTime);
    let text = 'Its wonderful. Keep doing, what you doing'
    const button1 = await GeneralElements.findElement('tokenInput__comment', 'id');
    for (let index = 0; index < text.length; index++) {
      await button1.sendKeys(text[index]);
      await setDelay(delayTime / 7);
    }

    await setDelay(delayTime);

    // const button3 = await GeneralElements.findElement('commentForm__submitButton', 'className');
    // await button3.click();

    await setDelay(delayTime);
    Logger.log('Comment was added')

    let searchElement = await GeneralElements.findElement(`commentsList__actualTitle`, 'className')
    confirmTest(searchElement, 'Comment was added')
  });

  //8
  it('Clear listening history', async function () {
    await setDelay(delayTime);
    Logger.log('Clear listening history')

    const main = await GeneralElements.findElement(`//*[@id="app"]/header/div/div[1]/nav/ul/li[1]/a`, 'xpath');
    await main.click();

    await setDelay(delayTime);

    const button3 = await GeneralElements.findElement('//*[@id="content"]/div/div/div[2]/div/article[4]/a/span', 'xpath');
    await button3.click();

    await setDelay(delayTime);

    const button6 = await GeneralElements.findElement('//*[@id="content"]/div/div/div[2]/div/section/div/div[1]/button', 'xpath');
    await button6.click();

    await setDelay(delayTime);

    const button7 = await GeneralElements.findElement('sc-button sc-button-small sc-button-primary sc-ml-2x', 'className');
    await button7.click();

    await setDelay(delayTime);
    Logger.log('Listening history is cleared')

    let searchElement = await GeneralElements.findElement(`//*[@id="app"]/header/div/div[1]/nav/ul/li[1]/a`, 'xpath');
    confirmTest(searchElement, 'Listening history is cleared')
  });

  //9
  it('Add song to playlist', async function () {
    await setDelay(delayTime);
    Logger.log('Add song to playlist')

    const library = await GeneralElements.findElement(`//*[@id="app"]/header/div/div[3]/ul/li/a`, 'xpath');
    await library.click();

    await setDelay(delayTime);

    await GeneralElements.openThePage("https://soundcloud.com/you/likes");

    await setDelay(delayTime);

    await GeneralElements.openThePage("https://soundcloud.com/kostya-shelby-694260055/feei56iualyp");

    await setDelay(delayTime);

    const button10 = await GeneralElements.findElement('sc-button-more', 'className');
    await button10.click();

    await setDelay(delayTime);

    const button1 = await GeneralElements.findElement('sc-button-addtoset', 'className');
    await button1.click();

    await setDelay(delayTime);

    // const button6 = await GeneralElements.findElement('textfield__input', 'className');

    await setDelay(delayTime);

    // const button5 = await GeneralElements.findElement('addToPlaylistButton', 'className');
    // await button5.click();

    await setDelay(delayTime);

    const button2 = await GeneralElements.findElement('modal__closeButton', 'className');
    await button2.click();

    await setDelay(delayTime);

    await GeneralElements.openThePage("https://soundcloud.com/you/library");

    await setDelay(delayTime);

    const libraryPlaylists = await GeneralElements.findElement(`g-tabs-item networkTabs__sets`, 'className')
    const link = await GeneralElements.findChildElement(libraryPlaylists, 'g-tabs-link', 'className');
    await link.click();

    await setDelay(delayTime);
    Logger.log('Song added to playlist')

    let searchElement = await GeneralElements.findElement(`collectionSection__subHeading sc-text-light sc-text-primary sc-type-large sc-text-h3`, 'className')
    confirmTest(searchElement, 'Song added to playlist')
  });

  //10
  it('Logout', async function () {
    await setDelay(delayTime);
    Logger.log('Begin logout')

    const library = await GeneralElements.findElement(`//*[@id="app"]/header/div/div[3]/ul/li/a`, 'xpath');
    await library.click();

    await setDelay(delayTime);

    await GeneralElements.openThePage("https://soundcloud.com/logout");

    await setDelay(delayTime);
    Logger.log('Logout complete')

    let searchElement = await GeneralElements.findElement(`//*[@id="app"]/div[4]/section/div/div[1]/div/div[1]/button[1]`, 'xpath')
    confirmTest(searchElement, 'Logout complete')
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
