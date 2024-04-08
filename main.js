  let countEl = document.getElementById('count');
  const  displayOrder = document.getElementById('ordered-cart');
  const displayProduct = document.getElementById('product');
  let totalEl = document.getElementById('total-item')
 
 
  let total = 0;
  let count = 0; 

  const products = [

    {
        id: 1,
        name: "Iphone 13",
        image: "https://slot.ng/media/catalog/product/cache/68bbe6a30464c40a236033bd86dd13a8/i/p/iphone_15_pro_2_1_3.png",
        price: "$100",
    },
    {
        id: 2,
        name: "Iphone 12",
        image: "https://slot.ng/media/catalog/product/cache/68bbe6a30464c40a236033bd86dd13a8/i/p/iphone_15_pro_2_1_3.png",
        price: "$5,000",
    },
    {
        id: 3,
        name: "Iphone 11",
        image: "https://slot.ng/media/catalog/product/cache/68bbe6a30464c40a236033bd86dd13a8/i/p/iphone_15_pro_2_1_3.png",
        price: "$7,000",
    },
    {
        id: 4,
        name: "Samsung S22",
        image: "https://i5.walmartimages.com/seo/Samsung-S22-Plus-5G-256GB-Factory-Unlocked-Pink-Gold-Cellphone_11f17e03-ff8b-4028-b055-9cbed086d70a.cfe7b3592fbd6cc9c5449c0630ced326.jpeg",
        price: "$5,500",
    },
    {
        id: 5,
        name: "Iphone 15",
        image: "https://slot.ng/media/catalog/product/cache/68bbe6a30464c40a236033bd86dd13a8/i/p/iphone_15_pro_2_1_3.png",
        price: "$4,000",
    },
    {
        id: 6,
        name: "IPHONE 15 PROMAX",
        image: "https://images.macrumors.com/t/OGS-wMpuHXbX6VkpJd6urJH1rEg=/1600x0/article-new/2023/09/iphone-15-pro-gray.jpg",
        price: "$800",
    },

  ]

  const productView = products.map((product) =>{

     let divPro = document.createElement('div')
     divPro.setAttribute('class', 'box')
     
     divPro.innerHTML = `<img src = ${product.image} class ="img">
                          <h3>${product.name}</h3>
                           <p>${product.price}</p>
                           <button class="btn-buy" id="order-btn">ORDER</button>`

                           displayProduct.appendChild(divPro)

                     

  })

  
    const orderBtn = document.querySelectorAll('.btn-buy')
    orderBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let product = e.target.parentElement
            let productImage = product.querySelector('img').src
            let productName = product.querySelector('h3').textContent
            let productPrice = product.querySelector('p').textContent

            let divOrder = document.createElement('div')
            divOrder.setAttribute('class', 'display')
            divOrder.innerHTML = `<img src = ${productImage} class ="img">
                                  <h3>${productName}</h3>
                                  <p>${productPrice}</p>
                                  <button class="btn-remove
                                  ">REMOVE</button>`

                                  let removeBtn = divOrder.querySelector('.btn-remove')
                                    removeBtn.addEventListener('click', () => {
                                        divOrder.remove()
                                        count--
                                        countEl.textContent = count
                                        total -= parseInt(productPrice.replace('$', '').replace(',', ''))
                                        totalEl.textContent = total
                                    })

            displayOrder.appendChild(divOrder)
            count++
            countEl.textContent = count
            total += parseInt(productPrice.replace('$', '').replace(',', ''))
            totalEl.textContent = `$${total}`
        })
    })


  