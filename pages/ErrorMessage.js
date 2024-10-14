const { expect } = require("@playwright/test")
const Error_field = (page)=>({

    async inputField(fieldType, errorMessage_Description){
        const nameField = page.locator('[class="sc-dIfARi dxoeBo"]').filter({hasText:fieldType})
    const nameLabel = page.locator('[class="sc-idXgbr bQInOa"]').filter({has:nameField})
    const errorMessage_Location = await nameLabel.locator('[class="sc-hHTYSt sc-kgTSHT etBjfY ihfxfP"]')
    console.log(await errorMessage_Location.allTextContents())
    await expect(await errorMessage_Location.allTextContents()).toContain(errorMessage_Description)
    },


    async selectionField(fieldType, errorMessage_Description){
        const countryField = page.locator('[class="sc-dIfARi fLmqof"]').filter({hasText:fieldType})
    const countryLabel = page.locator('[class="sc-idXgbr bQInOa"]').filter({has:countryField})
    const countryerrorMessage_Location = await countryLabel.locator('[class="sc-hHTYSt sc-kgTSHT etBjfY ihfxfP"]')
    console.log(await countryerrorMessage_Location.allTextContents())
    await expect(await countryerrorMessage_Location.allTextContents()).toContain(errorMessage_Description)
    },



    async standard_currencyFormat(){
        await expect(page.getByText('Please use US standard currency format. Ex: 1,024.12 - Their gross yearly')).toBeVisible() 
    }

})
module.exports = Error_field