import React from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = React.useState([]);
    const [totalPrice, setTotalPrice] = React.useState(0);

    React.useEffect(() => {
        // Fetch cart items from local storage or API
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(items);
        calculateTotal(items);
    }, []);

    const calculateTotal = (items) => {
        const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(total);
    };

    const handleCheckout = () => {
        // Handle checkout process
        alert('Proceeding to checkout...');
    };

    return (
        <div className="cart">
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                    <button onClick={handleCheckout}>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;