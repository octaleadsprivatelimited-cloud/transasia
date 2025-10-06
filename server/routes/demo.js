const express = require('express');
const router = express.Router();

// Demo request endpoint
router.post('/request', async (req, res) => {
  try {
    const { 
      firstName, 
      lastName, 
      email, 
      company, 
      phone, 
      jobTitle, 
      companySize,
      useCase,
      message 
    } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !company) {
      return res.status(400).json({
        success: false,
        message: 'First name, last name, email, and company are required'
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

    // Mock demo request processing (replace with real logic)
    const demoRequest = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      company,
      phone: phone || '',
      jobTitle: jobTitle || '',
      companySize: companySize || '',
      useCase: useCase || '',
      message: message || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
      scheduledAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours from now
    };

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Notify sales team
    // 4. Schedule demo

    console.log('Demo request received:', demoRequest);

    res.status(201).json({
      success: true,
      message: 'Demo request submitted successfully',
      demoRequest: {
        id: demoRequest.id,
        scheduledAt: demoRequest.scheduledAt
      }
    });
  } catch (error) {
    console.error('Demo request error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get demo availability
router.get('/availability', async (req, res) => {
  try {
    // Mock availability data (replace with real calendar integration)
    const availability = {
      timezone: 'UTC',
      slots: [
        {
          date: '2025-01-15',
          time: '09:00',
          available: true
        },
        {
          date: '2025-01-15',
          time: '14:00',
          available: true
        },
        {
          date: '2025-01-16',
          time: '10:00',
          available: true
        },
        {
          date: '2025-01-16',
          time: '15:00',
          available: false
        },
        {
          date: '2025-01-17',
          time: '11:00',
          available: true
        }
      ]
    };

    res.status(200).json({
      success: true,
      availability
    });
  } catch (error) {
    console.error('Availability error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Schedule demo
router.post('/schedule', async (req, res) => {
  try {
    const { 
      firstName, 
      lastName, 
      email, 
      company, 
      phone,
      preferredDate,
      preferredTime,
      timezone,
      message 
    } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !company || !preferredDate || !preferredTime) {
      return res.status(400).json({
        success: false,
        message: 'Required fields are missing'
      });
    }

    // Mock demo scheduling (replace with real calendar integration)
    const scheduledDemo = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      company,
      phone: phone || '',
      preferredDate,
      preferredTime,
      timezone: timezone || 'UTC',
      message: message || '',
      status: 'scheduled',
      createdAt: new Date().toISOString(),
      meetingLink: `https://meet.cybersecure.com/demo/${Date.now()}`
    };

    console.log('Demo scheduled:', scheduledDemo);

    res.status(201).json({
      success: true,
      message: 'Demo scheduled successfully',
      demo: {
        id: scheduledDemo.id,
        meetingLink: scheduledDemo.meetingLink,
        scheduledFor: `${preferredDate} at ${preferredTime} ${timezone || 'UTC'}`
      }
    });
  } catch (error) {
    console.error('Demo scheduling error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

module.exports = router;
