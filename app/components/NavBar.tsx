const NavBar = () => {
  return (
    <nav className="bg-orange-200 p-4">
      <ul className="flex justify-center space-x-4 text-white">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/page">Page</a>
        </li>
        <li>
          <a href="/pageButton">Button</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
