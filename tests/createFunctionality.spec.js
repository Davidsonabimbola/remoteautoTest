const { test, expect } = require('@playwright/test');
const Add_Form = require('../pages/CreateMember')
const Error_Message =  require('../pages/ErrorMessage')
const Home = require('../pages/HomePage')
const dataset = require('../utils/create_Testdata.json')
const missingDetails = require('../utils/missingFields_Testdata.json')
const currencyFormat_Data = require('../utils/wrong_currencyFormat_Testdata.json')
const chooseButton = require('../utils/buttonType.json')
const toast = require('../utils/toastMessage.json')

test.beforeEach(async ({ page }) => {
    const home = Home(page)
    await home.Login() 
    
  });



dataset.forEach(({name,jobTitle,country,currency,salaryAmount,jobStatus }) => {
    test(`TC_005 Add another member form modal functionality for: ${name}`, { tag: '@create' }, async ({ page }) => {
        const add_Form = Add_Form(page)
        await add_Form.openForm()
        await add_Form.addName(name)
        await add_Form.add_JobTitle(jobTitle)
        await add_Form.add_Country(country)
        await add_Form.add_Currency(currency)
        await add_Form.add_salaryAmount(salaryAmount)
        await add_Form.add_jobType(jobStatus)
        await add_Form.selectButton(chooseButton[0].buttonType)
        await add_Form.messageDisplayed(toast[1].addSuccess_Message)
    });
  });


 
  test('TC_006 Add member form modal close button functionality', {tag:'@create'}, async ({ page }) => {
    const add_Form = Add_Form(page)
    const home = Home(page)

    await add_Form.openForm()
    await add_Form.addName(dataset[4].name)
    await add_Form.add_JobTitle(dataset[4].jobTitle)
    await add_Form.add_Country(dataset[4].country)
    await add_Form.add_Currency(dataset[4].currency)
    await add_Form.add_salaryAmount(dataset[4].salaryAmount)
    await add_Form.add_jobType(dataset[4].jobStatus)
    await add_Form.selectButton(chooseButton[1].buttonType)
    await home.Display()
  });


  

test('TC_007 Add member form modal with missing details functionality', {tag:'@create'}, async ({ page }) => {
    
    const add_Form = Add_Form(page)
    const errorMessage = Error_Message(page)

    await add_Form.openForm()
    await add_Form.selectButton(chooseButton[0].buttonType)
   
    // the error messages
    await errorMessage.inputField(missingDetails.fieldType1,missingDetails.errorMessage_Description1)
    await errorMessage.inputField(missingDetails.fieldType2,missingDetails.errorMessage_Description2)
    await errorMessage.selectionField(missingDetails.fieldType3,missingDetails.errorMessage_Description3)
    await errorMessage.selectionField(missingDetails.fieldType4,missingDetails.errorMessage_Description4)
    await errorMessage.selectionField(missingDetails.fieldType5,missingDetails.errorMessage_Description5)
  
  });


  test('TC_008 Add member form modal with missing name functionality', {tag:'@create'}, async ({ page }) => {
   
    const add_Form = Add_Form(page)
    const errorMessage = Error_Message(page)
    
    await add_Form.openForm()
    await add_Form.add_JobTitle(dataset[0].jobTitle)
    await add_Form.add_Country(dataset[0].country)
    await add_Form.add_Currency(dataset[0].currency)
    await add_Form.add_salaryAmount(dataset[0].salaryAmount)
    await add_Form.add_jobType(dataset[0].jobStatus)
    await add_Form.selectButton(chooseButton[0].buttonType)
    await errorMessage.inputField(missingDetails.fieldType1,missingDetails.errorMessage_Description1)
  });



  test('TC_009  form modal wrong currency format validation', {tag:'@create'}, async ({ page }) => {
    const add_Form = Add_Form(page)
    const errorMessage = Error_Message(page)

    await add_Form.openForm()
    await add_Form.addName(currencyFormat_Data.name)
    await add_Form.add_JobTitle(currencyFormat_Data.jobTitle)
    await add_Form.add_Country(currencyFormat_Data.country)
    await add_Form.add_Currency(currencyFormat_Data.currency)
    await add_Form.add_salaryAmount(currencyFormat_Data.salaryAmount)
    await add_Form.add_jobType(currencyFormat_Data.jobStatus)
    await add_Form.selectButton(chooseButton[0].buttonType)
    await errorMessage.standard_currencyFormat()
    
  });