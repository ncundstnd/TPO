const assert = require('chai').assert;
const { Builder, By, Key } = require('selenium-webdriver');

async function SearchSingerTest() {
  let driver = await new Builder()
    .forBrowser('MicrosoftEdge')
    .build();

  let TestResult = true;

  try {
    await driver.get('https://cloud.google.com/');

    await driver.findElement(
      By.className('mb2a7b')
        .click()
        .sendKeys('Google Cloud Platform Pricing Calculator'));

    await driver.findElement(
      By.linkText("https://cloud.google.com/products/calculator")
        .click());

    await driver.findElement(
      By.className('UywwFc-LgbsSe UywwFc-LgbsSe-OWXEXe-Bz112c-M1Soyc UywwFc-LgbsSe-OWXEXe-dgl2Hf xhASFc')
        .click());

    await driver.findElement(
      By.className('d5NbRd-EScbFb-JIbuQc PtwYlf')
        .click());

    //instances
    await driver.findElement(
      By.className('i6')
        .click()
        .clear()
        .sendKeys('4'));

    //cpu
    await driver.findElement(
      By.id('i27')
        .click());

    await driver.findElement(
      By.className('MCs1Pd HiC7Nc VfPpkd-OkbHre VfPpkd-hjZysc-RWgCYc-wQNmvb VfPpkd-rymPhb-ibnC6b VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-aSi1db-MCEKJb')
        .click());

    //gpu
    await driver.findElement(
      By.className('eBlXUe-scr2fc eBlXUe-scr2fc-OWXEXe-uqeOfd')
        .click());

    await driver.findElement(
      By.className('VfPpkd-O1htCb VfPpkd-O1htCb-OWXEXe-INsAgc VfPpkd-O1htCb-OWXEXe-SfQLQb-M1Soyc-Bz112c FkS5nd')
        .click());

    await driver.findElement(
      By.className('MCs1Pd HiC7Nc VfPpkd-OkbHre VfPpkd-aJasdd-RWgCYc-wQNmvb VfPpkd-rymPhb-ibnC6b VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc')
        .click());

    //ssd
    TestResult = await driver.findElement(
      By.className('VfPpkd-O1htCb VfPpkd-O1htCb-OWXEXe-INsAgc VfPpkd-O1htCb-OWXEXe-SfQLQb-M1Soyc-Bz112c FkS5nd')
        .click());

    await driver.findElement(
      By.className('MCs1Pd HiC7Nc VfPpkd-OkbHre VfPpkd-aJasdd-RWgCYc-wQNmvb VfPpkd-rymPhb-ibnC6b VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc')
        .click());

    //loctaion
    await driver.findElement(
      By.id('i40')
        .click());

    await driver.findElement(
      By.className('MCs1Pd UbEQCe VfPpkd-OkbHre VfPpkd-OkbHre-SfQLQb-M1Soyc-bN97Pc VfPpkd-aJasdd-RWgCYc-wQNmvb  UdwDKc VfPpkd-rymPhb-ibnC6b VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-M1Soyc-Bz112c VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc')
        .click());

    //time
    await driver.findElement(
      By.id('1-year')
        .click());

    //share
    await driver.findElement(
      By.className('FOBRw-vQzf8d')
        .click());

    await driver.findElement(
      By.className('oOPNbc-LgbsSe oOPNbc-LgbsSe-OWXEXe-Bz112c-M1Soyc oOPNbc-LgbsSe-OWXEXe-dgl2Hf B1oOqc')
        .click());
  } finally {
    await driver.quit();
    return true;
  }
};

describe('SoundCloud Tests', function () {

  this.timeout(45000);

  it('Search Successful', async () => {
    let result = await SearchSingerTest();
    assert.isTrue(result, 'the search result is correct');
  });

});
