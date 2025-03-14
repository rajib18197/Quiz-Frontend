import QuizBook from "./QuizBook";
import { useQuizSheets } from "./useQuizSheets";

export default function QuizSheets() {
  const { isPending, quizSheets, error } = useQuizSheets();

  if (isPending) {
    return <p>Loading All the QuizSheets</p>;
  }

  if (error) {
    return <p>Could not load the quizSheets Right Now</p>;
  }

  return (
    <section>
      <h3 className="text-2xl font-bold mb-6">Participate In Quizees</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quizSheets.map((quiz) => (
          <QuizBook key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </section>
  );
}
