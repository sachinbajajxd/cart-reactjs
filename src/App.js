import React from "react";
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from "./Navbar";

class App extends React.Component {

    constructor(){
      super();
      this.state = {
          products: [
              {
                  price: 999,
                  title: 'Watch',
                  qty: 1,
                  img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713659063%2C1660927566964%2C1661371890735',
                  id: 1
              },
              {
                  price: 9999,
                  title: 'Phone',
                  qty: 1,
                  img: 'https://i0.wp.com/maplestore.in/wp-content/uploads/2021/09/r1433_Starlight_PDP_Image_Position-1B_Avail__en-IN.jpg?fit=2048%2C2048&ssl=1',
                  id: 2
              },
              {
                  price: 49999,
                  title: 'Laptop',
                  qty: 1,
                  img: 'https://media.istockphoto.com/id/1157789866/photo/modern-computer-laptop-with-blank-screen-on-counter-barand-window-view.jpg?s=612x612&w=0&k=20&c=Idggc96ENAdz7R_ANTzvWpMTbaUcTV4JvJYKJHAD71A=',
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

  getCartCount = () => {
    const {products} = this.state;

    let count=0;

    products.forEach((product) => {
      count+=product.qty;
    })

    return count;

  }

  getCartTotal = () => {
    const {products} = this.state;

    let total=0;

    products.forEach((product) => {
      total+=(product.qty * product.price);
    })
    return total;
  }

  render() {

    const { products } = this.state;

    return (
      <div className="App">
        <Navbar
          count={this.getCartCount()}
        />
        <Cart 
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {fontSize: 20, padding: 10} }>TOTAL : {this.getCartTotal()}</div>
      </div>
    );

  }
}

export default App;
