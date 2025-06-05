'use client';
import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      alert('Thanks for signing up!');
      setEmail('');
    }
  };

  return (
    <section className="hero" aria-label="Introductory Banner">
      <div className="hero-content">
        <h2>Unlimited movies, TV shows, and more.</h2>
        <p>Watch anywhere. Cancel anytime.</p>
        <form onSubmit={handleSubmit} aria-label="Email signup form">
          <label htmlFor="email" className="visually-hidden">Enter your email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Get Started</button>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    </section>
  );
}
