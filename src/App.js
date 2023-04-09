import React from "react";
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from "./Navbar";
import firebase from 'firebase/app';
import 'firebase/firestore';

class App extends React.Component {

    constructor(){
      super();
      this.state = {
          products: [],
          loading: true
      }
      this.db=firebase.firestore();
    }

    componentDidMount () {
      
      this.db
        .collection('products')
        .onSnapshot((snapshot) => {
          // console.log(snapshot);

          snapshot.docs.map((doc) => {
            console.log(doc.data());
            return "";
          });

          const products = snapshot.docs.map((doc) => {
            const data=doc.data();
            data["id"]=doc.id;
            return data;
          })

          this.setState({
            products: products,
            loading: false
          })

        })

    }

  handleIncreaseQuantity = (product) => {
      console.log('Increase qty.', product);
      const { products } = this.state;
      const index = products.indexOf(product);

      const docRef=this.db.collection('products').doc(products[index].id);

      docRef
        .update({
          qty: products[index].qty+1
        })
        .then(() => {
          console.log("Updated successfully");
        })
        .catch((err) => {
          console.log("Error in updating", err);
        })

      // products[index].qty += 1;

      // this.setState({
      //     // products: products
      //     products
      // })
  }

  handleDecreaseQuantity = (product) => {
      console.log('Decrease qty.', product);
      const { products } = this.state;
      const index = products.indexOf(product);
      if(products[index].qty===0){
          console.log("Cannot delete");
          return;
      }

      const docRef=this.db.collection('products').doc(products[index].id);

      docRef
        .update({
          qty: products[index].qty-1
        })
        .then(() => {
          console.log("Updated successfully");
        })
        .catch((err) => {
          console.log("error", err);
        })

      // products[index].qty -= 1;

      // this.setState({
      //     // products: products
      //     products
      // })
  }

  handleDeleteProduct =(id) => {
      const {products} = this.state;

      const docRef=this.db.collection('products').doc(id);

      docRef
        .delete()
        .then(() => {
          console.log("Deleted successfully");
        })
        .catch((e) => {
          console.log("Error in deleting", e);
        })

      // const items = products.filter((item) => item.id !== id);// it will return an updated array with updated product

      // this.setState({
      //     products: items
      // })

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

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img:'',
        price:35000,
        title:'Washing Machine',
        qty: 1
      })
      .then((docRef) => {
        console.log("Product has been added to the DB", docRef)
      })
      .catch((err) => {
        console.log("Error", err);
      })
  }

  render() {

    const { products, loading } = this.state;

    return (
      <div className="App">
        <Navbar
          count={this.getCartCount()}
        />
        {/* <button onClick={this.addProduct}>Add Product</button> */}
        <Cart 
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading...</h1>}
        <div style={ {fontSize: 20, padding: 10} }>TOTAL : {this.getCartTotal()}</div>
      </div>
    );

  }
}

export default App;
//console.log("Test");