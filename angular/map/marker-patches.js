'use strict';

define({
  patch: patch,
});

// Patches the provided dictionary of instances of googlemap.Marker.
function patch(markers) {
  setPlaceId('emnazih', 'ChIJmf6F__kWHxUR6wQO2krgwgI');
  setPlaceId('jammal', 'ChIJ-YEAENJYHxUR-e4EVMcfJpo');
  setPlaceId('kahwetleila', 'ChIJ84X1_PoWHxURYD7ooECcnvA');
  setPlaceId('lazybbeach', 'ChIJ6XMwtx3jHhUR4rFiK5R3AS4');
  setPlaceId('londonbar', 'ChIJT0k2-VgWHxURzHHHNL6iqe4');
  setPlaceId('mayrig', 'ChIJkXEyffcWHxURgxjedHI0SUA');
  setPlaceId('naturalbridge', 'ChIJyVZhcZ9OHxURJjMW5igiIyk');
  setPlaceId('seza', 'ChIJj6eAWCEXHxURPpItJi93dpg');

  function setComment(id, comment) {
    try {
      markers[id].setComment(comment);
    } catch(e) {
      console.error('Error patching ' + id + "'s comment: " + e);
    }
  }

  function setPlaceId(id, placeId) {
    try {
      markers[id].setPlaceId(placeId);
    } catch(e) {
      console.error('Error patching ' + id + "'s place ID: " + e);
    }
  }

  function setWebsite(id, website) {
    try {
      markers[id].setWebsite(website);
    } catch(e) {
      console.error('Error patching ' + id + "'s website: " + e);
    }
  }

  function ignoreErrors(id) {
    try {
      markers[id].ignoreErrors();
    } catch(e) {
      console.error('Error patching ' + id + "'s ignore_errors.");
    }
  }
}
