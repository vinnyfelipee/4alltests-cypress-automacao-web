describe('Funcionalidade Cadastro', () => {

  it('Validar cadastro validado com suceesso', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
    cy.get(':nth-child(2) > td > input').type('user')
    cy.get(':nth-child(4) > td > input').type('12345')
    cy.get(':nth-child(6) > td > input').type('vinny')
    cy.get('td > .btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'vinny')
  })

  it('Validar cadastro sem informar usuario', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
    cy.get(':nth-child(4) > td > input').type('12345')
    cy.get(':nth-child(6) > td > input').type('Vinny')
    cy.get('td > .btn').click() 
    cy.get('input[name="form_usuario"]').should('have.attr', 'required')

  })
  
  it('Validar apagar usuario', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'vinny')
    cy.get(':nth-child(2) > :nth-child(5) > a').click()
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('not.have.text', 'vinny')

  })



})
