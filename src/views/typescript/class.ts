const clsFun = () => {
  class Person {
    name!: string
    constructor(_name: string) {
      this.name = _name
    }
    getName(): void {
      console.log(this.name)
    }
  }
  const p1 = new Person('张三')
  p1.getName()

  class Animal {
    static name1 = '静态属性'
    name2 = '内置属性'
  }
  const bird = new Animal()
  //放在=后面是值
  const bird1 = Animal
  console.log('bird', bird.name2) // bird 内置属性
  console.log('bird1', bird1.name1) // bird1 静态属性

  class People {
    myName!: string
    constructor(myName: string) {
      this.myName = myName
    }
    get name() {
      return this.myName
    }
    set name(value) {
      this.myName = value
    }
  }
  const tony = new People('托尼')
  console.log(tony.name) // 托尼
  console.log(tony.myName) // 托尼
  tony.name = '安琪'
  console.log(tony.name) // 安琪
  console.log(tony.myName) // 安琪

  class Pr {
    public readonly name: string
    constructor(nName: string) {
      this.name = nName
    }
    setName(val: string) {
      //this.name = val // err:无法分配到 "name" ，因为它是只读属性。
    }
  }
  const p = new Pr('小白')
  console.log(p.name) // 小白

  class Ps {
    name!: string //定义实例的属性，默认省略public修饰符
    age!: number
    constructor(_name: string, _age: number) {
      this.name = _name
      this.age = _age
    }
    setName(val: string) {
      this.name = val
    }
    getName() {
      return this.name
    }
  }

  class Pe extends Ps {
    id!: number
    constructor(_name: string, _age: number, _id: number) {
      super(_name, _age)
      this.id = _id
    }
    setID(val: number) {
      this.id = val
    }
  }
  const p2 = new Pe('tony', 18, 0)
  console.log(p2.getName())

  class Pb {
    public name!: string // 父类、子类、实例外都可以使用
    protected age!: number // 父类、子类内可以使用
    private vip!: boolean // 父类内可以使用
    constructor(_name: string, _age: number, _vip: boolean) {
      this.name = _name
      this.age = _age
      this.vip = _vip
    }
    getName() {
      return this.name
    }
    setName(_val: string) {
      this.name = _val
    }
  }

  class Pc extends Pb {
    constructor(_name: string, _age: number, _vip: boolean) {
      super(_name, _age, _vip)
    }
    getAge() {
      return this.age
    }
    getVip() {
      //return this.vip // 属性“vip”为私有属性，只能在类“Pb”中访问。
    }
  }
  const p3 = new Pc('Anty', 11, false)
  //console.log(p3.age) // 属性“age”受保护，只能在类“Pb”及其子类中访问。
  //console.log(p3.vip) // 属性“vip”为私有属性，只能在类“Pb”中访问。
  console.log(p3.name) // Anty

  class Pf {
    static vip = 'Pir'
    static getName() {
      console.log(this) //注意静态方法里面的this指向的是类本身 而不是类的实例对象 所以静态方法里面只能访问类的静态属性和方法
      console.log(this.vip)
    }
    age!: number
    constructor(_age: number) {
      this.age = _age
    }
  }
  const p4 = new Pf(1)
  console.log(p4.age) // 1
  console.log(Pf.vip) // Pir
  Pf.getName() // Pf类 Pir

  abstract class Pg {
    name!: string
    abstract speak(): void
  }
  class Ph extends Pg {
    speak(): void {
      console.log('哈哈哈')
    }
  }
  //const P5 = new Pg() // err:无法创建抽象类的实例。
  const p5 = new Ph()
  p5.speak() // 哈哈哈
}

export { clsFun }
