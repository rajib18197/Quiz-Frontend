import QuizBook from "./QuizBook";

export default function QuizSheets() {
  return (
    <section>
      <h3 class="text-2xl font-bold mb-6">Participate In Quizees</h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <QuizBook />
      </div>
    </section>
  );
}
