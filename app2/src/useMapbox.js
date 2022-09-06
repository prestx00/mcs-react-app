import { useLayoutEffect, useMemo} from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import MapboxWorker from "mapbox-gl/dist/mapbox-gl-csp-worker";

export default function useMapbox(container="map", center=[44.2667, 46.3148], zoom=12){
    mapboxgl.accessToken = "pk.eyJ1Ijoid3JremciLCJhIjoiY2w1MTRsMW41MDI0ejNkcnliczMyNmpjNyJ9.Oydx12NzpiCwXiQ8qKG9-Q";
    mapboxgl.workerClass = MapboxWorker.default;
    const [centerA, centerB] = center
  
    const centerMemo = useMemo(()=> [centerA, centerB], [centerA, centerB])

    useLayoutEffect(()=> {
    const map = new mapboxgl.Map({
      container: container,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: centerMemo,
      zoom: zoom,
    }) 
    }, [container, centerMemo, zoom])
}