/// <reference types="cypress" /> 

describe("Login Suite - Data from external fixture file - And Alias", function () {
    // beforeEach(function () {
    //     cy.fixture("example.json").as("userDetails");
    //   });
      it("Login Test", function ( ) {
        cy.visit("https://redbeltgym.com/");
        cy.get(':nth-child(2) > .inFormField > input').type("abhisek.bose@tier5.us");
        cy.get('.loginPassField').type("123456");
       cy.get('.btn').click();
        cy.contains("Dashboard").should("be.visible");
        
      });
      it("contact list showing", function ( ) {
        cy.viewport(1920,880);
        cy.wait(5000);
       // cy.get('#root > div > div > div.routeMenu > ul > li:nth-child(3) > a > span').click();
       cy.get(':nth-child(3) > .leftMenuLink > .menuName').click({force:true});
       cy.get(':nth-child(4) > .user > .btn').click();
       
      
        
      });

         
        
      
      });

  

