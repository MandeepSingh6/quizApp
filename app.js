const data = [
  {
    question: "What is the capital city of Australia?",
    options: ["Melbourne", "Sydney", "Canberra", "Perth"],
    correctAnswer: "Canberra",
  },
  {
    question: "Which of the following is not a primary color?",
    options: ["Red", "Blue", "Green", "Yellow"],
    correctAnswer: "Green",
  },
  {
    question: "What is the tallest mammal in the world?",
    options: ["Giraffe", "Elephant", "Horse", "Rhino"],
    correctAnswer: "Giraffe",
  },
  {
    question: "Which planet in our solar system is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Saturn", "Neptune"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Lungs", "Heart", "Skin"],
    correctAnswer: "Skin",
  },
  {
    question: "What is the symbol for the chemical element 'Iron'?",
    options: ["Fe", "Hg", "Au", "Ag"],
    correctAnswer: "Fe",
  },
  {
    question: "Which city is known as the 'Big Apple'?",
    options: ["Los Angeles", "New York", "Chicago", "Miami"],
    correctAnswer: "New York",
  },
  {
    question: "Which of the following is a programming language?",
    options: ["HTML", "CSS", "JavaScript", "XML"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Euro", "Dollar", "Pound"],
    correctAnswer: "Yen",
  },
  {
    question: "What is the name of the world's largest desert?",
    options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
    correctAnswer: "Sahara",
  },
];

const form = document.getElementById("application");
const button = document.createElement("button");
button.textContent = "submit";
let counter = 1;

for (let i of data) {
  const questionContainer = document.createElement("ul");
  questionContainer.id = "question" + counter;
  const question = document.createElement("li");
  const optionsContainerOutside = document.createElement("li");
  const optionsContainer = document.createElement("ul");

  question.textContent = i.question;
  questionContainer.appendChild(question);

  for (let j of i.options) {
    const optionItem = document.createElement("li");
    const label = document.createElement("label");

    const option = document.createElement("input");
    option.type = "radio";
    option.required = true;
    option.name = "ques" + counter;
    option.value = j;
    option.id = j;

    optionItem.appendChild(option);
    label.htmlFor = j;
    label.textContent = j;
    optionItem.appendChild(label);
    optionsContainer.appendChild(optionItem);
  }
  optionsContainerOutside.appendChild(optionsContainer);
  questionContainer.appendChild(optionsContainerOutside);
  form.appendChild(questionContainer);
  form.appendChild(button);
  button.style.display = "block";
  button.style.margin = "auto";
  counter += 1;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  for (let i = 0; i < data.length; i++) {
    const message = document.createElement("li");
    if (data[i].correctAnswer === formData.get("ques" + (i + 1))) {
      message.textContent = "correct!";
      message.style.color = "green";
    } else {
      message.textContent = "wrong! correct answer is " + data[i].correctAnswer;
      message.style.color = "red";
    }

    document.getElementById("question" + (i + 1)).appendChild(message);
  }
});
