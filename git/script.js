"use strict"
//
window.onload = start;

function start(){
  if (localStorage.getItem("sort")==1){
    document.getElementById('sort1').setAttribute("checked","checked");
    sort1();
  }
  if (localStorage.getItem("sort")==2){    document.getElementById('sort2').setAttribute("checked","checked");
    sort2();
  }
  if (localStorage.getItem("sort")==3){    document.getElementById('sort3').setAttribute("checked","checked");
    sort3();
  }
  if (localStorage.getItem("sort")===null) json();
  document.getElementById("howpages").value=localStorage.getItem("howpages");
}

document.getElementById('sort1').onclick = sort1;
document.getElementById('sort2').onclick = sort2;
document.getElementById('sort3').onclick = sort3;
document.getElementById('del').onclick = del;
addEventListener("keydown", function(event) {
  if (event.keyCode == 82&&18){
      del();
      document.getElementById('sort1').removeAttr("checked","checked");
      document.getElementById('sort2').removeAttr("checked","checked");
      document.getElementById('sort3').removeAttr("checked","checked");
}
});

function del(){
  json();
  localStorage.clear();
  document.getElementById("howpages").value='';
  document.getElementById("howpages").value='';
  location.reload();
}

document.getElementById('howpages').onchange= json;
document.getElementById('sort1').addEventListener('change', function(event) {localStorage.setItem("sort", "1")});
document.getElementById('sort2').addEventListener('change',function(event) { localStorage.setItem("sort", "2")});
document.getElementById('sort3').addEventListener('change',function(event) { localStorage.setItem("sort", "3")});
document.getElementById('howpages').addEventListener('change',function(event) { localStorage.setItem("howpages", document.getElementById("howpages").value)});




var myList = document.getElementById('allproducts');

function json(){
  document.getElementById("allproducts").innerHTML = ""
fetch('books.json')
 .then(resp => resp.json())
 .then((data) => {

   var filter_result = data.filter(elem => elem.pages > document.getElementById("howpages").value);

   for(var  i = 0; i < filter_result.length;i++) {

       var listItem = document.createElement('div');
       listItem.setAttribute("class", "grid-product-overview" );
       listItem.innerHTML ='<div class ="box1"><input id="pic' +i+ '" type="checkbox"><label for="pic' +i+ '" style="background-image: url('+filter_result[i].cover.large+');"></label></div><div class="box2"><h2>' +filter_result[i].title+  '</h2><hr><p id="par1">By '+filter_result[i].author+'</p><p id="par2">Release Date:' +filter_result[i].releaseDate+ ' <br>Pages:<span class="product_pages">'+filter_result[i].pages+ '</span><br>Link: <a href="'+filter_result[i].link+'" target="_blank">shop</p></div>';
       myList.appendChild(listItem);
     }
    })

  }

function sort1(){
  document.getElementById("allproducts").innerHTML = ""
  fetch('books.json')
    .then(resp => resp.json())
    .then((data) => {
  var howpages = document.getElementById("howpages").value;
  var filter_result = data.filter(elem => elem.pages > document.getElementById("howpages").value)
    function compare(a,b) {
        if (a.pages < b.pages)
          return -1;
        if (a.pages > b.pages)
          return 1;
        return 0;
      };
      filter_result.sort(compare);


      for(var  i = 0; i < filter_result.length;i++) {

          var listItem = document.createElement('div');
          listItem.setAttribute("class", "grid-product-overview" );
          listItem.innerHTML ='<div class ="box1"><input id="pic' +i+ '" type="checkbox"><label for="pic' +i+ '" style="background-image: url('+filter_result[i].cover.large+');"></label></div><div class="box2"><h2>' +filter_result[i].title+  '</h2><hr><p id="par1">By '+filter_result[i].author+'</p><p id="par2">Release Date:' +filter_result[i].releaseDate+ ' <br>Pages:<span class="product_pages">'+filter_result[i].pages+ '</span><br>Link: <a href="'+filter_result[i].link+'" target="_blank">shop</p></div>';
          myList.appendChild(listItem);
        }
      })

    }

    function sort2(){
      document.getElementById("allproducts").innerHTML = ""
      fetch('books.json')
       .then(resp => resp.json())
       .then((data) => {
         var howpages = document.getElementById("howpages").value;
         var filter_result = data.filter(elem => elem.pages > document.getElementById("howpages").value)
      function compare(a,b) {
        a=a.releaseDate.split('/');
        b=b.releaseDate.split('/');
        return a[1]-b[1]||a[0]-b[0];
      };
      filter_result.sort(compare);
      for(var  i = 0; i < filter_result.length;i++) {

          var listItem = document.createElement('div');
          listItem.setAttribute("class", "grid-product-overview" );
          listItem.innerHTML ='<div class ="box1"><input id="pic' +i+ '" type="checkbox"><label for="pic' +i+ '" style="background-image: url('+filter_result[i].cover.large+');"></label></div><div class="box2"><h2>' +filter_result[i].title+  '</h2><hr><p id="par1">By '+filter_result[i].author+'</p><p id="par2">Release Date:' +filter_result[i].releaseDate+ ' <br>Pages:<span class="product_pages">'+filter_result[i].pages+ '</span><br>Link: <a href="'+filter_result[i].link+'" target="_blank">shop</p></div>';
          myList.appendChild(listItem);
        }
      })

    }

  function sort3(){
    document.getElementById("allproducts").innerHTML = ""
    fetch('books.json')
     .then(resp => resp.json())
     .then((data) => {
       var howpages = document.getElementById("howpages").value;
       var filter_result = data.filter(elem => elem.pages > document.getElementById("howpages").value)
  function compare(a,b) {
      if (a.author < b.author)
        return -1;
      if (a.author > b.author)
        return 1;
      return 0;
    };
    filter_result.sort(compare);


    for(var  i = 0; i < filter_result.length;i++) {

        var listItem = document.createElement('div');
        listItem.setAttribute("class", "grid-product-overview" );
        listItem.innerHTML ='<div class ="box1"><input id="pic' +i+ '" type="checkbox"><label for="pic' +i+ '" style="background-image: url('+filter_result[i].cover.large+');"></label></div><div class="box2"><h2>' +filter_result[i].title+  '</h2><hr><p id="par1">By '+filter_result[i].author+'</p><p id="par2">Release Date:' +filter_result[i].releaseDate+ ' <br>Pages:<span class="product_pages">'+filter_result[i].pages+ '</span><br>Link: <a href="'+filter_result[i].link+'" target="_blank">shop</p></div>';
        myList.appendChild(listItem);
      }
    })

  }
