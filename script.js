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

const quizQuestionsMasry = [
  {
    q: "طبقًا لطيف الإدارة، أنهي واحدة من الأربع P's بتتعتبر أهم عنصر لنجاح المشروع؟",
    options: ["المنتج", "العملية", "الناس", "المشروع"],
    answer: 2,
    note: "الناس هي أهم عنصر.",
  },
  {
    q: "أنهي stakeholder هو اللي بيحدد مشاكل البزنس اللي بتأثر بقوة على المشروع؟",
    options: ["العملاء", "المديرين الكبار", "مديري المشاريع", "الممارسين"],
    answer: 1,
    note: "المديرين الكبار هم اللي بيحددوا مشاكل البزنس.",
  },
  {
    q: "مين اللي بيحدد متطلبات السوفتوير؟",
    options: ["المستخدمين النهائيين", "مديري المشاريع", "العملاء", "الممارسين"],
    answer: 2,
    note: "العملاء هم اللي بيحددوا المتطلبات.",
  },
  {
    q: "المهارات التقنية المطلوبة لبناء المنتج بيقدمها مين؟",
    options: ["مديري المشاريع", "الممارسين", "المديرين الكبار", "المستخدمين النهائيين"],
    answer: 1,
    note: "الممارسين هم اللي بيقدموا المهارات التقنية.",
  },
  {
    q: "القائد اللي بيثبت التزامه من خلال التضحية المشتركة بيطبق أنهي ممارسة؟",
    options: ["Model the way", "Inspire a shared vision", "Enable others to act", "Encourage the heart"],
    answer: 0,
    note: "Model the way يعني القائد يكون قدوة في الفعل.",
  },
  {
    q: "مشاركة اتخاذ القرار وتحديد الأهداف بتوصف أنهي ممارسة؟",
    options: ["Challenge the process", "Inspire a shared vision", "Encourage the heart", "Enable others to act"],
    answer: 3,
    note: "Enable others to act بتزوّد كفاءة الفريق.",
  },
  {
    q: "الاحتفال بالأهداف المشتركة والانتصارات بيوصف أنهي ممارسة؟",
    options: ["Challenge the process", "Encourage the heart", "Model the way", "Enable others to act"],
    answer: 1,
    note: "Encourage the heart بيبني روح الفريق.",
  },
  {
    q: "أنهي اختيار مش مذكور كعامل بيأثر على هيكل الفريق؟",
    options: ["صعوبة المشكلة", "الجودة المطلوبة", "صرامة موعد التسليم", "لغة البرمجة المستخدمة"],
    answer: 3,
    note: "لغة البرمجة مش ضمن العوامل الأساسية المذكورة.",
  },
  {
    q: "حجم البرنامج غالبًا بيتقاس بإيه؟",
    options: ["عدد الممارسين", "عدد الأسطر أو Function Points", "عدد ساعات العمل أسبوعيًا", "عدد المستخدمين النهائيين"],
    answer: 1,
    note: "الحجم بيتقاس بـ LOC أو Function Points.",
  },
  {
    q: "النتيجة الأساسية لعدم وضوح الأدوار هي:",
    options: ["جو عمل متوتر", "اختيار عملية غلط", "غياب المساءلة ورمي اللوم", "زيادة الثقة"],
    answer: 2,
    note: "غموض الأدوار بيؤدي لغياب المساءلة.",
  },
  {
    q: "أنهي نوع تواصل بيعتمد على التقارير والاجتماعات المنظمة؟",
    options: ["غير رسمي", "رسمي", "غير مؤكد", "Agile"],
    answer: 1,
    note: "التواصل الرسمي بيكون منظم.",
  },
  {
    q: "الكلام اليومي السريع وطلب المساعدة أمثلة على:",
    options: ["تواصل رسمي", "تواصل غير رسمي", "تفكيك العملية", "صرامة التسليم"],
    answer: 1,
    note: "التواصل غير الرسمي بيكون شخصي ويومي.",
  },
  {
    q: "إن السوفتوير الجديد لازم يشتغل مع أنظمة موجودة بالفعل ده بيوصف:",
    options: ["Interoperability", "عمر الفريق", "حجم المنتج", "رؤية مشتركة"],
    answer: 0,
    note: "Interoperability يعني الأنظمة تعرف تشتغل مع بعض.",
  },
  {
    q: "بعد ما الخطة المبدئية للمشروع تتعمل، إيه اللي بيبدأ؟",
    options: ["إطلاق المنتج", "تفكيك العملية", "الاحتفال بالفريق", "إغلاق الميزانية"],
    answer: 1,
    note: "تفكيك العملية بيبدأ بعد الخطة المبدئية.",
  },
  {
    q: "تفكيك المشكلة ممكن يقسم النطاق إلى وظائف، وعناصر بيانات، أو:",
    options: ["كلاسات المشكلة", "المديرين الكبار", "مواعيد التسليم", "اجتماعات المستخدم"],
    answer: 0,
    note: "الطريقة الثالثة هي التفكيك المعتمد على الكلاسات.",
  },
  {
    q: "في W5HH، أنهي سؤال بيقدّر الموارد؟",
    options: ["Why?", "Where?", "How much?", "Who?"],
    answer: 2,
    note: "How much بيسأل عن حجم الموارد المطلوبة.",
  },
  {
    q: "أنهي سؤال في W5HH بيحدد المسئولية؟",
    options: ["Who?", "When?", "Why?", "Where?"],
    answer: 0,
    note: "Who؟ يعني مين المسئول.",
  },
  {
    q: "أنهي عامل بيسأل إذا كانت المشكلة ممكن تتقسم لأجزاء أصغر؟",
    options: ["عمر الفريق", "Modularity", "واقعية الميزانية", "نوع الـ stakeholder"],
    answer: 1,
    note: "Modularity معناها قابلية المشكلة للتقسيم.",
  },
  {
    q: "التعرض المتكرر للفشل غالبًا بيسبب:",
    options: ["ارتفاع المعنويات", "انخفاض الثقة والمعنويات", "مساءلة أعلى", "عدم يقين أقل"],
    answer: 1,
    note: "الفشل المتكرر بيقلل الثقة والمعنويات.",
  },
  {
    q: "أفضل وصف بسيط لفرق Agile ذاتية التنظيم هو:",
    options: ["بتتجاهل المعايير", "بتختار طريقة الشغل داخل القيود", "مفيش مدير خالص", "بتشتغل من غير تخطيط"],
    answer: 1,
    note: "الفرق الذاتية التنظيم بتختار أسلوبها داخل القيود المتاحة.",
  },
  {
    q: "أنهي عامل نجاح للمشروع معناه إن المستخدمين مستمرين في المشاركة أثناء التطوير؟",
    options: ["مشاركة مستخدمين فعّالة", "صرامة موعد التسليم", "إجراءات متقطعة", "فشل العملية"],
    answer: 0,
    note: "مشاركة المستخدمين الفعّالة معناها حضورهم المستمر.",
  },
  {
    q: "أنهي stakeholder بيتعامل مع السوفتوير بعد الإطلاق؟",
    options: ["المديرين الكبار", "المستخدمين النهائيين", "الممارسين", "مديري العملية"],
    answer: 1,
    note: "المستخدمين النهائيين هم اللي بيستخدموا المنتج بعد الإطلاق.",
  },
  {
    q: "أنهي ممارسة من Kouzes بتشجع التجربة والتعلم من الفشل؟",
    options: ["Challenge the process", "Model the way", "Encourage the heart", "Enable others to act"],
    answer: 0,
    note: "Challenge the process بتشجع التجارب والتعلم المستمر.",
  },
  {
    q: "أنهي عامل في اختيار العملية بيركز على الناس اللي هتنفذ الشغل؟",
    options: ["العملاء", "أعضاء الفريق", "الأنظمة القديمة فقط", "حجم قاعدة البيانات فقط"],
    answer: 1,
    note: "اختيار العملية بيعتمد على الناس اللي هتقوم بالتنفيذ.",
  },
];

const lessonsMasry = [
  {
    title: "طيف الإدارة: الأربع P's",
    summary:
      "طيف الإدارة فيه 4 أجزاء مرتبطين ببعض: People وProduct وProcess وProject. أهم جزء فيهم هو الناس، لأن نجاح المشروع بيعتمد على مهاراتهم وتعاونهم.",
    points: [
      "People: أعضاء الفريق والـ stakeholders، وده أهم عنصر.",
      "Product: السوفتوير أو السيستم اللي المفروض يتبني.",
      "Process: الطريقة والأنشطة اللي بنشتغل بيها عشان نبني المنتج.",
      "Project: كل الشغل المطلوب عشان نطلع المنتج ونسلمه.",
    ],
    focus:
      "تلميحة امتحان: أهم P هي People. السوفتوير نفسه = Product. الطريقة أو النشاط = Process.",
    questions: [
      "إيه هي الأربع P's؟",
      "أنهي P هي الأهم؟",
      "إيه الفرق بين Product وProcess؟",
    ],
  },
  {
    title: "أصحاب المصلحة (Stakeholders)",
    summary:
      "الـ Stakeholders هم أشخاص أو جهات بتأثر في المشروع أو المشروع بيأثر عليهم، وكل طرف فيهم ليه دور واضح.",
    points: [
      "Senior managers بيحددوا مشاكل وأهداف البزنس.",
      "Project managers بيخططوا، بينظموا، وبيتابعوا الفريق.",
      "Practitioners بيقدموا المهارات التقنية اللازمة لبناء المنتج.",
      "Customers بيحددوا المتطلبات، وEnd-users بيستخدموا النظام بعد الإطلاق.",
    ],
    focus:
      "تلميحة امتحان: Senior managers = مشاكل البزنس. Customers = المتطلبات. Practitioners = التنفيذ التقني.",
    questions: [
      "مين اللي بيحدد مشاكل البزنس؟",
      "مين اللي بيحدد متطلبات السوفتوير؟",
      "اذكر الأنواع الأساسية للـ stakeholders.",
    ],
  },
  {
    title: "قيادة الفريق: ممارسات Kouzes",
    summary:
      "قائد الفريق بيوجّه الناس، يبني ثقة، ويحافظ على الحماس. Kouzes وصف 5 ممارسات قيادية عملية.",
    points: [
      "Model the way: القائد يكون قدوة ويتحمل مع الفريق.",
      "Inspire a shared vision: يربط هدف الفريق بأهداف أفراده.",
      "Challenge the process: يشجع التجربة والمخاطرة والتعلم.",
      "Enable others to act: يشاركهم القرار وتحديد الأهداف.",
      "Encourage the heart: يحتفل بالإنجازات والنجاحات.",
    ],
    focus:
      "تلميحة امتحان: التضحية المشتركة = Model the way. القرار المشترك = Enable others to act. الاحتفال = Encourage the heart.",
    questions: [
      "أنهي ممارسة معناها التضحية المشتركة؟",
      "أنهي ممارسة معناها مشاركة اتخاذ القرار؟",
      "ليه القائد بيحتفل بالنجاح؟",
    ],
  },
  {
    title: "العوامل اللي بتأثر على هيكل الفريق",
    summary:
      "هيكل الفريق المناسب بيتحدد حسب حالة المشروع. المشاريع الكبيرة أو المعقدة بتحتاج تنظيم مختلف عن المشاريع البسيطة.",
    points: [
      "صعوبة المشكلة بتحدد مستوى المهارة المطلوب.",
      "حجم البرنامج بيتقاس بعدد الأسطر (LOC) أو Function Points.",
      "عمر الفريق يعني هيفضل شغال مع بعض قد إيه.",
      "الموديولارية، الجودة، صرامة الديدلاين، واحتياج التواصل بيأثروا على الهيكل.",
    ],
    focus:
      "تلميحة امتحان: لغة البرمجة مش عامل أساسي في الليستة. الحجم بيتقاس بـ LOC أو Function Points.",
    questions: [
      "اذكر 4 عوامل بتأثر على هيكل الفريق.",
      "حجم البرنامج بيتقاس بإيه؟",
      "ليه الديدلاين الصارم بيأثر على الفريق؟",
    ],
  },
  {
    title: "عوامل سُمية الفريق",
    summary:
      "سمّية الفريق معناها مشاكل بتضرب التركيز والمعنويات والمساءلة والتعاون.",
    points: [
      "جو الشغل العصبي والمندفع بيهدر طاقة الفريق.",
      "الإحباط العالي بيولّد صراعات.",
      "الإجراءات المتقطعة بتسبب لخبطة.",
      "الأدوار الغير واضحة بتسبب غياب المساءلة ورمي اللوم.",
      "تكرار الفشل بيقلل الثقة والمعنويات.",
    ],
    focus:
      "تلميحة امتحان: عدم وضوح الأدوار = غياب المساءلة + رمي اللوم.",
    questions: [
      "إيه اللي بيحصل لما الأدوار تبقى مش واضحة؟",
      "اذكر عاملين من عوامل سمّية الفريق.",
      "تكرار الفشل بيأثر إزاي على المعنويات؟",
    ],
  },
  {
    title: "فرق Agile",
    summary:
      "فرق Agile محتاجة ثقة، ومهارات مناسبة، وتنظيم ذاتي. الفريق بيختار طريقة الشغل داخل حدود البزنس والمؤسسة.",
    points: [
      "الثقة بتساعد على التعاون وتحمل المسئولية المشتركة.",
      "تنوع المهارات لازم يناسب المشكلة.",
      "التنظيم الذاتي يعني الفريق يختار أسلوب التنفيذ.",
    ],
    focus:
      "تلميحة امتحان: فريق Agile = ثقة + مهارات متوازنة + تنظيم ذاتي.",
    questions: [
      "إيه أهم 3 صفات في فرق Agile؟",
      "يعني إيه self-organizing؟",
      "ليه الثقة عنصر مهم؟",
    ],
  },
  {
    title: "تنسيق الفريق والتواصل",
    summary:
      "فرق السوفتوير محتاجة تواصل رسمي وغير رسمي. الرسمي منظم، وغير الرسمي يومي وسريع.",
    points: [
      "التواصل الرسمي يشمل التقارير، المستندات، والاجتماعات المنظمة.",
      "التواصل غير الرسمي يشمل الكلام السريع، الشات، وطلب المساعدة.",
      "النوعين مهمين لتنسيق الشغل وحل المشاكل.",
    ],
    focus:
      "تلميحة امتحان: التقارير والاجتماعات المنظمة = رسمي. الكلام اليومي السريع = غير رسمي.",
    questions: [
      "قارن بين التواصل الرسمي وغير الرسمي.",
      "هات مثال لكل نوع.",
      "ليه الفريق محتاج آليات تواصل؟",
    ],
  },
  {
    title: "مشاكل التنسيق والتواصل",
    summary:
      "المشاريع الكبيرة، وعدم اليقين، والتكامل مع أنظمة تانية بيعملوا مشاكل تنسيق لفرق السوفتوير.",
    points: [
      "الحجم الكبير بيزود التعقيد واللخبطة.",
      "عدم اليقين معناه المتطلبات أو الظروف بتتغير باستمرار.",
      "Interoperability يعني النظام الجديد لازم يشتغل مع أنظمة موجودة بالفعل.",
    ],
    focus:
      "تلميحة امتحان: لما السؤال يجيب أنظمة قديمة/حالّية، غالبًا المقصود interoperability.",
    questions: [
      "ليه المشاريع الكبيرة صعب تنسيقها؟",
      "إيه معنى uncertainty؟",
      "عرّف interoperability.",
    ],
  },
  {
    title: "العملية والتخطيط",
    summary:
      "الفريق بيختار process model بناءً على العميل، الناس، خصائص المنتج، وبيئة المشروع. بعدها بيحط خطة مبدئية.",
    points: [
      "الموديل لازم يناسب العملاء.",
      "لازم يناسب الناس اللي هتنفذ الشغل.",
      "لازم يناسب خصائص المنتج.",
      "لازم يناسب بيئة المشروع.",
      "بعد الخطة المبدئية بيبدأ process decomposition.",
    ],
    focus:
      "تلميحة امتحان: اختيار العملية بيعتمد على العميل، الفريق، المنتج، والبيئة.",
    questions: [
      "إيه العوامل اللي بتأثر على اختيار process model؟",
      "إيه اللي بيبدأ بعد الخطة المبدئية؟",
      "ليه التخطيط مهم؟",
    ],
  },
  {
    title: "تفكيك المشكلة (Problem Decomposition)",
    summary:
      "تفكيك المشكلة يعني تقسيم النطاق لأجزاء أصغر وأسهل للفهم. وبيتسمى كمان partitioning أو problem elaboration.",
    points: [
      "Functional decomposition: تقسيم حسب الوظائف.",
      "Data-based decomposition: تقسيم حسب عناصر البيانات الظاهرة للمستخدم.",
      "Class-based decomposition: تقسيم حسب الكلاسات.",
      "التقسيم يفضل مستمر لحد ما كل الوظائف/الكلاسات تبقى واضحة.",
    ],
    focus:
      "تلميحة امتحان: طرق التفكيك ممكن تكون وظيفية، بيانات، أو كلاسات.",
    questions: [
      "إيه اسم تاني لـ problem decomposition؟",
      "اذكر 3 طرق للتفكيك.",
      "إمتى نوقف التفكيك؟",
    ],
  },
  {
    title: "خصائص المشروع الناجح",
    summary:
      "المشاريع الناجحة غالبًا بيكون فيها متطلبات واضحة، مشاركة مستخدمين، قيادة قوية، تخطيط جيد، فريق كفء، ونتيجة شغالة بجودة.",
    points: [
      "المتطلبات واضحة ومقبولة من أصحاب المصلحة.",
      "المستخدمين مشاركين أثناء التطوير.",
      "مدير المشروع عنده مهارات قيادة.",
      "تقديرات الوقت والميزانية واقعية.",
      "المنتج النهائي محقق النطاق والجودة.",
    ],
    focus:
      "تلميحة امتحان: النجاح محتاج ناس + تخطيط + مشاركة مستخدمين + منتج شغال بجودة.",
    questions: [
      "اذكر 5 خصائص للمشروع الناجح.",
      "ليه مشاركة المستخدمين مهمة؟",
      "إزاي التقديرات الواقعية بتفيد المشروع؟",
    ],
  },
  {
    title: "مبدأ W5HH",
    summary:
      "W5HH هي قائمة أسئلة للتخطيط: Why, What, When, Who, Where, How, How much.",
    points: [
      "Why: ليه بنعمل النظام.",
      "What: إيه الشغل اللي هيتعمل.",
      "When: إمتى والجدول الزمني.",
      "Who: مين المسئول.",
      "Where: فين داخل التنظيم.",
      "How: هننفذ إزاي إداريًا وتقنيًا.",
      "How much: هنحتاج موارد قد إيه.",
    ],
    focus:
      "تلميحة امتحان: How much بتسأل عن الموارد زي الناس، الأدوات، السوفتوير، والداتابيز.",
    questions: [
      "اكتب أسئلة W5HH.",
      "أنهي سؤال بيقدّر الموارد؟",
      "ليه W5HH مفيدة؟",
    ],
  },
];
const reviewItemsMasry = [
  ["الـ Four P's", "الناس، المنتج، العملية، المشروع."],
  ["أهم P", "الناس."],
  ["المديرين الكبار", "بيحددوا مشاكل وأهداف البزنس."],
  ["العملاء", "بيحددوا المتطلبات."],
  ["الممارسين", "بيقدموا المهارات التقنية."],
  ["الأدوار الغير واضحة", "بتسبب غياب المساءلة ورمي اللوم."],
  ["فريق Agile", "ثقة، مهارات متوازنة، وتنظيم ذاتي."],
  ["W5HH", "ليه، إيه، إمتى، مين، فين، إزاي، قد إيه."],
];

const localizedCopy = {
  en: {
    "site.title": "Week 07 Study Hub | Project Management Concepts",
    "brand.title": "Study Hub",
    "brand.subtitle": "Project Management Concepts",
    "brand.aria": "Week 07 Study Hub",
    "nav.aria": "Main navigation",
    "nav.lessons": "Lessons",
    "nav.practice": "Practice",
    "nav.finalQuiz": "Final Quiz",
    "translate.button": "ترجمة",
    "translate.enableAria": "Enable Egyptian Arabic translation",
    "translate.disableAria": "Disable Egyptian Arabic translation",
    "theme.darkModeLabel": "Dark mode",
    "theme.lightModeLabel": "Light mode",
    "theme.switchToDark": "Switch to dark mode",
    "theme.switchToLight": "Switch to light mode",
    "hero.label": "Advanced Software Engineering - Week 07",
    "hero.title": "Project Management Concepts, explained simply.",
    "hero.description":
      "Study the Four P's, stakeholders, leadership, team structure, communication, process planning, decomposition, successful projects, and W5HH with instant practice questions.",
    "hero.start": "Start studying",
    "hero.finalQuiz": "Take final quiz",
    "spectrum.management": "Management",
    "spectrum.spectrum": "Spectrum",
    "orbit.people.title": "People",
    "orbit.people.desc": "Most important",
    "orbit.product.title": "Product",
    "orbit.product.desc": "Software to build",
    "orbit.process.title": "Process",
    "orbit.process.desc": "How work is done",
    "orbit.project.title": "Project",
    "orbit.project.desc": "All delivery work",
    "hero.visualAria": "Management spectrum visual",
    "metrics.lessonParts": "lesson parts",
    "metrics.practiceQuestions": "practice questions",
    "metrics.finalScore": "final score",
    "lessons.aria": "Lesson list",
    "lessons.material": "Material",
    "lessons.questionsOnPart": "Questions on this part",
    "practice.label": "Quick review",
    "practice.title": "Before the final quiz",
    "practice.description":
      "Focus on repeated exam clues: People is the most important P, customers define requirements, senior managers define business issues, and unclear roles cause lack of accountability.",
    "quiz.label": "Final exam practice",
    "quiz.title": "Answer, check, and repeat.",
    "quiz.currentScore": "current score",
    "quiz.checkAnswers": "Check answers",
    "quiz.reset": "Reset",
    "quiz.correctAnswerPrefix": "Correct answer",
    "quiz.scoreTemplate": "{score} / {total}",
    "footer.built": "Built from SWE Week 07 material and the provided questions.",
    "footer.designedBy": "Designed by : Ziad-AlHusseiny",
    "footer.linksAria": "Designer links",
    "footer.linkedinAria": "LinkedIn profile",
    "footer.githubAria": "GitHub profile",
    "footer.linkedin": "LinkedIn",
    "footer.github": "GitHub",
  },
  "ar-eg": {
    "site.title": "مذاكرة سريعة | مفاهيم إدارة المشروعات",
    "brand.title": "مذاكرة سريعة",
    "brand.subtitle": "مفاهيم إدارة المشروعات",
    "brand.aria": "مذاكرة سريعة للأسبوع 07",
    "nav.aria": "التنقل الرئيسي",
    "nav.lessons": "الدروس",
    "nav.practice": "مراجعة",
    "nav.finalQuiz": "الامتحان النهائي",
    "translate.button": "ترجمة",
    "translate.enableAria": "فعّل الترجمة بالمصري",
    "translate.disableAria": "اقفل الترجمة بالمصري",
    "theme.darkModeLabel": "مود غامق",
    "theme.lightModeLabel": "مود فاتح",
    "theme.switchToDark": "حوّل للمود الغامق",
    "theme.switchToLight": "حوّل للمود الفاتح",
    "hero.label": "هندسة برمجيات متقدمة - الأسبوع 07",
    "hero.title": "مفاهيم إدارة المشروعات ببساطة.",
    "hero.description":
      "ذاكر الـ Four P's، والـ stakeholders، والقيادة، وهيكل الفريق، والتواصل، وتخطيط العملية، والتقسيم، وعوامل نجاح المشروع، وW5HH مع أسئلة تدريب فورية.",
    "hero.start": "ابدأ المذاكرة",
    "hero.finalQuiz": "ادخل الامتحان النهائي",
    "spectrum.management": "الإدارة",
    "spectrum.spectrum": "الطيف",
    "orbit.people.title": "الناس",
    "orbit.people.desc": "الأهم",
    "orbit.product.title": "المنتج",
    "orbit.product.desc": "السوفتوير المطلوب",
    "orbit.process.title": "العملية",
    "orbit.process.desc": "الشغل بيتعمل إزاي",
    "orbit.project.title": "المشروع",
    "orbit.project.desc": "كل شغل التسليم",
    "hero.visualAria": "رسم توضيحي لطيف الإدارة",
    "metrics.lessonParts": "أجزاء الدرس",
    "metrics.practiceQuestions": "أسئلة تدريب",
    "metrics.finalScore": "النتيجة النهائية",
    "lessons.aria": "قائمة الدروس",
    "lessons.material": "المحتوى",
    "lessons.questionsOnPart": "أسئلة على الجزء ده",
    "practice.label": "مراجعة سريعة",
    "practice.title": "قبل الامتحان النهائي",
    "practice.description":
      "ركّز على النقاط اللي بتتكرر في الامتحان: People أهم P، والعميل بيحدد المتطلبات، والمديرين الكبار بيحددوا مشاكل البزنس، وغموض الأدوار بيعمل غياب للمساءلة.",
    "quiz.label": "تدريب الامتحان النهائي",
    "quiz.title": "جاوب، راجع، وكرّر.",
    "quiz.currentScore": "الدرجة الحالية",
    "quiz.checkAnswers": "راجع الإجابات",
    "quiz.reset": "إعادة",
    "quiz.correctAnswerPrefix": "الإجابة الصحيحة",
    "quiz.scoreTemplate": "{score} / {total}",
    "footer.built": "الموقع مبني من محتوى SWE أسبوع 07 والأسئلة المتاحة.",
    "footer.designedBy": "تصميم: Ziad-AlHusseiny",
    "footer.linksAria": "روابط المصمم",
    "footer.linkedinAria": "حساب لينكدإن",
    "footer.githubAria": "حساب جيت هاب",
    "footer.linkedin": "لينكدإن",
    "footer.github": "جيت هاب",
  },
};

let activeLanguage = "en";

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
const translateToggle = document.querySelector("#translateToggle");
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

function getLessons() {
  return activeLanguage === "ar-eg" ? lessonsMasry : lessons;
}

function getQuizQuestions() {
  return activeLanguage === "ar-eg" ? quizQuestionsMasry : quizQuestions;
}
function getCopy(key) {
  const table = localizedCopy[activeLanguage] || localizedCopy.en;
  return table[key] ?? localizedCopy.en[key] ?? "";
}

function updateStaticCopy() {
  document.title = getCopy("site.title");
  document.querySelector(".brand")?.setAttribute("aria-label", getCopy("brand.aria"));
  document.querySelector(".top-nav")?.setAttribute("aria-label", getCopy("nav.aria"));
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria");
    if (!key) return;
    element.setAttribute("aria-label", getCopy(key));
  });
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    element.textContent = getCopy(key);
  });
}

function formatScore(score, total) {
  return getCopy("quiz.scoreTemplate")
    .replace("{score}", String(score))
    .replace("{total}", String(total));
}

function getReviewItems() {
  return activeLanguage === "ar-eg" ? reviewItemsMasry : reviewItems;
}

function rerenderContent() {
  renderLessons();
  renderReview();
  renderQuiz();
}

function applyLanguage(language) {
  activeLanguage = language === "ar-eg" ? "ar-eg" : "en";
  const isMasry = activeLanguage === "ar-eg";
  document.documentElement.lang = isMasry ? "ar" : "en";
  document.documentElement.dir = isMasry ? "rtl" : "ltr";
  document.body.dataset.language = activeLanguage;
  try {
    localStorage.setItem("week07-language", activeLanguage);
  } catch {
    // Language still works even if storage is unavailable.
  }
  translateToggle?.setAttribute("aria-pressed", String(isMasry));
  translateToggle?.setAttribute(
    "aria-label",
    isMasry ? getCopy("translate.disableAria") : getCopy("translate.enableAria"),
  );
  updateStaticCopy();
  rerenderContent();
  applyTheme(document.body.dataset.theme || "dark");
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
    isLight ? getCopy("theme.switchToDark") : getCopy("theme.switchToLight"),
  );
  themeToggle.querySelector(".theme-text").textContent = isLight
    ? getCopy("theme.darkModeLabel")
    : getCopy("theme.lightModeLabel");
}

function setupLanguageToggle() {
  const langFromUrl = new URLSearchParams(window.location.search).get("lang");
  let savedLanguage = null;
  try {
    savedLanguage = localStorage.getItem("week07-language");
  } catch {
    savedLanguage = null;
  }
  applyLanguage(langFromUrl || savedLanguage || "en");
  translateToggle?.addEventListener("click", () => {
    const nextLanguage = document.body.dataset.language === "ar-eg" ? "en" : "ar-eg";
    applyLanguage(nextLanguage);
  });
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
  lessonLinks.textContent = "";
  lessonStack.textContent = "";
  getLessons().forEach((lesson, index) => {
    const id = `lesson-${index + 1}`;
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
        <h3>${getCopy("lessons.questionsOnPart")}</h3>
        <ol>${lesson.questions.map((question) => `<li>${question}</li>`).join("")}</ol>
      </div>
    `;
    lessonStack.appendChild(article);
  });
}

function renderReview() {
  reviewGrid.textContent = "";
  getReviewItems().forEach(([title, text], index) => {
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
  const activeQuizQuestions = getQuizQuestions();
  questionList.textContent = "";
  scoreValue.textContent = formatScore(0, activeQuizQuestions.length);
  activeQuizQuestions.forEach((item, index) => {
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
      <div class="answer-note">${getCopy("quiz.correctAnswerPrefix")}: ${item.options[item.answer]}. ${item.note}</div>
    `;
    questionList.appendChild(card);
  });
}

function checkAnswers() {
  const activeQuizQuestions = getQuizQuestions();
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
  scoreValue.textContent = formatScore(score, activeQuizQuestions.length);
}

function resetQuiz() {
  const activeQuizQuestions = getQuizQuestions();
  document.querySelectorAll(".question-card").forEach((card) => {
    card.classList.remove("correct", "incorrect");
  });
  document.querySelectorAll("input[type='radio']").forEach((input) => {
    input.checked = false;
  });
  scoreValue.textContent = formatScore(0, activeQuizQuestions.length);
}

setupThemeToggle();
setupLanguageToggle();

checkAnswersButton.addEventListener("click", checkAnswers);
checkAnswersBottomButton.addEventListener("click", checkAnswers);
resetQuizButton.addEventListener("click", resetQuiz);
resetQuizBottomButton.addEventListener("click", resetQuiz);
