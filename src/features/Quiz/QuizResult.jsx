import ResultReview from "./ResultReview";
import ResultSummary from "./ResultSummary";

export default function QuizResult() {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <ResultSummary />
      <ResultReview />
    </div>
  );
}
