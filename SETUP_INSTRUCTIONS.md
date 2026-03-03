# Contact Form Setup Instructions

## Resend Configuration

The contact form uses Resend to send emails to `agrioexports.india@gmail.com`.

### Steps to Configure:

1. **Sign up for Resend** (Free - 3,000 emails/month)
   - Go to: https://resend.com/signup
   - Create an account

2. **Get your API Key**
   - After signing in, go to: https://resend.com/api-keys
   - Click "Create API Key"
   - Give it a name (e.g., "AgriO Exports Contact Form")
   - Copy the API key (starts with `re_`)

3. **Add API Key to Environment Variables**
   - Open `.env.local` file in the project root
   - Replace `your_resend_api_key_here` with your actual API key
   - Example: `RESEND_API_KEY=re_abc123xyz...`

4. **Add to Vercel (for production)**
   - Go to: https://vercel.com/shivam-s-projects-fd1d92c1/agrio-website/settings/environment-variables
   - Add new environment variable:
     - Key: `RESEND_API_KEY`
     - Value: Your Resend API key
     - Environment: Production, Preview, Development (select all)
   - Click "Save"

5. **Redeploy**
   - After adding the environment variable in Vercel, redeploy the project
   - Or push new changes to trigger automatic deployment

### Email Configuration

**Current Setup:**
- From: `onboarding@resend.dev` (Resend's default)
- To: `agrioexports.india@gmail.com`

**After Custom Domain (Optional):**
- You can configure a custom "from" address like `noreply@agrioexports.com`
- This requires domain verification in Resend
- Instructions: https://resend.com/docs/dashboard/domains/introduction

### Testing

1. Run the development server: `npm run dev`
2. Go to: http://localhost:3000/contact
3. Fill out and submit the form
4. Check `agrioexports.india@gmail.com` for the email

### Troubleshooting

- If emails aren't sending, check the browser console for errors
- Verify the API key is correct in `.env.local`
- Make sure the API key has "Sending access" permission in Resend
- Check Resend dashboard for logs: https://resend.com/emails
