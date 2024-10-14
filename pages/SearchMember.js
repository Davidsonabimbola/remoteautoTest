const { expect } = require("@playwright/test")
const Placesearch = (page)=>({

    async typeLtter(letters){
        await page.locator('[id="search-person"]').pressSequentially(letters)
    },

    async getMember_Details(nameOf_Member){
        const memberDetails = page.locator('[class="sc-bjfHbI fFiCzo"]')
        const memberName = await memberDetails.getByText(nameOf_Member) // column containing name
      
        const searchedMember = page.locator('[class="sc-fnGiBr"]').filter({has:memberName}) // row containing name
        
        await expect(await searchedMember).toBeTruthy()
    },


    async filterContractType(contractType){
        await page.locator(`[data-testid="${contractType}-filter"]`).check()
     // to validate contractors
  const tableRows= page.locator('[class="sc-fnGiBr"]')
  const rowsCount =await tableRows.count()

  for (let i = 0; i < rowsCount; i++) {
    const particularTable = await tableRows.nth(i)
    const tableEmployment = particularTable.locator('[class="sc-bjfHbI fFiCzo"]').nth(2)
    await expect(await tableEmployment).toContainText('Contractor')

    console.log(await tableEmployment.textContent())

  }
    }

})
module.exports = Placesearch