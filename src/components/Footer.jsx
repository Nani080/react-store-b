import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer style={{
            textAlign: 'center',
            padding: '15px',
            background: '#333',
            color: '#fff',
            position: 'fixed',
            width: '100%',
            bottom: 0
        }}>
            <hr style={{ width: '80%', margin: '10px auto', borderColor: '#555' }} />
            <p>&copy; {year} My React Store. All rights reserved.</p>
        </footer>
    );
}
