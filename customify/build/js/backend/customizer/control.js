/******/ (function() { // webpackBootstrap
/******/ 	"use strict";

;// external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// external ["wp","primitives"]
var external_wp_primitives_namespaceObject = window["wp"]["primitives"];
;// external "ReactJSXRuntime"
var external_ReactJSXRuntime_namespaceObject = window["ReactJSXRuntime"];
;// ./node_modules/@wordpress/icons/build-module/library/arrow-right.mjs
// packages/icons/src/library/arrow-right.tsx


var arrow_right_default = /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, { d: "m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z" }) });

//# sourceMappingURL=arrow-right.mjs.map

;// ./node_modules/@wordpress/icons/build-module/library/arrow-down.mjs
// packages/icons/src/library/arrow-down.tsx


var arrow_down_default = /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, { d: "m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z" }) });

//# sourceMappingURL=arrow-down.mjs.map

;// ./node_modules/@wordpress/icons/build-module/library/justify-left.mjs
// packages/icons/src/library/justify-left.tsx


var justify_left_default = /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, { d: "M9 9v6h11V9H9zM4 20h1.5V4H4v16z" }) });

//# sourceMappingURL=justify-left.mjs.map

;// ./node_modules/@wordpress/icons/build-module/library/justify-center.mjs
// packages/icons/src/library/justify-center.tsx


var justify_center_default = /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, { d: "M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z" }) });

//# sourceMappingURL=justify-center.mjs.map

;// ./node_modules/@wordpress/icons/build-module/library/justify-right.mjs
// packages/icons/src/library/justify-right.tsx


var justify_right_default = /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, { d: "M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z" }) });

//# sourceMappingURL=justify-right.mjs.map

;// ./node_modules/@wordpress/icons/build-module/library/justify-space-between.mjs
// packages/icons/src/library/justify-space-between.tsx


var justify_space_between_default = /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, { d: "M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z" }) });

//# sourceMappingURL=justify-space-between.mjs.map

;// ./node_modules/@wordpress/icons/build-module/icon/index.mjs
// packages/icons/src/icon/index.ts

var icon_default = (0,external_wp_element_namespaceObject.forwardRef)(
  ({ icon, size = 24, ...props }, ref) => {
    return (0,external_wp_element_namespaceObject.cloneElement)(icon, {
      width: size,
      height: size,
      ...props,
      ref
    });
  }
);

//# sourceMappingURL=index.mjs.map

;// ./node_modules/@wordpress/icons/build-module/library/chevron-down.mjs
// packages/icons/src/library/chevron-down.tsx


var chevron_down_default = /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, { d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z" }) });

//# sourceMappingURL=chevron-down.mjs.map

;// ./src/backend/customizer/js/controls/columns-settings/index.jsx
/**
 * Column Settings control — React port that keeps the exact pre-React markup.
 *
 * - Outer chrome: `.customify-actions` (edit/reset dashicons) + `.customify-modal-settings`
 *   slide-down panel.
 * - Inside the panel: `.customify-cs__device-note` + `.customify-cs__accordion`
 *   with `.customify-cs__item` heads/bodies.
 * - Direction field: 2-button group (row / column) using `@wordpress/icons`.
 * - Align field: 4-button group (flex-start / flex-center / flex-end /
 *   space-between) using `@wordpress/icons`.
 * - Gap field: jQuery-UI slider (via `customifyField.initSlider`) with em/px unit picker.
 * - Padding field: rendered by the existing `customifyField.addFields` css_ruler pipeline.
 *
 * React owns the data flow; the DOM remains visually identical to the jQuery version.
 *
 * Saved value shape:
 *   { desktop: { <colKey>: { direction, align, gap: { unit, value }, padding: { ... } } }, mobile: { ... } }
 *
 * `direction` is `'row'` or `'column'`. `align` is one of
 * `flex-start | flex-center | flex-end | space-between` and maps to
 * `justify-content` on the main axis defined by `direction`.
 *
 * Bundled into the existing backend/customizer/control webpack entry
 * (imported from src/backend/customizer/js/control.js).
 */





// ---------------------------------------------------------------------------
// Setting bridge
// ---------------------------------------------------------------------------

function parseRaw(raw) {
  if (raw === null || raw === undefined || raw === '') return {};
  let parsed = raw;
  if (typeof raw !== 'object') {
    try {
      parsed = JSON.parse(decodeURIComponent(raw));
    } catch (_) {
      try {
        parsed = JSON.parse(raw);
      } catch (__) {
        return {};
      }
    }
  }
  if (!parsed || typeof parsed !== 'object') return {};
  return parsed;
}
function useCustomizeSetting(controlId, defaultValue) {
  const skipNext = (0,external_wp_element_namespaceObject.useRef)(false);
  const [value, setLocal] = (0,external_wp_element_namespaceObject.useState)(() => {
    const setting = wp.customize?.(controlId);
    const raw = setting ? setting.get() : null;
    const parsed = parseRaw(raw);
    return parsed && Object.keys(parsed).length ? parsed : defaultValue || {};
  });
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const setting = wp.customize?.(controlId);
    if (!setting || !setting.bind) return;
    const handler = raw => {
      if (skipNext.current) {
        skipNext.current = false;
        return;
      }
      setLocal(parseRaw(raw));
    };
    setting.bind(handler);
    return () => setting.unbind && setting.unbind(handler);
  }, [controlId]);
  function setValue(next) {
    setLocal(prev => {
      const resolved = typeof next === 'function' ? next(prev) : next;
      const setting = wp.customize?.(controlId);
      if (!setting) return resolved;

      // Suppress the customify framework's refreshFromSetting() — without
      // this flag, the framework's setting.bind handler treats our update
      // as an external change and empties .customify--settings-fields,
      // which would destroy this React mount node and reset our `open`
      // state. The framework's own getValue() sets the same flag.
      const control = wp.customize?.control?.(controlId);
      skipNext.current = true;
      if (control) control._customifyWriting = true;
      try {
        setting.set(encodeURIComponent(JSON.stringify(resolved)));
      } catch (_) {} finally {
        if (control) control._customifyWriting = false;
      }
      return resolved;
    });
  }
  return [value, setValue];
}
function useColLayoutCount(settingId, fallback) {
  function read() {
    if (!settingId) return fallback;
    const setting = wp.customize?.(settingId);
    if (!setting) return fallback;
    const data = parseRaw(setting.get());
    if (data && data.count) {
      const n = parseInt(data.count, 10);
      if (!isNaN(n) && n >= 1) return n;
    }
    return fallback;
  }
  const [count, setCount] = (0,external_wp_element_namespaceObject.useState)(read);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!settingId) return;
    const setting = wp.customize?.(settingId);
    if (!setting || !setting.bind) return;
    const handler = () => setCount(read());
    setting.bind(handler);
    return () => setting.unbind && setting.unbind(handler);
  }, [settingId]);
  return count;
}

// Subscribe to `wp.customize.previewedDevice`, normalising the raw value
// against the field's enabled `devices` list. When the previewed device
// isn't in the field's list (e.g. user picks Tablet on a header field
// that only declares desktop + mobile), fall back to the closest match
// — tablet collapses to mobile, anything unknown collapses to desktop.
function usePreviewedDevice(devicesList) {
  function normalize(d) {
    if (devicesList.indexOf(d) !== -1) return d;
    if (d === 'tablet' && devicesList.indexOf('mobile') !== -1) return 'mobile';
    return devicesList[0] || 'desktop';
  }
  const [device, setDevice] = (0,external_wp_element_namespaceObject.useState)(() => {
    try {
      return normalize(wp.customize?.previewedDevice?.get?.() || 'desktop');
    } catch (_) {
      return devicesList[0] || 'desktop';
    }
  });
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const pd = wp.customize?.previewedDevice;
    if (!pd || !pd.bind) return;
    const handler = d => setDevice(normalize(d));
    pd.bind(handler);
    return () => pd.unbind && pd.unbind(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [devicesList.join(',')]);
  return device;
}

// ---------------------------------------------------------------------------
// Sub-controls
// ---------------------------------------------------------------------------

const DIRECTION_OPTIONS = [{
  value: 'row',
  icon: arrow_right_default,
  label: 'Row'
}, {
  value: 'column',
  icon: arrow_down_default,
  label: 'Column'
}];
const ALIGN_OPTIONS = [{
  value: 'flex-start',
  icon: justify_left_default,
  label: 'Flex start'
}, {
  value: 'flex-center',
  icon: justify_center_default,
  label: 'Flex center'
}, {
  value: 'flex-end',
  icon: justify_right_default,
  label: 'Flex end'
}, {
  value: 'space-between',
  icon: justify_space_between_default,
  label: 'Space between'
}];
function ButtonGroup({
  fieldName,
  label,
  options,
  value,
  defaultValue,
  onChange
}) {
  const current = value || defaultValue || options[0].value;
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: `customify--group-field ft--${fieldName} customify-cs__${fieldName}-wrap`,
    "data-field-name": fieldName,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("label", {
      className: "customize-control-title customify-cs__field-label",
      children: label
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "customify-cs__btn-group",
      role: "group",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("input", {
        type: "hidden",
        className: "customify-cs__btn-value change-by-js",
        "data-name": fieldName,
        value: current,
        readOnly: true
      }), options.map(opt => {
        const isActive = current === opt.value;
        return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("button", {
          type: "button",
          className: `customify-cs__btn components-button ${isActive ? ' is-primary' : ''}`,
          "data-value": opt.value,
          "aria-label": (0,external_wp_i18n_namespaceObject.__)(opt.label, 'customify'),
          title: (0,external_wp_i18n_namespaceObject.__)(opt.label, 'customify'),
          onMouseDown: e => e.preventDefault(),
          onClick: e => {
            e.preventDefault();
            e.stopPropagation();
            onChange(opt.value);
          },
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(icon_default, {
            icon: opt.icon,
            size: 20
          })
        }, opt.value);
      })]
    })]
  });
}
function GapField({
  value,
  onChange
}) {
  const wrapRef = (0,external_wp_element_namespaceObject.useRef)(null);
  const v = value && typeof value === 'object' ? value : {
    unit: 'em',
    value: 1
  };
  const uid = (0,external_wp_element_namespaceObject.useMemo)(() => `gap-${Date.now()}-${Math.floor(Math.random() * 1000)}`, []);
  const def = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    unit: 'em',
    value: 1
  }), []);

  // Step depends on the current unit — em uses fractional 0.1 steps,
  // px uses whole-pixel 1 steps.
  const stepFor = unit => unit === 'px' ? 1 : 0.1;
  const step = stepFor(v.unit || 'em');
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!wrapRef.current || !window.customifyField || !window.jQuery) return;
    const $wrap = window.jQuery(wrapRef.current);
    window.customifyField.initSlider($wrap);
    const fieldDef = {
      name: 'gap',
      type: 'slider',
      default: def,
      min: 0,
      max: 100,
      step: 1
    };
    const $group = $wrap.closest('.customify--group-field');
    const handler = () => {
      const next = window.customifyField.getValue(fieldDef, $group);
      onChange(next);
    };
    $wrap.on('change.cs data-change.cs', 'input, select, textarea', handler);
    return () => {
      $wrap.off('change.cs data-change.cs');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync the jQuery-UI slider's step option whenever the unit changes —
  // initSlider only reads data-step on first mount, so we have to call
  // .slider('option', ...) for later updates. The HTML number input's
  // step attribute is React-managed via the `step` prop below.
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!wrapRef.current || !window.jQuery) return;
    const $slider = window.jQuery('.customify-input-slider', wrapRef.current);
    if (!$slider.length || !$slider.slider) return;
    try {
      if ($slider.hasClass('ui-slider')) {
        $slider.slider('option', 'step', step);
      }
    } catch (_) {}
  }, [step]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "customify--group-field ft--slider",
    "data-field-name": "gap",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "customify-field-header customify-field-heading",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("label", {
        className: "customize-control-title",
        children: (0,external_wp_i18n_namespaceObject.__)('Gap', 'customify')
      })
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "customify-field-settings-inner",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        ref: wrapRef,
        className: "customify-input-slider-wrapper",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
          className: "customify-input-slider",
          "data-min": "0",
          "data-default": JSON.stringify(def),
          "data-step": step,
          "data-max": "100"
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("input", {
          type: "number",
          min: "0",
          step: step,
          max: "100",
          className: "customify--slider-input customify-input change-by-js",
          "data-name": "gap-value",
          defaultValue: v.value ?? '',
          size: 4
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
          className: "customify--css-unit",
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("label", {
            className: v.unit === 'em' ? 'customify--label-active' : '',
            children: ["em", /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("input", {
              type: "radio",
              className: "customify-input customify--label-parent change-by-js",
              "data-name": "gap-unit",
              name: `r${uid}`,
              value: "em",
              defaultChecked: v.unit === 'em'
            })]
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("label", {
            className: v.unit === 'px' ? 'customify--label-active' : '',
            children: ["px", /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("input", {
              type: "radio",
              className: "customify-input customify--label-parent change-by-js",
              "data-name": "gap-unit",
              name: `r${uid}`,
              value: "px",
              defaultChecked: v.unit === 'px'
            })]
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("a", {
            href: "#",
            className: "reset",
            title: (0,external_wp_i18n_namespaceObject.__)('Reset', 'customify'),
            onClick: e => e.preventDefault()
          })]
        })]
      })
    })]
  });
}
function PaddingField({
  value,
  onChange
}) {
  const ref = (0,external_wp_element_namespaceObject.useRef)(null);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!ref.current || !window.customifyField || !window.jQuery) return;
    const $el = window.jQuery(ref.current);
    const fieldDef = {
      name: 'padding',
      type: 'css_ruler',
      default: {
        unit: 'em',
        top: '',
        right: '',
        bottom: '',
        left: '',
        link: 1
      },
      label: (0,external_wp_i18n_namespaceObject.__)('Padding', 'customify')
    };
    window.customifyField.devices = ['desktop'];
    window.customifyField.addFields([fieldDef], {
      padding: value || {}
    }, $el, () => {
      const next = window.customifyField.getValue(fieldDef, $el.find('.customify--group-field[data-field-name="padding"]'));
      onChange(next);
    });
    return () => {
      $el.empty();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
    ref: ref
  });
}

// ---------------------------------------------------------------------------
// Accordion item
// ---------------------------------------------------------------------------

function AccordionItem({
  colKey,
  label,
  children
}) {
  const [open, setOpen] = (0,external_wp_element_namespaceObject.useState)(false);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: `customify-cs__item${open ? ' is-open' : ''}`,
    "data-col": colKey,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "customify-cs__head",
      role: "button",
      tabIndex: 0,
      onClick: () => setOpen(v => !v),
      onKeyDown: e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setOpen(v => !v);
        }
      },
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
        className: "customify-cs__head-label",
        children: label
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
        className: "customify-cs__head-toggle",
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(icon_default, {
          icon: chevron_down_default,
          size: 20
        })
      })]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "customify-cs__body",
      children: children
    })]
  });
}

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------

function App({
  controlId,
  colLayoutSetting,
  columnKeys,
  defaultValue,
  hideDirection,
  hideAlign,
  devices,
  forcedDirection,
  forcedAlign,
  defaultDirection,
  defaultAlign
}) {
  const [value, setValue] = useCustomizeSetting(controlId, defaultValue);
  const count = useColLayoutCount(colLayoutSetting, Math.min(3, columnKeys.length));
  const devicesList = devices && devices.length ? devices : ['desktop', 'mobile'];
  const device = usePreviewedDevice(devicesList);
  const [open, setOpen] = (0,external_wp_element_namespaceObject.useState)(false);
  const [remountKey, setRemountKey] = (0,external_wp_element_namespaceObject.useState)(0);
  const rootRef = (0,external_wp_element_namespaceObject.useRef)(null);
  const activeCols = columnKeys.slice(0, Math.max(1, Math.min(columnKeys.length, count)));
  const deviceData = value && value[device] || {};

  // Resolve default direction. Forced overrides everything, otherwise
  // field-level default, otherwise the hardcoded `'row'` (mirrors PHP
  // Customify_Customizer_Auto_CSS::columns_settings()).
  function defaultDirectionFor() {
    if (forcedDirection) return forcedDirection;
    if (defaultDirection) return defaultDirection;
    return 'row';
  }

  // Resolve default align for a given column index. Forced overrides
  // everything, otherwise field-level default, otherwise the
  // position-based default that mirrors the PHP CSS generator:
  //   first → flex-start, last → flex-end, middle → flex-center
  //   (single active column → flex-start).
  function defaultAlignFor(idx) {
    if (forcedAlign) return forcedAlign;
    if (defaultAlign) return defaultAlign;
    if (activeCols.length === 1) return 'flex-start';
    if (idx === 0) return 'flex-start';
    if (idx === activeCols.length - 1) return 'flex-end';
    return 'flex-center';
  }
  function updateColumn(colKey, partial) {
    setValue(prev => {
      const next = {
        ...(prev || {})
      };
      const cur = next[device] && typeof next[device] === 'object' ? next[device] : {};
      next[device] = {
        ...cur,
        [colKey]: {
          ...(cur[colKey] || {}),
          ...partial
        }
      };
      return next;
    });
  }
  function reset(e) {
    e.preventDefault();
    setValue(defaultValue || {});
    setRemountKey(k => k + 1);
  }

  // Close only when the press STARTED outside the wrapper.
  //
  // Record the press origin on `pointerdown` (the very first event of any
  // click/tap, before any React state update or jQuery re-render). The
  // later `click` event then just reads that flag — so even if the click
  // target gets replaced/detached by a setting change in between, the
  // "outside?" decision is the one we made at press time, not based on
  // the (now possibly stale) click target.
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!open) return;
    let startedInside = false;
    function pointerDown(e) {
      const root = rootRef.current;
      startedInside = !!(root && e.target && root.contains(e.target));
    }
    function maybeClose(e) {
      if (startedInside) return;
      const t = e.target;
      // Be defensive: if for some reason pointerDown didn't fire (e.g.
      // keyboard activation), fall back to checking via closest()
      // against the live DOM.
      if (t && t.closest && t.closest('.customify-cs') === rootRef.current) return;
      if (t && t.closest && (t.closest('.wp-picker-container') || t.closest('.select2-container') || t.closest('.iris-picker') || t.closest('.components-popover') || t.closest('.ui-slider-handle'))) return;
      setOpen(false);
    }
    document.addEventListener('pointerdown', pointerDown, true);
    document.addEventListener('click', maybeClose);
    return () => {
      document.removeEventListener('pointerdown', pointerDown, true);
      document.removeEventListener('click', maybeClose);
    };
  }, [open]);

  // Add `modal--opening` to the outer wrapper that owns the `.customify-actions`
  // absolute positioning context so the existing SCSS chevron/X icon swap fires.
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const root = rootRef.current;
    if (!root) return;
    const wrapper = root.closest('.customify--settings-wrapper');
    if (!wrapper) return;
    wrapper.classList.toggle('modal--opening', open);
    return () => wrapper.classList.remove('modal--opening');
  }, [open]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: `customify-cs${open ? ' modal--opening' : ''}`,
    ref: rootRef,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "customify-actions",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("a", {
        href: "#",
        className: "action--reset",
        style: {
          display: open ? 'inline-block' : 'none'
        },
        title: (0,external_wp_i18n_namespaceObject.__)('Reset to default', 'customify'),
        onClick: reset,
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
          className: "dashicons dashicons-image-rotate"
        })
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("a", {
        href: "#",
        className: "action--edit",
        title: (0,external_wp_i18n_namespaceObject.__)('Toggle edit panel', 'customify'),
        onClick: e => {
          e.preventDefault();
          setOpen(v => !v);
        },
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
          className: "dashicons dashicons-edit"
        })
      })]
    }), open && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "customify-modal-settings",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
        className: "customify-modal-settings--inner",
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
          className: "customify-modal-settings--fields",
          children: [devicesList.length > 1 && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
            className: "customify-cs__device-note customify-cs__device-switcher",
            children: [devicesList.length === 2 && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
              className: "customify-cs__device-switcher-label",
              children: (0,external_wp_i18n_namespaceObject.__)('Layout', 'customify')
            }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
              className: "customify-devices",
              children: devicesList.map(d => {
                const isCombinedMobile = devicesList.length === 2 && d === 'mobile';
                const label = d === 'desktop' ? (0,external_wp_i18n_namespaceObject.__)('Desktop', 'customify') : d === 'tablet' ? (0,external_wp_i18n_namespaceObject.__)('Tablet', 'customify') : isCombinedMobile ? (0,external_wp_i18n_namespaceObject.__)('Mobile / Tablet', 'customify') : (0,external_wp_i18n_namespaceObject.__)('Mobile', 'customify');
                return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("button", {
                  type: "button",
                  className: `preview-${d}`,
                  "data-device": d,
                  title: label,
                  "aria-label": label,
                  "aria-pressed": device === d ? 'true' : 'false',
                  onClick: e => {
                    e.preventDefault();
                    try {
                      wp.customize.previewedDevice.set(d);
                    } catch (_) {}
                  }
                }, d);
              })
            })]
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
            className: "customify-cs__accordion",
            children: activeCols.map((colKey, idx) => {
              const colData = deviceData[colKey] || {};

              // Resolve the column's effective direction so the
              // Align options can be tailored to it. Mirrors the
              // PHP resolver: forced > saved > field default > 'row'.
              const effectiveDirection = forcedDirection || colData.direction || defaultDirection || 'row';

              // Column direction: hide `space-between`. With our
              // CSS model the justify-content goes on `.item--inner`
              // (default flex-direction: row) so space-between only
              // affects items that have ≥2 internal children, which
              // is rare. If the user picked it under row direction
              // then switched to column, coerce the displayed value
              // to fall through to the position-based default.
              const alignOptions = effectiveDirection === 'column' ? ALIGN_OPTIONS.filter(opt => opt.value !== 'space-between') : ALIGN_OPTIONS;
              let alignValue = colData.align;
              if (effectiveDirection === 'column' && alignValue === 'space-between') {
                alignValue = '';
              }
              const fields = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
                children: [!hideDirection && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ButtonGroup, {
                  fieldName: "direction",
                  label: (0,external_wp_i18n_namespaceObject.__)('Direction', 'customify'),
                  options: DIRECTION_OPTIONS,
                  value: colData.direction,
                  defaultValue: defaultDirectionFor(),
                  onChange: v => updateColumn(colKey, {
                    direction: v
                  })
                }), !hideAlign && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ButtonGroup, {
                  fieldName: "align",
                  label: (0,external_wp_i18n_namespaceObject.__)('Align', 'customify'),
                  options: alignOptions,
                  value: alignValue,
                  defaultValue: defaultAlignFor(idx),
                  onChange: v => updateColumn(colKey, {
                    align: v
                  })
                }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(GapField, {
                  value: colData.gap,
                  onChange: v => updateColumn(colKey, {
                    gap: v
                  })
                }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PaddingField, {
                  value: colData.padding,
                  onChange: v => updateColumn(colKey, {
                    padding: v
                  })
                })]
              });

              // Off-canvas sidebar (column key `'sidebar'` — a
              // builder-wide convention used only by the
              // header_sidebar_columns_settings field) renders
              // inline without the accordion head. The
              // `customify-cs__item` + `__body` wrapper nesting
              // is preserved so SCSS that styles fields inside
              // the accordion still applies.
              if (colKey === 'sidebar') {
                return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
                  className: "customify-cs__item is-open customify-cs__item--single",
                  "data-col": colKey,
                  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
                    className: "customify-cs__body",
                    children: fields
                  })
                }, `${device}-${remountKey}-${colKey}`);
              }
              return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(AccordionItem, {
                colKey: colKey,
                label: `Column ${idx + 1}`,
                children: fields
              }, `${device}-${remountKey}-${colKey}`);
            })
          })]
        })
      })
    }, `${device}-${remountKey}`)]
  });
}

// ---------------------------------------------------------------------------
// Mount
// ---------------------------------------------------------------------------

function parseAttr(raw, fallback) {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch (_) {}
  return fallback;
}
function mountOne(node) {
  if (node.dataset.csMounted === '1') return;
  node.dataset.csMounted = '1';
  const controlId = node.dataset.control || '';
  const colLayoutSetting = node.dataset.colLayout || '';
  const columnKeys = parseAttr(node.dataset.columnKeys, ['left', 'center', 'right', 'col4', 'col5']);
  const defaultValue = parseAttr(node.dataset.default, {});
  const hideDirection = node.dataset.hideDirection === '1';
  const hideAlign = node.dataset.hideAlign === '1';
  const devices = parseAttr(node.dataset.devices, ['desktop', 'mobile']);
  const forcedDirection = node.dataset.forcedDirection || '';
  const forcedAlign = node.dataset.forcedAlign || '';
  const defaultDirection = node.dataset.defaultDirection || '';
  const defaultAlign = node.dataset.defaultAlign || '';
  if (!controlId) return;
  (0,external_wp_element_namespaceObject.render)(/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(App, {
    controlId: controlId,
    colLayoutSetting: colLayoutSetting,
    columnKeys: columnKeys,
    defaultValue: defaultValue,
    hideDirection: hideDirection,
    hideAlign: hideAlign,
    devices: devices,
    forcedDirection: forcedDirection,
    forcedAlign: forcedAlign,
    defaultDirection: defaultDirection,
    defaultAlign: defaultAlign
  }), node);
}
function mountColumnsSettings() {
  document.querySelectorAll('.customify-columns-settings-mount').forEach(mountOne);
}
function observeAndMount() {
  mountColumnsSettings();
  const target = document.querySelector('#customize-theme-controls');
  if (!target || typeof MutationObserver === 'undefined') return;
  new MutationObserver(() => mountColumnsSettings()).observe(target, {
    childList: true,
    subtree: true
  });
}
;// ./src/backend/customizer/js/popover-chrome.js
/**
 * Shared popover chrome — the open/close/position/dismiss lifecycle for
 * composite controls (typography, styling) whose settings panel floats
 * over the controls below instead of expanding inline.
 *
 * Extracted verbatim from the Phase-1 typography runtime so the styling
 * chrome reuses it instead of carrying a third copy of the modal code.
 *
 * attachPopoverChrome() mixes the methods into a runtime BASE object
 * (clones made afterwards inherit them). The runtime must expose:
 *   $el        – the control <li>: the positioning context, carries the
 *                `customify-modal--inside` / `modal--opening` classes and
 *                the `data-opening` state attribute
 *   container  – the .customify-modal-settings jQuery node
 * and opts provides:
 *   $          – jQuery
 *   anchor     – function(runtime) -> jQuery of the trigger the popover
 *                anchors to. Resolved at position time, so runtimes with
 *                several triggers (styling tabs) return the active row.
 *   onClose    – optional hook fired after the popover closes (e.g. to
 *                clear a row's is-open state)
 */

// Only one popover may be open at a time — ACROSS control types. The
// module-scoped ref is shared by every runtime this factory touches, so
// opening a styling popover closes an open typography one and vice versa.
var activePopover = null;
function attachPopoverChrome(runtime, opts) {
  var $ = opts.$;

  // The settings panel floats over the controls below (absolute within
  // the control li) instead of the legacy inline accordion. Open/close
  // is class-driven (`is-open`) so the CSS transition in _control.scss
  // animates opacity/transform; jQuery slide* would jump because it
  // animates height inline.
  runtime.openPopover = function () {
    var that = this;
    if (activePopover && activePopover !== that) {
      activePopover.closePopover();
    }
    activePopover = that;
    that.$el.attr("data-opening", "opening");
    that.$el.addClass("modal--opening");
    $(".action--reset", that.$el).show();
    that.positionPopover();

    // A freshly-appended panel needs its initial (hidden) styles
    // committed before the class flips, or the transition jumps
    // straight to the final state. Force a synchronous reflow
    // instead of requestAnimationFrame: rAF never fires while the
    // tab is hidden (background window / tab switch), so the class
    // would land arbitrarily late — even after a closePopover() —
    // resurrecting a dismissed popover.
    if (that.container[0]) {
      void that.container[0].offsetWidth;
    }
    that.container.addClass("is-open");
    that.bindDismiss();
  };
  runtime.closePopover = function () {
    var that = this;
    var $el = that.$el;
    if (activePopover === that) {
      activePopover = null;
    }
    that.unbindDismiss();
    $el.attr("data-opening", "");
    $el.removeClass("modal--opening");
    $(".action--reset", $el).hide();
    if (that.container) {
      that.container.removeClass("is-open");
    }
    if (typeof opts.onClose === "function") {
      opts.onClose(that);
    }
  };

  // Anchor the popover right under the trigger (or above it when the
  // viewport space below is too small). `top` is relative to the
  // control li — the positioning context set by the
  // `customify-modal--inside` class.
  runtime.positionPopover = function () {
    var that = this;
    var $trigger = opts.anchor(that);
    if (!$trigger || !$trigger.length || !that.container || !that.container.length) {
      return;
    }
    var GAP = 8;
    var liRect = that.$el[0].getBoundingClientRect();
    var tRect = $trigger[0].getBoundingClientRect();
    var popH = that.container.outerHeight();
    var spaceBelow = window.innerHeight - tRect.bottom;
    var top;
    if (spaceBelow < popH + 24 && tRect.top - popH - 24 > 0) {
      top = tRect.top - liRect.top - popH - GAP;
      that.container.addClass("is-above");
    } else {
      top = tRect.bottom - liRect.top + GAP;
      that.container.removeClass("is-above");
    }
    that.container.css("top", Math.round(top) + "px");
  };

  // Close on outside click / ESC while open. Native capture-phase
  // listeners: outside-click must win over handlers that
  // stopPropagation, and ESC must fire before the Customizer's own
  // document-level ESC (which would also collapse the section).
  runtime.bindDismiss = function () {
    var that = this;
    that.unbindDismiss();
    that._onOutside = function (e) {
      if ($(e.target).closest(that.$el[0]).length) {
        return;
      }
      // Select2 renders its dropdown at <body> level — clicks
      // there belong to the popover even though they land
      // outside the control li.
      if ($(e.target).closest(".select2-container, .select2-dropdown").length) {
        return;
      }
      that.closePopover();
    };
    that._onEsc = function (e) {
      if ("Escape" === e.key || 27 === e.keyCode) {
        e.stopPropagation();
        that.closePopover();
      }
    };
    // Clicks inside the preview iframe never reach this document's
    // mousedown listener — but focusing the iframe blurs the top
    // window, so treat window blur as an outside click.
    that._onBlur = function () {
      that.closePopover();
    };
    document.addEventListener("mousedown", that._onOutside, true);
    document.addEventListener("keydown", that._onEsc, true);
    window.addEventListener("blur", that._onBlur);
  };
  runtime.unbindDismiss = function () {
    var that = this;
    if (that._onOutside) {
      document.removeEventListener("mousedown", that._onOutside, true);
      that._onOutside = null;
    }
    if (that._onEsc) {
      document.removeEventListener("keydown", that._onEsc, true);
      that._onEsc = null;
    }
    if (that._onBlur) {
      window.removeEventListener("blur", that._onBlur);
      that._onBlur = null;
    }
  };
}
;// ./src/backend/customizer/js/typography-control.js
/**
 * Typography control runtime.
 *
 * Extracted from control.js (was lines ~2790-3240). Lives in its own
 * file so the giant control.js stays browsable, but compiles back into
 * the same webpack bundle via the import in control.js — no PHP
 * enqueue change, no behavioural diff.
 *
 * Factory pattern: closure deps that originated inside the outer IIFE
 * in control.js (`$`, `$document`, `wpcustomize`, `customifyField`) are
 * passed in explicitly instead of being read from window globals. This
 * preserves the original scoping; `customifyField` in particular is a
 * private IIFE variable, not a true global at module-load time.
 *
 * Other refs (`_`, `Customify_Control_Args`, `_wpCustomizeSettings`)
 * are genuine browser globals and read directly.
 */

function setupTypographyControl(deps) {
  var $ = deps.$;
  var $document = deps.$document;
  var wpcustomize = deps.wpcustomize;
  var customifyField = deps.customifyField;

  // ── Trigger value preview ──────────────────────────────────────────
  // The control row renders a select-like trigger (see
  // class-control-typography.php) whose spans preview the saved value:
  // font family on the left, "16px / 700"-style meta on the right.
  // Reads the SAME hidden input the runtime already round-trips —
  // chrome only, no new value plumbing.

  // Resolve a slider sub-value ({value, unit}, or a device map keyed
  // {desktop, tablet, mobile}) to a display string. Previews the
  // desktop value.
  function sliderDisplayValue(v) {
    if (!_.isObject(v)) {
      return "";
    }
    if (_.isObject(v.desktop)) {
      v = v.desktop;
    }
    if (_.isUndefined(v.value) || v.value === null || v.value === "") {
      return "";
    }
    var unit = v.unit || "px";
    // '-' is the unitless sentinel (line-height multiplier).
    if (unit === "-") {
      unit = "";
    }
    return v.value + unit;
  }
  function weightDisplayValue(w) {
    if (!w || w === "default") {
      return "";
    }
    if (w === "regular" || w === "normal") {
      return "400";
    }
    return String(w);
  }

  // Resolve a `display_defaults` entry (string, or a per-device map for
  // device-scoped sub-fields) to the desktop display string.
  function displayDefaultValue(v) {
    if (_.isObject(v)) {
      return v.desktop || "";
    }
    return v || "";
  }
  function controlParams($control) {
    var id = ($control.attr("id") || "").replace(/^customize-control-/, "");
    if (!id) {
      return null;
    }
    var c = wpcustomize.control(id);
    return c ? c.params : null;
  }
  function renderTypoTrigger($control) {
    var $trigger = $(".customify-typo-trigger", $control);
    if (!$trigger.length) {
      return;
    }
    var value = {};
    try {
      value = JSON.parse($(".customify-typography-input", $control).val() || "");
    } catch (e) {}
    if (!_.isObject(value)) {
      value = {};
    }

    // Unset sub-values fall back to display-only metadata: the
    // field's `display_defaults` (the literal CSS fallbacks from
    // _base.scss, declared in configs/typography.php) and, for a
    // gated-off font picker, the "Inherit" label. Purely visual —
    // nothing here is written back.
    var params = controlParams($control) || {};
    var gates = _.isObject(params.fields) ? params.fields : {};
    var dd = _.isObject(params.display_defaults) ? params.display_defaults : {};
    var family;
    if (value.font && _.isString(value.font)) {
      family = value.font;
    } else if (gates.font === false) {
      family = Customify_Control_Args.inherit || "Inherit";
    } else {
      family = Customify_Control_Args.default_label || "Default";
    }
    var meta = [];
    var size = sliderDisplayValue(value.font_size) || displayDefaultValue(dd.font_size);
    if (size) {
      meta.push(size);
    }
    // Weight slot only when the field actually offers a weight
    // control — fields that gate it off (h1–h6) would otherwise show
    // a meaningless "/ Inherit" tail.
    if (gates.font_weight !== false) {
      var weight = weightDisplayValue(value.font_weight) || displayDefaultValue(dd.font_weight);
      if (weight) {
        meta.push(weight);
      }
    }
    $(".customify-trigger--family", $trigger).text(family);
    $(".customify-trigger--meta", $trigger).text(meta.join(" / "));
  }
  var FontSelector = {
    fonts: null,
    optionHtml: "",
    $el: null,
    values: {},
    config: {},
    // Config to disable fields
    container: null,
    fields: {},
    load: function (callback) {
      var that = this;
      $.get(Customify_Control_Args.ajax, {
        action: "customify/customizer/ajax/fonts",
        wp_customize: "on",
        _nonce: _wpCustomizeSettings.nonce.preview,
        customize_theme: _wpCustomizeSettings.theme.stylesheet
      }, function (res) {
        if (res.success) {
          that.fonts = res.data;
        }
        if (typeof callback === "function") {
          callback();
        }
      });
    },
    toSelectOptions: function (options, v, type) {
      var html = "";
      if (_.isUndefined(v)) {
        v = "";
      }

      // Google, Library and Theme fonts all ship explicit variant
      // lists (Library + Theme variants are derived from
      // font-face children in to_google_variant()). System fonts
      // fall through to the generic 100..900 weight ladder below.
      if (type === "google" || type === "library" || type === "theme") {
        // Track rendered weight tokens so we can backfill
        // 400 (regular) and 700 (bold) when the font ships
        // with a minimal variant list (e.g. a Library font
        // declaring only `regular`). Browsers synthesise the
        // missing weights via faux-bold, so exposing the
        // option is more useful than locking the user out.
        var rendered = {};
        _.each(options, function (value) {
          var selected = "";
          if (value === v) {
            selected = ' selected="selected" ';
          }
          rendered[String(value).toLowerCase()] = true;
          html += "<option" + selected + ' value="' + value + '">' + value + "</option>";
        });
        var hasRegular = rendered["400"] || rendered["regular"] || rendered["normal"] || rendered["default"];
        if (!hasRegular) {
          html += "<option" + (v === "400" ? ' selected="selected" ' : "") + ' value="400">400</option>';
        }
        var hasBold = rendered["700"] || rendered["bold"];
        if (!hasBold) {
          html += "<option" + (v === "700" ? ' selected="selected" ' : "") + ' value="700">700</option>';
        }

        // Lossless display for a saved weight the family doesn't
        // ship (e.g. 600 carried across a switch to Roboto): the
        // native select would silently show the FIRST option
        // while the emitted CSS keeps font-weight at the saved
        // value (browser-synthesized) — control, preview and
        // render disagree. Same rule as the multi-unit slider's
        // unknown units: render the saved value as its own
        // selected option.
        var savedHandled = !v || rendered[String(v).toLowerCase()] || !hasRegular && "400" === String(v) || !hasBold && "700" === String(v);
        if (!savedHandled) {
          html += '<option selected="selected" value="' + v + '">' + v + "</option>";
        }
      } else {
        _.each(Customify_Control_Args.list_font_weight, function (value, key) {
          var selected = "";
          if (value === v) {
            selected = ' selected="selected" ';
          }
          html += "<option" + selected + ' value="' + key + '">' + value + "</option>";
        });
        var value, selected, i;
        for (i = 1; i <= 9; i++) {
          value = i * 100;
          selected = "";
          if (value === v) {
            selected = ' selected="selected" ';
          }
          html += "<option" + selected + ' value="' + value + '">' + value + "</option>";
        }
      }
      return html;
    },
    toCheckboxes: function (options, v) {
      var html = '<div class="list-subsets">';
      if (!_.isObject(v)) {
        v = {};
      }
      _.each(options, function (value) {
        var checked = "";
        if (!_.isUndefined(v[value])) {
          checked = ' checked="checked" ';
        }
        html += "<p><label><input " + checked + 'type="checkbox" class="customify-typo-input change-by-js" data-name="languages" name="_n-' + new Date().getTime() + '" value="' + value + '"> ' + value + "</label></p>";
      });
      html += "</div>";
      return html;
    },
    ready: function () {
      var that = this;
      customifyField.devices = _.clone(customifyField.allDevices);
      if (!_.isObject(that.values)) {
        that.values = {};
      }
      that.fields = {};

      //Customify_Control_Args.typo_fields
      if (!_.isEmpty(that.config)) {
        _.each(Customify_Control_Args.typo_fields, function (_f, _key) {
          var show = true;
          if (!_.isUndefined(that.config[_f.name])) {
            if (that.config[_f.name] === false) {
              show = false;
            }
          }
          if (show) {
            that.fields[_f.name] = _f;
          }
        });
      } else {
        that.fields = Customify_Control_Args.typo_fields;
      }

      // `languages` visibility is driven by the font picker's
      // change event (setUpFont() toggles it based on font type).
      // If the field config hides the font picker, that event
      // never fires and `languages` would render visible by
      // default — drop it here so the modal stays consistent.
      if (_.isUndefined(that.fields.font)) {
        delete that.fields.languages;
      }

      // Stamp per-control display defaults as input placeholders
      // (display-only — the inputs stay empty, so nothing is saved
      // until the user actually picks a value). Clone each field
      // config first: typo_fields is ONE list shared by every
      // typography control; mutating it would leak placeholders
      // across controls.
      var stamped = _.isArray(that.fields) ? [] : {};
      _.each(that.fields, function (_f, _key) {
        var f = _.clone(_f);
        if (_.isObject(that.displayDefaults) && !_.isUndefined(that.displayDefaults[f.name])) {
          f.placeholder = that.displayDefaults[f.name];
        }
        stamped[_key] = f;
      });
      that.fields = stamped;
      $(".customify-modal-settings--fields", that.container).append('<input type="hidden" class="customify--font-type">');
      customifyField.addFields(that.fields, that.values, $(".customify-modal-settings--fields", that.container), function () {
        that.get();
      });
      $("input, select, textarea", $(".customify-modal-settings--fields")).removeClass("customify-input").addClass("customify-typo-input change-by-js");
      that.optionHtml += '<option value="">' + Customify_Control_Args.theme_default + "</option>";
      _.each(that.fonts, function (group, type) {
        that.optionHtml += '<optgroup label="' + group.title + '">';
        _.each(group.fonts, function (font, font_name) {
          // Three shapes accepted:
          //   - string          → use as the visible label
          //   - object with .label + ._disabled → placeholder
          //     row (eg. "No fonts activated…" in the WP Font
          //     Library group when nothing is uploaded yet)
          //   - any other object → use font_name as label
          var label, disabled;
          if (_.isString(font)) {
            label = font;
            disabled = false;
          } else if (_.isObject(font) && font.label) {
            label = font.label;
            disabled = !!font._disabled;
          } else {
            label = font_name;
            disabled = false;
          }
          that.optionHtml += '<option value="' + font_name + '"' + (disabled ? " disabled" : "") + ">" + label + "</option>";
        });
        that.optionHtml += "</optgroup>";
      });
      $('.customify-typo-input[data-name="font"]', that.container).html(that.optionHtml);
      if (!_.isUndefined(that.values["font"]) && _.isString(that.values["font"])) {
        $('.customify-typo-input[data-name="font"] option[value="' + that.values["font"] + '"]', that.container).attr("selected", "selected");
      }
      that.container.on("change init-change", '.customify-typo-input[data-name="font"]', function () {
        var font = $(this).val();
        that.setUpFont(font);
      });
      $('.customify-typo-input[data-name="font"]', that.container).trigger("init-change");
      var $fontPicker = $('.customify-typo-input[data-name="font"]', that.container);
      $fontPicker.select2({
        // Tag the inner dropdown so the width/skin rule in
        // customizer.scss can target this picker's popup.
        dropdownCssClass: "customify-font-dropdown",
        // Attach the popup inside the font row's own settings box
        // instead of <body>. Select2's coordinate math is ignored
        // entirely: _control.scss pins the popup wrapper with
        // `top:100% / right:0 !important` relative to this box, so
        // it always hangs right under the trigger and moves with
        // the popover (the old body-attached popup kept stale
        // document coordinates and drifted away from the control).
        dropdownParent: $fontPicker.closest(".customify-field-settings-inner")
      });

      // Bind events on inputs
      that.container.on("change data-change", "input, select", function () {
        that.get();
      });

      // Bind event on container
      that.container.on("container-data-change", function () {
        that.get();
      });
    },
    setUpFont: function (font) {
      var that = this;
      var font_settings, variants, subsets, type;
      if (_.isEmpty(font)) {
        type = "normal";
      }
      if (!_.isObject(that.fonts) || _.isEmpty(that.fonts)) {
        that.fonts = {
          theme: {
            fonts: {}
          },
          library: {
            fonts: {}
          },
          normal: {
            fonts: {}
          },
          google: {
            fonts: {}
          }
        };
      }

      // Resolve which group the chosen font lives in. Priority
      // matches server-side ajax_fonts(): theme > library > google
      // > normal. Fall through to "normal" so system fonts don't
      // accidentally inherit other groups' variant metadata.
      var fontKey = _.isString(font) ? font : font && font.font;
      if (fontKey) {
        if (that.fonts.theme && !_.isUndefined(that.fonts.theme.fonts[fontKey])) {
          type = "theme";
          font_settings = that.fonts.theme.fonts[fontKey];
        } else if (that.fonts.library && !_.isUndefined(that.fonts.library.fonts[fontKey])) {
          type = "library";
          font_settings = that.fonts.library.fonts[fontKey];
        } else if (that.fonts.google && !_.isUndefined(that.fonts.google.fonts[fontKey])) {
          type = "google";
          font_settings = that.fonts.google.fonts[fontKey];
        } else if (that.fonts.normal && !_.isUndefined(that.fonts.normal.fonts[fontKey])) {
          type = "normal";
          font_settings = that.fonts.normal.fonts[fontKey];
        }
      } else {
        font_settings = {};
      }
      if (!_.isUndefined(font_settings) && !_.isEmpty(font_settings)) {
        variants = font_settings.variants;
        subsets = font_settings.subsets;
      }
      $('.customify-typo-input[data-name="font_weight"]', that.container).html(that.toSelectOptions(variants, _.isObject(that.values) ? that.values.font_weight : "", type));
      $(".customify--font-type", that.container).val(type);
      if (type !== "google") {
        $('.customify--group-field[data-field-name="languages"]', that.container).addClass("customify--hide").find(".customify-field-settings-inner").html("");
      } else {
        $('.customify--group-field[data-field-name="languages"]', that.container).removeClass("customify--hide");
        $('.customify--group-field[data-field-name="languages"]', that.container).removeClass("customify--hide").find(".customify-field-settings-inner").html(that.toCheckboxes(subsets, _.isObject(that.values) ? that.values.languages : ""));
      }
    },
    open: function () {
      //this.$el = $el;
      var that = this;
      var $el = that.$el;
      var status = $el.attr("data-opening") || false;
      if (status !== "opening") {
        that.values = $(".customify-typography-input", that.$el).val();
        that.values = JSON.parse(that.values);
        $el.addClass("customify-modal--inside");
        if (!$(".customify-modal-settings", $el).length) {
          var $wrap = $($("#tmpl-customify-modal-settings").html());
          that.container = $wrap;
          this.$el.append($wrap);
          that.ready();
        } else {
          that.container = $(".customify-modal-settings", $el);
        }
        that.openPopover();
        // Re-fetch the font catalogue every time the modal
        // opens so variant lists stay in sync with the
        // wp-admin Font Library — users can add/remove
        // font-face files in another tab while the
        // customizer is open, and the old behaviour cached
        // `that.fonts` once at doc-ready forever. When the
        // fetch returns, re-trigger init-change on the
        // font picker so the font_weight dropdown rebuilds
        // from the fresh variants for the active font.
        that.load(function () {
          $('.customify-typo-input[data-name="font"]', that.container).trigger("init-change");
          // The variant rebuild can change the popover height —
          // re-measure so a flipped (above-trigger) popover
          // stays anchored to the trigger.
          if ("opening" === that.$el.attr("data-opening")) {
            that.positionPopover();
          }
        });
      } else {
        that.closePopover();
      }
    },
    reset: function () {
      //this.$el = $el;
      var that = this;
      var $el = that.$el;

      // The reset action is only reachable while the popover is
      // open (the button is hidden otherwise) — rebuilding removes
      // the panel, so re-open it afterwards for continuity.
      var wasOpen = "opening" === $el.attr("data-opening");
      $(".customify-modal-settings", $el).remove();
      that.values = $(".customify-typography-input", that.$el).attr("data-default") || "{}";
      try {
        that.values = JSON.parse(that.values);
      } catch (e) {}
      $el.addClass("customify-modal--inside");
      if (!$(".customify-modal-settings", $el).length) {
        var $wrap = $($("#tmpl-customify-modal-settings").html());
        that.container = $wrap;
        this.$el.append($wrap);
        that.ready();
      } else {
        that.container = $(".customify-modal-settings", $el);
      }
      that.get();
      if (wasOpen) {
        that.openPopover();
      }
    },
    get: function () {
      var data = {};
      var that = this;
      _.each(this.fields, function (f) {
        if (f.name === "languages") {
          f.type = "checkboxes";
        }
        data[f.name] = customifyField.getValue(f, $('.customify--group-field[data-field-name="' + f.name + '"]', that.container));
      });
      data.variant = {};
      if (data.font) {
        // Variant list follows the source the font came from.
        // Priority matches setUpFont: theme > library > google.
        var src = null;
        if (that.fonts.theme && that.fonts.theme.fonts && that.fonts.theme.fonts[data.font]) {
          src = that.fonts.theme.fonts[data.font];
        } else if (that.fonts.library && that.fonts.library.fonts && that.fonts.library.fonts[data.font]) {
          src = that.fonts.library.fonts[data.font];
        } else if (that.fonts.google && that.fonts.google.fonts && that.fonts.google.fonts[data.font]) {
          src = that.fonts.google.fonts[data.font];
        }
        if (src && src.variants) {
          data.variant = src.variants;
        }
      }
      data.font_type = $(".customify--font-type", that.container).val();
      $(".customify-typography-input", this.$el).val(JSON.stringify(data)).trigger("change");
      return data;
    },
    init: function () {
      this.load();
    }
  };

  // Popover lifecycle (open/close/position/dismiss) comes from the
  // shared chrome — one popover at a time across typography AND styling
  // controls. Attached to the base object so the per-control clones
  // made in intTypos() inherit the methods.
  attachPopoverChrome(FontSelector, {
    $: $,
    anchor: function (that) {
      return $(".customify-typo-trigger", that.$el);
    }
  });
  var intTypoControls = {};
  var intTypos = function () {
    $document.on("click", ".customize-control-customify-typography .action--edit, .customize-control-customify-typography .action--reset", function (e) {
      e.preventDefault();
      var controlID = $(this).attr("data-control") || "";
      if (_.isUndefined(intTypoControls[controlID])) {
        var c = wpcustomize.control(controlID);
        if (controlID && !_.isUndefined(c)) {
          var m = _.clone(FontSelector);
          m.config = c.params.fields;
          m.displayDefaults = c.params.display_defaults || {};
          m.$el = $(this).closest(".customize-control-customify-typography").eq(0);
          intTypoControls[controlID] = m;
        }
      }
      if (!_.isUndefined(intTypoControls[controlID])) {
        if ($(this).hasClass("action--reset")) {
          intTypoControls[controlID].reset();
        } else {
          intTypoControls[controlID].open();
        }
      }
    });

    // Trigger value preview: every value write round-trips through
    // the hidden input with a change/data-change event (user edits,
    // reset, live updates) — re-render the trigger summary there.
    $document.on("change data-change", ".customify-typography-input", function () {
      renderTypoTrigger($(this).closest(".customize-control-customify-typography"));
    });

    // Re-render after a programmatic control repaint (external
    // setting write → refreshFromSetting in control.js).
    $document.on("customify/control/refreshed", ".customize-control-customify-typography", function () {
      renderTypoTrigger($(this));
    });

    // First paint. All customify controls are batch-initialized at
    // document.ready in control.js BEFORE intTypos() runs, so every
    // typography control's hidden input + trigger exist by now.
    $(".customize-control-customify-typography").each(function () {
      renderTypoTrigger($(this));
    });
  };
  return {
    FontSelector: FontSelector,
    intTypos: intTypos
  };
}
;// ./src/backend/customizer/js/typography-presets.js
/**
 * Typography presets runtime — the font-pair quick picks at the top of
 * the Typography section (class-control-typography-presets.php).
 *
 * The control stores nothing: clicking a card patches ONLY the family
 * bits (font / font_type / variant) of the Body + Heading typography
 * settings, going through the bound controls' own encode/decode so the
 * storage shape is byte-identical to a manual font pick. The external
 * setting.set() drives refreshFromSetting() in control.js, which
 * repaints the typography control DOM and its trigger preview — no
 * extra plumbing here.
 *
 * Factory pattern mirrors typography-control.js: closure deps from the
 * control.js IIFE are passed in explicitly; `_` is a genuine global.
 */
function setupTypographyPresets(deps) {
  var $ = deps.$;
  var $document = deps.$document;
  var wpcustomize = deps.wpcustomize;
  var BODY_SETTING = "global_typography_base_p";
  var HEADING_SETTING = "global_typography_base_heading";
  function decoded(id) {
    var c = wpcustomize.control(id);
    if (!c) {
      return {};
    }
    var raw = c.setting.get();
    var v;
    // Values written by controls are encodeURI(JSON) strings, but
    // values straight from storage (saved by PHP / older versions)
    // arrive as plain objects — decodeValue throws on those. Fall
    // back to the raw value itself, exactly like
    // refreshFromSetting() does; returning {} here would make the
    // merge in patchFamily() silently DROP every other sub-value.
    try {
      v = c.decodeValue(raw);
    } catch (e) {
      v = raw;
    }
    return _.isObject(v) ? _.clone(v) : {};
  }

  // Merge ONLY the given keys into the setting — sizes, weights and
  // everything else the user already tuned stay untouched.
  function patchFamily(id, patch) {
    var c = wpcustomize.control(id);
    if (!c) {
      return;
    }
    c.setting.set(c.encodeValue(_.extend({}, decoded(id), patch)));
  }
  function applyPreset(preset) {
    patchFamily(HEADING_SETTING, {
      font: preset.heading.family,
      font_type: "google",
      variant: preset.heading.variants
    });
    patchFamily(BODY_SETTING, {
      font: preset.body.family,
      font_type: "google",
      variant: preset.body.variants
    });
  }

  // "Remove preset": clear the family bits back to Default on both
  // settings; everything else stays.
  function resetPresets() {
    patchFamily(HEADING_SETTING, {
      font: "",
      font_type: "",
      variant: ""
    });
    patchFamily(BODY_SETTING, {
      font: "",
      font_type: "",
      variant: ""
    });
  }
  function presetsFor($li) {
    var id = ($li.attr("id") || "").replace(/^customize-control-/, "");
    var c = id ? wpcustomize.control(id) : null;
    return c && _.isObject(c.params.fields) ? c.params.fields : [];
  }

  // Active card = both settings currently hold that pair's families.
  // Derived live from the settings, so manual picks elsewhere keep the
  // grid honest.
  function paint() {
    var bodyFont = decoded(BODY_SETTING).font;
    var headingFont = decoded(HEADING_SETTING).font;
    $(".customize-control-customify-typography_presets").each(function () {
      var $li = $(this);
      var presets = presetsFor($li);
      $(".customify-typo-preset", $li).each(function () {
        var p = presets[parseInt($(this).attr("data-index"), 10)];
        $(this).toggleClass("is-active", !!(p && p.heading.family === headingFont && p.body.family === bodyFont));
      });
    });
  }
  var init = function () {
    $document.on("click", ".customify-typo-preset", function (e) {
      e.preventDefault();
      var $li = $(this).closest(".customize-control-customify-typography_presets").eq(0);
      var p = presetsFor($li)[parseInt($(this).attr("data-index"), 10)];
      if (p) {
        applyPreset(p);
      }
    });
    $document.on("click", ".customify-presets-reset", function (e) {
      e.preventDefault();
      resetPresets();
    });
    _.each([BODY_SETTING, HEADING_SETTING], function (sid) {
      wpcustomize(sid, function (setting) {
        setting.bind(paint);
      });
    });
    paint();
  };
  return {
    init: init
  };
}
;// ./src/backend/customizer/js/control.js
// React modules bundled into this control bundle.

// Typography control split out into its own file for readability;
// still bundled into this entry, still called inside IIFE 2 below.



(function (api) {
  // Extends our custom "example-1" section.
  api.sectionConstructor["customify-pro"] = api.Section.extend({
    // No events for this type of section.
    attachEvents: function () {},
    // Always make the section active.
    isContextuallyActive: function () {
      return true;
    }
  });
})(wp.customize);
(function ($) {
  var api = wp.customize;
  api.bind("pane-contents-reflowed", function () {
    // Reflow sections
    var sections = [];
    api.section.each(function (section) {
      if ("customify_section" !== section.params.type || "undefined" === typeof section.params.section) {
        return;
      }
      sections.push(section);
    });
    sections.sort(api.utils.prioritySort).reverse();
    $.each(sections, function (i, section) {
      var parentContainer = $("#sub-accordion-section-" + section.params.section);
      parentContainer.children(".section-meta").after(section.headContainer);
    });

    // Reflow panels
    var panels = [];
    api.panel.each(function (panel) {
      if ("customify_panel" !== panel.params.type || "undefined" === typeof panel.params.panel) {
        return;
      }
      panels.push(panel);
    });
    panels.sort(api.utils.prioritySort).reverse();
    $.each(panels, function (i, panel) {
      var parentContainer = $("#sub-accordion-panel-" + panel.params.panel);
      parentContainer.children(".panel-meta").after(panel.headContainer);
    });
  });

  // Extend Panel
  var _panelEmbed = wp.customize.Panel.prototype.embed;
  var _panelIsContextuallyActive = wp.customize.Panel.prototype.isContextuallyActive;
  var _panelAttachEvents = wp.customize.Panel.prototype.attachEvents;
  wp.customize.Panel = wp.customize.Panel.extend({
    attachEvents: function () {
      if ("customify_panel" !== this.params.type || "undefined" === typeof this.params.panel) {
        _panelAttachEvents.call(this);
        return;
      }
      _panelAttachEvents.call(this);
      var panel = this;
      panel.expanded.bind(function (expanded) {
        var parent = api.panel(panel.params.panel);
        if (expanded) {
          parent.contentContainer.addClass("current-panel-parent");
        } else {
          parent.contentContainer.removeClass("current-panel-parent");
        }
      });
      panel.container.find(".customize-panel-back").off("click keydown").on("click keydown", function (event) {
        if (api.utils.isKeydownButNotEnterEvent(event)) {
          return;
        }
        event.preventDefault(); // Keep this AFTER the key filter above
        if (panel.expanded()) {
          api.panel(panel.params.panel).expand();
        }
      });
    },
    embed: function () {
      if ("customify_panel" !== this.params.type || "undefined" === typeof this.params.panel) {
        _panelEmbed.call(this);
        return;
      }
      _panelEmbed.call(this);
      var panel = this;
      var parentContainer = $("#sub-accordion-panel-" + this.params.panel);
      parentContainer.append(panel.headContainer);
    },
    isContextuallyActive: function () {
      if ("customify_panel" !== this.params.type) {
        return _panelIsContextuallyActive.call(this);
      }
      var panel = this;
      var children = this._children("panel", "section");
      api.panel.each(function (child) {
        if (!child.params.panel) {
          return;
        }
        if (child.params.panel !== panel.id) {
          return;
        }
        children.push(child);
      });
      children.sort(api.utils.prioritySort);
      var activeCount = 0;
      _(children).each(function (child) {
        if (child.active() && child.isContextuallyActive()) {
          activeCount += 1;
        }
      });
      return activeCount !== 0;
    }
  });

  // Extend Section
  var _sectionEmbed = wp.customize.Section.prototype.embed;
  var _sectionIsContextuallyActive = wp.customize.Section.prototype.isContextuallyActive;
  var _sectionAttachEvents = wp.customize.Section.prototype.attachEvents;
  wp.customize.Section = wp.customize.Section.extend({
    attachEvents: function () {
      if ("customify_section" !== this.params.type || "undefined" === typeof this.params.section) {
        _sectionAttachEvents.call(this);
        return;
      }
      _sectionAttachEvents.call(this);
      var section = this;
      section.expanded.bind(function (expanded) {
        var parent = api.section(section.params.section);
        if (expanded) {
          parent.contentContainer.addClass("current-section-parent");
        } else {
          parent.contentContainer.removeClass("current-section-parent");
        }
      });
      section.container.find(".customize-section-back").off("click keydown").on("click keydown", function (event) {
        if (api.utils.isKeydownButNotEnterEvent(event)) {
          return;
        }
        event.preventDefault(); // Keep this AFTER the key filter above
        if (section.expanded()) {
          api.section(section.params.section).expand();
        }
      });
    },
    embed: function () {
      if ("customify_section" !== this.params.type || "undefined" === typeof this.params.section) {
        _sectionEmbed.call(this);
        return;
      }
      _sectionEmbed.call(this);
      var section = this;
      var parentContainer = $("#sub-accordion-section-" + this.params.section);
      parentContainer.append(section.headContainer);
    },
    isContextuallyActive: function () {
      if ("customify_section" !== this.params.type) {
        return _sectionIsContextuallyActive.call(this);
      }
      var section = this;
      var children = this._children("section", "control");
      api.section.each(function (child) {
        if (!child.params.section) {
          return;
        }
        if (child.params.section !== section.id) {
          return;
        }
        children.push(child);
      });
      children.sort(api.utils.prioritySort);
      var activeCount = 0;
      _(children).each(function (child) {
        if ("undefined" !== typeof child.isContextuallyActive) {
          if (child.active() && child.isContextuallyActive()) {
            activeCount += 1;
          }
        } else {
          if (child.active()) {
            activeCount += 1;
          }
        }
      });
      return activeCount !== 0;
    }
  });
})(jQuery);
(function ($, wpcustomize) {
  "use strict";

  var $document = $(document);
  var is_rtl = Customify_Control_Args.is_rtl;
  var CustomifyMedia = {
    setAttachment: function (attachment) {
      this.attachment = attachment;
    },
    addParamsURL: function (url, data) {
      if (!$.isEmptyObject(data)) {
        url += (url.indexOf("?") >= 0 ? "&" : "?") + $.param(data);
      }
      return url;
    },
    getThumb: function (attachment) {
      var control = this;
      if (typeof attachment !== "undefined") {
        this.attachment = attachment;
      }
      var t = new Date().getTime();
      if (typeof this.attachment.sizes !== "undefined") {
        if (typeof this.attachment.sizes.medium !== "undefined") {
          return control.addParamsURL(this.attachment.sizes.medium.url, {
            t: t
          });
        }
      }
      return control.addParamsURL(this.attachment.url, {
        t: t
      });
    },
    getURL: function (attachment) {
      if (typeof attachment !== "undefined") {
        this.attachment = attachment;
      }
      var t = new Date().getTime();
      return this.addParamsURL(this.attachment.url, {
        t: t
      });
    },
    getID: function (attachment) {
      if (typeof attachment !== "undefined") {
        this.attachment = attachment;
      }
      return this.attachment.id;
    },
    getInputID: function (attachment) {
      $(".attachment-id", this.preview).val();
    },
    setPreview: function ($el) {
      this.preview = $el;
    },
    insertImage: function (attachment) {
      if (typeof attachment !== "undefined") {
        this.attachment = attachment;
      }
      var url = this.getURL();
      var id = this.getID();
      var mime = this.attachment.mime;
      $(".customify-image-preview", this.preview).addClass("customify--has-file").html('<img src="' + url + '" alt="">');
      $(".attachment-url", this.preview).val(this.toRelativeUrl(url));
      $(".attachment-mime", this.preview).val(mime);
      $(".attachment-id", this.preview).val(id).trigger("change");
      this.preview.addClass("attachment-added");
      this.showChangeBtn();
    },
    toRelativeUrl: function (url) {
      return url;
      //return url.replace( Customify_Control_Args.home_url, '' );
    },
    showChangeBtn: function () {
      $(".customify--add", this.preview).addClass("customify--hide");
      $(".customify--change", this.preview).removeClass("customify--hide");
      $(".customify--remove", this.preview).removeClass("customify--hide");
    },
    insertVideo: function (attachment) {
      if (typeof attachment !== "undefined") {
        this.attachment = attachment;
      }
      var url = this.getURL();
      var id = this.getID();
      var mime = this.attachment.mime;
      var html = '<video width="100%" height="" controls><source src="' + url + '" type="' + mime + '">Your browser does not support the video tag.</video>';
      $(".customify-image-preview", this.preview).addClass("customify--has-file").html(html);
      $(".attachment-url", this.preview).val(this.toRelativeUrl(url));
      $(".attachment-mime", this.preview).val(mime);
      $(".attachment-id", this.preview).val(id).trigger("change");
      this.preview.addClass("attachment-added");
      this.showChangeBtn();
    },
    insertFile: function (attachment) {
      if (typeof attachment !== "undefined") {
        this.attachment = attachment;
      }
      var url = attachment.url;
      var mime = this.attachment.mime;
      var basename = url.replace(/^.*[\\\/]/, "");
      $(".customify-image-preview", this.preview).addClass("customify--has-file").html('<a href="' + url + '" class="attachment-file" target="_blank">' + basename + "</a>");
      $(".attachment-url", this.preview).val(this.toRelativeUrl(url));
      $(".attachment-mime", this.preview).val(mime);
      $(".attachment-id", this.preview).val(this.getID()).trigger("change");
      this.preview.addClass("attachment-added");
      this.showChangeBtn();
    },
    remove: function ($el) {
      if (typeof $el !== "undefined") {
        this.preview = $el;
      }
      $(".customify-image-preview", this.preview).removeAttr("style").html("").removeClass("customify--has-file");
      $(".attachment-url", this.preview).val("");
      $(".attachment-mime", this.preview).val("");
      $(".attachment-id", this.preview).val("").trigger("change");
      this.preview.removeClass("attachment-added");
      $(".customify--add", this.preview).removeClass("customify--hide");
      $(".customify--change", this.preview).addClass("customify--hide");
      $(".customify--remove", this.preview).addClass("customify--hide");
    }
  };
  CustomifyMedia.controlMediaImage = wp.media({
    title: wp.media.view.l10n.addMedia,
    multiple: false,
    library: {
      type: "image"
    }
  });
  CustomifyMedia.controlMediaImage.on("select", function () {
    var attachment = CustomifyMedia.controlMediaImage.state().get("selection").first().toJSON();
    CustomifyMedia.insertImage(attachment);
  });
  CustomifyMedia.controlMediaVideo = wp.media({
    title: wp.media.view.l10n.addMedia,
    multiple: false,
    library: {
      type: "video"
    }
  });
  CustomifyMedia.controlMediaVideo.on("select", function () {
    var attachment = CustomifyMedia.controlMediaVideo.state().get("selection").first().toJSON();
    CustomifyMedia.insertVideo(attachment);
  });
  CustomifyMedia.controlMediaFile = wp.media({
    title: wp.media.view.l10n.addMedia,
    multiple: false
  });
  CustomifyMedia.controlMediaFile.on("select", function () {
    var attachment = CustomifyMedia.controlMediaFile.state().get("selection").first().toJSON();
    CustomifyMedia.insertFile(attachment);
  });
  var customify_controls_list = {};
  //---------------------------------------------------------------------------

  var customifyField = {
    devices: ["desktop", "tablet", "mobile"],
    allDevices: ["desktop", "tablet", "mobile"],
    type: "customify",
    getTemplate: _.memoize(function () {
      var field = this;
      var compiled,
        /*
         * Underscore's default ERB-style templates are incompatible with PHP
         * when asp_tags is enabled, so WordPress uses Mustache-inspired templating syntax.
         *
         * @see trac ticket #22344.
         */
        options = {
          evaluate: /<#([\s\S]+?)#>/g,
          interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
          escape: /\{\{([^\}]+?)\}\}(?!\})/g,
          variable: "data"
        };
      return function (data, id, data_variable_name) {
        if (_.isUndefined(id)) {
          //id = 'tmpl-customize-control-' + field.type;
          id = "tmpl-field-customify-" + field.type;
        }
        if (!_.isUndefined(data_variable_name) && _.isString(data_variable_name)) {
          options.variable = data_variable_name;
        } else {
          options.variable = "data";
        }
        compiled = _.template($("#" + id).html(), null, options);
        return compiled(data);
      };
    }),
    getFieldValue: function (name, fieldSetting, $field) {
      var control = this;
      var type = undefined;
      var support_devices = false;
      if (!_.isUndefined(fieldSetting)) {
        type = fieldSetting.type;
        support_devices = fieldSetting.device_settings;
      }
      var value = "";
      switch (type) {
        case "media":
        case "image":
        case "video":
        case "attachment":
        case "audio":
          if (support_devices) {
            value = {};
            _.each(control.allDevices, function (device) {
              var _name = name + "-" + device;
              value[device] = {
                id: $('input[data-name="' + _name + '"]', $field).val(),
                url: $('input[data-name="' + _name + '-url"]', $field).val(),
                mime: $('input[data-name="' + _name + '-mime"]', $field).val()
              };
            });
          } else {
            value = {
              id: $('input[data-name="' + name + '"]', $field).val(),
              url: $('input[data-name="' + name + '-url"]', $field).val(),
              mime: $('input[data-name="' + name + '-mime"]', $field).val()
            };
          }
          break;
        case "css_ruler":
          if (support_devices) {
            value = {};
            _.each(control.allDevices, function (device) {
              var _name = name + "-" + device;
              value[device] = {
                unit: $('input[data-name="' + _name + '-unit"]:checked', $field).val(),
                top: $('input[data-name="' + _name + '-top"]', $field).val(),
                right: $('input[data-name="' + _name + '-right"]', $field).val(),
                bottom: $('input[data-name="' + _name + '-bottom"]', $field).val(),
                left: $('input[data-name="' + _name + '-left"]', $field).val(),
                link: $('input[data-name="' + _name + '-link"]', $field).is(":checked") ? 1 : ""
              };
            });
          } else {
            value = {
              unit: $('input[data-name="' + name + '-unit"]:checked', $field).val(),
              top: $('input[data-name="' + name + '-top"]', $field).val(),
              right: $('input[data-name="' + name + '-right"]', $field).val(),
              bottom: $('input[data-name="' + name + '-bottom"]', $field).val(),
              left: $('input[data-name="' + name + '-left"]', $field).val(),
              link: $('input[data-name="' + name + '-link"]', $field).is(":checked") ? 1 : ""
            };
          }
          break;
        case "shadow":
          if (support_devices) {
            value = {};
            _.each(control.allDevices, function (device) {
              var _name = name + "-" + device;
              value[device] = {
                color: $('input[data-name="' + _name + '-color"]', $field).val(),
                x: $('input[data-name="' + _name + '-x"]', $field).val(),
                y: $('input[data-name="' + _name + '-y"]', $field).val(),
                blur: $('input[data-name="' + _name + '-blur"]', $field).val(),
                spread: $('input[data-name="' + _name + '-spread"]', $field).val(),
                inset: $('input[data-name="' + _name + '-inset"]', $field).is(":checked") ? 1 : false
              };
            });
          } else {
            value = {
              color: $('input[data-name="' + name + '-color"]', $field).val(),
              x: $('input[data-name="' + name + '-x"]', $field).val(),
              y: $('input[data-name="' + name + '-y"]', $field).val(),
              blur: $('input[data-name="' + name + '-blur"]', $field).val(),
              spread: $('input[data-name="' + name + '-spread"]', $field).val(),
              inset: $('input[data-name="' + name + '-inset"]', $field).is(":checked") ? 1 : false
            };
          }
          break;
        case "font_style":
          if (support_devices) {
            value = {};
            _.each(control.allDevices, function (device) {
              var _name = name + "-" + device;
              value[device] = {
                b: $('input[data-name="' + _name + '-b"]', $field).is(":checked") ? 1 : "",
                i: $('input[data-name="' + _name + '-i"]', $field).is(":checked") ? 1 : "",
                u: $('input[data-name="' + _name + '-u"]', $field).is(":checked") ? 1 : "",
                s: $('input[data-name="' + _name + '-s"]', $field).is(":checked") ? 1 : "",
                t: $('input[data-name="' + _name + '-t"]', $field).is(":checked") ? 1 : ""
              };
            });
          } else {
            value = {
              b: $('input[data-name="' + name + '-b"]', $field).is(":checked") ? 1 : "",
              i: $('input[data-name="' + name + '-i"]', $field).is(":checked") ? 1 : "",
              u: $('input[data-name="' + name + '-u"]', $field).is(":checked") ? 1 : "",
              s: $('input[data-name="' + name + '-s"]', $field).is(":checked") ? 1 : "",
              t: $('input[data-name="' + name + '-t"]', $field).is(":checked") ? 1 : ""
            };
          }
          break;
        case "font":
          if (support_devices) {
            value = {};
            _.each(control.allDevices, function (device) {
              var _name = name + "-" + device;
              var subsets = {};
              $('.list-subsets[data-name="' + _name + '-subsets"] input', $field).each(function () {
                if ($(this).is(":checked")) {
                  var _v = $(this).val();
                  subsets[_v] = _v;
                }
              });
              value[device] = {
                font: $('select[data-name="' + _name + '-font"]', $field).val(),
                type: $('input[data-name="' + _name + '-type"]', $field).val(),
                variant: $('select[data-name="' + _name + '-variant"]', $field).val(),
                // variant
                subsets: subsets
              };
            });
          } else {
            var subsets = {};
            $('.list-subsets[data-name="' + name + '-subsets"] input', $field).each(function () {
              if ($(this).is(":checked")) {
                var _v = $(this).val();
                subsets[_v] = _v;
              }
            });
            value = {
              font: $('select[data-name="' + name + '-font"]', $field).val(),
              type: $('input[data-name="' + name + '-type"]', $field).val(),
              variant: $('select[data-name="' + name + '-variant"]', $field).val(),
              subsets: subsets
            };
          }
          break;
        case "slider":
          // Multi-unit sliders render the unit as a <select>;
          // legacy sliders keep the hidden checked radio. Read
          // whichever exists so saved units round-trip exactly.
          if (support_devices) {
            value = {};
            _.each(control.allDevices, function (device) {
              var _name = name + "-" + device;
              value[device] = {
                unit: $('select[data-name="' + _name + '-unit"], input[data-name="' + _name + '-unit"]:checked', $field).val(),
                value: $('input[data-name="' + _name + '-value"]', $field).val()
              };
            });
          } else {
            value = {
              unit: $('select[data-name="' + name + '-unit"], input[data-name="' + name + '-unit"]:checked', $field).val(),
              value: $('input[data-name="' + name + '-value"]', $field).val()
            };
          }
          break;
        case "icon":
          if (support_devices) {
            value = {};
            _.each(control.allDevices, function (device) {
              var _name = name + "-" + device;
              value[device] = {
                type: $('input[data-name="' + _name + '-type"]', $field).val(),
                icon: $('input[data-name="' + _name + '"]', $field).val()
              };
            });
          } else {
            value = {
              type: $('input[data-name="' + name + '-type"]', $field).val(),
              icon: $('input[data-name="' + name + '"]', $field).val()
            };
          }
          break;
        case "radio":
        case "text_align":
        case "text_align_no_justify":
          if (support_devices) {
            value = {};
            _.each(control.allDevices, function (device) {
              var input = $('input[data-name="' + name + "-" + device + '"]:checked', $field);
              value[device] = input.length ? input.val() : "";
            });
          } else {
            value = $('input[data-name="' + name + '"]:checked', $field).val();
          }
          break;
        case "checkbox":
          if (support_devices) {
            value = {};
            _.each(control.allDevices, function (device) {
              value[device] = $('input[data-name="' + name + "-" + device + '"]', $field).is(":checked") ? 1 : "";
            });
          } else {
            value = $('input[data-name="' + name + '"]', $field).is(":checked") ? 1 : "";
          }
          break;
        case "checkboxes":
          value = {};
          if (support_devices) {
            _.each(control.allDevices, function (device) {
              value[device] = {};
              $('input[data-name="' + name + "-" + device + '"]', $field).each(function () {
                var v = $(this).val();
                if ($(this).is(":checked")) {
                  value[v] = v;
                }
              });
            });
          } else {
            $('input[data-name="' + name + '"]', $field).each(function () {
              var v = $(this).val();
              if ($(this).is(":checked")) {
                value[v] = v;
              }
            });
          }
          break;
        case "typography":
        case "modal":
        case "styling":
          if (support_devices) {
            value = {};
            _.each(control.allDevices, function (device) {
              value[device] = $('[data-name="' + name + "-" + device + '"]', $field).val();
            });
          } else {
            value = $('[data-name="' + name + '"]', $field).val();
          }
          try {
            value = JSON.parse(value);
          } catch (e) {}
          break;
        default:
          if (support_devices) {
            value = {};
            _.each(control.allDevices, function (device) {
              value[device] = $('[data-name="' + name + "-" + device + '"]', $field).val();
            });
          } else {
            value = $('[data-name="' + name + '"]', $field).val();
          }
          break;
      }
      return value;
    },
    getValue: function (field, container) {
      var control = this;
      var value = "";
      switch (field.type) {
        case "group":
          value = {};
          if (field.device_settings) {
            _.each(control.allDevices, function (device) {
              var $area = $(".customify-group-device-fields.customify--for-" + device, container);
              value[device] = {};
              var _value = {};
              _.each(field.fields, function (f) {
                var $_field = $('.customify--group-field[data-field-name="' + f.name + '"]', $area);
                _value[f.name] = control.getFieldValue(f.name, f, $_field);
              });
              value[device] = _value;
              control.initConditional($area, _value);
            });
          } else {
            _.each(field.fields, function (f) {
              var $_field = $('.customify--group-field[data-field-name="' + f.name + '"]', container);
              value[f.name] = control.getFieldValue(f.name, f, $_field);
            });
            control.initConditional(container, value);
          }
          break;
        case "repeater":
          value = [];
          $(".customify--repeater-item", container).each(function (index) {
            var $item = $(this);
            var _v = {};
            _.each(field.fields, function (f) {
              var inputField = $('[data-field-name="' + f.name + '"]', $item);
              //var $_field = inputField.closest('.customify--field');
              //var $_field = inputField.closest('.customify--repeater-field');
              var _fv = control.getFieldValue(f.name, f, $item);
              _v[f.name] = _fv;
              // Update Live title
              if (field.live_title_field == f.name) {
                if (inputField.prop("tagName") == "select") {
                  _fv = $('option[value="' + _fv + '"]').first().text();
                } else if (_.isUndefined(_fv) || _fv == "") {
                  //_fv = control.params.l10n.untitled;
                  _fv = Customify_Control_Args.untitled;
                }
                control.updateRepeaterLiveTitle(_fv, $item, f);
              }
            });
            control.initConditional($item, _v);
            value[index] = _v;
            value[index]["_visibility"] = "visible";
            if ($("input.r-visible-input", $item).length) {
              if (!$("input.r-visible-input", $item).is(":checked")) {
                value[index]["_visibility"] = "hidden";
              }
            }
          });
          break;
        default:
          value = this.getFieldValue(field.name, field, container);
          break;
      }
      return value;
    },
    encodeValue: function (value) {
      return encodeURI(JSON.stringify(value));
    },
    decodeValue: function (value) {
      return JSON.parse(decodeURI(value));
    },
    updateRepeaterLiveTitle: function (value, $item, field) {
      $(".customify--repeater-live-title", $item).text(value);
    },
    compare: function (value1, cond, value2) {
      var equal = false;
      switch (cond) {
        case "===":
          equal = value1 === value2 ? true : false;
          break;
        case ">":
          equal = value1 > value2 ? true : false;
          break;
        case "<":
          equal = value1 < value2 ? true : false;
          break;
        case "!=":
          equal = value1 != value2 ? true : false;
          break;
        case "empty":
          var _v = _.clone(value1);
          if (_.isObject(_v) || _.isArray(_v)) {
            _.each(_v, function (v, i) {
              if (_.isEmpty(v)) {
                delete _v[i];
              }
            });
            equal = _.isEmpty(_v) ? true : false;
          } else {
            equal = _.isNull(_v) || _v == "" ? true : false;
          }
          break;
        case "not_empty":
          var _v = _.clone(value1);
          if (_.isObject(_v) || _.isArray(_v)) {
            _.each(_v, function (v, i) {
              if (_.isEmpty(v)) {
                delete _v[i];
              }
            });
          }
          equal = _.isEmpty(_v) ? false : true;
          break;
        default:
          if (_.isArray(value2)) {
            if (!_.isEmpty(value2) && !_.isEmpty(value1)) {
              equal = _.contains(value2, value1);
            } else {
              equal = false;
            }
          } else {
            equal = value1 == value2 ? true : false;
          }
      }
      return equal;
    },
    multiple_compare: function (list, values, decodeValue) {
      if (_.isUndefined(decodeValue)) {
        decodeValue = false;
      }
      var control = this;
      var check = false;
      try {
        var test = list[0];
        if (_.isString(test)) {
          check = false;
          var cond = list[1];
          var cond_val = list[2];
          var cond_device = false;
          if (!_.isUndefined(list[3])) {
            // can be desktop, tablet, mobile
            cond_device = list[3];
          }
          var value;
          if (!_.isUndefined(values[test])) {
            value = values[test];
            if (cond_device) {
              if (_.isObject(value) && !_.isUndefined(value[cond_device])) {
                value = value[cond_device];
              }
            }
            try {
              if (decodeValue) {
                value = control.decodeValue(value);
              }
            } catch (e) {}
            check = control.compare(value, cond, cond_val);
          }
        } else if (_.isArray(test)) {
          check = true;
          //console.log( '___', list );
          _.each(list, function (req) {
            var cond_key = req[0];
            var cond_cond = req[1];
            var cond_val = req[2];
            var cond_device = false;
            if (!_.isUndefined(req[3])) {
              // can be desktop, tablet, mobile
              cond_device = req[3];
            }
            var t_val = values[cond_key];
            if (_.isUndefined(t_val)) {
              t_val = "";
            }
            // console.log( '___reql', req );
            if (decodeValue && _.isString(t_val)) {
              try {
                t_val = control.decodeValue(t_val);
              } catch (e) {}
            }

            //console.log( '___t_val', t_val );
            if (cond_device) {
              if (_.isObject(t_val) && !_.isUndefined(t_val[cond_device])) {
                t_val = t_val[cond_device];
              }
            }
            if (!control.compare(t_val, cond_cond, cond_val)) {
              check = false;
            }
          });
        }
      } catch (e) {
        //console.log( 'Trying_test_error', e  );
      }
      return check;
    },
    initConditional: function ($el, values) {
      var control = this;
      var $fields = $(".customify--field", $el);
      $fields.each(function () {
        var $field = $(this);
        var check = true;
        var req = $field.attr("data-required") || false;
        if (!_.isUndefined(req) && req) {
          req = JSON.parse(req);
          check = control.multiple_compare(req, values);
          if (!check) {
            $field.addClass("customify--hide");
          } else {
            $field.removeClass("customify--hide");
          }
        }
      });
    },
    addDeviceSwitchers: function ($el) {
      var field = this;
      if (_.isUndefined($el)) {
        $el = field.container;
      }
      var clone = $("#customize-footer-actions .devices").clone();
      clone.addClass("customify-devices");
      $("button", clone).each(function () {
        var d = $(this).attr("data-device");
        if (_.indexOf(field.devices, d) < 0) {
          $(this).remove();
        }
      });
      $(".customify-field-heading", $el).append(clone).addClass("customify-devices-added");
    },
    addRepeaterItem: function (field, value, $container, cb) {
      if (!_.isObject(value)) {
        value = {};
      }
      var control = this;
      var template = control.getTemplate();
      var fields = field.fields;
      var addable = true;
      var title_only = field.title_only;
      if (field.addable === false) {
        addable = false;
      }
      var $itemWrapper = $(template(field, "tmpl-customize-control-repeater-layout"));
      $container.find(".customify--settings-fields").append($itemWrapper);
      _.each(fields, function (f, index) {
        f.value = "";
        f.addable = addable;
        if (!_.isUndefined(value[f.name])) {
          f.value = value[f.name];
        }
        var $fieldArea;
        $fieldArea = $('<div class="customify--repeater-field"></div>');
        $(".customify--repeater-item-inner", $itemWrapper).append($fieldArea);
        control.add(f, $fieldArea, function () {
          if (_.isFunction(cb)) {
            cb();
          }
        });
        var live_title = f.value;
        // Update Live title
        if (field.live_title_field === f.name) {
          if (f.type === "select") {
            live_title = f.choices[f.value];
          } else if (_.isUndefined(live_title) || live_title == "") {
            live_title = Customify_Control_Args.untitled;
          }
          control.updateRepeaterLiveTitle(live_title, $itemWrapper, f);
        }
      });
      if (!_.isUndefined(value._visibility) && value._visibility === "hidden") {
        $itemWrapper.addClass("item---visible-hidden");
        $itemWrapper.find("input.r-visible-input").removeAttr("checked");
      } else {
        $itemWrapper.find("input.r-visible-input").attr("checked", "checked");
      }
      if (title_only) {
        $(".customify--repeater-item-settings, .customify--repeater-item-toggle", $itemWrapper).hide();
      }
      $document.trigger("customify/customizer/repeater/add", [$itemWrapper, control]);
      return $itemWrapper;
    },
    limitRepeaterItems: function (field, $container) {
      return;
      // removed by dead control flow
 var control; 
      // removed by dead control flow
 var addButton; 
      // removed by dead control flow
 var c; 
      // removed by dead control flow

      // removed by dead control flow

    },
    initRepeater: function (field, $container, cb) {
      var control = this;
      field = _.defaults(field, {
        addable: null,
        title_only: null,
        limit: null,
        live_title_field: null,
        fields: null
      });
      field.limit = parseInt(field.limit);
      if (isNaN(field.limit)) {
        field.limit = 0;
      }

      // Sortable
      $container.find(".customify--settings-fields").sortable({
        handle: ".customify--repeater-item-heading",
        containment: "parent",
        update: function (event, ui) {
          // control.getValue();
          if (_.isFunction(cb)) {
            cb();
          }
        }
      });

      // Toggle Move
      $container.on("click", ".customify--repeater-reorder", function (e) {
        e.preventDefault();
        $(".customify--repeater-items", $container).toggleClass("reorder-active");
        $(".customify--repeater-add-new", $container).toggleClass("disabled");
        if ($(".customify--repeater-items", $container).hasClass("reorder-active")) {
          $(this).html($(this).data("done"));
        } else {
          $(this).html($(this).data("text"));
        }
      });

      // Move Up
      $container.on("click", ".customify--repeater-item .customify--up", function (e) {
        e.preventDefault();
        var i = $(this).closest(".customify--repeater-item");
        var index = i.index();
        if (index > 0) {
          var up = i.prev();
          i.insertBefore(up);
          if (_.isFunction(cb)) {
            cb();
          }
        }
      });

      // Move Down
      $container.on("click", ".customify--repeater-item .customify--down", function (e) {
        e.preventDefault();
        var n = $(".customify--repeater-items .customify--repeater-item", $container).length;
        var i = $(this).closest(".customify--repeater-item");
        var index = i.index();
        if (index < n - 1) {
          var down = i.next();
          i.insertAfter(down);
          if (_.isFunction(cb)) {
            cb();
          }
        }
      });

      // Add item when customizer loaded
      if (_.isArray(field.value)) {
        _.each(field.value, function (itemValue) {
          control.addRepeaterItem(field, itemValue, $container, cb);
        });
        //control.getValue(false);
      }
      control.limitRepeaterItems();

      // Toggle visibility
      $container.on("change", ".customify--repeater-item .r-visible-input", function (e) {
        e.preventDefault();
        var p = $(this).closest(".customify--repeater-item");
        if ($(this).is(":checked")) {
          p.removeClass("item---visible-hidden");
        } else {
          p.addClass("item---visible-hidden");
        }
      });

      // Toggle
      if (!field.title_only) {
        $container.on("click", ".customify--repeater-item-toggle, .customify--repeater-live-title", function (e) {
          e.preventDefault();
          var p = $(this).closest(".customify--repeater-item");
          p.toggleClass("customify--open");
        });
      }

      // Remove
      $container.on("click", ".customify--remove", function (e) {
        e.preventDefault();
        var p = $(this).closest(".customify--repeater-item");
        p.remove();
        $document.trigger("customify/customizer/repeater/remove", [control]);
        if (_.isFunction(cb)) {
          cb();
        }
        control.limitRepeaterItems();
      });
      var defaultValue = {};
      _.each(field.fields, function (f, k) {
        defaultValue[f.name] = null;
        if (!_.isUndefined(f.default)) {
          defaultValue[f.name] = f.default;
        }
      });

      // Add Item
      $container.on("click", ".customify--repeater-add-new", function (e) {
        e.preventDefault();
        if (!$(this).hasClass("disabled")) {
          control.addRepeaterItem(field, defaultValue, $container, cb);
          if (_.isFunction(cb)) {
            cb();
          }
          control.limitRepeaterItems();
        }
      });
    },
    add: function (field, $fieldsArea, cb) {
      var control = this;
      var template = control.getTemplate();
      var template_id = "tmpl-field-" + control.type + "-" + field.type;
      if ($("#" + template_id).length == 0) {
        template_id = "tmpl-field-" + control.type + "-text";
      }
      if (field.device_settings) {
        var fieldItem = null;
        _.each(control.devices, function (device, index) {
          var _field = _.clone(field);
          _field.original_name = field.name;
          if (_.isObject(field.value)) {
            if (!_.isUndefined(field.value[device])) {
              _field.value = field.value[device];
            } else {
              _field.value = "";
            }
          } else {
            _field.value = "";
            if (index === 0) {
              _field.value = field.value;
            }
          }
          _field.name = field.name + "-" + device;
          _field._current_device = device;
          var $deviceFields = $(template(_field, template_id, "field"));
          var deviceFieldItem = $deviceFields.find(".customify-field-settings-inner").first();
          if (!fieldItem) {
            $fieldsArea.append($deviceFields).addClass("customify--multiple-devices");
          }
          deviceFieldItem.addClass("customify--for-" + device);
          deviceFieldItem.attr("data-for-device", device);
          if (fieldItem) {
            deviceFieldItem.insertAfter(fieldItem);
            fieldItem = deviceFieldItem;
          }
          fieldItem = deviceFieldItem;
        });
      } else {
        field.original_name = field.name;
        var $fields = template(field, template_id, "field");
        $fieldsArea.html($fields);
      }

      // Repeater
      if (field.type === "repeater") {
        var $rf_area = $(template(field, "tmpl-customize-control-repeater-inner"));
        $fieldsArea.find(".customify-field-settings-inner").replaceWith($rf_area);
        control.initRepeater(field, $rf_area, cb);
      }
      if (field.css_format && _.isString(field.css_format)) {
        if (field.css_format.indexOf("value_no_unit") > 0) {
          $fieldsArea.find(".customify--slider-input").addClass("no-unit");
          $(".customify--css-unit .customify--label-active", $fieldsArea).hide();
        }
      }

      // Add unility
      switch (field.type) {
        case "color":
        case "shadow":
          control.initColor($fieldsArea);
          break;
        case "image":
        case "video":
        case "audio":
        case "attchment":
        case "file":
          control.initMedia($fieldsArea);
          break;
        case "slider":
          control.initSlider($fieldsArea);
          break;
        case "css_ruler":
          control.initCSSRuler($fieldsArea, cb);
          break;
      }
      if (field.type !== "hidden") {
        if (!_.isUndefined(field.device_settings) && field.device_settings) {
          control.addDeviceSwitchers($fieldsArea);
        }
      }
    },
    addFields: function (fields, values, $fieldsArea, cb) {
      var control = this;
      if (!_.isObject(values)) {
        values = {};
      }
      _.each(fields, function (f, index) {
        if (_.isUndefined(f.class)) {
          f.class = "";
        }
        var $fieldArea = $('<div class="customify--group-field ft--' + f.type + " " + f.class + '" data-field-name="' + f.name + '"></div>');
        $fieldsArea.append($fieldArea);
        f.original_name = f.name;
        if (!_.isUndefined(values[f.name])) {
          f.value = values[f.name];
        } else if (!_.isUndefined(f.default)) {
          f.value = f.default;
        } else {
          f.value = null;
        }
        control.add(f, $fieldArea, cb);
      });
    },
    initSlider: function ($el) {
      if ($(".customify-input-slider", $el).length > 0) {
        $(".customify-input-slider", $el).each(function () {
          var slider = $(this);
          var p = slider.parent();
          var input = $(".customify--slider-input", p);
          var min = slider.data("min") || 0;
          var max = slider.data("max") || 300;
          var step = slider.data("step") || 1;
          if (!_.isNumber(min)) {
            min = 0;
          }
          if (!_.isNumber(max)) {
            max = 300;
          }
          if (!_.isNumber(step)) {
            step = 1;
          }

          // Display-only handle seeding: with no saved value, park
          // the handle at the field's placeholder (the effective
          // CSS default) so the user starts dragging from the
          // documented starting point. Programmatic .slider("value")
          // does NOT fire `slide`, so the input stays empty and
          // nothing is saved until the user actually interacts.
          var seedHandle = function () {
            var ph = parseFloat(input.attr("placeholder"));
            if (!isNaN(ph)) {
              slider.slider("value", ph);
            }
          };
          var current_val = input.val();
          if ("" === current_val) {
            var _ph = parseFloat(input.attr("placeholder"));
            if (!isNaN(_ph)) {
              current_val = _ph;
            }
          }
          slider.slider({
            range: "min",
            value: current_val,
            step: step,
            min: min,
            max: max,
            slide: function (event, ui) {
              input.val(ui.value).trigger("data-change");
            }
          });
          input.on("change", function () {
            if ("" === $(this).val()) {
              // Cleared (or never set) — fall back to the
              // placeholder starting point instead of
              // dropping the handle to the range minimum.
              seedHandle();
              return;
            }
            slider.slider("value", $(this).val());
          });

          // Reset
          var wrapper = slider.closest(".customify-input-slider-wrapper");
          wrapper.on("click", ".reset", function (e) {
            e.preventDefault();
            var d = slider.data("default");
            if (!_.isObject(d)) {
              d = {
                unit: "px",
                value: ""
              };
            }
            $(".customify--slider-input", wrapper).val(d.value);
            slider.slider("option", "value", d.value);
            var $unitSelect = $(".customify--unit-select", wrapper);
            if ($unitSelect.length) {
              var targetUnit = d.unit || "px";
              // No default VALUE → reset = pristine state:
              // re-derive the unit from the display default
              // (the same rule the template applies on first
              // render) so the seeded handle lands on e.g.
              // 2.1em — not 2.1 on the px scale, which reads
              // as zero.
              if (_.isUndefined(d.value) || null === d.value || "" === d.value) {
                var phm = String(input.attr("placeholder") || "").match(/^-?[0-9.]+\s*([a-z%]+)?$/i);
                var pranges = slider.data("units");
                if (phm && _.isObject(pranges)) {
                  var pu = phm[1] ? phm[1].toLowerCase() : "-";
                  if (pranges[pu]) {
                    targetUnit = pu;
                  }
                }
              }
              // Restore via the select — re-ranges through
              // its own change handler below.
              $unitSelect.val(targetUnit).trigger("change");
            } else {
              $('.customify--css-unit input.customify-input[value="' + d.unit + '"]', wrapper).trigger("click");
            }
            $(".customify--slider-input", wrapper).trigger("change");
          });

          // Multi-unit slider: `data-units` maps unit =>
          // {min, max, step} (see `units` in get_typo_fields()).
          // Switching the unit re-ranges the slider + number
          // input and clamps the current value into the new
          // range. Saved shape stays {value, unit} — a unit is
          // only written when the user actively changes it. An
          // unknown saved unit (rendered as its own option for
          // lossless round-trip) has no range entry: keep the
          // current range untouched.
          var unitRanges = slider.data("units");
          var $unitSelect = $(".customify--unit-select", wrapper);
          if (_.isObject(unitRanges) && $unitSelect.length) {
            // Track the outgoing unit so a switch can CONVERT
            // the current number instead of reusing it raw —
            // 2.42em becomes ≈39px, not a near-zero 2.42px.
            $unitSelect.data("prevUnit", $unitSelect.val());
            // px-equivalence factors. em/rem/unitless treat
            // 1 ≈ 16px — an approximation, but it keeps the
            // value in the same visual ballpark on switch.
            // Conversion only runs on an explicit user unit
            // change with a non-empty value, through the
            // normal save path — never silently on load.
            var UNIT_PX_FACTOR = {
              px: 1,
              em: 16,
              rem: 16,
              "-": 16
            };
            $unitSelect.on("change", function () {
              var next = $(this).val();
              var prev = $(this).data("prevUnit");
              $(this).data("prevUnit", next);
              var r = unitRanges[next];
              if (!_.isObject(r)) {
                return;
              }
              var rMin = parseFloat(r.min);
              var rMax = parseFloat(r.max);
              var rStep = parseFloat(r.step);
              slider.slider("option", {
                min: rMin,
                max: rMax,
                step: rStep
              });
              input.attr({
                min: rMin,
                max: rMax,
                step: rStep
              });
              var v = input.val();
              if (v !== "") {
                v = parseFloat(v);
                if (prev !== next && UNIT_PX_FACTOR[prev] && UNIT_PX_FACTOR[next]) {
                  v = v * UNIT_PX_FACTOR[prev] / UNIT_PX_FACTOR[next];
                  v = "px" === next ? Math.round(v) : Math.round(v * 100) / 100;
                }
                var clamped = Math.min(Math.max(v, rMin), rMax);
                input.val(clamped);
                slider.slider("value", clamped);
              }
              // Persist the new unit: the select itself is
              // `.change-by-js` (ignored by the standalone
              // control's save delegate); the number input
              // is not — its change reaches every context.
              input.trigger("change");
            });
          }
        });
      }
    },
    initMedia: function ($el) {
      // When add/Change
      $el.on("click", ".customify--media .customify--add, .customify--media .customify--change, .customify--media .customify-image-preview", function (e) {
        e.preventDefault();
        var p = $(this).closest(".customify--media");
        CustomifyMedia.setPreview(p);
        CustomifyMedia.controlMediaImage.open();
      });

      // When add/Change
      $el.on("click", ".customify--media .customify--remove", function (e) {
        e.preventDefault();
        var p = $(this).closest(".customify--media");
        CustomifyMedia.remove(p);
      });
    },
    initCSSRuler: function ($el, change_cb) {
      // When toggle value change
      $el.on("change", ".customify--label-parent", function () {
        if ($(this).attr("type") == "radio") {
          var name = $(this).attr("name");
          $('input[name="' + name + '"]', $el).parent().removeClass("customify--label-active");
        }
        var checked = $(this).is(":checked");
        if (checked) {
          $(this).parent().addClass("customify--label-active");
        } else {
          $(this).parent().removeClass("customify--label-active");
        }
        if (_.isFunction(change_cb)) {
          change_cb();
        }
      });
      $el.on("change keyup", ".customify--css-ruler .customify-input-css", function () {
        var p = $(this).closest(".customify--css-ruler");
        var link_checked = $(".customify--css-ruler-link input", p).is(":checked");
        if (link_checked) {
          var v = $(this).val();
          $(".customify-input-css", p).not($(this)).each(function () {
            if (!$(this).is(":disabled")) {
              $(this).val(v);
            }
          });
        }
        if (_.isFunction(change_cb)) {
          change_cb();
        }
      });
    },
    initColor: function ($el) {
      $(".customify-input-color", $el).each(function () {
        var colorInput = $(this);
        var df = colorInput.data("default") || "";
        var current_val = $(".customify-input--color", colorInput).val();
        // data-alpha="true"
        $(".customify--color-panel", colorInput).attr("data-alpha", "true");
        $(".customify--color-panel", colorInput).wpColorPicker({
          defaultColor: df,
          change: function (event, ui) {
            var new_color = ui.color.toString();
            $(".customify-input--color", colorInput).val(new_color);
            if (ui.color.toString() !== current_val) {
              current_val = new_color;
              $(".customify-input--color", colorInput).trigger("change");
            }
          },
          clear: function (event, ui) {
            $(".customify-input--color", colorInput).val("");
            $(".customify-input--color", colorInput).trigger("data-change");
          }
        });
      });
    }
  };

  //-------------------------------------------------------------------------

  var customify_controlConstructor = {
    devices: ["desktop", "tablet", "mobile"],
    // When we're finished loading continue processing
    type: "customify",
    settingField: null,
    getTemplate: _.memoize(function () {
      var control = this;
      var compiled,
        /*
         * Underscore's default ERB-style templates are incompatible with PHP
         * when asp_tags is enabled, so WordPress uses Mustache-inspired templating syntax.
         *
         * @see trac ticket #22344.
         */
        options = {
          evaluate: /<#([\s\S]+?)#>/g,
          interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
          escape: /\{\{([^\}]+?)\}\}(?!\})/g,
          variable: "data"
        };
      return function (data, id, data_variable_name) {
        if (_.isUndefined(id)) {
          id = "tmpl-field-customify-" + control.type;
        }
        if (!_.isUndefined(data_variable_name) && _.isString(data_variable_name)) {
          options.variable = data_variable_name;
        } else {
          options.variable = "data";
        }
        compiled = _.template($("#" + id).html(), null, options);
        return compiled(data);
      };
    }),
    addDeviceSwitchers: customifyField.addDeviceSwitchers,
    init: function () {
      var control = this;
      if (_.isArray(control.params.devices) && !_.isEmpty(control.params.devices)) {
        control.devices = control.params.devices;
      }

      // The hidden field that keeps the data saved (though we never update it)
      control.settingField = control.container.find("[data-customize-setting-link]").first();
      switch (control.params.setting_type) {
        case "group":
          control.initGroup();
          break;
        case "repeater":
          control.initRepeater();
          break;
        default:
          control.initField();
          break;
      }
      control.container.on("change keyup data-change", "input:not(.change-by-js), select:not(.change-by-js), textarea:not(.change-by-js)", function () {
        control.getValue();
      });

      // Sync the control DOM when the bound setting changes externally —
      // e.g. Multiple Headers no-reload variant switch fires
      // wp.customize(key).set(NEW_VALUE), and the control needs to
      // repaint its fields to reflect the new value. Without this bind
      // the control's DOM stays frozen on the value it rendered at mount
      // time even though the underlying setting has changed.
      //
      // Echo guard: getValue() → encodeValue() → setting.set() will fire
      // this same change handler. The `_customifyWriting` flag set
      // around setting.set() in getValue() lets us short-circuit those
      // self-triggered events.
      if (control.setting && typeof control.setting.bind === "function") {
        control.setting.bind(function () {
          if (control._customifyWriting) {
            return;
          }
          control.refreshFromSetting();
        });
      }
    },
    /**
     * Repaint the control's form fields from the bound setting's current
     * value. Called when an external actor (Multiple Headers variant
     * switch, programmatic theme-mod write) mutates the setting without
     * going through this control's UI.
     *
     * Strategy: clear the fields area, sync params.value from the setting,
     * then re-run the type-appropriate init (initGroup / initRepeater /
     * initField). The container-level "change keyup" delegate added in
     * init() is left intact — emptying the inner DOM detaches its inputs
     * but the delegation survives, so we do NOT re-bind it (rebinding
     * would double-fire getValue on every keystroke).
     */
    refreshFromSetting: function () {
      var control = this;
      if (typeof control.decodeValue !== "function") {
        return;
      }
      var raw = control.setting.get();
      var decoded;
      try {
        decoded = control.decodeValue(raw);
      } catch (e) {
        decoded = raw;
      }
      control.params.value = decoded;
      var $area = control.container.find(".customify--settings-fields");
      if (!$area.length) {
        return;
      }
      $area.empty();
      control._customifyRefreshing = true;
      try {
        switch (control.params.setting_type) {
          case "group":
            control.initGroup();
            break;
          case "repeater":
            control.initRepeater();
            break;
          default:
            control.initField();
            break;
        }
      } finally {
        control._customifyRefreshing = false;
      }

      // Chrome hooks (e.g. the typography trigger preview) re-render
      // from the freshly painted DOM on this event.
      control.container.trigger("customify/control/refreshed");
    },
    addParamsURL: function (url, data) {
      if (!$.isEmptyObject(data)) {
        url += (url.indexOf("?") >= 0 ? "&" : "?") + $.param(data);
      }
      return url;
    },
    compare: customifyField.compare,
    multiple_compare: customifyField.multiple_compare,
    initConditional: customifyField.initConditional,
    getValue: function (save) {
      var control = this;
      var value = "";
      var field = _.clone(control.params);
      field.type = control.params.setting_type;
      field.name = control.id;
      field.value = control.value;
      field.default = control.params.default;
      field.devices = control.params.devices;
      if (field.type === "slider") {
        field.min = control.params.min;
        field.max = control.params.max;
        field.step = control.params.step;
        field.unit = control.params.unit;
      }
      if (field.type === "css_ruler") {
        field.fields_disabled = control.params.fields_disabled;
      }
      if (field.type === "group" || field.type === "repeater") {
        field.fields = control.params.fields;
        field.live_title_field = control.params.live_title_field;
      }
      if (control.params.setting_type === "select" || control.params.setting_type === "radio") {
        field.choices = control.params.choices;
      }
      if (control.params.setting_type === "checkbox") {
        field.checkbox_label = control.params.checkbox_label;
      }
      field.device_settings = control.params.device_settings;
      value = customifyField.getValue(field, $(".customify--settings-fields", control.container));
      if (_.isUndefined(save) || save) {
        // Flag the write so the setting.bind handler installed in
        // init() can distinguish self-triggered changes from external
        // ones and skip refreshFromSetting() — otherwise every
        // keystroke would empty/rebuild the field DOM mid-edit.
        control._customifyWriting = true;
        try {
          control.setting.set(control.encodeValue(value));
        } finally {
          control._customifyWriting = false;
        }

        // Need improve next version
        if (_.isArray(control.params.reset_controls)) {
          _.each(control.params.reset_controls, function (_cid) {
            try {
              var c = wpcustomize.control(_cid);
              c.setting.set(control.encodeValue(c.params.default));
            } catch (e) {}
          });
        }
        $document.trigger("customify/customizer/value_changed", [control, value]);
      } else {}
      return value;
    },
    encodeValue: function (value) {
      return encodeURI(JSON.stringify(value));
    },
    decodeValue: function (value) {
      return JSON.parse(decodeURI(value));
    },
    updateRepeaterLiveTitle: function (value, $item, field) {
      $(".customify--repeater-live-title", $item).text(value);
    },
    initGroup: function () {
      var control = this;
      if (control.params.device_settings) {
        control.container.find(".customify--settings-fields").addClass("customify--multiple-devices");
        if (!_.isObject(control.params.value)) {
          control.params.value = {};
        }
        _.each(control.devices, function (device, device_index) {
          var $group_device = $('<div class="customify-group-device-fields customify-field-settings-inner customify--for-' + device + '"></div>');
          control.container.find(".customify--settings-fields").append($group_device);
          var device_value = {};
          if (!_.isUndefined(control.params.value[device])) {
            device_value = control.params.value[device];
          }
          if (!_.isObject(device_value)) {
            device_value = {};
          }
          customifyField.addFields(control.params.fields, device_value, $group_device, function () {
            control.getValue();
          });
        });
      } else {
        customifyField.addFields(control.params.fields, control.params.value, control.container.find(".customify--settings-fields"), function () {
          control.getValue();
        });
      }
      control.getValue(false);
    },
    addField: function (field, $fieldsArea, cb) {
      customifyField.devices = _.clone(this.devices);
      customifyField.add(field, $fieldsArea, cb);
    },
    initField: function () {
      var control = this;
      var field = _.clone(control.params);
      field = _.extend(field, {
        type: control.params.setting_type,
        name: control.id,
        value: control.params.value,
        default: control.params.default,
        devices: control.params.devices,
        unit: control.params.unit,
        title: null,
        label: null,
        description: null
      });
      if (field.type == "slider") {
        field.min = control.params.min;
        field.max = control.params.max;
        field.step = control.params.step;
      }
      if (field.type == "css_ruler") {
        field.fields_disabled = control.params.fields_disabled;
      }
      if (control.params.setting_type == "select" || control.params.setting_type == "radio") {
        field.choices = control.params.choices;
      }
      if (control.params.setting_type == "checkbox") {
        field.checkbox_label = control.params.checkbox_label;
      }
      field.device_settings = control.params.device_settings;
      var $fieldsArea = control.container.find(".customify--settings-fields");
      control.addField(field, $fieldsArea, function () {
        control.getValue();
      });
      if (field.type !== "hidden") {
        if (!_.isUndefined(field.device_settings) && field.device_settings) {
          control.addDeviceSwitchers(control.container);
        }
      }
    },
    addRepeaterItem: function (value) {
      if (!_.isObject(value)) {
        value = {};
      }
      var control = this;
      var template = control.getTemplate();
      var fields = control.params.fields;
      var addable = true;
      var title_only = control.params.title_only;
      if (control.params.addable === false) {
        addable = false;
      }
      var $itemWrapper = $(template(control.params, "tmpl-customize-control-repeater-item"));
      control.container.find(".customify--settings-fields").append($itemWrapper);
      _.each(fields, function (f, index) {
        f.value = "";
        f.addable = addable;
        if (!_.isUndefined(value[f.name])) {
          f.value = value[f.name];
        }
        var $fieldArea;
        $fieldArea = $('<div class="customify--repeater-field"></div>');
        $(".customify--repeater-item-inner", $itemWrapper).append($fieldArea);
        control.addField(f, $fieldArea, function () {
          control.getValue();
        });
      });
      if (!_.isUndefined(value._visibility) && value._visibility === "hidden") {
        $itemWrapper.addClass("item---visible-hidden");
        $itemWrapper.find("input.r-visible-input").removeAttr("checked");
      } else {
        $itemWrapper.find("input.r-visible-input").attr("checked", "checked");
      }
      if (title_only) {
        $(".customify--repeater-item-settings, .customify--repeater-item-toggle", $itemWrapper).hide();
      }
      $document.trigger("customify/customizer/repeater/add", [$itemWrapper, control]);
      return $itemWrapper;
    },
    limitRepeaterItems: function () {
      var control = this;
      var addButton = $(".customify--repeater-add-new", control.container);
      var c = $(".customify--settings-fields .customify--repeater-item", control.container).length;
      if (control.params.limit > 0) {
        if (c >= control.params.limit) {
          addButton.addClass("customify--hide");
          if (control.params.limit_msg) {
            if ($(".customify--limit-item-msg", control.container).length === 0) {
              $('<p class="customify--limit-item-msg">' + control.params.limit_msg + "</p>").insertBefore(addButton);
            } else {
              $(".customify--limit-item-msg", control.container).removeClass("customify--hide");
            }
          }
        } else {
          $(".customify--limit-item-msg", control.container).addClass("customify--hide");
          addButton.removeClass("customify--hide");
        }
      }
      if (c > 0) {
        $(".customify--repeater-reorder", control.container).removeClass("customify--hide");
      } else {
        $(".customify--repeater-reorder", control.container).addClass("customify--hide");
      }
    },
    initRepeater: function () {
      var control = this;
      control.params.limit = parseInt(control.params.limit);
      if (isNaN(control.params.limit)) {
        control.params.limit = 0;
      }

      // Sortable
      control.container.find(".customify--settings-fields").sortable({
        handle: ".customify--repeater-item-heading",
        containment: "parent",
        update: function (event, ui) {
          control.getValue();
        }
      });

      // Toggle Move
      control.container.on("click", ".customify--repeater-reorder", function (e) {
        e.preventDefault();
        $(".customify--repeater-items", control.container).toggleClass("reorder-active");
        $(".customify--repeater-add-new", control.container).toggleClass("disabled");
        if ($(".customify--repeater-items", control.container).hasClass("reorder-active")) {
          $(this).html($(this).data("done"));
        } else {
          $(this).html($(this).data("text"));
        }
      });

      // Move Up
      control.container.on("click", ".customify--repeater-item .customify--up", function (e) {
        e.preventDefault();
        var i = $(this).closest(".customify--repeater-item");
        var index = i.index();
        if (index > 0) {
          var up = i.prev();
          i.insertBefore(up);
          control.getValue();
        }
      });

      // Move Down
      control.container.on("click", ".customify--repeater-item .customify--down", function (e) {
        e.preventDefault();
        var n = $(".customify--repeater-items .customify--repeater-item", control.container).length;
        var i = $(this).closest(".customify--repeater-item");
        var index = i.index();
        if (index < n - 1) {
          var down = i.next();
          i.insertAfter(down);
          control.getValue();
        }
      });

      /**
       * @TODO: Translateable live title if not addable
       */
      if (!control.params.addable) {
        if (control.params.live_title_field) {
          var _titles = {};
          _.each(control.params.default, function (_value) {
            if (!_.isUndefined(_value._key) && !_.isUndefined(_value[control.params.live_title_field])) {
              _titles[_value._key] = _value[control.params.live_title_field];
            }
          });
          _.each(control.params.value, function (_value, index) {
            if (!_.isUndefined(_titles[_value._key])) {
              control.params.value[index][control.params.live_title_field] = _titles[_value._key];
            }
          });
        }
      }

      // Add item when customizer loaded
      if (_.isArray(control.params.value)) {
        _.each(control.params.value, function (itemValue) {
          control.addRepeaterItem(itemValue);
        });
        control.getValue(false);
      }
      control.limitRepeaterItems();

      // Toggle visibility
      control.container.on("change", ".customify--repeater-item .r-visible-input", function (e) {
        e.preventDefault();
        var p = $(this).closest(".customify--repeater-item");
        if ($(this).is(":checked")) {
          p.removeClass("item---visible-hidden");
        } else {
          p.addClass("item---visible-hidden");
        }
      });

      // Toggle
      if (!control.params.title_only) {
        control.container.on("click", ".customify--repeater-item-toggle, .customify--repeater-live-title", function (e) {
          e.preventDefault();
          var p = $(this).closest(".customify--repeater-item");
          p.toggleClass("customify--open");
        });
      }

      // Remove
      control.container.on("click", ".customify--remove", function (e) {
        e.preventDefault();
        var p = $(this).closest(".customify--repeater-item");
        p.remove();
        $document.trigger("customify/customizer/repeater/remove", [control]);
        control.getValue();
        control.limitRepeaterItems();
      });
      var defaultValue = {};
      _.each(control.params.fields, function (f, k) {
        defaultValue[f.name] = null;
        if (!_.isUndefined(f.default)) {
          defaultValue[f.name] = f.default;
        }
      });

      // Add Item
      control.container.on("click", ".customify--repeater-add-new", function (e) {
        e.preventDefault();
        if (!$(this).hasClass("disabled")) {
          control.addRepeaterItem(defaultValue);
          control.getValue();
          control.limitRepeaterItems();
        }
      });
    }
  };
  var customify_control = function (control) {
    control = _.extend(control, customify_controlConstructor);
    control.init();
  };
  //---------------------------------------------------------------------------

  wp.customize.controlConstructor.customify = wp.customize.Control.extend({
    ready: function () {
      customify_controls_list[this.id] = this;
    }
  });
  var IconPicker = {
    pickingEl: null,
    listIcons: null,
    render: function (list_icons) {
      var that = this;
      if (!_.isUndefined(list_icons) && !_.isEmpty(list_icons)) {
        _.each(list_icons, function (icon_config, font_type) {
          $("#customify--sidebar-icon-type").append(' <option value="' + font_type + '">' + icon_config.name + "</option>");
          that.addCSS(icon_config, font_type);
          that.addIcons(icon_config, font_type);
        });
      }
    },
    addCSS: function (icon_config, font_type) {
      if (typeof icon_config.url === 'object') {
        $.each(icon_config.url, function (index, value) {
          if (!$("#font-icon-" + index).length) {
            $("head").append("<link rel='stylesheet' id='font-icon-" + index + "'  href='" + value + "' type='text/css' media='all' />");
          }
        });
      } else {
        if (!$("#font-icon-" + font_type).length) {
          $("head").append("<link rel='stylesheet' id='font-icon-" + font_type + "'  href='" + icon_config.url + "' type='text/css' media='all' />");
        }
      }
    },
    addIcons: function (icon_config, font_type) {
      var icon_html = '<ul class="customify--list-icons icon-' + font_type + '" data-type="' + font_type + '">';
      _.each(icon_config.icons, function (icon_class, i) {
        var class_name = "";
        if (icon_config.class_config) {
          class_name = icon_config.class_config.replace(/__icon_name__/g, icon_class);
        } else {
          class_name = icon_class;
        }
        icon_html += '<li title="' + icon_class + '" data-type="' + font_type + '" data-icon="' + class_name + '"><span class="icon-wrapper"><i class="' + class_name + '"></i></span></li>';
      });
      icon_html += "</ul>";
      $("#customify--icon-browser").append(icon_html);
    },
    changeType: function () {
      $document.on("change", "#customify--sidebar-icon-type", function () {
        var type = $(this).val();
        if (!type || type == "all") {
          $("#customify--icon-browser .customify--list-icons").show();
        } else {
          $("#customify--icon-browser .customify--list-icons").hide();
          $("#customify--icon-browser .customify--list-icons.icon-" + type).show();
        }
      });
    },
    show: function () {
      var controlWidth = $("#customize-controls").width();
      if (!is_rtl) {
        $("#customify--sidebar-icons").css("left", controlWidth).addClass("customify--active");
      } else {
        $("#customify--sidebar-icons").css("right", controlWidth).addClass("customify--active");
      }
    },
    close: function () {
      if (!is_rtl) {
        $("#customify--sidebar-icons").css("left", -300).removeClass("customify--active");
      } else {
        $("#customify--sidebar-icons").css("right", -300).removeClass("customify--active");
      }
      $(".customify--icon-picker").removeClass("customify--icon-picking");
      this.pickingEl = null;
    },
    autoClose: function () {
      var that = this;
      $document.on("click", function (event) {
        if (!$(event.target).closest(".customify--icon-picker").length) {
          if (!$(event.target).closest("#customify--sidebar-icons").length) {
            that.close();
          }
        }
      });
      $("#customify--sidebar-icons .customize-controls-icon-close").on("click", function () {
        that.close();
      });
      $document.on("keyup", function (event) {
        if (event.keyCode === 27) {
          that.close();
        }
      });
    },
    picker: function () {
      var that = this;
      var open = function ($el) {
        if (that.pickingEl) {
          that.pickingEl.removeClass("customify--icon-picking");
        }
        that.pickingEl = $el.closest(".customify--icon-picker");
        that.pickingEl.addClass("customify--picking-icon");
        that.show();
      };
      $document.on("click", ".customify--icon-picker .customify--pick-icon", function (e) {
        e.preventDefault();
        var button = $(this);
        if (_.isNull(that.listIcons)) {
          that.ajaxLoad(function () {
            open(button);
          });
        } else {
          open(button);
        }
      });
      $document.on("click", "#customify--icon-browser li", function (e) {
        e.preventDefault();
        var li = $(this);
        var icon_preview = li.find("i").clone();
        var icon = li.attr("data-icon") || "";
        var type = li.attr("data-type") || "";
        $(".customify--input-icon-type", that.pickingEl).val(type);
        $(".customify--input-icon-name", that.pickingEl).val(icon).trigger("change");
        $(".customify--icon-preview-icon", that.pickingEl).html(icon_preview);
        that.close();
      });

      // remove
      $document.on("click", ".customify--icon-picker .customify--icon-remove", function (e) {
        e.preventDefault();
        if (that.pickingEl) {
          that.pickingEl.removeClass("customify--icon-picking");
        }
        that.pickingEl = $(this).closest(".customify--icon-picker");
        that.pickingEl.addClass("customify--picking-icon");
        $(".customify--input-icon-type", that.pickingEl).val("");
        $(".customify--input-icon-name", that.pickingEl).val("").trigger("change");
        $(".customify--icon-preview-icon", that.pickingEl).html("");
      });
    },
    ajaxLoad: function (cb) {
      var that = this;
      $.get(Customify_Control_Args.ajax, {
        action: "customify/customizer/ajax/get_icons",
        wp_customize: "on",
        _nonce: _wpCustomizeSettings.nonce.preview,
        customize_theme: _wpCustomizeSettings.theme.stylesheet
      }, function (res) {
        if (res.success) {
          that.listIcons = res.data;
          that.render(res.data);
          that.changeType();
          that.autoClose();
          if (_.isFunction(cb)) {
            cb();
          }
        }
      });
    },
    init: function () {
      var that = this;
      that.ajaxLoad();
      that.picker();
      // Search icon
      $document.on("keyup", "#customify--icon-search", function (e) {
        var v = $(this).val();
        v = v.trim();
        if (v) {
          $("#customify--icon-browser li").hide();
          $("#customify--icon-browser li[data-icon*='" + v + "']").show();
        } else {
          $("#customify--icon-browser li").show();
        }
      });
    }
  };
  var typoControl = setupTypographyControl({
    $: $,
    $document: $document,
    wpcustomize: wpcustomize,
    customifyField: customifyField
  });
  var typoPresets = setupTypographyPresets({
    $: $,
    $document: $document,
    wpcustomize: wpcustomize
  });
  var FontSelector = typoControl.FontSelector;
  var intTypos = typoControl.intTypos;

  //---------------------------------------------------------------------------
  var customifyModal = {
    tabs: {
      normal: "Normal",
      hover: "Hover"
    },
    config: {},
    $el: null,
    container: null,
    controlID: "",
    // True when the control opted into the trigger + popover chrome
    // via `'popover_chrome' => true` (style-data modals only).
    chrome: false,
    activeTab: "",
    addFields: function (values) {
      var that = this;
      if (!_.isObject(that.values)) {
        that.values = {};
      }
      that.values = _.defaults(that.values, {});
      var fieldsArea = $(".customify-modal-settings--fields", that.container);
      fieldsArea.html("");
      that.config = _.defaults(that.config, {
        tabs: {}
      });
      var tabsHTML = $('<div class="modal--tabs"></div>');
      var c = 0;
      _.each(that.config.tabs, function (label, key) {
        if (label && _.isObject(that.config[key + "_fields"])) {
          c++;
          tabsHTML.append('<div><span data-tab="' + key + '" class="modal--tab modal-tab--' + key + '">' + label + "</span></div>");
        }
      });
      fieldsArea.append(tabsHTML);
      if (c <= 1) {
        tabsHTML.addClass("customify--hide");
      }
      customifyField.devices = Customify_Control_Args.devices;
      _.each(that.config.tabs, function (label, key) {
        if (_.isObject(that.config[key + "_fields"]) && !_.isEmpty(key + "_fields")) {
          var content = $('<div class="modal-tab-content modal-tab--' + key + '"></div>');
          fieldsArea.append(content);
          customifyField.addFields(that.config[key + "_fields"], that.values[key], content, function () {
            that.get(_.clone(that.config));
          });
          var fv;
          if (_.isUndefined(that.values[key]) || _.isEmpty(that.values[key])) {
            fv = {};
            _.each(that.config[key + "_fields"], function (f) {
              fv[f.name] = _.isUndefined(f.default) ? null : f.default;
            });
          } else {
            fv = that.values[key];
          }
          customifyField.initConditional(content, fv);
        }
      });
      $("input, select, textarea", that.container).removeClass("customify-input").addClass("customify-modal-input change-by-js");
      fieldsArea.on("change data-change", "input, select, textarea", function () {
        that.get(_.clone(that.config));
      });
      that.container.on("click", ".modal--tab", function () {
        var id = $(this).attr("data-tab") || "";
        $(".modal--tabs .modal--tab", that.container).removeClass("tab--active");
        $(this).addClass("tab--active");
        $(".modal-tab-content", that.container).removeClass("tab--active");
        $(".modal-tab-content.modal-tab--" + id, that.container).addClass("tab--active");
      });
      $(".modal--tabs .modal--tab", that.container).eq(0).trigger("click");

      // Chrome'd modals float as a popover (visibility-driven CSS)
      // — an inline display:none from slideUp would keep the panel
      // invisible even with is-open set.
      if (!this.chrome) {
        this.container.slideUp(0);
      }
    },
    // ── Popover chrome (popover_chrome modals only) ────────────────
    // Same per-tab trigger rows as the styling control; the only
    // difference is where the field definitions live — the control's
    // own config instead of the resolved global styling_config.
    fieldsFor: function (key) {
      return this.config[key + "_fields"];
    },
    visibleTabs: function () {
      var that = this;
      that.config = _.defaults(that.config || {}, {
        tabs: {}
      });
      var out = [];
      _.each(that.config.tabs, function (label, key) {
        if (label && _.isObject(that.config[key + "_fields"]) && !_.isEmpty(that.config[key + "_fields"])) {
          out.push({
            key: key,
            label: label
          });
        }
      });
      return out;
    },
    ensurePanel: function () {
      var that = this;
      that.$el.addClass("customify-modal--inside");
      if (!$(".customify-modal-settings", that.$el).length) {
        var $wrap = $($("#tmpl-customify-modal-settings").html());
        that.container = $wrap;
        that.$el.append($wrap);
        that.addFields();
      } else {
        that.container = $(".customify-modal-settings", that.$el);
      }
    },
    selectTab: function (key) {
      var that = this;
      that.activeTab = key;
      $('.modal--tab[data-tab="' + key + '"]', that.container).trigger("click");
      $(".customify-styling-trigger", that.$el).removeClass("is-open").filter('[data-tab="' + key + '"]').addClass("is-open");
    },
    // Chrome counterpart of open(): popover anchored under the `tab`
    // trigger row — toggle on the open row, switch on a sibling row.
    openTab: function (tab) {
      var that = this;
      var isOpen = "opening" === that.$el.attr("data-opening");
      if (isOpen && tab === that.activeTab) {
        that.closePopover();
        return;
      }
      that.values = $(".customify-hidden-modal-input", that.$el).val();
      try {
        that.values = JSON.parse(that.values);
      } catch (e) {}
      that.ensurePanel();
      that.selectTab(tab);
      that.openPopover();
    },
    close: function () {
      var that = this;
      if (that.chrome) {
        that.closePopover();
        return;
      }
      that.container.slideUp(300, function () {
        that.$el.removeClass("modal--opening");
        that.$el.attr("data-opening", "");
        $(".action--reset", that.$el).hide();
      });
    },
    reset: function () {
      var that = this;
      if (that.chrome) {
        // Mirror the styling reset: rebuild from the default and
        // keep the popover open for continuity.
        var wasOpen = "opening" === that.$el.attr("data-opening");
        $(".customify-modal-settings", that.$el).remove();
        try {
          that.values = wpcustomize.control(that.controlID).params.default;
        } catch (e) {
          that.values = {};
        }
        that.ensurePanel();
        $(".customify-hidden-modal-input", that.$el).val(JSON.stringify(that.values)).trigger("change");
        if (wasOpen) {
          that.selectTab(that.activeTab);
          that.openPopover();
        }
        return;
      }
      $(".customify-modal-settings", that.$el).remove();
      try {
        var _default = wpcustomize.control(that.controlID).params.default;
        that.values = _default;
      } catch (e) {
        that.values = {};
      }
      if (!$(".customify-modal-settings", that.$el).length) {
        var $wrap = $($("#tmpl-customify-modal-settings").html());
        that.container = $wrap;
        this.$el.append($wrap);
        that.addFields();
      } else {
        that.container = $(".customify-modal-settings", that.$el);
      }
      that.$el.addClass("customify-modal--inside");
      that.$el.addClass("modal--opening");
      that.container.show(0);
      $(".customify-hidden-modal-input", that.$el).val(JSON.stringify(that.values)).trigger("change");
    },
    get: function (config) {
      var data = {};
      var that = this;
      that.config = config;
      _.each(that.config.tabs, function (label, key) {
        var subdata = {};
        var content = $(".modal-tab-content.modal-tab--" + key, that.container);
        if (_.isObject(that.config[key + "_fields"])) {
          _.each(that.config[key + "_fields"], function (f) {
            subdata[f.name] = customifyField.getValue(f, $('.customify--group-field[data-field-name="' + f.name + '"]', content));
          });
        }
        data[key] = subdata;
        customifyField.initConditional(content, subdata);
      });
      $(".customify-hidden-modal-input", this.$el).val(JSON.stringify(data)).trigger("change");
      return data;
    },
    open: function () {
      var that = this;
      var status = that.$el.attr("data-opening") || false;
      if (status !== "opening") {
        that.$el.attr("data-opening", "opening");
        that.values = $(".customify-hidden-modal-input", that.$el).val();
        try {
          that.values = JSON.parse(that.values);
        } catch (e) {}
        that.$el.addClass("customify-modal--inside");
        if (!$(".customify-modal-settings", that.$el).length) {
          var $wrap = $($("#tmpl-customify-modal-settings").html());
          $wrap.hide();
          that.container = $wrap;
          that.$el.append($wrap);
          that.addFields();
        } else {
          that.container = $(".customify-modal-settings", that.$el);
        }
        this.container.slideDown(300);
        this.$el.addClass("modal--opening");
        $(".action--reset", this.$el).show();
      } else {
        this.container.slideUp(300, function () {
          that.$el.attr("data-opening", "");
          $(".customify-modal-settings", that.$el).hide();
          that.$el.removeClass("modal--opening");
          $(".action--reset", that.$el).hide();
        });
      }
    }
  };

  // Popover lifecycle for popover_chrome modals — same shared chrome as
  // styling/typography (one popover at a time across all three). The
  // methods are inert for legacy modals: only openTab()/the chrome
  // branches ever call them.
  attachPopoverChrome(customifyModal, {
    $: $,
    anchor: function (that) {
      return $('.customify-styling-trigger[data-tab="' + that.activeTab + '"]', that.$el);
    },
    onClose: function (that) {
      $(".customify-styling-trigger", that.$el).removeClass("is-open");
    }
  });
  var initModalControls = {};

  // Create (or fetch) the runtime for a modal control li. Mirrors the
  // legacy lazy click-init, but also runs at batch-init time so
  // chrome'd controls paint their trigger rows before any interaction.
  var modalRuntime = function ($el) {
    var controlID = ($el.attr("id") || "").replace(/^customize-control-/, "");
    if (!controlID) {
      return null;
    }
    if (!_.isUndefined(initModalControls[controlID])) {
      return initModalControls[controlID];
    }
    var c = wpcustomize.control(controlID);
    if (_.isUndefined(c)) {
      return null;
    }
    var m = _.clone(customifyModal);
    m.config = c.params.fields;
    m.chrome = !!c.params.popover_chrome;
    m.$el = $el;
    m.controlID = controlID;
    if (m.chrome) {
      // Scope hook for the popover/trigger CSS — keeps legacy
      // modals (no flag, accordion) out of the chrome styles.
      $el.addClass("customify-popover-chrome");
    }
    initModalControls[controlID] = m;
    return m;
  };
  var initModal = function () {
    // Legacy pencil / header toggle — chrome'd controls render no
    // .action--edit, so this only ever fires for accordion modals.
    $document.on("click", ".customize-control-customify-modal .action--edit, .customize-control-customify-modal .customify-control-field-header", function (e) {
      e.preventDefault();
      var m = modalRuntime($(this).closest(".customize-control-customify-modal").eq(0));
      if (m && !m.chrome) {
        m.open();
      }
    });
    $document.on("click", ".customize-control-customify-modal .action--reset", function (e) {
      e.preventDefault();
      var m = modalRuntime($(this).closest(".customize-control-customify-modal").eq(0));
      if (m) {
        m.reset();
      }
    });

    // Chrome trigger rows: open that row's tab in the popover.
    $document.on("click", ".customize-control-customify-modal .customify-styling-trigger", function (e) {
      e.preventDefault();
      var m = modalRuntime($(this).closest(".customize-control-customify-modal").eq(0));
      if (m && m.chrome) {
        m.openTab($(this).attr("data-tab") || "");
      }
    });

    // Repaint chrome'd rows on every value round-trip.
    $document.on("change data-change", ".customize-control-customify-modal .customify-hidden-modal-input", function () {
      var m = modalRuntime($(this).closest(".customize-control-customify-modal").eq(0));
      if (m && m.chrome) {
        ensureStylingRows(m);
        paintStylingRows(m);
      }
    });

    // External setting write → the field DOM (trigger rows included)
    // was re-rendered and the parked panel is stale — drop it so the
    // next open rebuilds from the fresh value.
    $document.on("customify/control/refreshed", ".customize-control-customify-modal", function () {
      var m = modalRuntime($(this));
      if (!m || !m.chrome) {
        return;
      }
      if ("opening" === m.$el.attr("data-opening")) {
        m.closePopover();
      }
      $(".customify-modal-settings", m.$el).remove();
      m.container = null;
      m.$el.addClass("customify-popover-chrome");
      ensureStylingRows(m);
      paintStylingRows(m);
    });

    // First paint for chrome'd modals — controls are batch-initialized
    // at document.ready before initModal() runs.
    $(".customize-control-customify-modal").each(function () {
      var m = modalRuntime($(this));
      if (m && m.chrome) {
        ensureStylingRows(m);
        paintStylingRows(m);
      }
    });
  };

  //---------------------------------------------------------------------------
  var customifyStyling = {
    tabs: {
      normal: "Normal",
      hover: "Hover"
    },
    fields: {},
    normal_fields: {},
    hover_fields: {},
    controlID: "",
    $el: "",
    contailner: "",
    activeTab: "",
    setupFields: function (fields, list) {
      var newfs;
      var i;
      var newList = [];
      if (fields === -1) {
        newList = list;
      } else if (fields === false) {
        newList = null;
      } else {
        if (_.isObject(fields)) {
          newfs = {};
          i = 0;
          _.each(list, function (f) {
            if (_.isUndefined(fields[f.name]) || fields[f.name]) {
              newfs[i] = f;
              i++;
            }
          });
          newList = newfs;
        }
      }
      return newList;
    },
    setupConfig: function (tabs, normal_fields, hover_fields) {
      var that = this;
      that.tabs = {};
      that.normal_fields = {};
      that.hover_fields = {};
      that.tabs = _.clone(Customify_Control_Args.styling_config.tabs);
      if (tabs === false) {
        that.tabs["hover"] = false;
      } else if (_.isObject(tabs)) {
        that.tabs = tabs;
      }
      that.normal_fields = that.setupFields(normal_fields, Customify_Control_Args.styling_config.normal_fields);
      that.hover_fields = that.setupFields(hover_fields, Customify_Control_Args.styling_config.hover_fields);
    },
    addFields: function (values) {
      var that = this;
      if (!_.isObject(that.values)) {
        that.values = {};
      }
      that.values = _.defaults(that.values, {
        hover: {},
        normal: {}
      });
      var fieldsArea = $(".customify-modal-settings--fields", that.container);
      fieldsArea.html("");
      var tabsHTML = $('<div class="modal--tabs"></div>');
      var c = 0;
      _.each(that.tabs, function (label, key) {
        if (label && !_.isEmpty(that[key + "_fields"])) {
          c++;
          tabsHTML.append('<div><span data-tab="' + key + '" class="modal--tab modal-tab--' + key + '">' + label + "</span></div>");
        }
      });
      fieldsArea.append(tabsHTML);
      if (c <= 1) {
        tabsHTML.addClass("customify--hide");
      }
      customifyField.devices = Customify_Control_Args.devices;
      _.each(that.tabs, function (label, key) {
        if (_.isObject(that[key + "_fields"]) && !_.isEmpty(key + "_fields")) {
          var content = $('<div class="modal-tab-content modal-tab--' + key + '"></div>');
          fieldsArea.append(content);
          customifyField.addFields(that[key + "_fields"], that.values[key], content, function () {
            that.get();
          });
          customifyField.initConditional(content, that.values[key]);
        }
      });
      $("input, select, textarea", that.container).removeClass("customify-input").addClass("customify-modal-input change-by-js");
      fieldsArea.on("change data-change", "input, select, textarea", function () {
        that.get();
      });
      that.container.on("click", ".modal--tab", function () {
        var id = $(this).attr("data-tab") || "";
        $(".modal--tabs .modal--tab", that.container).removeClass("tab--active");
        $(this).addClass("tab--active");
        $(".modal-tab-content", that.container).removeClass("tab--active");
        $(".modal-tab-content.modal-tab--" + id, that.container).addClass("tab--active");
      });
      $(".modal--tabs .modal--tab", that.container).eq(0).trigger("click");
    },
    // Tabs that actually render: label truthy (false/null disables
    // the tab) and a non-empty resolved field list — mirrors the
    // addFields() loop, so trigger rows and tab contents always
    // agree.
    visibleTabs: function () {
      var that = this;
      var out = [];
      _.each(that.tabs, function (label, key) {
        if (label && !_.isEmpty(that[key + "_fields"])) {
          out.push({
            key: key,
            label: label
          });
        }
      });
      return out;
    },
    // Resolved field list for a tab — the styling type resolves
    // against the global styling_config in setupConfig().
    fieldsFor: function (key) {
      return this[key + "_fields"];
    },
    // Build the floating panel once (lazily, exactly like the legacy
    // accordion did on first open) or re-acquire it after a rebuild.
    ensurePanel: function () {
      var that = this;
      that.$el.addClass("customify-modal--inside");
      if (!$(".customify-modal-settings", that.$el).length) {
        var $wrap = $($("#tmpl-customify-modal-settings").html());
        that.container = $wrap;
        that.$el.append($wrap);
        that.addFields();
      } else {
        that.container = $(".customify-modal-settings", that.$el);
      }
    },
    // Show one tab's fields inside the popover. The legacy tab bar is
    // still built (hidden by CSS under the trigger chrome) —
    // re-triggering its click handler keeps the tab--active
    // bookkeeping, and with it get(), untouched.
    selectTab: function (key) {
      var that = this;
      that.activeTab = key;
      $('.modal--tab[data-tab="' + key + '"]', that.container).trigger("click");
      $(".customify-styling-trigger", that.$el).removeClass("is-open").filter('[data-tab="' + key + '"]').addClass("is-open");
    },
    close: function () {
      this.closePopover();
    },
    reset: function () {
      var that = this;

      // Reset is only reachable while the popover is open (the
      // button is hidden otherwise) — rebuilding removes the panel,
      // so re-open it afterwards for continuity.
      var wasOpen = "opening" === that.$el.attr("data-opening");
      $(".customify-modal-settings", that.$el).remove();
      try {
        var _default = wpcustomize.control(that.controlID).params.default;
        that.values = _default;
      } catch (e) {
        that.values = {};
      }
      that.ensurePanel();
      $(".customify-hidden-modal-input", that.$el).val(JSON.stringify(that.values)).trigger("change");
      if (wasOpen) {
        that.selectTab(that.activeTab);
        that.openPopover();
      }
    },
    get: function () {
      var data = {};
      var that = this;
      _.each(that.tabs, function (label, key) {
        var subdata = {};
        var content = $(".modal-tab-content.modal-tab--" + key, that.container);
        if (_.isObject(that[key + "_fields"])) {
          _.each(that[key + "_fields"], function (f) {
            subdata[f.name] = customifyField.getValue(f, $('.customify--group-field[data-field-name="' + f.name + '"]', content));
          });
        }
        data[key] = subdata;
        customifyField.initConditional(content, subdata);
      });
      $(".customify-hidden-modal-input", this.$el).val(JSON.stringify(data)).trigger("change");
      return data;
    },
    // Open the popover anchored under the `tab` trigger row — or
    // close it when that row's popover is already open (the trigger
    // is a toggle). Clicking a sibling row while open just switches
    // the visible tab and re-anchors; the panel itself stays open.
    open: function (tab) {
      var that = this;
      var isOpen = "opening" === that.$el.attr("data-opening");
      if (isOpen && tab === that.activeTab) {
        that.closePopover();
        return;
      }
      that.values = $(".customify-hidden-modal-input", that.$el).val();
      try {
        that.values = JSON.parse(that.values);
      } catch (e) {}
      that.ensurePanel();
      that.selectTab(tab);
      that.openPopover();
    }
  };

  // Popover lifecycle from the shared chrome (one popover at a time
  // across styling AND typography controls). Attached to the base
  // object so the per-control clones made in stylingRuntime() inherit
  // the methods.
  attachPopoverChrome(customifyStyling, {
    $: $,
    anchor: function (that) {
      return $('.customify-styling-trigger[data-tab="' + that.activeTab + '"]', that.$el);
    },
    onClose: function (that) {
      $(".customify-styling-trigger", that.$el).removeClass("is-open");
    }
  });

  // ── Styling trigger rows ───────────────────────────────────────────
  // One select-like trigger row per visible tab (Normal / Hover / …);
  // each row previews that tab's saved colors as swatches plus a
  // one-word tail for non-color edits. Chrome only: rows read the
  // hidden input JSON the runtime already round-trips — value plumbing
  // (get()/storage shape) is untouched.

  // Fixed swatch order; color fields added by the styling_config filter
  // keep their config order after these.
  var STYLING_SWATCH_ORDER = ["text_color", "link_color", "bg_color", "border_color"];

  // First name with a saved value wins — the tail is a single word.
  var STYLING_TAIL_WORDS = [["padding", "padding"], ["margin", "margin"], ["border_style", "border"], ["border_width", "border"], ["border_radius", "radius"], ["box_shadow", "shadow"], ["bg_image", "image"], ["bg_cover", "image"], ["bg_position", "image"], ["bg_repeat", "image"], ["bg_attachment", "image"]];

  // Does a saved sub-value hold anything the user actually set? Wrapper
  // keys that exist even on untouched fields (css_ruler's
  // `unit`/`link`, shadow's `inset`, media's `id`/`mime`) are skipped
  // so an empty ruler ({unit:'px', top:'', …}) doesn't count as set.
  var stylingHasValue = function (v) {
    if (v === null || _.isUndefined(v) || false === v) {
      return false;
    }
    if (true === v) {
      return true;
    }
    if (_.isNumber(v)) {
      return true;
    }
    if (_.isString(v)) {
      return $.trim(v) !== "";
    }
    if (_.isObject(v)) {
      var found = false;
      _.each(v, function (sub, key) {
        if (found || "unit" === key || "link" === key || "inset" === key || "id" === key || "mime" === key) {
          return;
        }
        found = stylingHasValue(sub);
      });
      return found;
    }
    return false;
  };

  // One tab's preview model: { swatches: [{color, title, ring}], meta,
  // isDefault }.
  var stylingTabPreview = function (runtime, key, values, singleTab) {
    var sub = _.isObject(values) && _.isObject(values[key]) ? values[key] : {};

    // A field only counts when its `required` condition passes against
    // the tab's current values — a value left behind by a gated-off
    // field (e.g. border_color after border_style went back to
    // Default) stays in the JSON but has no effect, so it must not
    // show in the preview either.
    var effective = function (f) {
      if (_.isUndefined(f.required) || _.isEmpty(f.required)) {
        return true;
      }
      try {
        return customifyField.multiple_compare(f.required, sub, false);
      } catch (e) {
        return true;
      }
    };
    var colors = [];
    var others = [];
    _.each(runtime.fieldsFor(key), function (f) {
      if (!_.isObject(f) || "heading" === f.type || !effective(f)) {
        return;
      }
      if ("color" === f.type) {
        colors.push(f);
      } else {
        others.push(f);
      }
    });
    colors.sort(function (a, b) {
      var ra = _.indexOf(STYLING_SWATCH_ORDER, a.name);
      var rb = _.indexOf(STYLING_SWATCH_ORDER, b.name);
      return (ra === -1 ? STYLING_SWATCH_ORDER.length : ra) - (rb === -1 ? STYLING_SWATCH_ORDER.length : rb);
    });
    var swatches = [];
    _.each(colors, function (f) {
      var v = sub[f.name];
      if (_.isString(v) && $.trim(v) !== "" && swatches.length < 4) {
        swatches.push({
          color: v,
          title: (f.label || f.name) + ": " + v,
          ring: String(f.name).indexOf("border") !== -1
        });
      }
    });
    var meta = "";
    var isDefault = false;

    // Single-tab, single-color controls (the Colors-section
    // backgrounds) echo the picked value next to their swatch.
    if (singleTab && 1 === colors.length && 1 === swatches.length) {
      meta = swatches[0].color;
    }
    if (!meta) {
      _.each(STYLING_TAIL_WORDS, function (pair) {
        if (meta) {
          return;
        }
        var f = _.find(others, function (o) {
          return o.name === pair[0];
        });
        if (f && stylingHasValue(sub[f.name])) {
          meta = "+ " + pair[1];
        }
      });
    }
    if (!meta) {
      // Unknown fields (added via the styling_config filter): fall
      // back to the field's own label.
      var known = _.map(STYLING_TAIL_WORDS, function (p) {
        return p[0];
      });
      _.each(others, function (f) {
        if (meta || _.indexOf(known, f.name) !== -1) {
          return;
        }
        if (stylingHasValue(sub[f.name])) {
          meta = "+ " + String(f.label || f.name).toLowerCase();
        }
      });
    }
    if (!swatches.length && !meta) {
      meta = Customify_Control_Args.default_label || "Default";
      isDefault = true;
    }
    return {
      swatches: swatches,
      meta: meta,
      isDefault: isDefault
    };
  };

  // Skeleton rows are built once per control; repaints only swap the
  // preview/meta contents so focus and the is-open state survive.
  var ensureStylingRows = function (runtime) {
    var $wrap = $(".customify-styling-triggers", runtime.$el);
    if (!$wrap.length || $wrap.children().length) {
      return;
    }
    var tabs = runtime.visibleTabs();
    var single = 1 === tabs.length;
    _.each(tabs, function (t) {
      var $row = $('<a href="#" class="customify-styling-trigger"></a>').attr("data-tab", t.key);
      // Single-tab controls render a label-less row (the control
      // title right above already names it); `_` is the explicit
      // no-label sentinel some configs use.
      if (!single && "_" !== t.label) {
        $row.append($('<span class="customify-trigger--label"></span>').text(t.label));
      }
      $row.append('<span class="customify-trigger--preview"></span>');
      $row.append('<span class="customify-trigger--meta"></span>');
      if (single || "_" === t.label) {
        $row.append('<span class="customify-trigger--spacer"></span>');
      }
      $row.append('<span class="customify-trigger--arrow dashicons dashicons-arrow-down-alt2"></span>');
      $wrap.append($row);
    });
  };
  var paintStylingRows = function (runtime) {
    var $wrap = $(".customify-styling-triggers", runtime.$el);
    if (!$wrap.length) {
      return;
    }
    var values = {};
    try {
      values = JSON.parse($(".customify-hidden-modal-input", runtime.$el).val() || "");
    } catch (e) {}
    var tabs = runtime.visibleTabs();
    var single = 1 === tabs.length;
    _.each(tabs, function (t) {
      var $row = $('.customify-styling-trigger[data-tab="' + t.key + '"]', $wrap);
      if (!$row.length) {
        return;
      }
      var view = stylingTabPreview(runtime, t.key, values, single);
      var $preview = $(".customify-trigger--preview", $row).empty();
      _.each(view.swatches, function (s) {
        var $sw = $('<span class="customify-trigger--swatch"><i></i></span>').attr("title", s.title);
        if (s.ring) {
          // Border colors render as a ring so they don't read
          // as a fill; the inset shadow carries the color.
          $sw.addClass("is-ring");
          $("i", $sw).css("box-shadow", "inset 0 0 0 3px " + s.color);
        } else {
          $("i", $sw).css("background-color", s.color);
        }
        $preview.append($sw);
      });
      $(".customify-trigger--meta", $row).text(view.meta).toggleClass("is-default", view.isDefault);
    });
  };
  var initStylingControls = {};
  // Create (or fetch) the runtime for a styling control li. Mirrors the
  // legacy lazy click-init, but also runs at batch-init time so the
  // trigger rows can paint before any interaction.
  var stylingRuntime = function ($el) {
    var controlID = ($el.attr("id") || "").replace(/^customize-control-/, "");
    if (!controlID) {
      return null;
    }
    if (!_.isUndefined(initStylingControls[controlID])) {
      return initStylingControls[controlID];
    }
    var c = wpcustomize.control(controlID);
    if (_.isUndefined(c)) {
      return null;
    }
    var s = _.clone(customifyStyling);
    var tabs = null,
      normal_fields = -1,
      hover_fields = -1;
    if (!_.isUndefined(c.params.fields) && _.isObject(c.params.fields)) {
      if (!_.isUndefined(c.params.fields.tabs)) {
        tabs = c.params.fields.tabs;
      }
      if (!_.isUndefined(c.params.fields.normal_fields)) {
        normal_fields = c.params.fields.normal_fields;
      }
      if (!_.isUndefined(c.params.fields.hover_fields)) {
        hover_fields = c.params.fields.hover_fields;
      }
    }
    s.$el = $el;
    s.setupConfig(tabs, normal_fields, hover_fields);
    s.controlID = controlID;
    initStylingControls[controlID] = s;
    return s;
  };
  var initStyling = function () {
    // Trigger rows: open that row's tab in the floating popover.
    $document.on("click", ".customize-control-customify-styling .customify-styling-trigger", function (e) {
      e.preventDefault();
      var s = stylingRuntime($(this).closest(".customize-control-customify-styling").eq(0));
      if (s) {
        s.open($(this).attr("data-tab") || "");
      }
    });

    // Reset keeps its legacy delegated binding (the button is only
    // visible while the popover is open).
    $document.on("click", ".customize-control-customify-styling .action--reset", function (e) {
      e.preventDefault();
      var s = stylingRuntime($(this).closest(".customize-control-customify-styling").eq(0));
      if (s) {
        s.reset();
      }
    });

    // Every value write round-trips through the hidden input —
    // repaint the row previews there.
    $document.on("change data-change", ".customize-control-customify-styling .customify-hidden-modal-input", function () {
      var s = stylingRuntime($(this).closest(".customize-control-customify-styling").eq(0));
      if (s) {
        ensureStylingRows(s);
        paintStylingRows(s);
      }
    });

    // External setting write → refreshFromSetting() re-rendered the
    // field DOM (trigger rows included) and the hidden input now
    // holds the new value; the floating panel (parked on the li,
    // outside the re-rendered area) is stale — drop it so the next
    // open rebuilds from the fresh value.
    $document.on("customify/control/refreshed", ".customize-control-customify-styling", function () {
      var s = stylingRuntime($(this));
      if (!s) {
        return;
      }
      if ("opening" === s.$el.attr("data-opening")) {
        s.closePopover();
      }
      $(".customify-modal-settings", s.$el).remove();
      s.container = null;
      ensureStylingRows(s);
      paintStylingRows(s);
    });

    // First paint — controls are batch-initialized at document.ready
    // before initStyling() runs, so every styling control's hidden
    // input + trigger wrap exist by now.
    $(".customize-control-customify-styling").each(function () {
      var s = stylingRuntime($(this));
      if (s) {
        ensureStylingRows(s);
        paintStylingRows(s);
      }
    });
  };

  //---------------------------------------------------------------------------

  wpcustomize.bind("ready", function (e, b) {
    $document.on("customify/customizer/device/change", function (e, device) {
      $(".customify--device-select a").removeClass("customify--active");
      if (device != "mobile") {
        $(".customify--device-mobile").addClass("customify--hide");
        $(".customify--device-general").removeClass("customify--hide");
        $(".customify--tab-device-general").addClass("customify--active");
      } else {
        $(".customify--device-general").addClass("customify--hide");
        $(".customify--device-mobile").removeClass("customify--hide");
        $(".customify--tab-device-mobile").addClass("customify--active");
      }
    });
    $document.on("click", ".customify--tab-device-mobile", function (e) {
      e.preventDefault();
      $document.trigger("customify/customizer/device/change", ["mobile"]);
    });
    $document.on("click", ".customify--tab-device-general", function (e) {
      e.preventDefault();
      $document.trigger("customify/customizer/device/change", ["general"]);
    });
    $(".accordion-section").each(function () {
      var s = $(this);
      var t = $(".customify--device-select", s).first();
      $(".customize-section-title", s).append(t);
    });

    // Devices Switcher
    $document.on("click", ".customify-devices button", function (e) {
      e.preventDefault();
      var device = $(this).attr("data-device") || "";
      //console.log('Device', device);
      $('#customize-footer-actions .devices button[data-device="' + device + '"]').trigger("click");
    });

    // Devices Switcher
    $document.on("change", ".customify--field input:checkbox", function (e) {
      if ($(this).is(":checked")) {
        $(this).parent().addClass("customify--checked");
      } else {
        $(this).parent().removeClass("customify--checked");
      }
    });

    // Setup conditional
    var ControlConditional = function (decodeValue) {
      if (_.isUndefined(decodeValue)) {
        decodeValue = false;
      }
      var allValues = wpcustomize.get();
      // console.log( 'ALL Control Values', allValues );
      _.each(allValues, function (value, id) {
        var control = wpcustomize.control(id);
        if (!_.isUndefined(control)) {
          if (control.params.type == "customify") {
            if (!_.isEmpty(control.params.required)) {
              var check = false;
              check = control.multiple_compare(control.params.required, allValues, decodeValue);
              if (!check) {
                control.container.addClass("customify--hide");
              } else {
                control.container.removeClass("customify--hide");
              }
            }
          }
        }
      });
    };
    $document.ready(function () {
      _.each(customify_controls_list, function (c, k) {
        new customify_control(c);
      });
      ControlConditional(false);
      $document.on("customify/customizer/value_changed", function () {
        ControlConditional(true);
      });
      IconPicker.init();
      FontSelector.init();
      initStyling();
      initModal();
      intTypos();
      typoPresets.init();
      // Expose helpers used by React-based controls (e.g. Column Settings)
      // to drive the jQuery slider + css_ruler renderers.
      window.customifyField = customifyField;
      observeAndMount();
    });

    // Add reset button to sections
    wpcustomize.section.each(function (section) {
      if (section.params.type == "section" || section.params.type == "customify_section") {
        section.container.find(".customize-section-description-container .customize-section-title").append('<button data-section="' + section.id + '" type="button" title="' + Customify_Control_Args.reset + '" class="customize--reset-section" aria-expanded="false"><span class="screen-reader-text">' + Customify_Control_Args.reset + "</span></button>");
      }
    });

    // Remove checked align
    $document.on("dblclick", ".customify-text-align label", function (e) {
      var input = $(this).find('input[type="radio"]');
      if (input.length) {
        if (input.is(":checked")) {
          input.removeAttr("checked");
          input.trigger("data-change");
        }
      }
    });
    $document.on("click", ".customize--reset-section", function (e) {
      e.preventDefault();
      if ($(this).hasClass("loading")) {
        return;
      }
      if (!confirm(Customify_Control_Args.confirm_reset)) {
        return;
      }
      $(this).addClass("loading");
      var section = $(this).attr("data-section") || "";
      var urlParser = _.clone(window.location);
      if (section) {
        var setting_keys = [];
        var controls = wp.customize.section(section).controls();
        _.each(controls, function (c, index) {
          wpcustomize(c.id).set("");
          setting_keys[index] = c.id;
        });
        $.post(ajaxurl, {
          action: "customify__reset_section",
          section: section,
          settings: setting_keys,
          nonce: Customify_Control_Args.nonce
        }, function () {
          $(window).off("beforeunload.customize-confirm");
          top.location.href = urlParser.origin + urlParser.pathname + "?autofocus[section]=" + section + "&url=" + encodeURIComponent(wpcustomize.previewer.previewUrl.get());
        });
      }
    });

    /**
     * Image Select disable click
     */
    $document.on("click", ".customify-radio-list p", function (e) {
      var id = $(this).find("input").attr("data-name") || false;
      var disabled = $(this).hasClass("input-disabled");
      if (id) {
        var setting = wp.customize(id);
        var control = wp.customize.control(id);
        var code = "noti_" + id;
        var msg = "";
        if (control.params._pro && control.params.disabled_pro_msg) {
          msg = control.params.disabled_pro_msg;
        } else if (control.params.disabled_msg) {
          msg = control.params.disabled_msg;
        }
        if (msg) {
          if (disabled) {
            setting.notifications.add(code, new wp.customize.Notification(code, {
              type: "warning",
              message: msg
            }));
          } else {
            setting.notifications.remove(code);
          }
        }
      }
    });

    /**
     * When panel open
     */
    _.each(Customify_Control_Args.panel_urls, function (url, id) {
      if (url) {
        wp.customize.panel(id, function (panel) {
          panel.expanded.bind(function (isExpanded) {
            if (isExpanded) {
              wp.customize.previewer.previewUrl.set(url);
            }
          });
        });
      }
    });
    _.each(Customify_Control_Args.section_urls, function (url, id) {
      if (url) {
        wp.customize.section(id, function (section) {
          section.expanded.bind(function (isExpanded) {
            if (isExpanded) {
              wp.customize.previewer.previewUrl.set(url);
            }
          });
        });
      }
    });
  }); // end customize ready
})(jQuery, wp.customize || null);
/******/ })()
;