export default function Cart(){
    return(
        <div className="cart">
            <h2>Your Cart</h2>
            <ul>
                <li className="cart-item">
                    <p>Mac</p>
                    <div className="cart-item-actions">
                        <button>-</button>
                        <span>5</span>
                        <button>+</button>
                    </div>
                </li>
            </ul>
            <p className="cart-total">$500</p>
        </div>
    );
} 