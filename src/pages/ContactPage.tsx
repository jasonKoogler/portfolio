import type { FormEvent } from 'react';
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to a server
      console.log('Form submitted:', formData);
      setFormStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  return (
    <div>
      <h1 className="text-2xl mb-8 font-bold tracking-wider">CONTACT ME</h1>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="mb-6">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">EMAIL</h2>
            <p><a href="mailto:your.email@example.com" className="underline hover:text-white transition-colors">your.email@example.com</a></p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">SOCIAL</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-bold mb-4">SEND A MESSAGE</h2>
          
          {formStatus === 'success' ? (
            <div className="p-4 border border-[#33ff33] bg-[rgba(51,255,51,0.1)]">
              <p className="font-bold">Message sent successfully!</p>
              <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-zinc-800 border border-[#33ff33] focus:shadow-[0_0_8px_rgba(51,255,51,0.5)] transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-zinc-800 border border-[#33ff33] focus:shadow-[0_0_8px_rgba(51,255,51,0.5)] transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-2 bg-zinc-800 border border-[#33ff33] focus:shadow-[0_0_8px_rgba(51,255,51,0.5)] transition-all"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="px-6 py-3 border border-[#33ff33] hover:shadow-[0_0_8px_rgba(51,255,51,0.5)] transition-all disabled:opacity-50"
              >
                {formStatus === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
              
              {formStatus === 'error' && (
                <p className="text-red-500">There was an error sending your message. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
