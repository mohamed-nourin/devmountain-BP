let btn = document.querySelector('#btn')
btn.addEventListener('click', (eve) => {
    let element;
    axios.get("https://swapi.dev/api/planets/2/").then((res) => {
        for (let i = 0; i < res.data.residents.length; i++) {
            axios.get(res.data.residents[i]).then((res1) => {
                let ele=document.createElement("h2")
                ele.textContent=res1.data.name
                let body=document.querySelector("#body")
                body.appendChild(ele)
            }).catch((err1) => console.log(err1))
        }
    }).catch((err) => console.log(err))
})