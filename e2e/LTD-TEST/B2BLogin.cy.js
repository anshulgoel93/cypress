/// <reference types="cypress" />

import Userorder from "../Pages/B2Borderpage"
import Loginpage from "../pages/Sellerpage"
const orderConfig = require('../../fixtures/orderConfig.json')
const appConfig = require('../../fixtures/appConfig.json')



describe('Login from user', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    it.skip('B2B Login ', () => {
        // User login
        cy.visit(orderConfig.B2BURL)
        Userorder.loginMethod(orderConfig.userMobileNumber, orderConfig.userPasscode)
        cy.wait(5000)
        // Search text value
        Userorder.elements.Searchtext().type(orderConfig.SearchText)
        Userorder.elements.clickOnsearchICN().click()
        // Create order
        Userorder.elements.ClickOnproductname().click({ force: true })
        cy.wait(2000)
        //Userorder.elements.ClickOnAddqtybtn().click()
        Userorder.elements.ClcikonAddtocartBTN().click({ force: true })
        cy.wait(3000)
        Userorder.elements.clickOnContShpbtn().click({ force: true })
        cy.wait(2000)
        // Search 2 text value
        Userorder.elements.Searchtext().type(orderConfig.SearchTextvalue)
        Userorder.elements.clickOnsearchICN().click()
        cy.wait(2000)
        // Add  2 product in cart
        Userorder.elements.ClickOn2Productname().click({ force: true })
        Userorder.elements.ClcikonAddtocartBTN().click({ force: true })
        cy.wait(2000)
        Userorder.elements.ClickOncheckoutbtn().click({ force: true })
        Userorder.elements.ClickOndeliverybtn().click({ force: true })
        cy.wait(2000)
        Userorder.elements.ClickOnContinuebtn().click()
        cy.wait(2000)
        Userorder.elements.ClickONCOD().click()
        Userorder.elements.ClickOnplaceorderbtn().click({ force: true })
        cy.wait(1000)
        cy.get('div').contains(' Thank You! ').should('be.visible')
        cy.wait(3000)
        Userorder.elements.Checkmyorder().click()
    }
    )

    it.skip('order delivered verification ', () => {

        Loginpage.sellerOderProcessing()

    })

    it('Create RFQ ', () => {
        cy.visit(orderConfig.B2BURL)
        Userorder.loginMethod(orderConfig.userMobileNumber, orderConfig.userPasscode)
        cy.wait(5000)

        Userorder.elements.Searchtext().type(orderConfig.SearchText)
        Userorder.elements.clickOnsearchICN().click()
        cy.wait(2000)
        Userorder.elements.ClickOnproductname().click({ force: true })
        Userorder.elements.clickRFQBtn().click()
        Userorder.elements.addAmountRFQ().type(orderConfig.RFQIncorrectAmount)
        Userorder.elements.clickRequestOffer().click()
        cy.wait(2000)
        Userorder.elements.amountVerifyAssertion().should('be.visible')
        Userorder.elements.addAmountRFQ().clear().type(orderConfig.RFQcorrectAmount)
        Userorder.elements.clickRequestOffer().click()
        Userorder.elements.rfqSuccMSGAssertion().should('be.visible')
        Userorder.elements.clickonClose().click()

    })

    it.skip('ResponceBySeller',()=> {

        Loginpage
        
        .ResponceBySeller()
    })

})

