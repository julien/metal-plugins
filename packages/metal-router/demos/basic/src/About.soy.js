/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from About.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace About.
 * @public
 */

goog.module('About.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias1 = Soy.getTemplate('Image.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('Router.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div');
    ie_open('a', null, null,
        'href', '/demos/basic/');
      itext('Home');
    ie_close('a');
    itext(' | ');
    ie_open('a', null, null,
        'href', '/demos/basic/home-page');
      itext('Home Page');
    ie_close('a');
    itext(' | ');
    ie_open('a', null, null,
        'href', '/demos/basic/about');
      itext('About');
    ie_close('a');
    itext(' | ');
    ie_open('a', null, null,
        'href', '/demos/basic/about-us');
      itext('About Us');
    ie_close('a');
    itext(' | ');
    ie_open('a', null, null,
        'href', '/demos/basic/about-delayed');
      itext('About Delayed');
    ie_close('a');
    ie_open('p');
      $templateAlias1(soy.$$augmentMap(opt_data, {id: 'image', width: 600, height: 383, src: 'img/img0.jpg'}), null, opt_ijData);
    ie_close('p');
    ie_open('p');
      itext('You are at page ');
      itext((goog.asserts.assert((opt_data.title) != null), opt_data.title));
      itext('! Sub-route ');
      ie_open('a', null, null,
          'href', '/demos/basic/about-subroute');
        itext('click here');
      ie_close('a');
      itext('.');
      $templateAlias2({path: '/demos/basic/about-subroute', initialState: {title: 'About Sub-route'}, component: 'About'}, null, opt_ijData);
    ie_close('p');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'About.render';
}

exports.render.params = ["title"];
exports.render.types = {"title":"any"};
templates = exports;
return exports;

});

class About extends Component {}
Soy.register(About, templates);
export default templates;
export { About, templates };
/* jshint ignore:end */
