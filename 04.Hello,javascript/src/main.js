
// json파일에서 데이터를 읽어오는데 성공하면 response
function loadItems() {
  return axios('data/data.json')
  .then(response => response.json())
  .then(json => console.log(json));                               //성공적일 경 response라는 object전달
}


//main
loadItems()                      //items를 받아와서
  .then(items => {                   //함수에 전달받은 item을 넣어주고
  // displayItems(items);                //items를 html에 보여주고
  // setEventListeners(items)            // 버튼을 누르면 필터링 해야함.
  })
  .catch(console.log);         //에러 날경우 콘솔에 출력
