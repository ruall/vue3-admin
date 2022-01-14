const fun = () => {
  interface Speakable {
    speak(): void
    readonly lng: string
    name?: string
  }
  const speakman: Speakable = {
    speak() {
      console.log('hello')
    },
    lng: 'zh',
    name: '张三'
    //age: 1 // err:多余属性会报错
  }
  //speakman.lng = 'en' // err:无法分配到 "lng" ，因为它是只读属性。
  speakman.name = '小明'

  interface Pa {
    run(): void
  }
  interface Pb {
    walk(): void
  }
  class Pc implements Pa, Pb {
    run(): void {
      console.log('跑步')
    }
    walk(): void {
      console.log('走路')
    }
  }
  const p1 = new Pc()
  p1.run() // 跑步
  p1.walk() // 走路

  interface Pd {
    name: string
    age: number
    [name: string]: any // 表示可以添加任意属性
  }
  const p2: Pd = {
    name: '张三',
    sex: '男',
    age: 14,
    lan: 'en'
  }

  interface Pe {
    speak1(): void
  }
  interface Pf extends Pe {
    speak2(): void
  }
  class Pg implements Pf {
    speak1(): void {
      console.log('hello')
    }
    speak2(): void {
      console.log('你好')
    }
  }
  const p3 = new Pg()
  p3.speak1() // hello
  p3.speak2() // 你好

  interface Ph {
    (price: number): number
  }
  const p4: Ph = function (val) {
    return val * 3
  }
  console.log(p4(2)) // 6

  class Pi {
    name!: string
    constructor(_name: string) {
      this.name = _name
    }
  }
  interface Pj {
    new (name: string): Pi
  }
  function Pk(v1: Pj, v2: string) {
    return new v1(v2)
  }
  const p5 = Pk(Pi, 'hello')
  console.log(p5.name) // hello

  interface Pl {
    x: number
    y: number
  }
  interface Pm {
    (x: string, y: string): void
  }

  type Pn = {
    x: string
    y: string
  }
  type Po = (x: string, y: string) => void

  interface Pp {
    x: number
  }
  interface Pp {
    y: string
  }
  const p6: Pp = { x: 1, y: 'a' }

  interface Pq extends Pp {
    z: string
  }
  const p7: Pq = { x: 1, y: 'a', z: 'b' }
  type A = { a: number }
  interface B extends A {
    b: string
  }
  const p8: B = { a: 1, b: 'a' }

  type C = B & {
    c: boolean
  }
  const p9: C = { a: 1, b: 'a', c: true }

  type D = C & {
    x: string
  }
  const p10: D = { a: 1, b: 'a', c: true, x: 'a' }
}

export { fun }
