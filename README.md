# Grocery Food Delivery

A responsive grocery shopping web app built with React and Vite.

This project lets users browse products, add items to cart, complete delivery details, and place orders through WhatsApp with an auto-generated order message.
<img width="1903" height="927" alt="ProjectPic1" src="https://github.com/user-attachments/assets/ed376e98-f69f-40da-9e50-a2c66e2a8bbb" />

## 1. Project Overview

- Project type: Frontend e-commerce style web application
- Main goal: Smooth grocery ordering flow from product discovery to order placement
- UI behavior: Responsive for mobile, tablet, and desktop
- Currency model: Prices are displayed and processed in INR
- Order handoff: WhatsApp message with full customer and item details

## 2. Key Features

- Home page with sections for categories, services, app download, and customer reviews
- Product browsing by all products and by category
- Product cards with pricing, quantity, and rating display
- Cart management:
  - Add items
  - Increase or decrease quantity
  - Remove items
- Real-time order summary:
  - Subtotal
  - Fixed delivery charge
  - Grand total
- Delivery form with validation:
  - Full name
  - Email
  - Indian phone number
  - Address
- WhatsApp order placement with prefilled structured message
- Protected route for cart access (login-gated route)
- Session storage persistence for login and cart data

## 3. Route Map

- `/` - Home
- `/home` - Home
- `/products` - Products
- `/categories` - All categories
- `/categories/:categoryName` - Category-based products
- `/about` - About
- `/login` - Login
- `/cart` - Cart (protected)
- `/*` - Page not found

## 4. Tech Stack

### Core

- React 18
- Vite
- React Router DOM

### UI and Styling

- Tailwind CSS
- Material UI (`@mui/material`, `@mui/icons-material`)
- Swiper (carousels)
- React Scroll (smooth section scrolling)
- Lottie Player (`@lottiefiles/react-lottie-player`)

### Forms and Validation

- React Hook Form

### Tooling

- ESLint
- PostCSS
- Autoprefixer

## 5. Project Structure

```text
grocery-food-delivery/
|-- index.html
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
|-- public/
`-- src/
    |-- App.jsx
    |-- main.jsx
    |-- index.css
    |-- assets/
    |-- Components/
    |   |-- Home/
    |   |-- Products/
    |   |-- Cart/
    |   |-- Navbar/
    |   |-- Layout/
    |   `-- ...other sections
    |-- store/
    `-- utils/
```

## 6. How the App Works

### 6.1 Shared State and Layout

- Global state is provided through context in the layout layer.
- Shared states include:
  - Login status
  - Cart items
- Layout wraps all pages with:
  - Navbar
  - Main route outlet
  - Footer

### 6.2 Product to Cart Flow

- User opens products page or category page.
- User adds items to cart.
- Cart item quantity is tracked and reflected in navbar badge.
- Price values are normalized to INR.

### 6.3 Checkout Flow

- User opens cart page (protected route).
- User reviews subtotal, delivery charge, and total.
- User clicks Proceed to checkout.
- User fills validated delivery form.
- App builds WhatsApp message and opens WhatsApp order link.
- On confirmation dialog OK:
  - Cart is cleared from session storage
  - User is redirected to home

## 7. Data and Utility Behavior

- Session storage helper supports `set`, `get`, and `remove` actions.
- Currency conversion uses a fixed USD to INR rate.
- INR formatting uses `Intl.NumberFormat` with `en-IN` locale.
- Delivery charge is centralized as a constant.
- WhatsApp receiver number is centralized as a constant.

## 8. Configuration Values

Current defaults in utility constants:

- `USD_TO_INR_RATE = 83`
- `DEFAULT_DELIVERY_CHARGE = 60`
- `WHATSAPP_ORDER_NUMBER = 917013639877`

Update these values in utility files if business rules change.

## 9. Setup and Run

### Prerequisites

- Node.js 18 or above
- npm

### Install

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Server is configured to run on:

- `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 10. NPM Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint checks for source files

## 11. Troubleshooting

### Port 3000 already in use

- Stop the process using port 3000.
- Restart with `npm run dev`.

### Cart data looks outdated

- Clear browser session storage.
- Refresh and test again.

### WhatsApp not opening

- Confirm internet access.
- Confirm WhatsApp Web or app availability on your device/browser.
- Verify configured WhatsApp number format.

## 12. Scope and Next Improvements

- Add automated unit and integration tests
- Add backend order API (instead of only WhatsApp handoff)
- Add payment integration
- Add admin panel for inventory and order tracking
- Add localization and multi-currency support
