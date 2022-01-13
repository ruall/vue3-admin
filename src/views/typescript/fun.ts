const fun = () => {
  const f1 = (x: string, y = 1, z: boolean, i?: number[], ...arr: number[]) => {
    if (arr) {
      arr.forEach((item) => {
        i?.push(item)
      })
    }
    console.log(x, y, z, i)
  }
  f1('a', 2, true, [], 1, 2, 3)

  function push(array: number[], ...items: number[]) {
    items.forEach(function (item) {
      array.push(item)
    })
  }
  const a: number[] = []
  push(a, 1, 2, 3)
  console.log(a)

  const f2 = (x: string, y: number, z?: number[], ...arr: number[]) => {
    if (arr) {
      arr.forEach((item) => {
        z?.push(item)
      })
    }
    console.log(x, y, z)
  }
  f2('a', 1, [1, 2], 3, 4, 5) // a 1 [1, 2, 3, 4, 5]

  //   type nameType = string | number
  //   const f3 = (val1: nameType, val2: nameType): number | string => {
  //     if (typeof val1 === 'string' || typeof val2 === 'string') {
  //       return val1.toString() + val2.toString()
  //     }
  //     return val1 + val2
  //   }

  //   const res = f3('abc', 'ABC')
  //   const res1 = res.split('')
  //   console.log(res, res1)
  type valType = string | number
  function f3(val1: string, val2: string): string
  function f3(val1: string, val2: number): string
  function f3(val1: number, val2: string): string
  function f3(val1: number, val2: number): number
  function f3(val1: valType, val2: valType) {
    if (typeof val1 === 'string' || typeof val2 === 'string') {
      return val1.toString() + val2.toString()
    }
    return val1 + val2
  }
  const res = f3('a', 'b')
  const res1 = res.split('')
  console.log(res, res1)
}

export { fun }
