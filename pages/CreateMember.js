const { expect } = require("@playwright/test")
const CreateModal = (page)=>({

async openForm(){
    await page.locator('[id="create-person"]').click() // add member button
    await expect(page.locator('[id="editPerson"]')).toBeVisible()
},

async addName(name){
    await page.locator('[id="name"]').pressSequentially(name)
},

async add_JobTitle(jobTitle){
    await page.locator('[id="jobTitle"]').pressSequentially(jobTitle)
},

async add_Country(country){
    await page.locator('[data-test-id="country-input"]').selectOption(country)
},

async add_Currency(currency){
    await page.locator('[data-test-id="currency-input"]').selectOption(currency)
},

async add_salaryAmount(amount){
    await page.locator('[id="salary-input"]').pressSequentially(amount)
},

async add_jobType(jobStatus){
    await page.locator('[data-test-id="employment-input"]').selectOption(jobStatus)
},

async selectButton(buttonType){
    await page.getByRole('button',{name:buttonType}).click()
},

async messageDisplayed(expectedMessage){
    await expect(await page.locator('[role="status"]')).toBeTruthy()
    await expect(await page.locator('[role="status"]')).toContainText(expectedMessage)
    console.log(await page.locator('[role="status"]').allTextContents())
    await expect(await page.locator('[class="sc-csuSiG sc-oZIhv ffpjCE ixvEOF"]')).toBeVisible()
},




})
module.exports = CreateModal