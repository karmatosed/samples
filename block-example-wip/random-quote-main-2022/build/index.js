(window.webpackJsonp_random_quote=window.webpackJsonp_random_quote||[]).push([[1],{4:function(e,o,t){}}]),function(e){function o(o){for(var n,c,l=o[0],a=o[1],i=o[2],f=0,s=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&s.push(r[c][0]),r[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(p&&p(o);s.length;)s.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,o=0;o<u.length;o++){for(var t=u[o],n=!0,l=1;l<t.length;l++){var a=t[l];0!==r[a]&&(n=!1)}n&&(u.splice(o--,1),e=c(c.s=t[0]))}return e}var n={},r={0:0},u=[];function c(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=n,c.d=function(e,o,t){c.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,o){if(1&o&&(e=c(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)c.d(t,n,function(o){return e[o]}.bind(null,n));return t},c.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(o,"a",o),o},c.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},c.p="";var l=window.webpackJsonp_random_quote=window.webpackJsonp_random_quote||[],a=l.push.bind(l);l.push=o,l=l.slice();for(var i=0;i<l.length;i++)o(l[i]);var p=a;u.push([5,1]),t()}([function(e,o){e.exports=window.wp.element},function(e,o){e.exports=window.wp.blockEditor},function(e,o){e.exports=window.wp.i18n},function(e,o){e.exports=window.wp.blocks},,function(e,o,t){"use strict";t.r(o);var n=t(3),r=(t(4),t(0)),u=(t(2),t(1));const c=["Hello there","I wandered lonely as a something","Squirrel!","Peace be","Wooohooooo"],l=["Hello there","I wandered lonely as a something","Squirrel!","Peace be","Wooohooooo"];Object(n.registerBlockType)("create-block/random-quote",{edit:function(){return Object(r.createElement)("blockquote",Object(u.useBlockProps)(),function(e){return e[Math.floor(Math.random()*e.length)]}(c))},save:function(){return Object(r.createElement)("blockquote",u.useBlockProps.save(),function(e){return e[Math.floor(Math.random()*e.length)]}(l))}})}]);