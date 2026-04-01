import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
inject({
  mode: 'auto', // Automatically detects development/production
  debug: true,  // Enable debug logging in development
});
