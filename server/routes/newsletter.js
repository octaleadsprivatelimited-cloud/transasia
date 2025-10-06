const express = require('express');
const router = express.Router();

// Newsletter subscription
router.post('/subscribe', async (req, res) => {
  try {
    const { email, firstName, interests } = req.body;

    // Basic validation
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email address is required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Mock newsletter subscription (replace with real logic)
    const subscription = {
      id: Date.now().toString(),
      email,
      firstName: firstName || '',
      interests: interests || ['general'],
      status: 'active',
      subscribedAt: new Date().toISOString(),
      source: req.headers.referer || 'direct'
    };

    // In a real application, you would:
    // 1. Check if email already exists
    // 2. Save to database
    // 3. Add to email marketing platform (Mailchimp, ConvertKit, etc.)
    // 4. Send welcome email
    // 5. Track subscription analytics

    console.log('Newsletter subscription:', subscription);

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to our newsletter!',
      subscription: {
        id: subscription.id,
        email: subscription.email
      }
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Newsletter unsubscribe
router.post('/unsubscribe', async (req, res) => {
  try {
    const { email, reason } = req.body;

    // Basic validation
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email address is required'
      });
    }

    // Mock newsletter unsubscription (replace with real logic)
    const unsubscription = {
      email,
      reason: reason || 'no reason provided',
      unsubscribedAt: new Date().toISOString()
    };

    console.log('Newsletter unsubscription:', unsubscription);

    res.status(200).json({
      success: true,
      message: 'Successfully unsubscribed from our newsletter.'
    });
  } catch (error) {
    console.error('Newsletter unsubscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get newsletter preferences
router.get('/preferences/:email', async (req, res) => {
  try {
    const { email } = req.params;

    // Mock newsletter preferences (replace with real logic)
    const preferences = {
      email,
      status: 'active',
      interests: ['threat-intelligence', 'product-updates', 'industry-news'],
      frequency: 'weekly',
      subscribedAt: '2025-01-01T00:00:00.000Z'
    };

    res.status(200).json({
      success: true,
      preferences
    });
  } catch (error) {
    console.error('Newsletter preferences error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Update newsletter preferences
router.put('/preferences/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const { interests, frequency } = req.body;

    // Mock preferences update (replace with real logic)
    const updatedPreferences = {
      email,
      interests: interests || ['general'],
      frequency: frequency || 'weekly',
      updatedAt: new Date().toISOString()
    };

    console.log('Newsletter preferences updated:', updatedPreferences);

    res.status(200).json({
      success: true,
      message: 'Preferences updated successfully',
      preferences: updatedPreferences
    });
  } catch (error) {
    console.error('Newsletter preferences update error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Newsletter analytics (admin only)
router.get('/analytics', async (req, res) => {
  try {
    // Mock newsletter analytics (replace with real analytics)
    const analytics = {
      totalSubscribers: 15420,
      activeSubscribers: 14230,
      unsubscribedThisMonth: 234,
      newSubscribersThisMonth: 567,
      openRate: 24.5,
      clickRate: 3.8,
      topInterests: [
        { name: 'Threat Intelligence', subscribers: 8234 },
        { name: 'Product Updates', subscribers: 7456 },
        { name: 'Industry News', subscribers: 6234 },
        { name: 'Security Tips', subscribers: 5123 }
      ],
      growthRate: 12.3
    };

    res.status(200).json({
      success: true,
      analytics
    });
  } catch (error) {
    console.error('Newsletter analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

module.exports = router;
