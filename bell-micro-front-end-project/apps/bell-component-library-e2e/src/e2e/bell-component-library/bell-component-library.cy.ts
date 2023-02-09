describe('bell-component-library: BellComponentLibrary component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=bellcomponentlibrary--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to BellComponentLibrary!');
    });
});
