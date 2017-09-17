// Navigation Bar
(function (document, window, index) {
	// Index is used to keep mulitple navs on the same page namespaced

	"use strict";

	var responsiveNav = function (el, options) {
		var computed = !!window.getComputedStyle;

		/**
		* getComputedStyle for older browsers
		*/
		if (!computed) {
			window.getComputedStyle = function(el) {
				this.el = el;
				this.getPropertyValue = function(prop) {
					var re = /(\-([a-z]){1})/g;
					if (prop === "float") {
						prop = "styleFloat";
					}
					if (re.test(prop)) {
						prop = prop.replace(re, function () {
							return arguments[2].toUpperCase();
						});
					}
					return el.currentStyle[prop] ? el.currentStyle[prop] : null;
				};
				return this;
			};
		}
		/* exported addEvent, removeEvent, getChildren, setAttributes, addClass, removeClass, forEach */

		/**
		* Add Event
		* fn arg can be an object or a function, thanks to handleEvent
		*
		* @param  {element}  element
		* @param  {event}  event
		* @param  {Function}  fn
		* @param  {boolean}  bubbling
		*/
		var addEvent = function (el, evt, fn, bubble) {
			if ("addEventListener" in el) {
				// BBOS6 doesn't support handleEvent, catch, and polyfill
				try {
					el.addEventListener(evt, fn, bubble);
				} catch (e) {
					if (typeof fn === "object" && fn.handleEvent) {
						el.addEventListener(evt, function(e) {
							// Bind fn as this and set first arg as event object
							fn.handleEven.call(fn, e);
						}, bubble);
					} else {
						throw e;
					}
				}
			} else if ("attachEvent" in el) {
				// check if the callback is an object and contains handleEvent
				if (typeof fn === "object" && fn.handleEvent) {
					el.attachEvent("on" + evt, function() {
						// Bind fn as this
						fn.handleEvent.call(fn);
					});
				} else {
					el.attachEvent("on" + evt, fn);
				}
			}
		},

		/**
		* Remove Event
		*/
		removeEvent = function (el, evt, fn, bubble) {
			if ("removeEventListener" in el) {
				try {
					el.removeEventListener(evt, fn, bubble);
				} catch (e) {
					if (typeof fn === "object" && fn.handleEvent) {
						el.removeEventListener(evt, function(e) {
							fn.handleEvent.call(fn, e);
						}, bubble);
					} else {
						throw e;
					}
				}
			} else if ("detachEvent" in el) {
				if (typeof fn === "object" && fn.handleEvent) {
					el.detachEvent("on" + evt, function() {
						fn.handleEvent.call(fn);
					});
				} else {
					el.detachEvent("on" + evt, fn);
				}
			}
		},
		
	} 
} 