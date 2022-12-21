# vueproject

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
```js
[
  {
    path:'/',
    name:"home",
    label:'首页',
    icon:'s-home',
    url:"Home/Home"
  },
  {
    path:'/mall',
    name:"mall",
    label:'商品管理',
    icon:'video-play',
    url:"MallManage/MallManage"
  },
  {
    path:'/user',
    name:"user",
    label:'用户管理',
    icon:'user',
    url:"UserManage/UserManage"
  },
  {
    
    label:'其他',
    icon:'location',
    children:[
      {
        path:"/page1",
        name:"page1",
        label:'页面1',
        icon:'setting',
        url:"Other/PageOne"
      },
      {
        path:"/page2",
        name:"page2",
        label:'页面3',
        icon:'setting',
        url:"Other/PageTwo"
      },
    ]
  },
]
```