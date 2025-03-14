import QuizSheets from "../features/Quiz/QuizSheets";
import Layout from "../ui/Layout";
import Main from "../ui/Main";
import WelcomeScreen from "../ui/WelcomeScreen";

export default function HomePage() {
  return (
    <Layout>
      <WelcomeScreen />
      <Main>
        <QuizSheets />
      </Main>
    </Layout>
  );
}
