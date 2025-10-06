const express = require('express');
const router = express.Router();

// Mock authentication routes for demo purposes
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    // Mock authentication (replace with real authentication logic)
    if (email === 'demo@cybersecure.com' && password === 'demo123') {
      const user = {
        id: '1',
        email: 'demo@cybersecure.com',
        name: 'Demo User',
        role: 'admin'
      };

      res.status(200).json({
        success: true,
        message: 'Login successful',
        user,
        token: 'mock-jwt-token-' + Date.now()
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, company } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and password are required'
      });
    }

    // Mock user creation (replace with real user creation logic)
    const user = {
      id: Date.now().toString(),
      name,
      email,
      company: company || '',
      role: 'user',
      createdAt: new Date().toISOString()
    };

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      user,
      token: 'mock-jwt-token-' + Date.now()
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // Mock password reset (replace with real password reset logic)
    res.status(200).json({
      success: true,
      message: 'Password reset email sent successfully'
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

router.get('/verify-token', async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token provided'
      });
    }

    // Mock token verification (replace with real JWT verification)
    res.status(200).json({
      success: true,
      message: 'Token is valid',
      user: {
        id: '1',
        email: 'demo@cybersecure.com',
        name: 'Demo User',
        role: 'admin'
      }
    });
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

module.exports = router;
