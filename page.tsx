import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

// Make sure the components exist at app/components/Header.tsx, Hero.tsx, Features.tsx, and Footer.tsx

const buttonStyle = {
  padding: '0.75rem 1.5rem',
  marginRight: '1rem',
  backgroundColor: '#e50914',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

import FeaturedMovies from './components/FeaturedMovies';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <section
        style={{
          position: 'relative',
          height: '70vh',
          backgroundImage: `url('/banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Dream Lives Here</h1>
        <p style={{ maxWidth: '500px', marginBottom: '1.5rem' }}>
          Stream the latest hits and timeless classics — only on Dreamflix.
        </p>
        <div>
          <button style={buttonStyle}>▶ Play</button>
          <button style={{ ...buttonStyle, backgroundColor: '#555' }}>ℹ More Info</button>
        </div>
      </section>
      <FeaturedMovies />
      <Features />
      <Footer />
    </>
  );
}



