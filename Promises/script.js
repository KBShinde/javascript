//  example 1

// const promise1 = new Promise((resolve, reject) => {
//     let success = false

//     if(success) {
//         resolve("Promise is resolved")
//     } else {
//         reject('Promise is rejected')
//     }
// })

// promise1.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log('Error :', err)
// })

// example 2 

// const promise2 = new Promise((resolve , reject) => {
//     let success = false
    
//     setTimeout(() => {
//         if(success)
//             resolve('Operation is completed successfully')
//         else 
//             reject('Operation failed')
//     }, 2000)
// })

// promise2.then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log('Error :', err)
// })

// example 3 

// function waitFor(time){
//    return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Waited for ${time} miliseconds`)
//         }, time)
//    })
// }

// waitFor(2000).then((res) => {
//     console.log(res)
// })

// fetch

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

//         if(!response.ok) {
//             throw new Error('Network response is not ok')
//         }
//         const data = await response.json()
//         console.log('fetched data :' , data)
//     } catch(err) {
//         console.log('Error :' , err)
//     }
// }

// fetchData()

// fetch 2 

async function fetchUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok) {
            throw new Error('Netwoek response is not ok')
        }

        const data  = await response.json()
        console.log('Fetched data :', data)
    } catch(err){
        console.log('Error :',err)
    } 
}

fetchUsers()