import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center mb-12">
      <h3>Quizzes</h3>
      <div>
        <Link
          to={"/login"}
          className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
        >
          Login
        </Link>

        <Link
          to={"/logout"}
          className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
        >
          Logout
        </Link>
      </div>
    </header>
  );
}
