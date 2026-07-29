/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 454:
/***/ (function() {

/**
 * WooCommerce Cart Drawer (off-canvas) — frontend behavior.
 *
 * Independent state (`is-cart-drawer` on <html>/<body>) so it never collides
 * with the theme's mobile-menu off-canvas (`is-menu-sidebar`). Opens from the
 * header cart trigger, syncs its body from WooCommerce's own AJAX fragments.
 *
 * Only acts when the drawer panel (#customify-cart-drawer) is present — the
 * header cart item prints it only when Cart Behavior = Drawer, so in Dropdown
 * mode this file binds nothing and the native hover dropdown is untouched.
 */
(function ($) {
  'use strict';

  // Auto-open reads the theme's localized Customify_JS object (same one the
  // sibling woocommerce.js reads for wc_open_cart). Guarded so a missing
  // object doesn't break the drawer.
  var CJS = window.Customify_JS && typeof window.Customify_JS === 'object' ? window.Customify_JS : {};
  var autoOpen = !!CJS.wc_cart_drawer_auto_open;
  var FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  var drawer,
    overlay,
    lastFocused,
    autoOpenArmed = false,
    autoOpenTimer = null;
  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  function lockScroll() {
    var sw = getScrollbarWidth();
    if (sw > 0) {
      document.documentElement.style.setProperty('--customify-scrollbar-width', sw + 'px');
    }
    document.documentElement.classList.add('is-cart-drawer');
    document.body.classList.add('is-cart-drawer');
  }
  function unlockScroll() {
    document.documentElement.classList.remove('is-cart-drawer');
    document.body.classList.remove('is-cart-drawer');
    document.documentElement.style.removeProperty('--customify-scrollbar-width');
  }
  function isOpen() {
    return drawer && drawer.classList.contains('is-open');
  }

  /**
   * @param {boolean} focusDisabled When true (auto-open), don't steal focus
   *                                from the page the shopper is browsing.
   */
  function open(focusDisabled) {
    if (!drawer || isOpen()) {
      return;
    }
    lastFocused = document.activeElement;
    drawer.hidden = false;
    overlay.hidden = false;
    drawer.removeAttribute('inert');

    // Forced synchronous reflow so the transition runs even in a background
    // tab — requestAnimationFrame doesn't fire while the tab is hidden
    // (same convention as the theme's typography-control.js).
    void drawer.offsetWidth;
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    lockScroll();
    if (!focusDisabled) {
      var closeBtn = drawer.querySelector('.customify-cart-drawer__close');
      if (closeBtn) {
        closeBtn.focus();
      }
    }
  }
  function close() {
    if (!drawer || !isOpen()) {
      return;
    }
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    unlockScroll();
    drawer.setAttribute('inert', '');

    // Remove from the a11y tree after the slide-out. A timeout (rather than
    // transitionend) also covers prefers-reduced-motion, where no
    // transition fires.
    window.setTimeout(function () {
      if (!isOpen()) {
        drawer.hidden = true;
        overlay.hidden = true;
      }
    }, 300);
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  }
  function trapFocus(e) {
    if (e.key !== 'Tab' || !isOpen()) {
      return;
    }
    var f = drawer.querySelectorAll(FOCUSABLE);
    if (!f.length) {
      return;
    }
    var first = f[0];
    var last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
  function onKeydown(e) {
    if ((e.key === 'Escape' || e.key === 'Esc') && isOpen()) {
      e.preventDefault();
      close();
    } else {
      trapFocus(e);
    }
  }

  // Flag the drawer as empty (drives the "Continue Shopping" button) whenever
  // WC's mini-cart shows its empty message.
  function updateEmptyState() {
    if (!drawer) {
      return;
    }
    drawer.classList.toggle('is-cart-empty', !!drawer.querySelector('.woocommerce-mini-cart__empty-message'));
  }

  // Arm the drawer until WooCommerce's refreshed mini-cart fragments arrive.
  // The timeout is a safety net for fragment plugins that omit the completion
  // event; it is intentionally longer for Store API requests because their
  // classic mini-cart fragments are refreshed as a second request.
  function armAutoOpen(fallbackDelay) {
    if (!autoOpen) {
      return;
    }
    autoOpenArmed = true;
    window.clearTimeout(autoOpenTimer);
    autoOpenTimer = window.setTimeout(function () {
      if (autoOpenArmed) {
        autoOpenArmed = false;
        open(true);
      }
    }, fallbackDelay);
  }
  function openWhenFragmentsAreReady() {
    if (!autoOpenArmed) {
      return;
    }
    autoOpenArmed = false;
    window.clearTimeout(autoOpenTimer);
    open(true);
  }
  function bind() {
    // Belt-and-suspenders against a double enqueue: bind the delegated
    // handlers / auto-open listeners only once.
    if (window.__customifyCartDrawerBound) {
      return;
    }
    drawer = document.getElementById('customify-cart-drawer');
    overlay = document.querySelector('.customify-cart-drawer-overlay');

    // Drawer only renders when Cart Behavior = Drawer. In Dropdown mode
    // there's nothing to bind — leave the native dropdown alone.
    if (!drawer || !overlay) {
      return;
    }
    window.__customifyCartDrawerBound = true;
    drawer.setAttribute('inert', '');

    // Open from the header cart item; keep the href as a no-JS fallback.
    $(document).on('click', '.builder-header-wc_cart-item .cart-item-link', function (e) {
      e.preventDefault();
      open(false);
    });
    overlay.addEventListener('click', close);
    var closeBtn = drawer.querySelector('.customify-cart-drawer__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.preventDefault(); // it's an <a href="#"> (matches Quick View's close)
        close();
      });
    }

    // Show "Continue Shopping" only while the cart is empty — re-check on
    // load and on every WC cart change.
    updateEmptyState();
    $(document.body).on('wc_fragments_refreshed wc_fragments_loaded added_to_cart removed_from_cart', updateEmptyState);

    // Capture phase so ESC wins over other handlers.
    document.addEventListener('keydown', onKeydown, true);

    // Classic product-loop buttons already replace mini-cart fragments before
    // `added_to_cart`, so the next-tick fallback is enough if the fragment
    // event happened earlier in the same dispatch.
    $(document.body).on('added_to_cart', function () {
      armAutoOpen(0);
    });
    $(document.body).on('wc_fragments_refreshed wc_fragments_loaded', openWhenFragmentsAreReady);

    // Woo blocks and compatible third-party blocks use the native event
    // contract. Store API cart state does not update this classic mini-cart
    // markup, so ask WooCommerce fragments to refresh it before opening. The
    // preserveCartData flag distinguishes a real Store API completion from
    // Woo Blocks' jQuery-to-native bridge for classic added_to_cart events.
    document.body.addEventListener('wc-blocks_added_to_cart', function (e) {
      if (!e.detail || e.detail.preserveCartData !== true) {
        return;
      }
      armAutoOpen(2000);
      $(document.body).trigger('wc_fragment_refresh');
    });

    // Tear down a stuck-open drawer restored from the bfcache (back button).
    window.addEventListener('pageshow', function (e) {
      if (e.persisted && isOpen()) {
        drawer.classList.remove('is-open');
        overlay.classList.remove('is-open');
        drawer.hidden = true;
        overlay.hidden = true;
        drawer.setAttribute('inert', '');
        unlockScroll();
      }
    });
  }
  if (document.readyState !== 'loading') {
    bind();
  } else {
    document.addEventListener('DOMContentLoaded', bind);
  }
})(jQuery);

/***/ }),

/***/ 358:
/***/ (function() {

jQuery(document).ready(function ($) {
  var cartActiveTimer = null;
  var nativeCartRefreshArmed = false;
  var nativeCartRefreshTimer = null;
  function activateCartDropdown() {
    var cart = $(".item--wc_cart");
    if (!cart.length) {
      return;
    }
    cart.addClass("cart-active");
    clearTimeout(cartActiveTimer);
    cartActiveTimer = setTimeout(function () {
      cart.removeClass("cart-active");
    }, 4000);
  }
  function activateDropdownWhenFragmentsAreReady() {
    if (!nativeCartRefreshArmed) {
      return;
    }
    nativeCartRefreshArmed = false;
    clearTimeout(nativeCartRefreshTimer);
    activateCartDropdown();
  }
  if ($.blockUI) {
    $.blockUI.defaults.overlayCSS.backgroundColor = "#FFF";
    $.blockUI.defaults.overlayCSS.opacity = 0.7;
  }
  jQuery(document).on("selective-refresh-content-rendered", function (e, id) {
    if (id === "Customify_Builder_Item_WC_Cart__render" || id === "customify_customize_render_header") {
      $(document.body).trigger("wc_fragment_refresh");
    }
  });
  $(document.body).on("added_to_cart", function () {
    activateCartDropdown();
  });
  $(document.body).on("wc_fragments_refreshed wc_fragments_loaded", activateDropdownWhenFragmentsAreReady);

  // Woo blocks and compatible third-party blocks emit a native event after a
  // Store API add. Dropdown mode has no cart-drawer listener, so refresh the
  // classic mini-cart fragment here and reveal it only when its contents are
  // current. Ignore Woo Blocks' classic jQuery bridge (no preserveCartData) to
  // avoid processing the same legacy add twice.
  document.body.addEventListener("wc-blocks_added_to_cart", function (event) {
    if (!event.detail || event.detail.preserveCartData !== true || !document.querySelector(".item--wc_cart .cart-dropdown-box")) {
      return;
    }
    nativeCartRefreshArmed = true;
    clearTimeout(nativeCartRefreshTimer);
    nativeCartRefreshTimer = setTimeout(function () {
      activateDropdownWhenFragmentsAreReady();
    }, 2000);
    $(document.body).trigger("wc_fragment_refresh");
  });
  if (Customify_JS.wc_open_cart) {
    $(document.body).trigger("added_to_cart");
  }
  $(document.body).on("wc_cart_button_updated", function (e, button) {
    var p = button.parent();
    if (!button.hasClass("single_add_to_cart_button")) {
      $(".added_to_cart", p).addClass("button");
    }
    var pos = $(".add_to_cart_button", p).data("icon-pos") || "before";
    var icon = $(".add_to_cart_button", p).data("cart-icon") || "";
    var text = "";
    var icon_code = "";
    if (icon) {
      icon_code = '<i class="' + icon + '"></i>';
    }
    if (pos === "after") {
      if (icon_code) {
        text = wc_add_to_cart_params.i18n_view_cart + " " + icon_code;
      } else {
        text = wc_add_to_cart_params.i18n_view_cart;
      }
    } else {
      if (icon_code) {
        text = icon_code + " " + wc_add_to_cart_params.i18n_view_cart;
      } else {
        text = wc_add_to_cart_params.i18n_view_cart;
      }
    }
    $(".added_to_cart.wc-forward", p).html(text);
  });
  $(document.body).on("hover", ".item--wc_cart", function () {
    $(this).removeClass("cart-active");
  });
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  // Switch View mod
  $(document.body).on("click", ".wc-view-switcher .wc-view-mod", function (e) {
    e.preventDefault();
    var mod = $(this).data("mod") || "grid";
    $(".wc-view-switcher .wc-view-mod").removeClass("active");
    $(this).addClass("active");
    $(".woocommerce-listing, .products").removeClass("wc-grid-view wc-list-view");
    $(".woocommerce-listing, .products").addClass("wc-" + mod + "-view");
    setCookie("customify_wc_pl_view_mod", mod, 360);
  });

  // Custom plus minus for product/cart quantity
  $.fn._wc_plus_minus = function () {
    this.each(function () {
      var input = $(this);

      // WooCommerce add-to-cart blocks own their quantity markup and
      // interactivity. Do not wrap the input or add a theme +/- pair.
      if (input.closest(".wc-block-add-to-cart-form, .wc-block-add-to-cart-with-options").length) {
        return;
      }
      var check = input.data("qty-added") || false;
      if (!check) {
        input.data("qty-added", 1);
        input.wrap('<span class="input-qty-pm"></span>');
        var p = input.parent();
        input.attr("type", "text"); // remove up/ down arrow default
        p.append('<button type="button" class="input-pm-act input-pm-plus">+</button>');
        p.prepend('<button type="button" class="input-pm-act input-pm-minus">-</button>');

        // This button will increment the value
        $(".input-pm-plus", p).click(function (e) {
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          // Get its current value
          var currentVal = parseInt(input.val());
          // If is not undefined
          if (!isNaN(currentVal)) {
            // Increment
            input.val(currentVal + 1);
          } else {
            // Otherwise put a 0 there
            input.val(0);
          }
          input.trigger("change");
        });
        // This button will decrement the value till 0
        $(".input-pm-minus", p).click(function (e) {
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          // Get its current value
          var currentVal = parseInt(input.val());
          // If it isn't undefined or its greater than 0
          if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            input.val(currentVal - 1);
          } else {
            // Otherwise put a 0 there
            input.val(0);
          }
          input.trigger("change");
        });
      }
    });
    return this;
  };
  if (woocommerce_params.qty_pm) {
    $('input.qty[type="number"]')._wc_plus_minus();
  }
  $(document.body).on("updated_wc_div", function () {
    $('input.qty[type="number"]')._wc_plus_minus();
  });

  // Product tabs
  function _slideDeneCallback() {
    $(document.body).trigger("wc_toggle_done");
  }
  var tabs = $(".wc-tabs-toggle");
  $(".tab-section", tabs).not(":eq(0)").removeClass("active").find(".tab-section-content").slideUp(_slideDeneCallback);
  tabs.on("click", ".tab-section-heading", function (e) {
    e.preventDefault();
    var section = $(this).closest(".tab-section");
    if (!section.hasClass("active")) {
      $(".tab-section", tabs).removeClass("active").find(".tab-section-content").slideUp(_slideDeneCallback);
      section.toggleClass("active").find(".tab-section-content").slideDown(_slideDeneCallback);
    } else {
      $(".tab-section", tabs).removeClass("active").find(".tab-section-content").slideUp(_slideDeneCallback);
    }
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/* harmony import */ var _js_compatibility_woocommerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358);
/* harmony import */ var _js_compatibility_woocommerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_compatibility_woocommerce_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_compatibility_cart_drawer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(454);
/* harmony import */ var _js_compatibility_cart_drawer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_compatibility_cart_drawer_js__WEBPACK_IMPORTED_MODULE_1__);




}();
/******/ })()
;