class Trendingpage{

    clickOnGif(){
        return $('(//div[contains(@class,"ListWrapper")]//li//div[contains(@class,"Container-sc")])[1]');
    }

    getGifName(){
        return $('//div[contains(@class,"Content-sc")]//h1');
    }

}

export default new Trendingpage();