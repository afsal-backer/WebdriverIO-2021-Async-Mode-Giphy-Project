//Page object to store all Homepage related webelements and helper methods

class Homepage{

    //method to open browser and navigate to default url
    openUrl(){
        return browser.url('/')
    }

    //method to return webelement of trending section header text 
    verifyTrendingSection(){
        return $('//h3[text()="Trending"]');
    }
    
    //method to return search bar weblement
    verifySearchBar(){
        return $('//div[@id="searchbar"]');
    }

    //method to return search bar input textbox webelement
    typeInSearchBar(){
        return $('//div[@id="searchbar"]//input');
    }

    //method to return search button webelement
    clickSearchButton(){
        return $('//a[contains(@class,"SearchButton")]');
    }

    
}

export default new Homepage();
