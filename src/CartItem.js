import React from "react";

class CartItem extends React.Component {

    constructor(){
        super();
        this.state = {
            price: 9999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = () => {
        // console.log("Test");
        console.log('this.state', this.state);
    }

    render() {
        const{price, title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    {/* Image */}
                    <img style={styles.image} alt="Product-Image" />
                </div>
                <div className="right-block">
                    {/* Title */}
                    <div style={{ fontSize: 25 }}>{title}</div>
                    {/* Price */}
                    <div style={{ color: "lightgrey" }}>Rs. {price}</div>
                    {/* Qunatity */}
                    <div style={{ color: "lightgrey" }}>Qty. {qty}</div>
                    {/* buttons */}
                    <div className="cart-item-actions">
                        {/* + - Delete */}
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="Increase" onClick={this.increaseQuantity}/>
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="Decrease" onClick={this.increaseQuantity}/>
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/512/484/484611.png" alt="Delete" onClick={this.increaseQuantity}/>
                    </div>
                </div>
            </div>
        );
    };
}

const styles = {
    image: {
        minHeight: 110,
        minWidth: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;