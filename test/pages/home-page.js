class Homepage{

    openUrl(){
        return browser.url('/')
    }

    verifyTrendingSection(){
        return $('//h3[text()="Trending"]');
    }

    verifySearchBar(){
        return $('//div[@id="searchbar"]');
    }

    typeInSearchBar(){
        return $('//div[@id="searchbar"]//input');
    }

    clickSearchButton(){
        return $('//a[contains(@class,"SearchButton")]');
    }

    
}

export default new Homepage();