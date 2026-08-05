export interface CourseData {
  title: string;
  slug: string;
  ageRange: string;
  lessons: string;
  duration: string;
  description: string;
  curriculumPdf: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  faqs: { q: string; a: string }[];
  content: string;
}

export const coursesData: CourseData[] = [
  {
    title: "AI for Kids (Junior Coders)",
    slug: "ai-for-kids-junior-coders",
    ageRange: "7-10",
    lessons: "72+",
    duration: "3-9 months",
    description: "Fun and visual AI concepts taught through games, images and stories.",
    curriculumPdf: "/curriculum/Junior Coders - AI Explorer.pdf",
    image: "/courses/course-10.png",
    metaTitle: "AI Classes for Kids Age 7-10 | Coding Skills Academy",
    metaDescription: "Introduce kids to Artificial Intelligence and machine learning basics through visual tools. ISO-certified certificate. Book a free trial today.",
    faqs: [
      { q: "Do kids write complex code?", a: "No, AI for this age group focuses on visual model training, data classifications, and interactive games." },
      { q: "What age is this course for?", a: "This course is designed for children aged 7-10 years." }
    ],
    content: `Welcome to **AI for Kids (Junior Coders)**! This course is designed to guide students aged 7-10 on their journey to master technology and software development. Over a duration of 3-9 months, students will complete 72+ immersive lessons packed with hands-on projects, interactive quizzes, and logical problem solving.

## What is this course about?
Fun and visual AI concepts taught through games, images and stories. With our expert-guided curriculum, students learn real-world applications of logic, problem-solving, and creative styling. By compiling multiple projects throughout the class, kids transition from being tech consumers to tech creators.

## Key Learning Outcomes
- Master structural fundamentals of programming, including loops, functions, variables, and conditions.
- Work on actual, deployable projects to showcase creativity.
- Gain problem-solving, computational thinking, and debugging skills.
- Receive an ISO-certified Academy certificate upon successful completion.

## Full Course Structure
Our structured curriculum is designed to grow with your child's confidence. For a full breakdown of specific milestones, topics, and weekly exercises, download our comprehensive PDF curriculum using the button on this page.`
  },
  {
    title: "AI Mastery (Future Innovator)",
    slug: "ai-mastery-future-innovator",
    ageRange: "15-17",
    lessons: "72+",
    duration: "3-9 months",
    description: "Explore real AI/ML concepts like models, data and logic with Python.",
    curriculumPdf: "/curriculum/Future innovator - AI Explorer.pdf",
    image: "/courses/course-12.png",
    metaTitle: "AI & Machine Learning for Teens Age 15-17 | Coding Skills Academy",
    metaDescription: "Master regression, classification models, neural networks, and Python ML libraries. ISO-certified certificate. Book a free trial today.",
    faqs: [
      { q: "Is this a Python course?", a: "Yes, Python is the primary language used to build and evaluate AI/ML models." },
      { q: "What age is this course for?", a: "This course is designed for teenagers aged 15-17 years." }
    ],
    content: `Welcome to **AI Mastery (Future Innovator)**! This course is designed to guide students aged 15-17 on their journey to master technology and software development. Over a duration of 3-9 months, students will complete 72+ immersive lessons packed with hands-on projects, interactive quizzes, and logical problem solving.

## What is this course about?
Explore real AI/ML concepts like models, data and logic with Python. With our expert-guided curriculum, students learn real-world applications of logic, problem-solving, and creative styling. By compiling multiple projects throughout the class, kids transition from being tech consumers to tech creators.

## Key Learning Outcomes
- Master structural fundamentals of programming, including loops, functions, variables, and conditions.
- Work on actual, deployable projects to showcase creativity.
- Gain problem-solving, computational thinking, and debugging skills.
- Receive an ISO-certified Academy certificate upon successful completion.

## Full Course Structure
Our structured curriculum is designed to grow with your child's confidence. For a full breakdown of specific milestones, topics, and weekly exercises, download our comprehensive PDF curriculum using the button on this page.`
  },
  {
    title: "AI Programming (Rising Techies)",
    slug: "ai-programming-rising-techies",
    ageRange: "11-14",
    lessons: "72+",
    duration: "3-9 months",
    description: "Train AI using Teachable Machine, images, voice and real AI tools.",
    curriculumPdf: "/curriculum/Rising Techies - AI Explorer.pdf",
    image: "/courses/course-11.png",
    metaTitle: "Artificial Intelligence Classes for Kids Age 11-14 | Coding Skills Academy",
    metaDescription: "Train image, audio, and pose models with machine learning tools. ISO-certified certificate. Book a free demo class today.",
    faqs: [
      { q: "What tools do they use?", a: "Teachable Machine, Scratch AI blocks, and introductory Python-based classification scripts." },
      { q: "What age is this course for?", a: "This course is designed for children aged 11-14 years." }
    ],
    content: `Welcome to **AI Programming (Rising Techies)**! This course is designed to guide students aged 11-14 on their journey to master technology and software development. Over a duration of 3-9 months, students will complete 72+ immersive lessons packed with hands-on projects, interactive quizzes, and logical problem solving.

## What is this course about?
Train AI using Teachable Machine, images, voice and real AI tools. With our expert-guided curriculum, students learn real-world applications of logic, problem-solving, and creative styling. By compiling multiple projects throughout the class, kids transition from being tech consumers to tech creators.

## Key Learning Outcomes
- Master structural fundamentals of programming, including loops, functions, variables, and conditions.
- Work on actual, deployable projects to showcase creativity.
- Gain problem-solving, computational thinking, and debugging skills.
- Receive an ISO-certified Academy certificate upon successful completion.

## Full Course Structure
Our structured curriculum is designed to grow with your child's confidence. For a full breakdown of specific milestones, topics, and weekly exercises, download our comprehensive PDF curriculum using the button on this page.`
  },
  {
    title: "C Programming (Future Innovator)",
    slug: "c-programming-future-innovator",
    ageRange: "15-17",
    lessons: "72+",
    duration: "3-9 months",
    description: "Dive deep into logic-building, memory management and structured programming.",
    curriculumPdf: "/curriculum/C Language  Future Innovators.pdf",
    image: "/courses/course-6.png",
    metaTitle: "C Programming Classes for Teens Age 15-17 | Coding Skills Academy",
    metaDescription: "Master coding logic, arrays, pointers, and memory management in C. ISO-certified certificate. Book a free demo class today.",
    faqs: [
      { q: "Why learn C Programming?", a: "C is the foundation of computer science. It teaches how software interacts with hardware and builds core problem-solving logic." },
      { q: "What age is this course for?", a: "This course is designed for teenagers aged 15-17 years." }
    ],
    content: `Welcome to **C Programming (Future Innovator)**! This course is designed to guide students aged 15-17 on their journey to master technology and software development. Over a duration of 3-9 months, students will complete 72+ immersive lessons packed with hands-on projects, interactive quizzes, and logical problem solving.

## What is this course about?
Dive deep into logic-building, memory management and structured programming. With our expert-guided curriculum, students learn real-world applications of logic, problem-solving, and creative styling. By compiling multiple projects throughout the class, kids transition from being tech consumers to tech creators.

## Key Learning Outcomes
- Master structural fundamentals of programming, including loops, functions, variables, and conditions.
- Work on actual, deployable projects to showcase creativity.
- Gain problem-solving, computational thinking, and debugging skills.
- Receive an ISO-certified Academy certificate upon successful completion.

## Full Course Structure
Our structured curriculum is designed to grow with your child's confidence. For a full breakdown of specific milestones, topics, and weekly exercises, download our comprehensive PDF curriculum using the button on this page.`
  },
  {
    title: "Minecraft Coding (Rising Techies)",
    slug: "minecraft-rising-techies",
    ageRange: "11-14",
    lessons: "72+",
    duration: "3-9 months",
    description: "Code in the Minecraft world using fun, interactive block-based and Python tools.",
    curriculumPdf: "/curriculum/Minecraft Rising Techies.pdf",
    image: "/courses/course-2.png",
    metaTitle: "Minecraft Coding for Kids Age 11-14 | Coding Skills Academy",
    metaDescription: "Bring Minecraft creations to life through block-based and Python scripting. ISO-certified certificate. Book a free demo class today.",
    faqs: [
      { q: "What is Minecraft Coding?", a: "Minecraft Coding teaches kids to write scripts and automate building, block placement, and commands in the Minecraft Education Edition." },
      { q: "What age is this course for?", a: "This course is designed for children aged 11-14 years." }
    ],
    content: `Welcome to **Minecraft Coding (Rising Techies)**! This course is designed to guide students aged 11-14 on their journey to master technology and software development. Over a duration of 3-9 months, students will complete 72+ immersive lessons packed with hands-on projects, interactive quizzes, and logical problem solving.

## What is this course about?
Code in the Minecraft world using fun, interactive block-based and Python tools. With our expert-guided curriculum, students learn real-world applications of logic, problem-solving, and creative styling. By compiling multiple projects throughout the class, kids transition from being tech consumers to tech creators.

## Key Learning Outcomes
- Master structural fundamentals of programming, including loops, functions, variables, and conditions.
- Work on actual, deployable projects to showcase creativity.
- Gain problem-solving, computational thinking, and debugging skills.
- Receive an ISO-certified Academy certificate upon successful completion.

## Full Course Structure
Our structured curriculum is designed to grow with your child's confidence. For a full breakdown of specific milestones, topics, and weekly exercises, download our comprehensive PDF curriculum using the button on this page.`
  },
  {
    title: "Python Programming (Future Innovator)",
    slug: "python-programming-future-innovator",
    ageRange: "15-17",
    lessons: "72+",
    duration: "3-9 months",
    description: "Advance to professional Python programming for software and automation.",
    curriculumPdf: "/curriculum/Python Future Innovator.pdf",
    image: "/courses/course-9.png",
    metaTitle: "Advanced Python for Teens Age 15-17 | Coding Skills Academy",
    metaDescription: "Learn object-oriented programming, data structures, and automation scripts. ISO-certified certificate. Book a free demo class today.",
    faqs: [
      { q: "What topics are covered?", a: "OOP, file operations, algorithms, and simple data parsing packages." },
      { q: "What age is this course for?", a: "This course is designed for teenagers aged 15-17 years." }
    ],
    content: `Welcome to **Python Programming (Future Innovator)**! This course is designed to guide students aged 15-17 on their journey to master technology and software development. Over a duration of 3-9 months, students will complete 72+ immersive lessons packed with hands-on projects, interactive quizzes, and logical problem solving.

## What is this course about?
Advance to professional Python programming for software and automation. With our expert-guided curriculum, students learn real-world applications of logic, problem-solving, and creative styling. By compiling multiple projects throughout the class, kids transition from being tech consumers to tech creators.

## Key Learning Outcomes
- Master structural fundamentals of programming, including loops, functions, variables, and conditions.
- Work on actual, deployable projects to showcase creativity.
- Gain problem-solving, computational thinking, and debugging skills.
- Receive an ISO-certified Academy certificate upon successful completion.

## Full Course Structure
Our structured curriculum is designed to grow with your child's confidence. For a full breakdown of specific milestones, topics, and weekly exercises, download our comprehensive PDF curriculum using the button on this page.`
  },
  {
    title: "Python Programming (Junior Coders)",
    slug: "python-programming-junior-coders",
    ageRange: "7-10",
    lessons: "72+",
    duration: "3-9 months",
    description: "Start Python with friendly syntax, visual projects and logic puzzles.",
    curriculumPdf: "/curriculum/Python Junior Coders.pdf",
    image: "/courses/course-7.png",
    metaTitle: "Python Coding Classes for Kids Age 7-10 | Coding Skills Academy",
    metaDescription: "Learn Python basics through turtle graphics, stories, and puzzles. ISO-certified certificate. Book a free demo class today.",
    faqs: [
      { q: "Is Python good for young kids?", a: "Yes, Python is text-based but uses simple english-like keywords, making it an ideal first text language." },
      { q: "What age is this course for?", a: "This course is designed for children aged 7-10 years." }
    ],
    content: `Welcome to **Python Programming (Junior Coders)**! This course is designed to guide students aged 7-10 on their journey to master technology and software development. Over a duration of 3-9 months, students will complete 72+ immersive lessons packed with hands-on projects, interactive quizzes, and logical problem solving.

## What is this course about?
Start Python with friendly syntax, visual projects and logic puzzles. With our expert-guided curriculum, students learn real-world applications of logic, problem-solving, and creative styling. By compiling multiple projects throughout the class, kids transition from being tech consumers to tech creators.

## Key Learning Outcomes
- Master structural fundamentals of programming, including loops, functions, variables, and conditions.
- Work on actual, deployable projects to showcase creativity.
- Gain problem-solving, computational thinking, and debugging skills.
- Receive an ISO-certified Academy certificate upon successful completion.

## Full Course Structure
Our structured curriculum is designed to grow with your child's confidence. For a full breakdown of specific milestones, topics, and weekly exercises, download our comprehensive PDF curriculum using the button on this page.`
  },
  {
    title: "Python Programming (Rising Techies)",
    slug: "python-programming-rising-techies",
    ageRange: "11-14",
    lessons: "72+",
    duration: "3-9 months",
    description: "Build logic, functions, loops, and games in Python step by step.",
    curriculumPdf: "/curriculum/Python Rising Techies.pdf",
    image: "/courses/course-8.png",
    metaTitle: "Python Coding Classes for Kids Age 11-14 | Coding Skills Academy",
    metaDescription: "Master Python variables, control structures, and basic game loops. ISO-certified certificate. Book a free demo class today.",
    faqs: [
      { q: "What type of projects will they build?", a: "They will build command-line tools, mathematical games, and 2D graphics programs using Python libraries." },
      { q: "What age is this course for?", a: "This course is designed for children aged 11-14 years." }
    ],
    content: `Welcome to **Python Programming (Rising Techies)**! This course is designed to guide students aged 11-14 on their journey to master technology and software development. Over a duration of 3-9 months, students will complete 72+ immersive lessons packed with hands-on projects, interactive quizzes, and logical problem solving.

## What is this course about?
Build logic, functions, loops, and games in Python step by step. With our expert-guided curriculum, students learn real-world applications of logic, problem-solving, and creative styling. By compiling multiple projects throughout the class, kids transition from being tech consumers to tech creators.

## Key Learning Outcomes
- Master structural fundamentals of programming, including loops, functions, variables, and conditions.
- Work on actual, deployable projects to showcase creativity.
- Gain problem-solving, computational thinking, and debugging skills.
- Receive an ISO-certified Academy certificate upon successful completion.

## Full Course Structure
Our structured curriculum is designed to grow with your child's confidence. For a full breakdown of specific milestones, topics, and weekly exercises, download our comprehensive PDF curriculum using the button on this page.`
  },
  {
    title: "Scratch Programming (Rising Techies)",
    slug: "scratch-rising-techies",
    ageRange: "11-14",
    lessons: "48+",
    duration: "2-6 months",
    description: "Get started with coding through animations, games & storytelling using Scratch.",
    curriculumPdf: "/curriculum/SCRATCH (Rising Techies).pdf",
    image: "/courses/course-1.png",
    metaTitle: "Scratch Coding Classes for Kids Age 11-14 | Coding Skills Academy",
    metaDescription: "Learn logic, animation, game design, and coding with Scratch. Dynamic interactive sessions, ISO-certified certificate. Book a free demo class today.",
    faqs: [
      { q: "What is Scratch Programming?", a: "Scratch is a visual block-based programming language developed by MIT to teach coding fundamentals through games and animations." },
      { q: "What age is this course for?", a: "This course is designed for children aged 11-14 years." },
      { q: "Are there any prerequisites?", a: "No prior coding experience is required. A computer and an internet connection are all you need!" }
    ],
    content: `Welcome to **Scratch Programming (Rising Techies)**! This course is designed to guide students aged 11-14 on their journey to master technology and software development. Over a duration of 2-6 months, students will complete 48+ immersive lessons packed with hands-on projects, interactive quizzes, and logical problem solving.

## What is this course about?
Get started with coding through animations, games & storytelling using Scratch. With our expert-guided curriculum, students learn real-world applications of logic, problem-solving, and creative styling. By compiling multiple projects throughout the class, kids transition from being tech consumers to tech creators.

## Key Learning Outcomes
- Master structural fundamentals of programming, including loops, functions, variables, and conditions.
- Work on actual, deployable projects to showcase creativity.
- Gain problem-solving, computational thinking, and debugging skills.
- Receive an ISO-certified Academy certificate upon successful completion.

## Full Course Structure
Our structured curriculum is designed to grow with your child's confidence. For a full breakdown of specific milestones, topics, and weekly exercises, download our comprehensive PDF curriculum using the button on this page.`
  },
  {
    title: "Web Wizardry (Future Innovator)",
    slug: "web-wizardry-future-innovator",
    ageRange: "15-17",
    lessons: "72+",
    duration: "3-9 months",
    description: "Master frontend web development with dynamic, responsive & real-world projects.",
    curriculumPdf: "/curriculum/HTML +JS +CSS Future innovator.pdf",
    image: "/courses/course-5.png",
    metaTitle: "Frontend Web Development for Teens Age 15-17 | Coding Skills Academy",
    metaDescription: "Master HTML, CSS, JavaScript, and responsive layout designs. ISO-certified certificate. Book a free demo class today.",
    faqs: [
      { q: "What level of coding is this?", a: "This is an intermediate-to-advanced frontend course suitable for high school students." },
      { q: "What age is this course for?", a: "This course is designed for teenagers aged 15-17 years." }
    ],
    content: `Welcome to **Web Wizardry (Future Innovator)**! This course is designed to guide students aged 15-17 on their journey to master technology and software development. Over a duration of 3-9 months, students will complete 72+ immersive lessons packed with hands-on projects, interactive quizzes, and logical problem solving.

## What is this course about?
Master frontend web development with dynamic, responsive & real-world projects. With our expert-guided curriculum, students learn real-world applications of logic, problem-solving, and creative styling. By compiling multiple projects throughout the class, kids transition from being tech consumers to tech creators.

## Key Learning Outcomes
- Master structural fundamentals of programming, including loops, functions, variables, and conditions.
- Work on actual, deployable projects to showcase creativity.
- Gain problem-solving, computational thinking, and debugging skills.
- Receive an ISO-certified Academy certificate upon successful completion.

## Full Course Structure
Our structured curriculum is designed to grow with your child's confidence. For a full breakdown of specific milestones, topics, and weekly exercises, download our comprehensive PDF curriculum using the button on this page.`
  },
  {
    title: "Web Wizardry (Junior Coders)",
    slug: "web-wizardry-junior-coders",
    ageRange: "7-10",
    lessons: "72+",
    duration: "3-9 months",
    description: "Kids create colorful websites using HTML, CSS and fun tools in a guided way.",
    curriculumPdf: "/curriculum/HTML +JS +CSS Junior Coders.pdf",
    image: "/courses/course-3.png",
    metaTitle: "Web Design Classes for Kids Age 7-10 | Coding Skills Academy",
    metaDescription: "Introduce kids to web design with HTML, CSS, and basic JavaScript. ISO-certified certificate. Book a free demo class today.",
    faqs: [
      { q: "What will my child build?", a: "They will build personal portfolios, hobby pages, and interactive quizzes using HTML and CSS." },
      { q: "What age is this course for?", a: "This course is designed for children aged 7-10 years." }
    ],
    content: `Welcome to **Web Wizardry (Junior Coders)**! This course is designed to guide students aged 7-10 on their journey to master technology and software development. Over a duration of 3-9 months, students will complete 72+ immersive lessons packed with hands-on projects, interactive quizzes, and logical problem solving.

## What is this course about?
Kids create colorful websites using HTML, CSS and fun tools in a guided way. With our expert-guided curriculum, students learn real-world applications of logic, problem-solving, and creative styling. By compiling multiple projects throughout the class, kids transition from being tech consumers to tech creators.

## Key Learning Outcomes
- Master structural fundamentals of programming, including loops, functions, variables, and conditions.
- Work on actual, deployable projects to showcase creativity.
- Gain problem-solving, computational thinking, and debugging skills.
- Receive an ISO-certified Academy certificate upon successful completion.

## Full Course Structure
Our structured curriculum is designed to grow with your child's confidence. For a full breakdown of specific milestones, topics, and weekly exercises, download our comprehensive PDF curriculum using the button on this page.`
  },
  {
    title: "Web Wizardry (Rising Techies)",
    slug: "web-wizardry-rising-techies",
    ageRange: "11-14",
    lessons: "72+",
    duration: "3-9 months",
    description: "Start building stunning websites using HTML, CSS & JavaScript from scratch.",
    curriculumPdf: "/curriculum/HTML +JS +CSS RISING TECHIES.pdf",
    image: "/courses/course-4.png",
    metaTitle: "Web Development Classes for Kids Age 11-14 | Coding Skills Academy",
    metaDescription: "Learn to build websites from scratch using HTML, CSS, and JavaScript. ISO-certified certificate. Book a free demo class today.",
    faqs: [
      { q: "Is JavaScript included?", a: "Yes, this course includes JavaScript to add interactive logic to websites." },
      { q: "What age is this course for?", a: "This course is designed for children aged 11-14 years." }
    ],
    content: `Welcome to **Web Wizardry (Rising Techies)**! This course is designed to guide students aged 11-14 on their journey to master technology and software development. Over a duration of 3-9 months, students will complete 72+ immersive lessons packed with hands-on projects, interactive quizzes, and logical problem solving.

## What is this course about?
Start building stunning websites using HTML, CSS & JavaScript from scratch. With our expert-guided curriculum, students learn real-world applications of logic, problem-solving, and creative styling. By compiling multiple projects throughout the class, kids transition from being tech consumers to tech creators.

## Key Learning Outcomes
- Master structural fundamentals of programming, including loops, functions, variables, and conditions.
- Work on actual, deployable projects to showcase creativity.
- Gain problem-solving, computational thinking, and debugging skills.
- Receive an ISO-certified Academy certificate upon successful completion.

## Full Course Structure
Our structured curriculum is designed to grow with your child's confidence. For a full breakdown of specific milestones, topics, and weekly exercises, download our comprehensive PDF curriculum using the button on this page.`
  }
];
