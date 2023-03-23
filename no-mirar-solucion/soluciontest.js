test("Solo debería devolver el usuario David", function () {
    // importo la funcion desde app.js
    const { whoIsOnline } = require('./app.js')

    // mi lista de usuarios
    let users = [
        {
            username: "David",
            status: "online",
            lastActivity: 10,
        },
        {
            username: "Alex",
            status: "offline",
            lastActivity: 10,
        },
    ];


    // comprueba si el array de usernames (de tipo string) devuelto contiene a 'David'
    expect(whoIsOnline(users)).toContain('David');
});

// Implementa otro test 
test("Solo debería devolver el usuario Pedro", function () {
    // importo la funcion desde app.js
    const { whoIsOnline } = require('./app.js')

    // mi lista de usuarios
    let users = [
        {
            username: "Pedro",
            status: "online",
            lastActivity: 10,
        },
        {
            username: "Alex",
            status: "offline",
            lastActivity: 10,
        },
    ];


    // TODO : completa el expect
    expect(whoIsOnline(users)).toContain('Pedro');
});

// Implementa otro test 
test("Deberia devolver los usuarios de Pedro y Alex", function () {
    // importo la funcion desde app.js
    const { whoIsOnline } = require('./app.js')

    // mi lista de usuarios
    let users = [
        {
            username: "Pedro",
            status: "online",
            lastActivity: 10,
        },
        {
            username: "Alex",
            status: "online",
            lastActivity: 10,
        },
        {
            username: "Maria",
            status: "offline",
            lastActivity: 10,
        },
    ];


    // TODO : completa los DOS expect
    expect(whoIsOnline(users)).toContain('Pedro');
    expect(whoIsOnline(users)).toContain('Alex');

});

// Implementa otro test 
test("No debería devolver ningún usuario, es decir, debería devolver un array vacío", function () {
    // importo la funcion desde app.js
    const { whoIsOnline } = require('./app.js')

    // mi lista de usuarios
    let users = [
        {
            username: "Pedro",
            status: "offline",
            lastActivity: 10,
        },
        {
            username: "Alex",
            status: "offline",
            lastActivity: 10,
        },
        {
            username: "Maria",
            status: "offline",
            lastActivity: 10,
        },
    ];


    // TODO : completa el expect
    expect(whoIsOnline(users)).toHaveLength(0);
});

// Implementa otro test. CUIDADO! Puede que encuentres un bug en la función que debas arreglar ;)
test("Solamente debería devolver a 'Alex'.", function () {
    // importo la funcion desde app.js
    const { whoIsOnline } = require('./app.js')

    // mi lista de usuarios
    let users = [
        {
            username: "Pedro",
            status: "offline",
            lastActivity: 10,
        },
        {
            username: "Alex",
            status: "online",
            lastActivity: 10,
        },
    ];


    // TODO : completa el expect
    expect(whoIsOnline(users)).toContain('Alex');
});




