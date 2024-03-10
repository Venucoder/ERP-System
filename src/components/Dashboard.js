import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Container,
} from "@mui/joy";
import { Link } from "react-router-dom";

function Dashboard() {
  const mockData = {
    totalProducts: 50,
    activeOrders: 12,
    outOfStock: 3,
    totalCustomers: 100,
    revenue: "$5000",
    pendingTasks: 5,
  };

  return (
    <Container>
      <Typography level="h1" gutterBottom margin={2}>
        ERP System Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="soft">
            <CardContent>
              <Typography level="title-lg">Total Products</Typography>
              <Typography level="body-lg">{mockData.totalProducts}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="soft">
            <CardContent>
              <Typography level="title-lg">Active Orders</Typography>
              <Typography level="body-lg">{mockData.activeOrders}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="soft">
            <CardContent>
              <Typography level="title-lg">Out of Stock Products</Typography>
              <Typography level="body-lg">{mockData.outOfStock}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="soft">
            <CardContent>
              <Typography level="title-lg">Total Customers</Typography>
              <Typography level="body-lg">{mockData.totalCustomers}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="soft">
            <CardContent>
              <Typography level="title-lg">Revenue</Typography>
              <Typography level="body-lg">{mockData.revenue}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="soft">
            <CardContent>
              <Typography level="title-lg">Pending Tasks</Typography>
              <Typography level="body-lg">{mockData.pendingTasks}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          mt: 4,
        }}
      >
        <Button component={Link} to="/products">
          Products Management
        </Button>
        <Button color="primary" component={Link} to="/orders">
          Orders Management
        </Button>
      </Box>
    </Container>
  );
}

export default Dashboard;
