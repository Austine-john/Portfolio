# EmailJS Setup Guide

This portfolio uses [EmailJS](https://www.emailjs.com/) to handle contact form submissions.

## Prerequisites

- A free EmailJS account
- An email service connected (Gmail, Outlook, etc.)
- An email template created

## Setup Steps

### 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

### 2. Add Email Service

1. Navigate to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note your **Service ID**

### 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template variables in your email content:
   - `{{user_name}}` - Sender's name
   - `{{user_email}}` - Sender's email address
   - `{{message}}` - Message content

**Example Template:**

```
Subject: New Contact Form Submission from {{user_name}}

You have received a new message from your portfolio contact form:

Name: {{user_name}}
Email: {{user_email}}

Message:
{{message}}
```

4. Save the template and note your **Template ID**

### 4. Get Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (also called User ID)
3. Copy this key

### 5. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your credentials in `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **Important**: Never commit the `.env` file to version control

### 6. Test the Contact Form

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section on your portfolio

3. Fill out and submit the form with test data

4. Check your configured email address for the message

## Troubleshooting

### Form submission fails

- Verify all environment variables are correctly set
- Check the browser console for error messages
- Ensure your EmailJS account is active
- Verify the email service is properly connected

### Email not received

- Check your spam/junk folder
- Verify the template variables match exactly: `user_name`, `user_email`, `message`
- Ensure the "To Email" in your EmailJS service settings is correct

### CORS errors

- EmailJS should handle CORS automatically
- If issues persist, check your EmailJS dashboard for service status

## Security Notes

- The `.env` file is gitignored to protect your credentials
- EmailJS public key is safe to use in client-side code
- Consider adding rate limiting in production to prevent spam
- EmailJS free tier has a limit of 200 emails/month

## Support

For more information, visit the [EmailJS Documentation](https://www.emailjs.com/docs/)
