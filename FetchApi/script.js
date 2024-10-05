async function fetchData() {
    try {
        const response = await fetch('https://gorest.co.in/public/v2/users')
        if(!response.ok){
            throw new Error("Response is not ok");
        }
        const data = await response.json()
        formatTable(data)
    } catch (error) {
        console.log('Error :', error);
        
    }
}

function formatTable(data) {
    const table= document.querySelector('#table tbody')

    data.forEach((user) => {
        const tr = document.createElement('tr')

        const id = document.createElement('td')
        id.textContent = user.id

        const name = document.createElement('td')
        name.textContent = user.name

        const gender = document.createElement('td')
        gender.textContent = user.gender

        const email = document.createElement('td')
        email.textContent = user.email

        const status = document.createElement('td')
        status.textContent = user.status

        tr.appendChild(id)
        tr.appendChild(name)
        tr.appendChild(gender)
        tr.appendChild(email)
        tr.appendChild(status)

        table.appendChild(tr)
    });
}

fetchData()