const appConfig = require('../../fixtures/appConfig.json')
class loginFRP {

    elements = {
        mobileInput: () => cy.get('#loginusername'),
        clickotpBTN: () => cy.get('.sendOTP'),
        passcodeInput: () => cy.get('#password'),
        clickloginBTN: () => cy.get('input[value="Log In"]'),
       // clicksearch: () => cy.get('input[id-"search"]'),
        PanelDropdown: () => cy.contains('Panels '),
        sellerDasboardLink: () => cy.get('a').contains('Seller Dashboard'),
        newOffer:() => cy.get('spam').contains('New Offer')

    }

    loginMethod(mobile, passcode) {
        this.elements.mobileInput().type(mobile)
        this.elements.clickotpBTN().click()
        this.elements.passcodeInput().type(passcode)
        this.elements.clickloginBTN().click()
    }

FRPSellerDashboard() {
    cy.wait(2000)
    // click on panel drop and click seller dashboard
    this.elements.PanelDropdown().click()
    cy.wait(2000)
    this.elements.sellerDasboardLink().click()
    cy.wait(2000)
}

FRPsellerLogin(){
    cy.visit(appConfig.adminURL)
    this.loginMethod(appConfig.FRPSellerMobile, appConfig.FRPSellerPasscode)
    this.FRPSellerDashboard()
}


}

module.exports = new loginFRP();
