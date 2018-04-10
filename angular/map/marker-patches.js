'use strict';

define({
  patch: patch,
});

// Patches the provided dictionary of instances of googlemap.Marker.
function patch(markers) {
  setPlaceId('emnazih', 'ChIJmf6F__kWHxUR6wQO2krgwgI');
  setPlaceId('faqra', 'ChIJ-ciGVqJOHxURNkHLLzXV7p8');
  setPlaceId('jammal', 'ChIJ-YEAENJYHxUR-e4EVMcfJpo');
  setPlaceId('internazionale', 'ChIJV0PjGFkWHxURMy7Ey_ObHYM');
  setPlaceId('darelgemmayze', 'ChIJ84X1_PoWHxURYD7ooECcnvA');
  setComment('darelgemmayze', 'formerly Kahwet Leila');
  setPlaceId('ksara', 'ChIJF0VSOeo0HxURar1sh_kxrxY');
  setPlaceId('lazybbeach', 'ChIJ6XMwtx3jHhUR4rFiK5R3AS4');
  setWebsite('lockstock', 'https://www.facebook.com/LockStockLebanon/');
  setPlaceId('londonbar', 'ChIJT0k2-VgWHxURzHHHNL6iqe4');
  setPlaceId('massayavineyard', 'ChIJX2xZy2gzHxURqzziqWg84mY');
  setPlaceId('mayrig', 'ChIJkXEyffcWHxURgxjedHI0SUA');
  setPlaceId('naturalbridge', 'ChIJyVZhcZ9OHxURJjMW5igiIyk');
  setPlaceId('pooldetat', 'ChIJabXezCkXHxURUr0lhk5rZug');
  setPlaceId('seza', 'ChIJj6eAWCEXHxURPpItJi93dpg');
  setPlaceId('trainstation', 'ChIJJ-KcBlwWHxURSrEbgjVs658');
  ignoreErrors('trainstation');

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
