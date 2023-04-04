import React from "react";

const CartItem = (props) => {

        console.log('this.props', props);
        const{ price, title, qty, id, img } = props.product;
        const { 
            product, 
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeleteProduct
        } = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    {/* Image */}
                    <img src={product.img} style={styles.image} alt="Product-Image" />
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
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="Increase" onClick={() => onIncreaseQuantity(product)}/>
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="Decrease" onClick={() => onDecreaseQuantity(product)}/>
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/512/484/484611.png" alt="Delete" onClick={() => onDeleteProduct(id)}/>
                    </div>
                </div>
            </div>
        );
}

const styles = {
    image: {
        maxHeight: 150,
        maxWidth: 150,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;