import { Link } from "react-router";

export default function QuizBook() {
  return (
    <Link
      to="#"
      class="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative group cursor-pointer"
    >
      <div class="group-hover:scale-105 absolute transition-all text-white  text-center top-1/2 -translate-y-1/2 px-4">
        <h1 class=" text-5xl" style="font-family: Jaro">
          JavaScript Basic Quiz
        </h1>
        <p class="mt-2 text-lg">
          Test your knowledge of JavaScript basics with quizzes that cover
          essential concepts, syntax, and foundational programming skills
        </p>
      </div>
      <div class="hidden absolute transition-all bg-black/80 w-full h-full left-0 top-0 text-white group-hover:grid place-items-center">
        <div>
          <h1 class="text-3xl font-bold">Already Participated</h1>
          <p class="text-center">Click to view your leaderboard</p>
        </div>
      </div>
      <img
        src="./assets/backgrounds/2.jpg"
        alt="JavaScript Hoisting"
        class="w-full h-full object-cover rounded mb-4"
      />
    </Link>
  );
}
