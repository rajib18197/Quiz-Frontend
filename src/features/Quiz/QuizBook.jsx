import { Link } from "react-router";

export default function QuizBook({ quiz }) {
  const {
    id,
    title,
    description,
    thumbnail,
    status,
    total_questions: totalQuestions,
    total_attempts: totalAttempts,
    is_attempted: isAttempted,
  } = quiz;

  return (
    <Link
      to={`quiz/${id}`}
      className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative group cursor-pointer"
    >
      <div className="group-hover:scale-105 absolute transition-all text-white  text-center top-1/2 -translate-y-1/2 px-4">
        <h1 className=" text-2xl">{title}</h1>
        <p className="mt-2 text-lg">{description}</p>
      </div>
      {isAttempted && (
        <div className="hidden absolute transition-all bg-black/80 w-full h-full left-0 top-0 text-white group-hover:grid place-items-center">
          <div>
            <h1 className="text-3xl font-bold">Already Participated</h1>
            <p className="text-center">Click to view your leaderboard</p>
          </div>
        </div>
      )}
      <img
        src={thumbnail}
        alt="JavaScript Hoisting"
        className="w-full h-full object-cover rounded mb-4"
      />
    </Link>
  );
}
