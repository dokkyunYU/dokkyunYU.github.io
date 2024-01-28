자바스크립트에도 Set를 쓸 수 있다.

```js
const a = [1,2,3,4,5];
const b = new Set(a);
b.add(6)

console.log(...b) // 1,2,3,4,5,6
```

전개연산을 사용하면 추가된 순서대로 반환되어 나온다.



[<= 뒤로](JSindex.md)