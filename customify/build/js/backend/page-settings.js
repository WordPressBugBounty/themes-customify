/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 96:
/***/ (function() {


;// external ["wp","plugins"]
var external_wp_plugins_namespaceObject = window["wp"]["plugins"];
;// external ["wp","editor"]
var external_wp_editor_namespaceObject = window["wp"]["editor"];
;// external ["wp","coreData"]
var external_wp_coreData_namespaceObject = window["wp"]["coreData"];
;// external ["wp","data"]
var external_wp_data_namespaceObject = window["wp"]["data"];
;// external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// external ["wp","components"]
var external_wp_components_namespaceObject = window["wp"]["components"];
;// external "ReactJSXRuntime"
var external_ReactJSXRuntime_namespaceObject = window["ReactJSXRuntime"];
;// ./src/backend/page-settings/index.js
/**
 * Customify Page Settings — block editor plugin.
 *
 * Renders a PluginDocumentSettingPanel with a flat stack of controls in the
 * Document sidebar. Sections (Layout, Disable Elements, Page Header) are
 * introduced by uppercase section labels rather than tabs.
 */










/** Config object injected by wp_localize_script in page-settings.php */

const config = window.customifyPageSettings || {};

// ---------------------------------------------------------------------------
// Layout → contentSize sync
// ---------------------------------------------------------------------------

const TWO_SIDEBAR_LAYOUTS = ['sidebar-content-sidebar', 'sidebar-sidebar-content', 'content-sidebar-sidebar'];

// Content Layout values that disable the sidebar entirely — both visually
// (we hide the dropdown) and for contentSize purposes (force no_sidebar).
// `narrow` joins this list because narrow content is a focused-reading layout
// — combining it with a sidebar looks lopsided. PHP's
// customify_force_no_sidebar_for_full_content_layout() applies the same gate.
const NO_SIDEBAR_CONTENT_LAYOUTS = ['full-width', 'full-stretched', 'narrow'];
function isNoSidebarContentLayout(contentLayout) {
  return NO_SIDEBAR_CONTENT_LAYOUTS.includes(contentLayout);
}
const CONTENT_SIZE_STYLE_ID = 'customify-layout-content-size';

/**
 * Map a sidebar layout slug to a contentSize value.
 *
 * The map is the single source of truth in PHP (customify_get_layout_content_sizes
 * in inc/template-functions.php) — localized via wp_localize_script. Returns
 * undefined if the map is missing so callers can skip applying invalid CSS.
 */
function layoutToContentSize(layout) {
  const map = config.contentSizeMap;
  if (!map) return undefined;
  if (TWO_SIDEBAR_LAYOUTS.includes(layout)) return map.two_sidebars;
  if (layout === 'content') return map.no_sidebar;
  return map.one_sidebar;
}

/**
 * Inject/update a <style> tag in a given document.
 */
function injectStyle(doc, id, css) {
  if (!doc || !doc.head) return;
  let style = doc.getElementById(id);
  if (!style) {
    style = doc.createElement('style');
    style.id = id;
    doc.head.appendChild(style);
  }
  if (style.textContent !== css) {
    style.textContent = css;
  }
}

/**
 * Build the inline CSS payload for a given size + content_layout combo.
 *
 * The `max-width: none` override for full-width / full-stretched layouts lives
 * here (not in PHP editor.php) so toggling content_layout in the metabox can
 * actually undo it. A PHP-emitted static override would stay applied even
 * after JS removes it from this style block.
 *
 * No !important on the body rule — custom-property inheritance lets the
 * body-scoped declaration override the theme.json :root baseline for
 * everything inside body without needing to win specificity. Matches the
 * frontend cascade in customify_layout_content_size_css().
 */
function buildContentSizeCss(size, contentLayout) {
  let css = '';
  if (size) {
    css += `body{--wp--style--global--content-size:${size};}`;
  }
  // full-width: block fills canvas with a 32px gap each side, mirroring
  // the frontend's `.customify-container { padding: 2em }` breathing room.
  // In the editor there is no .customify-container wrapper, so we subtract
  // the padding from the block's max-width explicitly.
  if (contentLayout === 'full-width') {
    css += '.editor-styles-wrapper > .is-root-container > *:not(.alignfull):not(.alignwide){max-width:calc(100% - 64px);}';
  }
  // full-stretched: block fills canvas edge-to-edge — frontend version sets
  // `.content-full-stretched > .customify-container { padding: 0 }`, so the
  // editor matches by removing the cap entirely.
  if (contentLayout === 'full-stretched') {
    css += '.editor-styles-wrapper > .is-root-container > *:not(.alignfull):not(.alignwide){max-width:none;}';
  }
  return css;
}
function applyContentSizeCss(css) {
  injectStyle(document, CONTENT_SIZE_STYLE_ID, css);
  const iframe = document.querySelector('iframe[name="editor-canvas"]');
  if (iframe && iframe.contentDocument) {
    injectStyle(iframe.contentDocument, CONTENT_SIZE_STYLE_ID, css);
  }
}

/**
 * Push runtime contentSize + wideSize into the block-editor settings store so
 * block toolbar dropdown hints (e.g., "None — Max 863px wide") reflect what the
 * CSS variable actually resolves to. Without this the labels read from
 * theme.json's static value (`contentSize: "863px"`) regardless of the
 * runtime override we inject via CSS, which misleads authors.
 *
 * The canonical write target is `__experimentalFeatures.layout` — that's what
 * core blocks AND third-party blocks (Blocksify Section, etc.) read when
 * rendering the alignment dropdown. Updating the top-level `layout` key alone
 * is not enough; both must move in lockstep to stay self-consistent.
 *
 * Bailing-out semantics: only write when values actually changed, to avoid
 * triggering a no-op re-render of every component that selects from settings.
 */
function syncEditorLayoutSettings(contentSize, wideSize) {
  const store = (0,external_wp_data_namespaceObject.select)('core/block-editor');
  if (!store) return;
  const settings = store.getSettings();
  const expFeatures = settings.__experimentalFeatures || {};
  const expLayout = expFeatures.layout || {};
  const topLayout = settings.layout || {};
  const nextContent = contentSize || expLayout.contentSize;
  const nextWide = wideSize || expLayout.wideSize;
  if (expLayout.contentSize === nextContent && expLayout.wideSize === nextWide && topLayout.contentSize === nextContent && topLayout.wideSize === nextWide) {
    return;
  }
  (0,external_wp_data_namespaceObject.dispatch)('core/block-editor').updateSettings({
    layout: {
      ...topLayout,
      contentSize: nextContent,
      wideSize: nextWide
    },
    __experimentalFeatures: {
      ...expFeatures,
      layout: {
        ...expLayout,
        contentSize: nextContent,
        wideSize: nextWide
      }
    }
  });
}

/**
 * Subscribes to _customify_sidebar + _customify_content_layout meta and keeps
 * the editor's --wp--style--global--content-size in sync as the user toggles
 * the Sidebar / Content Layout dropdowns — no save/reload required.
 *
 * Registered as its own plugin (instead of nesting inside the panel) so it
 * stays mounted even when the user collapses the Page Settings panel.
 */
function ContentSizeSync() {
  const postType = (0,external_wp_data_namespaceObject.useSelect)(select => select('core/editor')?.getCurrentPostType(), []);
  const [meta] = (0,external_wp_coreData_namespaceObject.useEntityProp)('postType', postType, 'meta');
  const sidebarMeta = meta && meta._customify_sidebar || '';
  const contentLayout = meta && meta._customify_content_layout || '';

  // full-width / full-stretched override the sidebar layout — those modes
  // don't render a sidebar, so contentSize must use the no-sidebar value.
  const layout = isNoSidebarContentLayout(contentLayout) ? 'content' : sidebarMeta || config.fallbackLayout || 'content-sidebar';
  const layoutSize = layoutToContentSize(layout);

  // Resolution priority (highest wins):
  //   1. Full-Width / Full-Stretched Content Layout — viewport-bound, mirrors
  //      .site-content.content-full-{width,stretched} frontend rule.
  //   2. Narrow Content Layout — uses Customizer narrow_width regardless of layout.
  //      Mirrors .site-content.content-narrow frontend rule.
  //   3. Single-post override — for post type, single_blog_post_content_width wins.
  //      Mirrors body.single-post frontend rule.
  //   4. Layout-derived size from sidebar layout map.
  let size;
  if (contentLayout === 'full-width') {
    size = 'calc(100vw - 64px)';
  } else if (contentLayout === 'full-stretched') {
    size = '100vw';
  } else if (contentLayout === 'narrow' && config.narrowWidth) {
    size = config.narrowWidth;
  } else if (config.postType === 'post' && config.postContentSize) {
    size = config.postContentSize;
  } else {
    size = layoutSize;
  }
  const css = buildContentSizeCss(size, contentLayout);

  // Dynamic wide-size per layout (matches PHP customify_layout_content_size_css):
  //   - Full-Width / Full-Stretched (size is calc() or 100vw) → wide = content
  //     (alignwide visually = align=none — viewport-bound layouts don't break out)
  //   - No-sidebar / Narrow (numeric px size) → size + 400 (200px breakout each side)
  //   - Sidebar layouts → wide = content (parent-constrained, no overlap)
  // Used to push into __experimentalFeatures.layout.wideSize so alignment
  // dropdown labels show the right "Max Xpx wide" hint.
  const isViewportBoundSize = typeof size === 'string' && /calc|vw/.test(size);
  const sizeNum = size && !isViewportBoundSize ? parseInt(size, 10) : null;
  const isNoSidebarFamily = isNoSidebarContentLayout(contentLayout) || layout === 'content';
  let wideSize;
  if (isViewportBoundSize) {
    wideSize = size;
  } else if (sizeNum && isNoSidebarFamily) {
    wideSize = `${sizeNum + 400}px`;
  } else {
    wideSize = size || config.wideSize;
  }
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    applyContentSizeCss(css);

    // Keep block-editor settings.layout in lockstep with the CSS variable so
    // alignment dropdown labels (e.g., "None — Max 863px wide") reflect the
    // resolved size, not theme.json's static one. The initial dispatch can
    // be overwritten by editor bootstrap loading theme.json after our mount,
    // so subscribe and re-apply on every settings change — syncEditor-
    // LayoutSettings has internal bail-out so it's a no-op once our values
    // have stuck. Subscription is scoped to core/block-editor so we don't
    // fire on unrelated store updates.
    const applyLayoutSync = () => syncEditorLayoutSettings(size, wideSize);
    applyLayoutSync();
    const unsubscribeSync = (0,external_wp_data_namespaceObject.subscribe)(applyLayoutSync, 'core/block-editor');

    // Editor canvas iframe mounts asynchronously and may reload (e.g.
    // when toggling device preview). Watch for its load event so we
    // re-apply the style into the fresh iframe document.
    const iframe = document.querySelector('iframe[name="editor-canvas"]');
    if (!iframe) {
      // Iframe may not exist yet — retry once after it likely mounts.
      const timer = setTimeout(() => applyContentSizeCss(css), 500);
      return () => {
        clearTimeout(timer);
        unsubscribeSync();
      };
    }
    const onLoad = () => applyContentSizeCss(css);
    iframe.addEventListener('load', onLoad);
    return () => {
      iframe.removeEventListener('load', onLoad);
      unsubscribeSync();
    };
  }, [css, size, wideSize]);
  return null;
}

// ---------------------------------------------------------------------------
// Option lists
// ---------------------------------------------------------------------------

const CONTENT_LAYOUT_OPTIONS = [{
  label: (0,external_wp_i18n_namespaceObject.__)('Default', 'customify'),
  value: ''
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Full Width', 'customify'),
  value: 'full-width'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Full Width – Stretched', 'customify'),
  value: 'full-stretched'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Narrow', 'customify'),
  value: 'narrow'
}];
const SIDEBAR_OPTIONS = [{
  label: (0,external_wp_i18n_namespaceObject.__)('Inherit from Customizer', 'customify'),
  value: ''
}, ...Object.entries(config.sidebarLayouts || {}).map(([value, label]) => ({
  label,
  value
}))];
const PAGE_HEADER_OPTIONS = [{
  label: (0,external_wp_i18n_namespaceObject.__)('Inherit from Customizer', 'customify'),
  value: 'default'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Default - inside main content', 'customify'),
  value: 'normal'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Cover', 'customify'),
  value: 'cover'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Titlebar', 'customify'),
  value: 'titlebar'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Hide', 'customify'),
  value: 'none'
}];
const BREADCRUMB_OPTIONS = [{
  label: (0,external_wp_i18n_namespaceObject.__)('Inherit from Customizer', 'customify'),
  value: 'default'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Hide', 'customify'),
  value: 'hide'
}, {
  label: (0,external_wp_i18n_namespaceObject.__)('Show', 'customify'),
  value: 'show'
}];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/** A single ToggleControl bound to a _customify_* meta key ('1' / ''). */
function MetaToggle({
  label,
  metaKey,
  meta,
  setMeta
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ToggleControl, {
    label: label,
    checked: meta[`_customify_${metaKey}`] === '1',
    onChange: on => setMeta({
      [`_customify_${metaKey}`]: on ? '1' : ''
    })
  });
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

function CustomifyPageSettings() {
  const postType = (0,external_wp_data_namespaceObject.useSelect)(select => select('core/editor').getCurrentPostType(), []);
  const [meta, setMeta] = (0,external_wp_coreData_namespaceObject.useEntityProp)('postType', postType, 'meta');
  if (!meta) return null;
  const get = key => meta[`_customify_${key}`] ?? '';
  const set = (key, v) => setMeta({
    [`_customify_${key}`]: v
  });
  const contentLayout = get('content_layout');
  const sidebarHidden = isNoSidebarContentLayout(contentLayout);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "customify-ps-body",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.SelectControl, {
      label: (0,external_wp_i18n_namespaceObject.__)('Content Layout', 'customify'),
      value: contentLayout,
      options: CONTENT_LAYOUT_OPTIONS,
      onChange: v => set('content_layout', v)
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.SelectControl, {
      label: (0,external_wp_i18n_namespaceObject.__)('Page Title Layout', 'customify'),
      value: get('page_header_display') || 'default',
      options: PAGE_HEADER_OPTIONS,
      onChange: v => set('page_header_display', v)
    }), !sidebarHidden && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.SelectControl, {
      label: (0,external_wp_i18n_namespaceObject.__)('Sidebar', 'customify'),
      value: get('sidebar'),
      options: SIDEBAR_OPTIONS,
      onChange: v => set('sidebar', v)
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
      className: "customify-ps-section-label",
      children: (0,external_wp_i18n_namespaceObject.__)('Disable Elements', 'customify')
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(MetaToggle, {
      label: (0,external_wp_i18n_namespaceObject.__)('Header', 'customify'),
      metaKey: "disable_header",
      meta: meta,
      setMeta: setMeta
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(MetaToggle, {
      label: (0,external_wp_i18n_namespaceObject.__)('Header Top', 'customify'),
      metaKey: "disable_header_top",
      meta: meta,
      setMeta: setMeta
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(MetaToggle, {
      label: (0,external_wp_i18n_namespaceObject.__)('Header Main', 'customify'),
      metaKey: "disable_header_main",
      meta: meta,
      setMeta: setMeta
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(MetaToggle, {
      label: (0,external_wp_i18n_namespaceObject.__)('Header Bottom', 'customify'),
      metaKey: "disable_header_bottom",
      meta: meta,
      setMeta: setMeta
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(MetaToggle, {
      label: (0,external_wp_i18n_namespaceObject.__)('Page Title', 'customify'),
      metaKey: "disable_page_title",
      meta: meta,
      setMeta: setMeta
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(MetaToggle, {
      label: (0,external_wp_i18n_namespaceObject.__)('Content Vertical Padding', 'customify'),
      metaKey: "disable_content_vertical_padding",
      meta: meta,
      setMeta: setMeta
    }), config.hasProFeatures && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(MetaToggle, {
      label: (0,external_wp_i18n_namespaceObject.__)('Footer Top', 'customify'),
      metaKey: "disable_footer_top",
      meta: meta,
      setMeta: setMeta
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(MetaToggle, {
      label: (0,external_wp_i18n_namespaceObject.__)('Footer Main', 'customify'),
      metaKey: "disable_footer_main",
      meta: meta,
      setMeta: setMeta
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(MetaToggle, {
      label: (0,external_wp_i18n_namespaceObject.__)('Footer Bottom', 'customify'),
      metaKey: "disable_footer_bottom",
      meta: meta,
      setMeta: setMeta
    }), config.hasBreadcrumb && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
        className: "customify-ps-section-label",
        children: (0,external_wp_i18n_namespaceObject.__)('Page Header', 'customify')
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.SelectControl, {
        label: (0,external_wp_i18n_namespaceObject.__)('Breadcrumb', 'customify'),
        value: get('breadcrumb_display') || 'default',
        options: BREADCRUMB_OPTIONS,
        onChange: v => set('breadcrumb_display', v)
      })]
    })]
  });
}

// ---------------------------------------------------------------------------
// Register plugin
// ---------------------------------------------------------------------------

(0,external_wp_plugins_namespaceObject.registerPlugin)('customify-page-settings', {
  render: () => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_editor_namespaceObject.PluginDocumentSettingPanel, {
    name: "customify-page-settings-panel",
    title: (0,external_wp_i18n_namespaceObject.__)('Customify Page Settings', 'customify'),
    className: "customify-page-settings-panel",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(CustomifyPageSettings, {})
  })
});

// Registered as a separate plugin so it stays mounted regardless of whether
// the Page Settings panel above is expanded or collapsed.
(0,external_wp_plugins_namespaceObject.registerPlugin)('customify-content-size-sync', {
  render: () => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ContentSizeSync, {})
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			597: 0,
/******/ 			549: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcustomify"] = self["webpackChunkcustomify"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [549], function() { return __webpack_require__(96); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;