import { Store } from "pullstate";

const data = [
  {
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvi5osr731JQNVAVjTyiQSSlhOKtbTc9IXSA&usqp=CAU',
    title:'Groceries & Essentials',
    shops:[
      {
        name : 'Shop 1',
        address : 'Shop 1 address',
        status : true,
        items : [
          {
            name : 'item 1',
            price : 300
          },
          {
            name : 'item 2',
            price : 500
          },
          {
            name : 'item 3',
            price : 200
          }
        ] 
      },
      {
        name : 'Shop 2',
        address : 'Shop 2 address',
        status : false,
        items : [
          {
            name : 'item 1',
            price : 300
          },
          {
            name : 'item 2',
            price : 500
          },
          {
            name : 'item 3',
            price : 200
          }
        ] 
      },
      {
        name : 'Shop 3',
        address : 'Shop 3 address',
        status : false,
        items : [
          {
            name : 'item 1',
            price : 300
          },
          {
            name : 'item 2',
            price : 500
          },
          {
            name : 'item 3',
            price : 200
          }
        ] 
      },
    ]
  },
  {
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvi5osr731JQNVAVjTyiQSSlhOKtbTc9IXSA&usqp=CAU',
    title:'Fruits & Veggies',
    shops:[
      {
        name : 'Shop 1',
        address : 'Shop 1 address',
        status : true,
        items : [
          {
            name : 'item 1',
            price : 300
          },
          {
            name : 'item 2',
            price : 500
          },
          {
            name : 'item 3',
            price : 200
          }
        ] 
      },
      {
        name : 'Shop 2',
        address : 'Shop 2 address',
        status : false,
        items : [
          {
            name : 'item 1',
            price : 300
          },
          {
            name : 'item 2',
            price : 500
          },
          {
            name : 'item 3',
            price : 200
          }
        ] 
      },
      {
        name : 'Shop 3',
        address : 'Shop 3 address',
        status : false,
        items : [
          {
            name : 'item 1',
            price : 300
          },
          {
            name : 'item 2',
            price : 500
          },
          {
            name : 'item 3',
            price : 200
          }
        ] 
      },
    ]
  },
  {
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvi5osr731JQNVAVjTyiQSSlhOKtbTc9IXSA&usqp=CAU',
    title:'Stationary & Books',
    shops:[
      {
        name : 'Shop 1',
        address : 'Shop 1 address',
        status : true,
        items : [
          {
            name : 'item 1',
            price : 300
          },
          {
            name : 'item 2',
            price : 500
          },
          {
            name : 'item 3',
            price : 200
          }
        ] 
      },
      {
        name : 'Shop 2',
        address : 'Shop 2 address',
        status : false,
        items : [
          {
            name : 'item 1',
            price : 300
          },
          {
            name : 'item 2',
            price : 500
          },
          {
            name : 'item 3',
            price : 200
          }
        ] 
      },
      {
        name : 'Shop 3',
        address : 'Shop 3 address',
        status : false,
        items : [
          {
            name : 'item 1',
            price : 300
          },
          {
            name : 'item 2',
            price : 500
          },
          {
            name : 'item 3',
            price : 200
          }
        ] 
      },
    ]
  }
]

export const myStore = new Store({
  nogozoData : data
})

