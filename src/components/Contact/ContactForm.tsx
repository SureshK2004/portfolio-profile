import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Mail, User, RotateCcw } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { sendContactEmail, type SendEmailPayload } from '../../services/mailService';

const CATEGORIES = [
  { id: 'job', label: 'Full-Time Role', subject: 'Engineering Opportunity / Full-time Role' },
  { id: 'contract', label: 'Freelance / Contract', subject: 'Project Collaboration / Contract Work' },
  { id: 'backend', label: 'Python / Backend', subject: 'Python & Django Backend Architecture' },
  { id: 'vision', label: 'Computer Vision', subject: 'Computer Vision & AI Consultation' },
  { id: 'general', label: 'General Inquiry', subject: 'Portfolio Inquiry & Connection' },
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<SendEmailPayload>({
    name: '',
    email: '',
    subject: CATEGORIES[0].subject,
    category: CATEGORIES[0].label,
    message: '',
    botcheck: '',
  });

  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0].id);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [needsActivation, setNeedsActivation] = useState<boolean>(false);

  const handleCategorySelect = (cat: typeof CATEGORIES[0]) => {
    setSelectedCategory(cat.id);
    setFormData((prev) => ({
      ...prev,
      category: cat.label,
      subject: prev.subject.trim() === '' || CATEGORIES.some(c => c.subject === prev.subject)
        ? cat.subject
        : prev.subject,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setFeedbackMessage('Please fill in your name, email, and message.');
      return;
    }

    setStatus('sending');
    setFeedbackMessage('');

    try {
      const response = await sendContactEmail(formData);

      if (response.success) {
        setStatus('success');
        setFeedbackMessage(response.message);
        setNeedsActivation(!!response.needsActivation);
      } else {
        setStatus('error');
        setFeedbackMessage(response.message || 'Failed to send message. Please try again.');
      }
    } catch (err: unknown) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setFeedbackMessage('A network error occurred while sending your message.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: CATEGORIES[0].subject,
      category: CATEGORIES[0].label,
      message: '',
      botcheck: '',
    });
    setSelectedCategory(CATEGORIES[0].id);
    setStatus('idle');
    setFeedbackMessage('');
    setNeedsActivation(false);
  };

  // Fallback mailto link in case network fails
  const fallbackMailto = `mailto:${portfolioData.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="rounded-2xl theme-card p-6 sm:p-8 border border-[var(--border-card)] shadow-lg relative overflow-hidden backdrop-blur-sm">
      {/* Decorative top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 opacity-90" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              LIVE EMAIL DISPATCH
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-heading)] mt-2">
            Send a Direct Message
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-body)] mt-1">
            Delivers straight to <span className="font-mono-tech text-[var(--text-purple)] font-medium">{portfolioData.email}</span>
          </p>
        </div>
      </div>

      {/* SUCCESS STATE */}
      {status === 'success' && (
        <div className="py-8 px-4 text-center rounded-xl theme-card-subtle border border-emerald-500/30">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h4 className="text-lg font-bold font-heading text-[var(--text-heading)] mb-2">
            Message Dispatched!
          </h4>
          <p className="text-sm text-[var(--text-body)] max-w-md mx-auto mb-6">
            {feedbackMessage}
          </p>

          {needsActivation && (
            <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-left text-xs text-amber-600 dark:text-amber-400 max-w-md mx-auto">
              <p className="font-semibold mb-1 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                First-time Setup Note for Suresh:
              </p>
              <p>
                FormSubmit sent a one-time <strong>"Activate Form"</strong> confirmation email to <strong>{portfolioData.email}</strong>. Once confirmed, all future messages will flow directly into your inbox!
              </p>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white text-xs font-mono-tech font-semibold transition-all shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>SEND ANOTHER MESSAGE</span>
            </button>
          </div>
        </div>
      )}

      {/* FORM STATE */}
      {status !== 'success' && (
        <form
          action={`https://formsubmit.co/${portfolioData.email}`}
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* FormSubmit Config & Anti-spam */}
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value={`[Portfolio Contact] ${formData.subject} - ${formData.name}`} />
          <input type="hidden" name="_replyto" value={formData.email} />
          {/* Honeypot field (hidden from real users, traps bots) */}
          <input
            type="text"
            name="_honey"
            value={formData.botcheck}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Inquiry Category Pills */}
          <div>
            <label className="block text-xs font-mono-tech text-[var(--text-muted)] uppercase tracking-wider mb-2">
              Topic / Purpose
            </label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategorySelect(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-all duration-200 border ${
                      isSelected
                        ? 'bg-purple-600/15 border-purple-500 text-[var(--text-purple)] font-semibold shadow-sm'
                        : 'theme-card-subtle border-[var(--border-subtle)] text-[var(--text-body)] hover:border-purple-500/50'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name & Email Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-mono-tech text-[var(--text-muted)] uppercase tracking-wider mb-1.5"
              >
                Your Name <span className="text-purple-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--text-muted)]">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl theme-card-subtle border border-[var(--border-subtle)] text-sm text-[var(--text-heading)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-mono-tech text-[var(--text-muted)] uppercase tracking-wider mb-1.5"
              >
                Your Email <span className="text-purple-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--text-muted)]">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl theme-card-subtle border border-[var(--border-subtle)] text-sm text-[var(--text-heading)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="contact-subject"
              className="block text-xs font-mono-tech text-[var(--text-muted)] uppercase tracking-wider mb-1.5"
            >
              Subject <span className="text-purple-500">*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              required
              placeholder="e.g. Opportunity at TechCorp"
              value={formData.subject}
              onChange={handleChange}
              disabled={status === 'sending'}
              className="w-full px-3 py-2.5 rounded-xl theme-card-subtle border border-[var(--border-subtle)] text-sm text-[var(--text-heading)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="contact-message"
                className="block text-xs font-mono-tech text-[var(--text-muted)] uppercase tracking-wider"
              >
                Message <span className="text-purple-500">*</span>
              </label>
              <span className="text-[11px] font-mono-tech text-[var(--text-muted)]">
                {formData.message.length} chars
              </span>
            </div>
            <div className="relative">
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                placeholder="Hi Suresh, I came across your portfolio and wanted to talk about..."
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'sending'}
                className="w-full p-3 rounded-xl theme-card-subtle border border-[var(--border-subtle)] text-sm text-[var(--text-heading)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-y min-h-[110px]"
              />
            </div>
          </div>

          {/* Error Message & Fallback */}
          {status === 'error' && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-400 space-y-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
              <div className="pt-2 border-t border-rose-500/20 flex flex-wrap items-center justify-between gap-2">
                <span>Want to send via your local email app instead?</span>
                <a
                  href={fallbackMailto}
                  className="inline-flex items-center gap-1 font-semibold underline hover:text-rose-500"
                >
                  <span>Open in Mail Client</span>
                  <Send className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[11px] font-mono-tech text-[var(--text-muted)] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Encrypted delivery via HTTPS</span>
            </span>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white text-xs font-mono-tech font-bold transition-all shadow-md hover:shadow-purple-500/25 disabled:opacity-60 disabled:cursor-not-allowed group cursor-pointer"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>DISPATCHING EMAIL...</span>
                </>
              ) : (
                <>
                  <span>SEND MESSAGE</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
