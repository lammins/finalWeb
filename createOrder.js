let orders = [
    { orderID: "OD20240001", orderDate: "2024-01-24", totalAmount: 150.50, orderStatus: "Processing", paymentMethod: "Credit Card", image: "a.jpg" },
    { orderID: "OD20240002", orderDate: "2024-01-25", totalAmount: 200.75, orderStatus: "Shipped", paymentMethod: "PayPal", image: "b.jpg"},
    { orderID: "OD20240003", orderDate: "2024-01-26", totalAmount: 75.00, orderStatus: "Delivered", paymentMethod: "Cash on Delivery", image: "c.jpg" },
    { orderID: "OD20240004", orderDate: "2024-01-27", totalAmount: 120.25, orderStatus: "Cancelled", paymentMethod: "Debit Card", image: "d.jpg" },
    { orderID: "OD20240005", orderDate: "2024-01-28", totalAmount: 90.80, orderStatus: "Pending", paymentMethod: "Bank Transfer", image: "e.jpg" },
    { orderID: "OD20240006", orderDate: "2024-01-29", totalAmount: 180.00, orderStatus: "Shipped", paymentMethod: "Google Pay", image: "f.jpg"},
    { orderID: "OD20240007", orderDate: "2024-01-30", totalAmount: 60.50, orderStatus: "Delivered", paymentMethod: "Credit Card", image: "g.jpg" },
    { orderID: "OD20240008", orderDate: "2024-01-31", totalAmount: 100.00, orderStatus: "Processing", paymentMethod: "PayPal", image: "1.jpg" },
    { orderID: "OD20240009", orderDate: "2024-02-01", totalAmount: 135.75, orderStatus: "Pending", paymentMethod: "Cash on Delivery", image: "2.jpg" },
    { orderID: "OD20240010", orderDate: "2024-02-02", totalAmount: 95.20, orderStatus: "Cancelled", paymentMethod: "Debit Card", image: "3.jpg" },
    { orderID: "OD20240011", orderDate: "2024-02-03", totalAmount: 120.00, orderStatus: "Shipped", paymentMethod: "Bank Transfer", image: "4.jpg" },
    { orderID: "OD20240012", orderDate: "2024-02-04", totalAmount: 85.50, orderStatus: "Delivered", paymentMethod: "Google Pay", image: "5.jpg" },
    { orderID: "OD20240013", orderDate: "2024-02-05", totalAmount: 170.25, orderStatus: "Processing", paymentMethod: "Credit Card", image: "6.jpg" },
    { orderID: "OD20240014", orderDate: "2024-02-06", totalAmount: 110.75, orderStatus: "Pending", paymentMethod: "Cash on Delivery", image: "8.jpg" },
    { orderID: "OD20240015", orderDate: "2024-02-07", totalAmount: 95.00, orderStatus: "Cancelled", paymentMethod: "PayPal", image: "9.jpg" },
    { orderID: "OD20240016", orderDate: "2024-02-08", totalAmount: 130.20, orderStatus: "Shipped", paymentMethod: "Debit Card", image: "10.jpg" },
    { orderID: "OD20240017", orderDate: "2024-02-09", totalAmount: 75.50, orderStatus: "Delivered", paymentMethod: "Bank Transfer", image: "11.png" },
    { orderID: "OD20240018", orderDate: "2024-02-10", totalAmount: 200.00, orderStatus: "Processing", paymentMethod: "Google Pay", image: "12.jpg" },
    { orderID: "OD20240019", orderDate: "2024-02-11", totalAmount: 150.75, orderStatus: "Pending", paymentMethod: "Credit Card", image: "13.jpg" },
    { orderID: "OD20240020", orderDate: "2024-02-12", totalAmount: 180.50, orderStatus: "Cancelled", paymentMethod: "Cash on Delivery", image: "7.jpg" }
] ;

i

function generateId () {
    let maxId = 0;
    for (let i = 0; i < orders.length; i++) {
        const orderID = parseInt(orders[i].orderID.substring(6))
        if (orderID > maxId) {
            maxId = orderID;
        }
    }
    const newId = 'OD2024' + String(maxId + 1).padStart(4, '0');
    return newId;
}