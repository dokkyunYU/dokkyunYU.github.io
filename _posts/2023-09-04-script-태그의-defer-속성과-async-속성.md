---
layout: post
title:  script 태그의 defer 속성과 async 속성
date:   2023-09-04 23:31:03 +0900
categories: 자바스크립트 script
tags: script/defer script/async
---

script 태그에는 defer 속성과 async 속성이 있다.

이는 외부 스크립트를 언제 다운로드하여 언제 실행하느냐를 알려주는 태그인데, 대개 스크립트는 html보다 무거운 경우가 많아서 필요로 하게 되었다.

만약 html 파일 중간에 script 태그를 넣어서 외부 스크립트를 다운로드 한다면 그 다운로드 중에는 html의 파싱이 멈추게 된다.

```js
// 어떤 html 내용들1

<script src="https://..."></script>

// 어떤 html 내용들2
```

이 경우 스크립트가 다운로드 완료될때까지 html 내용들2는 파싱되지 않아 페이지 로딩을 지연시킨다.

defer 속성과 async 속성은 둘 모두 이러한 문제를 해결할 수 있게 해준다.

우선 defer 속성은 일단 스크립트를 다운로드하되 그 다운로드 중에도 html 파싱을 멈추지 않으며, 이후 html 파싱이 완료되어 페이지가 모두 로드된 후에 해당 외부 스크립트를 실행하게된다.

또한 이 속성의 경우 어느쪽이 먼저 다운로드되는지에 상관없이 기존 명시된 순서를 지킨다.

```js
<script src="https://..." defer></script>
<script src="https://..." defer></script>
// 다운로드가 끝나도 페이지 로드 완료될때까지 기다린 후, 위쪽부터 차례로 스크립트가 실행된다.
```

async 속성도 defer 속성처럼 일단 스크립트를 다운로드하면서 그 다운로드 중에도 html 파싱을 계속하지만, 스크립트의 다운로드가 완료되면 그 즉시 스크립트가 실행된다는 차이점이 있다.
 
```js
<script src="https://..." async></script>
<script src="https://..." async></script>
// 페이지가 다 로드되지 않았어도 먼저 다운로드가 완료된 순서대로 스크립트가 실행된다.
```

만약 다음과 같이 `DOMContentLoaded` 이벤트를 감지하는 이벤트 리스너를 document에 추가했을 경우

```js

<script>
    document.addEventListener("DOMContentLoaded", () => {console.log("로딩 완료")})
</script>

<script src="https://..." async>
<script src="https://..." defer>

```

첫번째 스크립트는 다운로드가 완료되는 대로 실행되고, 두번째 스크립트는 페이지 로드가 완료된 후 `DOMContentLoaded`가 발생하기 전에 실행된다.

특히 async 속성의 경우 다운로드가 늦게 완료되면 `DOMContentLoaded` 이벤트가 먼저 발생할 수도 있다.