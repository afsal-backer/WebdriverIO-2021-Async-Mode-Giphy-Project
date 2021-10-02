class Searchpage{

    getSearchResultHeader(){
        return $('//h1[contains(@class,"Title-sc")]');
    }

}

export default new Searchpage();