# AuraBeauty - Skincare Landing Page

A modern, responsive skincare e-commerce landing page built with React and Tailwind CSS.  
This project simulates a real-world beauty brand storefront with product browsing, filtering, wishlist, and cart functionality using a public API.

---

## 🚀 Live Demo
https://your-deployment-link-here.com

---

## 📌 Project Overview

AuraBeauty is a frontend capstone project designed to demonstrate real-world React development skills including API integration, state management, component architecture, and responsive UI design.

The application focuses on a skincare brand experience where users can browse products, search, filter by category, view product details, and interact with cart and wishlist features.

---

## ✨ Features

### 🛍 Product Features
- Dynamic product listing from API (DummyJSON)
- Skincare-focused product filtering logic
- Search functionality (real-time filtering)
- Category filtering (All / Skincare / Beauty)
- Product detail modal popup
- Add to Cart (localStorage persistence)
- Wishlist system (localStorage persistence)
- Duplicate prevention for cart and wishlist items

### 🎨 UI / UX Features
- Fully responsive design (mobile, tablet, desktop)
- Modern skincare brand aesthetic
- Smooth scrolling navigation
- Clean product card layout
- Hover animations and transitions
- Professional landing page structure

### ⚡ Interactive Features
- Mobile navigation menu toggle
- FAQ accordion system
- Contact form validation
- Toast notifications (success/error feedback)
- Product modal interactions

---

## 🌐 API Integration

This project uses the DummyJSON API:

https://dummyjson.com/products

Products are dynamically fetched and filtered using custom logic to simulate a skincare-focused store (since the API is not skincare-specific).

Filtering includes:
- Creams
- Serums
- Moisturizers
- Lotions
- Face care products

---

## 🛠 Tech Stack

- React.js
- Tailwind CSS
- JavaScript (ES6+)
- Axios
- React Icons
- React Hot Toast

---

## 📁 Project Structure

```bash
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Products.jsx
│   ├── ProductCard.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
├── hooks/
│   ├── useFetchProducts.js
├── App.jsx
├── main.jsx


# Clone repository
git clone https://github.com/your-username/aurabeauty.git

# Navigate into project folder
cd aurabeauty

# Install dependencies
npm install

# Start development server
npm run dev