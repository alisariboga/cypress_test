describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it.only('Test subscribe form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
    })
})