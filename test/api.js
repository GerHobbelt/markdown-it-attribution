'use strict';

/*eslint-env mocha*/

let assert = require('assert');

let markdownIt = require('@gerhobbelt/markdown-it');
let markdownItAttribution = require('../');

describe('The plugin api', function () {
  it('should make the marker configurable', function () {
    let output = markdownIt()
      .use(markdownItAttribution, { marker: '--' })
      .render('> Quotation\n> -- Attribution');

    assert.strictEqual(output, '<figure class="c-blockquote">\n<blockquote>\n<p>Quotation</p>\n</blockquote>\n<figcaption class="c-blockquote__attribution">Attribution</figcaption>\n</figure>\n');
  });

  it('should make the html class added to the elements configurable', function () {
    let output = markdownIt()
      .use(markdownItAttribution, { classNameContainer: 'c-quote', classNameAttribution: 'c-quote__attribution' })
      .render('> Quotation\n> — Attribution');

    assert.strictEqual(output, '<figure class="c-quote">\n<blockquote>\n<p>Quotation</p>\n</blockquote>\n<figcaption class="c-quote__attribution">Attribution</figcaption>\n</figure>\n');
  });

  it('should not add a class to elements if a falsy value is provided', function () {
    let output = markdownIt()
      .use(markdownItAttribution, { classNameContainer: null, classNameAttribution: null })
      .render('> Quotation\n> — Attribution');

    assert.strictEqual(output, '<figure>\n<blockquote>\n<p>Quotation</p>\n</blockquote>\n<figcaption>Attribution</figcaption>\n</figure>\n');
  });

  it('should keep the marker in the attribution line if desired', function () {
    let output = markdownIt()
      .use(markdownItAttribution, { removeMarker: false })
      .render('> Quotation\n> — Attribution');

    assert.strictEqual(output, '<figure class="c-blockquote">\n<blockquote>\n<p>Quotation</p>\n</blockquote>\n<figcaption class="c-blockquote__attribution">— Attribution</figcaption>\n</figure>\n');
  });
});
