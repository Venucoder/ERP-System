// ProductForm.js
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const ProductForm = ({ open, onClose, onSubmit, selectedProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    category: false,
    price: false,
    stock: false,
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData(selectedProduct);
    } else {
      setFormData({
        name: "",
        category: "",
        price: "",
        stock: "",
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    if (e.target.type === "number" && parseFloat(e.target.value) < 0) {
      return; // Do not update state if value is negative
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error for the field being edited
    setErrors({
      ...errors,
      [e.target.name]: false,
    });
  };

  const handleSubmit = () => {
    // Validate form fields
    const newErrors = {};
    if (formData.name.trim() === "") newErrors.name = true;
    if (formData.category.trim() === "") newErrors.category = true;
    if (formData.price.toString().trim() === "") newErrors.price = true;
    if (formData.stock.toString().trim() === "") newErrors.stock = true;

    // If any required field is empty, set errors and prevent form submission
    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
    } else {
      // Call onSubmit only if all required fields are filled
      onSubmit(formData);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {selectedProduct ? "Edit Product" : "Add Product"}
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          error={errors.name} // Apply error styling if there's an error
        />
        <TextField
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          error={errors.category}
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          error={errors.price}
        />
        <TextField
          label="Stock Quantity"
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          error={errors.stock}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary">
          {selectedProduct ? "Save" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductForm;
