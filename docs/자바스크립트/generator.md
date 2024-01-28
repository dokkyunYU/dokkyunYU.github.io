함수를 정의할때 function 뒤에 애스터리스크(\*)를 붙히면 제네레이터(generator) 함수가 만들어진다.
이 함수는 **비동기처리가 가능한 함수**이며 `next()`라는 메서드를 사용할 때 마다 동작하며, 이때 다음 `yield` 를 만나서 값을 반환할 때까지 실행하고 그 상태를 저장해둔다.
이후 다시 `next()` 메서드를 사용하면 기존의 저장된 상태부터 다시 시작하여 다음 `yield`로 값을 반환할때 까지 실행한다.

```js
function* genfunc() {
  let a = 1;
  yield a;

  let b = -1;
  yield b;
}

let gen = genfunc();
console.log(gen.next()) // { value: 1, done: false }
console.log(gen.next()) // { value: -1, done: false }
console.log(gen.next()) // { value: undefined, done: true }

for (const result of genfunc())
  console.log(result)
/*
  1
  -1
*/
```



- [javascript - yield (비동기 처리 :: Joker](https://caileb.tistory.com/197)




