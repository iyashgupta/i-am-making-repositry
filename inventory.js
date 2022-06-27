let data = JSON.parse(localStorage.getItem("data"))
let productsdata = document.querySelector("#products_data")

data.map((ele) => {
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = ele.img
    img.setAttribute("id","img")

    let name = document.createElement("h3")
    name.innerText = ele.name
    let brand = document.createElement("p")
    brand.innerText = ele.brand
    let price = document.createElement("p")
    price.innerText = ele.price

    let remove = document.createElement("button")
    remove.innerText = "Remove"
    remove.setAttribute("id","ele")
    remove.addEventListener("click", removefun)

    div.append(img, name, brand, price ,remove)

    productsdata.append(div)
})

function removefun() {
    event.target.parentNode.remove()
}