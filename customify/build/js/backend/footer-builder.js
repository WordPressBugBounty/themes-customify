/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 252:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


;// external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// external ["wp","components"]
var external_wp_components_namespaceObject = window["wp"]["components"];
;// external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// external ["wp","primitives"]
var external_wp_primitives_namespaceObject = window["wp"]["primitives"];
;// external "ReactJSXRuntime"
var external_ReactJSXRuntime_namespaceObject = window["ReactJSXRuntime"];
;// ./node_modules/@wordpress/icons/build-module/library/settings.mjs
// packages/icons/src/library/settings.tsx


var settings_default = /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_primitives_namespaceObject.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, { d: "m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z" }),
  /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, { d: "m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z" })
] });

//# sourceMappingURL=settings.mjs.map

;// ./node_modules/@wordpress/icons/build-module/library/close.mjs
// packages/icons/src/library/close.tsx


var close_default = /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, { d: "m13.06 12 6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z" }) });

//# sourceMappingURL=close.mjs.map

;// ./node_modules/@wordpress/icons/build-module/library/drag-handle.mjs
// packages/icons/src/library/drag-handle.tsx


var drag_handle_default = /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, { d: "M8 7h2V5H8v2zm0 6h2v-2H8v2zm0 6h2v-2H8v2zm6-14v2h2V5h-2zm0 8h2v-2h-2v2zm0 6h2v-2h-2v2z" }) });

//# sourceMappingURL=drag-handle.mjs.map

;// ./node_modules/@wordpress/icons/build-module/library/plus.mjs
// packages/icons/src/library/plus.tsx


var plus_default = /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, { d: "M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" }) });

//# sourceMappingURL=plus.mjs.map

;// external "React"
var external_React_namespaceObject = window["React"];
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_namespaceObject);
;// external "ReactDOM"
var external_ReactDOM_namespaceObject = window["ReactDOM"];
;// ./node_modules/@dnd-kit/utilities/dist/utilities.esm.js


function useCombinedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return (0,external_React_namespaceObject.useMemo)(() => node => {
    refs.forEach(ref => ref(node));
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  refs);
}

// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const canUseDOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';

function isWindow(element) {
  const elementString = Object.prototype.toString.call(element);
  return elementString === '[object Window]' || // In Electron context the Window object serializes to [object global]
  elementString === '[object global]';
}

function isNode(node) {
  return 'nodeType' in node;
}

function getWindow(target) {
  var _target$ownerDocument, _target$ownerDocument2;

  if (!target) {
    return window;
  }

  if (isWindow(target)) {
    return target;
  }

  if (!isNode(target)) {
    return window;
  }

  return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
}

function isDocument(node) {
  const {
    Document
  } = getWindow(node);
  return node instanceof Document;
}

function isHTMLElement(node) {
  if (isWindow(node)) {
    return false;
  }

  return node instanceof getWindow(node).HTMLElement;
}

function isSVGElement(node) {
  return node instanceof getWindow(node).SVGElement;
}

function getOwnerDocument(target) {
  if (!target) {
    return document;
  }

  if (isWindow(target)) {
    return target.document;
  }

  if (!isNode(target)) {
    return document;
  }

  if (isDocument(target)) {
    return target;
  }

  if (isHTMLElement(target) || isSVGElement(target)) {
    return target.ownerDocument;
  }

  return document;
}

/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 * @param callback {function} Callback function that is invoked when the dependencies of the hook change
 */

const useIsomorphicLayoutEffect = canUseDOM ? external_React_namespaceObject.useLayoutEffect : external_React_namespaceObject.useEffect;

function useEvent(handler) {
  const handlerRef = (0,external_React_namespaceObject.useRef)(handler);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });
  return (0,external_React_namespaceObject.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return handlerRef.current == null ? void 0 : handlerRef.current(...args);
  }, []);
}

function useInterval() {
  const intervalRef = (0,external_React_namespaceObject.useRef)(null);
  const set = (0,external_React_namespaceObject.useCallback)((listener, duration) => {
    intervalRef.current = setInterval(listener, duration);
  }, []);
  const clear = (0,external_React_namespaceObject.useCallback)(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  return [set, clear];
}

function useLatestValue(value, dependencies) {
  if (dependencies === void 0) {
    dependencies = [value];
  }

  const valueRef = (0,external_React_namespaceObject.useRef)(value);
  useIsomorphicLayoutEffect(() => {
    if (valueRef.current !== value) {
      valueRef.current = value;
    }
  }, dependencies);
  return valueRef;
}

function useLazyMemo(callback, dependencies) {
  const valueRef = (0,external_React_namespaceObject.useRef)();
  return (0,external_React_namespaceObject.useMemo)(() => {
    const newValue = callback(valueRef.current);
    valueRef.current = newValue;
    return newValue;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [...dependencies]);
}

function useNodeRef(onChange) {
  const onChangeHandler = useEvent(onChange);
  const node = (0,external_React_namespaceObject.useRef)(null);
  const setNodeRef = (0,external_React_namespaceObject.useCallback)(element => {
    if (element !== node.current) {
      onChangeHandler == null ? void 0 : onChangeHandler(element, node.current);
    }

    node.current = element;
  }, //eslint-disable-next-line
  []);
  return [node, setNodeRef];
}

function usePrevious(value) {
  const ref = (0,external_React_namespaceObject.useRef)();
  (0,external_React_namespaceObject.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

let ids = {};
function useUniqueId(prefix, value) {
  return (0,external_React_namespaceObject.useMemo)(() => {
    if (value) {
      return value;
    }

    const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
    ids[prefix] = id;
    return prefix + "-" + id;
  }, [prefix, value]);
}

function createAdjustmentFn(modifier) {
  return function (object) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }

    return adjustments.reduce((accumulator, adjustment) => {
      const entries = Object.entries(adjustment);

      for (const [key, valueAdjustment] of entries) {
        const value = accumulator[key];

        if (value != null) {
          accumulator[key] = value + modifier * valueAdjustment;
        }
      }

      return accumulator;
    }, { ...object
    });
  };
}

const add = /*#__PURE__*/createAdjustmentFn(1);
const subtract = /*#__PURE__*/createAdjustmentFn(-1);

function hasViewportRelativeCoordinates(event) {
  return 'clientX' in event && 'clientY' in event;
}

function isKeyboardEvent(event) {
  if (!event) {
    return false;
  }

  const {
    KeyboardEvent
  } = getWindow(event.target);
  return KeyboardEvent && event instanceof KeyboardEvent;
}

function isTouchEvent(event) {
  if (!event) {
    return false;
  }

  const {
    TouchEvent
  } = getWindow(event.target);
  return TouchEvent && event instanceof TouchEvent;
}

/**
 * Returns the normalized x and y coordinates for mouse and touch events.
 */

function getEventCoordinates(event) {
  if (isTouchEvent(event)) {
    if (event.touches && event.touches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.touches[0];
      return {
        x,
        y
      };
    } else if (event.changedTouches && event.changedTouches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.changedTouches[0];
      return {
        x,
        y
      };
    }
  }

  if (hasViewportRelativeCoordinates(event)) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }

  return null;
}

const CSS = /*#__PURE__*/Object.freeze({
  Translate: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        x,
        y
      } = transform;
      return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
    }

  },
  Scale: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        scaleX,
        scaleY
      } = transform;
      return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    }

  },
  Transform: {
    toString(transform) {
      if (!transform) {
        return;
      }

      return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(' ');
    }

  },
  Transition: {
    toString(_ref) {
      let {
        property,
        duration,
        easing
      } = _ref;
      return property + " " + duration + "ms " + easing;
    }

  }
});

const SELECTOR = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
function findFirstFocusableNode(element) {
  if (element.matches(SELECTOR)) {
    return element;
  }

  return element.querySelector(SELECTOR);
}


//# sourceMappingURL=utilities.esm.js.map

;// ./node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js


const hiddenStyles = {
  display: 'none'
};
function HiddenText(_ref) {
  let {
    id,
    value
  } = _ref;
  return external_React_default().createElement("div", {
    id: id,
    style: hiddenStyles
  }, value);
}

function LiveRegion(_ref) {
  let {
    id,
    announcement,
    ariaLiveType = "assertive"
  } = _ref;
  // Hide element visually but keep it readable by screen readers
  const visuallyHidden = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(100%)',
    whiteSpace: 'nowrap'
  };
  return external_React_default().createElement("div", {
    id: id,
    style: visuallyHidden,
    role: "status",
    "aria-live": ariaLiveType,
    "aria-atomic": true
  }, announcement);
}

function useAnnouncement() {
  const [announcement, setAnnouncement] = (0,external_React_namespaceObject.useState)('');
  const announce = (0,external_React_namespaceObject.useCallback)(value => {
    if (value != null) {
      setAnnouncement(value);
    }
  }, []);
  return {
    announce,
    announcement
  };
}


//# sourceMappingURL=accessibility.esm.js.map

;// ./node_modules/@dnd-kit/core/dist/core.esm.js
/* unused harmony import specifier */ var useState;
/* unused harmony import specifier */ var React;
/* unused harmony import specifier */ var cloneElement;
/* unused harmony import specifier */ var forwardRef;
/* unused harmony import specifier */ var useMemo;
/* unused harmony import specifier */ var useContext;
/* unused harmony import specifier */ var core_esm_getEventCoordinates;
/* unused harmony import specifier */ var core_esm_usePrevious;
/* unused harmony import specifier */ var core_esm_useIsomorphicLayoutEffect;
/* unused harmony import specifier */ var core_esm_isKeyboardEvent;
/* unused harmony import specifier */ var core_esm_CSS;
/* unused harmony import specifier */ var core_esm_useEvent;
/* unused harmony import specifier */ var core_esm_getWindow;





const DndMonitorContext = /*#__PURE__*/(0,external_React_namespaceObject.createContext)(null);

function useDndMonitor(listener) {
  const registerListener = (0,external_React_namespaceObject.useContext)(DndMonitorContext);
  (0,external_React_namespaceObject.useEffect)(() => {
    if (!registerListener) {
      throw new Error('useDndMonitor must be used within a children of <DndContext>');
    }

    const unsubscribe = registerListener(listener);
    return unsubscribe;
  }, [listener, registerListener]);
}

function useDndMonitorProvider() {
  const [listeners] = (0,external_React_namespaceObject.useState)(() => new Set());
  const registerListener = (0,external_React_namespaceObject.useCallback)(listener => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, [listeners]);
  const dispatch = (0,external_React_namespaceObject.useCallback)(_ref => {
    let {
      type,
      event
    } = _ref;
    listeners.forEach(listener => {
      var _listener$type;

      return (_listener$type = listener[type]) == null ? void 0 : _listener$type.call(listener, event);
    });
  }, [listeners]);
  return [dispatch, registerListener];
}

const defaultScreenReaderInstructions = {
  draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
};
const defaultAnnouncements = {
  onDragStart(_ref) {
    let {
      active
    } = _ref;
    return "Picked up draggable item " + active.id + ".";
  },

  onDragOver(_ref2) {
    let {
      active,
      over
    } = _ref2;

    if (over) {
      return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
    }

    return "Draggable item " + active.id + " is no longer over a droppable area.";
  },

  onDragEnd(_ref3) {
    let {
      active,
      over
    } = _ref3;

    if (over) {
      return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
    }

    return "Draggable item " + active.id + " was dropped.";
  },

  onDragCancel(_ref4) {
    let {
      active
    } = _ref4;
    return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
  }

};

function Accessibility(_ref) {
  let {
    announcements = defaultAnnouncements,
    container,
    hiddenTextDescribedById,
    screenReaderInstructions = defaultScreenReaderInstructions
  } = _ref;
  const {
    announce,
    announcement
  } = useAnnouncement();
  const liveRegionId = useUniqueId("DndLiveRegion");
  const [mounted, setMounted] = (0,external_React_namespaceObject.useState)(false);
  (0,external_React_namespaceObject.useEffect)(() => {
    setMounted(true);
  }, []);
  useDndMonitor((0,external_React_namespaceObject.useMemo)(() => ({
    onDragStart(_ref2) {
      let {
        active
      } = _ref2;
      announce(announcements.onDragStart({
        active
      }));
    },

    onDragMove(_ref3) {
      let {
        active,
        over
      } = _ref3;

      if (announcements.onDragMove) {
        announce(announcements.onDragMove({
          active,
          over
        }));
      }
    },

    onDragOver(_ref4) {
      let {
        active,
        over
      } = _ref4;
      announce(announcements.onDragOver({
        active,
        over
      }));
    },

    onDragEnd(_ref5) {
      let {
        active,
        over
      } = _ref5;
      announce(announcements.onDragEnd({
        active,
        over
      }));
    },

    onDragCancel(_ref6) {
      let {
        active,
        over
      } = _ref6;
      announce(announcements.onDragCancel({
        active,
        over
      }));
    }

  }), [announce, announcements]));

  if (!mounted) {
    return null;
  }

  const markup = external_React_default().createElement((external_React_default()).Fragment, null, external_React_default().createElement(HiddenText, {
    id: hiddenTextDescribedById,
    value: screenReaderInstructions.draggable
  }), external_React_default().createElement(LiveRegion, {
    id: liveRegionId,
    announcement: announcement
  }));
  return container ? (0,external_ReactDOM_namespaceObject.createPortal)(markup, container) : markup;
}

var Action;

(function (Action) {
  Action["DragStart"] = "dragStart";
  Action["DragMove"] = "dragMove";
  Action["DragEnd"] = "dragEnd";
  Action["DragCancel"] = "dragCancel";
  Action["DragOver"] = "dragOver";
  Action["RegisterDroppable"] = "registerDroppable";
  Action["SetDroppableDisabled"] = "setDroppableDisabled";
  Action["UnregisterDroppable"] = "unregisterDroppable";
})(Action || (Action = {}));

function noop() {}

function useSensor(sensor, options) {
  return (0,external_React_namespaceObject.useMemo)(() => ({
    sensor,
    options: options != null ? options : {}
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [sensor, options]);
}

function useSensors() {
  for (var _len = arguments.length, sensors = new Array(_len), _key = 0; _key < _len; _key++) {
    sensors[_key] = arguments[_key];
  }

  return (0,external_React_namespaceObject.useMemo)(() => [...sensors].filter(sensor => sensor != null), // eslint-disable-next-line react-hooks/exhaustive-deps
  [...sensors]);
}

const defaultCoordinates = /*#__PURE__*/Object.freeze({
  x: 0,
  y: 0
});

/**
 * Returns the distance between two points
 */
function distanceBetween(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function getRelativeTransformOrigin(event, rect) {
  const eventCoordinates = core_esm_getEventCoordinates(event);

  if (!eventCoordinates) {
    return '0 0';
  }

  const transformOrigin = {
    x: (eventCoordinates.x - rect.left) / rect.width * 100,
    y: (eventCoordinates.y - rect.top) / rect.height * 100
  };
  return transformOrigin.x + "% " + transformOrigin.y + "%";
}

/**
 * Sort collisions from smallest to greatest value
 */
function sortCollisionsAsc(_ref, _ref2) {
  let {
    data: {
      value: a
    }
  } = _ref;
  let {
    data: {
      value: b
    }
  } = _ref2;
  return a - b;
}
/**
 * Sort collisions from greatest to smallest value
 */

function sortCollisionsDesc(_ref3, _ref4) {
  let {
    data: {
      value: a
    }
  } = _ref3;
  let {
    data: {
      value: b
    }
  } = _ref4;
  return b - a;
}
/**
 * Returns the coordinates of the corners of a given rectangle:
 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
 */

function cornersOfRectangle(_ref5) {
  let {
    left,
    top,
    height,
    width
  } = _ref5;
  return [{
    x: left,
    y: top
  }, {
    x: left + width,
    y: top
  }, {
    x: left,
    y: top + height
  }, {
    x: left + width,
    y: top + height
  }];
}
function getFirstCollision(collisions, property) {
  if (!collisions || collisions.length === 0) {
    return null;
  }

  const [firstCollision] = collisions;
  return property ? firstCollision[property] : firstCollision;
}

/**
 * Returns the coordinates of the center of a given ClientRect
 */

function centerOfRectangle(rect, left, top) {
  if (left === void 0) {
    left = rect.left;
  }

  if (top === void 0) {
    top = rect.top;
  }

  return {
    x: left + rect.width * 0.5,
    y: top + rect.height * 0.5
  };
}
/**
 * Returns the closest rectangles from an array of rectangles to the center of a given
 * rectangle.
 */


const closestCenter = _ref => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const centerRect = centerOfRectangle(collisionRect, collisionRect.left, collisionRect.top);
  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const distBetween = distanceBetween(centerOfRectangle(rect), centerRect);
      collisions.push({
        id,
        data: {
          droppableContainer,
          value: distBetween
        }
      });
    }
  }

  return collisions.sort(sortCollisionsAsc);
};

/**
 * Returns the closest rectangles from an array of rectangles to the corners of
 * another rectangle.
 */

const closestCorners = _ref => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const corners = cornersOfRectangle(collisionRect);
  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const rectCorners = cornersOfRectangle(rect);
      const distances = corners.reduce((accumulator, corner, index) => {
        return accumulator + distanceBetween(rectCorners[index], corner);
      }, 0);
      const effectiveDistance = Number((distances / 4).toFixed(4));
      collisions.push({
        id,
        data: {
          droppableContainer,
          value: effectiveDistance
        }
      });
    }
  }

  return collisions.sort(sortCollisionsAsc);
};

/**
 * Returns the intersecting rectangle area between two rectangles
 */

function getIntersectionRatio(entry, target) {
  const top = Math.max(target.top, entry.top);
  const left = Math.max(target.left, entry.left);
  const right = Math.min(target.left + target.width, entry.left + entry.width);
  const bottom = Math.min(target.top + target.height, entry.top + entry.height);
  const width = right - left;
  const height = bottom - top;

  if (left < right && top < bottom) {
    const targetArea = target.width * target.height;
    const entryArea = entry.width * entry.height;
    const intersectionArea = width * height;
    const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  } // Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)


  return 0;
}
/**
 * Returns the rectangles that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */

const rectIntersection = _ref => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const intersectionRatio = getIntersectionRatio(rect, collisionRect);

      if (intersectionRatio > 0) {
        collisions.push({
          id,
          data: {
            droppableContainer,
            value: intersectionRatio
          }
        });
      }
    }
  }

  return collisions.sort(sortCollisionsDesc);
};

/**
 * Check if a given point is contained within a bounding rectangle
 */

function isPointWithinRect(point, rect) {
  const {
    top,
    left,
    bottom,
    right
  } = rect;
  return top <= point.y && point.y <= bottom && left <= point.x && point.x <= right;
}
/**
 * Returns the rectangles that the pointer is hovering over
 */


const pointerWithin = _ref => {
  let {
    droppableContainers,
    droppableRects,
    pointerCoordinates
  } = _ref;

  if (!pointerCoordinates) {
    return [];
  }

  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect && isPointWithinRect(pointerCoordinates, rect)) {
      /* There may be more than a single rectangle intersecting
       * with the pointer coordinates. In order to sort the
       * colliding rectangles, we measure the distance between
       * the pointer and the corners of the intersecting rectangle
       */
      const corners = cornersOfRectangle(rect);
      const distances = corners.reduce((accumulator, corner) => {
        return accumulator + distanceBetween(pointerCoordinates, corner);
      }, 0);
      const effectiveDistance = Number((distances / 4).toFixed(4));
      collisions.push({
        id,
        data: {
          droppableContainer,
          value: effectiveDistance
        }
      });
    }
  }

  return collisions.sort(sortCollisionsAsc);
};

function adjustScale(transform, rect1, rect2) {
  return { ...transform,
    scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
    scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
  };
}

function getRectDelta(rect1, rect2) {
  return rect1 && rect2 ? {
    x: rect1.left - rect2.left,
    y: rect1.top - rect2.top
  } : defaultCoordinates;
}

function createRectAdjustmentFn(modifier) {
  return function adjustClientRect(rect) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }

    return adjustments.reduce((acc, adjustment) => ({ ...acc,
      top: acc.top + modifier * adjustment.y,
      bottom: acc.bottom + modifier * adjustment.y,
      left: acc.left + modifier * adjustment.x,
      right: acc.right + modifier * adjustment.x
    }), { ...rect
    });
  };
}
const getAdjustedRect = /*#__PURE__*/createRectAdjustmentFn(1);

function parseTransform(transform) {
  if (transform.startsWith('matrix3d(')) {
    const transformArray = transform.slice(9, -1).split(/, /);
    return {
      x: +transformArray[12],
      y: +transformArray[13],
      scaleX: +transformArray[0],
      scaleY: +transformArray[5]
    };
  } else if (transform.startsWith('matrix(')) {
    const transformArray = transform.slice(7, -1).split(/, /);
    return {
      x: +transformArray[4],
      y: +transformArray[5],
      scaleX: +transformArray[0],
      scaleY: +transformArray[3]
    };
  }

  return null;
}

function inverseTransform(rect, transform, transformOrigin) {
  const parsedTransform = parseTransform(transform);

  if (!parsedTransform) {
    return rect;
  }

  const {
    scaleX,
    scaleY,
    x: translateX,
    y: translateY
  } = parsedTransform;
  const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
  const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(' ') + 1));
  const w = scaleX ? rect.width / scaleX : rect.width;
  const h = scaleY ? rect.height / scaleY : rect.height;
  return {
    width: w,
    height: h,
    top: y,
    right: x + w,
    bottom: y + h,
    left: x
  };
}

const defaultOptions = {
  ignoreTransform: false
};
/**
 * Returns the bounding client rect of an element relative to the viewport.
 */

function getClientRect(element, options) {
  if (options === void 0) {
    options = defaultOptions;
  }

  let rect = element.getBoundingClientRect();

  if (options.ignoreTransform) {
    const {
      transform,
      transformOrigin
    } = getWindow(element).getComputedStyle(element);

    if (transform) {
      rect = inverseTransform(rect, transform, transformOrigin);
    }
  }

  const {
    top,
    left,
    width,
    height,
    bottom,
    right
  } = rect;
  return {
    top,
    left,
    width,
    height,
    bottom,
    right
  };
}
/**
 * Returns the bounding client rect of an element relative to the viewport.
 *
 * @remarks
 * The ClientRect returned by this method does not take into account transforms
 * applied to the element it measures.
 *
 */

function getTransformAgnosticClientRect(element) {
  return getClientRect(element, {
    ignoreTransform: true
  });
}

function getWindowClientRect(element) {
  const width = element.innerWidth;
  const height = element.innerHeight;
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  };
}

function isFixed(node, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = getWindow(node).getComputedStyle(node);
  }

  return computedStyle.position === 'fixed';
}

function isScrollable(element, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = getWindow(element).getComputedStyle(element);
  }

  const overflowRegex = /(auto|scroll|overlay)/;
  const properties = ['overflow', 'overflowX', 'overflowY'];
  return properties.some(property => {
    const value = computedStyle[property];
    return typeof value === 'string' ? overflowRegex.test(value) : false;
  });
}

function getScrollableAncestors(element, limit) {
  const scrollParents = [];

  function findScrollableAncestors(node) {
    if (limit != null && scrollParents.length >= limit) {
      return scrollParents;
    }

    if (!node) {
      return scrollParents;
    }

    if (isDocument(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
      scrollParents.push(node.scrollingElement);
      return scrollParents;
    }

    if (!isHTMLElement(node) || isSVGElement(node)) {
      return scrollParents;
    }

    if (scrollParents.includes(node)) {
      return scrollParents;
    }

    const computedStyle = getWindow(element).getComputedStyle(node);

    if (node !== element) {
      if (isScrollable(node, computedStyle)) {
        scrollParents.push(node);
      }
    }

    if (isFixed(node, computedStyle)) {
      return scrollParents;
    }

    return findScrollableAncestors(node.parentNode);
  }

  if (!element) {
    return scrollParents;
  }

  return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
  const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
  return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}

function getScrollableElement(element) {
  if (!canUseDOM || !element) {
    return null;
  }

  if (isWindow(element)) {
    return element;
  }

  if (!isNode(element)) {
    return null;
  }

  if (isDocument(element) || element === getOwnerDocument(element).scrollingElement) {
    return window;
  }

  if (isHTMLElement(element)) {
    return element;
  }

  return null;
}

function getScrollXCoordinate(element) {
  if (isWindow(element)) {
    return element.scrollX;
  }

  return element.scrollLeft;
}
function getScrollYCoordinate(element) {
  if (isWindow(element)) {
    return element.scrollY;
  }

  return element.scrollTop;
}
function getScrollCoordinates(element) {
  return {
    x: getScrollXCoordinate(element),
    y: getScrollYCoordinate(element)
  };
}

var Direction;

(function (Direction) {
  Direction[Direction["Forward"] = 1] = "Forward";
  Direction[Direction["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));

function isDocumentScrollingElement(element) {
  if (!canUseDOM || !element) {
    return false;
  }

  return element === document.scrollingElement;
}

function getScrollPosition(scrollingContainer) {
  const minScroll = {
    x: 0,
    y: 0
  };
  const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: scrollingContainer.clientHeight,
    width: scrollingContainer.clientWidth
  };
  const maxScroll = {
    x: scrollingContainer.scrollWidth - dimensions.width,
    y: scrollingContainer.scrollHeight - dimensions.height
  };
  const isTop = scrollingContainer.scrollTop <= minScroll.y;
  const isLeft = scrollingContainer.scrollLeft <= minScroll.x;
  const isBottom = scrollingContainer.scrollTop >= maxScroll.y;
  const isRight = scrollingContainer.scrollLeft >= maxScroll.x;
  return {
    isTop,
    isLeft,
    isBottom,
    isRight,
    maxScroll,
    minScroll
  };
}

const defaultThreshold = {
  x: 0.2,
  y: 0.2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
  let {
    top,
    left,
    right,
    bottom
  } = _ref;

  if (acceleration === void 0) {
    acceleration = 10;
  }

  if (thresholdPercentage === void 0) {
    thresholdPercentage = defaultThreshold;
  }

  const {
    isTop,
    isBottom,
    isLeft,
    isRight
  } = getScrollPosition(scrollContainer);
  const direction = {
    x: 0,
    y: 0
  };
  const speed = {
    x: 0,
    y: 0
  };
  const threshold = {
    height: scrollContainerRect.height * thresholdPercentage.y,
    width: scrollContainerRect.width * thresholdPercentage.x
  };

  if (!isTop && top <= scrollContainerRect.top + threshold.height) {
    // Scroll Up
    direction.y = Direction.Backward;
    speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
  } else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
    // Scroll Down
    direction.y = Direction.Forward;
    speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
  }

  if (!isRight && right >= scrollContainerRect.right - threshold.width) {
    // Scroll Right
    direction.x = Direction.Forward;
    speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
  } else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
    // Scroll Left
    direction.x = Direction.Backward;
    speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold.width - left) / threshold.width);
  }

  return {
    direction,
    speed
  };
}

function getScrollElementRect(element) {
  if (element === document.scrollingElement) {
    const {
      innerWidth,
      innerHeight
    } = window;
    return {
      top: 0,
      left: 0,
      right: innerWidth,
      bottom: innerHeight,
      width: innerWidth,
      height: innerHeight
    };
  }

  const {
    top,
    left,
    right,
    bottom
  } = element.getBoundingClientRect();
  return {
    top,
    left,
    right,
    bottom,
    width: element.clientWidth,
    height: element.clientHeight
  };
}

function getScrollOffsets(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return add(acc, getScrollCoordinates(node));
  }, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollXCoordinate(node);
  }, 0);
}
function getScrollYOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollYCoordinate(node);
  }, 0);
}

function scrollIntoViewIfNeeded(element, measure) {
  if (measure === void 0) {
    measure = getClientRect;
  }

  if (!element) {
    return;
  }

  const {
    top,
    left,
    bottom,
    right
  } = measure(element);
  const firstScrollableAncestor = getFirstScrollableAncestor(element);

  if (!firstScrollableAncestor) {
    return;
  }

  if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) {
    element.scrollIntoView({
      block: 'center',
      inline: 'center'
    });
  }
}

const properties = [['x', ['left', 'right'], getScrollXOffset], ['y', ['top', 'bottom'], getScrollYOffset]];
class Rect {
  constructor(rect, element) {
    this.rect = void 0;
    this.width = void 0;
    this.height = void 0;
    this.top = void 0;
    this.bottom = void 0;
    this.right = void 0;
    this.left = void 0;
    const scrollableAncestors = getScrollableAncestors(element);
    const scrollOffsets = getScrollOffsets(scrollableAncestors);
    this.rect = { ...rect
    };
    this.width = rect.width;
    this.height = rect.height;

    for (const [axis, keys, getScrollOffset] of properties) {
      for (const key of keys) {
        Object.defineProperty(this, key, {
          get: () => {
            const currentOffsets = getScrollOffset(scrollableAncestors);
            const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
            return this.rect[key] + scrollOffsetsDeltla;
          },
          enumerable: true
        });
      }
    }

    Object.defineProperty(this, 'rect', {
      enumerable: false
    });
  }

}

class Listeners {
  constructor(target) {
    this.target = void 0;
    this.listeners = [];

    this.removeAll = () => {
      this.listeners.forEach(listener => {
        var _this$target;

        return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
      });
    };

    this.target = target;
  }

  add(eventName, handler, options) {
    var _this$target2;

    (_this$target2 = this.target) == null ? void 0 : _this$target2.addEventListener(eventName, handler, options);
    this.listeners.push([eventName, handler, options]);
  }

}

function getEventListenerTarget(target) {
  // If the `event.target` element is removed from the document events will still be targeted
  // at it, and hence won't always bubble up to the window or document anymore.
  // If there is any risk of an element being removed while it is being dragged,
  // the best practice is to attach the event listeners directly to the target.
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
  const {
    EventTarget
  } = getWindow(target);
  return target instanceof EventTarget ? target : getOwnerDocument(target);
}

function hasExceededDistance(delta, measurement) {
  const dx = Math.abs(delta.x);
  const dy = Math.abs(delta.y);

  if (typeof measurement === 'number') {
    return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
  }

  if ('x' in measurement && 'y' in measurement) {
    return dx > measurement.x && dy > measurement.y;
  }

  if ('x' in measurement) {
    return dx > measurement.x;
  }

  if ('y' in measurement) {
    return dy > measurement.y;
  }

  return false;
}

var EventName;

(function (EventName) {
  EventName["Click"] = "click";
  EventName["DragStart"] = "dragstart";
  EventName["Keydown"] = "keydown";
  EventName["ContextMenu"] = "contextmenu";
  EventName["Resize"] = "resize";
  EventName["SelectionChange"] = "selectionchange";
  EventName["VisibilityChange"] = "visibilitychange";
})(EventName || (EventName = {}));

function preventDefault(event) {
  event.preventDefault();
}
function stopPropagation(event) {
  event.stopPropagation();
}

var KeyboardCode;

(function (KeyboardCode) {
  KeyboardCode["Space"] = "Space";
  KeyboardCode["Down"] = "ArrowDown";
  KeyboardCode["Right"] = "ArrowRight";
  KeyboardCode["Left"] = "ArrowLeft";
  KeyboardCode["Up"] = "ArrowUp";
  KeyboardCode["Esc"] = "Escape";
  KeyboardCode["Enter"] = "Enter";
  KeyboardCode["Tab"] = "Tab";
})(KeyboardCode || (KeyboardCode = {}));

const defaultKeyboardCodes = {
  start: [KeyboardCode.Space, KeyboardCode.Enter],
  cancel: [KeyboardCode.Esc],
  end: [KeyboardCode.Space, KeyboardCode.Enter, KeyboardCode.Tab]
};
const defaultKeyboardCoordinateGetter = (event, _ref) => {
  let {
    currentCoordinates
  } = _ref;

  switch (event.code) {
    case KeyboardCode.Right:
      return { ...currentCoordinates,
        x: currentCoordinates.x + 25
      };

    case KeyboardCode.Left:
      return { ...currentCoordinates,
        x: currentCoordinates.x - 25
      };

    case KeyboardCode.Down:
      return { ...currentCoordinates,
        y: currentCoordinates.y + 25
      };

    case KeyboardCode.Up:
      return { ...currentCoordinates,
        y: currentCoordinates.y - 25
      };
  }

  return undefined;
};

class KeyboardSensor {
  constructor(props) {
    this.props = void 0;
    this.autoScrollEnabled = false;
    this.referenceCoordinates = void 0;
    this.listeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    const {
      event: {
        target
      }
    } = props;
    this.props = props;
    this.listeners = new Listeners(getOwnerDocument(target));
    this.windowListeners = new Listeners(getWindow(target));
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.attach();
  }

  attach() {
    this.handleStart();
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
  }

  handleStart() {
    const {
      activeNode,
      onStart
    } = this.props;
    const node = activeNode.node.current;

    if (node) {
      scrollIntoViewIfNeeded(node);
    }

    onStart(defaultCoordinates);
  }

  handleKeyDown(event) {
    if (isKeyboardEvent(event)) {
      const {
        active,
        context,
        options
      } = this.props;
      const {
        keyboardCodes = defaultKeyboardCodes,
        coordinateGetter = defaultKeyboardCoordinateGetter,
        scrollBehavior = 'smooth'
      } = options;
      const {
        code
      } = event;

      if (keyboardCodes.end.includes(code)) {
        this.handleEnd(event);
        return;
      }

      if (keyboardCodes.cancel.includes(code)) {
        this.handleCancel(event);
        return;
      }

      const {
        collisionRect
      } = context.current;
      const currentCoordinates = collisionRect ? {
        x: collisionRect.left,
        y: collisionRect.top
      } : defaultCoordinates;

      if (!this.referenceCoordinates) {
        this.referenceCoordinates = currentCoordinates;
      }

      const newCoordinates = coordinateGetter(event, {
        active,
        context: context.current,
        currentCoordinates
      });

      if (newCoordinates) {
        const coordinatesDelta = subtract(newCoordinates, currentCoordinates);
        const scrollDelta = {
          x: 0,
          y: 0
        };
        const {
          scrollableAncestors
        } = context.current;

        for (const scrollContainer of scrollableAncestors) {
          const direction = event.code;
          const {
            isTop,
            isRight,
            isLeft,
            isBottom,
            maxScroll,
            minScroll
          } = getScrollPosition(scrollContainer);
          const scrollElementRect = getScrollElementRect(scrollContainer);
          const clampedCoordinates = {
            x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
            y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
          };
          const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
          const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;

          if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
            const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
            const canScrollToNewCoordinates = direction === KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === KeyboardCode.Left && newScrollCoordinates >= minScroll.x;

            if (canScrollToNewCoordinates && !coordinatesDelta.y) {
              // We don't need to update coordinates, the scroll adjustment alone will trigger
              // logic to auto-detect the new container we are over
              scrollContainer.scrollTo({
                left: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }

            if (canScrollToNewCoordinates) {
              scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
            } else {
              scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
            }

            if (scrollDelta.x) {
              scrollContainer.scrollBy({
                left: -scrollDelta.x,
                behavior: scrollBehavior
              });
            }

            break;
          } else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
            const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
            const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;

            if (canScrollToNewCoordinates && !coordinatesDelta.x) {
              // We don't need to update coordinates, the scroll adjustment alone will trigger
              // logic to auto-detect the new container we are over
              scrollContainer.scrollTo({
                top: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }

            if (canScrollToNewCoordinates) {
              scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
            } else {
              scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
            }

            if (scrollDelta.y) {
              scrollContainer.scrollBy({
                top: -scrollDelta.y,
                behavior: scrollBehavior
              });
            }

            break;
          }
        }

        this.handleMove(event, add(subtract(newCoordinates, this.referenceCoordinates), scrollDelta));
      }
    }
  }

  handleMove(event, coordinates) {
    const {
      onMove
    } = this.props;
    event.preventDefault();
    onMove(coordinates);
  }

  handleEnd(event) {
    const {
      onEnd
    } = this.props;
    event.preventDefault();
    this.detach();
    onEnd();
  }

  handleCancel(event) {
    const {
      onCancel
    } = this.props;
    event.preventDefault();
    this.detach();
    onCancel();
  }

  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
  }

}
KeyboardSensor.activators = [{
  eventName: 'onKeyDown',
  handler: (event, _ref, _ref2) => {
    let {
      keyboardCodes = defaultKeyboardCodes,
      onActivation
    } = _ref;
    let {
      active
    } = _ref2;
    const {
      code
    } = event.nativeEvent;

    if (keyboardCodes.start.includes(code)) {
      const activator = active.activatorNode.current;

      if (activator && event.target !== activator) {
        return false;
      }

      event.preventDefault();
      onActivation == null ? void 0 : onActivation({
        event: event.nativeEvent
      });
      return true;
    }

    return false;
  }
}];

function isDistanceConstraint(constraint) {
  return Boolean(constraint && 'distance' in constraint);
}

function isDelayConstraint(constraint) {
  return Boolean(constraint && 'delay' in constraint);
}

class AbstractPointerSensor {
  constructor(props, events, listenerTarget) {
    var _getEventCoordinates;

    if (listenerTarget === void 0) {
      listenerTarget = getEventListenerTarget(props.event.target);
    }

    this.props = void 0;
    this.events = void 0;
    this.autoScrollEnabled = true;
    this.document = void 0;
    this.activated = false;
    this.initialCoordinates = void 0;
    this.timeoutId = null;
    this.listeners = void 0;
    this.documentListeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    this.events = events;
    const {
      event
    } = props;
    const {
      target
    } = event;
    this.props = props;
    this.events = events;
    this.document = getOwnerDocument(target);
    this.documentListeners = new Listeners(this.document);
    this.listeners = new Listeners(listenerTarget);
    this.windowListeners = new Listeners(getWindow(target));
    this.initialCoordinates = (_getEventCoordinates = getEventCoordinates(event)) != null ? _getEventCoordinates : defaultCoordinates;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.removeTextSelection = this.removeTextSelection.bind(this);
    this.attach();
  }

  attach() {
    const {
      events,
      props: {
        options: {
          activationConstraint,
          bypassActivationConstraint
        }
      }
    } = this;
    this.listeners.add(events.move.name, this.handleMove, {
      passive: false
    });
    this.listeners.add(events.end.name, this.handleEnd);

    if (events.cancel) {
      this.listeners.add(events.cancel.name, this.handleCancel);
    }

    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.DragStart, preventDefault);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    this.windowListeners.add(EventName.ContextMenu, preventDefault);
    this.documentListeners.add(EventName.Keydown, this.handleKeydown);

    if (activationConstraint) {
      if (bypassActivationConstraint != null && bypassActivationConstraint({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      })) {
        return this.handleStart();
      }

      if (isDelayConstraint(activationConstraint)) {
        this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
        this.handlePending(activationConstraint);
        return;
      }

      if (isDistanceConstraint(activationConstraint)) {
        this.handlePending(activationConstraint);
        return;
      }
    }

    this.handleStart();
  }

  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll(); // Wait until the next event loop before removing document listeners
    // This is necessary because we listen for `click` and `selection` events on the document

    setTimeout(this.documentListeners.removeAll, 50);

    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  handlePending(constraint, offset) {
    const {
      active,
      onPending
    } = this.props;
    onPending(active, constraint, this.initialCoordinates, offset);
  }

  handleStart() {
    const {
      initialCoordinates
    } = this;
    const {
      onStart
    } = this.props;

    if (initialCoordinates) {
      this.activated = true; // Stop propagation of click events once activation constraints are met

      this.documentListeners.add(EventName.Click, stopPropagation, {
        capture: true
      }); // Remove any text selection from the document

      this.removeTextSelection(); // Prevent further text selection while dragging

      this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
      onStart(initialCoordinates);
    }
  }

  handleMove(event) {
    var _getEventCoordinates2;

    const {
      activated,
      initialCoordinates,
      props
    } = this;
    const {
      onMove,
      options: {
        activationConstraint
      }
    } = props;

    if (!initialCoordinates) {
      return;
    }

    const coordinates = (_getEventCoordinates2 = getEventCoordinates(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
    const delta = subtract(initialCoordinates, coordinates); // Constraint validation

    if (!activated && activationConstraint) {
      if (isDistanceConstraint(activationConstraint)) {
        if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }

        if (hasExceededDistance(delta, activationConstraint.distance)) {
          return this.handleStart();
        }
      }

      if (isDelayConstraint(activationConstraint)) {
        if (hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }
      }

      this.handlePending(activationConstraint, delta);
      return;
    }

    if (event.cancelable) {
      event.preventDefault();
    }

    onMove(coordinates);
  }

  handleEnd() {
    const {
      onAbort,
      onEnd
    } = this.props;
    this.detach();

    if (!this.activated) {
      onAbort(this.props.active);
    }

    onEnd();
  }

  handleCancel() {
    const {
      onAbort,
      onCancel
    } = this.props;
    this.detach();

    if (!this.activated) {
      onAbort(this.props.active);
    }

    onCancel();
  }

  handleKeydown(event) {
    if (event.code === KeyboardCode.Esc) {
      this.handleCancel();
    }
  }

  removeTextSelection() {
    var _this$document$getSel;

    (_this$document$getSel = this.document.getSelection()) == null ? void 0 : _this$document$getSel.removeAllRanges();
  }

}

const events = {
  cancel: {
    name: 'pointercancel'
  },
  move: {
    name: 'pointermove'
  },
  end: {
    name: 'pointerup'
  }
};
class PointerSensor extends AbstractPointerSensor {
  constructor(props) {
    const {
      event
    } = props; // Pointer events stop firing if the target is unmounted while dragging
    // Therefore we attach listeners to the owner document instead

    const listenerTarget = getOwnerDocument(event.target);
    super(props, events, listenerTarget);
  }

}
PointerSensor.activators = [{
  eventName: 'onPointerDown',
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;

    if (!event.isPrimary || event.button !== 0) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

const events$1 = {
  move: {
    name: 'mousemove'
  },
  end: {
    name: 'mouseup'
  }
};
var MouseButton;

(function (MouseButton) {
  MouseButton[MouseButton["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));

class MouseSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$1, getOwnerDocument(props.event.target));
  }

}
MouseSensor.activators = [{
  eventName: 'onMouseDown',
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;

    if (event.button === MouseButton.RightClick) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

const events$2 = {
  cancel: {
    name: 'touchcancel'
  },
  move: {
    name: 'touchmove'
  },
  end: {
    name: 'touchend'
  }
};
class TouchSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$2);
  }

  static setup() {
    // Adding a non-capture and non-passive `touchmove` listener in order
    // to force `event.preventDefault()` calls to work in dynamically added
    // touchmove event handlers. This is required for iOS Safari.
    window.addEventListener(events$2.move.name, noop, {
      capture: false,
      passive: false
    });
    return function teardown() {
      window.removeEventListener(events$2.move.name, noop);
    }; // We create a new handler because the teardown function of another sensor
    // could remove our event listener if we use a referentially equal listener.

    function noop() {}
  }

}
TouchSensor.activators = [{
  eventName: 'onTouchStart',
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    const {
      touches
    } = event;

    if (touches.length > 1) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

var AutoScrollActivator;

(function (AutoScrollActivator) {
  AutoScrollActivator[AutoScrollActivator["Pointer"] = 0] = "Pointer";
  AutoScrollActivator[AutoScrollActivator["DraggableRect"] = 1] = "DraggableRect";
})(AutoScrollActivator || (AutoScrollActivator = {}));

var TraversalOrder;

(function (TraversalOrder) {
  TraversalOrder[TraversalOrder["TreeOrder"] = 0] = "TreeOrder";
  TraversalOrder[TraversalOrder["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
})(TraversalOrder || (TraversalOrder = {}));

function useAutoScroller(_ref) {
  let {
    acceleration,
    activator = AutoScrollActivator.Pointer,
    canScroll,
    draggingRect,
    enabled,
    interval = 5,
    order = TraversalOrder.TreeOrder,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects,
    delta,
    threshold
  } = _ref;
  const scrollIntent = useScrollIntent({
    delta,
    disabled: !enabled
  });
  const [setAutoScrollInterval, clearAutoScrollInterval] = useInterval();
  const scrollSpeed = (0,external_React_namespaceObject.useRef)({
    x: 0,
    y: 0
  });
  const scrollDirection = (0,external_React_namespaceObject.useRef)({
    x: 0,
    y: 0
  });
  const rect = (0,external_React_namespaceObject.useMemo)(() => {
    switch (activator) {
      case AutoScrollActivator.Pointer:
        return pointerCoordinates ? {
          top: pointerCoordinates.y,
          bottom: pointerCoordinates.y,
          left: pointerCoordinates.x,
          right: pointerCoordinates.x
        } : null;

      case AutoScrollActivator.DraggableRect:
        return draggingRect;
    }
  }, [activator, draggingRect, pointerCoordinates]);
  const scrollContainerRef = (0,external_React_namespaceObject.useRef)(null);
  const autoScroll = (0,external_React_namespaceObject.useCallback)(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }

    const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
    const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
    scrollContainer.scrollBy(scrollLeft, scrollTop);
  }, []);
  const sortedScrollableAncestors = (0,external_React_namespaceObject.useMemo)(() => order === TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
  (0,external_React_namespaceObject.useEffect)(() => {
    if (!enabled || !scrollableAncestors.length || !rect) {
      clearAutoScrollInterval();
      return;
    }

    for (const scrollContainer of sortedScrollableAncestors) {
      if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) {
        continue;
      }

      const index = scrollableAncestors.indexOf(scrollContainer);
      const scrollContainerRect = scrollableAncestorRects[index];

      if (!scrollContainerRect) {
        continue;
      }

      const {
        direction,
        speed
      } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);

      for (const axis of ['x', 'y']) {
        if (!scrollIntent[axis][direction[axis]]) {
          speed[axis] = 0;
          direction[axis] = 0;
        }
      }

      if (speed.x > 0 || speed.y > 0) {
        clearAutoScrollInterval();
        scrollContainerRef.current = scrollContainer;
        setAutoScrollInterval(autoScroll, interval);
        scrollSpeed.current = speed;
        scrollDirection.current = direction;
        return;
      }
    }

    scrollSpeed.current = {
      x: 0,
      y: 0
    };
    scrollDirection.current = {
      x: 0,
      y: 0
    };
    clearAutoScrollInterval();
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [acceleration, autoScroll, canScroll, clearAutoScrollInterval, enabled, interval, // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(rect), // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(scrollIntent), setAutoScrollInterval, scrollableAncestors, sortedScrollableAncestors, scrollableAncestorRects, // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(threshold)]);
}
const defaultScrollIntent = {
  x: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  },
  y: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  }
};

function useScrollIntent(_ref2) {
  let {
    delta,
    disabled
  } = _ref2;
  const previousDelta = usePrevious(delta);
  return useLazyMemo(previousIntent => {
    if (disabled || !previousDelta || !previousIntent) {
      // Reset scroll intent tracking when auto-scrolling is disabled
      return defaultScrollIntent;
    }

    const direction = {
      x: Math.sign(delta.x - previousDelta.x),
      y: Math.sign(delta.y - previousDelta.y)
    }; // Keep track of the user intent to scroll in each direction for both axis

    return {
      x: {
        [Direction.Backward]: previousIntent.x[Direction.Backward] || direction.x === -1,
        [Direction.Forward]: previousIntent.x[Direction.Forward] || direction.x === 1
      },
      y: {
        [Direction.Backward]: previousIntent.y[Direction.Backward] || direction.y === -1,
        [Direction.Forward]: previousIntent.y[Direction.Forward] || direction.y === 1
      }
    };
  }, [disabled, delta, previousDelta]);
}

function useCachedNode(draggableNodes, id) {
  const draggableNode = id != null ? draggableNodes.get(id) : undefined;
  const node = draggableNode ? draggableNode.node.current : null;
  return useLazyMemo(cachedNode => {
    var _ref;

    if (id == null) {
      return null;
    } // In some cases, the draggable node can unmount while dragging
    // This is the case for virtualized lists. In those situations,
    // we fall back to the last known value for that node.


    return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
  }, [node, id]);
}

function useCombineActivators(sensors, getSyntheticHandler) {
  return (0,external_React_namespaceObject.useMemo)(() => sensors.reduce((accumulator, sensor) => {
    const {
      sensor: Sensor
    } = sensor;
    const sensorActivators = Sensor.activators.map(activator => ({
      eventName: activator.eventName,
      handler: getSyntheticHandler(activator.handler, sensor)
    }));
    return [...accumulator, ...sensorActivators];
  }, []), [sensors, getSyntheticHandler]);
}

var MeasuringStrategy;

(function (MeasuringStrategy) {
  MeasuringStrategy[MeasuringStrategy["Always"] = 0] = "Always";
  MeasuringStrategy[MeasuringStrategy["BeforeDragging"] = 1] = "BeforeDragging";
  MeasuringStrategy[MeasuringStrategy["WhileDragging"] = 2] = "WhileDragging";
})(MeasuringStrategy || (MeasuringStrategy = {}));

var MeasuringFrequency;

(function (MeasuringFrequency) {
  MeasuringFrequency["Optimized"] = "optimized";
})(MeasuringFrequency || (MeasuringFrequency = {}));

const defaultValue = /*#__PURE__*/new Map();
function useDroppableMeasuring(containers, _ref) {
  let {
    dragging,
    dependencies,
    config
  } = _ref;
  const [queue, setQueue] = (0,external_React_namespaceObject.useState)(null);
  const {
    frequency,
    measure,
    strategy
  } = config;
  const containersRef = (0,external_React_namespaceObject.useRef)(containers);
  const disabled = isDisabled();
  const disabledRef = useLatestValue(disabled);
  const measureDroppableContainers = (0,external_React_namespaceObject.useCallback)(function (ids) {
    if (ids === void 0) {
      ids = [];
    }

    if (disabledRef.current) {
      return;
    }

    setQueue(value => {
      if (value === null) {
        return ids;
      }

      return value.concat(ids.filter(id => !value.includes(id)));
    });
  }, [disabledRef]);
  const timeoutId = (0,external_React_namespaceObject.useRef)(null);
  const droppableRects = useLazyMemo(previousValue => {
    if (disabled && !dragging) {
      return defaultValue;
    }

    if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
      const map = new Map();

      for (let container of containers) {
        if (!container) {
          continue;
        }

        if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
          // This container does not need to be re-measured
          map.set(container.id, container.rect.current);
          continue;
        }

        const node = container.node.current;
        const rect = node ? new Rect(measure(node), node) : null;
        container.rect.current = rect;

        if (rect) {
          map.set(container.id, rect);
        }
      }

      return map;
    }

    return previousValue;
  }, [containers, queue, dragging, disabled, measure]);
  (0,external_React_namespaceObject.useEffect)(() => {
    containersRef.current = containers;
  }, [containers]);
  (0,external_React_namespaceObject.useEffect)(() => {
    if (disabled) {
      return;
    }

    measureDroppableContainers();
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [dragging, disabled]);
  (0,external_React_namespaceObject.useEffect)(() => {
    if (queue && queue.length > 0) {
      setQueue(null);
    }
  }, //eslint-disable-next-line react-hooks/exhaustive-deps
  [JSON.stringify(queue)]);
  (0,external_React_namespaceObject.useEffect)(() => {
    if (disabled || typeof frequency !== 'number' || timeoutId.current !== null) {
      return;
    }

    timeoutId.current = setTimeout(() => {
      measureDroppableContainers();
      timeoutId.current = null;
    }, frequency);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [frequency, disabled, measureDroppableContainers, ...dependencies]);
  return {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled: queue != null
  };

  function isDisabled() {
    switch (strategy) {
      case MeasuringStrategy.Always:
        return false;

      case MeasuringStrategy.BeforeDragging:
        return dragging;

      default:
        return !dragging;
    }
  }
}

function useInitialValue(value, computeFn) {
  return useLazyMemo(previousValue => {
    if (!value) {
      return null;
    }

    if (previousValue) {
      return previousValue;
    }

    return typeof computeFn === 'function' ? computeFn(value) : value;
  }, [computeFn, value]);
}

function useInitialRect(node, measure) {
  return useInitialValue(node, measure);
}

/**
 * Returns a new MutationObserver instance.
 * If `MutationObserver` is undefined in the execution environment, returns `undefined`.
 */

function useMutationObserver(_ref) {
  let {
    callback,
    disabled
  } = _ref;
  const handleMutations = useEvent(callback);
  const mutationObserver = (0,external_React_namespaceObject.useMemo)(() => {
    if (disabled || typeof window === 'undefined' || typeof window.MutationObserver === 'undefined') {
      return undefined;
    }

    const {
      MutationObserver
    } = window;
    return new MutationObserver(handleMutations);
  }, [handleMutations, disabled]);
  (0,external_React_namespaceObject.useEffect)(() => {
    return () => mutationObserver == null ? void 0 : mutationObserver.disconnect();
  }, [mutationObserver]);
  return mutationObserver;
}

/**
 * Returns a new ResizeObserver instance bound to the `onResize` callback.
 * If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
 */

function useResizeObserver(_ref) {
  let {
    callback,
    disabled
  } = _ref;
  const handleResize = useEvent(callback);
  const resizeObserver = (0,external_React_namespaceObject.useMemo)(() => {
    if (disabled || typeof window === 'undefined' || typeof window.ResizeObserver === 'undefined') {
      return undefined;
    }

    const {
      ResizeObserver
    } = window;
    return new ResizeObserver(handleResize);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [disabled]);
  (0,external_React_namespaceObject.useEffect)(() => {
    return () => resizeObserver == null ? void 0 : resizeObserver.disconnect();
  }, [resizeObserver]);
  return resizeObserver;
}

function defaultMeasure(element) {
  return new Rect(getClientRect(element), element);
}

function useRect(element, measure, fallbackRect) {
  if (measure === void 0) {
    measure = defaultMeasure;
  }

  const [rect, setRect] = (0,external_React_namespaceObject.useState)(null);

  function measureRect() {
    setRect(currentRect => {
      if (!element) {
        return null;
      }

      if (element.isConnected === false) {
        var _ref;

        // Fall back to last rect we measured if the element is
        // no longer connected to the DOM.
        return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
      }

      const newRect = measure(element);

      if (JSON.stringify(currentRect) === JSON.stringify(newRect)) {
        return currentRect;
      }

      return newRect;
    });
  }

  const mutationObserver = useMutationObserver({
    callback(records) {
      if (!element) {
        return;
      }

      for (const record of records) {
        const {
          type,
          target
        } = record;

        if (type === 'childList' && target instanceof HTMLElement && target.contains(element)) {
          measureRect();
          break;
        }
      }
    }

  });
  const resizeObserver = useResizeObserver({
    callback: measureRect
  });
  useIsomorphicLayoutEffect(() => {
    measureRect();

    if (element) {
      resizeObserver == null ? void 0 : resizeObserver.observe(element);
      mutationObserver == null ? void 0 : mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    } else {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      mutationObserver == null ? void 0 : mutationObserver.disconnect();
    }
  }, [element]);
  return rect;
}

function useRectDelta(rect) {
  const initialRect = useInitialValue(rect);
  return getRectDelta(rect, initialRect);
}

const defaultValue$1 = [];
function useScrollableAncestors(node) {
  const previousNode = (0,external_React_namespaceObject.useRef)(node);
  const ancestors = useLazyMemo(previousValue => {
    if (!node) {
      return defaultValue$1;
    }

    if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) {
      return previousValue;
    }

    return getScrollableAncestors(node);
  }, [node]);
  (0,external_React_namespaceObject.useEffect)(() => {
    previousNode.current = node;
  }, [node]);
  return ancestors;
}

function useScrollOffsets(elements) {
  const [scrollCoordinates, setScrollCoordinates] = (0,external_React_namespaceObject.useState)(null);
  const prevElements = (0,external_React_namespaceObject.useRef)(elements); // To-do: Throttle the handleScroll callback

  const handleScroll = (0,external_React_namespaceObject.useCallback)(event => {
    const scrollingElement = getScrollableElement(event.target);

    if (!scrollingElement) {
      return;
    }

    setScrollCoordinates(scrollCoordinates => {
      if (!scrollCoordinates) {
        return null;
      }

      scrollCoordinates.set(scrollingElement, getScrollCoordinates(scrollingElement));
      return new Map(scrollCoordinates);
    });
  }, []);
  (0,external_React_namespaceObject.useEffect)(() => {
    const previousElements = prevElements.current;

    if (elements !== previousElements) {
      cleanup(previousElements);
      const entries = elements.map(element => {
        const scrollableElement = getScrollableElement(element);

        if (scrollableElement) {
          scrollableElement.addEventListener('scroll', handleScroll, {
            passive: true
          });
          return [scrollableElement, getScrollCoordinates(scrollableElement)];
        }

        return null;
      }).filter(entry => entry != null);
      setScrollCoordinates(entries.length ? new Map(entries) : null);
      prevElements.current = elements;
    }

    return () => {
      cleanup(elements);
      cleanup(previousElements);
    };

    function cleanup(elements) {
      elements.forEach(element => {
        const scrollableElement = getScrollableElement(element);
        scrollableElement == null ? void 0 : scrollableElement.removeEventListener('scroll', handleScroll);
      });
    }
  }, [handleScroll, elements]);
  return (0,external_React_namespaceObject.useMemo)(() => {
    if (elements.length) {
      return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => add(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
    }

    return defaultCoordinates;
  }, [elements, scrollCoordinates]);
}

function useScrollOffsetsDelta(scrollOffsets, dependencies) {
  if (dependencies === void 0) {
    dependencies = [];
  }

  const initialScrollOffsets = (0,external_React_namespaceObject.useRef)(null);
  (0,external_React_namespaceObject.useEffect)(() => {
    initialScrollOffsets.current = null;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  dependencies);
  (0,external_React_namespaceObject.useEffect)(() => {
    const hasScrollOffsets = scrollOffsets !== defaultCoordinates;

    if (hasScrollOffsets && !initialScrollOffsets.current) {
      initialScrollOffsets.current = scrollOffsets;
    }

    if (!hasScrollOffsets && initialScrollOffsets.current) {
      initialScrollOffsets.current = null;
    }
  }, [scrollOffsets]);
  return initialScrollOffsets.current ? subtract(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
}

function useSensorSetup(sensors) {
  (0,external_React_namespaceObject.useEffect)(() => {
    if (!canUseDOM) {
      return;
    }

    const teardownFns = sensors.map(_ref => {
      let {
        sensor
      } = _ref;
      return sensor.setup == null ? void 0 : sensor.setup();
    });
    return () => {
      for (const teardown of teardownFns) {
        teardown == null ? void 0 : teardown();
      }
    };
  }, // TO-DO: Sensors length could theoretically change which would not be a valid dependency
  // eslint-disable-next-line react-hooks/exhaustive-deps
  sensors.map(_ref2 => {
    let {
      sensor
    } = _ref2;
    return sensor;
  }));
}

function useSyntheticListeners(listeners, id) {
  return (0,external_React_namespaceObject.useMemo)(() => {
    return listeners.reduce((acc, _ref) => {
      let {
        eventName,
        handler
      } = _ref;

      acc[eventName] = event => {
        handler(event, id);
      };

      return acc;
    }, {});
  }, [listeners, id]);
}

function useWindowRect(element) {
  return (0,external_React_namespaceObject.useMemo)(() => element ? getWindowClientRect(element) : null, [element]);
}

const defaultValue$2 = [];
function useRects(elements, measure) {
  if (measure === void 0) {
    measure = getClientRect;
  }

  const [firstElement] = elements;
  const windowRect = useWindowRect(firstElement ? getWindow(firstElement) : null);
  const [rects, setRects] = (0,external_React_namespaceObject.useState)(defaultValue$2);

  function measureRects() {
    setRects(() => {
      if (!elements.length) {
        return defaultValue$2;
      }

      return elements.map(element => isDocumentScrollingElement(element) ? windowRect : new Rect(measure(element), element));
    });
  }

  const resizeObserver = useResizeObserver({
    callback: measureRects
  });
  useIsomorphicLayoutEffect(() => {
    resizeObserver == null ? void 0 : resizeObserver.disconnect();
    measureRects();
    elements.forEach(element => resizeObserver == null ? void 0 : resizeObserver.observe(element));
  }, [elements]);
  return rects;
}

function getMeasurableNode(node) {
  if (!node) {
    return null;
  }

  if (node.children.length > 1) {
    return node;
  }

  const firstChild = node.children[0];
  return isHTMLElement(firstChild) ? firstChild : node;
}

function useDragOverlayMeasuring(_ref) {
  let {
    measure
  } = _ref;
  const [rect, setRect] = (0,external_React_namespaceObject.useState)(null);
  const handleResize = (0,external_React_namespaceObject.useCallback)(entries => {
    for (const {
      target
    } of entries) {
      if (isHTMLElement(target)) {
        setRect(rect => {
          const newRect = measure(target);
          return rect ? { ...rect,
            width: newRect.width,
            height: newRect.height
          } : newRect;
        });
        break;
      }
    }
  }, [measure]);
  const resizeObserver = useResizeObserver({
    callback: handleResize
  });
  const handleNodeChange = (0,external_React_namespaceObject.useCallback)(element => {
    const node = getMeasurableNode(element);
    resizeObserver == null ? void 0 : resizeObserver.disconnect();

    if (node) {
      resizeObserver == null ? void 0 : resizeObserver.observe(node);
    }

    setRect(node ? measure(node) : null);
  }, [measure, resizeObserver]);
  const [nodeRef, setRef] = useNodeRef(handleNodeChange);
  return (0,external_React_namespaceObject.useMemo)(() => ({
    nodeRef,
    rect,
    setRef
  }), [rect, nodeRef, setRef]);
}

const defaultSensors = [{
  sensor: PointerSensor,
  options: {}
}, {
  sensor: KeyboardSensor,
  options: {}
}];
const defaultData = {
  current: {}
};
const defaultMeasuringConfiguration = {
  draggable: {
    measure: getTransformAgnosticClientRect
  },
  droppable: {
    measure: getTransformAgnosticClientRect,
    strategy: MeasuringStrategy.WhileDragging,
    frequency: MeasuringFrequency.Optimized
  },
  dragOverlay: {
    measure: getClientRect
  }
};

class DroppableContainersMap extends Map {
  get(id) {
    var _super$get;

    return id != null ? (_super$get = super.get(id)) != null ? _super$get : undefined : undefined;
  }

  toArray() {
    return Array.from(this.values());
  }

  getEnabled() {
    return this.toArray().filter(_ref => {
      let {
        disabled
      } = _ref;
      return !disabled;
    });
  }

  getNodeFor(id) {
    var _this$get$node$curren, _this$get;

    return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : undefined;
  }

}

const defaultPublicContext = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /*#__PURE__*/new Map(),
  droppableRects: /*#__PURE__*/new Map(),
  droppableContainers: /*#__PURE__*/new DroppableContainersMap(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: noop
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: defaultMeasuringConfiguration,
  measureDroppableContainers: noop,
  windowRect: null,
  measuringScheduled: false
};
const defaultInternalContext = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ''
  },
  dispatch: noop,
  draggableNodes: /*#__PURE__*/new Map(),
  over: null,
  measureDroppableContainers: noop
};
const InternalContext = /*#__PURE__*/(0,external_React_namespaceObject.createContext)(defaultInternalContext);
const PublicContext = /*#__PURE__*/(0,external_React_namespaceObject.createContext)(defaultPublicContext);

function getInitialState() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new DroppableContainersMap()
    }
  };
}
function reducer(state, action) {
  switch (action.type) {
    case Action.DragStart:
      return { ...state,
        draggable: { ...state.draggable,
          initialCoordinates: action.initialCoordinates,
          active: action.active
        }
      };

    case Action.DragMove:
      if (state.draggable.active == null) {
        return state;
      }

      return { ...state,
        draggable: { ...state.draggable,
          translate: {
            x: action.coordinates.x - state.draggable.initialCoordinates.x,
            y: action.coordinates.y - state.draggable.initialCoordinates.y
          }
        }
      };

    case Action.DragEnd:
    case Action.DragCancel:
      return { ...state,
        draggable: { ...state.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };

    case Action.RegisterDroppable:
      {
        const {
          element
        } = action;
        const {
          id
        } = element;
        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.set(id, element);
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    case Action.SetDroppableDisabled:
      {
        const {
          id,
          key,
          disabled
        } = action;
        const element = state.droppable.containers.get(id);

        if (!element || key !== element.key) {
          return state;
        }

        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.set(id, { ...element,
          disabled
        });
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    case Action.UnregisterDroppable:
      {
        const {
          id,
          key
        } = action;
        const element = state.droppable.containers.get(id);

        if (!element || key !== element.key) {
          return state;
        }

        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.delete(id);
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    default:
      {
        return state;
      }
  }
}

function RestoreFocus(_ref) {
  let {
    disabled
  } = _ref;
  const {
    active,
    activatorEvent,
    draggableNodes
  } = (0,external_React_namespaceObject.useContext)(InternalContext);
  const previousActivatorEvent = usePrevious(activatorEvent);
  const previousActiveId = usePrevious(active == null ? void 0 : active.id); // Restore keyboard focus on the activator node

  (0,external_React_namespaceObject.useEffect)(() => {
    if (disabled) {
      return;
    }

    if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
      if (!isKeyboardEvent(previousActivatorEvent)) {
        return;
      }

      if (document.activeElement === previousActivatorEvent.target) {
        // No need to restore focus
        return;
      }

      const draggableNode = draggableNodes.get(previousActiveId);

      if (!draggableNode) {
        return;
      }

      const {
        activatorNode,
        node
      } = draggableNode;

      if (!activatorNode.current && !node.current) {
        return;
      }

      requestAnimationFrame(() => {
        for (const element of [activatorNode.current, node.current]) {
          if (!element) {
            continue;
          }

          const focusableNode = findFirstFocusableNode(element);

          if (focusableNode) {
            focusableNode.focus();
            break;
          }
        }
      });
    }
  }, [activatorEvent, disabled, draggableNodes, previousActiveId, previousActivatorEvent]);
  return null;
}

function applyModifiers(modifiers, _ref) {
  let {
    transform,
    ...args
  } = _ref;
  return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier) => {
    return modifier({
      transform: accumulator,
      ...args
    });
  }, transform) : transform;
}

function useMeasuringConfiguration(config) {
  return (0,external_React_namespaceObject.useMemo)(() => ({
    draggable: { ...defaultMeasuringConfiguration.draggable,
      ...(config == null ? void 0 : config.draggable)
    },
    droppable: { ...defaultMeasuringConfiguration.droppable,
      ...(config == null ? void 0 : config.droppable)
    },
    dragOverlay: { ...defaultMeasuringConfiguration.dragOverlay,
      ...(config == null ? void 0 : config.dragOverlay)
    }
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [config == null ? void 0 : config.draggable, config == null ? void 0 : config.droppable, config == null ? void 0 : config.dragOverlay]);
}

function useLayoutShiftScrollCompensation(_ref) {
  let {
    activeNode,
    measure,
    initialRect,
    config = true
  } = _ref;
  const initialized = (0,external_React_namespaceObject.useRef)(false);
  const {
    x,
    y
  } = typeof config === 'boolean' ? {
    x: config,
    y: config
  } : config;
  useIsomorphicLayoutEffect(() => {
    const disabled = !x && !y;

    if (disabled || !activeNode) {
      initialized.current = false;
      return;
    }

    if (initialized.current || !initialRect) {
      // Return early if layout shift scroll compensation was already attempted
      // or if there is no initialRect to compare to.
      return;
    } // Get the most up to date node ref for the active draggable


    const node = activeNode == null ? void 0 : activeNode.node.current;

    if (!node || node.isConnected === false) {
      // Return early if there is no attached node ref or if the node is
      // disconnected from the document.
      return;
    }

    const rect = measure(node);
    const rectDelta = getRectDelta(rect, initialRect);

    if (!x) {
      rectDelta.x = 0;
    }

    if (!y) {
      rectDelta.y = 0;
    } // Only perform layout shift scroll compensation once


    initialized.current = true;

    if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
      const firstScrollableAncestor = getFirstScrollableAncestor(node);

      if (firstScrollableAncestor) {
        firstScrollableAncestor.scrollBy({
          top: rectDelta.y,
          left: rectDelta.x
        });
      }
    }
  }, [activeNode, x, y, initialRect, measure]);
}

const ActiveDraggableContext = /*#__PURE__*/(0,external_React_namespaceObject.createContext)({ ...defaultCoordinates,
  scaleX: 1,
  scaleY: 1
});
var Status;

(function (Status) {
  Status[Status["Uninitialized"] = 0] = "Uninitialized";
  Status[Status["Initializing"] = 1] = "Initializing";
  Status[Status["Initialized"] = 2] = "Initialized";
})(Status || (Status = {}));

const DndContext = /*#__PURE__*/(0,external_React_namespaceObject.memo)(function DndContext(_ref) {
  var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;

  let {
    id,
    accessibility,
    autoScroll = true,
    children,
    sensors = defaultSensors,
    collisionDetection = rectIntersection,
    measuring,
    modifiers,
    ...props
  } = _ref;
  const store = (0,external_React_namespaceObject.useReducer)(reducer, undefined, getInitialState);
  const [state, dispatch] = store;
  const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
  const [status, setStatus] = (0,external_React_namespaceObject.useState)(Status.Uninitialized);
  const isInitialized = status === Status.Initialized;
  const {
    draggable: {
      active: activeId,
      nodes: draggableNodes,
      translate
    },
    droppable: {
      containers: droppableContainers
    }
  } = state;
  const node = activeId != null ? draggableNodes.get(activeId) : null;
  const activeRects = (0,external_React_namespaceObject.useRef)({
    initial: null,
    translated: null
  });
  const active = (0,external_React_namespaceObject.useMemo)(() => {
    var _node$data;

    return activeId != null ? {
      id: activeId,
      // It's possible for the active node to unmount while dragging
      data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
      rect: activeRects
    } : null;
  }, [activeId, node]);
  const activeRef = (0,external_React_namespaceObject.useRef)(null);
  const [activeSensor, setActiveSensor] = (0,external_React_namespaceObject.useState)(null);
  const [activatorEvent, setActivatorEvent] = (0,external_React_namespaceObject.useState)(null);
  const latestProps = useLatestValue(props, Object.values(props));
  const draggableDescribedById = useUniqueId("DndDescribedBy", id);
  const enabledDroppableContainers = (0,external_React_namespaceObject.useMemo)(() => droppableContainers.getEnabled(), [droppableContainers]);
  const measuringConfiguration = useMeasuringConfiguration(measuring);
  const {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled
  } = useDroppableMeasuring(enabledDroppableContainers, {
    dragging: isInitialized,
    dependencies: [translate.x, translate.y],
    config: measuringConfiguration.droppable
  });
  const activeNode = useCachedNode(draggableNodes, activeId);
  const activationCoordinates = (0,external_React_namespaceObject.useMemo)(() => activatorEvent ? getEventCoordinates(activatorEvent) : null, [activatorEvent]);
  const autoScrollOptions = getAutoScrollerOptions();
  const initialActiveNodeRect = useInitialRect(activeNode, measuringConfiguration.draggable.measure);
  useLayoutShiftScrollCompensation({
    activeNode: activeId != null ? draggableNodes.get(activeId) : null,
    config: autoScrollOptions.layoutShiftCompensation,
    initialRect: initialActiveNodeRect,
    measure: measuringConfiguration.draggable.measure
  });
  const activeNodeRect = useRect(activeNode, measuringConfiguration.draggable.measure, initialActiveNodeRect);
  const containerNodeRect = useRect(activeNode ? activeNode.parentElement : null);
  const sensorContext = (0,external_React_namespaceObject.useRef)({
    activatorEvent: null,
    active: null,
    activeNode,
    collisionRect: null,
    collisions: null,
    droppableRects,
    draggableNodes,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  });
  const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
  const dragOverlay = useDragOverlayMeasuring({
    measure: measuringConfiguration.dragOverlay.measure
  }); // Use the rect of the drag overlay if it is mounted

  const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
  const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
  const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect); // The delta between the previous and new position of the draggable node
  // is only relevant when there is no drag overlay

  const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect); // Get the window rect of the dragging node

  const windowRect = useWindowRect(draggingNode ? getWindow(draggingNode) : null); // Get scrollable ancestors of the dragging node

  const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
  const scrollableAncestorRects = useRects(scrollableAncestors); // Apply modifiers

  const modifiedTranslate = applyModifiers(modifiers, {
    transform: {
      x: translate.x - nodeRectDelta.x,
      y: translate.y - nodeRectDelta.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect,
    over: sensorContext.current.over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  });
  const pointerCoordinates = activationCoordinates ? add(activationCoordinates, translate) : null;
  const scrollOffsets = useScrollOffsets(scrollableAncestors); // Represents the scroll delta since dragging was initiated

  const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets); // Represents the scroll delta since the last time the active node rect was measured

  const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [activeNodeRect]);
  const scrollAdjustedTranslate = add(modifiedTranslate, scrollAdjustment);
  const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
  const collisions = active && collisionRect ? collisionDetection({
    active,
    collisionRect,
    droppableRects,
    droppableContainers: enabledDroppableContainers,
    pointerCoordinates
  }) : null;
  const overId = getFirstCollision(collisions, 'id');
  const [over, setOver] = (0,external_React_namespaceObject.useState)(null); // When there is no drag overlay used, we need to account for the
  // window scroll delta

  const appliedTranslate = usesDragOverlay ? modifiedTranslate : add(modifiedTranslate, activeNodeScrollDelta);
  const transform = adjustScale(appliedTranslate, (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
  const activeSensorRef = (0,external_React_namespaceObject.useRef)(null);
  const instantiateSensor = (0,external_React_namespaceObject.useCallback)((event, _ref2) => {
    let {
      sensor: Sensor,
      options
    } = _ref2;

    if (activeRef.current == null) {
      return;
    }

    const activeNode = draggableNodes.get(activeRef.current);

    if (!activeNode) {
      return;
    }

    const activatorEvent = event.nativeEvent;
    const sensorInstance = new Sensor({
      active: activeRef.current,
      activeNode,
      event: activatorEvent,
      options,
      // Sensors need to be instantiated with refs for arguments that change over time
      // otherwise they are frozen in time with the stale arguments
      context: sensorContext,

      onAbort(id) {
        const draggableNode = draggableNodes.get(id);

        if (!draggableNode) {
          return;
        }

        const {
          onDragAbort
        } = latestProps.current;
        const event = {
          id
        };
        onDragAbort == null ? void 0 : onDragAbort(event);
        dispatchMonitorEvent({
          type: 'onDragAbort',
          event
        });
      },

      onPending(id, constraint, initialCoordinates, offset) {
        const draggableNode = draggableNodes.get(id);

        if (!draggableNode) {
          return;
        }

        const {
          onDragPending
        } = latestProps.current;
        const event = {
          id,
          constraint,
          initialCoordinates,
          offset
        };
        onDragPending == null ? void 0 : onDragPending(event);
        dispatchMonitorEvent({
          type: 'onDragPending',
          event
        });
      },

      onStart(initialCoordinates) {
        const id = activeRef.current;

        if (id == null) {
          return;
        }

        const draggableNode = draggableNodes.get(id);

        if (!draggableNode) {
          return;
        }

        const {
          onDragStart
        } = latestProps.current;
        const event = {
          activatorEvent,
          active: {
            id,
            data: draggableNode.data,
            rect: activeRects
          }
        };
        (0,external_ReactDOM_namespaceObject.unstable_batchedUpdates)(() => {
          onDragStart == null ? void 0 : onDragStart(event);
          setStatus(Status.Initializing);
          dispatch({
            type: Action.DragStart,
            initialCoordinates,
            active: id
          });
          dispatchMonitorEvent({
            type: 'onDragStart',
            event
          });
          setActiveSensor(activeSensorRef.current);
          setActivatorEvent(activatorEvent);
        });
      },

      onMove(coordinates) {
        dispatch({
          type: Action.DragMove,
          coordinates
        });
      },

      onEnd: createHandler(Action.DragEnd),
      onCancel: createHandler(Action.DragCancel)
    });
    activeSensorRef.current = sensorInstance;

    function createHandler(type) {
      return async function handler() {
        const {
          active,
          collisions,
          over,
          scrollAdjustedTranslate
        } = sensorContext.current;
        let event = null;

        if (active && scrollAdjustedTranslate) {
          const {
            cancelDrop
          } = latestProps.current;
          event = {
            activatorEvent,
            active: active,
            collisions,
            delta: scrollAdjustedTranslate,
            over
          };

          if (type === Action.DragEnd && typeof cancelDrop === 'function') {
            const shouldCancel = await Promise.resolve(cancelDrop(event));

            if (shouldCancel) {
              type = Action.DragCancel;
            }
          }
        }

        activeRef.current = null;
        (0,external_ReactDOM_namespaceObject.unstable_batchedUpdates)(() => {
          dispatch({
            type
          });
          setStatus(Status.Uninitialized);
          setOver(null);
          setActiveSensor(null);
          setActivatorEvent(null);
          activeSensorRef.current = null;
          const eventName = type === Action.DragEnd ? 'onDragEnd' : 'onDragCancel';

          if (event) {
            const handler = latestProps.current[eventName];
            handler == null ? void 0 : handler(event);
            dispatchMonitorEvent({
              type: eventName,
              event
            });
          }
        });
      };
    }
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [draggableNodes]);
  const bindActivatorToSensorInstantiator = (0,external_React_namespaceObject.useCallback)((handler, sensor) => {
    return (event, active) => {
      const nativeEvent = event.nativeEvent;
      const activeDraggableNode = draggableNodes.get(active);

      if ( // Another sensor is already instantiating
      activeRef.current !== null || // No active draggable
      !activeDraggableNode || // Event has already been captured
      nativeEvent.dndKit || nativeEvent.defaultPrevented) {
        return;
      }

      const activationContext = {
        active: activeDraggableNode
      };
      const shouldActivate = handler(event, sensor.options, activationContext);

      if (shouldActivate === true) {
        nativeEvent.dndKit = {
          capturedBy: sensor.sensor
        };
        activeRef.current = active;
        instantiateSensor(event, sensor);
      }
    };
  }, [draggableNodes, instantiateSensor]);
  const activators = useCombineActivators(sensors, bindActivatorToSensorInstantiator);
  useSensorSetup(sensors);
  useIsomorphicLayoutEffect(() => {
    if (activeNodeRect && status === Status.Initializing) {
      setStatus(Status.Initialized);
    }
  }, [activeNodeRect, status]);
  (0,external_React_namespaceObject.useEffect)(() => {
    const {
      onDragMove
    } = latestProps.current;
    const {
      active,
      activatorEvent,
      collisions,
      over
    } = sensorContext.current;

    if (!active || !activatorEvent) {
      return;
    }

    const event = {
      active,
      activatorEvent,
      collisions,
      delta: {
        x: scrollAdjustedTranslate.x,
        y: scrollAdjustedTranslate.y
      },
      over
    };
    (0,external_ReactDOM_namespaceObject.unstable_batchedUpdates)(() => {
      onDragMove == null ? void 0 : onDragMove(event);
      dispatchMonitorEvent({
        type: 'onDragMove',
        event
      });
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]);
  (0,external_React_namespaceObject.useEffect)(() => {
    const {
      active,
      activatorEvent,
      collisions,
      droppableContainers,
      scrollAdjustedTranslate
    } = sensorContext.current;

    if (!active || activeRef.current == null || !activatorEvent || !scrollAdjustedTranslate) {
      return;
    }

    const {
      onDragOver
    } = latestProps.current;
    const overContainer = droppableContainers.get(overId);
    const over = overContainer && overContainer.rect.current ? {
      id: overContainer.id,
      rect: overContainer.rect.current,
      data: overContainer.data,
      disabled: overContainer.disabled
    } : null;
    const event = {
      active,
      activatorEvent,
      collisions,
      delta: {
        x: scrollAdjustedTranslate.x,
        y: scrollAdjustedTranslate.y
      },
      over
    };
    (0,external_ReactDOM_namespaceObject.unstable_batchedUpdates)(() => {
      setOver(over);
      onDragOver == null ? void 0 : onDragOver(event);
      dispatchMonitorEvent({
        type: 'onDragOver',
        event
      });
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [overId]);
  useIsomorphicLayoutEffect(() => {
    sensorContext.current = {
      activatorEvent,
      active,
      activeNode,
      collisionRect,
      collisions,
      droppableRects,
      draggableNodes,
      draggingNode,
      draggingNodeRect,
      droppableContainers,
      over,
      scrollableAncestors,
      scrollAdjustedTranslate
    };
    activeRects.current = {
      initial: draggingNodeRect,
      translated: collisionRect
    };
  }, [active, activeNode, collisions, collisionRect, draggableNodes, draggingNode, draggingNodeRect, droppableRects, droppableContainers, over, scrollableAncestors, scrollAdjustedTranslate]);
  useAutoScroller({ ...autoScrollOptions,
    delta: translate,
    draggingRect: collisionRect,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects
  });
  const publicContext = (0,external_React_namespaceObject.useMemo)(() => {
    const context = {
      active,
      activeNode,
      activeNodeRect,
      activatorEvent,
      collisions,
      containerNodeRect,
      dragOverlay,
      draggableNodes,
      droppableContainers,
      droppableRects,
      over,
      measureDroppableContainers,
      scrollableAncestors,
      scrollableAncestorRects,
      measuringConfiguration,
      measuringScheduled,
      windowRect
    };
    return context;
  }, [active, activeNode, activeNodeRect, activatorEvent, collisions, containerNodeRect, dragOverlay, draggableNodes, droppableContainers, droppableRects, over, measureDroppableContainers, scrollableAncestors, scrollableAncestorRects, measuringConfiguration, measuringScheduled, windowRect]);
  const internalContext = (0,external_React_namespaceObject.useMemo)(() => {
    const context = {
      activatorEvent,
      activators,
      active,
      activeNodeRect,
      ariaDescribedById: {
        draggable: draggableDescribedById
      },
      dispatch,
      draggableNodes,
      over,
      measureDroppableContainers
    };
    return context;
  }, [activatorEvent, activators, active, activeNodeRect, dispatch, draggableDescribedById, draggableNodes, over, measureDroppableContainers]);
  return external_React_default().createElement(DndMonitorContext.Provider, {
    value: registerMonitorListener
  }, external_React_default().createElement(InternalContext.Provider, {
    value: internalContext
  }, external_React_default().createElement(PublicContext.Provider, {
    value: publicContext
  }, external_React_default().createElement(ActiveDraggableContext.Provider, {
    value: transform
  }, children)), external_React_default().createElement(RestoreFocus, {
    disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false
  })), external_React_default().createElement(Accessibility, { ...accessibility,
    hiddenTextDescribedById: draggableDescribedById
  }));

  function getAutoScrollerOptions() {
    const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
    const autoScrollGloballyDisabled = typeof autoScroll === 'object' ? autoScroll.enabled === false : autoScroll === false;
    const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;

    if (typeof autoScroll === 'object') {
      return { ...autoScroll,
        enabled
      };
    }

    return {
      enabled
    };
  }
});

const NullContext = /*#__PURE__*/(0,external_React_namespaceObject.createContext)(null);
const defaultRole = 'button';
const ID_PREFIX = 'Draggable';
function useDraggable(_ref) {
  let {
    id,
    data,
    disabled = false,
    attributes
  } = _ref;
  const key = useUniqueId(ID_PREFIX);
  const {
    activators,
    activatorEvent,
    active,
    activeNodeRect,
    ariaDescribedById,
    draggableNodes,
    over
  } = (0,external_React_namespaceObject.useContext)(InternalContext);
  const {
    role = defaultRole,
    roleDescription = 'draggable',
    tabIndex = 0
  } = attributes != null ? attributes : {};
  const isDragging = (active == null ? void 0 : active.id) === id;
  const transform = (0,external_React_namespaceObject.useContext)(isDragging ? ActiveDraggableContext : NullContext);
  const [node, setNodeRef] = useNodeRef();
  const [activatorNode, setActivatorNodeRef] = useNodeRef();
  const listeners = useSyntheticListeners(activators, id);
  const dataRef = useLatestValue(data);
  useIsomorphicLayoutEffect(() => {
    draggableNodes.set(id, {
      id,
      key,
      node,
      activatorNode,
      data: dataRef
    });
    return () => {
      const node = draggableNodes.get(id);

      if (node && node.key === key) {
        draggableNodes.delete(id);
      }
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [draggableNodes, id]);
  const memoizedAttributes = (0,external_React_namespaceObject.useMemo)(() => ({
    role,
    tabIndex,
    'aria-disabled': disabled,
    'aria-pressed': isDragging && role === defaultRole ? true : undefined,
    'aria-roledescription': roleDescription,
    'aria-describedby': ariaDescribedById.draggable
  }), [disabled, role, tabIndex, isDragging, roleDescription, ariaDescribedById.draggable]);
  return {
    active,
    activatorEvent,
    activeNodeRect,
    attributes: memoizedAttributes,
    isDragging,
    listeners: disabled ? undefined : listeners,
    node,
    over,
    setNodeRef,
    setActivatorNodeRef,
    transform
  };
}

function useDndContext() {
  return (0,external_React_namespaceObject.useContext)(PublicContext);
}

const ID_PREFIX$1 = 'Droppable';
const defaultResizeObserverConfig = {
  timeout: 25
};
function useDroppable(_ref) {
  let {
    data,
    disabled = false,
    id,
    resizeObserverConfig
  } = _ref;
  const key = useUniqueId(ID_PREFIX$1);
  const {
    active,
    dispatch,
    over,
    measureDroppableContainers
  } = (0,external_React_namespaceObject.useContext)(InternalContext);
  const previous = (0,external_React_namespaceObject.useRef)({
    disabled
  });
  const resizeObserverConnected = (0,external_React_namespaceObject.useRef)(false);
  const rect = (0,external_React_namespaceObject.useRef)(null);
  const callbackId = (0,external_React_namespaceObject.useRef)(null);
  const {
    disabled: resizeObserverDisabled,
    updateMeasurementsFor,
    timeout: resizeObserverTimeout
  } = { ...defaultResizeObserverConfig,
    ...resizeObserverConfig
  };
  const ids = useLatestValue(updateMeasurementsFor != null ? updateMeasurementsFor : id);
  const handleResize = (0,external_React_namespaceObject.useCallback)(() => {
    if (!resizeObserverConnected.current) {
      // ResizeObserver invokes the `handleResize` callback as soon as `observe` is called,
      // assuming the element is rendered and displayed.
      resizeObserverConnected.current = true;
      return;
    }

    if (callbackId.current != null) {
      clearTimeout(callbackId.current);
    }

    callbackId.current = setTimeout(() => {
      measureDroppableContainers(Array.isArray(ids.current) ? ids.current : [ids.current]);
      callbackId.current = null;
    }, resizeObserverTimeout);
  }, //eslint-disable-next-line react-hooks/exhaustive-deps
  [resizeObserverTimeout]);
  const resizeObserver = useResizeObserver({
    callback: handleResize,
    disabled: resizeObserverDisabled || !active
  });
  const handleNodeChange = (0,external_React_namespaceObject.useCallback)((newElement, previousElement) => {
    if (!resizeObserver) {
      return;
    }

    if (previousElement) {
      resizeObserver.unobserve(previousElement);
      resizeObserverConnected.current = false;
    }

    if (newElement) {
      resizeObserver.observe(newElement);
    }
  }, [resizeObserver]);
  const [nodeRef, setNodeRef] = useNodeRef(handleNodeChange);
  const dataRef = useLatestValue(data);
  (0,external_React_namespaceObject.useEffect)(() => {
    if (!resizeObserver || !nodeRef.current) {
      return;
    }

    resizeObserver.disconnect();
    resizeObserverConnected.current = false;
    resizeObserver.observe(nodeRef.current);
  }, [nodeRef, resizeObserver]);
  (0,external_React_namespaceObject.useEffect)(() => {
    dispatch({
      type: Action.RegisterDroppable,
      element: {
        id,
        key,
        disabled,
        node: nodeRef,
        rect,
        data: dataRef
      }
    });
    return () => dispatch({
      type: Action.UnregisterDroppable,
      key,
      id
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [id]);
  (0,external_React_namespaceObject.useEffect)(() => {
    if (disabled !== previous.current.disabled) {
      dispatch({
        type: Action.SetDroppableDisabled,
        id,
        key,
        disabled
      });
      previous.current.disabled = disabled;
    }
  }, [id, key, disabled, dispatch]);
  return {
    active,
    rect,
    isOver: (over == null ? void 0 : over.id) === id,
    node: nodeRef,
    over,
    setNodeRef
  };
}

function AnimationManager(_ref) {
  let {
    animation,
    children
  } = _ref;
  const [clonedChildren, setClonedChildren] = useState(null);
  const [element, setElement] = useState(null);
  const previousChildren = core_esm_usePrevious(children);

  if (!children && !clonedChildren && previousChildren) {
    setClonedChildren(previousChildren);
  }

  core_esm_useIsomorphicLayoutEffect(() => {
    if (!element) {
      return;
    }

    const key = clonedChildren == null ? void 0 : clonedChildren.key;
    const id = clonedChildren == null ? void 0 : clonedChildren.props.id;

    if (key == null || id == null) {
      setClonedChildren(null);
      return;
    }

    Promise.resolve(animation(id, element)).then(() => {
      setClonedChildren(null);
    });
  }, [animation, clonedChildren, element]);
  return React.createElement(React.Fragment, null, children, clonedChildren ? cloneElement(clonedChildren, {
    ref: setElement
  }) : null);
}

const defaultTransform = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function NullifiedContextProvider(_ref) {
  let {
    children
  } = _ref;
  return React.createElement(InternalContext.Provider, {
    value: defaultInternalContext
  }, React.createElement(ActiveDraggableContext.Provider, {
    value: defaultTransform
  }, children));
}

const baseStyles = {
  position: 'fixed',
  touchAction: 'none'
};

const defaultTransition = activatorEvent => {
  const isKeyboardActivator = core_esm_isKeyboardEvent(activatorEvent);
  return isKeyboardActivator ? 'transform 250ms ease' : undefined;
};

const PositionedOverlay = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef((_ref, ref) => {
  let {
    as,
    activatorEvent,
    adjustScale,
    children,
    className,
    rect,
    style,
    transform,
    transition = defaultTransition
  } = _ref;

  if (!rect) {
    return null;
  }

  const scaleAdjustedTransform = adjustScale ? transform : { ...transform,
    scaleX: 1,
    scaleY: 1
  };
  const styles = { ...baseStyles,
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    transform: core_esm_CSS.Transform.toString(scaleAdjustedTransform),
    transformOrigin: adjustScale && activatorEvent ? getRelativeTransformOrigin(activatorEvent, rect) : undefined,
    transition: typeof transition === 'function' ? transition(activatorEvent) : transition,
    ...style
  };
  return React.createElement(as, {
    className,
    style: styles,
    ref
  }, children);
})));

const defaultDropAnimationSideEffects = options => _ref => {
  let {
    active,
    dragOverlay
  } = _ref;
  const originalStyles = {};
  const {
    styles,
    className
  } = options;

  if (styles != null && styles.active) {
    for (const [key, value] of Object.entries(styles.active)) {
      if (value === undefined) {
        continue;
      }

      originalStyles[key] = active.node.style.getPropertyValue(key);
      active.node.style.setProperty(key, value);
    }
  }

  if (styles != null && styles.dragOverlay) {
    for (const [key, value] of Object.entries(styles.dragOverlay)) {
      if (value === undefined) {
        continue;
      }

      dragOverlay.node.style.setProperty(key, value);
    }
  }

  if (className != null && className.active) {
    active.node.classList.add(className.active);
  }

  if (className != null && className.dragOverlay) {
    dragOverlay.node.classList.add(className.dragOverlay);
  }

  return function cleanup() {
    for (const [key, value] of Object.entries(originalStyles)) {
      active.node.style.setProperty(key, value);
    }

    if (className != null && className.active) {
      active.node.classList.remove(className.active);
    }
  };
};

const defaultKeyframeResolver = _ref2 => {
  let {
    transform: {
      initial,
      final
    }
  } = _ref2;
  return [{
    transform: CSS.Transform.toString(initial)
  }, {
    transform: CSS.Transform.toString(final)
  }];
};

const defaultDropAnimationConfiguration = {
  duration: 250,
  easing: 'ease',
  keyframes: defaultKeyframeResolver,
  sideEffects: /*#__PURE__*/defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0'
      }
    }
  })
};
function useDropAnimation(_ref3) {
  let {
    config,
    draggableNodes,
    droppableContainers,
    measuringConfiguration
  } = _ref3;
  return core_esm_useEvent((id, node) => {
    if (config === null) {
      return;
    }

    const activeDraggable = draggableNodes.get(id);

    if (!activeDraggable) {
      return;
    }

    const activeNode = activeDraggable.node.current;

    if (!activeNode) {
      return;
    }

    const measurableNode = getMeasurableNode(node);

    if (!measurableNode) {
      return;
    }

    const {
      transform
    } = core_esm_getWindow(node).getComputedStyle(node);
    const parsedTransform = parseTransform(transform);

    if (!parsedTransform) {
      return;
    }

    const animation = typeof config === 'function' ? config : createDefaultDropAnimation(config);
    scrollIntoViewIfNeeded(activeNode, measuringConfiguration.draggable.measure);
    return animation({
      active: {
        id,
        data: activeDraggable.data,
        node: activeNode,
        rect: measuringConfiguration.draggable.measure(activeNode)
      },
      draggableNodes,
      dragOverlay: {
        node,
        rect: measuringConfiguration.dragOverlay.measure(measurableNode)
      },
      droppableContainers,
      measuringConfiguration,
      transform: parsedTransform
    });
  });
}

function createDefaultDropAnimation(options) {
  const {
    duration,
    easing,
    sideEffects,
    keyframes
  } = { ...defaultDropAnimationConfiguration,
    ...options
  };
  return _ref4 => {
    let {
      active,
      dragOverlay,
      transform,
      ...rest
    } = _ref4;

    if (!duration) {
      // Do not animate if animation duration is zero.
      return;
    }

    const delta = {
      x: dragOverlay.rect.left - active.rect.left,
      y: dragOverlay.rect.top - active.rect.top
    };
    const scale = {
      scaleX: transform.scaleX !== 1 ? active.rect.width * transform.scaleX / dragOverlay.rect.width : 1,
      scaleY: transform.scaleY !== 1 ? active.rect.height * transform.scaleY / dragOverlay.rect.height : 1
    };
    const finalTransform = {
      x: transform.x - delta.x,
      y: transform.y - delta.y,
      ...scale
    };
    const animationKeyframes = keyframes({ ...rest,
      active,
      dragOverlay,
      transform: {
        initial: transform,
        final: finalTransform
      }
    });
    const [firstKeyframe] = animationKeyframes;
    const lastKeyframe = animationKeyframes[animationKeyframes.length - 1];

    if (JSON.stringify(firstKeyframe) === JSON.stringify(lastKeyframe)) {
      // The start and end keyframes are the same, infer that there is no animation needed.
      return;
    }

    const cleanup = sideEffects == null ? void 0 : sideEffects({
      active,
      dragOverlay,
      ...rest
    });
    const animation = dragOverlay.node.animate(animationKeyframes, {
      duration,
      easing,
      fill: 'forwards'
    });
    return new Promise(resolve => {
      animation.onfinish = () => {
        cleanup == null ? void 0 : cleanup();
        resolve();
      };
    });
  };
}

let key = 0;
function useKey(id) {
  return useMemo(() => {
    if (id == null) {
      return;
    }

    key++;
    return key;
  }, [id]);
}

const DragOverlay = /*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(_ref => {
  let {
    adjustScale = false,
    children,
    dropAnimation: dropAnimationConfig,
    style,
    transition,
    modifiers,
    wrapperElement = 'div',
    className,
    zIndex = 999
  } = _ref;
  const {
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggableNodes,
    droppableContainers,
    dragOverlay,
    over,
    measuringConfiguration,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  } = useDndContext();
  const transform = useContext(ActiveDraggableContext);
  const key = useKey(active == null ? void 0 : active.id);
  const modifiedTransform = applyModifiers(modifiers, {
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect: dragOverlay.rect,
    over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    transform,
    windowRect
  });
  const initialRect = useInitialValue(activeNodeRect);
  const dropAnimation = useDropAnimation({
    config: dropAnimationConfig,
    draggableNodes,
    droppableContainers,
    measuringConfiguration
  }); // We need to wait for the active node to be measured before connecting the drag overlay ref
  // otherwise collisions can be computed against a mispositioned drag overlay

  const ref = initialRect ? dragOverlay.setRef : undefined;
  return React.createElement(NullifiedContextProvider, null, React.createElement(AnimationManager, {
    animation: dropAnimation
  }, active && key ? React.createElement(PositionedOverlay, {
    key: key,
    id: active.id,
    ref: ref,
    as: wrapperElement,
    activatorEvent: activatorEvent,
    adjustScale: adjustScale,
    className: className,
    transition: transition,
    rect: initialRect,
    style: {
      zIndex,
      ...style
    },
    transform: modifiedTransform
  }, children) : null));
})));


//# sourceMappingURL=core.esm.js.map

;// ./node_modules/@dnd-kit/sortable/dist/sortable.esm.js




/**
 * Move an array item to a different position. Returns a new array with the item moved to the new position.
 */
function arrayMove(array, from, to) {
  const newArray = array.slice();
  newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
  return newArray;
}

/**
 * Swap an array item to a different position. Returns a new array with the item swapped to the new position.
 */
function arraySwap(array, from, to) {
  const newArray = array.slice();
  newArray[from] = array[to];
  newArray[to] = array[from];
  return newArray;
}

function getSortedRects(items, rects) {
  return items.reduce((accumulator, id, index) => {
    const rect = rects.get(id);

    if (rect) {
      accumulator[index] = rect;
    }

    return accumulator;
  }, Array(items.length));
}

function isValidIndex(index) {
  return index !== null && index >= 0;
}

function itemsEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

function normalizeDisabled(disabled) {
  if (typeof disabled === 'boolean') {
    return {
      draggable: disabled,
      droppable: disabled
    };
  }

  return disabled;
}

// To-do: We should be calculating scale transformation
const defaultScale = {
  scaleX: 1,
  scaleY: 1
};
const horizontalListSortingStrategy = _ref => {
  var _rects$activeIndex;

  let {
    rects,
    activeNodeRect: fallbackActiveRect,
    activeIndex,
    overIndex,
    index
  } = _ref;
  const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;

  if (!activeNodeRect) {
    return null;
  }

  const itemGap = getItemGap(rects, index, activeIndex);

  if (index === activeIndex) {
    const newIndexRect = rects[overIndex];

    if (!newIndexRect) {
      return null;
    }

    return {
      x: activeIndex < overIndex ? newIndexRect.left + newIndexRect.width - (activeNodeRect.left + activeNodeRect.width) : newIndexRect.left - activeNodeRect.left,
      y: 0,
      ...defaultScale
    };
  }

  if (index > activeIndex && index <= overIndex) {
    return {
      x: -activeNodeRect.width - itemGap,
      y: 0,
      ...defaultScale
    };
  }

  if (index < activeIndex && index >= overIndex) {
    return {
      x: activeNodeRect.width + itemGap,
      y: 0,
      ...defaultScale
    };
  }

  return {
    x: 0,
    y: 0,
    ...defaultScale
  };
};

function getItemGap(rects, index, activeIndex) {
  const currentRect = rects[index];
  const previousRect = rects[index - 1];
  const nextRect = rects[index + 1];

  if (!currentRect || !previousRect && !nextRect) {
    return 0;
  }

  if (activeIndex < index) {
    return previousRect ? currentRect.left - (previousRect.left + previousRect.width) : nextRect.left - (currentRect.left + currentRect.width);
  }

  return nextRect ? nextRect.left - (currentRect.left + currentRect.width) : currentRect.left - (previousRect.left + previousRect.width);
}

const rectSortingStrategy = _ref => {
  let {
    rects,
    activeIndex,
    overIndex,
    index
  } = _ref;
  const newRects = arrayMove(rects, overIndex, activeIndex);
  const oldRect = rects[index];
  const newRect = newRects[index];

  if (!newRect || !oldRect) {
    return null;
  }

  return {
    x: newRect.left - oldRect.left,
    y: newRect.top - oldRect.top,
    scaleX: newRect.width / oldRect.width,
    scaleY: newRect.height / oldRect.height
  };
};

const rectSwappingStrategy = _ref => {
  let {
    activeIndex,
    index,
    rects,
    overIndex
  } = _ref;
  let oldRect;
  let newRect;

  if (index === activeIndex) {
    oldRect = rects[index];
    newRect = rects[overIndex];
  }

  if (index === overIndex) {
    oldRect = rects[index];
    newRect = rects[activeIndex];
  }

  if (!newRect || !oldRect) {
    return null;
  }

  return {
    x: newRect.left - oldRect.left,
    y: newRect.top - oldRect.top,
    scaleX: newRect.width / oldRect.width,
    scaleY: newRect.height / oldRect.height
  };
};

// To-do: We should be calculating scale transformation
const defaultScale$1 = {
  scaleX: 1,
  scaleY: 1
};
const verticalListSortingStrategy = _ref => {
  var _rects$activeIndex;

  let {
    activeIndex,
    activeNodeRect: fallbackActiveRect,
    index,
    rects,
    overIndex
  } = _ref;
  const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;

  if (!activeNodeRect) {
    return null;
  }

  if (index === activeIndex) {
    const overIndexRect = rects[overIndex];

    if (!overIndexRect) {
      return null;
    }

    return {
      x: 0,
      y: activeIndex < overIndex ? overIndexRect.top + overIndexRect.height - (activeNodeRect.top + activeNodeRect.height) : overIndexRect.top - activeNodeRect.top,
      ...defaultScale$1
    };
  }

  const itemGap = getItemGap$1(rects, index, activeIndex);

  if (index > activeIndex && index <= overIndex) {
    return {
      x: 0,
      y: -activeNodeRect.height - itemGap,
      ...defaultScale$1
    };
  }

  if (index < activeIndex && index >= overIndex) {
    return {
      x: 0,
      y: activeNodeRect.height + itemGap,
      ...defaultScale$1
    };
  }

  return {
    x: 0,
    y: 0,
    ...defaultScale$1
  };
};

function getItemGap$1(clientRects, index, activeIndex) {
  const currentRect = clientRects[index];
  const previousRect = clientRects[index - 1];
  const nextRect = clientRects[index + 1];

  if (!currentRect) {
    return 0;
  }

  if (activeIndex < index) {
    return previousRect ? currentRect.top - (previousRect.top + previousRect.height) : nextRect ? nextRect.top - (currentRect.top + currentRect.height) : 0;
  }

  return nextRect ? nextRect.top - (currentRect.top + currentRect.height) : previousRect ? currentRect.top - (previousRect.top + previousRect.height) : 0;
}

const sortable_esm_ID_PREFIX = 'Sortable';
const Context = /*#__PURE__*/external_React_default().createContext({
  activeIndex: -1,
  containerId: sortable_esm_ID_PREFIX,
  disableTransforms: false,
  items: [],
  overIndex: -1,
  useDragOverlay: false,
  sortedRects: [],
  strategy: rectSortingStrategy,
  disabled: {
    draggable: false,
    droppable: false
  }
});
function SortableContext(_ref) {
  let {
    children,
    id,
    items: userDefinedItems,
    strategy = rectSortingStrategy,
    disabled: disabledProp = false
  } = _ref;
  const {
    active,
    dragOverlay,
    droppableRects,
    over,
    measureDroppableContainers
  } = useDndContext();
  const containerId = useUniqueId(sortable_esm_ID_PREFIX, id);
  const useDragOverlay = Boolean(dragOverlay.rect !== null);
  const items = (0,external_React_namespaceObject.useMemo)(() => userDefinedItems.map(item => typeof item === 'object' && 'id' in item ? item.id : item), [userDefinedItems]);
  const isDragging = active != null;
  const activeIndex = active ? items.indexOf(active.id) : -1;
  const overIndex = over ? items.indexOf(over.id) : -1;
  const previousItemsRef = (0,external_React_namespaceObject.useRef)(items);
  const itemsHaveChanged = !itemsEqual(items, previousItemsRef.current);
  const disableTransforms = overIndex !== -1 && activeIndex === -1 || itemsHaveChanged;
  const disabled = normalizeDisabled(disabledProp);
  useIsomorphicLayoutEffect(() => {
    if (itemsHaveChanged && isDragging) {
      measureDroppableContainers(items);
    }
  }, [itemsHaveChanged, items, isDragging, measureDroppableContainers]);
  (0,external_React_namespaceObject.useEffect)(() => {
    previousItemsRef.current = items;
  }, [items]);
  const contextValue = (0,external_React_namespaceObject.useMemo)(() => ({
    activeIndex,
    containerId,
    disabled,
    disableTransforms,
    items,
    overIndex,
    useDragOverlay,
    sortedRects: getSortedRects(items, droppableRects),
    strategy
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [activeIndex, containerId, disabled.draggable, disabled.droppable, disableTransforms, items, overIndex, droppableRects, useDragOverlay, strategy]);
  return external_React_default().createElement(Context.Provider, {
    value: contextValue
  }, children);
}

const defaultNewIndexGetter = _ref => {
  let {
    id,
    items,
    activeIndex,
    overIndex
  } = _ref;
  return arrayMove(items, activeIndex, overIndex).indexOf(id);
};
const defaultAnimateLayoutChanges = _ref2 => {
  let {
    containerId,
    isSorting,
    wasDragging,
    index,
    items,
    newIndex,
    previousItems,
    previousContainerId,
    transition
  } = _ref2;

  if (!transition || !wasDragging) {
    return false;
  }

  if (previousItems !== items && index === newIndex) {
    return false;
  }

  if (isSorting) {
    return true;
  }

  return newIndex !== index && containerId === previousContainerId;
};
const sortable_esm_defaultTransition = {
  duration: 200,
  easing: 'ease'
};
const transitionProperty = 'transform';
const disabledTransition = /*#__PURE__*/CSS.Transition.toString({
  property: transitionProperty,
  duration: 0,
  easing: 'linear'
});
const defaultAttributes = {
  roleDescription: 'sortable'
};

/*
 * When the index of an item changes while sorting,
 * we need to temporarily disable the transforms
 */

function useDerivedTransform(_ref) {
  let {
    disabled,
    index,
    node,
    rect
  } = _ref;
  const [derivedTransform, setDerivedtransform] = (0,external_React_namespaceObject.useState)(null);
  const previousIndex = (0,external_React_namespaceObject.useRef)(index);
  useIsomorphicLayoutEffect(() => {
    if (!disabled && index !== previousIndex.current && node.current) {
      const initial = rect.current;

      if (initial) {
        const current = getClientRect(node.current, {
          ignoreTransform: true
        });
        const delta = {
          x: initial.left - current.left,
          y: initial.top - current.top,
          scaleX: initial.width / current.width,
          scaleY: initial.height / current.height
        };

        if (delta.x || delta.y) {
          setDerivedtransform(delta);
        }
      }
    }

    if (index !== previousIndex.current) {
      previousIndex.current = index;
    }
  }, [disabled, index, node, rect]);
  (0,external_React_namespaceObject.useEffect)(() => {
    if (derivedTransform) {
      setDerivedtransform(null);
    }
  }, [derivedTransform]);
  return derivedTransform;
}

function useSortable(_ref) {
  let {
    animateLayoutChanges = defaultAnimateLayoutChanges,
    attributes: userDefinedAttributes,
    disabled: localDisabled,
    data: customData,
    getNewIndex = defaultNewIndexGetter,
    id,
    strategy: localStrategy,
    resizeObserverConfig,
    transition = sortable_esm_defaultTransition
  } = _ref;
  const {
    items,
    containerId,
    activeIndex,
    disabled: globalDisabled,
    disableTransforms,
    sortedRects,
    overIndex,
    useDragOverlay,
    strategy: globalStrategy
  } = (0,external_React_namespaceObject.useContext)(Context);
  const disabled = normalizeLocalDisabled(localDisabled, globalDisabled);
  const index = items.indexOf(id);
  const data = (0,external_React_namespaceObject.useMemo)(() => ({
    sortable: {
      containerId,
      index,
      items
    },
    ...customData
  }), [containerId, customData, index, items]);
  const itemsAfterCurrentSortable = (0,external_React_namespaceObject.useMemo)(() => items.slice(items.indexOf(id)), [items, id]);
  const {
    rect,
    node,
    isOver,
    setNodeRef: setDroppableNodeRef
  } = useDroppable({
    id,
    data,
    disabled: disabled.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: itemsAfterCurrentSortable,
      ...resizeObserverConfig
    }
  });
  const {
    active,
    activatorEvent,
    activeNodeRect,
    attributes,
    setNodeRef: setDraggableNodeRef,
    listeners,
    isDragging,
    over,
    setActivatorNodeRef,
    transform
  } = useDraggable({
    id,
    data,
    attributes: { ...defaultAttributes,
      ...userDefinedAttributes
    },
    disabled: disabled.draggable
  });
  const setNodeRef = useCombinedRefs(setDroppableNodeRef, setDraggableNodeRef);
  const isSorting = Boolean(active);
  const displaceItem = isSorting && !disableTransforms && isValidIndex(activeIndex) && isValidIndex(overIndex);
  const shouldDisplaceDragSource = !useDragOverlay && isDragging;
  const dragSourceDisplacement = shouldDisplaceDragSource && displaceItem ? transform : null;
  const strategy = localStrategy != null ? localStrategy : globalStrategy;
  const finalTransform = displaceItem ? dragSourceDisplacement != null ? dragSourceDisplacement : strategy({
    rects: sortedRects,
    activeNodeRect,
    activeIndex,
    overIndex,
    index
  }) : null;
  const newIndex = isValidIndex(activeIndex) && isValidIndex(overIndex) ? getNewIndex({
    id,
    items,
    activeIndex,
    overIndex
  }) : index;
  const activeId = active == null ? void 0 : active.id;
  const previous = (0,external_React_namespaceObject.useRef)({
    activeId,
    items,
    newIndex,
    containerId
  });
  const itemsHaveChanged = items !== previous.current.items;
  const shouldAnimateLayoutChanges = animateLayoutChanges({
    active,
    containerId,
    isDragging,
    isSorting,
    id,
    index,
    items,
    newIndex: previous.current.newIndex,
    previousItems: previous.current.items,
    previousContainerId: previous.current.containerId,
    transition,
    wasDragging: previous.current.activeId != null
  });
  const derivedTransform = useDerivedTransform({
    disabled: !shouldAnimateLayoutChanges,
    index,
    node,
    rect
  });
  (0,external_React_namespaceObject.useEffect)(() => {
    if (isSorting && previous.current.newIndex !== newIndex) {
      previous.current.newIndex = newIndex;
    }

    if (containerId !== previous.current.containerId) {
      previous.current.containerId = containerId;
    }

    if (items !== previous.current.items) {
      previous.current.items = items;
    }
  }, [isSorting, newIndex, containerId, items]);
  (0,external_React_namespaceObject.useEffect)(() => {
    if (activeId === previous.current.activeId) {
      return;
    }

    if (activeId != null && previous.current.activeId == null) {
      previous.current.activeId = activeId;
      return;
    }

    const timeoutId = setTimeout(() => {
      previous.current.activeId = activeId;
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [activeId]);
  return {
    active,
    activeIndex,
    attributes,
    data,
    rect,
    index,
    newIndex,
    items,
    isOver,
    isSorting,
    isDragging,
    listeners,
    node,
    overIndex,
    over,
    setNodeRef,
    setActivatorNodeRef,
    setDroppableNodeRef,
    setDraggableNodeRef,
    transform: derivedTransform != null ? derivedTransform : finalTransform,
    transition: getTransition()
  };

  function getTransition() {
    if ( // Temporarily disable transitions for a single frame to set up derived transforms
    derivedTransform || // Or to prevent items jumping to back to their "new" position when items change
    itemsHaveChanged && previous.current.newIndex === index) {
      return disabledTransition;
    }

    if (shouldDisplaceDragSource && !isKeyboardEvent(activatorEvent) || !transition) {
      return undefined;
    }

    if (isSorting || shouldAnimateLayoutChanges) {
      return CSS.Transition.toString({ ...transition,
        property: transitionProperty
      });
    }

    return undefined;
  }
}

function normalizeLocalDisabled(localDisabled, globalDisabled) {
  var _localDisabled$dragga, _localDisabled$droppa;

  if (typeof localDisabled === 'boolean') {
    return {
      draggable: localDisabled,
      // Backwards compatibility
      droppable: false
    };
  }

  return {
    draggable: (_localDisabled$dragga = localDisabled == null ? void 0 : localDisabled.draggable) != null ? _localDisabled$dragga : globalDisabled.draggable,
    droppable: (_localDisabled$droppa = localDisabled == null ? void 0 : localDisabled.droppable) != null ? _localDisabled$droppa : globalDisabled.droppable
  };
}

function hasSortableData(entry) {
  if (!entry) {
    return false;
  }

  const data = entry.data.current;

  if (data && 'sortable' in data && typeof data.sortable === 'object' && 'containerId' in data.sortable && 'items' in data.sortable && 'index' in data.sortable) {
    return true;
  }

  return false;
}

const directions = [KeyboardCode.Down, KeyboardCode.Right, KeyboardCode.Up, KeyboardCode.Left];
const sortableKeyboardCoordinates = (event, _ref) => {
  let {
    context: {
      active,
      collisionRect,
      droppableRects,
      droppableContainers,
      over,
      scrollableAncestors
    }
  } = _ref;

  if (directions.includes(event.code)) {
    event.preventDefault();

    if (!active || !collisionRect) {
      return;
    }

    const filteredContainers = [];
    droppableContainers.getEnabled().forEach(entry => {
      if (!entry || entry != null && entry.disabled) {
        return;
      }

      const rect = droppableRects.get(entry.id);

      if (!rect) {
        return;
      }

      switch (event.code) {
        case KeyboardCode.Down:
          if (collisionRect.top < rect.top) {
            filteredContainers.push(entry);
          }

          break;

        case KeyboardCode.Up:
          if (collisionRect.top > rect.top) {
            filteredContainers.push(entry);
          }

          break;

        case KeyboardCode.Left:
          if (collisionRect.left > rect.left) {
            filteredContainers.push(entry);
          }

          break;

        case KeyboardCode.Right:
          if (collisionRect.left < rect.left) {
            filteredContainers.push(entry);
          }

          break;
      }
    });
    const collisions = closestCorners({
      active,
      collisionRect: collisionRect,
      droppableRects,
      droppableContainers: filteredContainers,
      pointerCoordinates: null
    });
    let closestId = getFirstCollision(collisions, 'id');

    if (closestId === (over == null ? void 0 : over.id) && collisions.length > 1) {
      closestId = collisions[1].id;
    }

    if (closestId != null) {
      const activeDroppable = droppableContainers.get(active.id);
      const newDroppable = droppableContainers.get(closestId);
      const newRect = newDroppable ? droppableRects.get(newDroppable.id) : null;
      const newNode = newDroppable == null ? void 0 : newDroppable.node.current;

      if (newNode && newRect && activeDroppable && newDroppable) {
        const newScrollAncestors = getScrollableAncestors(newNode);
        const hasDifferentScrollAncestors = newScrollAncestors.some((element, index) => scrollableAncestors[index] !== element);
        const hasSameContainer = isSameContainer(activeDroppable, newDroppable);
        const isAfterActive = isAfter(activeDroppable, newDroppable);
        const offset = hasDifferentScrollAncestors || !hasSameContainer ? {
          x: 0,
          y: 0
        } : {
          x: isAfterActive ? collisionRect.width - newRect.width : 0,
          y: isAfterActive ? collisionRect.height - newRect.height : 0
        };
        const rectCoordinates = {
          x: newRect.left,
          y: newRect.top
        };
        const newCoordinates = offset.x && offset.y ? rectCoordinates : subtract(rectCoordinates, offset);
        return newCoordinates;
      }
    }
  }

  return undefined;
};

function isSameContainer(a, b) {
  if (!hasSortableData(a) || !hasSortableData(b)) {
    return false;
  }

  return a.data.current.sortable.containerId === b.data.current.sortable.containerId;
}

function isAfter(a, b) {
  if (!hasSortableData(a) || !hasSortableData(b)) {
    return false;
  }

  if (!isSameContainer(a, b)) {
    return false;
  }

  return a.data.current.sortable.index < b.data.current.sortable.index;
}


//# sourceMappingURL=sortable.esm.js.map

;// ./src/backend/header-builder/TemplatesPanel.jsx
/**
 * Customify Templates Panel — React port of the legacy Save / Load / Remove
 * template UI for the header & footer builders.
 *
 * Mounts via createPortal into a placeholder rendered by the PHP custom_html
 * control inside the `{builderId}_templates` Customizer section. Initial
 * template list is read from the builder config localized on
 * window.Customify_Layout_Builder.builders.{id}.saved_templates.
 */




const AJAX_ACTION = 'customify_builder_save_template';
function encodeValue(value) {
  return encodeURI(JSON.stringify(value));
}

/**
 * Best-effort decode of a wp.customize setting value into a plain JS shape.
 *
 * Customify stores most settings as encodeURIComponent(JSON.stringify(value))
 * once the user edits them, but the initial value (loaded from theme_mod) is
 * the raw decoded shape. Try the URL+JSON path first, then plain JSON, then
 * fall back to the raw value (typical for plain string settings like colors).
 */
function decodeSettingValue(raw) {
  if (raw === null || raw === undefined) return raw;
  if (typeof raw === 'object') return raw;
  if (typeof raw !== 'string') return raw;
  try {
    return JSON.parse(decodeURIComponent(raw));
  } catch (_) {}
  try {
    return JSON.parse(raw);
  } catch (_) {}
  return raw;
}
function isEmptySetting(v) {
  if (v === null || v === undefined || v === '' || v === false) return true;
  if (Array.isArray(v)) return v.length === 0;
  if (typeof v === 'object') return Object.keys(v).length === 0;
  return false;
}
function postAjax(params) {
  const ajaxUrl = window.ajaxurl || '/wp-admin/admin-ajax.php';
  const body = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => body.set(k, v));
  return fetch(ajaxUrl, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: body.toString()
  }).then(r => r.json());
}
function TemplatesPanel({
  builderId,
  controlId,
  mountId,
  onApplyLayout,
  layoutSettingKey
}) {
  const [container, setContainer] = (0,external_wp_element_namespaceObject.useState)(() => document.getElementById(mountId));
  const [templates, setTemplates] = (0,external_wp_element_namespaceObject.useState)(() => window.Customify_Layout_Builder?.builders?.[builderId]?.saved_templates || {});
  const [name, setName] = (0,external_wp_element_namespaceObject.useState)('');
  const [saving, setSaving] = (0,external_wp_element_namespaceObject.useState)(false);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const el = document.getElementById(mountId);
    if (el) {
      setContainer(el);
      return;
    }
    const observer = new MutationObserver(() => {
      const found = document.getElementById(mountId);
      if (found) {
        setContainer(found);
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return () => observer.disconnect();
  }, [mountId]);
  if (!container) return null;
  const nonce = window.Customify_Layout_Builder?.nonce || '';
  const onSave = () => {
    const tplName = name.trim();
    if (!tplName || saving) return;

    // Capture the live wp.customize values for every builder setting — this
    // includes pending edits the user has not yet Published (which would be
    // invisible to a server-side get_theme_mod() call).
    const defaults = window.Customify_Layout_Builder?.builders?.[builderId]?.setting_defaults || {};
    const wpc = window.wp?.customize;
    const payload = {};
    if (wpc) {
      Object.keys(defaults).forEach(key => {
        const setting = wpc(key);
        if (!setting) return;
        const value = decodeSettingValue(setting.get?.());
        if (isEmptySetting(value)) return;
        payload[key] = value;
      });
    }
    setSaving(true);
    postAjax({
      action: AJAX_ACTION,
      name: tplName,
      id: builderId,
      control: controlId,
      nonce,
      data: JSON.stringify(payload)
    }).then(res => {
      setSaving(false);
      if (!res?.success) return;
      const {
        key_id: keyId,
        name: savedName,
        data
      } = res.data || {};
      if (!keyId) return;
      setTemplates(prev => {
        const rest = Object.fromEntries(Object.entries(prev).filter(([k]) => k !== keyId));
        return {
          [keyId]: {
            name: savedName,
            image: '',
            data: data || {}
          },
          ...rest
        };
      });
      setName('');
    }).catch(() => setSaving(false));
  };
  const onRemove = key => {
    const snapshot = templates;
    setTemplates(prev => {
      const next = {
        ...prev
      };
      delete next[key];
      return next;
    });
    postAjax({
      action: AJAX_ACTION,
      id: builderId,
      remove: key,
      nonce
    }).then(res => {
      if (!res?.success) setTemplates(snapshot);
    }).catch(() => setTemplates(snapshot));
  };
  const onLoad = tpl => {
    if (!window.wp?.customize) return;
    const wpc = window.wp.customize;
    const data = tpl?.data || {};
    const defaults = window.Customify_Layout_Builder?.builders?.[builderId]?.setting_defaults || {};

    // Loading a template fully replaces the builder state: every known builder
    // setting gets either the template's value (when present) or its default
    // (when absent).
    const allKeys = new Set([...Object.keys(defaults), ...Object.keys(data)]);
    allKeys.forEach(key => {
      const setting = wpc(key);
      if (!setting) return;
      const hasTemplateValue = Object.prototype.hasOwnProperty.call(data, key);
      const newValue = hasTemplateValue ? data[key] : defaults[key] ?? '';
      setting.set(encodeValue(newValue));
    });

    // Belt-and-braces: also push the layout payload into the Builder's React
    // state directly. wp.customize fires bind handlers on .set(), but we rely
    // on a deep-equal check inside that path which can no-op in subtle cases
    // (e.g. layout setting unchanged at the encoded-string level). The direct
    // callback guarantees the visible grid updates immediately.
    if (typeof onApplyLayout === 'function' && layoutSettingKey) {
      const layoutValue = Object.prototype.hasOwnProperty.call(data, layoutSettingKey) ? data[layoutSettingKey] : defaults[layoutSettingKey] ?? {};
      onApplyLayout(layoutValue);
    }
  };
  const entries = Object.entries(templates);
  const hasTemplates = entries.length > 0;
  return (0,external_wp_element_namespaceObject.createPortal)(/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "save-template-form",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("input", {
        type: "text",
        className: "template-input-name change-by-js",
        value: name,
        placeholder: (0,external_wp_i18n_namespaceObject.__)('Template name', 'customify'),
        onChange: e => setName(e.target.value),
        onKeyDown: e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            onSave();
          }
        },
        disabled: saving
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("button", {
        type: "button",
        className: "button button-secondary save-builder-template",
        onClick: onSave,
        disabled: saving || !name.trim(),
        children: saving ? (0,external_wp_i18n_namespaceObject.__)('Saving…', 'customify') : (0,external_wp_i18n_namespaceObject.__)('Save', 'customify')
      })]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
      className: "customize-control-title",
      children: (0,external_wp_i18n_namespaceObject.__)('Saved Templates', 'customify')
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("ul", {
      className: `list-saved-templates list-boxed ${hasTemplates ? 'has-templates' : 'no-templates'}`,
      children: [entries.map(([key, tpl]) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("li", {
        className: "saved_template li-boxed",
        "data-id": key,
        children: [tpl?.name || (0,external_wp_i18n_namespaceObject.__)('Untitled', 'customify'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("a", {
          href: "#",
          className: "load-tpl",
          onClick: e => {
            e.preventDefault();
            onLoad(tpl);
          },
          children: (0,external_wp_i18n_namespaceObject.__)('Load', 'customify')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("a", {
          href: "#",
          className: "remove-tpl",
          onClick: e => {
            e.preventDefault();
            onRemove(key);
          },
          children: (0,external_wp_i18n_namespaceObject.__)('Remove', 'customify')
        })]
      }, key)), !hasTemplates && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("li", {
        className: "no_template",
        children: (0,external_wp_i18n_namespaceObject.__)('No saved templates.', 'customify')
      })]
    })]
  }), container);
}
;// ./src/backend/header-builder/Builder.jsx
/**
 * Customify Layout Builder — generic React component tree (header & footer).
 *
 * Data flow:
 *   wp.customize Setting  ←read/write→  React state (normalizeData shape)
 *
 * JSON schema (stored in the builder's react_control_id setting):
 * {
 *   desktop: { <row>: { left:[{id}], center:[{id}], right:[{id}] }, … },
 *   mobile:  { <row>: {…}, sidebar: { sidebar:[{id}] } }   // header only
 * }
 * The setting value is stored as encodeURIComponent(JSON.stringify(data)).
 */










// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const COLS = ['left', 'center', 'right'];
const ALL_COLS = ['left', 'center', 'right', 'col4', 'col5'];

// ---------------------------------------------------------------------------
// wp.customize bridge
// ---------------------------------------------------------------------------

function parseValue(raw) {
  if (!raw) return {};
  if (typeof raw === 'object') return raw;
  try {
    return JSON.parse(decodeURIComponent(raw));
  } catch (_) {}
  try {
    return JSON.parse(raw);
  } catch (_) {}
  return {};
}
function readSetting(controlId) {
  try {
    const setting = wp.customize(controlId);
    return setting ? parseValue(setting.get()) : {};
  } catch (_) {
    return {};
  }
}
function writeSetting(data, controlId) {
  try {
    const setting = wp.customize(controlId);
    if (setting) {
      setting.set(encodeURIComponent(JSON.stringify(data)));
    }
  } catch (_) {}
}

// ---------------------------------------------------------------------------
// Data helpers
// ---------------------------------------------------------------------------

// Strip a raw items collection down to entries shaped like `{id: <non-empty string>}`.
// Mirrors `Customify_Layout_Builder_Frontend_V2::normalize_layout_items()` so the
// JS and PHP renderers can never disagree on what counts as a valid layout entry.
function normalizeItems(raw) {
  if (!Array.isArray(raw)) return [];
  const out = [];
  for (const item of raw) {
    if (item && typeof item === 'object' && typeof item.id === 'string' && item.id) {
      out.push({
        id: item.id
      });
    }
  }
  return out;
}
function normalizeData(raw, deviceIds, rows, hasSidebar) {
  const data = {};
  const safe = raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {};
  for (const dev of deviceIds) {
    data[dev] = {};
    const devData = safe[dev] && typeof safe[dev] === 'object' ? safe[dev] : {};
    for (const row of rows) {
      data[dev][row] = {};
      const rowData = devData[row] && typeof devData[row] === 'object' ? devData[row] : {};
      for (const col of ALL_COLS) {
        data[dev][row][col] = normalizeItems(rowData[col]);
      }
    }
  }
  if (hasSidebar) {
    data.mobile = data.mobile || {};
    const sidebar = safe?.mobile?.sidebar;
    const sidebarItems = sidebar && typeof sidebar === 'object' ? sidebar.sidebar : null;
    data.mobile.sidebar = {
      sidebar: normalizeItems(sidebarItems)
    };
  }
  return data;
}
function getAllPlacedIds(data) {
  const ids = new Set();
  for (const dev of Object.keys(data)) {
    for (const row of Object.keys(data[dev])) {
      for (const col of Object.keys(data[dev][row])) {
        for (const item of data[dev][row][col] || []) {
          ids.add(item.id);
        }
      }
    }
  }
  return ids;
}
function getDevicePlacedIds(data, device) {
  const ids = new Set();
  for (const row of Object.keys(data[device] || {})) {
    for (const col of Object.keys(data[device][row] || {})) {
      for (const item of data[device][row][col] || []) {
        ids.add(item.id);
      }
    }
  }
  return ids;
}
function permanentlyHideSection(section) {
  if (!section) return;
  section.active.set(false);
  // Store the handler on the section object so openSection can unbind it by reference.
  if (!section._customifyForceHide) {
    section._customifyForceHide = function (active) {
      if (active) section.active.set(false);
    };
  }
  section.active.bind(section._customifyForceHide);
}
function hideAllBuilderSections(allItems, infraSections, alwaysVisibleSections) {
  if (!wp?.customize?.section) return;
  for (const id of infraSections) {
    permanentlyHideSection(wp.customize.section(id));
  }
  for (const item of Object.values(allItems)) {
    // Hide the dedicated layout section (margin/padding/etc.) if present.
    if (item.layout_section) {
      permanentlyHideSection(wp.customize.section(item.layout_section));
    }
    if (!item.section || alwaysVisibleSections.has(item.section)) continue;
    permanentlyHideSection(wp.customize.section(item.section));
  }
}

// ---------------------------------------------------------------------------
// Builder (root)
// ---------------------------------------------------------------------------

function Builder({
  config
}) {
  const builderId = config?.id || 'header';
  const panelId = config?.panel || 'header_settings';
  const controlId = config?.react_control_id || config?.control_id || 'header_builder_panel_v2';
  const allItems = config?.items || {};
  const rowLabels = config?.rows || {};
  const rowLayoutKeys = config?.row_layout_keys || {};
  const deviceMap = config?.devices || {
    desktop: (0,external_wp_i18n_namespaceObject.__)('Desktop', 'customify'),
    mobile: (0,external_wp_i18n_namespaceObject.__)('Mobile / Tablet', 'customify')
  };
  const deviceIds = Object.keys(deviceMap);
  const hasMobile = deviceIds.includes('mobile');
  const hasSidebar = hasMobile && Object.keys(rowLabels).includes('sidebar');
  const rows = Object.keys(rowLabels).filter(r => r !== 'sidebar');
  const DEVICES_LIST = deviceIds.map(id => ({
    id,
    label: deviceMap[id]
  }));
  const panelItemsContainerId = config?.panel_items_container || `customify-${builderId.charAt(0)}b-panel-items`;
  const builderTitle = config?.title || builderId;

  // Sections that belong to the builder infrastructure — always hidden.
  const infraSections = new Set([config?.section, ...Object.keys(rowLabels).map(r => `${builderId}_${r}`)].filter(Boolean));
  // Sections that are always visible in WP Customizer (e.g. templates panel).
  const alwaysVisibleSections = new Set([`${builderId}_templates`]);
  const initialData = normalizeData(readSetting(controlId), deviceIds, rows, hasSidebar);
  const [panelExpanded, setPanelExpanded] = (0,external_wp_element_namespaceObject.useState)(false);
  const [builderOpen, setBuilderOpen] = (0,external_wp_element_namespaceObject.useState)(false);
  const [device, setDevice] = (0,external_wp_element_namespaceObject.useState)(deviceIds[0] || 'desktop');
  const [data, setData] = (0,external_wp_element_namespaceObject.useState)(initialData);
  const [innerLeft, setInnerLeft] = (0,external_wp_element_namespaceObject.useState)(0);
  const [popover, setPopover] = (0,external_wp_element_namespaceObject.useState)(null);
  const lastSaved = (0,external_wp_element_namespaceObject.useRef)(initialData);
  // activeDrag holds the snapshot needed to render the floating ghost.
  // Shape: { itemId, name }
  const [activeDrag, setActiveDrag] = (0,external_wp_element_namespaceObject.useState)(null);
  // Cursor position tracked manually so the ghost (portaled to body)
  // can follow the pointer. dnd-kit's <DragOverlay> handles this for us
  // in normal contexts, but the Customizer chrome creates a stacking
  // context that traps DragOverlay's z-index — rendering our own ghost
  // directly under <body> sidesteps the trap.
  const [cursorPos, setCursorPos] = (0,external_wp_element_namespaceObject.useState)(null);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!activeDrag) return;
    const onMove = e => setCursorPos({
      x: e.clientX,
      y: e.clientY
    });
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [activeDrag]);

  // Toggle a body class for the duration of an active drag. SCSS uses
  // it to suppress chip / available-row :hover styles so the cursor
  // gliding over another chip doesn't trigger that chip's hover ring
  // (which would compete with the drop-line indicator). Class auto-
  // clears when activeDrag becomes null (drop or cancel).
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!activeDrag) return;
    document.body.classList.add('customify-hb-is-dragging');
    return () => document.body.classList.remove('customify-hb-is-dragging');
  }, [activeDrag]);
  const sensors = useSensors(
  // Require a small drag distance before activating so plain click on
  // the handle doesn't initiate a drag (keeps settings/remove buttons
  // usable from inside the chip).
  useSensor(PointerSensor, {
    activationConstraint: {
      distance: 4
    }
  }), useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates
  }));
  function handleDragStart(event) {
    const d = event.active?.data?.current;
    if (!d) return;
    setActiveDrag({
      itemId: d.itemId,
      name: allItems[d.itemId]?.name || d.itemId
    });
    // Seed cursor at the activator event so the ghost shows up at the
    // correct spot on the very first paint (before pointermove fires).
    const ev = event.activatorEvent;
    if (ev && typeof ev.clientX === 'number') {
      setCursorPos({
        x: ev.clientX,
        y: ev.clientY
      });
    }
  }
  function handleDragCancel() {
    setActiveDrag(null);
    setCursorPos(null);
  }

  // Drop happens on dragEnd only. The drop-line indicator rendered by
  // each DropZoneInner via useDndMonitor tells the user where the item
  // will land — chips never shift during the drag.
  function handleDragEnd(event) {
    setActiveDrag(null);
    setCursorPos(null);
    const {
      active,
      over
    } = event;
    if (!active || !over) return;
    if (active.id === over.id) return;
    const activeData = active.data?.current;
    const overData = over.data?.current;
    if (!activeData || !overData) return;
    const itemId = activeData.itemId;
    const from = activeData.type === 'available' ? 'available' : activeData.location;
    let to, insertIndex;
    if (overData.type === 'placed') {
      to = overData.location;
      insertIndex = overData.index;
    } else if (overData.type === 'column') {
      to = overData.location;
      insertIndex = -1;
    } else {
      return;
    }
    moveItem(itemId, from, to, insertIndex);
  }

  // Show/hide when the panel expands.
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const panel = wp.customize?.panel?.(panelId);
    if (!panel) return;
    if (panel.expanded.get()) {
      setPanelExpanded(true);
      setBuilderOpen(true);
    }
    const handler = expanded => {
      setPanelExpanded(expanded);
      if (expanded) setBuilderOpen(true);else setBuilderOpen(false);
    };
    panel.expanded.bind(handler);
    return () => panel.expanded.unbind(handler);
  }, [panelId]);

  // Stay in sync with the WP device switcher (header / mobile only).
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!hasMobile || !wp?.customize?.previewedDevice) return;
    const handler = d => setDevice(d === 'desktop' ? 'desktop' : 'mobile');
    wp.customize.previewedDevice.bind(handler);
    return () => wp.customize.previewedDevice.unbind(handler);
  }, [hasMobile]);

  // Track Customizer sidebar width to offset the builder inner panel.
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    function getSidebarWidth() {
      const paneVisible = wp.customize?.state?.('paneVisible')?.get?.();
      if (!paneVisible) return 0;
      return document.getElementById('customize-controls')?.offsetWidth || 0;
    }
    function update() {
      setInnerLeft(getSidebarWidth() - 1);
    }
    update();
    const paneState = wp.customize?.state?.('paneVisible');
    if (paneState) paneState.bind(update);
    window.addEventListener('resize', update);
    return () => {
      if (paneState) paneState.unbind(update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // Adjust preview iframe bottom to match builder height, updated live via ResizeObserver.
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const preview = document.getElementById('customize-preview');
    if (!preview) return;
    if (!builderOpen) {
      preview.classList.remove('cb--preview-panel-show');
      preview.style.bottom = '';
      return;
    }
    const root = document.getElementById(`customify-${builderId}-builder-root`);
    // .customify-hb is position:fixed so root.offsetHeight is 0 — watch the inner panel instead.
    const panel = root?.querySelector('.customify-hb');
    const updateBottom = () => {
      if (panel) preview.style.bottom = panel.offsetHeight + 'px';
    };
    preview.classList.add('cb--preview-panel-show');
    updateBottom();
    const observer = new ResizeObserver(updateBottom);
    if (panel) observer.observe(panel);
    return () => observer.disconnect();
  }, [builderOpen, builderId]);

  // Permanently hide all builder sections on mount.
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    hideAllBuilderSections(allItems, infraSections, alwaysVisibleSections);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Persist data when user changes layout.
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (data === lastSaved.current) return;
    lastSaved.current = data;
    writeSetting(data, controlId);
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync React state from external wp.customize setting changes (e.g. Load Template,
  // Multiple Headers variant switch). Two sources are honoured:
  //
  //   1. `setting.bind(handler)` — fires when wp.customize.Setting.set() detects a
  //      deep-unequal value. Echo-protected: skip when the new normalized data
  //      matches the value we just wrote ourselves (otherwise writeSetting →
  //      bind → setData → effect → writeSetting loops forever).
  //
  //   2. `customify/builder/external-update` window event — emitted by extensions
  //      (e.g. Customify Pro's useVariantSwitcher) AFTER they have applied a batch
  //      of set() calls. Carries the explicit intent "re-read this setting now,
  //      do NOT consult the echo guard" because the extension already knows the
  //      value changed at the source even if the local `lastSaved` cache happens
  //      to look identical (variant switching can produce values that normalize
  //      to the same shape as a prior state, e.g. when a variant has no override
  //      and falls back to default).
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const setting = wp.customize?.(controlId);
    if (!setting) return;
    const applyRaw = (newRaw, force) => {
      const newData = normalizeData(parseValue(newRaw), deviceIds, rows, hasSidebar);
      if (!force && JSON.stringify(newData) === JSON.stringify(lastSaved.current)) {
        return;
      }
      lastSaved.current = newData;
      setData(newData);
    };
    const settingHandler = newRaw => applyRaw(newRaw, false);
    setting.bind(settingHandler);
    const eventHandler = e => {
      const target = e?.detail?.controlId;
      if (target && target !== controlId) return;
      applyRaw(setting.get(), true);
    };
    window.addEventListener('customify/builder/external-update', eventHandler);
    return () => {
      setting.unbind(settingHandler);
      window.removeEventListener('customify/builder/external-update', eventHandler);
    };
  }, [controlId]); // eslint-disable-line react-hooks/exhaustive-deps

  const switchDevice = (0,external_wp_element_namespaceObject.useCallback)(d => {
    setDevice(d);
    const selector = d === 'desktop' ? '#customize-footer-actions .preview-desktop' : '#customize-footer-actions .preview-mobile';
    document.querySelector(selector)?.click();
  }, []);
  const moveItem = (0,external_wp_element_namespaceObject.useCallback)((itemId, from, to, insertIndex = -1) => {
    setData(prev => {
      const next = JSON.parse(JSON.stringify(prev));

      // If reordering within the same column, adjust the insert index to
      // compensate for the upcoming removal: any insertion point that
      // sits AFTER the item's current position effectively shifts by one
      // once the source slot is removed. Without this, dropping an item
      // just below its current row would no-op visually.
      let adjustedIndex = insertIndex;
      if (from !== 'available' && to !== 'available' && from.device === to.device && from.row === to.row && from.col === to.col && insertIndex >= 0) {
        const sourceCol = next[from.device][from.row][from.col];
        const currentIdx = sourceCol.findIndex(i => i.id === itemId);
        if (currentIdx >= 0 && insertIndex > currentIdx) {
          adjustedIndex = insertIndex - 1;
        }
      }
      if (from !== 'available') {
        const {
          device: fd,
          row: fr,
          col: fc
        } = from;
        next[fd][fr][fc] = next[fd][fr][fc].filter(i => i.id !== itemId);
      }
      if (to === 'available') {
        return next;
      }
      const {
        device: td,
        row: tr,
        col: tc
      } = to;
      for (const row of Object.keys(next[td])) {
        for (const col of Object.keys(next[td][row])) {
          next[td][row][col] = next[td][row][col].filter(i => i.id !== itemId);
        }
      }
      const targetCol = next[td][tr][tc];
      const finalIdx = adjustedIndex < 0 || adjustedIndex > targetCol.length ? targetCol.length : adjustedIndex;
      targetCol.splice(finalIdx, 0, {
        id: itemId
      });
      return next;
    });
  }, []);
  const openSection = (0,external_wp_element_namespaceObject.useCallback)(sectionId => {
    if (!sectionId) return;
    const section = wp.customize?.section?.(sectionId);
    if (!section) return;
    if (section._customifyForceHide) {
      section.active.unbind(section._customifyForceHide);
    }
    section.active.set(true);
    section.focus();

    // Re-hide the section only once the user has truly returned to the
    // panel root. Doing it on every collapse breaks WP flows that
    // momentarily collapse the section to navigate into a child
    // context — most importantly the block widget editor's "Show
    // more settings", which expands an `InspectorSection` and calls
    // `parentSection.collapse({manualTransition:true})`. That
    // manualTransition path bypasses the standard
    // `Section.onChangeExpanded`, so `wp.customize.state('expandedSection')`
    // is NOT updated to the inspector's id. The only reliable signal
    // that the parent collapsed "into" its inspector is the sidebar-
    // section method `hasSubSectionOpened()`.
    //
    // When the user clicks Back on the inspector, WP's
    // `InspectorSection.onChangeExpanded(false)` calls
    // `parentSection.expand(...)`. We must keep `_customifyForceHide`
    // unbound throughout that flow so the re-expand actually works
    // (otherwise the parent section appears empty on return).
    const expandedSectionState = wp.customize?.state?.('expandedSection');
    function isSubSectionOpen() {
      if (typeof section.hasSubSectionOpened === 'function') {
        try {
          return !!section.hasSubSectionOpened();
        } catch (_) {}
      }
      const inspector = section.inspector;
      if (inspector && typeof inspector.expanded === 'function') {
        try {
          return !!inspector.expanded();
        } catch (_) {}
      }
      return false;
    }
    function finalizeHide() {
      section.expanded.unbind(onExpandChange);
      if (expandedSectionState) {
        expandedSectionState.unbind(checkAndHide);
      }
      section.active.set(false);
      if (section._customifyForceHide) {
        section.active.bind(section._customifyForceHide);
      }
    }
    function checkAndHide() {
      // User re-expanded our section — keep it visible.
      if (section.expanded.get()) {
        if (expandedSectionState) {
          expandedSectionState.unbind(checkAndHide);
        }
        return;
      }
      // A sub-section (block inspector) is open — wait until it
      // closes. WP will re-expand the parent when it does.
      if (isSubSectionOpen()) {
        return;
      }
      // Some other section is expanded — user navigated sideways or
      // deeper. Wait until they leave or return.
      if (expandedSectionState && expandedSectionState.get()) {
        return;
      }
      // No section expanded — user is back at the panel root. Hide.
      finalizeHide();
    }
    function onExpandChange(expanded) {
      if (expanded) {
        // Re-expanded; cancel any pending deferred hide listener.
        if (expandedSectionState) {
          expandedSectionState.unbind(checkAndHide);
        }
        return;
      }
      // Collapsed because a sub-section (block inspector) opened.
      // Keep listening on `expanded` — WP re-expands the parent
      // when the sub-section closes, which fires onExpandChange(true).
      if (isSubSectionOpen()) {
        return;
      }
      if (expandedSectionState) {
        expandedSectionState.bind(checkAndHide);
        // Defer the first check so WP can finish propagating state.
        setTimeout(checkAndHide, 0);
      } else {
        finalizeHide();
      }
    }
    section.expanded.bind(onExpandChange);
  }, []);
  const openRowSection = (0,external_wp_element_namespaceObject.useCallback)(rowId => {
    openSection(builderId + '_' + rowId);
  }, [openSection, builderId]);

  // Expose openSection globally so the preview iframe's JS can call it
  // when the user clicks item--preview-name (bypasses section.focus() which
  // fails because _customifyForceHide prevents active.set(true)).
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    window.customifyBuilderOpenSection = openSection;
    return () => {
      delete window.customifyBuilderOpenSection;
    };
  }, [openSection]);

  // Expose a global refresh helper for extensions that mutate the layout
  // setting externally (Multiple Headers variant switch, programmatic
  // template apply). Callers may pass a specific controlId to scope the
  // refresh; omitting it refreshes every mounted builder via the event
  // fan-out.
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const prev = window.customifyBuilderRefresh;
    window.customifyBuilderRefresh = target => {
      window.dispatchEvent(new CustomEvent('customify/builder/external-update', {
        detail: {
          controlId: target || null
        }
      }));
    };
    return () => {
      window.customifyBuilderRefresh = prev;
    };
  }, []);
  const openPopover = (0,external_wp_element_namespaceObject.useCallback)((location, anchorRect) => {
    setPopover({
      location,
      anchorRect
    });
  }, []);
  const closePopover = (0,external_wp_element_namespaceObject.useCallback)(() => setPopover(null), []);
  const addItemFromPopover = (0,external_wp_element_namespaceObject.useCallback)(itemId => {
    if (!popover) return;
    moveItem(itemId, 'available', popover.location);
    setPopover(null);
  }, [popover, moveItem]);
  const placedInDevice = getDevicePlacedIds(data, device);
  const availableItems = Object.values(allItems).filter(i => !placedInDevice.has(i.id)).sort((a, b) => {
    const pa = wp.customize?.section?.(a.section)?.priority?.get() ?? 999;
    const pb = wp.customize?.section?.(b.section)?.priority?.get() ?? 999;
    return pa - pb;
  });
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(DndContext, {
    sensors: sensors,
    collisionDetection: pointerWithin,
    autoScroll: false,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd,
    onDragCancel: handleDragCancel,
    children: [builderOpen && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "customify-hb customify--panel-v2",
      style: {
        left: innerLeft
      },
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        className: "customify-hb__inner",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
          className: "customify-hb__header",
          children: [builderTitle && builderId !== 'header' && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
            className: "customify-hb__title",
            children: builderTitle
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
            className: "customify-hb__devices",
            children: DEVICES_LIST.length > 1 && DEVICES_LIST.map(d => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("button", {
              className: `customify-hb__device-btn${device === d.id ? ' is-active' : ''}`,
              onClick: () => switchDevice(d.id),
              children: [d.id === 'desktop' ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
                className: "dashicons dashicons-desktop"
              }) : /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
                className: "dashicons dashicons-smartphone"
              }), d.label]
            }, d.id))
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
            className: "customify-hb__actions",
            children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("button", {
              type: "button",
              className: "customify-hb__close button button-secondary",
              onClick: () => setBuilderOpen(false),
              children: (0,external_wp_i18n_namespaceObject.__)('Close', 'customify')
            })
          })]
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
          className: "customify-hb__body",
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
            className: `customify-hb__grid${device === 'mobile' ? ' customify-hb__grid--mobile' : ''}`,
            children: [hasSidebar && device === 'mobile' && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(OffCanvasRow, {
              items: data.mobile.sidebar.sidebar,
              allItems: allItems,
              onMove: moveItem,
              onOpenSection: openSection,
              onOpenRowSection: openRowSection,
              onOpenPopover: openPopover
            }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
              className: "customify-hb__rows",
              children: rows.map(rowId => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(BuilderRow, {
                rowId: rowId,
                rowLabel: rowLabels[rowId],
                cols: data[device][rowId],
                device: device,
                allItems: allItems,
                onMove: moveItem,
                onOpenSection: openSection,
                onOpenRowSection: openRowSection,
                onOpenPopover: openPopover,
                colLayoutKey: rowLayoutKeys[rowId] || null
              }, rowId))
            })]
          })
        }), popover && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ItemPickerPopover, {
          items: availableItems,
          anchorRect: popover.anchorRect,
          onAdd: addItemFromPopover,
          onClose: closePopover
        })]
      })
    }), panelExpanded && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PanelItemsListPortal, {
      data: data,
      device: device,
      allItems: allItems,
      availableItems: availableItems,
      containerId: panelItemsContainerId,
      builderTitle: config?.title || builderId,
      builderOpen: builderOpen,
      onOpenBuilder: () => setBuilderOpen(true),
      onOpenSection: openSection,
      onRemove: itemId => moveItem(itemId, findItemLocation(data, device, itemId), 'available'),
      onAdd: itemId => moveItem(itemId, 'available', {
        device,
        row: rows[1] || rows[0],
        col: 'center'
      })
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(TemplatesPanel, {
      builderId: builderId,
      controlId: `${builderId}_templates_save`,
      mountId: `customify-${builderId}-templates-mount`,
      layoutSettingKey: controlId,
      onApplyLayout: raw => {
        const newData = normalizeData(parseValue(raw), deviceIds, rows, hasSidebar);
        lastSaved.current = newData;
        setData(newData);
      }
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Popover.Slot, {}), activeDrag && cursorPos && (0,external_wp_element_namespaceObject.createPortal)(/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      style: {
        position: 'fixed',
        left: cursorPos.x,
        top: cursorPos.y,
        transform: 'translate(-20px, -20px)',
        // small offset from cursor
        pointerEvents: 'none',
        zIndex: 2147483647 // max int — guaranteed top
      },
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ChipPreview, {
        name: activeDrag.name
      })
    }), document.body)]
  });
}

// ---------------------------------------------------------------------------
// Helper: find an item's location within a device
// ---------------------------------------------------------------------------

// String key used to compare container identities (device/row/col).
// `'available'` is reserved for the Available items panel.
function locationKey(loc) {
  if (loc === 'available' || !loc) return 'available';
  return `${loc.device}::${loc.row}::${loc.col}`;
}
function sameLocation(a, b) {
  if (!a || !b) return false;
  return a.device === b.device && a.row === b.row && a.col === b.col;
}
function findItemLocation(data, device, itemId) {
  for (const row of Object.keys(data[device] || {})) {
    for (const col of Object.keys(data[device][row] || {})) {
      if ((data[device][row][col] || []).some(i => i.id === itemId)) {
        return {
          device,
          row,
          col
        };
      }
    }
  }
  return 'available';
}

// ---------------------------------------------------------------------------
// PanelItemsListPortal — renders into the builder panel items container
// ---------------------------------------------------------------------------

function PanelItemsListPortal({
  data,
  device,
  allItems,
  availableItems,
  containerId,
  builderTitle,
  builderOpen,
  onOpenBuilder,
  onOpenSection,
  onRemove,
  onAdd
}) {
  // The container lives inside a WP Customizer Underscore.js template rendered
  // lazily (only when the panel first opens) — watch for it via MutationObserver.
  const [container, setContainer] = (0,external_wp_element_namespaceObject.useState)(() => document.getElementById(containerId));
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const el = document.getElementById(containerId);
    if (el) {
      setContainer(el);
      return;
    }
    const observer = new MutationObserver(() => {
      const found = document.getElementById(containerId);
      if (found) {
        setContainer(found);
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return () => observer.disconnect();
  }, [containerId]);
  if (!container) return null;
  const placedIds = getDevicePlacedIds(data, device);
  const placed = [...placedIds].map(id => allItems[id] || {
    id,
    name: id,
    section: ''
  }).sort((a, b) => {
    const pa = wp.customize?.section?.(a.section)?.priority?.get() ?? 999;
    const pb = wp.customize?.section?.(b.section)?.priority?.get() ?? 999;
    return pa - pb;
  });
  return (0,external_wp_element_namespaceObject.createPortal)(/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [!builderOpen && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("button", {
      type: "button",
      className: "customify-hb__open-builder button button-primary",
      onClick: onOpenBuilder,
      children: (0,external_wp_i18n_namespaceObject.__)('Open Builder', 'customify')
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "customify-hb__panel-section",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
        className: "customify-hb__panel-items",
        children: placed.length === 0 ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
          className: "customify-hb__panel-items-empty",
          children: (0,external_wp_i18n_namespaceObject.__)('No items placed yet.', 'customify')
        }) : placed.map(item => {
          const settingsSection = item.layout_section || item.section;
          return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
            className: `customify-hb__panel-item${item.section ? ' is-clickable' : ''}`,
            onClick: () => item.section && onOpenSection(item.section),
            children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
              className: "customify-hb__panel-item-name",
              children: item.name
            }), settingsSection && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("button", {
              type: "button",
              className: "customify-hb__panel-item-btn customify-hb__panel-item-settings",
              title: (0,external_wp_i18n_namespaceObject.__)('Item Layout', 'customify'),
              onClick: e => {
                e.stopPropagation();
                onOpenSection(settingsSection);
              },
              children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
                icon: settings_default
              })
            }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("button", {
              type: "button",
              className: "customify-hb__panel-item-btn customify-hb__panel-item-remove",
              title: (0,external_wp_i18n_namespaceObject.__)('Remove', 'customify'),
              onClick: e => {
                e.stopPropagation();
                onRemove(item.id);
              },
              children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
                icon: close_default
              })
            })]
          }, item.id);
        })
      })
    }), availableItems.length > 0 && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "customify-hb__panel-section",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
        className: "customify-hb__panel-section-label",
        children: (0,external_wp_i18n_namespaceObject.__)('Available', 'customify')
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
        className: "customify-hb__panel-items",
        children: availableItems.map(item => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(AvailableItem, {
          itemId: item.id,
          name: item.name
        }, item.id))
      })]
    })]
  }), container);
}

// ---------------------------------------------------------------------------
// BuilderRow
// ---------------------------------------------------------------------------

function parseColLayout(raw) {
  if (!raw) return null;
  try {
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  } catch (_) {
    return null;
  }
}

// Drag source for the Available panel (items not yet placed in any
// column). useDraggable instead of useSortable because available rows
// don't need internal reordering — they're just sources that, when
// dropped on a column, get inserted via the root onDragEnd handler.
//
// IMPORTANT: We intentionally do NOT apply useDraggable's `transform`
// to the source element. The Available panel lives inside the
// Customizer sidebar (overflow:auto + Customizer's own scroll bridge);
// translating the source row inside that container causes the entire
// sidebar to be visually pulled along with the drag, and the panel
// cannot restore its scroll/layout cleanly after drop. The floating
// <DragOverlay> already renders a chip-shaped ghost that follows the
// cursor — that is effectively the "clone" needed for visual feedback,
// so the source row stays rock-still in the panel (just dimmed).
function AvailableItem({
  itemId,
  name
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    isDragging
  } = useDraggable({
    id: `avail::${itemId}`,
    data: {
      type: 'available',
      itemId
    }
  });
  const style = {
    opacity: isDragging ? 0.4 : 1
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    ref: setNodeRef,
    style: style,
    className: "customify-hb__panel-item customify-hb__panel-item--available",
    title: (0,external_wp_i18n_namespaceObject.__)('Drag to add to builder', 'customify'),
    ...attributes,
    ...listeners,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
      ref: setActivatorNodeRef,
      className: "customify-hb__avail-handle",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
        icon: drag_handle_default,
        className: "customify-hb__drag-handle"
      })
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
      className: "customify-hb__panel-item-name",
      children: name
    })]
  });
}
function BuilderRow({
  rowId,
  rowLabel,
  cols,
  device,
  allItems,
  onMove,
  onOpenSection,
  onOpenRowSection,
  onOpenPopover,
  colLayoutKey
}) {
  const [hovered, setHovered] = (0,external_wp_element_namespaceObject.useState)(false);
  const rowRef = (0,external_wp_element_namespaceObject.useRef)(null);
  const [colLayoutValue, setColLayoutValue] = (0,external_wp_element_namespaceObject.useState)(() => {
    if (!colLayoutKey) return null;
    return parseColLayout(window.wp?.customize?.(colLayoutKey)?.get?.());
  });
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!colLayoutKey) return;
    const setting = window.wp?.customize?.(colLayoutKey);
    if (!setting) return;
    const handler = val => setColLayoutValue(parseColLayout(val));
    setting.bind(handler);
    return () => setting.unbind(handler);
  }, [colLayoutKey]);

  // Derive active columns and grid proportions from col_layout (always use desktop for builder view).
  let activeCols = COLS;
  let colsStyle = {};
  if (colLayoutValue) {
    // count is global; fr is per-device (fall back to desktop).
    const count = Math.max(1, Math.min(5, colLayoutValue.count || colLayoutValue.desktop?.count || 3));
    const d = colLayoutValue.desktop || {};
    const fr = Array.isArray(d.fr) && d.fr.length === count ? d.fr : Array(count).fill(1);
    activeCols = ALL_COLS.slice(0, count);
    colsStyle = {
      display: 'grid',
      gridTemplateColumns: fr.map(v => `${v}fr`).join(' ')
    };
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    ref: rowRef,
    className: `customify-hb__row customify-hb__row--${rowId}`,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    children: [hovered && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Popover, {
      anchor: rowRef.current,
      placement: "top-start",
      noArrow: true,
      focusOnMount: false,
      className: "customify-hb__row-tooltip",
      offset: 0,
      flip: false,
      children: rowLabel
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("button", {
      type: "button",
      className: "customify-hb__row-label",
      title: rowLabel,
      onClick: () => onOpenRowSection(rowId),
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
        icon: settings_default
      })
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "customify-hb__cols",
      style: colsStyle,
      children: activeCols.map(colId => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DropZone, {
        colId: colId,
        rowId: rowId,
        device: device,
        items: cols[colId] || [],
        allItems: allItems,
        onMove: onMove,
        onOpenSection: onOpenSection,
        onOpenPopover: onOpenPopover
      }, colId))
    })]
  });
}

// ---------------------------------------------------------------------------
// OffCanvasRow (mobile sidebar — header only)
// ---------------------------------------------------------------------------

function OffCanvasRow({
  items,
  allItems,
  onMove,
  onOpenSection,
  onOpenRowSection,
  onOpenPopover
}) {
  const location = {
    device: 'mobile',
    row: 'sidebar',
    col: 'sidebar'
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "customify-hb__row customify-hb__row--sidebar",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "customify-hb__row-header",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("button", {
        type: "button",
        className: "customify-hb__row-label",
        title: (0,external_wp_i18n_namespaceObject.__)('Off Canvas Settings', 'customify'),
        onClick: () => onOpenRowSection('sidebar'),
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
          icon: settings_default
        })
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
        className: "customify-hb__row-title",
        children: (0,external_wp_i18n_namespaceObject.__)('Off Canvas', 'customify')
      })]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DropZoneInner, {
      containerClass: "customify-hb__offcanvas",
      strategy: verticalListSortingStrategy,
      orientation: "vertical",
      location: location,
      items: items,
      allItems: allItems,
      onMove: onMove,
      onOpenSection: onOpenSection,
      onOpenPopover: onOpenPopover,
      emptyHint: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
        className: "customify-hb__drop-hint",
        style: {
          pointerEvents: 'none'
        },
        children: (0,external_wp_i18n_namespaceObject.__)('Click to add items', 'customify')
      })
    })]
  });
}

// ---------------------------------------------------------------------------
// DropZone (column)
// ---------------------------------------------------------------------------

function DropZone({
  colId,
  rowId,
  device,
  items,
  allItems,
  onMove,
  onOpenSection,
  onOpenPopover
}) {
  const location = {
    device,
    row: rowId,
    col: colId
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DropZoneInner, {
    containerClass: `customify-hb__col customify-hb__col--${colId}`,
    strategy: rectSortingStrategy,
    orientation: "horizontal",
    location: location,
    items: items,
    allItems: allItems,
    onMove: onMove,
    onOpenSection: onOpenSection,
    onOpenPopover: onOpenPopover,
    emptyHint: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
      className: "customify-hb__col-empty",
      style: {
        pointerEvents: 'none'
      },
      children: "+"
    })
  });
}

// Shared body for column + off-canvas. Wraps a SortableContext for the
// chip drag mechanics and a useDroppable target (so empty cols still
// accept drops from the Available panel or other cols). Inside, a thin
// <DropLine> indicator is rendered between chips at the cursor position
// while a drag is over this column. Chips DO NOT shift — the line is
// the only visual cue, which keeps the layout stable even when the
// column wraps to multiple rows.
function DropZoneInner({
  containerClass,
  strategy,
  orientation,
  location,
  items,
  allItems,
  onMove,
  onOpenSection,
  onOpenPopover,
  emptyHint
}) {
  const containerId = `col::${location.device}::${location.row}::${location.col}`;
  const itemIds = items.map(i => `placed::${i.id}`);
  const {
    setNodeRef,
    isOver
  } = useDroppable({
    id: containerId,
    data: {
      type: 'column',
      location,
      itemIds
    }
  });

  // dropAt:
  //   { type: 'before', index: N } — render line BEFORE chip N
  //   { type: 'end' }              — render line AFTER the last chip
  //   null                         — no line in this column
  const [dropAt, setDropAt] = (0,external_wp_element_namespaceObject.useState)(null);
  useDndMonitor({
    onDragOver({
      over
    }) {
      if (!over) {
        setDropAt(null);
        return;
      }
      const d = over.data?.current;
      if (!d || !d.location || !sameLocation(d.location, location)) {
        setDropAt(null);
        return;
      }
      if (d.type === 'placed') {
        setDropAt({
          type: 'before',
          index: d.index
        });
      } else if (d.type === 'column') {
        setDropAt({
          type: 'end'
        });
      } else {
        setDropAt(null);
      }
    },
    onDragEnd() {
      setDropAt(null);
    },
    onDragCancel() {
      setDropAt(null);
    }
  });
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(SortableContext, {
    items: itemIds,
    strategy: strategy,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      ref: setNodeRef,
      className: `${containerClass}${isOver ? ' is-drag-over' : ''}`,
      onClick: e => {
        if (e.target.closest('.customify-hb__item')) return;
        onOpenPopover(location, e.currentTarget.getBoundingClientRect());
      },
      children: [items.map((item, idx) => {
        const info = allItems[item.id] || {
          name: item.id,
          section: ''
        };
        return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_element_namespaceObject.Fragment, {
          children: [dropAt && dropAt.type === 'before' && dropAt.index === idx && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DropLine, {
            orientation: orientation
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(SortableItemChip, {
            sortableId: `placed::${item.id}`,
            itemId: item.id,
            name: info.name,
            section: info.section,
            layoutSection: info.layout_section,
            location: location,
            index: idx,
            onRemove: id => onMove(id, location, 'available'),
            onOpenSection: onOpenSection
          })]
        }, item.id);
      }), dropAt && dropAt.type === 'end' && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DropLine, {
        orientation: orientation
      }), items.length === 0 && emptyHint]
    })
  });
}

// Drop-line indicator. Per the chosen UX:
//   horizontal column → zero-width slot (40px tall) with a 3px absolute
//                       inner bar (vertical line between chips).
//   vertical sidebar  → zero-height slot (full width) with a 3px absolute
//                       inner bar (horizontal line between stacked chips).
// Zero size in the active axis means inserting/removing the line never
// shifts the surrounding chips' positions.
function DropLine({
  orientation
}) {
  const className = `customify-hb__drop-line customify-hb__drop-line--${orientation || 'horizontal'}`;
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
    className: className,
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "customify-hb__drop-line__bar"
    })
  });
}

// ---------------------------------------------------------------------------
// ItemChip
// ---------------------------------------------------------------------------

// Sortable chip — placed in a column. Registers with the nearest
// SortableContext via useSortable. The drag handle gets the listeners; the
// rest of the chip stays clickable (settings + remove buttons).
//
// We intentionally do NOT apply useSortable's `transform`/`transition` to
// the chip style. The classic "shift-aside" preview that the sortable
// preset provides does not survive flex-wrap multi-row layouts (chips
// pile up because translates can't simulate wrap). Instead, sibling chips
// stay put and DropZoneInner renders a thin `<DropLine>` between chips
// at the cursor position via useDndMonitor — same UX intent, no overlap.
function SortableItemChip({
  sortableId,
  itemId,
  name,
  section,
  layoutSection,
  location,
  index,
  onRemove,
  onOpenSection
}) {
  const settingsTarget = layoutSection || section;
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    isDragging
  } = useSortable({
    id: sortableId,
    data: {
      type: 'placed',
      itemId,
      location,
      index
    }
  });
  const style = {
    opacity: isDragging ? 0.4 : 1
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    ref: setNodeRef,
    style: style,
    className: `customify-hb__item${isDragging ? ' is-dragging' : ''}`,
    ...attributes,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
      ref: setActivatorNodeRef,
      className: "customify-hb__item-handle",
      ...listeners,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
        icon: drag_handle_default
      })
    }), settingsTarget ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("button", {
      type: "button",
      className: "customify-hb__item-name customify-hb__item-name--clickable",
      title: (0,external_wp_i18n_namespaceObject.__)('Settings', 'customify'),
      onClick: e => {
        e.stopPropagation();
        onOpenSection(settingsTarget);
      },
      children: name
    }) : /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
      className: "customify-hb__item-name",
      children: name
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("button", {
      type: "button",
      className: "customify-hb__item-btn customify-hb__item-remove",
      title: (0,external_wp_i18n_namespaceObject.__)('Remove', 'customify'),
      onClick: e => {
        e.stopPropagation();
        onRemove(itemId);
      },
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
        icon: close_default
      })
    })]
  });
}

// Visual-only preview rendered inside <DragOverlay> while a chip or
// available item is being dragged. Mirrors the placed-chip DOM exactly
// (handle + name + remove button) so the ghost's intrinsic width and
// height match the source — without the trailing button slot the
// inline-flex measurement collapses to a narrower box and the user sees
// a smaller ghost than the original chip.
function ChipPreview({
  name
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "customify-hb__item customify-hb__item--overlay",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
      className: "customify-hb__item-handle",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
        icon: drag_handle_default
      })
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
      className: "customify-hb__item-name",
      children: name
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
      className: "customify-hb__item-btn customify-hb__item-remove",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
        icon: close_default
      })
    })]
  });
}

// ---------------------------------------------------------------------------
// ItemPickerPopover
// ---------------------------------------------------------------------------

const ARROW_SIZE = 8;
const POPOVER_W = 300;
const POPOVER_H = 240;
function ItemPickerPopover({
  items,
  anchorRect,
  onAdd,
  onClose
}) {
  const ref = (0,external_wp_element_namespaceObject.useRef)(null);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);
  const anchorCenterX = anchorRect.left + anchorRect.width / 2;
  const effectiveW = Math.min(POPOVER_W, window.innerWidth - 8);
  const rawLeft = anchorCenterX - effectiveW / 2;
  const popoverLeft = Math.max(4, Math.min(rawLeft, window.innerWidth - effectiveW - 4));
  const arrowLeft = Math.max(12, Math.min(anchorCenterX - popoverLeft - ARROW_SIZE, effectiveW - 12 - ARROW_SIZE * 2));
  const isAbove = anchorRect.top >= POPOVER_H + ARROW_SIZE + 8;
  const popoverStyle = {
    left: popoverLeft,
    width: POPOVER_W
  };
  if (isAbove) {
    popoverStyle.bottom = window.innerHeight - anchorRect.top + ARROW_SIZE + 2;
  } else {
    popoverStyle.top = anchorRect.bottom + ARROW_SIZE + 2;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    ref: ref,
    className: `customify-hb__popover${isAbove ? ' is-above' : ' is-below'}`,
    style: popoverStyle,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "customify-hb__popover-arrow",
      style: {
        left: arrowLeft
      }
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "customify-hb__popover-list",
      children: items.length === 0 ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
        className: "customify-hb__popover-empty",
        children: (0,external_wp_i18n_namespaceObject.__)('All items are placed in the layout', 'customify')
      }) : items.map(item => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("button", {
        className: "customify-hb__popover-item",
        onClick: () => onAdd(item.id),
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
          icon: plus_default,
          className: "customify-hb__popover-item-icon"
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
          className: "customify-hb__popover-item-label",
          children: item.name
        })]
      }, item.id))
    })]
  });
}
;// ./src/backend/footer-row-layout/presets.js
/**
 * Column layout presets for footer rows.
 * fr: flex-fraction values for grid-template-columns.
 */
const PRESETS = {
  1: [{
    fr: [1]
  }],
  2: [{
    fr: [1, 1]
  }, {
    fr: [1, 2]
  }, {
    fr: [2, 1]
  }, {
    fr: [1, 3]
  }],
  3: [{
    fr: [1, 1, 1]
  }, {
    fr: [1, 2, 1]
  }, {
    fr: [2, 1, 1]
  }, {
    fr: [1, 1, 2]
  }, {
    fr: [1, 3, 1]
  }, {
    fr: [3, 1, 1]
  }, {
    fr: [1, 1, 3]
  }, {
    stacked: true
  }],
  4: [{
    fr: [1, 1, 1, 1]
  }, {
    fr: [1, 2, 2, 1]
  }, {
    stacked: true
  }],
  5: [{
    fr: [1, 1, 1, 1, 1]
  }, {
    stacked: true
  }]
};

// count is global; fr, gap, padding are per-device.
const DEFAULT_VALUE = {
  count: 4,
  desktop: {
    fr: [1, 1, 1, 1],
    gap: 0,
    padding: 0
  },
  tablet: {
    fr: [1, 1, 1, 1],
    gap: 0,
    padding: 0
  },
  mobile: {
    fr: [1],
    gap: 0,
    padding: 0
  }
};
;// ./src/backend/footer-row-layout/RowLayout.jsx




const DEVICES = [{
  id: 'desktop',
  icon: 'dashicons-desktop'
}, {
  id: 'tablet',
  icon: 'dashicons-tablet'
}, {
  id: 'mobile',
  icon: 'dashicons-smartphone'
}];
function DeviceSwitcher({
  device,
  onChange
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
    className: "cb-row-layout__devices",
    children: DEVICES.map(d => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("button", {
      type: "button",
      className: `cb-row-layout__device-btn${device === d.id ? ' is-active' : ''}`,
      title: d.id,
      onClick: () => onChange(d.id),
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
        className: `dashicons ${d.icon}`
      })
    }, d.id))
  });
}
function LayoutSvg({
  fr,
  stacked,
  count
}) {
  const W = 48;
  const H = 30;
  const GAP = 2;
  if (stacked) {
    const bars = count || 3;
    const totalGaps = GAP * (bars - 1);
    const barH = (H - 4 - totalGaps) / bars;
    const rects = Array.from({
      length: bars
    }, (_, i) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("rect", {
      x: 0,
      y: 2 + i * (barH + GAP),
      width: W,
      height: Math.max(barH, 1),
      rx: 2
    }, i));
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("svg", {
      width: W,
      height: H,
      viewBox: `0 0 ${W} ${H}`,
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      children: rects
    });
  }
  const total = fr.reduce((a, b) => a + b, 0);
  const totalG = GAP * (fr.length - 1);
  let x = 0;
  const rects = fr.map((f, i) => {
    const w = f / total * (W - totalG);
    const rect = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("rect", {
      x: x,
      y: 2,
      width: Math.max(w, 1),
      height: H - 4,
      rx: 2
    }, i);
    x += w + GAP;
    return rect;
  });
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("svg", {
    width: W,
    height: H,
    viewBox: `0 0 ${W} ${H}`,
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: rects
  });
}
function RowLayout_parseValue(raw) {
  if (!raw) return {
    ...DEFAULT_VALUE
  };
  try {
    const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
    if (!parsed || typeof parsed !== 'object') return {
      ...DEFAULT_VALUE
    };

    // Migrate old format where count was stored per-device.
    // parseInt handles both number 3 and string "3" (sanitizer turns ints to strings).
    const count = parseInt(parsed.count ?? parsed.desktop?.count ?? DEFAULT_VALUE.count, 10) || DEFAULT_VALUE.count;
    const globalGap = parsed.gap ?? 0;
    const globalPadding = parsed.padding ?? 0;
    const parseDevice = (d, def) => ({
      fr: (d?.fr || def.fr).map(v => parseInt(v, 10) || 1),
      gap: parseInt(d?.gap ?? globalGap, 10) || 0,
      padding: parseInt(d?.padding ?? globalPadding, 10) || 0
    });
    return {
      count,
      desktop: parseDevice(parsed.desktop, DEFAULT_VALUE.desktop),
      tablet: parseDevice(parsed.tablet, DEFAULT_VALUE.tablet),
      mobile: parseDevice(parsed.mobile, DEFAULT_VALUE.mobile)
    };
  } catch (e) {
    return {
      ...DEFAULT_VALUE
    };
  }
}
function RowLayout({
  settingKey
}) {
  // Seed the device tab from the customizer's previewedDevice so opening
  // the control while the preview is in tablet/mobile mode reflects that.
  const [device, setDevice] = (0,external_wp_element_namespaceObject.useState)(() => {
    const d = window.wp?.customize?.previewedDevice?.get?.();
    return d === 'tablet' || d === 'mobile' ? d : 'desktop';
  });
  const [value, setValue] = (0,external_wp_element_namespaceObject.useState)(() => {
    const raw = window.wp?.customize?.(settingKey)?.get?.();
    return RowLayout_parseValue(raw);
  });
  const isCommitting = (0,external_wp_element_namespaceObject.useRef)(false);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const setting = window.wp?.customize?.(settingKey);
    if (!setting) return;
    // Re-sync after mount in case the setting value loads asynchronously.
    const raw = setting.get?.();
    if (raw) setValue(RowLayout_parseValue(raw));
    // Sync on external changes (e.g. undo/redo), but not our own commits.
    const onChange = newRaw => {
      if (!isCommitting.current) setValue(RowLayout_parseValue(newRaw));
    };
    setting.bind(onChange);
    return () => setting.unbind(onChange);
  }, [settingKey]);

  // Mirror the customizer's previewedDevice so clicking the footer-toolbar
  // device buttons (or another row-layout control) keeps this tab in sync.
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const preview = window.wp?.customize?.previewedDevice;
    if (!preview?.bind) return;
    const onPreviewDevice = d => {
      if (d === 'desktop' || d === 'tablet' || d === 'mobile') {
        setDevice(d);
      }
    };
    preview.bind(onPreviewDevice);
    return () => preview.unbind(onPreviewDevice);
  }, []);

  // Clicking a row-layout device button drives the preview iframe to the
  // matching breakpoint so the user sees the layout they're editing.
  const handleDeviceChange = d => {
    setDevice(d);
    window.wp?.customize?.previewedDevice?.set?.(d);
  };

  // count is global; fr is per-device.
  const count = value.count || 1;
  const deviceData = value[device] || {
    fr: Array(count).fill(1)
  };
  const fr = deviceData.fr || Array(count).fill(1);
  const presets = PRESETS[count] || [{
    fr: Array(count).fill(1)
  }];
  const commit = newValue => {
    setValue(newValue);
    isCommitting.current = true;
    window.wp?.customize?.(settingKey)?.set?.(JSON.stringify(newValue));
    isCommitting.current = false;
  };

  // Truncate or pad an fr array to a target length, preserving leading
  // proportions. Used when column count changes so every device's fr
  // stays in sync with `count`. Without this, switching count on one
  // device tab leaves the other devices with a stale fr length, which
  // the renderer then emits as extra/empty grid tracks on those
  // breakpoints (the "col4 still renders after 4→3" bug).
  const resizeFr = (oldFr, newCount) => {
    const arr = Array.isArray(oldFr) ? oldFr.slice(0, newCount) : [];
    while (arr.length < newCount) arr.push(1);
    return arr;
  };
  const handleCountChange = n => {
    const firstPreset = (PRESETS[n] || [{
      fr: Array(n).fill(1)
    }])[0];
    const newFr = firstPreset.fr || Array(n).fill(1);

    // Active device gets the preset; inactive devices preserve their
    // own proportions but get resized to the new count. Mobile is
    // special: when the active tab isn't mobile we leave mobile.fr
    // alone so it keeps falling back to stacked (1fr) until the user
    // picks a horizontal preset on the mobile tab themselves.
    const next = {
      ...value,
      count: n
    };
    ['desktop', 'tablet', 'mobile'].forEach(dev => {
      const cur = value[dev] || {
        fr: [],
        gap: 0,
        padding: 0
      };
      if (dev === 'mobile' && dev !== device) {
        next[dev] = cur;
        return;
      }
      next[dev] = {
        ...cur,
        fr: dev === device ? newFr : resizeFr(cur.fr, n)
      };
    });
    commit(next);
  };
  const handlePreset = preset => {
    const newFr = preset.stacked ? [1] : preset.fr;
    commit({
      ...value,
      [device]: {
        ...deviceData,
        fr: newFr
      }
    });
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "cb-row-layout",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "cb-row-layout__count-section",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
        className: "cb-row-layout__label",
        children: (0,external_wp_i18n_namespaceObject.__)('Columns', 'customify')
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
        className: "cb-row-layout__count-buttons",
        children: [1, 2, 3, 4, 5].map(n => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("button", {
          type: "button",
          className: `cb-row-layout__count-btn${count === n ? ' is-active' : ''}`,
          onClick: () => handleCountChange(n),
          children: n
        }, n))
      })]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "cb-row-layout__field",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        className: "cb-row-layout__field-header",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
          className: "cb-row-layout__label",
          children: (0,external_wp_i18n_namespaceObject.__)('Layout', 'customify')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DeviceSwitcher, {
          device: device,
          onChange: handleDeviceChange
        })]
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
        className: "cb-row-layout__preset-grid",
        children: presets.map((preset, idx) => {
          const isStacked = !!preset.stacked;
          const active = isStacked ? fr.length === 1 : JSON.stringify(fr) === JSON.stringify(preset.fr);
          return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("button", {
            type: "button",
            className: `cb-row-layout__preset-btn${active ? ' is-active' : ''}`,
            title: isStacked ? 'stacked' : preset.fr.join(':'),
            onClick: () => handlePreset(preset),
            children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(LayoutSvg, {
              fr: preset.fr || [1],
              stacked: isStacked,
              count: count
            })
          }, idx);
        })
      })]
    })]
  });
}
;// ./src/backend/footer-builder/index.js
/**
 * Customify Footer Builder — React-powered Customizer panel.
 *
 * Reuses the generic Builder component from header-builder.
 * Config is read from window.Customify_Layout_Builder.builders.footer
 * (injected by PHP alongside the header builder data).
 */






// Row layout control — CSS + mounting logic bundled here so we don't need
// a separate script enqueue for it.



function mountRowLayouts() {
  document.querySelectorAll('[id^="cb-row-layout-"]:not([data-rl-mounted])').forEach(el => {
    const settingKey = el.dataset.setting;
    if (!settingKey) return;
    el.setAttribute('data-rl-mounted', '1');
    (0,external_wp_element_namespaceObject.render)(/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(RowLayout, {
      settingKey: settingKey
    }), el);
  });
}
wp.customize.bind('ready', () => {
  const config = window.Customify_Layout_Builder?.builders?.footer || {};
  const container = document.createElement('div');
  container.id = 'customify-footer-builder-root';
  document.querySelector('body .wp-full-overlay')?.appendChild(container);
  (0,external_wp_element_namespaceObject.render)(/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.SlotFillProvider, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(Builder, {
      config: config
    })
  }), container);

  // Mount Columns Layout React controls into the footer row sections.
  mountRowLayouts();

  // Re-mount when any section expands (row sections open via gear icon).
  try {
    wp.customize.section.each(section => {
      section.expanded.bind(isExpanded => {
        if (isExpanded) setTimeout(mountRowLayouts, 100);
      });
    });
  } catch (_e) {}
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			79: 0,
/******/ 			733: 0,
/******/ 			207: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [733,207], function() { return __webpack_require__(252); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;