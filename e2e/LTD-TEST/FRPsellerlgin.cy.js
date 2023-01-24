/// <reference types="cypress" />

import loginFRP from "../pages/FRPpage"
const appConfig = require('../../fixtures/appConfig.json')

describe('Verify Offer page', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })
       it('Login FRP Seller', () => {

        loginFRP.FRPsellerLogin()
        cy.visit('https://adminuat.lockthedeal.com/associate/offersAdd')
        loginFRP.elements.newOffer().click()
    

       })

         })
         
        
