"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useMapbox;

var _react = require("react");

var _mapboxGl = _interopRequireDefault(require("mapbox-gl/dist/mapbox-gl.js"));

var _mapboxGlCspWorker = _interopRequireDefault(require("mapbox-gl/dist/mapbox-gl-csp-worker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useMapbox() {
  var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'map';
  var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [44.2667, 46.3148];
  var zoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
  _mapboxGl["default"].accessToken = "pk.eyJ1Ijoid3JremciLCJhIjoiY2w1MTRsMW41MDI0ejNkcnliczMyNmpjNyJ9.Oydx12NzpiCwXiQ8qKG9-Q";
  _mapboxGl["default"].workerClass = _mapboxGlCspWorker["default"]["default"];
  (0, _react.useLayoutEffect)(function () {
    var map = new _mapboxGl["default"].Map({
      container: container,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: center,
      zoom: zoom
    });
  }, []);
}