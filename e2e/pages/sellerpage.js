const appConfig = require('../../fixtures/appConfig.json')

class Loginpage {

    elements = {
        mobileInput: () => cy.get('#loginusername'),
        clickotpBTN: () => cy.get('.sendOTP'),
        passcodeInput: () => cy.get('#password'),
        clickloginBTN: () => cy.get('input[value="Log In"]'),
        clicksearch: () => cy.get('input[id-"search"]'),
        PanelDropdown: () => cy.contains('Panels '),
        sellerDasboardLink: () => cy.get('a').contains('Seller Dashboard'),
        LHSOfferTab: () => cy.get('a').contains('Offers'),
        addNewofferBtn: () => cy.get('a').contains('Add New Offer'),
        searchText: () => cy.get('#searchInput'),
        Clickonsearchicon: () => cy.get('a').contains('search'),
        Clickaddbtn: () => cy.get('div').contains('Add offer ').first(),
        Addofferprice: () => cy.get('input[name="offerPrice"]'),
        brandErrorMsg: () => cy.get('#brandMapping'),
        Addregularprice: () => cy.get('input[name="regularPrice"]'),
        realQTY: () => cy.get('input[name="qty"]'),
        minQty: () => cy.get('input[name="minimumOrderQty"]'),
        createOfferBTN: () => cy.get('a').contains('Create Offer '),
        clickliquidationOfferBTN: () => cy.get('a').contains('Add liquidation offer'),
        selectStockType: () => cy.get('.selected').click({ force: true }),
        selectStockTypeOPTn: () => cy.get('.items').contains('Excess stock').click({ force: true }),
        addRealQty: () => cy.get('input[name="qty"]').clear(),
        ClickOnCRTBTN: () => cy.get('a').contains('Create Offer'),
        clickonViewofrbtn: () => cy.get('a[role="button"]').contains('view / edit '),
        UpdateOfferprice: () => cy.get('input[name="offerPrice"]').clear({ force: true }),
        upadteRealQty: () => cy.get('input[name="qty"]').clear(),
        ClickOnUpdateBTN: () => cy.get('a[role="button"]').contains('Update Offer '),
        Verifyassertion: () => cy.get('div').contains('Offer updated successfully'),
        //Verifyassertions: () => cy.get('#toast-container').contains('Offer added successfully'),
        OrderBtn: () => cy.get('span').contains('Orders'),
        AcceptBtn: () => cy.get('a[data-key="accept"]').contains('Accept ').first(),
        ConfirmBtn: () => cy.get('a').contains('Confirm Order'),
        ConfrmOrderassertion: () => cy.get('div[id="toast-container"]').contains('Order Accepted'),
        readyToShipBTN: () => cy.get('button').contains('Ready to ship '),
        proceedBtn: () => cy.get('a[data-key="proceed_to_ship"]').contains('Proceed To Ship ').first(),
        shipNowBtn: () => cy.get('a').contains('Ship Now'),
        Shipnowassertion: () => cy.get('div[id="toast-container"]').contains('Order Shipped.'),
        deliverBtn: () => cy.get('a').contains('Mark Delivered '),
        deliveryassertion: () => cy.get('div[id="toast-container"]').contains('Order marked as delivered.'),
        //RFQ Resonce

        clickRFQBTN: () => cy.get('span').contains('RFQ'),
        respondBTN: () => cy.get('a').contains('Respond '),
        regularPrice: () => cy.get('Input[name="regularPrice"]'),
        offerPrice: () => cy.get('Input[name="offerPrice"]'),
        saveRespondBTN: () => cy.get('a').contains('Respond '),
        //RFQsuccessAssersion:()=> cy.get('div').contains('RFQ Responded Successfully.')


    }


    loginMethod(mobile, passcode) {
        this.elements.mobileInput().type(mobile)
        this.elements.clickotpBTN().click()
        this.elements.passcodeInput().type(passcode)
        this.elements.clickloginBTN().click()
    }

    linkMethod() {
        cy.wait(2000)
        // click on panel drop and click seller dashboard
        this.elements.PanelDropdown().click()
        cy.wait(2000)
        this.elements.sellerDasboardLink().click()
        cy.wait(2000)
        cy.url().should('include', appConfig.sellerDashboardURL)
        // click on offer tab in LHS
        this.elements.LHSOfferTab().click()
        cy.url().should('include', appConfig.offersPageURL)
        this.elements.addNewofferBtn().click()


    }

    SellerLogin() {
        cy.wait(2000)
        // click on panel drop and click seller dashboard
        this.elements.PanelDropdown().click()
        cy.wait(2000)
        this.elements.sellerDasboardLink().click()
        cy.wait(2000)
        cy.url().should('include', appConfig.sellerDashboardURL)
    }

    sellerOderProcessing() {
        cy.visit(appConfig.adminURL)
        this.loginMethod(appConfig.mpSellerMobile, appConfig.mpSellerPasscode)
        this.SellerLogin()
        this.elements.OrderBtn().click()
        this.elements.AcceptBtn().click({ force: true })
        this.elements.ConfirmBtn().click({ force: true })
        this.elements.ConfrmOrderassertion().should('be.visible')
        this.elements.readyToShipBTN().click({ force: true })
        this.elements.proceedBtn().click({ force: true })
        this.elements.shipNowBtn().click()
        cy.wait(2000)
        this.elements.Shipnowassertion().should('be.visible')
        cy.wait(1000)
        this.elements.deliverBtn().click()
        cy.wait(1000)
        this.elements.deliveryassertion().should('be.visible')


    }
    //RFQ Responce by seller 

    ResponceBySeller() {

        cy.visit(appConfig.adminURL)
        this.loginMethod(appConfig.mpSellerMobile, appConfig.mpSellerPasscode)
        this.SellerLogin()

        this.elements.clickRFQBTN().click()
        cy.wait(1000)
        this.elements.respondBTN().click({ force: true })
        this.elements.regularPrice().clear().type('600')
        this.elements.offerPrice().clear().type('570')
        this.elements.saveRespondBTN().click({ force: true })
        cy.wait(2000)
        //this.elements.RFQsuccessAssersion().should('be.visible')

    }



}
module.exports = new Loginpage();

