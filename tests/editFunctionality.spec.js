const { test, expect } = require('@playwright/test');
const Edit_Form = require('../pages/EditMember')
const Home = require('../pages/HomePage')
const chooseButton = require('../utils/buttonType.json')
const editData = require('../utils/edit_Testdata.json')
const toast = require('../utils/toastMessage.json')


test.beforeEach(async ({ page }) => {
    const home = Home(page)
    await home.Login() 
  });



test('TC_003 editing and save button functionality', {tag:'@edit'}, async ({ page }) => {
    const edit_Form = Edit_Form(page)
  await edit_Form.search_and_startEdit(editData.searchLetters, editData.nameOfStaff)
  await edit_Form.jobTitle_edit(editData.jobTitle)
  await edit_Form.country_edit(editData.country)
  await edit_Form.currency_edit(editData.currency)
  await edit_Form.salary_edit(editData.salaryAmount)
  await edit_Form.jobContract_edit(editData.jobType)
  await edit_Form.selectButton(chooseButton[0].buttonType)
  await edit_Form.messageDisplayed(toast[0].editSuccess_Message)
  
  });



  test('TC_004 editing and close button functionality', {tag:'@edit'}, async ({ page }) => {
    const edit_Form = Edit_Form(page)
    const home = Home(page) 
  await edit_Form.search_and_startEdit(editData.searchLetters, editData.nameOfStaff)
  await edit_Form.jobTitle_edit(editData.jobTitle)
  await edit_Form.country_edit(editData.country)
  await edit_Form.currency_edit(editData.currency)
  await edit_Form.salary_edit(editData.salaryAmount)
  await edit_Form.jobContract_edit(editData.jobType)
  await edit_Form.selectButton(chooseButton[1].buttonType)
  await home.Display()
  })