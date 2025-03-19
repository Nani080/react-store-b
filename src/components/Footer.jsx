export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer style={{ textAlign: 'center', padding: '10px', background: '#333', color: '#fff' }}>
            <hr style={{ width: '80%', margin: '10px auto', borderColor: '#555' }} />
            <p>&copy; {year} My React Store. All rights reserved.</p>
        </footer>
    );
}
