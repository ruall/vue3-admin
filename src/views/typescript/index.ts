function tsFun() {
  // const str: string = '123'
  // let num: number = 1
  // let big: bigint = 100n
  // const bool: boolean = true
  // const u: undefined = undefined
  // const n: null = null
  // const obj: object = { x: 1 }
  // const sym: symbol = Symbol('me')

  // big = num
  // num = big

  const enum Color {
    RED = 10,
    PINK,
    BLUE
  }
  const color: Color[] = [Color.RED, Color.PINK, Color.BLUE]
  console.log(color)

  const arr1: number[] = [1, 2, 3]
  const arr2: Array<number> = [1, 2, 3]

  const arr3: [number, string] = [1, '2']

  const sym1 = Symbol('1')
  const sym2 = Symbol('1')
  console.log(Symbol('1') === Symbol('1')) //false

  let val: unknown
  val = 'a'
  val = 1
  val = true
  val = []
  val = {}
  val = undefined
  val = null

  const val1: unknown = val
  const val2: any = val
  // const val3: string = val
  // const val4: number = val
  // const val5: boolean = val
  // const val6: object = val

  function fun(name: string): void {
    console.log(1)
  }

  // type Obj = object extends Object ? true : false
  // type obj = Object extends object ? true : false
  // console.log((Obj = obj))
  // obj = Obj

  let name: string | number
  // console.log(name.toString())
  name = 1
  console.log(name.toFixed(2))
  name = 'string'
  console.log(name.length)

  const str: any = 'this is a string'
  // const len: number = (<string>str).length
  // console.log(len) // 16

  const len: number = (str as string).length
  console.log(len) //16

  // const s1: null | undefined | string

  // console.log(s1!.toString())

  // const flag1: 'hello' = 'hello'
  // console.log(flag1)

  type Direction = 'up' | 'down'
  function move(dir: Direction) {
    console.log(dir)
  }
  move('down')
  // move('left')
  let s1: number | string
  s1 = 1
  s1 = 'a'

  type IntersectionType = { id: number; name: string } & { age: number }

  const person: IntersectionType = {
    id: 1,
    name: '张三',
    age: 10
  }

  class Animal {
    name!: string
  }
  class Bird extends Animal {
    fly!: number
  }

  const getName = (animal: Animal) => {
    if (animal instanceof Bird) {
      console.log(animal.fly)
    } else {
      console.log(animal.name)
    }
  }
  const f1 = new Animal()
  f1.name = 'a'
  getName(f1)
  const f2 = new Bird()
  f2.fly = 1
  getName(f2)

  // interface Bird {
  //   fly: number
  // }

  // interface Dog {
  //   leg: number
  // }

  // function getNumber(value: Bird | Dog) {
  //   if ('fly' in value) {
  //     return value.fly
  //   }
  //   return value.leg
  // }
  // console.log(getNumber({ leg: 1 }))

  // function double(input: string | number | boolean) {
  //   if (typeof input === 'string') {
  //     return input + input
  //   } else {
  //     if (typeof input === 'number') {
  //       return input * 2
  //     } else {
  //       return !input
  //     }
  //   }
  // }
  // console.log(double(true))

  type Fun = (x: number, y: number) => number
  const Myfun: Fun = function (x, y) {
    return x + y
  }
  Myfun(1, 2)

  const MySum: (x: number, y: number) => number = function (x, y): number {
    return x + y
  }
  MySum(1, 2)
}

export { tsFun }
