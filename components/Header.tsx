export default function Header() {
  return (
    <header className="p-6 bg-blue-600 text-white">
      <h1 className="text-3xl font-bold">
        ClinicForce
      </h1>

      <nav className="mt-3">
        <a className="mr-5" href="/">
          Home
        </a>

        <a className="mr-5" href="/about">
          About
        </a>
      </nav>
    </header>
  );
}