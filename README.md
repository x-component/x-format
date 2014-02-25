[![Build Status](https://travis-ci.org/x-component/x-format.png?v0.0.0)](https://travis-ci.org/x-component/x-format)
=======================================================================================================



x-format
========

This module contains 2 formatting functions for numbers and dates.

It offers a simple interface and a configurable default behavior.

Using options one can override the default behavior and use 
p.e. all date formats as defined by [moment.js](http://momentjs.com)

**usage**

    var format=require('x-format');

    var
        str1 = format.number({value:5,unit:'$'}), // '5.00 $'
        str2 = format.number(1000,4),             // '1,000.40'

        str3 = format.date(1393314010759),  // '02/25/2014' default format 'L'
        str4 = format.date(1393314010759),  // '02/25/2014'
        str5 = format.date('2014');         // '01/01/2014'


    format.config.locale='de'; // change the global default locale

    var	
        str5_de = format.date('2014'),                                           // '01.01.2014' as defined global, de 
        str5_en = format.date('2014',{locale:'en'}),                             // '01/01/2014' explicit with option
        str6    = format.date('2014-02-22',{locale:'en'}),                       // '02/22/2014' ISO conversion
        str7    = format.date(1393314010759,{format:'MMMM Do YYYY, h:mm:ss a'}), // 'Februar 25. 2014, 8:40:10 am'
        str8    = format.date(1393314010759,{format:'LLL'}),                     // '25. Februar 2014 8:40 Uhr'
        str9    = format.date('25. Februar 2014');                               // '25.02.2014' parse locale specific input


format.config
-------------

    format.config.locale = 'en'

@param {locale:} contains the default locale to use **globally**. Default &#39;en&#39;   


format.number: function( value, options )
-------------------------------

Formats number, with decimal point, thousend separators, scale and v.unit as suffix

@param {value} a number or an object like { value: &lt;number&gt; , unit: &#39;MB&#39; }   
@param {options} options merged with number.config   


format.number.en, .de ...
-------------------------

contains for each locale the thousands and decimal separator:

    de: { thousands:'.', decimal:',' }


format.number.config
--------------------

contains the global default options:

@param {scale} number of digits to show. Defualt 2   
@param {unit} show units in final string in case number is an object with a unit property. Default: true   


format.date: function( date, options )
-------------------------------

Formats a date according to the locale settings,
Default format is moment.js:L'.

**Example**:

   var str = require('x-format').date('2012-05-03', {locale:'de'}); // '03.05.2012'

@param {format} as defined by moment.js. Default &#39;L&#39;.   
