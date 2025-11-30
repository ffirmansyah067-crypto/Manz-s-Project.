// Ambil data user dari localStorage
const user = JSON.parse(localStorage.getItem('user'));
if (user) {
    document.getElementById('profile-name').textContent = user.name;
    document.getElementById('profile-email').textContent = user.email;
}

// Render recent orders di profile
function renderProfileOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const profileOrders = document.getElementById('profile-orders');
    profileOrders.innerHTML = '';

    // Tampilkan maksimal 5 pesanan terakhir
    const recentOrders = orders.slice(-5);
    recentOrders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = order;
        profileOrders.appendChild(li);
    });
}

renderProfileOrders();

// Ambil semua tombol order
const orderButtons = document.querySelectorAll('.card .btn');

orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        const coffeeName = button.parentElement.querySelector('h3').textContent;
        alert(`Anda memesan ${coffeeName}!`);

        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(coffeeName);
        localStorage.setItem('orders', JSON.stringify(orders));

        renderOrders();
    });
});

// Render order history
function renderOrders() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    orders.forEach((order, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${order}`;
        orderList.appendChild(li);
    });
}

// Clear history
const clearBtn = document.getElementById('clear-orders');
clearBtn.addEventListener('click', () => {
    localStorage.removeItem('orders');
    renderOrders();
    alert('Order history berhasil dihapus!');
});

// Tampilkan order history saat halaman dibuka
renderOrders();