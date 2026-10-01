import { portfolioData } from '../data/portfolio';

export interface SendEmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  category?: string;
  botcheck?: string;
}

export interface SendEmailResponse {
  success: boolean;
  message: string;
  needsActivation?: boolean;
  provider?: 'web3forms' | 'formspree' | 'formsubmit';
}

/**
 * Service to handle sending real emails from the portfolio contact form.
 * Supports:
 * 1. Web3Forms (if VITE_WEB3FORMS_ACCESS_KEY is configured)
 * 2. Formspree (if VITE_FORMSPREE_ID is configured)
 * 3. FormSubmit.co (default zero-config out-of-the-box direct to portfolioData.email)
 */
export async function sendContactEmail(payload: SendEmailPayload): Promise<SendEmailResponse> {
  // Prevent spam bots that fill honeypot field
  if (payload.botcheck && payload.botcheck.trim() !== '') {
    return {
      success: true,
      message: 'Message sent successfully.'
    };
  }

  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  // 1. Check for Web3Forms Access Key
  if (web3FormsKey) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: payload.name,
          email: payload.email,
          subject: `[Portfolio] ${payload.subject || 'New Contact Form Submission'}`,
          message: payload.message,
          category: payload.category || 'General Inquiry',
          from_name: `${payload.name} (via Portfolio)`,
          reply_to: payload.email
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        return {
          success: true,
          message: 'Your message has been delivered successfully! Suresh will get back to you soon.',
          provider: 'web3forms'
        };
      } else {
        throw new Error(data.message || 'Web3Forms submission failed');
      }
    } catch (err: unknown) {
      console.warn('Web3Forms delivery failed, falling back to FormSubmit:', err);
    }
  }

  // 2. Check for Formspree ID
  if (formspreeId) {
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          _subject: `[Portfolio] ${payload.subject || 'New Inquiry'}`,
          message: payload.message,
          category: payload.category || 'General'
        })
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Your message has been delivered successfully! Suresh will get back to you soon.',
          provider: 'formspree'
        };
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Formspree submission failed');
      }
    } catch (err: unknown) {
      console.warn('Formspree delivery failed, falling back to FormSubmit:', err);
    }
  }

  // 3. Default: FormSubmit.co (Zero-config real email delivery directly to Suresh's inbox)
  try {
    const targetEmail = portfolioData.email || 'sureshksureshk04@gmail.com';
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        _subject: `[Portfolio Contact] ${payload.subject || 'Direct Message'} - ${payload.name}`,
        message: payload.message,
        category: payload.category || 'General Inquiry',
        _replyto: payload.email,
        _template: 'box',
        _captcha: 'false',
        _honey: payload.botcheck || ''
      })
    });

    const data = await response.json().catch(() => ({}));

    // FormSubmit sends an activation link on the very first submission to a new email
    if (data.message && typeof data.message === 'string' && data.message.toLowerCase().includes('activation')) {
      return {
        success: true,
        needsActivation: true,
        message:
          "Form activation required: FormSubmit has sent a one-time 'Activate Form' verification link to sureshksureshk04@gmail.com. Please confirm it in your inbox once to start receiving all direct messages!",
        provider: 'formsubmit'
      };
    }

    if (response.ok && (data.success === 'true' || data.success === true)) {
      return {
        success: true,
        message: 'Your message has been delivered directly to Suresh\'s email inbox! Expect a reply soon.',
        provider: 'formsubmit'
      };
    }

    // If FormSubmit returns error or false
    throw new Error(data.message || 'Unable to deliver message at this time.');
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown network error';
    return {
      success: false,
      message: errorMsg,
      provider: 'formsubmit'
    };
  }
}
