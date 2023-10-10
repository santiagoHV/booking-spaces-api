const { Before, After } = require('cucumber');
const createApp = require('../../../app'); // Importa la aplicación Express

let serverInstance

Before('@iniciar-app', async function() {
    const port = process.env.PORT || 9000;
    app = createApp()
    serverInstance = app.listen(port);

    console.log('se inicio la app')
});

After('@iniciar-app', async function() {
    serverInstance.close();
    console.log('se acabo la app')

});