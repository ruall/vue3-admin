export default [
  {
    id: 1,
    name: '菜单一'
  },
  {
    id: 2,
    name: '菜单二'
  },
  {
    id: 3,
    name: '菜单三',
    children: [
      {
        id: 31,
        name: '菜单三  一'
      },
      {
        id: 32,
        name: '菜单三  二',
        children: [
          {
            id: 321,
            name: '菜单三  二  一'
          },
          {
            id: 322,
            name: '菜单三  二  二',
            children: [
              {
                id: 3221,
                name: '菜单三  二  二  一'
              },
              {
                id: 3222,
                name: '菜单三  二  二  二',
                children: [
                  {
                    id: 32221,
                    name: '菜单三  二  二  二  一'
                  },
                  {
                    id: 32222,
                    name: '菜单三  二  二  二  二',
                    children: [
                      {
                        id: 322221,
                        name: '菜单三  二  二  二  二  一'
                      },
                      {
                        id: 322222,
                        name: '菜单三  二  二  二  二  二'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 323,
            name: '菜单三  二  三'
          }
        ]
      },
      {
        id: 33,
        name: '菜单三  三'
      },
      {
        id: 34,
        name: '菜单三   四'
      },
      {
        id: 35,
        name: '菜单三   五'
      }
    ]
  },
  {
    id: 4,
    name: '菜单四'
  },
  {
    id: 5,
    name: '菜单五',
    children: [
      {
        id: 51,
        name: '菜单五  一'
      },
      {
        id: 52,
        name: '菜单五  二',
        children: [
          {
            id: 521,
            name: '菜单五  二  一'
          },
          {
            id: 522,
            name: '菜单五  二  二'
          }
        ]
      },
      {
        id: 53,
        name: '菜单五  三'
      }
    ]
  },
  {
    id: 6,
    name: '菜单六'
  }
]
