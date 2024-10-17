import React, { useState } from 'react';

const navbarStyles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  navbarLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  navbarLogo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  dropdown: {
    position: 'relative',
    display: 'inline-block',
  },
  dropdownButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
  },
  dropdownContent: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#4CAF50',
    minWidth: '160px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
    zIndex: 1,
  },
  dropdownContentVisible: {
    display: 'block',
  },
  dropdownItem: {
    color: 'white',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
  },
  dropdownItemHover: {
    backgroundColor: '#3e8e41',
  },
};

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav style={navbarStyles.navbar}>
      <div style={navbarStyles.navbarLeft}>
        <span style={navbarStyles.navbarLogo}>SURPLUS SERVE</span>
      </div>
      <div style={navbarStyles.dropdown}>
        <button style={navbarStyles.dropdownButton} onClick={toggleDropdown}>
          Menu
        </button>
        <div
          style={{
            ...navbarStyles.dropdownContent,
            ...(dropdownVisible ? navbarStyles.dropdownContentVisible : {}),
          }}
        >
          <a href="/" style={navbarStyles.dropdownItem}>
            Home
          </a>
          <a href="/about" style={navbarStyles.dropdownItem}>
            About
          </a>
          <a href="/contact" style={navbarStyles.dropdownItem}>
            Contact
          </a>
          <a href="/login" style={navbarStyles.dropdownItem}>
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
