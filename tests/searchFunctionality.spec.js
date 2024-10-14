// @ts-check
const { test, expect } = require('@playwright/test');
const Search = require('../pages/SearchMember')
const Home = require('../pages/HomePage')
const searchData = require('../utils/search_Testdata.json')
const filterData = require('../utils/filter_Testdata.json')


test.beforeEach(async ({ page }) => {
  const home = Home(page)
    await home.Login() 
});

test('TC_001 search member functionality', {tag:'@search'}, async ({ page }) => {
  const search = Search(page)
  await search.typeLtter(searchData.searchLetters)
  await search.getMember_Details(searchData.expected_memberName)
})



  filterData.forEach(({ contractType }) => {
    test(`TC_002 filtering by job type functionality: ${contractType}`, { tag: '@search' }, async ({ page }) => {
      const search =  Search(page); 
      await search.filterContractType(contractType);
    });
  });
















