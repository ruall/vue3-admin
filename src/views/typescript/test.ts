const test = () => {
  const a1 = {
    name: '张三',
    age: 1
  }
  type A1 = typeof a1
  function getName(p: A1): string {
    console.log(p.name)
    return p.name
  }
  getName(a1) //张三

  interface A2 {
    name: string
    age: number
    gender: 'man' | 'woman'
  }
  //   type A2Keys = 'name' | 'age' | 'gender'
  type A2Keys = keyof A2
  const getVal = (v: A2, k: A2Keys) => {
    console.log(v[k])
  }
  getVal({ name: '🌹', age: 1, gender: 'man' }, 'name') // 🌹

  interface A3 {
    name: string
    age: number
  }
  type A3K = A3['age'] // number类型

  interface A4 {
    name: string
    age: number
    isAdult: boolean
  }
  //批量把一个接口中的属性变成可选的
  type A4n = {
    [Key in keyof A4]?: A4[Key]
  }
  const a4: A4n = {}

  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any

  type User = {
    id: string
    name: string
    email: string
  }
  type UserWithoutEmail = Omit<User, 'email'> // UserWithoutEmail ={id: string;name: string;}
}

export { test }
