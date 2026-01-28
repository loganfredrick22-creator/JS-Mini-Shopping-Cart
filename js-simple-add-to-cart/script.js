  const cart = []; // array to store all products

    function addProduct() {
        const name = document.getElementById("productName").value;
        const price = Number(document.getElementById("productPrice").value);
        const qty = Number(document.getElementById("productQty").value);

        if (!name || price <= 0 || qty <= 0) {
            alert("Please enter valid product details!");
            return;
        }

        const product = { name, price, qty }; // create product object
        cart.push(product); // add product to cart array

        displayCart(); // update the display
    }

    function calculateTotal() {
        let total = 0;
        for (let item of cart) {
            total += item.price * item.qty; // price * quantity
        }
        return total;
    }

    function displayCart() {
        let html = "";
        for (let item of cart) {
            html += `<div class="item">${item.name} - $${item.price} x ${item.qty} = $${(item.price*item.qty).toFixed(2)}</div>`;
        }

        document.getElementById("cart").innerHTML = html;
        document.getElementById("total").innerHTML = "Total: $" + calculateTotal().toFixed(2);
    }