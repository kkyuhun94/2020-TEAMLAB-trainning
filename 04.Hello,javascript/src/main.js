
function hidef() {
  window.location.reload(true);
}

//한개만 지우는 함수
function removeNode() {
  var parent = document.getElementById("target");
  // var child = document.getElementById("blue");
  var child = document.getElementById("blue");
  parent.removeChild(child);
}
//파란색 다지우는 함수
function removeblue() {
  var parent = document.getElementById("target");
  // var child = document.getElementById("blue");
  var child = document.getElementById("blue");
  // while (parent.hasChildNodes())
  // {
  //   var child = document.getElementById("blue");
  //   parent.removeChild(child);
  // }
  var i = 0;
  while (i < 6)
  {
    var child = document.getElementById("blue");
    parent.removeChild(child);
    i = i+1;
    console.log(i)
  }

}
//분홍색 다지움
function removepink() {
  var parent = document.getElementById("target");
  // var child = document.getElementById("blue");
  var child = document.getElementById("pink");
  var i = 0;
  while (i < 6)
  {
    var child = document.getElementById("pink");
    parent.removeChild(child);
    i = i+1;
    console.log(i)
  }
}

function removeyellow() {
  var parent = document.getElementById("target");
  // var child = document.getElementById("blue");
  var child = document.getElementById("yellow");
  var i = 0;
  while (i < 6)
  {
    var child = document.getElementById("yellow");
    parent.removeChild(child);
    i = i+1;
    console.log(i)
  }
}


function removetshirt() {
  var parent = document.getElementById("target")
  var childs = document.getElementsByName("tshirt")
  var i = 0;
  while (i < 6){
    parent.removeChild(childs[0]);
    i++;
  }
}

function removepants() {
  var parent = document.getElementById("target")
  var childs = document.getElementsByName("pants")
  var i = 0;
  while (i < 6){
    parent.removeChild(childs[0]);
    i++;
  }
}
function removeskirt() {
  var parent = document.getElementById("target")
  var childs = document.getElementsByName("skirt")
  var i = 0;
  while (i < 6){
    parent.removeChild(childs[0]);
    i++;
  }
}










































// json파일에서 데이터를 읽어오는데 성공하면 response
// function loadItems() {
//   return fetch('data/data.json')
//   .then(response => response.json())
//   .then(json => json.items);              //성공적일 경 response라는 object전달
// }
//
//
//
// //Update the list with the given items
// function displayItems(items) {
//   const container = document.querySelector('.items');
//   container.innerHTML = items.map(item => createHTMLString(item)).join('');
// }
//
//
// //Create HTML list item from the given data item
// function createHTMLString(item) {
//   return `
//   <li class ="item">
//     <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
//     <span class ="item_description">${item.gender},${item.size}</span>
//   </li>
//   `;
// }
//
// function onButtonClick(event, items) {
//   const dataset = event.target.dataset;
//   const key = dataset.key;
//   const value = dataset.value;
//   if(key == null || value == null) {
//     return;
//   }
//   displayItems(items.filter(item => item[key]==value));
// }
//
//
// function setEventListeners(items){
//   const logo = document.querySelector('.logo');
//   const buttons = document.querySelector('.buttons');
//   logo.addEventListener('click',event => onButtonClick(event, items));
// }
//
//
// //main
// loadItems()                      //items를 받아와서
//   .then(items => {                   //함수에 전달받은 item을 넣어주고
//   displayItems(items);                //items를 html에 보여주고
//   setEventListeners(items)            // 버튼을 누르면 필터링 해야함.
//   })
//   .catch(console.log);         //에러 날경우 콘솔에 출력
//
// //방법2 Handle button click
// function onButtonClick(event, items) {
//   const target = event.target;
//   const key = target.dataset.key;
//   const value = target.dataset.value;
//   if(key == null || value == null) {
//     return;
//   }
//   updateItems(items,key,value);
// }
// Make the items matching {key:value} invisible.
// function updateItems(items, key, value) {
//   items.forEach(item => {
//     if (item.dataset[key]==value){
//       item.classList.remove('invisible');
//     } else {
//       item.classList.add('invisible');
//     }
//   });
// }
