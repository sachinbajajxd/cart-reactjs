import React from "react";

class CartItem extends React.Component {

    increaseQuantity = () => {
        // console.log("Test");
        // this.state.qty+=1;

        // first method
        // this.setState({
        //     qty: this.state.qty+1
        // });

        //second method 
        this.setState((prevState) => {
            return {
                qty: prevState.qty+1
            }
        }, () => {
            console.log('this.state', this.state);
        });
        // console.log('this.state', this.state);
    }

    decreaseQuantity = () => {

        const { qty } = this.state;

        if(qty===0){
            alert("Cannot be deleted");
            return;
        }

        this.setState((prevState) => {
            return {
                qty: prevState.qty-1
            }
        }, () => {
            console.log('this.state', this.state);
        });
    }

    render() {
        console.log('this.props', this.props);
        const{ price, title, qty, id } = this.props.product;
        const { 
            product, 
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeleteProduct
        } = this.props;
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
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="Increase" onClick={() => onIncreaseQuantity(product)}/>
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="Decrease" onClick={() => onDecreaseQuantity(product)}/>
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/512/484/484611.png" alt="Delete" onClick={() => onDeleteProduct(id)}/>
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