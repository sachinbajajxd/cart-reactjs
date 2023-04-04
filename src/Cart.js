import React from "react";
import CartItem from './CartItem';

class Cart extends React.Component {

    constructor(){
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 9999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 49999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        console.log('Increase qty.', product);
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            // products: products
            products
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log('Decrease qty.', product);
        const { products } = this.state;
        const index = products.indexOf(product);
        if(products[index].qty===0){
            console.log("Cannot delete");
            return;
        }
        products[index].qty -= 1;

        this.setState({
            // products: products
            products
        })
    }

    handleDeleteProduct =(id) => {
        const {products} = this.state;

        const items = products.filter((item) => item.id !== id);// it will return an updated array with updated product

        this.setState({
            products: items
        })

    }

    render() {
        // const arr = [1, 2, 3, 4, 5];
        const { products } = this.state;
        return (
            <div className="cart">
                {/* <CartItem qty={1} price={99}  title={"Watch"} img={''} /> */}
                {products.map((product) => {
                    return (
                        <CartItem 
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteProduct={this.handleDeleteProduct}
                        />
                    ) 
                })}
            </div>
        );
    }

}

export default Cart;