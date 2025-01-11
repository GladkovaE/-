describe('Проверка Авторизации', function () {

    it('Верный пароль и верный логин', function () 
    {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели правельный Логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели правельный Пароль
         cy.get('#loginButton').click(); // Нажали на кнопку Войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст Авт. виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверил, что Крестик виден
     })
 })
 describe('Восстановление пароля', function () {

    it('Забыли пароль?', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').click(); // Нажать на кнопку "Забыли пароль?"
         cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввести мейл для восстоновления
         cy.get('#restoreEmailButton').click(); // Нажать Отправить код
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после Отправки кода, вижу текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверил, что Крестик виден
     })
 }) 
 describe('Авторизация не прошла', function () {

    it('Пароль не верный', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели правельный Логин
        cy.get('#pass').type('iLoveqastudio12'); // Ввели не правельный Пароль
        cy.get('#loginButton').click(); // Нажали на кнопку Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после неверной авт. вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверил, что Крестик виден
     })
 }) 
 describe('Авторизация не прошла', function () {

    it('Логин не верный', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov1.ru'); // Ввели не правельный Логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели правельный Пароль
        cy.get('#loginButton').click(); // Нажали на кнопку Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после неверной авт. вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверил, что Крестик виден
     })
 })
 describe('Авторизация не прошла', function () {

    it('Ошибка валидации', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germandolnikov1.ru'); // Ввели Логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели правельный Пароль
        cy.get('#loginButton').click(); // Нажали на кнопку Войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что после неверной авт. вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверил, что Крестик виден
     })
 })
 describe('Авторизация не прошла', function () {

    it('Строчные буквы в Логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели строчные буквы в Логине
        cy.get('#pass').type('iLoveqastudio1'); // Ввели правельный Пароль
        cy.get('#loginButton').click(); // Нажали на кнопку Войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после неверной авт. вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверил, что Крестик виден
     })
 })