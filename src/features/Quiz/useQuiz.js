import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getQuiz } from "../../services/apiQuiz";

export function useQuiz() {
  const query = useParams();
  console.log(query);
  const {
    isPending,
    data: quizDetails,
    error,
  } = useQuery({
    queryKey: ["quiz", query.id],
    queryFn: () => getQuiz(query.id),
  });

  return { isPending, quizDetails, error };
}
