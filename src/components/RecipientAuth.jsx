import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Auth.css';

const DonorAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Donor Login' : 'Donor Signup', { email, password, name });
  };

  return (
    <div className="auth-page donor-theme">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="auth-card"
      >
        <h2 className="auth-title">
          {isLogin ? 'Donor Login' : 'Donor Signup'}
        </h2>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {!isLogin && (
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="form-group"
          >
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="form-group"
          >
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="submit-button"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </motion.button>
        </form>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="auth-toggle"
        >
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="toggle-button"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default DonorAuth;