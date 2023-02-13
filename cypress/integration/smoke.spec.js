

describe('Smoke Test', () => {
    it('can view the home page', () => {
        cy.visit('/')
        cy.contains('Learn React')
    })
})
// This test will load up the root of our app and confirm it can see the text "Learn React" on it.