
function displaySearchResults(results, store) {
  var searchResults = document.getElementById('search-results');

  if (results.length) { // Are there any results?
    var appendString = '';

    for (var i = 0; i < results.length; i++) {  // Iterate over the results
      var item = store[results[i].ref];
      if (typeof item.title == "undefined") {
        appendString += '<li><a href="' + item.url + '"><h3>' + item.name + '</h3></a>';
      } else {
        appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
      }
      appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
    }

    searchResults.innerHTML = appendString;
  } else {
    searchResults.innerHTML = '<li>No results found</li>';
  }
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (pair[0] === variable) {
      return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
    }
  }
}

var searchTerm = getQueryVariable('query');
console.log("window.store", window.store)
if (searchTerm) {
  document.getElementById('search-box').setAttribute("value", searchTerm);

  // Initalize lunr with the fields it will be searching on. I've given title
  // a boost of 10 to indicate matches on this field are more important.
  var idx = lunr(function () {
    this.field('id');
    this.field('title', { boost: 10 });
    this.field('author');
    this.field('category');
    this.field('content');
    this.field('name', { boost: 9 });
    this.field('type');
    this.field('shortdescription');
    this.field('position');
    this.field('email');


    for (var key in window.store) {
      this.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'category': window.store[key].category,
        'content': window.store[key].content,
        'name': window.store[key].name,
        'type': window.store[key].type,
        'shortdescription': window.store[key].shortdescription,
        'position': window.store[key].position,
        'email': window.store[key].email
      })
    }
  })

  var results = idx.search(searchTerm); // Get lunr to perform a search
  console.log("lunar results", results)
  displaySearchResults(results, window.store); // We'll write this in the next section
}