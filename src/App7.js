import React, { useState } from 'react';
import "./App7.css";

export default function App7() {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemQty, setItemQty] = useState("");
    const [msg, setMsg] = useState("");
    const [msgType, setMsgType] = useState("");
    const [showBill, setShowBill] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [discount, setDiscount] = useState(0);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleAddItem = () => {
        if (!itemName || !itemPrice || !itemQty) {
            setMsg("Please fill all fields!");
            setMsgType("error");
            setTimeout(() => setMsg(""), 2000);
            return;
        }

        const newItem = {
            id: Date.now(),
            name: itemName,
            price: parseFloat(itemPrice),
            qty: parseInt(itemQty),
            amount: parseFloat(itemPrice) * parseInt(itemQty),
        };

        setItems([...items, newItem]);
        setItemName("");
        setItemPrice("");
        setItemQty("");

        setMsg("Item added successfully!");
        setMsgType("success");
        setTimeout(() => setMsg(""), 2000);
    };

    const handleClear = () => {
        setItemName("");
        setItemPrice("");
        setItemQty("");
    };

    const handleCheckout = () => {
        setShowBill(true);
    };

    const handleClearTable = () => {
        setItems([]);
        setShowBill(false);
    };

    const handleRemoveItem = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const handlePrintBill = () => {
        const billSection = document.getElementById("bill-section");
        
        if (!billSection) return;
    
        // Add a print-specific class
        billSection.classList.add("print-mode");
        
        // Print the bill
        window.print();
    
        // Remove the print-specific class after printing
        billSection.classList.remove("print-mode");
    };
    

    const totalAmount = items.reduce((total, item) => total + item.amount, 0);
    const discountedAmount = totalAmount - (totalAmount * discount / 100);

    return (
        <div className={darkMode ? "dark-mode" : ""}>
            <div className='header'>
                <h1>Super Market</h1>
                <button className='dark-mode-toggle' onClick={toggleDarkMode}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
            <p className={`msg ${msgType}`}>{msg}</p>
            <div className='container'>
                <div className='input-container'>
                    <label>Item Details</label>
                    <input type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                    <input type="number" placeholder="Item Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
                    <input type="number" placeholder="Item Quantity" value={itemQty} onChange={(e) => setItemQty(e.target.value)} />
                    <button id='add' onClick={handleAddItem}>Add</button>
                    <button id='clear' onClick={handleClear}>Clear</button>
                </div>

                <div className='separator'></div>

                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Item Quantity</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id} className='fade-in'>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.qty}</td>
                                    <td>${item.amount.toFixed(2)}</td>
                                    <td><button className='remove-item' onClick={() => handleRemoveItem(item.id)}>X</button></td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan="4">Total Before Discount:</th>
                                <th>${totalAmount.toFixed(2)}</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th colSpan="4">Discount Applied:</th>
                                <th>{discount}%</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th colSpan="4">Total After Discount:</th>
                                <th>${discountedAmount.toFixed(2)}</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="table-buttons">
                        <input 
                            type="number" 
                            placeholder="Discount %" 
                            value={discount} 
                            onChange={(e) => setDiscount(Number(e.target.value))} 
                        />
                        <button id='clear-table' onClick={handleClearTable}>Clear Table</button>
                        <button id='checkout' onClick={handleCheckout}>Checkout</button>
                    </div>
                </div>
            </div>
            
            {showBill && (
                <div className='checkout-section fade-in' id='bill-section'>
                    <h2>Bill Summary</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id} className='fade-in'>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.qty}</td>
                                    <td>${item.amount.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan="3">Total Before Discount</th>
                                <th>${totalAmount.toFixed(2)}</th>
                            </tr>
                            <tr>
                                <th colSpan="3">Discount</th>
                                <th>{discount}%</th>
                            </tr>
                            <tr>
                                <th colSpan="3">Total After Discount</th>
                                <th>${discountedAmount.toFixed(2)}</th>
                            </tr>
                        </tfoot>
                    </table>
                    <button id='print-bill' onClick={handlePrintBill}>Print Bill</button>
                </div>
            )}
        </div>
    );
}
