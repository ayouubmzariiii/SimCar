# 🚗 SimCar - Vehicle Fleet Management Dashboard

A simple, responsive React dashboard application for vehicle fleet management. Built with React, Material-UI, and Vite.

## 🌟 Features

### 📊 **Dashboard**
- **Metrics Display**: Shows mock data for vehicles, users, revenue, and efficiency
- **Charts**: Revenue trends, vehicle status distribution, and user activity charts
- **Activity Feed**: List of recent activities and notifications

### 🚛 **Fleet Management**
- **Vehicle List**: View vehicles with basic information (name, type, efficiency, status)
- **Vehicle Status**: Display Active, Maintenance, Idle, and Out-of-Service vehicles
- **Basic Vehicle Data**: Mock data for demonstration purposes

### 👥 **User Management**
- **Authentication**: Simple login/logout functionality
- **User List**: View users with roles and status
- **Profile Management**: Basic user profile editing

### 📈 **Analytics**
- **Charts**: Revenue/expense trends and fleet status distribution
- **Mock Data Visualization**: Charts powered by Chart.js and MUI X Charts

### ⚙️ **System Features**
- **Theme Support**: Dark/light mode toggle
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Navigation**: Sidebar navigation with routing

## 🛠️ Technology Stack

- **Frontend**: React 19 with Vite
- **UI Framework**: Material-UI (MUI) v7
- **State Management**: React Context API for authentication and theme
- **Charts**: Chart.js with react-chartjs-2 and MUI X Charts
- **Routing**: React Router DOM v7
- **Build Tool**: Vite v7

## 🚀 Quick Start

### Prerequisites
- Node.js (latest LTS version recommended)
- npm package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/ayouubmzariiii/SimCar.git
cd SimCar

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development Server
- Local: http://localhost:5173 (default Vite port)
- The app will open in your default browser

## 📱 Responsive Design

The application is responsive and works on:
- **Desktop**: Full sidebar navigation
- **Tablet**: Collapsible sidebar
- **Mobile**: Mobile-optimized layout

## 🔧 Features

- **Theme**: Toggle between light and dark modes in the header
- **Authentication**: Simple login with mock credentials
- **Navigation**: Sidebar navigation between different pages

## 📊 Data

The application uses mock data for demonstration:
- **Vehicle data**: Sample vehicles with basic information
- **User data**: Mock users with different roles
- **Chart data**: Sample revenue, expense, and activity data
- **Dashboard metrics**: Static demo metrics

All data is stored in `src/data/mockData.js` and is not persistent.

## 🌐 Browser Support

Works on modern browsers that support ES6+ features.

## 📄 License

This project is licensed under the MIT License.

---

**A simple React dashboard demo**
