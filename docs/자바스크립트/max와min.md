Math.max()는 처음 -Infinity값을 보유하고 있다가 주어진 숫자들 중 더 큰 수가 있을때마다 그 숫자로 교체하여 최종적으로 최대값을 반환한다.

Math.min()는 처음 Infinity값을 보유하고 있다가 주어진 숫자들 중 더 작은 수가 있을때마다 그 숫자로 교체하여 최종적으로 최소값을 반환한다.

따라서 아무런 변수도 주어지지 않으면 각각 -Infinity와 Infinity를 반환한다.

```js
console.log(Math.max()) // -Infinity
console.log(Math.min()) //  Infinity
```
