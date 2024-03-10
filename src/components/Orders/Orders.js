import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/joy";
import OrderList from "./OrderList";
import OrderDetails from "./OrderDetails";
import { mockOrdersData } from "./ordersdata";

const Orders = () => {
  const [orders, setOrders] = useState(mockOrdersData);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleUpdateStatus = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
    setSelectedOrder(null); // Clear selected order if it's deleted
  };

  const handleCloseDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <Container>
      <Box my={4}>
        <Typography level="h1" gutterBottom>
          Orders Management
        </Typography>
      </Box>
      <OrderList
        orders={orders}
        onViewDetails={handleViewDetails}
        onUpdateStatus={handleUpdateStatus}
        onDeleteOrder={handleDeleteOrder}
      />
      <OrderDetails order={selectedOrder} onClose={handleCloseDetails} />
    </Container>
  );
};

export default Orders;
