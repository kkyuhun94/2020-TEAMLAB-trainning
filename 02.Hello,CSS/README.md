# Quest 02. Hello, CSS


## Introduction
* CSS는 Cascading StyleSheet의 약자입니다. 웹브라우저에 표시되는 HTML 문서의 스타일을 지정하는 (거의) 유일하지만 다루기 쉽지 않은 언어입니다. 이번 퀘스트를 통해 CSS의 기초적인 레이아웃 



# Checklist

## CSS를 HTML에 적용하는 세 가지 방법의 장단점은 무엇인가요?
* Inline Style Sheet : HTML 태그의 style 속성에 CSS코드를 넣는 방법. 
  * HTML문서 안에서 간단하고 직관적으로 사용 가능.하지만 꾸미는데 한계가 있고, 재사용이 불가능.
* Internal Style Sheet : HTML 문서 안의 `<style>`과 `</style>`안에 CSS코드를 넣는 방법. 
  * HTML문서 안에서 여러 요소를 한번에 꾸밀 수 있음. 하지만 다른 HTML 문서에는 적용할 수 없음.
* Linking Style Sheet : 별도의 CSS 파일을 만들고 HTML 문서와 연결하는 방법.
  * 여러 HTML 문서에 사용할 수 있음. 파일을 별도로 만들어서 연결해야 하므로 간단한 작업을 할 때는 더 비효율적일 수 있음.

## 여러 개의 CSS 규칙이 한 개의 대상에 적용될 때, 어떤 규칙이 우선순위를 가지게 되나요?
* 스타일 우선순위
 1.사용자 스타일 시트
 2.제작자 스타일 시트
 3.사용자 스타일 시트
 4.브라우저 스타일 시트

* 태그 간, 선택자 간에 대한 우선순위
 1.속성값 뒤의 !important
 2.태그에 inline으로 속성 지정
 3.선택자가 #id
 4.선택자가 `.class` 및 `pseudo` 클래스 (ex-`:hover`)
 5.선택자가 tag 이름

## 어떤 박스가 `position: absolute;`인 속성을 갖는다면, 그 위치의 기준점은 어디가 되나요?
*`position: absolute;` : 문서의 원래 위치와 상관없이 위치를 지정할 수 있다. 가장 가까운 상위 요소를 기준으로(단, static은 제외) 위치가 결정. 상위 요소가 없으면 위치는 html을 기준으로 설정.
*`position: static;` : 초기값으로 위치를 지정하지 않을 때와 같음. 앞에 설정된 position을 무시할 때 사용되기도 함. top,bottom,left,right속성 값이 적용되지 않음.
*`position: relative;`: 위치 계산을 할 때 static의 원래 위치부터 계산. top,bottom,left,right속성 값 설정 가능.
*`position: fixed;` : 브라우저 화면의 상대 위치. 화면이 바뀌더라도 고정된 위치를 설정 가능. 상위요소 영향 받지 않음. 

## 가로나 세로로 여러 개의 박스가 공간을 채우되, 그 중 한 개의 박스만 가변적인 크기를 가지고 나머지 박스는 고정된 크기를 갖게 하려면 어떻게 해야 할까요?


## `float` 속성은 왜 좋지 않을까요?
* 간단히 블록 요소를 정렬 할 수 있어 텍스트와 이미지 정렬에 편리하게 쓸 수 있지만, 레이아웃 정렬을 위해 설계된 속성이 아니므로 레이아웃 정렬에 사용하면 여러 불편한점이 생긴다.
* `float`은 컨텐츠를 섹션의 왼쪽이나 오른쪽에 배치하는 것 뿐이다. 다른 섹션의 높이를 알 수 있는 방법이없다.
  
  * `float` 사용시 문제가 생길 수 있는 상황. 
  * 1.부모요소의 크기
  * 2.요소의 높이가 제각각일 때
  * 3.속성의 상속

## Flexbox(Flexible box)를 사용할 때의 한계점은 무엇인가요?
* float 기반 레이아웃 방식에 비해 레이아웃을 더 쉽게 정의할 수 있다.하지만 몇 가지 사소한 단점이 존재한다.
 * 1.호환되지 않는 브라우저가 존재한다. 
 * 2.마크업에 `<div class = "container">` 를 추가해야한다.
 * 3. 한개의 열 또는 행의 요소를 배치하도록 설계된 것으로, 전체 페이지를 디자인 할 수는 있지만 여러 행과 열을 처리할 수 없음. 

## Quest
* 아래의 그림들은 모두 전체적으로 창의 크기에 꽉 차야 하며, 창의 크기가 일정 크기 이상일 경우 전체 창 크기가 어떻게 바뀌되더라도 그림에 맞게 각 박스의 크기가 조절되어야 합니다.
* **주의사항**
  * HTML 파일은 수정하면 안됩니다.
  * `float` 속성과 `calc()`함수를 사용하지 않고 해 보세요!
* [이 그림](layout1.png)을 flexbox를 쓰지 않고 구현해 보세요. [`skeletons/layout1.html`](skeletons/layout1.html) 파일에 링크된 [`skeletons/layout1.css`](skeletons/layout1.css)파일을 수정하면 됩니다.
* [이 그림](layout2.png)을 flexbox를 쓰지 않고 구현해 보세요. [`skeletons/layout2.html`](skeletons/layout2.html)  파일에 링크된 [`skeletons/layout2.css`](skeletons/layout2.css) 파일을 수정하면 됩니다.
* [이 그림](layout3.png)을 flexbox를 쓰지 않고 구현해 보세요. [`skeletons/layout3.html`](skeletons/layout3.html)  파일에 링크된 [`skeletons/layout3.css`](skeletons/layout3.css) 파일을 수정하면 됩니다.
* 위와 같은 그림을 flexbox를 써서 구현해 보세요. [`skeletons/layout4.html`](skeletons/layout4.html)  파일에 링크된 [`skeletons/layout4.css`](skeletons/layout4.css) 파일을 수정하면 됩니다. - (그림 없음)
