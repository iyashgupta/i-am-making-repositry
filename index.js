//store the products array in localstorage as "data"
document.querySelector("#product_form").addEventListener("submit",myfunction)
function myfunction (){
    let arr=JSON.parse(localStorage.getItem("data"))||[]

    event.preventDefault()
  let form=document.querySelector("#product_form")
    let productname=form.product_name.value
    let prductbrand=form.product_brand.value
    let productprice=form.product_price.value
    let productimage=form.product_image.value


// console.log(productname,prductbrand,productprice,productimage)


    let objcreator=new Productdata(productimage,prductbrand,productname,productprice)

    // console.log(objcreator)
    arr.push(objcreator)
    localStorage.setItem("data",JSON.stringify(arr))
    window.location.reload() 
}

function Productdata(productimage,prductbrand,productname,productprice){

this.img=productimage
this.brand=prductbrand
this.name=productname
this.price=productprice
}