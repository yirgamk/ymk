xhr.open('GET', url, true);
xhr.responseType = 'json';
 var articleDiv = document.createElement('div');
  articleDiv.classList.add('article');
  articleDiv.appendChild(title);
xhr.send();
