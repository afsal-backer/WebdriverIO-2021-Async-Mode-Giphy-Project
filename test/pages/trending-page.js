//Page object to store all Trending page related webelements and helper methods

class Trendingpage{

    //method to return webelement of first available gif
    clickOnGif(){
        return $('(//div[contains(@class,"ListWrapper")]//li//div[contains(@class,"Container-sc")])[1]');
    }

    //method to return weblement of the name of the opened gif
    getGifName(){
        return $('//div[contains(@class,"Content-sc")]//h1');
    }

}

export default new Trendingpage();
