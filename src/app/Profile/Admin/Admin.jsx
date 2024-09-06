import React from 'react';

const Admin = () => {
  return (
    <div style={styles.dashboard}>
      <Sidebar />
      <div style={styles.mainContent}>
        <Header />
        <div style={styles.content}>
          <h2>Dashboard</h2>
          <div style={styles.cards}>
            <Card title="Users" value="120" />
            <Card title="Orders" value="45" />
            <Card title="Revenue" value="$1,234" />
          </div>
          <div style={styles.chart}>
            <h3>Sales Overview</h3>
            <p>Chart or graph placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div style={styles.sidebar}>
    <h2>Admin Panel</h2>
    <ul style={styles.sidebarList}>
      <li><a href="#" style={styles.sidebarLink}>Dashboard</a></li>
      <li><a href="#" style={styles.sidebarLink}>Users</a></li>
      <li><a href="#" style={styles.sidebarLink}>Orders</a></li>
      <li><a href="#" style={styles.sidebarLink}>Settings</a></li>
      <li><a href="#" style={styles.sidebarLink}>Logout</a></li>
    </ul>
  </div>
);

const Header = () => (
  <div style={styles.header}>
    <h1>Admin Dashboard</h1>
    <div style={styles.userInfo}>
      <span>Welcome, Admin</span>
    </div>
  </div>
);

const Card = ({ title, value }) => (
  <div style={styles.card}>
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

const styles = {
  dashboard: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  },
  sidebarList: {
    listStyle: 'none',
    padding: 0,
  },
  sidebarLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'block',
    margin: '20px 0',
  },
  header: {
    backgroundColor: '#f4f4f4',
    padding: '15px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  userInfo: {
    textAlign: 'right',
    fontSize: '16px',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    padding: '20px',
    flex: 1,
  },
  cards: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    flex: 1,
    textAlign: 'center',
  },
  chart: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
  },
};

export default Admin;
