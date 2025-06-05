import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 bg-black text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Dreamflix</h1>
      <nav className="space-x-4">
        <Link href="/" style={{ color: 'red', marginRight: '1rem' }}>Home</Link>
        <Link href="/movies" style={{ color: 'red', marginRight: '1rem' }}>Movies</Link>
        <Link href="/series" style={{ color: 'red', marginRight: '1rem' }}>Series</Link>
        <Link href="/my-list" style={{ color: 'red', marginRight: '1rem' }}>My List</Link>
      </nav>
    </header>
  );
}
