import Question from "./Question";
import QuizSummary from "./QuizSummary";
import { useQuiz } from "./useQuiz";

export default function QuizDetails() {
  const { isPending, quizDetails, error } = useQuiz();

  if (isPending) {
    return <p>Loading the Quiz</p>;
  }

  if (error) {
    return <p>Could not load the quiz Right Now</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-full">
      <QuizSummary quiz={quizDetails} />
      <Question quiz={quizDetails.questions} />
    </div>
  );
}
