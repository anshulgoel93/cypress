/// <reference types="cypress" />

import Loginpage from "../pages/Sellerpage"
const appConfig = require('../../fixtures/appConfig.json')

describe('Verify Offer page', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
         })

    //     it('Verify Seller Dashboard link', () => {
    //         Loginpage.linkMethod()
    //         cy.url().should('include', appConfig.addOfferPageURL)
    //         Loginpage.elements.searchText().type(appConfig.incorrectSearchText)
    //         Loginpage.elements.Clickonsearchicon().click()
    //         Loginpage.elements.brandErrorMsg().should('have.text', appConfig.Alertmsg)
    //         //Add Offer
    //         Loginpage.elements.searchText().clear().type(appConfig.correctSearchText)
    //         Loginpage.elements.Clickonsearchicon().click()
    //         Loginpage.elements.Clickaddbtn().click()
    //         cy.wait(2000)
    //         Loginpage.elements.Addregularprice().type(appConfig.regularPrice, {force: true})
    //         Loginpage.elements.Addofferprice().clear().type(appConfig.offerPrice)
    //         Loginpage.elements.realQTY().clear().type(appConfig.realQty)
    //         Loginpage.elements.minQty().clear().type(appConfig.addminimumOrderQtyText)
    //         Loginpage.elements.createOfferBTN().click()
    //         cy.wait(2000)
    //        // Loginpage.elements.Verifyassertions().should('be.visible')
    //         cy.wait(5000)
    //         Loginpage.elements.clickonViewofrbtn().click({force: true})
    //         cy.wait(2000)
    //         Loginpage.elements.UpdateOfferprice().type(appConfig.Updateprice, {force: true})
    //         Loginpage.elements.upadteRealQty().type(appConfig.Updatereatqtyvalue)
    //         Loginpage.elements.ClickOnUpdateBTN().click()
    //         cy.wait(3000)
    //         Loginpage.elements.Verifyassertion().should('be.visible')


    //  })


    // it('Add liquidation offer' , () => {
    //     Loginpage.linkMethod()
    //     //Search product name
    //     Loginpage.elements.searchText().type(appConfig.correctSearchText)
    //     Loginpage.elements.Clickonsearchicon().click()
    //     cy.wait(3000)
    //     // Create liquidation Offer
    //     Loginpage.elements.clickliquidationOfferBTN().click()
    //     cy.wait(1000)
    //     Loginpage.elements.Addregularprice().type(appConfig.regularPrice, {force: true})
    //     cy.wait(1000)
    //     Loginpage.elements.Addofferprice().type(appConfig.offerPrice, {force: true})
    //     cy.wait(1000)
    //     Loginpage.elements.selectStockType()
    //     cy.wait(1000)
    //     Loginpage.elements.selectStockTypeOPTn()
    //     Loginpage.elements.addRealQty().type(appConfig.realQty)
    //     cy.wait(1000)
    //     //Loginpage.elements.setectStartDate().click()
    //     //cy.wait(1000)
    //     //Loginpage.elements.Selectyear().click()
    //     //Loginpage.elements.clickOnOkbTN()
    //     Loginpage.elements.ClickOnCRTBTN().click()
    //     cy.url().should('include', appConfig.OfferLiqURL)
    //     cy.wait(5000)
    //     Loginpage.elements.clickonViewofrbtn().click({force: true})
    //     cy.wait(3000)
    //    // Loginpage.elements.UpdateOfferprice().clear()
    //     Loginpage.elements.UpdateOfferprice().type(appConfig.Updateprice, {force: true})
    //     Loginpage.elements.upadteRealQty().type(appConfig.Updatereatqtyvalue)
    //     Loginpage.elements.ClickOnUpdateBTN().click()



    // })

    it('Order delivered', () => {

        Loginpage.SellerLogin()
        Loginpage.elements.OrderBtn().click()
        Loginpage.elements.AcceptBtn().click({ force: true })
        Loginpage.elements.ConfirmBtn().click({ force: true })
        Loginpage.elements.ConfrmOrderassertion().should('be.visible')
        Loginpage.elements.readyToShipBTN().click({ force: true })
        Loginpage.elements.proceedBtn().click({ force: true })
        Loginpage.elements.shipNowBtn().click()
        cy.wait(2000)
        Loginpage.elements.Shipnowassertion().should('be.visible')
        cy.wait(1000)
        Loginpage.elements.deliverBtn().click()
        cy.wait(1000)
        Loginpage.elements.deliveryassertion().should('be.visible')



    })

})
