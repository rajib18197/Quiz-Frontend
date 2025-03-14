import { useState } from "react";

const changeOptions = function (options) {
  const arr = [];

  while (arr.length !== 4) {
    let index = Math.trunc(Math.random() * options.length);
    while (arr.includes(index)) {
      index = Math.trunc(Math.random() * options.length);
    }
    arr.push(index);
  }

  return arr.map((index) => options[index]);
};

export default function Question({ questions }) {
  const [currIndex, setCurrIndex] = useState(0);
  const currQuestion = questions[currIndex];

  const options = changeOptions(currQuestion.options);

  function handleClickNext() {
    setCurrIndex((prev) => prev + 1);
  }

  return (
    <div className="lg:col-span-2 bg-white">
      <div className="bg-white p-6 !pb-2 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold">{currQuestion.question}</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {options.map((opt, index) => {
            return (
              <label
                className="flex items-center space-x-3 py-3 px-4 bg-primary/5 rounded-md text-lg"
                key={opt}
              >
                <input
                  type="checkbox"
                  name={`answer${index + 1}`}
                  className="form-radio text-buzzr-purple"
                  checked
                />
                <span>{opt}</span>
              </label>
            );
          })}
        </div>

        <button
          className="w-1/2 text-center ml-auto block bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mb-6 font-semibold my-8"
          onClick={handleClickNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
