class Product{
    constructor(name, price, year){
        this.name=name;
        this.price=price;
        this.year=year;
    }
}
class UI {
    addpruduct(product) {
        const productlist = document.getElementById('product-list');
        const element = document.getElementById('div');
        element.innerHTML=`
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product Name</strong>: ${product.name}
                <strong>Product price</strong>: ${product.price} 
                <strong>Product year</strong>: ${product.year}  
                <a href="#" class="btn btn danger"name="delete">Delete</a>     
            </div>
        </div>
     `;   
     productlist.appendChild(element)  
    }
        
    resetForm() {
        document.getElementById('product-form') .reset();
        
    }

    }

    deleteProduct();{
    if(element.name === 'delete') {
    element.parentElement.parentElement.parentElement.remove();
    this.showMessage('Product Deleted Successfully', 'danger');
     }
    }

    showMessage(message, cssClass); {
        const div = document.createElement('div');
        div.className = 'alert alert-${cssClass}'; 
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(funtion() {
            document.querySelector('.alert').remove();

        }, 3000);
    } 


document.getElementById('product-from')
.addEventListener('submit', function(e) {
const name = document.getElementById('name').value;
const price = document.getElementById('price').value;
const year = document.getElementById('year').value;

const product = new Product(name, price, year);

const ui = new UI();

ui.addpruduct(Product);
ui.resetForm();
ui.showMessage('Product Added Successfull', 'success');

e.preventDefault();

});

document.getElementById('product-list').addEventListener('click', function() {
    const ui = new UI();
    ui.deleteProduct(e.target); 

});