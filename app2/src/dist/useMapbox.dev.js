"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useMapbox;

var _react = require("react");

var _mapboxGl = _interopRequireDefault(require("mapbox-gl/dist/mapbox-gl.js"));

var _mapboxGlCspWorker = _interopRequireDefault(require("mapbox-gl/dist/mapbox-gl-csp-worker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useMapbox() {
  var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "map";
  var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [44.2667, 46.3148];
  var zoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
  _mapboxGl["default"].accessToken = "pk.eyJ1Ijoid3JremciLCJhIjoiY2w1MTRsMW41MDI0ejNkcnliczMyNmpjNyJ9.Oydx12NzpiCwXiQ8qKG9-Q";
  _mapboxGl["default"].workerClass = _mapboxGlCspWorker["default"]["default"];

  var _center = _slicedToArray(center, 2),
      centerA = _center[0],
      centerB = _center[1];

  var centerMemo = (0, _react.useMemo)(function () {
    return [centerA, centerB];
  }, [centerA, centerB]);
  (0, _react.useLayoutEffect)(function () {
    var map = new _mapboxGl["default"].Map({
      container: container,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: centerMemo,
      zoom: zoom
    });
  }, [container, centerMemo, zoom]);
}