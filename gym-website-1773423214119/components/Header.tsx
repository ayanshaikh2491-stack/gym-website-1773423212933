import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">Gym Website</a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/classes">
                <a>Classes</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;