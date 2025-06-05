// app/components/FeaturedMovies.tsx

type Movie = {
  id: number;
  title: string;
  image: string;
};

const movies: Movie[] = [
  {
    id: 1,
    title: 'Inception',
    image: '/inception.jpg',
  },
  {
    id: 2,
    title: 'Interstellar',
    image: '/interstellar.jpg',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    image: '/dark-knight.jpg',
  },
  {
    id: 4,
    title: 'The Departed',
    image: '/departed.jpg',
  },
  {
    id: 5,
    title: 'Paid-N-Full',
    image: '/paidnfull.jpg',
  },
  {
    id: 6,
    title: 'Catch Me If You Can',
    image: '/cmiyc.jpg',
  },
];


export default function FeaturedMovies() {
  return (
    <section style={{ padding: '2rem', color: 'white' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Featured Movies</h2>
      <div style={{ display: 'flex', overflowX: 'scroll', gap: '1rem' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ minWidth: '200px' }}>
            <img
              src={movie.image}
              alt={movie.title}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p style={{ marginTop: '0.5rem' }}>{movie.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}