export function fun() {
  function A1<T>(_len: number, _val: T): Array<T> {
    const res: T[] = []
    for (let i = 0; i < _len; i++) {
      res[i] = _val
    }
    return res
  }
  const arr = A1(3, true)
  console.log(arr)
  console.log(arr[0].toString())
  console.log(typeof arr[0])
  // const A: isNumber | isString | isBoolean = (a) => a
  // type isNumber = (a: number) => number
  // type isString = (a: string) => string
  // type isBoolean = (a: boolean) => boolean
  // console.log(typeof A('a'))

  function A2<T, U>(arr: [T, U]): [U, T] {
    return [arr[1], arr[0]]
  }
  console.log(A2([1, 'a'])) // ['a',1]

  interface vType {
    length: number
  }
  function A3<T extends vType>(v: T): T {
    console.log(v.length) // err: 类型“T”上不存在属性“length”。(2339)
    return v
  }
  //A3(1) // err: 类型“number”的参数不能赋给类型“vType”的参数。(2345)
  A3('aaaaa') // 5

  interface A4<T> {
    list: T[]
  }
  const a1: A4<{ name: string; price: number }> = {
    list: [{ name: '张三', price: 1 }]
  }
  console.log(a1.list[0].name, a1.list[0].price) // 张三 1

  class A5<T> {
    private list: T[] = []
    add(v: T) {
      this.list.push(v)
    }
    getMax(): T {
      console.log(this.list)
      let res = this.list[0]
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] > res) {
          res = this.list[i]
        }
      }
      return res
    }
  }
  const a2 = new A5()
  a2.add(1)
  a2.add(true)
  a2.add(3)
  a2.add(2)
  console.log(a2.getMax())

  type A6<T> = { list: T[] } | T[]
  const a3: A6<number> = { list: [1] }
  const a4: A6<number> = [1]
  const a5: A6<string> = { list: ['1'] }
  const a6: A6<string> = ['1']
}
