//Page object to store all Search page related webelements and helper methods

class Searchpage{

    //method to return webelement of search result header title
    getSearchResultHeader(){
        return $('//h1[contains(@class,"Title-sc")]');
    }

}

export default new Searchpage();
