const { Before, After } = require('cucumber');
const createApp = require('../../../app');

let serverInstance

Before('@iniciar-app', async function() {
    const port = process.env.PORT || 9000;
    app = createApp()
    serverInstance = app.listen(port);
});

After('@iniciar-app', async function() {
    serverInstance.close();
});