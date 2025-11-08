export interface Lesson {
  id: string
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  content: {
    concepts: {
      title: string
      explanation: string
      example: string
    }[]
    examples: { title: string; solution: string }[]
    exercises: { question: string; answer: string }[]
    onlineResources: {
      title: string
      url: string
      type: 'video' | 'article' | 'practice' | 'simulation'
      description: string
    }[]
  }
}

export interface Subject {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  description: string
  lessons: Lesson[]
}

export interface Curriculum {
  id: string
  name: string
  description: string
  ageRange: string
  subjects: Subject[]
}

// Helper function to generate lesson content
const generateLessonContent = (subject: string, lessonNumber: number, topic: string): any => {
  return {
    concepts: [
      {
        title: `Fundamental Concepts of ${topic}`,
        explanation: `Understanding the core principles and foundations of ${topic} in ${subject}. This lesson covers essential theoretical knowledge and practical applications.`,
        example: `Example demonstrating key concepts in ${topic} with clear step-by-step explanation and real-world relevance.`
      },
      {
        title: 'Advanced Applications',
        explanation: `Exploring complex applications and problem-solving techniques in ${topic}. Building upon fundamental knowledge to develop deeper understanding.`,
        example: `Advanced example showing sophisticated applications and analytical approaches in ${topic}.`
      }
    ],
    examples: [
      {
        title: `Practical Example 1: ${topic} in Action`,
        solution: `Detailed solution demonstrating practical application of ${topic} concepts with step-by-step reasoning.`
      },
      {
        title: `Problem-Solving Scenario`,
        solution: `Comprehensive problem-solving approach using ${topic} methodologies and best practices.`
      }
    ],
    exercises: [
      {
        question: `What are the key principles of ${topic} in ${subject}?`,
        answer: `The key principles include fundamental concepts, theoretical frameworks, and practical applications.`
      },
      {
        question: `How would you apply ${topic} concepts to solve a real-world problem?`,
        answer: `Apply the theoretical knowledge to analyze the problem, identify relevant concepts, and develop a systematic solution.`
      }
    ],
    onlineResources: [
      {
        title: `Interactive ${topic} Tutorial`,
        url: 'https://www.khanacademy.org',
        type: 'video',
        description: `Comprehensive video tutorial covering ${topic} fundamentals and applications.`
      },
      {
        title: `${topic} Practice Exercises`,
        url: 'https://www.khanacademy.org',
        type: 'practice',
        description: `Interactive practice problems to master ${topic} concepts.`
      }
    ]
  }
}

// Helper function to generate 10 lessons for a subject
const generateSubjectLessons = (subjectId: string, subjectName: string, topics: string[]): Lesson[] => {
  return topics.map((topic, index) => ({
    id: `${subjectId}-lesson-${index + 1}`,
    title: topic,
    description: `Comprehensive exploration of ${topic} in ${subjectName}`,
    difficulty: index < 3 ? 'Beginner' : index < 7 ? 'Intermediate' : 'Advanced',
    duration: '90 minutes',
    content: generateLessonContent(subjectName, index + 1, topic)
  }))
}

// O Level Subjects and Topics
const oLevelSubjects = [
  {
    id: 'o-accounting',
    name: 'Accounting',
    color: 'bg-emerald-600',
    description: 'Financial accounting principles and practices',
    topics: [
      'Introduction to Accounting Principles',
      'Double-Entry Bookkeeping',
      'Financial Statements Preparation',
      'Trial Balance and Adjustments',
      'Cash Flow Statements',
      'Accounting for Inventory',
      'Fixed Assets and Depreciation',
      'Partnership Accounts',
      'Company Accounts Introduction',
      'Accounting Ethics and Regulations'
    ]
  },
  {
    id: 'o-biology',
    name: 'Biology',
    color: 'bg-green-600',
    description: 'Study of living organisms and life processes',
    topics: [
      'Cell Structure and Organization',
      'Biological Molecules',
      'Enzymes and Metabolism',
      'Plant Nutrition and Transport',
      'Human Nutrition and Digestion',
      'Respiration and Gas Exchange',
      'Transport in Humans',
      'Coordination and Response',
      'Reproduction in Humans',
      'Genetics and Evolution'
    ]
  },
  {
    id: 'o-mathematics',
    name: 'Mathematics',
    color: 'bg-blue-600',
    description: 'Mathematical concepts and problem-solving',
    topics: [
      'Number Systems and Operations',
      'Algebraic Expressions and Equations',
      'Functions and Graphs',
      'Geometry and Trigonometry',
      'Vectors and Transformations',
      'Statistics and Probability',
      'Sequences and Series',
      'Differentiation Basics',
      'Integration Applications',
      'Mathematical Proof'
    ]
  },
  {
    id: 'o-chemistry',
    name: 'Chemistry',
    color: 'bg-purple-600',
    description: 'Chemical principles and reactions',
    topics: [
      'Atomic Structure and Bonding',
      'Chemical Formulae and Equations',
      'The Periodic Table',
      'Chemical Bonding and Structure',
      'Chemical Calculations',
      'Acids, Bases and Salts',
      'Redox Reactions',
      'Metals and Reactivity Series',
      'Organic Chemistry Basics',
      'Chemical Analysis'
    ]
  },
  {
    id: 'o-computer-science',
    name: 'Computer Science',
    color: 'bg-indigo-600',
    description: 'Computational thinking and programming',
    topics: [
      'Computer Systems and Architecture',
      'Problem Solving and Algorithms',
      'Programming Fundamentals',
      'Data Structures',
      'Database Concepts',
      'Computer Networks',
      'Web Development Basics',
      'Cybersecurity Fundamentals',
      'Artificial Intelligence Introduction',
      'Ethical and Legal Issues'
    ]
  },
  {
    id: 'o-economics',
    name: 'Economics',
    color: 'bg-amber-600',
    description: 'Economic principles and systems',
    topics: [
      'Basic Economic Concepts',
      'Supply and Demand',
      'Market Equilibrium',
      'Elasticity and Applications',
      'Production and Costs',
      'Market Structures',
      'National Income Accounting',
      'Money and Banking',
      'International Trade',
      'Economic Development'
    ]
  },
  {
    id: 'o-physics',
    name: 'Physics',
    color: 'bg-cyan-600',
    description: 'Physical laws and natural phenomena',
    topics: [
      'Physical Quantities and Measurement',
      'Kinematics and Motion',
      'Dynamics and Forces',
      'Work, Energy and Power',
      'Thermal Physics',
      'Waves and Optics',
      'Electricity and Magnetism',
      'Electromagnetic Induction',
      'Modern Physics Basics',
      'Practical Physics Skills'
    ]
  },
  {
    id: 'o-science',
    name: 'Science',
    color: 'bg-teal-600',
    description: 'Integrated scientific concepts',
    topics: [
      'Scientific Method and Investigation',
      'Matter and Materials',
      'Energy and Its Transformations',
      'Forces and Motion',
      'Living Processes',
      'Earth and Environment',
      'Chemical Reactions',
      'Electricity and Magnetism',
      'Waves and Radiation',
      'Science in Society'
    ]
  },
  {
    id: 'o-statistics',
    name: 'Statistics',
    color: 'bg-rose-600',
    description: 'Data analysis and probability',
    topics: [
      'Data Collection and Presentation',
      'Measures of Central Tendency',
      'Measures of Dispersion',
      'Probability Theory',
      'Probability Distributions',
      'Correlation and Regression',
      'Time Series Analysis',
      'Index Numbers',
      'Sampling Methods',
      'Statistical Inference'
    ]
  }
]

// A Level Subjects and Topics
const aLevelSubjects = [
  {
    id: 'a-accounting',
    name: 'Accounting',
    color: 'bg-emerald-700',
    description: 'Advanced financial and management accounting',
    topics: [
      'Advanced Financial Reporting',
      'International Accounting Standards',
      'Management Accounting Techniques',
      'Cost-Volume-Profit Analysis',
      'Budgeting and Budgetary Control',
      'Performance Measurement',
      'Investment Appraisal',
      'Business Valuation',
      'Auditing Principles',
      'Strategic Financial Management'
    ]
  },
  {
    id: 'a-information-technology',
    name: 'Information Technology',
    color: 'bg-blue-700',
    description: 'Advanced IT systems and applications',
    topics: [
      'Information Systems Management',
      'Database Design and Implementation',
      'Network Architecture and Security',
      'Software Engineering Principles',
      'Web Application Development',
      'Cloud Computing Technologies',
      'Data Analytics and Visualization',
      'IT Project Management',
      'Digital Transformation',
      'Emerging Technologies'
    ]
  },
  {
    id: 'a-biology',
    name: 'Biology',
    color: 'bg-green-700',
    description: 'Advanced biological sciences',
    topics: [
      'Cellular Biology and Biochemistry',
      'Genetics and Molecular Biology',
      'Evolution and Natural Selection',
      'Ecology and Conservation',
      'Human Physiology',
      'Plant Biology',
      'Microbiology and Biotechnology',
      'Neurobiology and Behavior',
      'Immunology',
      'Biological Research Methods'
    ]
  },
  {
    id: 'a-mathematics',
    name: 'Mathematics',
    color: 'bg-indigo-700',
    description: 'Advanced mathematical concepts',
    topics: [
      'Pure Mathematics: Algebra',
      'Pure Mathematics: Calculus',
      'Pure Mathematics: Trigonometry',
      'Mechanics: Forces and Motion',
      'Mechanics: Work and Energy',
      'Statistics: Probability',
      'Statistics: Distributions',
      'Statistics: Hypothesis Testing',
      'Mathematical Proof and Logic',
      'Mathematical Modeling'
    ]
  },
  {
    id: 'a-chemistry',
    name: 'Chemistry',
    color: 'bg-purple-700',
    description: 'Advanced chemical principles',
    topics: [
      'Physical Chemistry: Thermodynamics',
      'Physical Chemistry: Kinetics',
      'Physical Chemistry: Equilibrium',
      'Inorganic Chemistry: Periodicity',
      'Inorganic Chemistry: Transition Elements',
      'Organic Chemistry: Mechanisms',
      'Organic Chemistry: Synthesis',
      'Analytical Chemistry Techniques',
      'Environmental Chemistry',
      'Industrial Chemistry'
    ]
  },
  {
    id: 'a-computer-science',
    name: 'Computer Science',
    color: 'bg-cyan-700',
    description: 'Advanced computing concepts',
    topics: [
      'Algorithms and Data Structures',
      'Object-Oriented Programming',
      'Database Systems',
      'Computer Networks',
      'Operating Systems',
      'Software Engineering',
      'Artificial Intelligence',
      'Machine Learning',
      'Cybersecurity',
      'Distributed Systems'
    ]
  },
  {
    id: 'a-economics',
    name: 'Economics',
    color: 'bg-amber-700',
    description: 'Advanced economic theory and application',
    topics: [
      'Microeconomic Theory',
      'Macroeconomic Analysis',
      'International Economics',
      'Development Economics',
      'Monetary Economics',
      'Public Finance',
      'Econometrics',
      'Game Theory',
      'Behavioral Economics',
      'Economic Policy Analysis'
    ]
  },
  {
    id: 'a-physics',
    name: 'Physics',
    color: 'bg-teal-700',
    description: 'Advanced physical sciences',
    topics: [
      'Mechanics and Relativity',
      'Thermodynamics and Statistical Physics',
      'Waves and Optics',
      'Electromagnetism',
      'Quantum Mechanics',
      'Nuclear Physics',
      'Particle Physics',
      'Astrophysics',
      'Condensed Matter Physics',
      'Applied Physics'
    ]
  },
  {
    id: 'a-science',
    name: 'Science',
    color: 'bg-rose-700',
    description: 'Integrated advanced sciences',
    topics: [
      'Scientific Research Methods',
      'Biophysical Chemistry',
      'Environmental Science',
      'Materials Science',
      'Biotechnology',
      'Nanotechnology',
      'Renewable Energy Systems',
      'Climate Science',
      'Bioinformatics',
      'Science Communication'
    ]
  },
  {
    id: 'a-statistics',
    name: 'Statistics',
    color: 'bg-orange-700',
    description: 'Advanced statistical analysis',
    topics: [
      'Mathematical Statistics',
      'Statistical Inference',
      'Regression Analysis',
      'Multivariate Analysis',
      'Time Series Analysis',
      'Bayesian Statistics',
      'Nonparametric Statistics',
      'Experimental Design',
      'Statistical Computing',
      'Data Science Applications'
    ]
  }
]

// US High School Subjects and Topics
const usHighSchoolSubjects = [
  {
    id: 'us-mathematics',
    name: 'Mathematics',
    color: 'bg-blue-800',
    description: 'Comprehensive high school mathematics curriculum',
    topics: [
      'Algebra I: Linear Equations and Functions',
      'Geometry: Shapes, Angles, and Proofs',
      'Algebra II: Quadratics and Polynomials',
      'Trigonometry: Triangles and Circular Functions',
      'Pre-Calculus: Functions and Limits',
      'Statistics: Data Analysis and Probability',
      'Calculus Basics: Derivatives and Integrals',
      'Mathematical Modeling and Applications',
      'Financial Mathematics and Personal Finance',
      'Advanced Problem Solving Techniques'
    ]
  },
  {
    id: 'us-biology',
    name: 'Biology',
    color: 'bg-green-800',
    description: 'Life sciences and biological processes',
    topics: [
      'Cell Structure and Function',
      'Molecular Biology: DNA and Genetics',
      'Evolution and Natural Selection',
      'Ecology and Environmental Science',
      'Human Anatomy and Physiology',
      'Plant Biology and Photosynthesis',
      'Microbiology and Pathogens',
      'Biochemistry and Metabolism',
      'Biotechnology and Genetic Engineering',
      'Biology Research and Laboratory Skills'
    ]
  },
  {
    id: 'us-physics',
    name: 'Physics',
    color: 'bg-purple-800',
    description: 'Physical laws and natural phenomena',
    topics: [
      'Mechanics: Forces and Motion',
      'Energy, Work, and Power',
      'Thermodynamics and Heat Transfer',
      'Waves and Sound',
      'Light and Optics',
      'Electricity and Circuits',
      'Magnetism and Electromagnetism',
      'Modern Physics: Quantum and Relativity',
      'Astrophysics and Space Science',
      'Physics Laboratory and Experiments'
    ]
  },
  {
    id: 'us-chemistry',
    name: 'Chemistry',
    color: 'bg-red-800',
    description: 'Chemical principles and reactions',
    topics: [
      'Atomic Structure and Periodic Table',
      'Chemical Bonding and Molecular Structure',
      'Chemical Reactions and Stoichiometry',
      'States of Matter and Gas Laws',
      'Solutions and Concentrations',
      'Acids, Bases, and pH',
      'Thermochemistry and Energy Changes',
      'Chemical Kinetics and Equilibrium',
      'Organic Chemistry Basics',
      'Chemistry Laboratory Techniques'
    ]
  },
  {
    id: 'us-electrical-engineering',
    name: 'Electrical Engineering',
    color: 'bg-yellow-800',
    description: 'Electrical circuits and systems',
    topics: [
      'Basic Circuit Theory and Ohm\'s Law',
      'Series and Parallel Circuits',
      'Electrical Components and Devices',
      'Digital Logic and Binary Systems',
      'Microcontrollers and Programming',
      'Electrical Safety and Standards',
      'Renewable Energy Systems',
      'Electrical Measurements and Instruments',
      'Circuit Design and Simulation',
      'Electrical Engineering Projects'
    ]
  },
  {
    id: 'us-health-medicine',
    name: 'Health and Medicine',
    color: 'bg-pink-800',
    description: 'Human health and medical sciences',
    topics: [
      'Human Body Systems and Anatomy',
      'Nutrition and Healthy Eating',
      'Disease Prevention and Immunology',
      'Mental Health and Psychology',
      'First Aid and Emergency Response',
      'Exercise Science and Fitness',
      'Public Health and Epidemiology',
      'Medical Technology and Diagnostics',
      'Healthcare Careers and Ethics',
      'Wellness and Lifestyle Medicine'
    ]
  },
  {
    id: 'us-computer',
    name: 'Computer',
    color: 'bg-indigo-800',
    description: 'Computer science and technology',
    topics: [
      'Computer Hardware and Architecture',
      'Operating Systems and Software',
      'Programming Fundamentals',
      'Web Development and Design',
      'Database Management',
      'Computer Networks and Internet',
      'Cybersecurity and Digital Citizenship',
      'Data Science and Analytics',
      'Artificial Intelligence and Machine Learning',
      'Computer Applications in Society'
    ]
  },
  {
    id: 'us-economics',
    name: 'Economics',
    color: 'bg-teal-800',
    description: 'Economic principles and personal finance',
    topics: [
      'Introduction to Economics and Scarcity',
      'Supply and Demand Analysis',
      'Market Structures and Competition',
      'Business Economics and Entrepreneurship',
      'Personal Finance and Budgeting',
      'Banking, Credit, and Financial Institutions',
      'Labor Economics and Careers',
      'Government and Economic Policy',
      'International Trade and Global Economy',
      'Economic Decision Making and Ethics'
    ]
  }
]

// SAT Prep Subjects and Topics
const satPrepSubjects = [
  {
    id: 'sat-reading-writing',
    name: 'SAT Reading & Writing',
    color: 'bg-violet-700',
    description: 'Comprehensive SAT Reading and Writing preparation',
    topics: [
      'Reading Comprehension Strategies',
      'Text Structure and Analysis',
      'Inference and Interpretation',
      'Grammar and Sentence Structure',
      'Punctuation and Usage',
      'Rhetorical Analysis',
      'Evidence-Based Questions',
      'Vocabulary in Context',
      'Data Interpretation in Reading',
      'Time Management for Reading Section'
    ]
  },
  {
    id: 'sat-math',
    name: 'SAT Math',
    color: 'bg-emerald-700',
    description: 'Complete SAT Mathematics preparation',
    topics: [
      'Algebra: Linear Equations and Systems',
      'Problem Solving and Data Analysis',
      'Advanced Math: Quadratics and Polynomials',
      'Geometry and Trigonometry',
      'Word Problem Strategies',
      'Calculator Usage Strategies',
      'Mathematical Reasoning',
      'Graph and Function Analysis',
      'Statistical Analysis',
      'Time Management for Math Section'
    ]
  },
  {
    id: 'sat-practice-tests',
    name: 'SAT Practice Tests',
    color: 'bg-blue-700',
    description: 'Full-length practice tests and performance analysis',
    topics: [
      'Diagnostic Practice Test',
      'Reading & Writing Practice Test 1',
      'Math Practice Test 1',
      'Reading & Writing Practice Test 2',
      'Math Practice Test 2',
      'Timed Full-Length Practice Test',
      'Section-Specific Practice Tests',
      'Question Type Analysis',
      'Performance Review and Analysis',
      'Test Day Simulation'
    ]
  },
  {
    id: 'sat-study-skills',
    name: 'SAT Study Skills',
    color: 'bg-orange-700',
    description: 'Essential study strategies and test-taking skills',
    topics: [
      'Personal Study Plan Creation',
      'Time Management Techniques',
      'Stress Management and Test Anxiety',
      'Note-Taking Strategies',
      'Memorization Techniques',
      'Test-Taking Strategies',
      'Error Analysis and Improvement',
      'Motivation and Goal Setting',
      'Study Environment Optimization',
      'Balancing SAT Prep with School'
    ]
  }
]

// Generate subjects with lessons
const generateSubjects = (subjectConfigs: any[]): Subject[] => {
  return subjectConfigs.map(config => ({
    id: config.id,
    name: config.name,
    icon: null, // Will be set in component
    color: config.color,
    description: config.description,
    lessons: generateSubjectLessons(config.id, config.name, config.topics)
  }))
}

export const curriculumData: Curriculum[] = [
  {
    id: 'o-level',
    name: 'O Level',
    description: 'Cambridge O Level curriculum for students aged 14-16',
    ageRange: '14-16 years',
    subjects: generateSubjects(oLevelSubjects)
  },
  {
    id: 'a-level',
    name: 'A Level',
    description: 'Cambridge A Level curriculum for students aged 16-19',
    ageRange: '16-19 years',
    subjects: generateSubjects(aLevelSubjects)
  },
  {
    id: 'us-high-school',
    name: 'US High School',
    description: 'US High School curriculum for Grades 9-12',
    ageRange: '14-18 years',
    subjects: generateSubjects(usHighSchoolSubjects)
  },
  {
    id: 'sat-prep',
    name: 'SAT Prep',
    description: 'Comprehensive SAT preparation program for college admission',
    ageRange: '15-19 years',
    subjects: generateSubjects(satPrepSubjects)
  }
]