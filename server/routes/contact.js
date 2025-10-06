const express = require('express');
const router = express.Router();

// Contact form submission
router.post('/submit', async (req, res) => {
  try {
    const { 
      name, 
      email, 
      company, 
      phone, 
      subject, 
      message, 
      inquiryType 
    } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, subject, and message are required'
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

    // Mock contact form processing (replace with real logic)
    const contactSubmission = {
      id: Date.now().toString(),
      name,
      email,
      company: company || '',
      phone: phone || '',
      subject,
      message,
      inquiryType: inquiryType || 'general',
      status: 'new',
      createdAt: new Date().toISOString()
    };

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email to user
    // 3. Notify support team
    // 4. Create support ticket

    console.log('Contact form submission:', contactSubmission);

    res.status(201).json({
      success: true,
      message: 'Thank you for your message. We will get back to you within 24 hours.',
      submissionId: contactSubmission.id
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get contact information
router.get('/info', async (req, res) => {
  try {
    // Mock contact information (replace with real data)
    const contactInfo = {
      headquarters: {
        address: '3000 EI Camino Real, Building 4, Suite 200',
        city: 'Palo Alto',
        state: 'CA',
        zipCode: '94306',
        country: 'United States'
      },
      phone: '+1 (555) 123-4567',
      email: 'contact@cybersecure.com',
      supportEmail: 'support@cybersecure.com',
      salesEmail: 'sales@cybersecure.com',
      businessHours: {
        timezone: 'PST',
        monday: '9:00 AM - 6:00 PM',
        tuesday: '9:00 AM - 6:00 PM',
        wednesday: '9:00 AM - 6:00 PM',
        thursday: '9:00 AM - 6:00 PM',
        friday: '9:00 AM - 6:00 PM',
        saturday: 'Closed',
        sunday: 'Closed'
      },
      socialMedia: {
        linkedin: 'https://linkedin.com/company/cybersecure',
        twitter: 'https://twitter.com/cybersecure',
        youtube: 'https://youtube.com/cybersecure'
      }
    };

    res.status(200).json({
      success: true,
      contactInfo
    });
  } catch (error) {
    console.error('Contact info error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Support ticket creation
router.post('/support-ticket', async (req, res) => {
  try {
    const { 
      name, 
      email, 
      priority, 
      category, 
      subject, 
      description,
      attachments 
    } = req.body;

    // Basic validation
    if (!name || !email || !priority || !category || !subject || !description) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Mock support ticket creation (replace with real logic)
    const supportTicket = {
      id: `TICKET-${Date.now()}`,
      name,
      email,
      priority: priority || 'medium',
      category: category || 'general',
      subject,
      description,
      attachments: attachments || [],
      status: 'open',
      createdAt: new Date().toISOString(),
      estimatedResponseTime: '2-4 hours'
    };

    console.log('Support ticket created:', supportTicket);

    res.status(201).json({
      success: true,
      message: 'Support ticket created successfully',
      ticket: {
        id: supportTicket.id,
        status: supportTicket.status,
        estimatedResponseTime: supportTicket.estimatedResponseTime
      }
    });
  } catch (error) {
    console.error('Support ticket error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

module.exports = router;
