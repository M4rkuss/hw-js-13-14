// //1)
// const buyList = [
//   {
//     name: 'apple',
//     quantity: 5,
//     isBought: true
//   },
//   {
//     name: 'milk',
//     quantity: 2,
//     isBought: true
//   },
//   {
//     name: 'chocolate',
//     quantity: 1,
//     isBought: false
//   },
//   {
//     name: 'cheese',
//     quantity: 1,
//     isBought: false
//   }
// ]
//
// function showBuyList () {
//   buyList.sort((a, b) => {
//     if (a.isBought > b.isBought) return 1
//     if (a.isBought < b.isBought) return -1
//     if (a.isBought === b.isBought) return 0
//   })
//   console.log(buyList)
// }
//
//
// function addProduct (product) {
//   let newItem = {
//     name: product,
//     quantity: 1,
//     isBought: false
//   }
//   for (let i = 0; i < buyList.length; i++) {
//     if (buyList[i].name === product){
//       buyList[i].quantity++
//       break
//     }
//     if (buyList[i].name !== product && i === buyList.length-1) {
//       buyList.push(newItem)
//     }
//   }
//   console.log(buyList)
// }
//
// addProduct('salt')
//
// function buyProduct (name) {
//   buyList.forEach(e => {
//     if (e.name === name) {
//       if (e.isBought === false) {
//         e.isBought = true
//       }
//     }
//   })
//   console.log(buyList)
// }
//
// buyProduct('chocolate')
//
// showBuyList()

// //2)
// const receipt = [
//   {
//     name: 'Молоко',
//     quantity: 2,
//     price: 30
//   },
//   {
//     name: 'Хлеб',
//     quantity: 1,
//     price: 15
//   },
//   {
//     name: 'Яблоко',
//     quantity: 5,
//     price: 6
//   },
//   {
//     name: 'Шоколад',
//     quantity: 2,
//     price: 35
//   },
//   {
//     name: 'Вода',
//     quantity: 3,
//     price: 10
//   },
//   {
//     name: 'Сыр',
//     quantity: 2,
//     price: 50
//   }
// ]
//
// function showReceipt () {
//   let arr = []
//   receipt.forEach(e => {
//     let totalPrice = e.quantity * e.price
//     console.log(`Товар: ${e.name}, Количество: ${e.quantity}, Цена за единицу: ${e.price}, Стоимость: ${totalPrice}`)
//     for (let i = 0; i <= totalPrice; i++) {
//       if (i === totalPrice) {
//         arr.push(i)
//       }
//     }
//   })
//
//   let maxPrice = arr.sort((a, b) => {
//     if (a > b) return -1
//     if (a > b) return 1
//     if (a === b) return 0
//   })
//   maxPrice = maxPrice[0]
//
//   let sumPrice = arr.reduce((prevValue, currValue) => prevValue + currValue, 0)
//   console.log(`Всего к оплате: ${sumPrice}`)
//
//   receipt.forEach(obj => {
//     if (maxPrice === obj.price * obj.quantity) {
//       console.log(`Самая дорогая покупка: ${obj.name}`)
//     }
//   })
// }
//
//
// showReceipt()


//3)
let cssStyles = [
  {
    name: 'color',
    value: 'red'
  },
  {
    name: 'font-size',
    value: 21 + "px"
  },
  {
    name: 'text-align',
    value: 'center'
  },
  {
    name: 'text-decoration',
    value: 'underline'
  },
]



function addText () {
  document.write("<p>Какой-то текст</p>")
  let text = document.querySelector('p')
  let arr = []
  let koma = /,/gi;
  cssStyles.forEach(e => {
    let a = e.name
    let b = e.value
    arr.push(a + ":", b + ";")
    let style = arr.toString().replace(koma, '')
    text.setAttribute("style", `${style}`)
  })
}

addText()


// //4)
// let audience = [
//   {
//     name: 'Apollo',
//     seats: 12,
//     faculty: "Roro"
//   },
//   {
//     name: 'Beyonce',
//     seats: 18,
//     faculty: "Jojo"
//   },
//   {
//     name: 'Calvin',
//     seats: 15,
//     faculty: "Koko"
//   },
//   {
//     name: 'Asti',
//     seats: 15,
//     faculty: "Koko"
//   },
// ]
//
// function showAudience () {
//   console.log(audience)
// }
//
// function showByFaculty (facultyName) {
//   audience.forEach(e => {
//     if (e.faculty === facultyName) {
//       console.log(e)
//     }
//   })
// }
//
// function sortBySeats () {
//   let sortedSeats = audience.sort((a,b) => {
//     if (a.seats > b.seats) return 1
//     if (a.seats < b.seats) return -1
//     if (a.seats === b.seats) return 0
//   })
//   console.log(sortedSeats)
// }
//
// function sortByAlphabet () {
//   let sortedAudience = audience.sort((a,b) => {
//     if (a.name > b.name) return 1
//     if (a.name < b.name) return -1
//     if (a.name === b.name) return 0
//   })
//   console.log(sortedAudience)
// }
//
// showAudience()
//
// showByFaculty("Koko")
//
// sortBySeats()
//
// sortByAlphabet ()