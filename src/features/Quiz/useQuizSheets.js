import { useQuery } from "@tanstack/react-query";
import { getQuizSheets } from "../../services/apiQuiz";

export function useQuizSheets() {
  const {
    isPending,
    data: quizSheets,
    error,
  } = useQuery({
    queryKey: ["quizSheets"],
    queryFn: getQuizSheets,
  });

  return { quizSheets: quizSheets?.data, isPending, error };
}
