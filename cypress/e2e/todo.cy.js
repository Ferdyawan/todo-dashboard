describe('Todo App E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173'); 
  });

  it('Should fetch and display initial todos', () => {
    cy.get('p').should('exist'); 
  });

  it('Should add a new todo', () => {
    const newTodo = "Belajar E2E Cypress";
    cy.get('input[placeholder="Tambah tugas baru"]').type(newTodo);
    cy.contains('button', 'Tambah').click();
    cy.contains(newTodo).should('be.visible');
  });

  it('Should toggle a todo status', () => {
    cy.get('input[type="checkbox"]').first().click();
  });

  it('Should delete a todo', () => {
    cy.get('button').find('svg').first().click();
  });
});