'use strict';

var vows = require('vows'),
assert = require('assert'),
format = require('../format');


var suite = vows.describe('format');
suite.addBatch({
	'number de': {
		topic: format,
		'35454354.4546 equals to 35.454.354,45  ': function (f) { assert.equal(f.number(35454354.4546,{scale:2, locale:'de'}), '35.454.354,45'  ); },
		'35454354.0    equals to 35.454.354,00  ': function (f) { assert.equal(f.number(35454354.0,   {scale:2, locale:'de'}), '35.454.354,00'  ); },
		'35454354      equals to 35.454.354     ': function (f) { assert.equal(f.number(35454354,     {scale:0, locale:'de'}), '35.454.354'     ); },
		'0.45456546    equals to          0,4546': function (f) { assert.equal(f.number(0.45456546,   {scale:4, locale:'de'}),          '0,4546'); }
	},
	'number en': {
		topic: format,
		'35454354.4546 equals to 35,454,354.45'  : function (f) { assert.equal(f.number(35454354.4546,{scale:2,locale:'en'}), '35,454,354.45'   ); },
		'0.45456546    equals to          0.4546': function (f) { assert.equal(f.number(0.45456546,   {scale:4,locale:'en'}),          '0.4546' ); }
	},
	'date de': {
		topic: format,
		'2012-05-03 equals to 03.05.2012'   :function (f) { assert.equal(f.date('2012-05-03'      , {locale:'de'}), '03.05.2012'); },
		'25. Februar 2014 equals 25.02.2014':function (f) { assert.equal(f.date('25. Februar 2014', {locale:'de'}), '25.02.2014'); }
	},
	'date en': {
		topic: format,
		'2012-05-03 equals to 03.05.2012':function (f) { assert.equal(f.date('2012-05-03', {locale:'en'}), '05/03/2012'); }
	}
}).export(module,{error:false});
