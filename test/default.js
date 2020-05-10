'use strict';

/*eslint-env mocha*/

let path = require('path');
let generate = require('@gerhobbelt/markdown-it-testgen');

describe('default attribution', function () {
  let md = require('@gerhobbelt/markdown-it')()
    .use(require('../'));

  generate(path.join(__dirname, 'fixtures/default.txt'), md);
});
