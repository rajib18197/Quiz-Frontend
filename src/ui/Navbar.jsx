import { Link } from "react-router";

export default function Navbar() {
  return (
    <header class="flex justify-between items-center mb-12">
      <h3>Quizzes</h3>
      <div>
        <Link
          to={"/login"}
          class="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
          style="font-family: Jaro"
        >
          Login
        </Link>

        <Link
          to={"/logout"}
          class="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
          style="font-family: Jaro"
        >
          Logout
        </Link>
      </div>
    </header>
  );
}
