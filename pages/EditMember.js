const { expect } = require("@playwright/test")
const EditModal = (page)=>({

    async search_and_startEdit(Searchletters,nameOfStaff){
        await page.locator('[id="search-person"]').pressSequentially(Searchletters)

  const memberDetails = page.locator('[class="sc-bjfHbI fFiCzo"]')
  const memberName = await memberDetails.getByText(nameOfStaff) // column containing name

  const searchedMember = page.locator('[class="sc-fnGiBr"]').filter({has:memberName}) // row containing name
  
  await expect(await searchedMember).toBeTruthy()

  // edit functionality
  await searchedMember.getByRole('button',{name:'Edit'}).click() // click on edit button
  await expect(page.locator('[id="editPerson"]')).toBeVisible()
        
    },


    async jobTitle_edit(jobTitle){
        await page.locator('[id="jobTitle"]').clear()
    await page.locator('[id="jobTitle"]').pressSequentially(jobTitle)
    },


    async country_edit(country){
        await page.locator('[data-test-id="country-input"]').selectOption(country)
    },


    async currency_edit(currency){
        await page.locator('[data-test-id="currency-input"]').selectOption(currency)
    },


    async salary_edit(amount){
        await page.locator('[id="salary-input"]').clear()
        await page.locator('[id="salary-input"]').pressSequentially(amount)
    },



    async jobContract_edit(jobType){
        await page.locator('[data-test-id="employment-input"]').selectOption(jobType)
    },


    async selectButton(buttonType){
        await page.getByRole('button',{name:buttonType}).click()
    },



    async messageDisplayed(expectedMessage){
        await expect(await page.locator('[role="status"]')).toBeTruthy()
     await expect(await page.locator('[role="status"]')).toContainText(expectedMessage)
     console.log(await page.locator('[role="status"]').allTextContents())
    
     await expect(await page.locator('[class="sc-csuSiG sc-oZIhv ffpjCE ixvEOF"]')).toBeVisible()
    }


    
})
module.exports = EditModal