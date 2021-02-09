/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

// Saving to local storage
var previousDataJSON = localStorage.getItem('data-storage');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

function storeData(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data-storage', dataJSON);
}

window.addEventListener('unload', storeData);
