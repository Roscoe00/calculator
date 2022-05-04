//=======================
// Basic operations
//=======================

it('should check that 7+2 equals 9', ()=> {
   cy.visit('http://127.0.0.1:5501/calculator.html')

   cy.get('#buttons__7').click()
   cy.get('#buttons__add').click()
   cy.get('#buttons__2').click()
   cy.get('#buttons__equal').click()

   cy.get('#buttons__subscreen').should('contain','7+2')
   cy.get('#buttons__screen').should('contain','9')
})

it('should check that 5/4 equals 1.25', ()=> {
   cy.visit('http://127.0.0.1:5501/calculator.html')

   cy.get('#buttons__5').click()
   cy.get('#buttons__divide').click()
   cy.get('#buttons__4').click()
   cy.get('#buttons__equal').click()

   cy.get('#buttons__subscreen').should('contain','5÷4')
   cy.get('#buttons__screen').should('contain','1.25')
})

it('should check that 8*3 equals 24', ()=> {
   cy.visit('http://127.0.0.1:5501/calculator.html')

   cy.get('#buttons__8').click()
   cy.get('#buttons__multiply').click()
   cy.get('#buttons__3').click()
   cy.get('#buttons__equal').click()

   cy.get('#buttons__subscreen').should('contain','8×3')
   cy.get('#buttons__screen').should('contain','24')
})

it('should check that 9-16 equals -7', ()=> {
   cy.visit('http://127.0.0.1:5501/calculator.html')

   cy.get('#buttons__9').click()
   cy.get('#buttons__subtract').click()
   cy.get('#buttons__1').click()
   cy.get('#buttons__6').click()
   cy.get('#buttons__equal').click()

   cy.get('#buttons__subscreen').should('contain','9-16')
   cy.get('#buttons__screen').should('contain','-7')
})

//=======================
// decimal and negative test
//=======================

it('should check that 5..3 wont work', ()=> {
   cy.visit('http://127.0.0.1:5501/calculator.html')

   cy.get('#buttons__5').click()
   cy.get('#buttons__decimal').click()
   cy.get('#buttons__decimal').click()
   cy.get('#buttons__3').click()

   cy.get('#buttons__subscreen').should('contain','5.3')
   cy.get('#buttons__screen').should('contain','5.3')
})

it('should check that 91 can have its sign changed and changed back again', ()=> {
   cy.visit('http://127.0.0.1:5501/calculator.html')

   cy.get('#buttons__9').click()
   cy.get('#buttons__1').click()
   cy.get('#buttons__minus').click()
   cy.get('#buttons__subscreen').should('contain','-91')
   cy.get('#buttons__screen').should('contain','-91')
   
   cy.get('#buttons__minus').click()
   cy.get('#buttons__subscreen').should('contain','91')
   cy.get('#buttons__screen').should('contain','91')
})

//=======================
// clear and delete test
//=======================

it('should check that 608 can be changed to 610 using delete', ()=> {
   cy.visit('http://127.0.0.1:5501/calculator.html')

   cy.get('#buttons__6').click()
   cy.get('#buttons__0').click()
   cy.get('#buttons__8').click()
   cy.get('#buttons__delete').click()
   cy.get('#buttons__delete').click()
   cy.get('#buttons__1').click()
   cy.get('#buttons__0').click()

   cy.get('#buttons__subscreen').should('contain','610')
   cy.get('#buttons__screen').should('contain','610')
})

it('should clear both displays after a calculation', ()=> {
   cy.visit('http://127.0.0.1:5501/calculator.html')

   cy.get('#buttons__4').click()
   cy.get('#buttons__subtract').click()
   cy.get('#buttons__6').click()
   cy.get('#buttons__7').click()
   cy.get('#buttons__equal').click()
      
   cy.get('#buttons__subscreen').should('contain','4-67')
   cy.get('#buttons__screen').should('contain','-63')

   cy.get('#buttons__clear').click()

   cy.get('#buttons__subscreen').should('contain','')
   cy.get('#buttons__screen').should('contain','')
})

//=======================
// Morce complex tests and multiple operations
//=======================

it('if multiple operators are pressed consecutively it only uses the most recent one', ()=> {
   cy.visit('http://127.0.0.1:5501/calculator.html')

   cy.get('#buttons__4').click()
   cy.get('#buttons__2').click()
   cy.get('#buttons__subtract').click()
   cy.get('#buttons__multiply').click()
   cy.get('#buttons__subscreen').should('contain','42×')
   cy.get('#buttons__add').click()
   cy.get('#buttons__1').click()
   cy.get('#buttons__3').click()
   cy.get('#buttons__equal').click()
      
   cy.get('#buttons__subscreen').should('contain','42+13')
   cy.get('#buttons__screen').should('contain','55')
})


it('using a result of an equals in a subsequent calculation after altering it', ()=> {
   cy.visit('http://127.0.0.1:5501/calculator.html')

   cy.get('#buttons__1').click()
   cy.get('#buttons__0').click()
   cy.get('#buttons__multiply').click()
   cy.get('#buttons__7').click()
   cy.get('#buttons__equal').click()
      
   cy.get('#buttons__subscreen').should('contain','10×7')
   cy.get('#buttons__screen').should('contain','70')


   cy.get('#buttons__delete').click()
   cy.get('#buttons__3').click()
   cy.get('#buttons__minus').click()
   cy.get('#buttons__subscreen').should('contain','-73')
   cy.get('#buttons__screen').should('contain','-73')
   
   cy.get('#buttons__multiply').click()
   cy.get('#buttons__minus').click()
   cy.get('#buttons__2').click()
   cy.get('#buttons__equal').click()

   cy.get('#buttons__subscreen').should('contain','-73×-2')
   cy.get('#buttons__screen').should('contain','146')
})

it('use of every button in one super calculation', ()=> {
   cy.visit('http://127.0.0.1:5501/calculator.html')

   cy.get('#buttons__1').click()
   cy.get('#buttons__2').click()
   cy.get('#buttons__multiply').click()
   cy.get('#buttons__3').click()
   cy.get('#buttons__add').click()
   cy.get('#buttons__divide').click()
   cy.get('#buttons__4').click()
   cy.get('#buttons__add').click()
   cy.get('#buttons__5').click()
   cy.get('#buttons__decimal').click()
   cy.get('#buttons__6').click()
   cy.get('#buttons__7').click()
   cy.get('#buttons__subtract').click()
   cy.get('#buttons__8').click()
   cy.get('#buttons__9').click()
   cy.get('#buttons__0').click()
   cy.get('#buttons__minus').click()
   cy.get('#buttons__equal').click()
      
   cy.get('#buttons__subscreen').should('contain','12×3÷4+5.67--890')
   cy.get('#buttons__screen').should('contain','904.67')

   cy.get('#buttons__delete').click()
   cy.get('#buttons__delete').click()
   cy.get('#buttons__delete').click()
   cy.get('#buttons__delete').click()
   cy.get('#buttons__0').click()
   cy.get('#buttons__divide').click()
   cy.get('#buttons__3').click()
   cy.get('#buttons__0').click()
   cy.get('#buttons__equal').click()

   cy.get('#buttons__subscreen').should('contain','900÷30')
   cy.get('#buttons__screen').should('contain','30')
   
   cy.get('#buttons__clear').click()

   cy.get('#buttons__subscreen').should('contain','')
   cy.get('#buttons__screen').should('contain','')
})

