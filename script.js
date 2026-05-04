const lessons = [
  {
    title: "Management Spectrum: The Four P's",
    summary:
      "The management spectrum has four connected parts: People, Product, Process, and Project. People are the most important because the project depends on their skills and cooperation.",
    points: [
      "People: team members and stakeholders. This is the most important element.",
      "Product: the software or system that will be built.",
      "Process: the framework activities and tasks used to build the product.",
      "Project: all work needed to make the product real and deliver it.",
    ],
    focus:
      "Exam clue: most important P = People. Software itself = Product. Method or activity = Process.",
    questions: [
      "What are the Four P's?",
      "Which P is the most important?",
      "What is the difference between Product and Process?",
    ],
  },
  {
    title: "Stakeholders",
    summary:
      "Stakeholders are people or groups who affect the software project or are affected by it. Each stakeholder has a clear role.",
    points: [
      "Senior managers define business issues and goals.",
      "Project managers plan, motivate, organize, and control the team.",
      "Practitioners deliver the technical skills needed to engineer the product.",
      "Customers specify requirements. End-users use the software after release.",
    ],
    focus:
      "Exam clue: senior managers define business issues. Customers specify requirements. Practitioners build.",
    questions: [
      "Who defines business issues?",
      "Who specifies software requirements?",
      "Mention the main stakeholder types.",
    ],
  },
  {
    title: "Team Leadership: Kouzes Practices",
    summary:
      "A team leader guides people, builds trust, and keeps the team motivated. Kouzes describes five practical leadership behaviors.",
    points: [
      "Model the way: the leader acts as an example and shares sacrifice.",
      "Inspire a shared vision: connect team goals with personal goals.",
      "Challenge the process: support experiments, risks, and learning.",
      "Enable others to act: share decision making and goal setting.",
      "Encourage the heart: celebrate goals and victories.",
    ],
    focus:
      "Exam clue: shared sacrifice = Model the way. Shared decisions = Enable others. Celebration = Encourage the heart.",
    questions: [
      "Which practice means shared sacrifice?",
      "Which practice means shared decision making?",
      "Why does a leader celebrate success?",
    ],
  },
  {
    title: "Factors Affecting Team Structure",
    summary:
      "The correct team structure depends on the project situation. Large or difficult systems need different structures from small simple projects.",
    points: [
      "Problem difficulty affects the needed skill level.",
      "Program size is measured in lines of code or function points.",
      "Team lifetime means how long the team works together.",
      "Modularity, quality, deadline rigidity, and communication need also affect structure.",
    ],
    focus:
      "Exam clue: programming language is not listed as a main factor. Size is measured in LOC or function points.",
    questions: [
      "Mention four factors that affect team structure.",
      "How is program size measured?",
      "Why does a fixed deadline affect the team?",
    ],
  },
  {
    title: "Team Toxicity Factors",
    summary:
      "Team toxicity means problems that damage focus, morale, accountability, and cooperation.",
    points: [
      "Frenzied work atmosphere makes the team waste energy.",
      "High frustration creates conflict.",
      "Fragmented procedures create confusion.",
      "Unclear roles cause lack of accountability and finger-pointing.",
      "Repeated failure lowers confidence and morale.",
    ],
    focus:
      "Exam clue: unclear roles lead to lack of accountability and finger-pointing.",
    questions: [
      "What happens when roles are unclear?",
      "Mention two team toxicity factors.",
      "How does repeated failure affect morale?",
    ],
  },
  {
    title: "Agile Teams",
    summary:
      "Agile teams need trust, suitable skills, and self-organization. The team chooses how to work within business and organizational constraints.",
    points: [
      "Trust helps people collaborate and share responsibility.",
      "The skill mix must fit the problem.",
      "Self-organizing means the team chooses its approach.",
    ],
    focus:
      "Exam clue: Agile team = trust + balanced skills + self-organization.",
    questions: [
      "What are three properties of agile teams?",
      "What does self-organizing mean?",
      "Why is trust important?",
    ],
  },
  {
    title: "Team Coordination and Communication",
    summary:
      "Software teams need formal and informal communication. Formal communication is structured. Informal communication is daily and personal.",
    points: [
      "Formal communication includes reports, documents, and structured meetings.",
      "Informal communication includes quick talks, chat, and asking for help.",
      "Both types help the team coordinate and solve problems.",
    ],
    focus:
      "Exam clue: reports and structured meetings are formal. Quick daily talks are informal.",
    questions: [
      "Compare formal and informal communication.",
      "Give one example of each type.",
      "Why do teams need communication mechanisms?",
    ],
  },
  {
    title: "Coordination and Communication Issues",
    summary:
      "Large projects, uncertainty, and interoperability create coordination problems for software teams.",
    points: [
      "Large scale creates complexity and confusion.",
      "Uncertainty means requirements or conditions keep changing.",
      "Interoperability means the new software must work with existing software.",
    ],
    focus:
      "Exam clue: existing systems or old products usually point to interoperability.",
    questions: [
      "Why are large projects hard to coordinate?",
      "What does uncertainty mean?",
      "Define interoperability.",
    ],
  },
  {
    title: "Process and Planning",
    summary:
      "The team chooses a process model based on customers, people, product characteristics, and project environment. Then the team creates a preliminary plan.",
    points: [
      "The process model should fit the customers.",
      "It should fit the people who will do the work.",
      "It should fit the product characteristics.",
      "It should fit the project environment.",
      "After the plan is created, process decomposition begins.",
    ],
    focus:
      "Exam clue: process choice depends on customer, team, product, and environment.",
    questions: [
      "What affects process model selection?",
      "What happens after the preliminary plan?",
      "Why is planning important?",
    ],
  },
  {
    title: "Problem Decomposition",
    summary:
      "Problem decomposition means breaking the scope into smaller understandable parts. It is also called partitioning or problem elaboration.",
    points: [
      "Functional decomposition divides the problem into functions.",
      "Data-based decomposition divides it into user-visible data objects.",
      "Class-based decomposition divides it into problem classes.",
      "The process continues until all functions or classes are defined.",
    ],
    focus:
      "Exam clue: decomposition can be function-based, data-based, or class-based.",
    questions: [
      "What is another name for problem decomposition?",
      "Mention three decomposition methods.",
      "When should decomposition stop?",
    ],
  },
  {
    title: "Successful Project Characteristics",
    summary:
      "Successful projects usually have clear requirements, active users, strong leadership, good planning, skilled people, satisfaction, and a working product.",
    points: [
      "Requirements are clear and accepted by stakeholders.",
      "Users participate throughout development.",
      "The project manager has leadership skills.",
      "Schedule and budget estimates are realistic.",
      "The final product meets scope and quality.",
    ],
    focus:
      "Exam clue: success needs people, planning, user involvement, and a working quality product.",
    questions: [
      "Mention five successful project characteristics.",
      "Why is user participation important?",
      "How do realistic estimates help?",
    ],
  },
  {
    title: "W5HH Principle",
    summary:
      "W5HH is a planning checklist: Why, What, When, Who, Where, How, and How much.",
    points: [
      "Why: reason for the system.",
      "What: work that will be done.",
      "When: schedule.",
      "Who: responsible people.",
      "Where: organizational location.",
      "How: technical and managerial approach.",
      "How much: required resources.",
    ],
    focus:
      "Exam clue: How much asks about resources such as people, tools, software, and database.",
    questions: [
      "List the W5HH questions.",
      "Which question estimates resources?",
      "Why is W5HH useful?",
    ],
  },
];

const reviewItems = [
  ["Four P's", "People, Product, Process, Project."],
  ["Most important P", "People."],
  ["Senior managers", "Define business issues."],
  ["Customers", "Specify requirements."],
  ["Practitioners", "Deliver technical skills."],
  ["Unclear roles", "Cause lack of accountability and finger-pointing."],
  ["Agile team", "Trust, balanced skills, self-organization."],
  ["W5HH", "Why, What, When, Who, Where, How, How much."],
];

const quizQuestions = [
  {
    q: "According to the Management Spectrum, which of the four P's is considered the most important element of a successful project?",
    options: ["Product", "Process", "People", "Project"],
    answer: 2,
    note: "People are the most important element.",
  },
  {
    q: "Which stakeholder defines business issues that significantly influence the project?",
    options: ["Customers", "Senior managers", "Project managers", "Practitioners"],
    answer: 1,
    note: "Senior managers define the business issues.",
  },
  {
    q: "Who specifies the requirements for the software?",
    options: ["End-users", "Project managers", "Customers", "Practitioners"],
    answer: 2,
    note: "Customers specify the requirements.",
  },
  {
    q: "The technical skills necessary to engineer a product are delivered by:",
    options: ["Project managers", "Practitioners", "Senior managers", "End-users"],
    answer: 1,
    note: "Practitioners deliver the technical skills.",
  },
  {
    q: "A leader who demonstrates commitment through shared sacrifice is applying:",
    options: ["Model the way", "Inspire a shared vision", "Enable others to act", "Encourage the heart"],
    answer: 0,
    note: "Model the way means acting as an example.",
  },
  {
    q: "Sharing decision making and goal setting describes:",
    options: ["Challenge the process", "Inspire a shared vision", "Encourage the heart", "Enable others to act"],
    answer: 3,
    note: "Enable others to act increases team competence.",
  },
  {
    q: "Celebrating shared goals and victories describes:",
    options: ["Challenge the process", "Encourage the heart", "Model the way", "Enable others to act"],
    answer: 1,
    note: "Encourage the heart builds community spirit.",
  },
  {
    q: "Which item is NOT listed as a factor affecting team structure?",
    options: ["Problem difficulty", "Required quality", "Delivery date rigidity", "Specific programming language used"],
    answer: 3,
    note: "Programming language is not listed in the lecture factors.",
  },
  {
    q: "Program size is typically measured in:",
    options: ["Number of practitioners", "Lines of code or function points", "Hours per week", "Number of end-users"],
    answer: 1,
    note: "Size is measured in LOC or function points.",
  },
  {
    q: "The main consequence of unclear roles is:",
    options: ["A frenzied atmosphere", "Wrong process models", "Lack of accountability and finger-pointing", "More team trust"],
    answer: 2,
    note: "Unclear roles cause lack of accountability.",
  },
  {
    q: "Which communication type uses reports and structured meetings?",
    options: ["Informal", "Formal", "Uncertain", "Agile"],
    answer: 1,
    note: "Formal communication is structured.",
  },
  {
    q: "Quick daily talks and asking for help are examples of:",
    options: ["Formal communication", "Informal communication", "Process decomposition", "Delivery rigidity"],
    answer: 1,
    note: "Informal communication is personal and daily.",
  },
  {
    q: "New software must work with existing systems. This describes:",
    options: ["Interoperability", "Team lifetime", "Product size", "Shared vision"],
    answer: 0,
    note: "Interoperability means systems can work together.",
  },
  {
    q: "After a preliminary project plan is established, what begins?",
    options: ["Product release", "Process decomposition", "Team celebration", "Budget closure"],
    answer: 1,
    note: "Process decomposition begins after the preliminary plan.",
  },
  {
    q: "Problem decomposition can divide scope into functions, data objects, or:",
    options: ["Problem classes", "Senior managers", "Delivery dates", "User meetings"],
    answer: 0,
    note: "The third method is class-based decomposition.",
  },
  {
    q: "In W5HH, which question estimates resources?",
    options: ["Why?", "Where?", "How much?", "Who?"],
    answer: 2,
    note: "How much asks how many resources are needed.",
  },
  {
    q: "Which W5HH question identifies responsibility?",
    options: ["Who?", "When?", "Why?", "Where?"],
    answer: 0,
    note: "Who asks who is responsible.",
  },
  {
    q: "Which factor asks whether the problem can be divided into smaller parts?",
    options: ["Team lifetime", "Modularity", "Budget realism", "Stakeholder type"],
    answer: 1,
    note: "Modularity is about dividing the problem.",
  },
  {
    q: "What does repeated exposure to failure usually cause?",
    options: ["Higher morale", "Lower confidence and morale", "More accountability", "Less uncertainty"],
    answer: 1,
    note: "Repeated failure lowers confidence and morale.",
  },
  {
    q: "What is the best simple description of self-organizing agile teams?",
    options: ["They ignore standards", "They choose how to work within constraints", "They have no manager ever", "They skip planning"],
    answer: 1,
    note: "Self-organizing teams choose their approach within constraints.",
  },
  {
    q: "Which project success factor means users stay involved during development?",
    options: ["Active user participation", "Delivery date rigidity", "Fragmented procedures", "Process failure"],
    answer: 0,
    note: "Active user participation means users are involved continuously.",
  },
  {
    q: "Which stakeholder interacts with the software after production release?",
    options: ["Senior managers", "End-users", "Practitioners", "Process managers"],
    answer: 1,
    note: "End-users use the released software.",
  },
  {
    q: "Which Kouzes practice encourages experiments and learning from failure?",
    options: ["Challenge the process", "Model the way", "Encourage the heart", "Enable others to act"],
    answer: 0,
    note: "Challenge the process supports experiments and learning.",
  },
  {
    q: "Which process selection factor focuses on the people doing the work?",
    options: ["Customers", "The team members", "Old systems only", "Database size only"],
    answer: 1,
    note: "Process model selection depends on the people who will do the work.",
  },
];

const lessonLinks = document.querySelector("#lessonLinks");
const lessonStack = document.querySelector("#lessonStack");
const reviewGrid = document.querySelector("#reviewGrid");
const questionList = document.querySelector("#questionList");
const scoreValue = document.querySelector("#scoreValue");
const themeToggle = document.querySelector("#themeToggle");
const checkAnswersButton = document.querySelector("#checkAnswers");
const checkAnswersBottomButton = document.querySelector("#checkAnswersBottom");
const resetQuizButton = document.querySelector("#resetQuiz");
const resetQuizBottomButton = document.querySelector("#resetQuizBottom");

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function applyTheme(theme) {
  const activeTheme = theme === "light" ? "light" : "dark";
  const isLight = activeTheme === "light";
  document.body.dataset.theme = activeTheme;
  try {
    localStorage.setItem("week07-theme", activeTheme);
  } catch {
    // Theme still works even if storage is unavailable.
  }
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark mode" : "Switch to light mode",
  );
  themeToggle.querySelector(".theme-text").textContent = isLight
    ? "Dark mode"
    : "Light mode";
}

function setupThemeToggle() {
  const themeFromUrl = new URLSearchParams(window.location.search).get("theme");
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("week07-theme");
  } catch {
    savedTheme = null;
  }
  applyTheme(themeFromUrl || savedTheme || "dark");
  themeToggle.addEventListener("click", () => {
    applyTheme(document.body.dataset.theme === "light" ? "dark" : "light");
  });
}

function renderLessons() {
  lessons.forEach((lesson, index) => {
    const id = slugify(lesson.title);
    const link = document.createElement("a");
    link.className = "lesson-link";
    link.href = `#${id}`;
    link.textContent = `${index + 1}. ${lesson.title}`;
    lessonLinks.appendChild(link);

    const article = document.createElement("article");
    article.className = "lesson-card";
    article.id = id;
    article.innerHTML = `
      <div class="lesson-head">
        <span class="lesson-number">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h2>${lesson.title}</h2>
          <p class="summary">${lesson.summary}</p>
        </div>
      </div>
      <div class="point-grid">
        ${lesson.points.map((point) => `<div class="point">${point}</div>`).join("")}
      </div>
      <div class="exam-focus">${lesson.focus}</div>
      <div class="mini-questions">
        <h3>Questions on this part</h3>
        <ol>${lesson.questions.map((question) => `<li>${question}</li>`).join("")}</ol>
      </div>
    `;
    lessonStack.appendChild(article);
  });
}

function renderReview() {
  reviewItems.forEach(([title, text], index) => {
    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <span class="review-index">${index + 1}</span>
      <div>
        <strong>${title}</strong>
        <span>${text}</span>
      </div>
    `;
    reviewGrid.appendChild(item);
  });
}

function renderQuiz() {
  scoreValue.textContent = `0 / ${quizQuestions.length}`;
  quizQuestions.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "question-card";
    card.dataset.answer = item.answer;
    card.innerHTML = `
      <p class="question-title">${index + 1}. ${item.q}</p>
      ${item.options
        .map(
          (option, optionIndex) => `
            <label class="option">
              <input type="radio" name="q${index}" value="${optionIndex}" />
              <span>${option}</span>
            </label>
          `,
        )
        .join("")}
      <div class="answer-note">Correct answer: ${item.options[item.answer]}. ${item.note}</div>
    `;
    questionList.appendChild(card);
  });
}

function checkAnswers() {
  let score = 0;
  const cards = [...document.querySelectorAll(".question-card")];
  cards.forEach((card) => {
    const selected = card.querySelector("input:checked");
    const correctAnswer = Number(card.dataset.answer);
    card.classList.remove("correct", "incorrect");
    if (!selected) {
      card.classList.add("incorrect");
      return;
    }
    if (Number(selected.value) === correctAnswer) {
      score += 1;
      card.classList.add("correct");
    } else {
      card.classList.add("incorrect");
    }
  });
  scoreValue.textContent = `${score} / ${quizQuestions.length}`;
}

function resetQuiz() {
  document.querySelectorAll(".question-card").forEach((card) => {
    card.classList.remove("correct", "incorrect");
  });
  document.querySelectorAll("input[type='radio']").forEach((input) => {
    input.checked = false;
  });
  scoreValue.textContent = `0 / ${quizQuestions.length}`;
}

setupThemeToggle();
renderLessons();
renderReview();
renderQuiz();

checkAnswersButton.addEventListener("click", checkAnswers);
checkAnswersBottomButton.addEventListener("click", checkAnswers);
resetQuizButton.addEventListener("click", resetQuiz);
resetQuizBottomButton.addEventListener("click", resetQuiz);
