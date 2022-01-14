export function fun() {
  //   function A1<T>(_len: number, _val: T): Array<T> {
  //     const res: T[] = []
  //     for (let i = 0; i < _len; i++) {
  //       res[i] = _val
  //     }
  //     return res
  //   }
  //   const arr = A1(3, true)
  //   console.log(arr)
  //   console.log(arr[0].toString())
  //   console.log(typeof arr[0])
  const A: isNumber | isString | isBoolean = (a) => a
  type isNumber = (a: number) => number
  type isString = (a: string) => string
  type isBoolean = (a: boolean) => boolean
  console.log(typeof A('a'))
}
