import Homepage from '../pages/home-page'
import Searchpage from '../pages/search-page'
import Trendingpage from '../pages/trending-page'

describe("Home", () => {

  before(async() =>{
    console.log("Starting the test...")
  })

  it("Open URL and assert title", async () => {

    //Open URL
    await Homepage.openUrl();

    //Verify opened Url
    await expect(browser).toHaveTitle("GIPHY - Be Animated");
    await expect(browser).toHaveUrl("https://giphy.com/");
  });

  it("Verify Trending section exists", async () => {

    //Verify Trending section exists
    console.log("TC_01 : Verify Trending section exists");
    await Homepage.verifyTrendingSection().waitForDisplayed();
    console.log("Trending section found.");

    console.log("TEST PASSED!");

  });

  it("Verify Search works", async () => {

    //Verify search field exists
    console.log("TC_02 : Verify search field exists.");
    await Homepage.verifySearchBar().waitForDisplayed();
    console.log("Search field exists.");

    //Verify user can type text into search field
    console.log("Verify user can type text into search field.");
    await Homepage.typeInSearchBar().addValue("football");
    console.log("Entered text in search bar.");

    //Perform search
    console.log("Verify results are displayed after a search.");
    await Homepage.clickSearchButton().click();
    console.log("Clicked search button.");

    //Verify results are displayed after a search
    console.log("Verify results are displayed after a search.");
    const searchResultElement = await Searchpage.getSearchResultHeader();
    const searchResult =  await searchResultElement.getText();
    
    //Assert results text header
    await expect(searchResult).toEqual('football');
    console.log("Search results for "+searchResult+ " are displayed.");
    
    console.log("TEST PASSED!");
    
  });

  it("Click on a gif in trending section.", async () => {

    //Go back to homepage
    await browser.back();
    console.log("Home page opened.");

    await Homepage.verifyTrendingSection().waitForDisplayed();
    console.log("Trending section found.");

    console.log("TC_03: Click on a gif in trending section.");
    
    //Click on a gif in trending section
    await Trendingpage.clickOnGif().waitForClickable();
    await Trendingpage.clickOnGif().click();
    console.log("Clicked on a gif.");

    const gifNameElement = await Trendingpage.getGifName();
    const gifName =  await gifNameElement.getText();


    //Verify it opens a page that shows the clicked on gif
    console.log("Opened the page that shows the clicked on gif");
    console.log("Gif opened from trending section is: "+gifName);

    console.log("TEST PASSED!");

  });

  after(async() =>{
      console.log("Closed the test.")
  })

});
