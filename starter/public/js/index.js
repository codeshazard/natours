/* eslint-disable */
import { displayMap } from './mapbox.js';

const mapBox = document.getElementById('map');
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}
