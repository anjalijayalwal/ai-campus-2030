/* =========================
   CAMPUS AI
========================= */

function openAI(){

  const chat = document.getElementById("aiChat");

  if(chat){
    chat.style.display = "block";
  }

  const input = document.getElementById("userInput");

  if(input){
    input.focus();
  }

}


function closeAI(){

  const chat = document.getElementById("aiChat");

  if(chat){
    chat.style.display = "none";
  }

}


function sendMessage(){

  const input = document.getElementById("userInput");

  if(!input) return;

  const text = input.value.trim();

  if(text === "") return;

  const messages = document.getElementById("messages");

  if(!messages) return;


  /* USER MESSAGE */

  const user = document.createElement("div");

  user.className = "user";

  user.textContent = text;

  messages.appendChild(user);

  input.value = "";


  /* AI RESPONSE */

  setTimeout(function(){

    const bot = document.createElement("div");

    bot.className = "bot";

    let answer =
      "🤖 I'm Campus AI. Try asking about AI, study, career, campus or AI Fest.";

    const q = text.toLowerCase();


    if(
      q.includes("hello") ||
      q.includes("hi") ||
      q.includes("hey")
    ){

      answer =
        "👋 Hello! Welcome to AI Campus 2030. How can I help you?";

    }

    else if(
      q.includes("ai") ||
      q.includes("artificial intelligence")
    ){

      answer =
        "🤖 AI means Artificial Intelligence. It allows computers and machines to perform tasks that normally require human intelligence.";

    }

    else if(
      q.includes("study") ||
      q.includes("exam")
    ){

      answer =
        "📚 Study Tip: Break your topic into small sections, learn one concept at a time and test yourself with questions.";

    }

    else if(
      q.includes("career") ||
      q.includes("job")
    ){

      answer =
        "🎓 You can explore careers such as AI Engineer, Data Scientist, Software Developer, Cybersecurity Specialist, Designer and Researcher.";

    }

    else if(
      q.includes("fest")
    ){

      answer =
        "🚀 AI Fest is an opportunity for students to showcase Artificial Intelligence projects, ideas and innovations.";

    }

    else if(
      q.includes("campus")
    ){

      answer =
        "🏫 AI Campus 2030 includes Smart Classrooms, an AI Innovation Lab, Digital Library and Green Campus.";

    }


    bot.textContent = answer;

    messages.appendChild(bot);

    messages.scrollTop = messages.scrollHeight;

  },600);

}


/* =========================
   STUDY AI
========================= */

function studyTopic(){

  const topicInput = document.getElementById("studyTopic");

  const result = document.getElementById("studyResult");

  if(!topicInput || !result) return;

  const topic = topicInput.value.trim();

  if(topic === ""){

    result.innerHTML =
      "<p style='color:#ff9b9b;'>⚠️ Please enter a topic first.</p>";

    return;

  }


  let explanation =
    "🤖 This topic can be understood by learning its basic definition, important points, examples and applications.";

  const t = topic.toLowerCase();


  if(t.includes("photosynthesis")){

    explanation =
      "🌱 Photosynthesis is the process by which green plants use sunlight, water and carbon dioxide to make food and release oxygen.";

  }

  else if(
    t.includes("ai") ||
    t.includes("artificial intelligence")
  ){

    explanation =
      "🤖 Artificial Intelligence is the ability of computers or machines to perform tasks that normally require human intelligence.";

  }

  else if(t.includes("dna")){

    explanation =
      "🧬 DNA is the molecule that stores genetic information in living organisms.";

  }

  else if(t.includes("computer")){

    explanation =
      "💻 A computer is an electronic device that processes information and performs tasks according to instructions.";

  }

  else if(t.includes("botany")){

    explanation =
      "🌱 Botany is the branch of biology that studies plants, including their structure, growth, reproduction and classification.";

  }

  else if(t.includes("zoology")){

    explanation =
      "🦁 Zoology is the branch of biology that studies animals, including their structure, behaviour, classification and evolution.";

  }


  result.innerHTML = `

    <div class="card">

      <div class="card-icon">🧠</div>

      <h3>${escapeHTML(topic)}</h3>

      <p style="margin-top:15px;">
        ${explanation}
      </p>

      <br>

      <p>
        💡 Tip: Try learning this topic with examples,
        diagrams and practice questions.
      </p>

    </div>

  `;

}


/* =========================
   AI QUIZ
========================= */

function startQuiz(){

  const result = document.getElementById("quizResult");

  if(!result) return;


  result.innerHTML = `

    <div class="card">

      <div class="card-icon">🤖</div>

      <h3>Question 1</h3>

      <p style="margin:20px 0;">
        What does AI stand for?
      </p>

      <button
        class="btn"
        onclick="quizAnswer(true)"
      >
        Artificial Intelligence
      </button>

      <br><br>

      <button
        class="btn btn-outline"
        onclick="quizAnswer(false)"
      >
        Automated Internet
      </button>

    </div>

  `;

}


function quizAnswer(correct){

  const result = document.getElementById("quizResult");

  if(!result) return;


  if(correct){

    result.innerHTML = `

      <div class="card">

        <div class="card-icon">🎉</div>

        <h3>Correct Answer!</h3>

        <p style="margin-top:15px;">
          Excellent! You selected the correct answer.
        </p>

        <h2 style="margin-top:15px;">
          Score: 1 / 1 🏆
        </h2>

        <br>

        <button class="btn" onclick="startQuiz()">
          🔄 Try Again
        </button>

      </div>

    `;

  }

  else{

    result.innerHTML = `

      <div class="card">

        <div class="card-icon">❌</div>

        <h3>Not Quite!</h3>

        <p style="margin-top:15px;">
          The correct answer is
          <b>Artificial Intelligence</b>.
        </p>

        <h2 style="margin-top:15px;">
          Score: 0 / 1
        </h2>

        <br>

        <button class="btn" onclick="startQuiz()">
          🔄 Try Again
        </button>

      </div>

    `;

  }

}


/* =========================
   CAREER AI
========================= */

function findCareer(){

  const choiceElement =
    document.getElementById("careerChoice");

  const result =
    document.getElementById("careerResult");

  if(!choiceElement || !result) return;

  const choice = choiceElement.value;


  if(choice === ""){

    result.innerHTML =
      "<p style='color:#ff9b9b;'>⚠️ Please choose an interest.</p>";

    return;

  }


  let html = "";


  if(choice === "technology"){

    html = `

      <div class="card">

        <div class="card-icon">💻</div>

        <h3>Technology Careers</h3>

        <p>
          AI Engineer, Software Developer,
          Data Scientist, Web Developer and
          Cybersecurity Specialist.
        </p>

      </div>

    `;

  }


  else if(choice === "science"){

    html = `

      <div class="card">

        <div class="card-icon">🔬</div>

        <h3>Science Careers</h3>

        <p>
          Research Scientist, Biotechnologist,
          Environmental Scientist and Laboratory careers.
        </p>

      </div>

    `;

  }


  else if(choice === "design"){

    html = `

      <div class="card">

        <div class="card-icon">🎨</div>

        <h3>Creative Careers</h3>

        <p>
          UI/UX Designer, Graphic Designer,
          Web Designer, Illustrator and
          Creative Director.
        </p>

      </div>

    `;

  }


  else if(choice === "business"){

    html = `

      <div class="card">

        <div class="card-icon">💼</div>

        <h3>Business Careers</h3>

        <p>
          Entrepreneur, Marketing Specialist,
          Business Analyst, Product Manager
          and Digital Marketing Specialist.
        </p>

      </div>

    `;

  }


  result.innerHTML = html;

}


/* =========================
   SAFE HTML
========================= */

function escapeHTML(text){

  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


/* =========================
   NAVIGATION
========================= */

document.addEventListener("DOMContentLoaded", function(){

  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(function(link){

    link.addEventListener("click",function(){

      const target = document.querySelector(
        this.getAttribute("href")
      );

      if(target){

        target.scrollIntoView({
          behavior:"smooth"
        });

      }

    });

  });

});
