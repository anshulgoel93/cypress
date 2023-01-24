const orderConfig = require('../../fixtures/orderConfig.json')
const appConfig = require('../../fixtures/appConfig.json')
import Loginpage from "./Sellerpage"

class Userorder {

    elements = {
         // user login
        mobileInput: () => cy.get('#loginusername'),
        clickotpBTN: () => cy.get('.sendOTP'),
        passcodeInput: () => cy.get('#password'),
        clickloginBTN: () => cy.get('input[value="Log In"]'),
        // Search 
        Searchtext: () => cy.get('input[id="search"]'),
        clickOnsearchICN: () => cy.get('button[id="searchsubmit"]'),
        // Order process
        ClickOnproductname: () => cy.get('a').contains('Mafe X1 (Black)'),
        ClickOnAddqtybtn: () => cy.get('button[id="plusButton"]'),
        ClcikonAddtocartBTN: () => cy.get('button').contains(' Add to Cart '),
        clickOnContShpbtn:  () => cy.get('span').contains('Continue Shopping'),
        ClickOn2Productname: ()=> cy.get('a').contains(' Samsung WT75M3200HL 7.5 kg Semi Automatic Washing Machine '),
        ClickOncheckoutbtn: () => cy.get('button').contains(' PROCEED TO CHECKOUT '),
        ClickOndeliverybtn: () => cy.get('button').contains('Deliver here'),
        ClickOnContinuebtn: () => cy.get('button').contains(' Continue '),
        ClickONCOD: () => cy.get('input[id="cod"]'),
        ClickOnplaceorderbtn: () => cy.get('a').contains('Place Order'),
        Checkmyorder:() => cy.get('a').contains('My Orders '),
        //RFQ Order
        clickRFQBtn: () => cy.get('a').contains('Click here to request for quote'),
        addAmountRFQ: () => cy.get('input[id="suggestedPrice"]'),
        clickRequestOffer:()=> cy.get('#enquirysubmit'),
        amountVerifyAssertion:()=> cy.get('div').contains('Sorry, Expected price can not be lower than the current prevailing market price'),
        rfqSuccMSGAssertion:()=> cy.get('p').contains('We have successfully received your enquiry and will get back to you shortly with the quotation'),
        clickonClose:()=> cy.get('#closeAndrefresh')
    }

    loginMethod(mobile, passcode) {
        this.elements.mobileInput().type(mobile)
        this.elements.clickotpBTN().click()
        this.elements.passcodeInput().type(passcode)
        this.elements.clickloginBTN().click()
    }

}
module.exports = new Userorder();