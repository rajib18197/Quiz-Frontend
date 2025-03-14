const API_URL = "http://localhost:5000";

export async function getQuizSheets() {
  try {
    const response = await fetch(`${API_URL}/api/quizzes`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Could not get the Quiz Sheets. Try Again :D");
    }
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getQuiz(id) {
  try {
    const response = await fetch(`${API_URL}/quizzes/${id}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Could not get the Quiz. Try Again :D");
    }
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
}
