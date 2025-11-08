#!/usr/bin/env node

const fs = require('fs');

// Read the current curriculum file
const curriculumData = fs.readFileSync('src/lib/curriculum-data.ts', 'utf8');

// Find the end of O Level biology subject and add new subjects
const newSubjects = `
      },
      {
        id: 'o-accounting',
        name: 'Accounting',
        icon: null,
        color: 'bg-green-600',
        description: 'Master financial record-keeping and accounting principles',
        lessons: [
          {
            id: 'o-acc-intro',
            title: 'Introduction to Accounting',
            description: 'Learn fundamental accounting concepts and principles',
            difficulty: 'Beginner',
            duration: '60 minutes',
            content: {
              concepts: [
                {
                  title: 'What is Accounting?',
                  explanation: 'Accounting is systematic process of recording, analyzing, and reporting financial transactions. It provides information about business performance and financial position.',
                  example: 'When a store sells goods for $100 cash, accounting records: Cash +$100, Sales Revenue +$100. This double-entry system keeps everything balanced.'
                },
                {
                  title: 'Accounting Equation',
                  explanation: 'Assets = Liabilities + Equity. This fundamental equation must always balance. Assets are what a business owns, liabilities are what it owes, and equity is the owner\'s stake.',
                  example: 'If a company has $50,000 in assets and $20,000 in liabilities:\\nEquity = Assets - Liabilities = $50,000 - $20,000 = $30,000'
                }
              ],
              examples: [
                {
                  title: 'Small Business Accounting',
                  solution: 'A coffee shop owner tracks daily sales, expenses, and inventory to determine profit and plan for growth.'
                }
              ],
              exercises: [
                {
                  question: 'If Assets = $100,000 and Liabilities = $40,000, what is Equity?',
                  answer: '$60,000'
                }
              ],
              onlineResources: [
                {
                  title: 'AccountingCoach',
                  url: 'https://www.accountingcoach.com',
                  type: 'article',
                  description: 'Comprehensive accounting tutorials'
                }
              ]
            }
          },
          {
            id: 'o-acc-financial',
            title: 'Financial Statements',
            description: 'Understanding income statements, balance sheets, and cash flows',
            difficulty: 'Intermediate',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'Income Statement',
                  explanation: 'Shows revenues, expenses, and profit over a period. It answers: "Did the business make money?"',
                  example: 'Revenue $10,000 - Expenses $7,000 = Net Income $3,000'
                }
              ],
              examples: [
                {
                  title: 'Reading Financial Reports',
                  solution: 'Investors analyze statements to make informed decisions about buying stocks.'
                }
              ],
              exercises: [
                {
                  question: 'What does an income statement show?',
                  answer: 'Revenues, expenses, and profit over a period'
                }
              ],
              onlineResources: [
                {
                  title: 'Financial Statement Analysis',
                  url: 'https://www.investopedia.com',
                  type: 'article',
                  description: 'Learn to analyze financial statements'
                }
              ]
            }
          },
          {
            id: 'o-acc-bookkeeping',
            title: 'Bookkeeping Principles',
            description: 'Daily recording and maintaining financial records',
            difficulty: 'Beginner',
            duration: '75 minutes',
            content: {
              concepts: [
                {
                  title: 'Journals and Ledgers',
                  explanation: 'Journals record transactions chronologically. Ledgers summarize transactions by account. Both are essential for accurate bookkeeping.',
                  example: 'Journal entry for rent payment:\\nDate | Account | Debit | Credit\\n-----|---------|------|-------\\nToday| Rent Exp | $1,000 | \\nToday| Cash | | $1,000'
                }
              ],
              examples: [
                {
                  title: 'Monthly Bookkeeping',
                  solution: 'Small businesses should reconcile bank statements monthly and prepare financial statements quarterly.'
                }
              ],
              exercises: [
                {
                  question: 'What is the purpose of a trial balance?',
                  answer: 'To verify that total debits equal total credits'
                }
              ],
              onlineResources: [
                {
                  title: 'Accounting Software Guide',
                  url: 'https://www.accountingsoftwareguide.com',
                  type: 'article',
                  description: 'Compare and choose accounting software'
                }
              ]
            }
          },
          {
            id: 'o-acc-managerial',
            title: 'Managerial Accounting',
            description: 'Internal accounting for business decision-making',
            difficulty: 'Advanced',
            duration: '95 minutes',
            content: {
              concepts: [
                {
                  title: 'Cost-Volume-Profit Analysis',
                  explanation: 'Studies how costs and profits change with activity levels. Helps make pricing and production decisions.',
                  example: 'Break-even point: Fixed Costs ÷ (Price - Variable Cost per unit)\\nIf FC=$10,000, Price=$50, VC=$30:\\nBreak-even = $10,000 ÷ ($50-$30) = 500 units'
                }
              ],
              examples: [
                {
                  title: 'Product Pricing Decision',
                  solution: 'Managerial accounting helps determine optimal pricing by considering costs, competition, and profit margins.'
                }
              ],
              exercises: [
                {
                  question: 'What is the break-even point if fixed costs are $20,000, price is $100, and variable cost per unit is $60?',
                  answer: '500 units'
                }
              ],
              onlineResources: [
                {
                  title: 'Managerial Accounting Resources',
                  url: 'https://www.managerialaccounting.org',
                  type: 'article',
                  description: 'Comprehensive managerial accounting resources'
                }
              ]
            }
          },
          {
            id: 'o-acc-taxation',
            title: 'Taxation Basics',
            description: 'Understanding tax principles and business tax compliance',
            difficulty: 'Advanced',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'Business Tax Types',
                  explanation: 'Income tax, sales tax, payroll tax, property tax. Each has different rules and calculation methods.',
                  example: 'Retail business pays:\\n- Income tax on profits\\n- Sales tax collected from customers\\n- Payroll tax on employee wages\\n- Property tax on building/land'
                }
              ],
              examples: [
                {
                  title: 'Tax Compliance',
                  solution: 'Businesses must file various tax returns quarterly and annually, maintaining proper documentation.'
                }
              ],
              exercises: [
                {
                  question: 'What are the main types of business taxes?',
                  answer: 'Income tax, sales tax, payroll tax, and property tax'
                }
              ],
              onlineResources: [
                {
                  title: 'IRS Tax Guide',
                  url: 'https://www.irs.gov',
                  type: 'article',
                  description: 'Official tax information and guidance'
                }
              ]
            }
          },
          {
            id: 'o-acc-forensic',
            title: 'Forensic Accounting',
            description: 'Investigating financial fraud and disputes',
            difficulty: 'Advanced',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'Fraud Detection',
                  explanation: 'Identifying red flags: unusual transactions, missing documentation, lifestyle changes, override of controls.',
                  example: 'Fraud warning signs:\\n- Vendors with same address as employees\\n- Round-dollar payments (to hide theft)\\n- Missing original documents\\n- Management living beyond means'
                }
              ],
              examples: [
                {
                  title: 'Embezzlement Case',
                  solution: 'Employee created fake vendor invoices, diverted payments to personal account over 3 years totaling $250,000.'
                }
              ],
              exercises: [
                {
                  question: 'What are common fraud red flags?',
                  answer: 'Unusual transactions, missing documentation, lifestyle changes, control overrides'
                }
              ],
              onlineResources: [
                {
                  title: 'Fraud Magazine',
                  url: 'https://www.fraud-magazine.com',
                  type: 'article',
                  description: 'Fraud prevention and detection resources'
                }
              ]
            }
          },
          {
            id: 'o-acc-ethics',
            title: 'Accounting Ethics',
            description: 'Professional conduct and ethical responsibilities',
            difficulty: 'Intermediate',
            duration: '65 minutes',
            content: {
              concepts: [
                {
                  title: 'Code of Ethics',
                  explanation: 'Integrity, objectivity, professional competence, confidentiality. Accountants must avoid conflicts of interest.',
                  example: 'Ethical dilemma:\\nAccountant discovers CEO expense fraud.\\nMust report despite pressure to stay silent.\\nProfessional responsibility > job security'
                }
              ],
              examples: [
                {
                  title: 'Whistleblowing',
                  solution: 'Accountants have professional obligation to report financial misconduct through proper channels.'
                }
              ],
              exercises: [
                {
                  question: 'What are the main principles of accounting ethics?',
                  answer: 'Integrity, objectivity, professional competence, and confidentiality'
                }
              ],
              onlineResources: [
                {
                  title: 'Ethics Standards',
                  url: 'https://www.ethics.org',
                  type: 'article',
                  description: 'Professional ethics resources and case studies'
                }
              ]
            }
          },
          {
            id: 'o-acc-technology',
            title: 'Accounting Information Systems',
            description: 'Technology in modern accounting practice',
            difficulty: 'Intermediate',
            duration: '75 minutes',
            content: {
              concepts: [
                {
                  title: 'Accounting Software',
                  explanation: 'Automated systems for recording transactions, generating reports, and ensuring accuracy. Popular: QuickBooks, SAP, Oracle.',
                  example: 'QuickBooks features:\\n- Automatic bank feeds\\n- Invoice generation\\n- Financial statement preparation\\n- Tax reporting integration'
                }
              ],
              examples: [
                {
                  title: 'Cloud Accounting',
                  solution: 'Modern accounting systems use cloud technology for real-time access, automatic backups, and remote collaboration.'
                }
              ],
              exercises: [
                {
                  question: 'What are the benefits of accounting software?',
                  answer: 'Automation, accuracy, reporting, and integration'
                }
              ],
              onlineResources: [
                {
                  title: 'Accounting Technology Review',
                  url: 'https://www.accountingtoday.com',
                  type: 'article',
                  description: 'Latest trends in accounting technology'
                }
              ]
            }
          },
          {
            id: 'o-acc-careers',
            title: 'Accounting Careers',
            description: 'Professional paths and opportunities in accounting',
            difficulty: 'Beginner',
            duration: '60 minutes',
            content: {
              concepts: [
                {
                  title: 'Public Accounting',
                  explanation: 'Working for CPA firms auditing companies. Career path: Staff → Senior → Manager → Partner.',
                  example: 'Big Four firms: Deloitte, PwC, EY, KPMG. Audit Fortune 500 companies, travel extensively.'
                }
              ],
              examples: [
                {
                  title: 'Specialized Careers',
                  solution: 'Tax specialists, forensic accountants, consultants, financial analysts, internal auditors.'
                }
              ],
              exercises: [
                {
                  question: 'What are the main career paths in accounting?',
                  answer: 'Public accounting (CPA firms) and corporate accounting (companies)'
                }
              ],
              onlineResources: [
                {
                  title: 'Accounting Careers Guide',
                  url: 'https://www.accountingcareers.org',
                  type: 'article',
                  description: 'Comprehensive career information and job board'
                }
              ]
            }
          },
          {
            id: 'o-acc-international',
            title: 'International Accounting',
            description: 'Accounting standards and currency issues',
            difficulty: 'Advanced',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'IFRS vs GAAP',
                  explanation: 'Different accounting standards globally. IFRS (International) vs GAAP (US). Key differences in inventory, revenue recognition.',
                  example: 'Inventory valuation:\\n- IFRS: Can use LIFO or FIFO\\n- GAAP: Can use LIFO or FIFO\\n- IFRS requires fair value measurement\\n- GAAP uses historical cost more often'
                }
              ],
              examples: [
                {
                  title: 'Multinational Reporting',
                  solution: 'Companies operating globally must consolidate financial statements using consistent exchange rates and accounting policies.'
                }
              ],
              exercises: [
                {
                  question: 'What is the main difference between IFRS and GAAP?',
                  answer: 'Different accounting standards used internationally vs in the US'
                }
              ],
              onlineResources: [
                {
                  title: 'IASB Standards',
                  url: 'https://www.ifrs.org',
                  type: 'article',
                  description: 'International Financial Reporting Standards'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'o-compsci',
        name: 'Computer Science',
        icon: null,
        color: 'bg-purple-600',
        description: 'Learn programming, algorithms, and computational thinking',
        lessons: [
          {
            id: 'o-cs-intro',
            title: 'Introduction to Programming',
            description: 'Basic programming concepts and problem-solving',
            difficulty: 'Beginner',
            duration: '80 minutes',
            content: {
              concepts: [
                {
                  title: 'Variables and Data Types',
                  explanation: 'Variables store data values. Data types specify what kind of data (numbers, text, true/false).',
                  example: 'age = 25 (integer), name = "Alice" (string), isStudent = true (boolean)'
                },
                {
                  title: 'Control Structures',
                  explanation: 'If-else statements make decisions, loops repeat actions. These control program flow.',
                  example: 'if (score >= 70) { pass = true } else { pass = false }'
                }
              ],
              examples: [
                {
                  title: 'Simple Calculator',
                  solution: 'Program that adds two numbers and displays the result.'
                }
              ],
              exercises: [
                {
                  question: 'What is a variable?',
                  answer: 'A named storage location for data values'
                }
              ],
              onlineResources: [
                {
                  title: 'Learn Programming',
                  url: 'https://www.codecademy.com',
                  type: 'practice',
                  description: 'Interactive coding exercises'
                }
              ]
            }
          },
          {
            id: 'o-cs-algorithms',
            title: 'Algorithms and Problem Solving',
            description: 'Step-by-step procedures for solving problems',
            difficulty: 'Intermediate',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'What is an Algorithm?',
                  explanation: 'A finite sequence of well-defined instructions to solve a specific problem.',
                  example: 'Recipe for making tea is an algorithm: boil water, add tea bag, wait 3 minutes, remove bag.'
                }
              ],
              examples: [
                {
                  title: 'Sorting Algorithm',
                  solution: 'Bubble sort repeatedly compares adjacent elements and swaps them if in wrong order.'
                }
              ],
              exercises: [
                {
                  question: 'What makes an algorithm efficient?',
                  answer: 'It solves the problem using minimal time and memory resources'
                }
              ],
              onlineResources: [
                {
                  title: 'Algorithm Visualization',
                  url: 'https://visualgo.net',
                  type: 'simulation',
                  description: 'See how algorithms work step-by-step'
                }
              ]
            }
          },
          {
            id: 'o-cs-datastructures',
            title: 'Data Structures',
            description: 'Organizing and storing data efficiently',
            difficulty: 'Advanced',
            duration: '95 minutes',
            content: {
              concepts: [
                {
                  title: 'Arrays and Lists',
                  explanation: 'Arrays store multiple values of the same type. Lists are dynamic arrays that can grow and shrink.',
                  example: 'int[] scores = {85, 92, 78}; // stores 3 integers\\nArrayList<String> names = new ArrayList<>(); // dynamic list'
                }
              ],
              examples: [
                {
                  title: 'Database Design',
                  solution: 'Proper data structure choice impacts database performance and query speed.'
                }
              ],
              exercises: [
                {
                  question: 'What is the difference between an array and a list?',
                  answer: 'Array has fixed size, list can grow and shrink dynamically'
                }
              ],
              onlineResources: [
                {
                  title: 'Data Structures Visualizations',
                  url: 'https://www.cs.usfca.edu/~mmalense/DSVisualizations.html',
                  type: 'simulation',
                  description: 'Interactive data structure visualizations'
                }
              ]
            }
          },
          {
            id: 'o-cs-databases',
            title: 'Database Management',
            description: 'Storing, retrieving, and managing data',
            difficulty: 'Intermediate',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'SQL Fundamentals',
                  explanation: 'Structured Query Language for database operations. SELECT, INSERT, UPDATE, DELETE commands.',
                  example: 'SELECT name, email FROM users WHERE age > 18; // retrieves adults'
                }
              ],
              examples: [
                {
                  title: 'Database Design',
                  solution: 'Proper table design with relationships ensures data integrity and efficient queries.'
                }
              ],
              exercises: [
                {
                  question: 'What does SQL stand for?',
                  answer: 'Structured Query Language'
                }
              ],
              onlineResources: [
                {
                  title: 'SQL Practice',
                  url: 'https://sqlzoo.net',
                  type: 'practice',
                  description: 'Interactive SQL exercises'
                }
              ]
            }
          },
          {
            id: 'o-cs-webdev',
            title: 'Web Development',
            description: 'Creating modern web applications',
            difficulty: 'Intermediate',
            duration: '100 minutes',
            content: {
              concepts: [
                {
                  title: 'HTML/CSS/JavaScript',
                  explanation: 'HTML structures content, CSS styles it, JavaScript adds interactivity. The three pillars of web development.',
                  example: '<h1>Hello World</h1> // HTML heading\\nh1 { color: blue; } // CSS styling\\nalert("Hello!"); // JavaScript interaction'
                }
              ],
              examples: [
                {
                  title: 'Responsive Design',
                  solution: 'Websites that adapt to different screen sizes improve user experience on all devices.'
                }
              ],
              exercises: [
                {
                  question: 'What are the three main web technologies?',
                  answer: 'HTML, CSS, and JavaScript'
                }
              ],
              onlineResources: [
                {
                  title: 'Web Development Roadmap',
                  url: 'https://roadmap.sh/frontend',
                  type: 'article',
                  description: 'Complete guide to web development learning'
                }
              ]
            }
          },
          {
            id: 'o-cs-security',
            title: 'Cybersecurity',
            description: 'Protecting systems and data from threats',
            difficulty: 'Advanced',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'Encryption and Security',
                  explanation: 'Encryption transforms data to protect it. Security involves authentication, authorization, and protection against attacks.',
                  example: 'HTTPS encrypts data between browser and server. Passwords should be hashed, not stored in plain text.'
                }
              ],
              examples: [
                {
                  title: 'Common Vulnerabilities',
                  solution: 'SQL injection, cross-site scripting, and weak passwords are common security risks.'
                }
              ],
              exercises: [
                {
                  question: 'What is the purpose of encryption?',
                  answer: 'To protect data by making it unreadable without the proper key'
                }
              ],
              onlineResources: [
                {
                  title: 'Cybersecurity Learning',
                  url: 'https://www.cybrary.it',
                  type: 'practice',
                  description: 'Hands-on cybersecurity training'
                }
              ]
            }
          },
          {
            id: 'o-cs-ai',
            title: 'Artificial Intelligence',
            description: 'Introduction to machine learning and AI concepts',
            difficulty: 'Advanced',
            duration: '95 minutes',
            content: {
              concepts: [
                {
                  title: 'Machine Learning Basics',
                  explanation: 'Algorithms that learn from data to make predictions or decisions. Supervised vs unsupervised learning.',
                  example: 'Spam filter learns from examples to classify new emails as spam or not spam.'
                }
              ],
              examples: [
                {
                  title: 'Neural Networks',
                  solution: 'Computing systems inspired by biological brains that can recognize patterns and make decisions.'
                }
              ],
              exercises: [
                {
                  question: 'What is the difference between supervised and unsupervised learning?',
                  answer: 'Supervised uses labeled data, unsupervised finds patterns in unlabeled data'
                }
              ],
              onlineResources: [
                {
                  title: 'AI for Beginners',
                  url: 'https://www.elementsofai.com',
                  type: 'article',
                  description: 'Comprehensive AI learning resources'
                }
              ]
            }
          },
          {
            id: 'o-cs-mobile',
            title: 'Mobile App Development',
            description: 'Creating applications for smartphones and tablets',
            difficulty: 'Advanced',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'iOS vs Android',
                  explanation: 'iOS uses Swift/Objective-C, Android uses Java/Kotlin. Cross-platform tools like React Native.',
                  example: 'React Native allows writing code once that works on both iOS and Android platforms.'
                }
              ],
              examples: [
                {
                  title: 'App Store Deployment',
                  solution: 'Apps must be approved and distributed through official app stores with proper guidelines.'
                }
              ],
              exercises: [
                {
                  question: 'What are the main mobile platforms?',
                  answer: 'iOS and Android'
                }
              ],
              onlineResources: [
                {
                  title: 'Mobile Development Guide',
                  url: 'https://developer.apple.com/ios',
                  type: 'article',
                  description: 'Official iOS development resources'
                }
              ]
            }
          },
          {
            id: 'o-cs-cloud',
            title: 'Cloud Computing',
            description: 'Distributed computing resources over the internet',
            difficulty: 'Intermediate',
            duration: '80 minutes',
            content: {
              concepts: [
                {
                  title: 'Cloud Service Models',
                  explanation: 'IaaS (Infrastructure), PaaS (Platform), SaaS (Software). Different levels of managed services.',
                  example: 'AWS EC2 (IaaS), Heroku (PaaS), Google Docs (SaaS)'
                }
              ],
              examples: [
                {
                  title: 'Scalability',
                  solution: 'Cloud resources can scale up or down based on demand, paying only for what you use.'
                }
              ],
              exercises: [
                {
                  question: 'What does SaaS stand for?',
                  answer: 'Software as a Service'
                }
              ],
              onlineResources: [
                {
                  title: 'Cloud Learning',
                  url: 'https://aws.amazon.com/training',
                  type: 'article',
                  description: 'AWS training and certification resources'
                }
              ]
            }
          },
          {
            id: 'o-cs-devops',
            title: 'DevOps Practices',
            description: 'Development and operations collaboration',
            difficulty: 'Advanced',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'CI/CD Pipeline',
                  explanation: 'Continuous Integration/Continuous Deployment automates testing and deployment processes.',
                  example: 'GitHub Actions automatically test code and deploy to production when changes are pushed.'
                }
              ],
              examples: [
                {
                  title: 'Infrastructure as Code',
                  solution: 'Managing infrastructure through code for consistency and reproducibility.'
                }
              ],
              exercises: [
                {
                  question: 'What does DevOps combine?',
                  answer: 'Development (Dev) and Operations (Ops) practices and tools'
                }
              ],
              onlineResources: [
                {
                  title: 'DevOps Roadmap',
                  url: 'https://www.devops.com',
                  type: 'article',
                  description: 'Comprehensive DevOps learning path'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'o-economics',
        name: 'Economics',
        icon: null,
        color: 'bg-amber-600',
        description: 'Understanding how societies allocate scarce resources',
        lessons: [
          {
            id: 'o-eco-intro',
            title: 'Introduction to Economics',
            description: 'Basic economic concepts and principles',
            difficulty: 'Beginner',
            duration: '70 minutes',
            content: {
              concepts: [
                {
                  title: 'Scarcity and Choice',
                  explanation: 'Scarcity means limited resources vs unlimited wants. Forces societies to make choices about what to produce.',
                  example: 'A country has limited budget: must choose between healthcare, education, or defense spending.'
                },
                {
                  title: 'Supply and Demand',
                  explanation: 'Supply: quantity producers will sell at each price. Demand: quantity consumers will buy at each price. Equilibrium where supply = demand.',
                  example: 'If coffee price rises, demand falls (people buy less). If price falls, supply falls (producers make less).'
                }
              ],
              examples: [
                {
                  title: 'Market Equilibrium',
                  solution: 'When iPhone price is $999, Apple supplies exactly what consumers want to buy.'
                }
              ],
              exercises: [
                {
                  question: 'What is scarcity in economics?',
                  answer: 'Limited resources compared to unlimited human wants'
                }
              ],
              onlineResources: [
                {
                  title: 'Economics Basics',
                  url: 'https://www.khanacademy.org/economics-finance-domain',
                  type: 'video',
                  description: 'Free economics courses and tutorials'
                }
              ]
            }
          },
          {
            id: 'o-eco-macro',
            title: 'Macroeconomics',
            description: 'Economy-wide phenomena like GDP, inflation, unemployment',
            difficulty: 'Advanced',
            duration: '95 minutes',
            content: {
              concepts: [
                {
                  title: 'GDP (Gross Domestic Product)',
                  explanation: 'Total value of all goods and services produced in a country in a year. Measures economic output.',
                  example: 'US GDP ~$21 trillion annually = sum of all cars, food, services, etc. produced.'
                }
              ],
              examples: [
                {
                  title: 'Economic Growth',
                  solution: 'When GDP increases 2% annually, economy is growing and living standards improve.'
                }
              ],
              exercises: [
                {
                  question: 'What does GDP measure?',
                  answer: 'Total economic output/value of production in a country'
                }
              ],
              onlineResources: [
                {
                  title: 'Macroeconomics',
                  url: 'https://www.imf.org',
                  type: 'article',
                  description: 'Global economic data and analysis'
                }
              ]
            }
          },
          {
            id: 'o-eco-micro',
            title: 'Microeconomics',
            description: 'Individual economic behavior and market interactions',
            difficulty: 'Intermediate',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'Elasticity',
                  explanation: 'How quantity demanded/supplied responds to price changes. Elastic > 1, Inelastic < 1.',
                  example: 'Gasoline demand is inelastic (people need it), luxury car demand is elastic (can postpone purchase).'
                }
              ],
              examples: [
                {
                  title: 'Consumer Choice',
                  solution: 'Consumers maximize utility given budget constraints, leading to demand curves.'
                }
              ],
              exercises: [
                {
                  question: 'What is price elasticity of demand?',
                  answer: 'How much quantity demanded changes when price changes'
                }
              ],
              onlineResources: [
                {
                  title: 'Microeconomics',
                  url: 'https://www.econlib.org',
                  type: 'article',
                  description: 'Microeconomics principles and applications'
                }
              ]
            }
          },
          {
            id: 'o-eco-international',
            title: 'International Economics',
            description: 'Global trade, exchange rates, and economic integration',
            difficulty: 'Advanced',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'Comparative Advantage',
                  explanation: 'Countries specialize in what they produce most efficiently, trade with others.',
                  example: 'Japan specializes in electronics, Saudi Arabia in oil. Both benefit from trade.'
                }
              ],
              examples: [
                {
                  title: 'Exchange Rates',
                  solution: 'Currency values affect import/export prices and international competitiveness.'
                }
              ],
              exercises: [
                {
                  question: 'What is comparative advantage?',
                  answer: 'Producing goods at lower opportunity cost than other countries'
                }
              ],
              onlineResources: [
                {
                  title: 'International Economics',
                  url: 'https://www.wto.org',
                  type: 'article',
                  description: 'World Trade Organization resources'
                }
              ]
            }
          },
          {
            id: 'o-eco-behavioral',
            title: 'Behavioral Economics',
            description: 'Psychology in economic decision-making',
            difficulty: 'Advanced',
            duration: '80 minutes',
            content: {
              concepts: [
                {
                  title: 'Cognitive Biases',
                  explanation: 'Systematic errors in thinking that affect economic decisions. Loss aversion, anchoring, etc.',
                  example: 'People fear losses more than they value equal gains - leads to irrational investment decisions.'
                }
              ],
              examples: [
                {
                  title: 'Nudge Theory',
                  solution: 'Small changes in choice architecture can influence decisions without limiting options.'
                }
              ],
              exercises: [
                {
                  question: 'What is loss aversion?',
                  answer: 'People feel pain of losses more strongly than pleasure of equal gains'
                }
              ],
              onlineResources: [
                {
                  title: 'Behavioral Economics',
                  url: 'https://www.behavioraleconomics.com',
                  type: 'article',
                  description: 'Research and applications of behavioral economics'
                }
              ]
            }
          },
          {
            id: 'o-eco-development',
            title: 'Economic Development',
            description: 'Growth, poverty reduction, and living standards',
            difficulty: 'Intermediate',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'Human Development Index',
                  explanation: 'Measures development beyond GDP: includes health, education, and income.',
                  example: 'HDI combines life expectancy, education years, and per capita income.'
                }
              ],
              examples: [
                {
                  title: 'Sustainable Development',
                  solution: 'Balancing economic growth with environmental protection and social equity.'
                }
              ],
              exercises: [
                {
                  question: 'What does HDI stand for?',
                  answer: 'Human Development Index'
                }
              ],
              onlineResources: [
                {
                  title: 'Development Economics',
                  url: 'https://www.worldbank.org',
                  type: 'article',
                  description: 'World Bank development data and research'
                }
              ]
            }
          },
          {
            id: 'o-eco-monetary',
            title: 'Monetary Economics',
            description: 'Money, banking, and financial systems',
            difficulty: 'Advanced',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'Money Supply',
                  explanation: 'Central banks control money supply to influence inflation and economic activity.',
                  example: 'Fed can buy/sell government bonds to increase/decrease money in circulation.'
                }
              ],
              examples: [
                {
                  title: 'Inflation',
                  solution: 'General price level increase reduces purchasing power over time.'
                }
              ],
              exercises: [
                {
                  question: 'What is inflation?',
                  answer: 'Sustained increase in general price level over time'
                }
              ],
              onlineResources: [
                {
                  title: 'Monetary Policy',
                  url: 'https://www.federalreserve.gov',
                  type: 'article',
                  description: 'Federal Reserve monetary policy resources'
                }
              ]
            }
          },
          {
            id: 'o-eco-environmental',
            title: 'Environmental Economics',
            description: 'Economics of environmental issues and sustainability',
            difficulty: 'Advanced',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'Externalities',
                  explanation: 'Costs/benefits affecting third parties not reflected in market prices.',
                  example: 'Pollution is negative externality - factory doesn't pay environmental costs.'
                }
              ],
              examples: [
                {
                  title: 'Carbon Pricing',
                  solution: 'Putting price on carbon emissions to internalize environmental costs.'
                }
              ],
              exercises: [
                {
                  question: 'What is a negative externality?',
                  answer: 'Cost imposed on third parties not compensated for'
                }
              ],
              onlineResources: [
                {
                  title: 'Environmental Economics',
                  url: 'https://www.epa.gov',
                  type: 'article',
                  description: 'Environmental economics and policy resources'
                }
              ]
            }
          },
          {
            id: 'o-eco-labor',
            title: 'Labor Economics',
            description: 'Markets for labor and employment',
            difficulty: 'Intermediate',
            duration: '80 minutes',
            content: {
              concepts: [
                {
                  title: 'Supply and Demand for Labor',
                  explanation: 'Workers supply labor, firms demand labor. Wage equilibrium where supply = demand.',
                  example: 'Minimum wage above equilibrium can cause unemployment (excess supply of labor).'
                }
              ],
              examples: [
                {
                  title: 'Unemployment Types',
                  solution: 'Frictional (between jobs), structural (mismatch), cyclical (economic downturns).'
                }
              ],
              exercises: [
                {
                  question: 'What determines wages in labor market?',
                  answer: 'Supply and demand for labor, plus worker skills and productivity'
                }
              ],
              onlineResources: [
                {
                  title: 'Labor Economics',
                  url: 'https://www.bls.gov',
                  type: 'article',
                  description: 'Bureau of Labor Statistics data and research'
                }
              ]
            }
          },
          {
            id: 'o-eco-urban',
            title: 'Urban Economics',
            description: 'Economics of cities and regional development',
            difficulty: 'Advanced',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'Agglomeration Economies',
                  explanation: 'Benefits firms and workers get from locating near each other in cities.',
                  example: 'Silicon Valley: tech companies cluster, share talent, specialized suppliers.'
                }
              ],
              examples: [
                {
                  title: 'Housing Markets',
                  solution: 'Supply and demand for housing determines prices and affordability issues.'
                }
              ],
              exercises: [
                {
                  question: 'What causes cities to form?',
                  answer: 'Agglomeration economies - benefits from firms locating near each other'
                }
              ],
              onlineResources: [
                {
                  title: 'Urban Economics',
                  url: 'https://www.urban.org',
                  type: 'article',
                  description: 'Urban economics and policy resources'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'o-science',
        name: 'General Science',
        icon: null,
        color: 'bg-cyan-600',
        description: 'Integrated science covering physics, chemistry, and biology',
        lessons: [
          {
            id: 'o-sci-method',
            title: 'Scientific Method',
            description: 'How scientists investigate the natural world',
            difficulty: 'Beginner',
            duration: '65 minutes',
            content: {
              concepts: [
                {
                  title: 'Steps of Scientific Method',
                  explanation: 'Observation → Question → Hypothesis → Experiment → Analysis → Conclusion. Repeat to verify.',
                  example: 'Observe: plants grow toward light. Question: why? Hypothesis: light direction affects growth. Experiment: grow plants in different light directions.'
                }
              ],
              examples: [
                {
                  title: 'Testing Hypotheses',
                  solution: 'Scientists test if new medicine works by comparing treated vs control groups.'
                }
              ],
              exercises: [
                {
                  question: 'What is a hypothesis?',
                  answer: 'A testable explanation for an observation'
                }
              ],
              onlineResources: [
                {
                  title: 'Science Skills',
                  url: 'https://www.sciencebuddies.org',
                  type: 'practice',
                  description: 'Hands-on science experiments and projects'
                }
              ]
            }
          },
          {
            id: 'o-sci-energy',
            title: 'Energy and Matter',
            description: 'Understanding energy forms and transformations',
            difficulty: 'Intermediate',
            duration: '80 minutes',
            content: {
              concepts: [
                {
                  title: 'Energy Conservation',
                  explanation: 'Energy cannot be created or destroyed, only transformed from one form to another.',
                  example: 'Solar panel: light energy → electrical energy. Car engine: chemical energy → mechanical energy + heat.'
                }
              ],
              examples: [
                {
                  title: 'Energy Transformations',
                  solution: 'Wind turbine: kinetic energy (wind) → mechanical energy → electrical energy.'
                }
              ],
              exercises: [
                {
                  question: 'Can energy be destroyed?',
                  answer: 'No, energy can only be transformed or transferred'
                }
              ],
              onlineResources: [
                {
                  title: 'Energy Education',
                  url: 'https://www.eia.gov',
                  type: 'article',
                  description: 'Comprehensive energy information and resources'
                }
              ]
            }
          },
          {
            id: 'o-sci-forces',
            title: 'Forces and Motion',
            description: 'Newton\'s laws and mechanical principles',
            difficulty: 'Intermediate',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'Newton\'s Laws',
                  explanation: '1) Inertia, 2) F=ma, 3) Action-reaction. Foundation of classical mechanics.',
                  example: 'Rocket: hot gas pushes down (action), rocket pushes up (reaction).'
                }
              ],
              examples: [
                {
                  title: 'Simple Machines',
                  solution: 'Levers, pulleys, and inclined planes multiply force or change direction.'
                }
              ],
              exercises: [
                {
                  question: 'What is Newton\'s second law?',
                  answer: 'Force equals mass times acceleration (F=ma)'
                }
              ],
              onlineResources: [
                {
                  title: 'Physics Simulations',
                  url: 'https://phet.colorado.edu',
                  type: 'simulation',
                  description: 'Interactive physics simulations'
                }
              ]
            }
          },
          {
            id: 'o-sci-waves',
            title: 'Waves and Sound',
            description: 'Properties of waves, sound, and electromagnetic radiation',
            difficulty: 'Advanced',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'Wave Properties',
                  explanation: 'Amplitude (height), frequency (pitch), wavelength (distance between peaks), speed.',
                  example: 'Sound: 343 m/s in air, Light: 300,000 km/s in vacuum.'
                }
              ],
              examples: [
                {
                  title: 'Electromagnetic Spectrum',
                  solution: 'Radio waves to gamma rays, all travel at speed of light but have different energies.'
                }
              ],
              exercises: [
                {
                  question: 'What determines the pitch of a sound wave?',
                  answer: 'Frequency - higher frequency = higher pitch'
                }
              ],
              onlineResources: [
                {
                  title: 'Wave Physics',
                  url: 'https://www.physicsclassroom.com',
                  type: 'simulation',
                  description: 'Interactive wave demonstrations'
                }
              ]
            }
          },
          {
            id: 'o-sci-chemistry',
            title: 'Chemistry Fundamentals',
            description: 'Atoms, molecules, and chemical reactions',
            difficulty: 'Intermediate',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'Atomic Structure',
                  explanation: 'Atoms have nucleus (protons, neutrons) and electrons. Periodic table organizes by atomic number.',
                  example: 'Carbon: 6 protons, typically 6 neutrons, 6 electrons. Forms basis of organic chemistry.'
                }
              ],
              examples: [
                {
                  title: 'Chemical Reactions',
                  solution: 'Reactants → Products. Conservation of mass: atoms rearrange, not created/destroyed.'
                }
              ],
              exercises: [
                {
                  question: 'What is the atomic number of an element?',
                  answer: 'Number of protons in the nucleus'
                }
              ],
              onlineResources: [
                {
                  title: 'Chemistry Learning',
                  url: 'https://www.chemguide.org',
                  type: 'simulation',
                  description: 'Interactive chemistry tutorials'
                }
              ]
            }
          },
          {
            id: 'o-sci-biology-expanded',
            title: 'Biology Fundamentals',
            description: 'Life processes and living organisms',
            difficulty: 'Beginner',
            duration: '75 minutes',
            content: {
              concepts: [
                {
                  title: 'Cell Theory',
                  explanation: 'All living things are made of cells, cells are the basic unit of life.',
                  example: 'Humans have ~37 trillion cells, bacteria have only one cell.'
                }
              ],
              examples: [
                {
                  title: 'Evolution',
                  solution: 'Species change over generations through natural selection of advantageous traits.'
                }
              ],
              exercises: [
                {
                  question: 'What is the basic unit of life?',
                  answer: 'The cell'
                }
              ],
              onlineResources: [
                {
                  title: 'Biology Resources',
                  url: 'https://www.biology.com',
                  type: 'article',
                  description: 'Comprehensive biology learning materials'
                }
              ]
            }
          },
          {
            id: 'o-sci-earth',
            title: 'Earth Science',
            description: 'Geology, weather, and environmental systems',
            difficulty: 'Advanced',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'Rock Cycle',
                  explanation: 'Igneous → Sedimentary → Metamorphic → Igneous. Continuous transformation of Earth materials.',
                  example: 'Granite (igneous) → sediment → sandstone (sedimentary) → quartzite (metamorphic).'
                }
              ],
              examples: [
                {
                  title: 'Weather Patterns',
                  solution: 'High/low pressure systems create weather fronts and precipitation patterns.'
                }
              ],
              exercises: [
                {
                  question: 'What are the three main rock types?',
                  answer: 'Igneous, sedimentary, and metamorphic'
                }
              ],
              onlineResources: [
                {
                  title: 'Earth Science',
                  url: 'https://www.usgs.gov',
                  type: 'article',
                  description: 'Geological survey and educational resources'
                }
              ]
            }
          },
          {
            id: 'o-sci-space',
            title: 'Astronomy and Space Science',
            description: 'The universe, stars, planets, and space exploration',
            difficulty: 'Advanced',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'Solar System',
                  explanation: 'Sun and 8 planets, plus dwarf planets, asteroids, comets. Gravity governs orbits.',
                  example: 'Earth: 150 million km from Sun, one year orbit, tilted axis causes seasons.'
                }
              ],
              examples: [
                {
                  title: 'Space Exploration',
                  solution: 'From Sputnik to ISS to Mars rovers, humanity\'s journey to explore space.'
                }
              ],
              exercises: [
                {
                  question: 'What force keeps planets in orbit?',
                  answer: 'Gravity'
                }
              ],
              onlineResources: [
                {
                  title: 'NASA Resources',
                  url: 'https://www.nasa.gov',
                  type: 'article',
                  description: 'Space science and exploration resources'
                }
              ]
            }
          },
          {
            id: 'o-sci-environmental',
            title: 'Environmental Science',
            description: 'Ecosystems, climate change, and sustainability',
            difficulty: 'Advanced',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'Ecosystems',
                  explanation: 'Communities of living organisms interacting with their environment.',
                  example: 'Forest ecosystem: producers (plants), consumers (animals), decomposers (fungi, bacteria).'
                }
              ],
              examples: [
                {
                  title: 'Climate Change',
                  solution: 'Greenhouse gases trap heat, causing global warming and climate disruption.'
                }
              ],
              exercises: [
                {
                  question: 'What are the main greenhouse gases?',
                  answer: 'Carbon dioxide, methane, water vapor, nitrous oxide'
                }
              ],
              onlineResources: [
                {
                  title: 'Environmental Science',
                  url: 'https://www.epa.gov',
                  type: 'article',
                  description: 'Environmental protection and science resources'
                }
              ]
            }
          },
          {
            id: 'o-sci-innovation',
            title: 'Scientific Innovation',
            description: 'Technology, engineering, and scientific breakthroughs',
            difficulty: 'Advanced',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'Research and Development',
                  explanation: 'Process of discovering new knowledge and applying it to create products.',
                  example: 'Scientific method leads to discoveries like vaccines, renewable energy, computers.'
                }
              ],
              examples: [
                {
                  title: 'Biotechnology',
                  solution: 'Using biological systems to develop medicines, crops, and industrial processes.'
                }
              ],
              exercises: [
                {
                  question: 'What is the scientific method?',
                  answer: 'Systematic observation, hypothesis, experimentation, and conclusion'
                }
              ],
              onlineResources: [
                {
                  title: 'Innovation Resources',
                  url: 'https://www.nsf.gov',
                  type: 'article',
                  description: 'National Science Foundation resources and funding'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'o-statistics',
        name: 'Statistics',
        icon: null,
        color: 'bg-rose-600',
        description: 'Collect, analyze, and interpret data',
        lessons: [
          {
            id: 'o-stats-intro',
            title: 'Introduction to Statistics',
            description: 'Basic concepts of data analysis and interpretation',
            difficulty: 'Beginner',
            duration: '75 minutes',
            content: {
              concepts: [
                {
                  title: 'Descriptive Statistics',
                  explanation: 'Methods to summarize and describe data features using mean, median, mode, and standard deviation.',
                  example: 'Test scores: 80, 85, 90, 95, 100. Mean = 90, Median = 90, No mode (all different).'
                },
                {
                  title: 'Data Visualization',
                  explanation: 'Charts and graphs help people understand data patterns quickly. Bar charts for categories, line charts for trends.',
                  example: 'Company sales over 5 years shown as line chart clearly shows growth trend.'
                }
              ],
              examples: [
                {
                  title: 'Real-world Statistics',
                  solution: 'COVID-19 data tracked with charts showing infection rates, deaths, and vaccination progress.'
                }
              ],
              exercises: [
                {
                  question: 'What is the difference between mean and median?',
                  answer: 'Mean is average, median is middle value when data is ordered'
                }
              ],
              onlineResources: [
                {
                  title: 'Statistics Learning',
                  url: 'https://www.khanacademy.org/math/statistics-probability',
                  type: 'video',
                  description: 'Free statistics courses and tutorials'
                }
              ]
            }
          },
          {
            id: 'o-stats-probability',
            title: 'Probability Theory',
            description: 'Mathematics of uncertainty and chance',
            difficulty: 'Intermediate',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'Basic Probability',
                  explanation: 'Likelihood of an event occurring, from 0 (impossible) to 1 (certain). P(event) = favorable outcomes ÷ total outcomes.',
                  example: 'Coin flip: P(heads) = 1/2 = 0.5 = 50%. Die roll: P(6) = 1/6 ≈ 16.7%.'
                }
              ],
              examples: [
                {
                  title: 'Weather Probability',
                  solution: 'Weather forecast says 30% chance of rain means historically, similar conditions led to rain 30% of time.'
                }
              ],
              exercises: [
                {
                  question: 'What is the probability of rolling an even number on a die?',
                  answer: '3/6 = 1/2 = 50%'
                }
              ],
              onlineResources: [
                {
                  title: 'Probability Theory',
                  url: 'https://www.dartmouth.edu/~chance',
                  type: 'article',
                  description: 'Comprehensive probability resources and examples'
                }
              ]
            }
          },
          {
            id: 'o-stats-inferential',
            title: 'Inferential Statistics',
            description: 'Making predictions about populations from samples',
            difficulty: 'Advanced',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'Hypothesis Testing',
                  explanation: 'Using sample data to test claims about larger populations. P-values, confidence intervals.',
                  example: 'Test if new drug is effective: compare treatment group vs control group, calculate p-value.'
                }
              ],
              examples: [
                {
                  title: 'Statistical Significance',
                  solution: 'P-value < 0.05 suggests results are unlikely due to chance alone.'
                }
              ],
              exercises: [
                {
                  question: 'What does a p-value represent?',
                  answer: 'Probability of observing results as extreme as, or more extreme than, observed'
                }
              ],
              onlineResources: [
                {
                  title: 'Statistical Analysis',
                  url: 'https://www.statista.com',
                  type: 'article',
                  description: 'Statistics database and analysis tools'
                }
              ]
            }
          },
          {
            id: 'o-stats-regression',
            title: 'Regression Analysis',
            description: 'Modeling relationships between variables',
            difficulty: 'Advanced',
            duration: '95 minutes',
            content: {
              concepts: [
                {
                  title: 'Linear Regression',
                  explanation: 'Finding line that best fits data points. Y = a + bX, where a is intercept, b is slope.',
                  example: 'Height vs weight: weight = -100 + 4×height. Each inch increase predicts 4 pounds increase.'
                }
              ],
              examples: [
                {
                  title: 'Correlation vs Causation',
                  solution: 'Correlation doesn\'t imply causation - ice cream sales and drowning correlate due to temperature.'
                }
              ],
              exercises: [
                {
                  question: 'What does regression analysis help us do?',
                  answer: 'Predict future values and understand relationships between variables'
                }
              ],
              onlineResources: [
                {
                  title: 'Regression Tools',
                  url: 'https://www.statsmodels.org',
                  type: 'simulation',
                  description: 'Interactive regression analysis tools'
                }
              ]
            }
          },
          {
            id: 'o-stats-bayesian',
            title: 'Bayesian Statistics',
            description: 'Probability with prior information updating',
            difficulty: 'Advanced',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'Bayes\' Theorem',
                  explanation: 'P(A|B) = P(B|A) × P(A) / P(B). Updating beliefs with new evidence.',
                  example: 'Medical test: 1% disease prevalence, 99% test accuracy. Positive test: probability of actually having disease is much lower than 99%.'
                }
              ],
              examples: [
                {
                  title: 'Machine Learning',
                  solution: 'Bayesian methods used in spam filters, recommendation systems, and A/B testing.'
                }
              ],
              exercises: [
                {
                  question: 'What is Bayes\' theorem used for?',
                  answer: 'Updating probabilities based on new evidence'
                }
              ],
              onlineResources: [
                {
                  title: 'Bayesian Statistics',
                  url: 'https://www.bayesian.org',
                  type: 'article',
                  description: 'Bayesian statistics resources and tutorials'
                }
              ]
            }
          },
          {
            id: 'o-stats-sampling',
            title: 'Sampling Methods',
            description: 'How to collect representative data',
            difficulty: 'Intermediate',
            duration: '80 minutes',
            content: {
              concepts: [
                {
                  title: 'Random Sampling',
                  explanation: 'Each member of population has equal chance of selection. Reduces bias.',
                  example: 'Survey 1000 random voters from city of 100,000 to predict election outcome.'
                }
              ],
              examples: [
                {
                  title: 'Sample Size',
                  solution: 'Larger samples give more accurate results but cost more time and money.'
                }
              ],
              exercises: [
                {
                  question: 'Why is random sampling important?',
                  answer: 'It reduces selection bias and makes sample representative'
                }
              ],
              onlineResources: [
                {
                  title: 'Sampling Methods',
                  url: 'https://www.samplingmethods.org',
                  type: 'article',
                  description: 'Comprehensive sampling techniques and best practices'
                }
              ]
            }
          },
          {
            id: 'o-stats-experimental',
            title: 'Experimental Design',
            description: 'Planning and conducting scientific experiments',
            difficulty: 'Advanced',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'Control Groups',
                  explanation: 'Experimental group receives treatment, control group doesn\'. Isolates treatment effect.',
                  example: 'Drug trial: 500 get new drug, 500 get placebo. Compare outcomes.'
                }
              ],
              examples: [
                {
                  title: 'Randomization',
                  solution: 'Random assignment to groups prevents selection bias and confounding variables.'
                }
              ],
              exercises: [
                {
                  question: 'What is the purpose of a control group?',
                  answer: 'To provide baseline comparison for measuring treatment effects'
                }
              ],
              onlineResources: [
                {
                  title: 'Experimental Design',
                  url: 'https://www.experimentaldesign.org',
                  type: 'article',
                  description: 'Resources for planning and analyzing experiments'
                }
              ]
            }
          },
          {
            id: 'o-stats-time-series',
            title: 'Time Series Analysis',
            description: 'Analyzing data over time periods',
            difficulty: 'Advanced',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'Trends and Seasonality',
                  explanation: 'Time series data shows patterns over time: trends (long-term direction), seasonality (regular patterns).',
                  example: 'Ice cream sales: trend upward (growing business), seasonal (higher in summer, lower in winter).'
                }
              ],
              examples: [
                {
                  title: 'Stock Market Analysis',
                  solution: 'Time series analysis used to predict stock prices and identify market cycles.'
                }
              ],
              exercises: [
                {
                  question: 'What are the components of time series analysis?',
                  answer: 'Trend, seasonality, cycles, and random variation'
                }
              ],
              onlineResources: [
                {
                  title: 'Time Series Resources',
                  url: 'https://www.otexts.org/fpp-3/',
                  type: 'article',
                  description: 'Forecasting principles and time series analysis'
                }
              ]
            }
          },
          {
            id: 'o-stats-multivariate',
            title: 'Multivariate Statistics',
            description: 'Analyzing multiple variables simultaneously',
            difficulty: 'Advanced',
            duration: '95 minutes',
            content: {
              concepts: [
                {
                  title: 'Multiple Regression',
                  explanation: 'Y = a + b₁X₁ + b₂X₂ + ... + bₙXₙ. Multiple factors influence outcome.',
                  example: 'House price prediction: price = intercept + 50×sqft + 1000×bedrooms + 500×bathrooms.'
                }
              ],
              examples: [
                {
                  title: 'Factor Analysis',
                  solution: 'Reducing many variables to fewer underlying factors for pattern identification.'
                }
              ],
              exercises: [
                {
                  question: 'What is multiple regression used for?',
                  answer: 'Modeling relationships with multiple independent variables'
                }
              ],
              onlineResources: [
                {
                  title: 'Multivariate Analysis',
                  url: 'https://www.multivariate.org',
                  type: 'article',
                  description: 'Resources for multivariate statistical analysis'
                }
              ]
            }
          },
          {
            id: 'o-stats-nonparametric',
            title: 'Nonparametric Statistics',
            description: 'Analysis without distribution assumptions',
            difficulty: 'Advanced',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'Distribution-Free Tests',
                  explanation: 'Statistical tests that don\'t assume normal distribution. Useful for small samples or non-normal data.',
                  example: 'Wilcoxon rank-sum test compares medians without assuming normal distribution.'
                }
              ],
              examples: [
                {
                  title: 'Rank-Based Methods',
                  solution: 'Using data ranks instead of values makes tests robust to outliers.'
                }
              ],
              exercises: [
                {
                  question: 'When are nonparametric tests preferred?',
                  answer: 'When data doesn\'t meet normal distribution assumptions'
                }
              ],
              onlineResources: [
                {
                  title: 'Nonparametric Statistics',
                  url: 'https://www.statsoft.org',
                  type: 'article',
                  description: 'Comprehensive nonparametric methods guide'
                }
              ]
            }
          },
          {
            id: 'o-stats-data-science',
            title: 'Statistics in Data Science',
            description: 'Statistical methods for big data and machine learning',
            difficulty: 'Advanced',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'Big Data Analytics',
                  explanation: 'Statistical methods adapted for massive datasets. Traditional tests may not work with huge samples.',
                  example: 'A/B testing with millions of users requires specialized statistical approaches.'
                }
              ],
              examples: [
                {
                  title: 'Predictive Modeling',
                  solution: 'Using historical data to build statistical models for future predictions.'
                }
              ],
              exercises: [
                {
                  question: 'What challenges does big data present for traditional statistics?',
                  answer: 'Volume, velocity, variety, and veracity challenges'
                }
              ],
              onlineResources: [
                {
                  title: 'Data Science Statistics',
                  url: 'https://www.kaggle.com',
                  type: 'practice',
                  description: 'Data science competitions and datasets'
                }
              ]
            }
          }
        ]
      }
    ]
  },`;

// Insert the new subjects after the biology subject
const updatedData = curriculumData.replace(
  '        ]\n      },\n      {\n        id: \'o-biology\',',
  newSubjects + '        ]\n      },\n      {\n        id: \'o-biology\','
);

// Write the updated curriculum data
fs.writeFileSync('src/lib/curriculum-data.ts', updatedData);

console.log('New subjects added successfully!');