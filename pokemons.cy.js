describe('Покупка нового Аватара', function () {

    it('Новый Аватар', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get(':nth-child(1) > .auth__input').type('delta2005.71@mail.ru');
         cy.get('#password').type('Kate10051971');
         cy.get('.auth__button').click();
         cy.get('.header__container > .header__id').click();
         cy.get('[href="/shop"] > .history-info').contains('Смена аватара');
         cy.get('[href="/shop"]').click();
         cy.get(':nth-child(2) > .shop__button').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('EKATERINA GLADKOVA');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
     })
 }) 