import React from "react";

class CartItem extends React.Component {
    render (){
        return (
            <div className="cart-item">
                <div className="left-block">
                    {/* Image */}
                    <img style={styles.image} alt="Img" />
                </div>
                <div className="right-block">
                    {/* Title */}
                    <div style={{fontSize : 25}}>Phone</div>
                    {/* Price */}
                    <div style={{color: "lightgrey"}}>9999</div>
                    {/* Qunatity */}
                    <div style={{color: "lightgrey"}}>Qty: 1</div>
                    {/* buttons */}
                    <div className="cart-item-actions"></div>

                </div>
            </div>
        );
    };
}

const styles = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;