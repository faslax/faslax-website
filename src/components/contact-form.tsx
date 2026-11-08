'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xnjyelre', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div 
        className="form-success text-center p-4" 
        style={{ 
          background: 'rgba(37, 211, 102, 0.08)', 
          border: '1px solid rgba(37, 211, 102, 0.25)', 
          borderRadius: '16px',
          padding: '32px'
        }}
      >
        <span 
          style={{ 
            display: 'inline-flex', 
            background: '#25D366', 
            color: '#fff', 
            borderRadius: '50%', 
            padding: '10px', 
            marginBottom: '16px' 
          }}
        >
          <Check size={24} />
        </span>
        <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Message Received!</h3>
        <p style={{ fontSize: '14px', color: '#aaa', marginBottom: '20px' }}>
          Thank you for reaching out. We will review your project details and get back to you within 24 hours.
        </p>
        <button 
          className="button button-dark" 
          onClick={() => setStatus('idle')}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {status === 'error' && (
        <div style={{ background: 'rgba(255, 107, 107, 0.1)', border: '1px solid rgba(255, 107, 107, 0.3)', color: '#ff6b6b', padding: '12px', borderRadius: '10px', fontSize: '13px' }}>
          Something went wrong sending your message. Please reach out to us on WhatsApp instead!
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', fontWeight: 600 }}>
          <span>Full Name *</span>
          <input 
            required 
            name="name" 
            placeholder="e.g. Athul Balakrishnan" 
            style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', fontWeight: 600 }}>
          <span>Phone / WhatsApp Number</span>
          <input 
            type="tel" 
            name="phone" 
            placeholder="+91 98765 43210" 
            style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
          />
        </label>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', fontWeight: 600 }}>
          <span>Email Address *</span>
          <input 
            required 
            type="email" 
            name="email" 
            placeholder="name@company.com" 
            style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', fontWeight: 600 }}>
          <span>Service Needed *</span>
          <select 
            required 
            name="service"
            style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: '#18181b', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
          >
            <option value="" disabled selected>Select a service</option>
            <option value="Web, App & Software Development">Web, App &amp; Software Development</option>
            <option value="AI Chatbots & API Integration">AI Chatbots &amp; API Integration</option>
            <option value="Digital Marketing, SEO & Content Writing">Digital Marketing, SEO &amp; Content Writing</option>
            <option value="Other Consultation">Other Consultation</option>
          </select>
        </label>
      </div>

      <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', fontWeight: 600 }}>
        <span>Project Details *</span>
        <textarea 
          required 
          name="message" 
          rows={4} 
          placeholder="Tell us about your requirements, timeline, or current website/app goals..." 
          style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', resize: 'vertical' }}
        />
      </label>

      <button 
        type="submit" 
        disabled={status === 'submitting'} 
        className="button button-primary" 
        style={{ marginTop: '8px', justifyContent: 'center' }}
      >
        {status === 'submitting' ? (
          <>Sending Message <Loader2 size={17} className="animate-spin" /></>
        ) : (
          <>Send Message <ArrowUpRight size={17} /></>
        )}
      </button>
    </form>
  );
}