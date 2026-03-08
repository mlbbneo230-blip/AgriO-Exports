# Contact Form Setup with Web3Forms

## Why Web3Forms?

Resend requires domain verification before sending emails to real addresses. Web3Forms is completely free, requires no domain verification, and works immediately.

## Setup Steps:

1. **Get your free access key:**
   - Go to: https://web3forms.com
   - Enter your email: `agrioexports.india@gmail.com`
   - Click "Create Access Key"
   - Copy the access key (starts with a long string)

2. **Add the access key to your code:**
   - Open: `src/app/api/contact/route.ts`
   - Replace `'YOUR_WEB3FORMS_KEY'` with your actual access key
   - Example: `formData.append('access_key', 'abc123-def456-...');`

3. **Commit and deploy:**
   ```bash
   git add .
   git commit -m "Add Web3Forms access key"
   git push origin main
   ```

4. **Test the form:**
   - Go to: https://agrio-website.vercel.app/contact
   - Fill out and submit the form
   - Check `agrioexports.india@gmail.com` for the email

## Features:

- ✅ Completely free (unlimited emails)
- ✅ No domain verification needed
- ✅ No credit card required
- ✅ Emails sent to `agrioexports.india@gmail.com`
- ✅ Works immediately after setup

## Alternative: Resend (if you want custom domain)

If you later want to use a custom domain like `noreply@agrioexports.com`:

1. Add and verify your domain in Resend dashboard
2. Switch back to the Resend implementation
3. Update the "from" address to use your verified domain

For now, Web3Forms is the simplest solution!
