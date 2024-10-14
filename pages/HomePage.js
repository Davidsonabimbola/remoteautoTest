const { expect } = require("@playwright/test")
const Home = (page)=>({

    async Login(){
        await page.goto('http://localhost:3002/people#profile-page');
    await expect(page.locator('[class="sc-bqWxrE bdHqfn"]')).toBeVisible()
    },

    async Display(){    
    await expect(await page.locator('[class="sc-csuSiG sc-oZIhv ffpjCE ixvEOF"]')).toBeVisible()
    }

})
module.exports = Home