# E-Commerce Admin Panel

A modern and responsive **Admin Dashboard** built with **React** and **Vite** for managing an E-Commerce platform. The application allows administrators to manage products through an intuitive interface and integrates with the backend API.

## 📌 Features

- 📦 Add new products
- 📋 View all products
- ✏️ Edit existing products
- 🗑️ Delete products
- 📱 Responsive admin dashboard
- ⚡ Fast development using Vite
- 🔗 REST API integration

## 🛠️ Tech Stack

- React.js
- Vite
- JavaScript (ES6+)
- CSS3
- Axios 
- React Router 

## 📂 Project Structure

admin/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── Components/
│   │   ├── AddProduct/
│   │   ├── ListProduct/
│   │   ├── Navbar/
│   │   └── Sidebar/
│   │
│   ├── Pages/
│   │   ├── Admin.css
│   │   └── Admin.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Project

```bash
cd admin
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

Example:

```env
VITE_API_URL=http://localhost:4000
```

Update the URL according to your backend server.

## ▶️ Run the Development Server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Components

### Navbar

- Displays the application header.
- Contains branding and navigation options.

### Sidebar

- Provides navigation between admin pages.
- Easy access to product management.

### AddProduct

- Form to create new products.
- Sends product data to the backend API.

### ListProduct

- Displays all products.
- Supports editing and deleting products.

### Admin

- Main dashboard layout.
- Combines the Navbar, Sidebar, and content area.

## 🔗 API Integration

The admin panel communicates with the backend using REST APIs.

Example endpoints:

```http
GET    /products
POST   /products
PUT    /products/:id
DELETE /products/:id
```

The API base URL is configured using the `.env` file.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📸 Screenshots

You can add screenshots of:

- Dashboard
- Add Product Page
- Product List
- Responsive Layout

## 🚀 Future Improvements

- Product search
- Product filtering
- Category management
- Order management
- User management
- Dashboard analytics
- Authentication & Authorization
- Image upload optimization
- Dark mode

## 👨‍💻 Author

Developed as part of an E-Commerce project.
