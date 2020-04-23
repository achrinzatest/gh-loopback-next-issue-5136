// Copyright 2020 Rifa Achrinza
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

const path = require('path');
const RestApplication = require('@loopback/rest').RestApplication;

class MyApi extends RestApplication {

  constructor() {
    super();
    this.static('/', path.join(__dirname, 'public'));
  }
}

const app = new MyApi();
app.start();

const url = app.restServer.url || '[Unknown URL]';
console.log(`running at ${url}`);
