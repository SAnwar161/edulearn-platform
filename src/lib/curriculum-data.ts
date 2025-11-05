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

export const curriculumData: Curriculum[] = [
  {
    id: 'o-level',
    name: 'O Level',
    description: 'Cambridge O Level curriculum for students aged 14-16',
    ageRange: '14-16 years',
    subjects: [
      {
        id: 'o-math',
        name: 'Mathematics',
        icon: null, // Will be set in component
        color: 'bg-blue-500',
        description: 'Build strong mathematical foundations',
        lessons: [
          {
            id: 'o-math-algebra',
            title: 'Algebraic Expressions and Equations',
            description: 'Master algebraic manipulation, expression simplification, and equation solving techniques',
            difficulty: 'Beginner',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'Understanding variables and constants',
                  explanation: 'Variables are symbols (usually letters) that represent unknown or changing values. Constants are fixed numbers that never change. In algebra, we use variables to create general formulas that can work with any numbers. Variables allow us to describe patterns and relationships mathematically.',
                  example: 'In the expression 3x + 5, "x" is a variable (can be any number) and "5" is a constant (always 5). If x = 2, then 3x + 5 = 3(2) + 5 = 11. If x = -1, then 3x + 5 = 3(-1) + 5 = 2. This same expression works for infinitely many values!'
                },
                {
                  title: 'Simplifying algebraic expressions',
                  explanation: 'Simplifying means making an expression easier to understand and work with by combining like terms. Like terms have the same variables raised to the same powers. We can add or subtract coefficients of like terms. This helps us see the underlying structure of expressions.',
                  example: 'Simplify 4x + 3y - 2x + 5y + 7:\nStep 1: Group like terms: (4x - 2x) + (3y + 5y) + 7\nStep 2: Combine coefficients: (2x) + (8y) + 7\nStep 3: Final simplified form: 2x + 8y + 7\n\nWe cannot combine x and y terms because they are different variables!'
                },
                {
                  title: 'Expanding and factorizing expressions',
                  explanation: 'Expanding removes parentheses by multiplying each term inside by the term outside (distributive property). Factorizing is the reverse - finding common factors to write an expression with parentheses. These are opposite operations that help us solve equations and understand relationships.',
                  example: 'Expand: 2(x + 3) = 2x + 6\nExpand: 3(x - 2y + 4) = 3x - 6y + 12\n\nFactorize: 3x + 6 = 3(x + 2)\nFactorize: 4x² - 6x = 2x(2x - 3)\n\nNotice how factorizing undoes expansion!'
                },
                {
                  title: 'Solving linear equations',
                  explanation: 'A linear equation has variables raised to the power of 1. To solve it, we isolate the variable by performing the same operation on both sides of the equation. The goal is to get the variable by itself. This helps us find unknown values in real-world situations.',
                  example: 'Solve 2x + 5 = 13:\nStep 1: Subtract 5 from both sides: 2x = 8\nStep 2: Divide both sides by 2: x = 4\n\nCheck: 2(4) + 5 = 8 + 5 = 13 ✓\n\nMore complex: 3(x - 2) + 4 = 16\n3x - 6 + 4 = 16\n3x - 2 = 16\n3x = 18\nx = 6'
                },
                {
                  title: 'Working with inequalities',
                  explanation: 'Inequalities are similar to equations but use <, >, ≤, ≥ symbols. The solution is a range of values rather than a single value. When multiplying or dividing by a negative number, we must reverse the inequality sign!',
                  example: 'Solve 3x - 7 ≤ 14:\nStep 1: Add 7 to both sides: 3x ≤ 21\nStep 2: Divide by 3: x ≤ 7\n\nSolution: x can be any number 7 or smaller\n\nImportant: If we had -3x ≤ 21, then x ≥ -7 (sign reversed!)'
                }
              ],
              examples: [
                {
                  title: 'Real-world application: Shopping budget',
                  solution: 'Problem: You have $50 and want to buy shirts costing $12 each plus a $6 hat. How many shirts can you buy?\n\nEquation: 12x + 6 ≤ 50\n12x ≤ 44\nx ≤ 44/12\nx ≤ 3.67\n\nAnswer: You can buy at most 3 shirts (since you can\'t buy part of a shirt)'
                },
                {
                  title: 'Geometry connection: Perimeter',
                  solution: 'Problem: A rectangle has length 3x + 2 and width x - 1. If perimeter is 30 cm, find dimensions.\n\nPerimeter formula: 2(length + width) = 30\n2((3x + 2) + (x - 1)) = 30\n2(4x + 1) = 30\n8x + 2 = 30\n8x = 28\nx = 3.5\n\nLength = 3(3.5) + 2 = 12.5 cm\nWidth = 3.5 - 1 = 2.5 cm'
                },
                {
                  title: 'Number problem: Consecutive integers',
                  solution: 'Problem: Find two consecutive integers whose sum is 47.\n\nLet first integer = x\nSecond integer = x + 1\n\nEquation: x + (x + 1) = 47\n2x + 1 = 47\n2x = 46\nx = 23\n\nAnswer: 23 and 24\nCheck: 23 + 24 = 47 ✓'
                }
              ],
              exercises: [
                {
                  question: 'Simplify: 5a + 3b - 2a + b + 4',
                  answer: '3a + 4b + 4'
                },
                {
                  question: 'Expand: 4(2x - 3y + 5)',
                  answer: '8x - 12y + 20'
                },
                {
                  question: 'Factorize: 6x² - 9x',
                  answer: '3x(2x - 3)'
                },
                {
                  question: 'Solve: 5x - 3 = 17',
                  answer: 'x = 4'
                },
                {
                  question: 'Solve: 2(x + 4) = 18',
                  answer: 'x = 5'
                },
                {
                  question: 'Solve inequality: 3x + 7 > 22',
                  answer: 'x > 5'
                },
                {
                  question: 'A number is 3 less than twice another number. Their sum is 27. Find the numbers.',
                  answer: 'Let smaller number = x, larger = 2x - 3\nx + (2x - 3) = 27\n3x - 3 = 27\n3x = 30\nx = 10\nNumbers are 10 and 17'
                },
                {
                  question: 'The perimeter of a square is 44 cm. Find the length of each side.',
                  answer: '4x = 44, so x = 11 cm'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Introduction to variables',
                  url: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-variables-intro',
                  type: 'video',
                  description: 'Comprehensive video introduction to variables and algebraic thinking'
                },
                {
                  title: 'Khan Academy: Linear equations practice',
                  url: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-variables-intro/x2f8bb11595b61c86:two-step-equations/e/equations_with_variables_on_both_sides',
                  type: 'practice',
                  description: 'Interactive practice problems with instant feedback'
                },
                {
                  title: 'GeoGebra: Algebra calculator',
                  url: 'https://www.geogebra.org/algebra',
                  type: 'simulation',
                  description: 'Interactive algebra calculator for visualizing equations'
                },
                {
                  title: 'Math is Fun: Algebra',
                  url: 'https://www.mathsisfun.com/algebra/index.html',
                  type: 'article',
                  description: 'Clear explanations with examples and illustrations'
                }
              ]
            }
          },
          {
            id: 'o-math-geometry',
            title: 'Geometry: Shapes, Angles and Measurements',
            description: 'Explore geometric properties, angle relationships, area and perimeter calculations',
            difficulty: 'Intermediate',
            duration: '100 minutes',
            content: {
              concepts: [
                {
                  title: 'Properties of triangles and quadrilaterals',
                  explanation: 'Triangles are 3-sided polygons with interior angles summing to 180°. Quadrilaterals are 4-sided polygons with interior angles summing to 360°. Each type has special properties that help us solve problems. Understanding these properties is crucial for construction, engineering, and design.',
                  example: 'Triangle types:\n- Equilateral: All sides equal, all angles 60°\n- Isosceles: Two sides equal, two angles equal\n- Right triangle: One angle 90°, Pythagorean theorem applies\n- Scalene: All sides different, all angles different\n\nQuadrilateral types:\n- Rectangle: Opposite sides equal, all angles 90°\n- Square: All sides equal, all angles 90°\n- Parallelogram: Opposite sides parallel and equal\n- Trapezoid: One pair of parallel sides'
                },
                {
                  title: 'Angle calculations and relationships',
                  explanation: 'Angles are measured in degrees. We can find missing angles using properties of straight lines (180°), full circles (360°), triangles (180°), and quadrilaterals (360°). Complementary angles sum to 90°, supplementary to 180°. These relationships help in navigation, construction, and design.',
                  example: 'Find angle x in a triangle with angles 45° and 65°:\nSum of triangle angles = 180°\nx + 45° + 65° = 180°\nx = 180° - 110° = 70°\n\nParallel lines cut by transversal:\nIf one angle is 120°, corresponding angles are also 120°\nAlternate interior angles are equal\nConsecutive interior angles sum to 180°'
                },
                {
                  title: 'Area and perimeter formulas',
                  explanation: 'Perimeter is the distance around a shape (sum of all sides). Area is the space inside a shape. Each shape has specific formulas we can memorize and apply to real-world problems like flooring, fencing, painting, and land measurement.',
                  example: 'Rectangle with length 8cm and width 5cm:\nPerimeter = 2(8 + 5) = 2(13) = 26cm\nArea = length × width = 8 × 5 = 40cm²\n\nTriangle with base 6cm and height 4cm:\nArea = ½ × base × height = ½ × 6 × 4 = 12cm²\n\nCircle with radius 5cm:\nCircumference = 2πr = 2π(5) = 10π cm\nArea = πr² = π(5)² = 25π cm²'
                },
                {
                  title: 'Circle theorems and properties',
                  explanation: 'Circles have special properties: the radius is always half the diameter, all points on a circle are equidistant from the center, and the circumference ratio π = circumference/diameter is constant for all circles. Circles appear in wheels, gears, orbits, and many natural phenomena.',
                  example: 'If a circle has diameter 12cm:\n- Radius = diameter ÷ 2 = 12 ÷ 2 = 6cm\n- Circumference = π × diameter = π × 12 = 12π cm\n- Area = π × radius² = π × 6² = 36π cm²\n\nTangent to circle: Always perpendicular to radius at point of contact'
                },
                {
                  title: '3D shapes: Volume and surface area',
                  explanation: 'Three-dimensional shapes have volume (space inside) and surface area (total area of all faces). These concepts are essential for packaging, construction, manufacturing, and understanding capacity of containers.',
                  example: 'Rectangular prism: 3cm × 4cm × 5cm\nVolume = length × width × height = 3 × 4 × 5 = 60cm³\nSurface area = 2(lw + lh + wh) = 2(12 + 15 + 20) = 2(47) = 94cm²\n\nCylinder: radius 3cm, height 8cm\nVolume = πr²h = π(3)²(8) = 72π cm³\nSurface area = 2πr² + 2πrh = 2π(9) + 2π(3)(8) = 18π + 48π = 66π cm²'
                }
              ],
              examples: [
                {
                  title: 'Construction: Building a fence',
                  solution: 'Problem: A rectangular garden measures 15m by 8m. How much fencing is needed? What is the area for planting?\n\nPerimeter = 2(15 + 8) = 2(23) = 46m of fencing\nArea = 15 × 8 = 120m² for planting\n\nCost: If fencing costs $12 per meter:\nTotal cost = 46 × $12 = $552'
                },
                {
                  title: 'Design: Creating a circular patio',
                  solution: 'Problem: Design a circular patio with diameter 6m. Find the area and circumference.\n\nRadius = 6 ÷ 2 = 3m\nArea = π(3)² = 9π ≈ 28.3m²\nCircumference = 2π(3) = 6π ≈ 18.8m\n\nIf pavers cost $25 per m²:\nTotal cost = 28.3 × $25 ≈ $708'
                },
                {
                  title: 'Engineering: Water tank capacity',
                  solution: 'Problem: A cylindrical water tank has radius 2m and height 5m. Find its capacity in liters.\n\nVolume = πr²h = π(2)²(5) = 20π m³\nConvert to liters: 1m³ = 1000 liters\nCapacity = 20π × 1000 ≈ 62,832 liters'
                }
              ],
              exercises: [
                {
                  question: 'Find the area of a rectangle with length 12cm and width 7cm',
                  answer: '84 cm²'
                },
                {
                  question: 'Calculate the missing angle in a right triangle if one angle is 35°',
                  answer: '55°'
                },
                {
                  question: 'Find the perimeter of a square with side length 9m',
                  answer: '36 m'
                },
                {
                  question: 'What is the hypotenuse of a right triangle with legs 5cm and 12cm?',
                  answer: '13 cm (using Pythagorean theorem: 5² + 12² = 25 + 144 = 169, √169 = 13)'
                },
                {
                  question: 'Find the area of a triangle with base 10cm and height 6cm',
                  answer: '30 cm²'
                },
                {
                  question: 'A circle has radius 8cm. Find its circumference and area',
                  answer: 'Circumference = 16π cm, Area = 64π cm²'
                },
                {
                  question: 'Find the volume of a cube with side length 4cm',
                  answer: '64 cm³'
                },
                {
                  question: 'A parallelogram has base 15cm and height 8cm. Find its area',
                  answer: '120 cm²'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Geometry basics',
                  url: 'https://www.khanacademy.org/math/geometry-home',
                  type: 'video',
                  description: 'Complete geometry course with visual explanations'
                },
                {
                  title: 'GeoGebra: Interactive geometry',
                  url: 'https://www.geogebra.org/geometry',
                  type: 'simulation',
                  description: 'Create and manipulate geometric shapes interactively'
                },
                {
                  title: 'Math is Fun: Geometry',
                  url: 'https://www.mathsisfun.com/geometry/index.html',
                  type: 'article',
                  description: 'Clear explanations with interactive diagrams'
                },
                {
                  title: 'Khan Academy: Area and perimeter practice',
                  url: 'https://www.khanacademy.org/math/geometry-home/geometry-area-and-perimeter',
                  type: 'practice',
                  description: 'Practice problems with instant feedback'
                }
              ]
            }
          },
          {
            id: 'o-math-trigonometry',
            title: 'Introduction to Trigonometry',
            description: 'Learn about trigonometric ratios, right triangle applications, and basic trigonometric functions',
            difficulty: 'Intermediate',
            duration: '80 minutes',
            content: {
              concepts: [
                {
                  title: 'SOH CAH TOA and trigonometric ratios',
                  explanation: 'Trigonometry studies relationships between side lengths and angles in triangles. For right triangles, we use three main ratios: Sine (opposite/hypotenuse), Cosine (adjacent/hypotenuse), and Tangent (opposite/adjacent). These are essential for navigation, engineering, and physics.',
                  example: 'In a right triangle with angle 30°:\n- If hypotenuse = 10, opposite = 10 × sin(30°) = 10 × 0.5 = 5\n- If hypotenuse = 10, adjacent = 10 × cos(30°) = 10 × 0.866 = 8.66\n- If opposite = 5, adjacent = 5 ÷ tan(30°) = 5 ÷ 0.577 = 8.66'
                },
                {
                  title: 'Finding unknown sides and angles',
                  explanation: 'Using trigonometric ratios, we can find missing side lengths or angles in right triangles. This is crucial for surveying, construction, and solving real-world problems involving heights and distances.',
                  example: 'Find height of a building:\nAngle of elevation = 40°, distance from building = 50m\ntan(40°) = height/50\nheight = 50 × tan(40°) = 50 × 0.839 = 41.95m'
                },
                {
                  title: 'Special angles: 30°, 45°, 60°',
                  explanation: 'These angles have exact trigonometric values that are useful to memorize. They appear frequently in problems and have nice geometric relationships with equilateral and isosceles right triangles.',
                  example: 'Special angle values:\n30°: sin = ½, cos = √3/2, tan = 1/√3\n45°: sin = √2/2, cos = √2/2, tan = 1\n60°: sin = √3/2, cos = ½, tan = √3\n\nThese come from 30-60-90 and 45-45-90 triangles!'
                }
              ],
              examples: [
                {
                  title: 'Navigation: Finding distance',
                  solution: 'Problem: From point A, a lighthouse is at bearing 050° and 8km away. From point B (5km east of A), the bearing to the lighthouse is 320°. Find the distance from B to the lighthouse.\n\nThis creates a triangle where we can use trigonometry to find the unknown distance.'
                },
                {
                  title: 'Engineering: Ramp design',
                  solution: 'Problem: Design a wheelchair ramp with maximum angle 5°. If the ramp needs to reach a height of 0.8m, what is the minimum horizontal length?\n\ntan(5°) = 0.8/length\nlength = 0.8/tan(5°) = 0.8/0.0875 = 9.14m'
                }
              ],
              exercises: [
                {
                  question: 'In a right triangle, if opposite = 6, adjacent = 8, find the angle',
                  answer: 'tan(θ) = 6/8 = 0.75, so θ ≈ 36.9°'
                },
                {
                  question: 'Find sin(45°) exactly',
                  answer: '√2/2'
                },
                {
                  question: 'A right triangle has hypotenuse 10 and one angle 30°. Find the opposite side',
                  answer: '10 × sin(30°) = 10 × 0.5 = 5'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Trigonometry',
                  url: 'https://www.khanacademy.org/math/trigonometry',
                  type: 'video',
                  description: 'Complete trigonometry course with interactive examples'
                },
                {
                  title: 'GeoGebra: Trigonometry calculator',
                  url: 'https://www.geogebra.org/graphing',
                  type: 'simulation',
                  description: 'Interactive trigonometry visualizations'
                }
              ]
            }
          },
          {
            id: 'o-math-sequences',
            title: 'Sequences and Series',
            description: 'Understand arithmetic and geometric sequences, and learn to work with series',
            difficulty: 'Intermediate',
            duration: '75 minutes',
            content: {
              concepts: [
                {
                  title: 'Arithmetic sequences',
                  explanation: 'An arithmetic sequence has a constant difference between consecutive terms. The nth term formula is aₙ = a₁ + (n-1)d, where a₁ is the first term and d is the common difference.',
                  example: 'Sequence: 3, 7, 11, 15, 19...\nFirst term a₁ = 3\nCommon difference d = 7 - 3 = 4\n10th term: a₁₀ = 3 + (10-1)4 = 3 + 36 = 39'
                },
                {
                  title: 'Geometric sequences',
                  explanation: 'A geometric sequence has a constant ratio between consecutive terms. The nth term formula is aₙ = a₁ × r^(n-1), where r is the common ratio.',
                  example: 'Sequence: 2, 6, 18, 54, 162...\nFirst term a₁ = 2\nCommon ratio r = 6/2 = 3\n6th term: a₆ = 2 × 3^(6-1) = 2 × 243 = 486'
                },
                {
                  title: 'Arithmetic series',
                  explanation: 'The sum of an arithmetic sequence. Formula: Sₙ = n/2(a₁ + aₙ) or Sₙ = n/2(2a₁ + (n-1)d). Used for calculating totals of evenly spaced values.',
                  example: 'Sum of first 10 terms of 3, 7, 11, 15...\nS₁₀ = 10/2(3 + 39) = 5 × 42 = 210\nOr: S₁₀ = 10/2(2×3 + 9×4) = 5(6 + 36) = 5 × 42 = 210'
                }
              ],
              examples: [
                {
                  title: 'Finance: Compound interest',
                  solution: 'Problem: $1000 invested at 5% annual interest. Find amount after 4 years.\n\nThis is a geometric sequence:\nYear 1: 1000 × 1.05 = 1050\nYear 2: 1050 × 1.05 = 1102.50\nYear 3: 1102.50 × 1.05 = 1157.63\nYear 4: 1157.63 × 1.05 = 1215.51'
                }
              ],
              exercises: [
                {
                  question: 'Find the 15th term of the arithmetic sequence: 5, 8, 11, 14...',
                  answer: 'a₁₅ = 5 + (15-1)3 = 5 + 42 = 47'
                },
                {
                  question: 'Find the 8th term of the geometric sequence: 3, 6, 12, 24...',
                  answer: 'a₈ = 3 × 2^(8-1) = 3 × 128 = 384'
                },
                {
                  question: 'Sum the first 12 terms of: 2, 5, 8, 11...',
                  answer: 'S₁₂ = 12/2(2 + 35) = 6 × 37 = 222'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Sequences and series',
                  url: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:sequences',
                  type: 'video',
                  description: 'Comprehensive introduction to sequences and series'
                }
              ]
            }
          },
          {
            id: 'o-math-functions',
            title: 'Functions and Graphs',
            description: 'Learn about function notation, domain and range, and basic graphing techniques',
            difficulty: 'Intermediate',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'Function notation and evaluation',
                  explanation: 'A function assigns exactly one output to each input. We write f(x) to mean "function of x". To evaluate, substitute the input value for x.',
                  example: 'If f(x) = 2x² - 3x + 1:\nf(2) = 2(2)² - 3(2) + 1 = 8 - 6 + 1 = 3\nf(-1) = 2(-1)² - 3(-1) + 1 = 2 + 3 + 1 = 6'
                },
                {
                  title: 'Domain and range',
                  explanation: 'Domain is all possible input values (x-values). Range is all possible output values (y-values). We must exclude values that cause division by zero or square roots of negative numbers.',
                  example: 'For f(x) = √(x-3):\nDomain: x-3 ≥ 0, so x ≥ 3\nRange: √(non-negative) ≥ 0, so y ≥ 0'
                },
                {
                  title: 'Linear functions and graphing',
                  explanation: 'Linear functions have the form f(x) = mx + b, where m is slope (rise/run) and b is y-intercept. The graph is always a straight line.',
                  example: 'Graph f(x) = 2x - 1:\nSlope = 2 (rise 2, run 1)\nY-intercept = -1 (point (0,-1))\nX-intercept: 2x - 1 = 0, so x = 0.5 (point (0.5,0))'
                }
              ],
              examples: [
                {
                  title: 'Real-world: Cost function',
                  solution: 'Problem: A taxi charges $3 base fare plus $2 per mile. Write the cost function and find cost for 15 miles.\n\nC(m) = 2m + 3\nC(15) = 2(15) + 3 = 30 + 3 = $33'
                }
              ],
              exercises: [
                {
                  question: 'If f(x) = 3x - 2, find f(4)',
                  answer: 'f(4) = 3(4) - 2 = 12 - 2 = 10'
                },
                {
                  question: 'Find the domain of f(x) = 1/(x-5)',
                  answer: 'x ≠ 5 (all real numbers except 5)'
                },
                {
                  question: 'Find slope and y-intercept of y = -3x + 7',
                  answer: 'Slope = -3, Y-intercept = 7'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Functions',
                  url: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions',
                  type: 'video',
                  description: 'Complete introduction to functions and graphing'
                }
              ]
            }
          },
          {
            id: 'o-math-quadratics',
            title: 'Quadratic Equations and Graphs',
            description: 'Master quadratic expressions, solving quadratic equations, and parabola graphing',
            difficulty: 'Advanced',
            duration: '90 minutes',
            content: {
              concepts: [
                {
                  title: 'Quadratic expressions and factoring',
                  explanation: 'Quadratic expressions have the form ax² + bx + c. We can factor them using various methods: common factor, difference of squares, or trinomial factoring.',
                  example: 'Factor x² - 5x + 6:\nWe need two numbers that multiply to 6 and add to -5\n-2 and -3 work: (-2) × (-3) = 6, (-2) + (-3) = -5\nSo: x² - 5x + 6 = (x - 2)(x - 3)'
                },
                {
                  title: 'Solving quadratic equations',
                  explanation: 'Methods to solve ax² + bx + c = 0: factoring, quadratic formula x = (-b ± √(b²-4ac))/2a, or completing the square.',
                  example: 'Solve x² - 5x + 6 = 0:\nMethod 1 - Factoring: (x - 2)(x - 3) = 0\nSo x = 2 or x = 3\n\nMethod 2 - Formula: x = (5 ± √(25-24))/2 = (5 ± 1)/2\nx = 3 or x = 2'
                },
                {
                  title: 'Graphing parabolas',
                  explanation: 'Parabolas are graphs of quadratic functions. Key features: vertex (turning point), axis of symmetry, y-intercept, and x-intercepts (roots).',
                  example: 'Graph y = x² - 4x + 3:\nVertex: x = -b/2a = 4/2 = 2, y = 2² - 4(2) + 3 = -1\nVertex: (2, -1)\nY-intercept: (0, 3)\nX-intercepts: x² - 4x + 3 = 0, so (1, 0) and (3, 0)'
                }
              ],
              examples: [
                {
                  title: 'Physics: Projectile motion',
                  solution: 'Problem: A ball is thrown upward with height h = -5t² + 20t + 2 meters. Find maximum height.\n\nVertex at t = -b/2a = -20/(-10) = 2 seconds\nh(2) = -5(4) + 20(2) + 2 = -20 + 40 + 2 = 22 meters'
                }
              ],
              exercises: [
                {
                  question: 'Factor: x² - 9',
                  answer: '(x - 3)(x + 3) (difference of squares)'
                },
                {
                  question: 'Solve: x² - 7x + 12 = 0',
                  answer: '(x - 3)(x - 4) = 0, so x = 3 or x = 4'
                },
                {
                  question: 'Find vertex of y = x² + 6x + 8',
                  answer: 'x = -6/2 = -3, y = (-3)² + 6(-3) + 8 = 9 - 18 + 8 = -1\nVertex: (-3, -1)'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Quadratics',
                  url: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratics',
                  type: 'video',
                  description: 'Complete quadratic equations course'
                }
              ]
            }
          },
          {
            id: 'o-math-statistics',
            title: 'Statistics and Probability',
            description: 'Learn data analysis, measures of central tendency, and basic probability concepts',
            difficulty: 'Beginner',
            duration: '70 minutes',
            content: {
              concepts: [
                {
                  title: 'Measures of central tendency',
                  explanation: 'Mean (average), median (middle value), and mode (most frequent). Each measure has advantages depending on the data distribution.',
                  example: 'Data: 2, 3, 5, 7, 9, 9, 12\nMean: (2+3+5+7+9+9+12)/7 = 47/7 ≈ 6.71\nMedian: 7 (middle value)\nMode: 9 (appears twice)'
                },
                {
                  title: 'Range and quartiles',
                  explanation: 'Range = maximum - minimum. Quartiles divide data into four equal parts. Q1 (25th percentile), Q2 (median), Q3 (75th percentile).',
                  example: 'Data: 2, 4, 6, 8, 10, 12, 14, 16\nRange: 16 - 2 = 14\nQ1: 5, Q2: 9, Q3: 13\nInterquartile range: Q3 - Q1 = 13 - 5 = 8'
                },
                {
                  title: 'Basic probability',
                  explanation: 'Probability = (number of favorable outcomes)/(total possible outcomes). Always between 0 and 1. 0 = impossible, 1 = certain.',
                  example: 'Roll a die:\nP(rolling a 4) = 1/6\nP(rolling an even number) = 3/6 = 1/2\nP(rolling > 4) = 2/6 = 1/3'
                }
              ],
              examples: [
                {
                  title: 'Grades: Class average',
                  solution: 'Problem: Test scores: 78, 85, 92, 67, 88, 95, 72. Find mean, median, mode.\n\nMean: 577/7 ≈ 82.4\nOrdered: 67, 72, 78, 85, 88, 92, 95\nMedian: 85\nMode: No mode (all appear once)'
                }
              ],
              exercises: [
                {
                  question: 'Find mean of: 5, 8, 12, 15, 20',
                  answer: '(5+8+12+15+20)/5 = 60/5 = 12'
                },
                {
                  question: 'Find median of: 3, 7, 2, 9, 5, 11, 1',
                  answer: 'Ordered: 1, 2, 3, 5, 7, 9, 11. Median = 5'
                },
                {
                  question: 'Probability of drawing a red card from standard deck',
                  answer: '26 red cards/52 total = 1/2'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Statistics and probability',
                  url: 'https://www.khanacademy.org/math/statistics-probability',
                  type: 'video',
                  description: 'Complete statistics and probability course'
                }
              ]
            }
          },
          {
            id: 'o-math-matrices',
            title: 'Introduction to Matrices',
            description: 'Learn matrix operations, determinants, and applications of matrices',
            difficulty: 'Advanced',
            duration: '80 minutes',
            content: {
              concepts: [
                {
                  title: 'Matrix basics and notation',
                  explanation: 'A matrix is a rectangular array of numbers. We denote size as m×n (m rows, n columns). Matrices are used to organize data and solve systems of equations.',
                  example: 'Matrix A = [2 3 1; 4 0 2] is a 2×3 matrix\nElement a₁₂ = 3 (row 1, column 2)\nElement a₂₁ = 4 (row 2, column 1)'
                },
                {
                  title: 'Matrix addition and subtraction',
                  explanation: 'Add or subtract corresponding elements. Matrices must have the same dimensions.',
                  example: '[2 3; 1 4] + [1 2; 3 0] = [3 5; 4 4]\n\nSubtraction:\n[5 2; 3 1] - [2 1; 1 0] = [3 1; 2 1]'
                },
                {
                  title: 'Matrix multiplication',
                  explanation: 'Multiply rows of first matrix by columns of second matrix. Number of columns in first must equal number of rows in second.',
                  example: '[2 3] × [1 4; 2 1] = [2(1)+3(2)  2(4)+3(1)] = [8 11]\n\nCheck: 1×2 × 2×2 = 1×2 result'
                }
              ],
              examples: [
                {
                  title: 'Business: Inventory tracking',
                  solution: 'Problem: Store has 2 locations with 3 products. Use matrix to track inventory.\n\nLocation 1: [10 15 8] (products A, B, C)\nLocation 2: [12 9 14]\n\nTotal inventory = [22 24 22]'
                }
              ],
              exercises: [
                {
                  question: 'Add: [1 2; 3 4] + [5 6; 7 8]',
                  answer: '[6 8; 10 12]'
                },
                {
                  question: 'Multiply: [2 1] × [3; 4]',
                  answer: '[2(3) + 1(4)] = [10]'
                },
                {
                  question: 'Find 2A if A = [1 3; 2 0]',
                  answer: '[2 6; 4 0] (multiply each element by 2)'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Matrices',
                  url: 'https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices',
                  type: 'video',
                  description: 'Introduction to matrices and matrix operations'
                }
              ]
            }
          },
          {
            id: 'o-math-vectors',
            title: 'Vectors in 2D',
            description: 'Understand vector notation, magnitude, direction, and vector operations',
            difficulty: 'Advanced',
            duration: '75 minutes',
            content: {
              concepts: [
                {
                  title: 'Vector representation',
                  explanation: 'A vector has both magnitude (length) and direction. Can be represented as ordered pair (a,b) or as arrow from origin to point (a,b).',
                  example: 'Vector v = (3,4)\n- Tail at origin (0,0)\n- Head at point (3,4)\n- Components: 3 units right, 4 units up'
                },
                {
                  title: 'Vector magnitude and direction',
                  explanation: 'Magnitude |v| = √(a² + b²). Direction angle θ = tan⁻¹(b/a). Measures how long the vector is and where it points.',
                  example: 'Vector v = (3,4):\nMagnitude |v| = √(3² + 4²) = √25 = 5\nDirection θ = tan⁻¹(4/3) ≈ 53.1°'
                },
                {
                  title: 'Vector addition and scalar multiplication',
                  explanation: 'Add vectors component-wise: (a,b) + (c,d) = (a+c, b+d). Multiply by scalar: k(a,b) = (ka, kb).',
                  example: 'v = (2,3), w = (1,4)\nv + w = (3,7)\n2v = (4,6)\nv - w = (1,-1)'
                }
              ],
              examples: [
                {
                  title: 'Physics: Velocity vectors',
                  solution: 'Problem: Boat travels east at 10 km/h, river flows south at 3 km/h. Find resultant velocity.\n\nv_boat = (10, 0), v_river = (0, -3)\nv_resultant = (10, -3)\nSpeed = √(10² + (-3)²) = √109 ≈ 10.44 km/h'
                }
              ],
              exercises: [
                {
                  question: 'Find magnitude of vector (5,12)',
                  answer: '√(5² + 12²) = √169 = 13'
                },
                {
                  question: 'Add vectors (2,3) + (4,1)',
                  answer: '(6,4)'
                },
                {
                  question: 'Find direction of vector (1,√3)',
                  answer: 'θ = tan⁻¹(√3/1) = 60°'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Vectors',
                  url: 'https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:vectors',
                  type: 'video',
                  description: 'Comprehensive introduction to vectors'
                }
              ]
            }
          },
          {
            id: 'o-math-transformations',
            title: 'Geometric Transformations',
            description: 'Learn about translations, rotations, reflections, and dilations of geometric shapes',
            difficulty: 'Intermediate',
            duration: '70 minutes',
            content: {
              concepts: [
                {
                  title: 'Translations',
                  explanation: 'Moving a shape without rotating or reflecting. Each point moves the same distance in the same direction. Notation: T(x,y) moves shape x units right and y units up.',
                  example: 'Translate triangle with vertices (1,2), (3,4), (5,1) by T(2,-1):\nNew vertices: (3,1), (5,3), (7,0)'
                },
                {
                  title: 'Reflections',
                  explanation: 'Flipping a shape over a line (mirror line). Common reflections: over x-axis, y-axis, line y=x, or any vertical/horizontal line.',
                  example: 'Reflect point (3,4) over x-axis: (3,-4)\nReflect over y-axis: (-3,4)\nReflect over line y=x: (4,3)'
                },
                {
                  title: 'Rotations',
                  explanation: 'Turning a shape around a point. Common rotations: 90°, 180°, 270° clockwise or counterclockwise around origin.',
                  example: 'Rotate point (2,3) 90° counterclockwise around origin:\n(x,y) → (-y,x)\n(2,3) → (-3,2)'
                },
                {
                  title: 'Dilations',
                  explanation: 'Enlarging or shrinking a shape from a center point. Scale factor k > 1 enlarges, 0 < k < 1 shrinks, k < 1 reflects and enlarges.',
                  example: 'Dilate triangle with scale factor 2 from origin:\nEach point (x,y) → (2x,2y)\n(1,2) → (2,4), (3,1) → (6,2)'
                }
              ],
              examples: [
                {
                  title: 'Art: Pattern design',
                  solution: 'Problem: Create a pattern by rotating a shape 90° four times around the origin.\n\nStart with triangle at (1,1), (2,1), (1.5,2)\nAfter 90° rotation: (-1,1), (-1,2), (-2,1.5)\nContinue for complete pattern'
                }
              ],
              exercises: [
                {
                  question: 'Translate point (3,2) by T(-1,4)',
                  answer: '(2,6)'
                },
                {
                  question: 'Reflect (4,-2) over x-axis',
                  answer: '(4,2)'
                },
                {
                  question: 'Rotate (1,3) 180° around origin',
                  answer: '(-1,-3)'
                },
                {
                  question: 'Dilate (2,5) with scale factor 3 from origin',
                  answer: '(6,15)'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Transformations',
                  url: 'https://www.khanacademy.org/math/geometry/hs-geo-transformations',
                  type: 'video',
                  description: 'Interactive transformations with visual examples'
                }
              ]
            }
          },
          {
            id: 'o-math-proofs',
            title: 'Mathematical Reasoning and Proof',
            description: 'Learn logical reasoning, proof techniques, and mathematical arguments',
            difficulty: 'Advanced',
            duration: '85 minutes',
            content: {
              concepts: [
                {
                  title: 'Logical statements and quantifiers',
                  explanation: 'Mathematical statements can be true or false. Quantifiers: "for all" (∀) and "there exists" (∃). Negation reverses truth value.',
                  example: 'Statement: "All prime numbers are odd"\nThis is FALSE (2 is prime and even)\nNegation: "There exists a prime number that is even" (TRUE)'
                },
                {
                  title: 'Direct proof',
                  explanation: 'Start with given information, use logical steps and known facts to reach conclusion. Each step must be justified.',
                  example: 'Prove: If n is even, then n² is even.\nProof: n is even ⇒ n = 2k for some integer k\nn² = (2k)² = 4k² = 2(2k²)\nSince 2k² is integer, n² is even. ✓'
                },
                {
                  title: 'Proof by contradiction',
                  explanation: 'Assume opposite of what you want to prove, show this leads to contradiction, therefore original statement must be true.',
                  example: 'Prove: √2 is irrational.\nAssume √2 is rational ⇒ √2 = a/b where a,b are integers with no common factors.\n2 = a²/b² ⇒ 2b² = a²\nSo a² is even ⇒ a is even ⇒ a = 2k\n2b² = (2k)² = 4k² ⇒ b² = 2k²\nSo b² is even ⇒ b is even\nBut a and b both even contradicts "no common factors"\nTherefore √2 is irrational. ✓'
                }
              ],
              examples: [
                {
                  title: 'Number theory: Divisibility proof',
                  solution: 'Prove: If n is divisible by 3, then n² is divisible by 9.\n\nProof: n divisible by 3 ⇒ n = 3k for some integer k\nn² = (3k)² = 9k²\nSince k² is integer, n² is divisible by 9. ✓'
                }
              ],
              exercises: [
                {
                  question: 'Write the negation of "All students passed the test"',
                  answer: 'There exists a student who did not pass the test'
                },
                {
                  question: 'Prove: If n is odd, then n² is odd',
                  answer: 'n is odd ⇒ n = 2k + 1\nn² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1\nSince 2k² + 2k is integer, n² is odd. ✓'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Mathematical thinking',
                  url: 'https://www.khanacademy.org/math/math-for-fun-and-glory/a-world-of-math/mathematical-thinking',
                  type: 'video',
                  description: 'Introduction to mathematical reasoning and proof'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'o-physics',
        name: 'Physics',
        icon: null,
        color: 'bg-green-500',
        description: 'Understand the fundamental principles of physics',
        lessons: [
          {
            id: 'o-physics-forces',
            title: 'Forces and Motion',
            description: 'Learn about forces, motion, and Newton\'s laws',
            difficulty: 'Beginner',
            duration: '40 minutes',
            content: {
              concepts: [
                {
                  title: 'Types of forces',
                  explanation: 'Forces are pushes or pulls that can change an object\'s motion or shape. Common forces include gravity (pulls objects toward Earth), friction (opposes motion), normal force (support force from surfaces), and tension (pulling force in ropes or strings). Forces are measured in Newtons (N).',
                  example: 'A book on a table experiences:\n- Weight (gravity): 10N downward\n- Normal force: 10N upward\nThese forces balance, so the book doesn\'t move.\n\nIf you push the book with 5N to the right, friction might push back with 2N to the left.'
                },
                {
                  title: 'Newton\'s laws of motion',
                  explanation: 'Newton\'s three laws explain how forces affect motion:\n1st Law: Objects stay at rest or move at constant velocity unless acted upon by unbalanced force\n2nd Law: F = ma (Force = mass × acceleration)\n3rd Law: For every action, there is an equal and opposite reaction',
                  example: '2nd Law example:\nIf you push a 2kg cart with 10N of force:\nF = ma\n10N = 2kg × a\na = 10N ÷ 2kg = 5m/s²\n\n3rd Law example:\nWhen you jump, you push down on Earth, and Earth pushes up on you with equal force!'
                },
                {
                  title: 'Speed, velocity, and acceleration',
                  explanation: 'Speed is how fast something moves (distance/time). Velocity includes direction (displacement/time). Acceleration is how quickly velocity changes (Δvelocity/time). Positive acceleration means speeding up, negative means slowing down.',
                  example: 'A car accelerates from rest to 20m/s in 4 seconds:\nInitial velocity = 0m/s\nFinal velocity = 20m/s\nTime = 4s\n\nAcceleration = (20 - 0) ÷ 4 = 5m/s²\n\nThis means velocity increases by 5m/s every second.'
                },
                {
                  title: 'Force diagrams',
                  explanation: 'Force diagrams (free body diagrams) show all forces acting on an object. We draw arrows to represent forces, with length showing magnitude and direction showing the force direction. This helps visualize and calculate net force.',
                  example: 'Drawing a force diagram for a falling apple:\n1. Draw the apple as a dot\n2. Draw arrow downward labeled "Weight = 1N"\n3. Draw arrow upward labeled "Air resistance = 0.2N"\n4. Net force = 1N - 0.2N = 0.8N downward'
                }
              ],
              examples: [
                {
                  title: 'Calculating Force',
                  solution: 'Example: Calculate force needed to accelerate 2kg mass at 3m/s²\nSolution: F = ma = 2 × 3 = 6N'
                },
                {
                  title: 'Velocity Calculation',
                  solution: 'Example: Find velocity after 5 seconds starting from rest with acceleration 2m/s²\nSolution: v = u + at = 0 + 2×5 = 10m/s'
                }
              ],
              exercises: [
                {
                  question: 'What force is needed to accelerate a 5kg object at 4m/s²?',
                  answer: '20N'
                },
                {
                  question: 'A car travels 100m in 20 seconds. What is its average speed?',
                  answer: '5 m/s'
                },
                {
                  question: 'If you push a 10kg box with 50N of force, what is its acceleration?',
                  answer: '5 m/s² (F = ma, so a = F/m = 50/10 = 5)'
                },
                {
                  question: 'What is the weight of a 2kg object on Earth? (g = 9.8 m/s²)',
                  answer: '19.6 N (W = mg = 2 × 9.8 = 19.6)'
                },
                {
                  question: 'A ball is thrown up with velocity 20 m/s. How high does it go? (g = 10 m/s²)',
                  answer: '20 m (v² = u² + 2as, 0 = 400 + 2(-10)s, 20s = 400, s = 20m)'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Forces and Newton\'s laws',
                  url: 'https://www.khanacademy.org/science/physics/forces-newtons-laws',
                  type: 'video',
                  description: 'Comprehensive video series on forces and Newton\'s laws with animations'
                },
                {
                  title: 'PhET Interactive Simulations: Forces',
                  url: 'https://phet.colorado.edu/en/simulations/forces-and-motion-basics',
                  type: 'simulation',
                  description: 'Interactive simulation to explore forces, friction, and motion'
                },
                {
                  title: 'Physics Classroom: Forces',
                  url: 'https://www.physicsclassroom.com/Class/newtlaws/u2l1a.cfm',
                  type: 'article',
                  description: 'Detailed explanations with real-world examples and diagrams'
                },
                {
                  title: 'Khan Academy: Force calculations practice',
                  url: 'https://www.khanacademy.org/science/physics/forces-newtons-ltons/newtons-laws-of-motion/e/newtons-laws-of-motion',
                  type: 'practice',
                  description: 'Interactive practice problems with instant feedback'
                }
              ]
            }
          },
          {
            id: 'o-physics-energy',
            title: 'Energy and Work',
            description: 'Understand different forms of energy, work, and power',
            difficulty: 'Beginner',
            duration: '45 minutes',
            content: {
              concepts: [
                {
                  title: 'Work and energy',
                  explanation: 'Work is done when a force moves an object. Work = Force × Distance (W = Fd). Energy is the ability to do work. Both are measured in Joules (J). When work is done on an object, its energy changes.',
                  example: 'Lifting a 5kg box 2m high:\nWork = Force × Distance = Weight × Height\nWeight = mg = 5 × 9.8 = 49N\nWork = 49N × 2m = 98J\n\nThe box gains 98J of potential energy.'
                },
                {
                  title: 'Kinetic and potential energy',
                  explanation: 'Kinetic energy (KE) is energy of motion: KE = ½mv². Potential energy (PE) is stored energy due to position: PE = mgh. Energy can transform between these forms.',
                  example: 'A 2kg object moving at 3m/s:\nKE = ½(2)(3)² = 9J\n\nSame object lifted 5m high:\nPE = (2)(9.8)(5) = 98J'
                },
                {
                  title: 'Conservation of energy',
                  explanation: 'Energy cannot be created or destroyed, only transformed. Total energy in a closed system remains constant. This principle helps solve many physics problems.',
                  example: 'A roller coaster at top of hill (PE = 1000J, KE = 0J)\nAt bottom (PE = 200J, KE = 800J)\nTotal energy always = 1000J'
                },
                {
                  title: 'Power and efficiency',
                  explanation: 'Power is rate of energy transfer: Power = Energy/Time (P = E/t). Measured in Watts (W). Efficiency = Useful output/Total input × 100%.',
                  example: 'A 60W light bulb uses 60J per second.\nIf a motor uses 1000J but only does 700J of useful work:\nEfficiency = 700/1000 × 100% = 70%'
                }
              ],
              examples: [
                {
                  title: 'Falling object energy',
                  solution: 'A 1kg ball falls 10m:\nInitial PE = mgh = 1 × 9.8 × 10 = 98J\nAt bottom, all PE converts to KE = 98J\nSpeed at bottom: KE = ½mv², so v = √(2KE/m) = √(196) = 14m/s'
                }
              ],
              exercises: [
                {
                  question: 'Calculate work done pushing a box 10m with 50N force',
                  answer: '500J (W = Fd = 50 × 10 = 500J)'
                },
                {
                  question: 'Find KE of 1000kg car moving at 20m/s',
                  answer: '200,000J (KE = ½mv² = ½ × 1000 × 400 = 200,000J)'
                },
                {
                  question: 'What power is needed to lift 50kg to 10m height in 5s?',
                  answer: '980W (PE = mgh = 50 × 9.8 × 10 = 4900J, Power = 4900/5 = 980W)'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Work and energy',
                  url: 'https://www.khanacademy.org/science/physics/work-and-energy',
                  type: 'video',
                  description: 'Complete work and energy course with examples'
                }
              ]
            }
          },
          {
            id: 'o-physics-waves',
            title: 'Waves and Sound',
            description: 'Explore wave properties, sound, and the electromagnetic spectrum',
            difficulty: 'Intermediate',
            duration: '50 minutes',
            content: {
              concepts: [
                {
                  title: 'Wave properties',
                  explanation: 'Waves transfer energy without transferring matter. Key properties: wavelength (distance between peaks), frequency (waves per second), amplitude (height), and speed (v = fλ).',
                  example: 'A wave with frequency 100Hz and wavelength 2m:\nSpeed = frequency × wavelength = 100 × 2 = 200m/s'
                },
                {
                  title: 'Sound waves',
                  explanation: 'Sound is longitudinal wave that needs a medium. Speed depends on medium (fastest in solids, slowest in gases). Frequency determines pitch, amplitude determines loudness.',
                  example: 'Human hearing range: 20Hz to 20,000Hz\nMiddle C on piano: ~261Hz\nSound travels ~343m/s in air at 20°C'
                },
                {
                  title: 'Electromagnetic spectrum',
                  explanation: 'EM waves don\'t need medium. Spectrum from low to high frequency: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. All travel at speed of light.',
                  example: 'Visible light: 400-700nm wavelength\nRadio waves: >1m wavelength\nX-rays: <1nm wavelength'
                }
              ],
              examples: [
                {
                  title: 'Musical instruments',
                  solution: 'Guitar string length affects frequency:\nLonger string → lower frequency (lower pitch)\nShorter string → higher frequency (higher pitch)\nTighter string → higher frequency'
                }
              ],
              exercises: [
                {
                  question: 'Calculate speed of wave with frequency 50Hz and wavelength 4m',
                  answer: '200m/s (v = fλ = 50 × 4 = 200m/s)'
                },
                {
                  question: 'What is period of wave with frequency 100Hz?',
                  answer: '0.01s (T = 1/f = 1/100 = 0.01s)'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Waves',
                  url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound',
                  type: 'video',
                  description: 'Comprehensive waves and sound course'
                }
              ]
            }
          },
          {
            id: 'o-physics-light',
            title: 'Light and Optics',
            description: 'Study reflection, refraction, lenses, and optical instruments',
            difficulty: 'Intermediate',
            duration: '45 minutes',
            content: {
              concepts: [
                {
                  title: 'Reflection and mirrors',
                  explanation: 'Light bounces off surfaces. Law of reflection: angle of incidence = angle of reflection. Mirrors can be plane (flat) or curved (concave/convex).',
                  example: 'Concave mirror focuses parallel rays to focal point.\nConvex mirror diverges rays (used for security mirrors).'
                },
                {
                  title: 'Refraction and lenses',
                  explanation: 'Light bends when entering different media (refraction). Snell\'s law: n₁sinθ₁ = n₂sinθ₂. Lenses use refraction to focus or diverge light.',
                  example: 'Light entering water from air bends toward normal\nbecause water is optically denser (n = 1.33 vs n = 1.0).'
                },
                {
                  title: 'Optical instruments',
                  explanation: 'Cameras, telescopes, microscopes use lenses/mirrors to form images. Real images can be projected, virtual images cannot.',
                  example: 'Camera uses convex lens to form real inverted image on sensor.\nMagnifying glass creates virtual upright image.'
                }
              ],
              exercises: [
                {
                  question: 'Light hits mirror at 30° to normal. What is reflection angle?',
                  answer: '30° (angle of reflection = angle of incidence)'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Geometric optics',
                  url: 'https://www.khanacademy.org/science/physics/geometric-optics',
                  type: 'video',
                  description: 'Complete optics course with interactive simulations'
                }
              ]
            }
          },
          {
            id: 'o-physics-electricity',
            title: 'Electricity and Circuits',
            description: 'Learn about electric current, voltage, resistance, and circuit analysis',
            difficulty: 'Intermediate',
            duration: '55 minutes',
            content: {
              concepts: [
                {
                  title: 'Current, voltage, resistance',
                  explanation: 'Current (I) is flow of charge (Amperes). Voltage (V) is potential difference (Volts). Resistance (R) opposes current (Ohms). Ohm\'s law: V = IR.',
                  example: 'If 2A flows through 10Ω resistor:\nVoltage = IR = 2 × 10 = 20V'
                },
                {
                  title: 'Series and parallel circuits',
                  explanation: 'Series: same current through all components, voltages add. Parallel: same voltage across all components, currents add.',
                  example: 'Series: R_total = R₁ + R₂\nParallel: 1/R_total = 1/R₁ + 1/R₂'
                },
                {
                  title: 'Electrical power and energy',
                  explanation: 'Power = VI = I²R = V²/R (Watts). Energy = Power × Time (Joules). Electrical energy measured in kWh for billing.',
                  example: '100W bulb used 10 hours:\nEnergy = 100W × 10h = 1000Wh = 1kWh'
                }
              ],
              exercises: [
                {
                  question: 'Find current through 20Ω resistor with 10V battery',
                  answer: '0.5A (I = V/R = 10/20 = 0.5A)'
                },
                {
                  question: 'Three 10Ω resistors in series: total resistance?',
                  answer: '30Ω (R_total = 10 + 10 + 10 = 30Ω)'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Circuits',
                  url: 'https://www.khanacademy.org/science/physics/circuits',
                  type: 'video',
                  description: 'Complete circuit analysis course'
                }
              ]
            }
          },
          {
            id: 'o-physics-magnetism',
            title: 'Magnetism and Electromagnetism',
            description: 'Explore magnetic fields, electromagnets, and electromagnetic induction',
            difficulty: 'Advanced',
            duration: '50 minutes',
            content: {
              concepts: [
                {
                  title: 'Magnetic fields and poles',
                  explanation: 'Magnets have north and south poles. Like poles repel, opposite attract. Magnetic field lines show direction and strength.',
                  example: 'Earth acts as giant magnet with geographic north near magnetic south.'
                },
                {
                  title: 'Electromagnets and motors',
                  explanation: 'Current through coil creates magnetic field. Stronger with more turns, more current, iron core. Electric motors use magnetic forces.',
                  example: 'Electromagnet in doorbell, crane, speakers.'
                },
                {
                  title: 'Electromagnetic induction',
                  explanation: 'Changing magnetic field induces voltage (Faraday\'s law). Basis for generators, transformers, wireless charging.',
                  example: 'Moving magnet through coil induces current.\nAC generator uses rotating coil in magnetic field.'
                }
              ],
              exercises: [
                {
                  question: 'How to make electromagnet stronger?',
                  answer: 'More turns of wire, more current, add iron core'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Magnetism',
                  url: 'https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields',
                  type: 'video',
                  description: 'Complete magnetism and electromagnetism course'
                }
              ]
            }
          },
          {
            id: 'o-physics-heat',
            title: 'Heat and Thermodynamics',
            description: 'Study heat transfer, temperature, and laws of thermodynamics',
            difficulty: 'Intermediate',
            duration: '45 minutes',
            content: {
              concepts: [
                {
                  title: 'Temperature and heat',
                  explanation: 'Temperature measures average kinetic energy. Heat is total thermal energy transfer. Conduction, convection, radiation transfer heat.',
                  example: 'Metal conducts heat better than wood.\nHot air rises (convection).'
                },
                {
                  title: 'Laws of thermodynamics',
                  explanation: '1st: Energy conserved. 2nd: Heat flows from hot to cold, entropy increases. 3rd: Absolute zero unattainable.',
                  example: 'Engine efficiency limited by 2nd law.\nPerpetual motion impossible.'
                },
                {
                  title: 'Heat capacity and phase changes',
                  explanation: 'Specific heat capacity: energy to raise temperature. Latent heat: energy for phase change at constant temperature.',
                  example: 'Water high specific heat (4186 J/kg°C).\nIce melts at 0°C requiring latent heat.'
                }
              ],
              exercises: [
                {
                  question: 'Energy to heat 1kg water by 10°C (c = 4186 J/kg°C)',
                  answer: '41,860J (Q = mcΔT = 1 × 4186 × 10 = 41,860J)'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Thermodynamics',
                  url: 'https://www.khanacademy.org/science/physics/thermodynamics',
                  type: 'video',
                  description: 'Complete thermodynamics course'
                }
              ]
            }
          },
          {
            id: 'o-physics-nuclear',
            title: 'Nuclear Physics',
            description: 'Learn about radioactivity, nuclear reactions, and applications',
            difficulty: 'Advanced',
            duration: '40 minutes',
            content: {
              concepts: [
                {
                  title: 'Atomic nucleus and radioactivity',
                  explanation: 'Nucleus contains protons and neutrons. Radioactive decay emits alpha, beta, or gamma radiation. Half-life is time for half to decay.',
                  example: 'Carbon-14 half-life = 5730 years.\nUsed for dating archaeological samples.'
                },
                {
                  title: 'Nuclear reactions',
                  explanation: 'Fission splits large nuclei (nuclear power). Fusion joins small nuclei (sun). Both release enormous energy (E=mc²).',
                  example: 'Uranium-235 fission releases ~200MeV per atom.\nHydrogen fusion in sun releases 26.7MeV per reaction.'
                },
                {
                  title: 'Applications and safety',
                  explanation: 'Nuclear power, medicine (tracers, treatment), weapons. Radiation protection: time, distance, shielding.',
                  example: 'Nuclear medicine uses radioactive isotopes.\nLead shielding protects from radiation.'
                }
              ],
              exercises: [
                {
                  question: 'After 3 half-lives, what fraction remains?',
                  answer: '1/8 (½ × ½ × ½ = 1/8)'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Nuclear physics',
                  url: 'https://www.khanacademy.org/science/physics/nuclear-physics',
                  type: 'video',
                  description: 'Complete nuclear physics course'
                }
              ]
            }
          },
          {
            id: 'o-physics-quantum',
            title: 'Modern Physics Introduction',
            description: 'Introduction to quantum mechanics and relativity basics',
            difficulty: 'Advanced',
            duration: '60 minutes',
            content: {
              concepts: [
                {
                  title: 'Quantum concepts',
                  explanation: 'Energy quantization, wave-particle duality, uncertainty principle. Light behaves as both wave and particle.',
                  example: 'Photoelectric effect demonstrates particle nature of light.\nElectron diffraction shows wave nature of matter.'
                },
                {
                  title: 'Relativity basics',
                  explanation: 'Special relativity: time dilation, length contraction at high speeds. General relativity: gravity as curved spacetime.',
                  example: 'Time passes slower for moving objects (time dilation).\nGPS satellites correct for relativistic effects.'
                }
              ],
              exercises: [
                {
                  question: 'What does E=mc² mean?',
                  answer: 'Energy equals mass times speed of light squared. Mass can be converted to energy.'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Special relativity',
                  url: 'https://www.khanacademy.org/science/physics/special-relativity',
                  type: 'video',
                  description: 'Introduction to special relativity concepts'
                }
              ]
            }
          },
          {
            id: 'o-physics-astronomy',
            title: 'Astronomy and Space Physics',
            description: 'Explore celestial mechanics, stars, and the universe',
            difficulty: 'Beginner',
            duration: '50 minutes',
            content: {
              concepts: [
                {
                  title: 'Solar system and planets',
                  explanation: 'Planets orbit sun due to gravity. Kepler\'s laws describe planetary motion. Inner rocky planets, outer gas giants.',
                  example: 'Earth orbits at 30km/s, one year = 365.25 days.\nJupiter mass = 300× Earth mass.'
                },
                {
                  title: 'Stars and stellar evolution',
                  explanation: 'Stars born from nebulae, fuse hydrogen to helium. Main sequence, red giant, white dwarf (sun-like). Supernova for massive stars.',
                  example: 'Sun temperature: 5800K surface, 15 million K core.\nSun寿命 ~10 billion years (currently 4.6 billion years old).'
                },
                {
                  title: 'Galaxies and cosmology',
                  explanation: 'Milky Way contains 200-400 billion stars. Universe expanding (Hubble\'s law). Big Bang theory, dark matter, dark energy.',
                  example: 'Universe age ~13.8 billion years.\nGalaxy receding speed proportional to distance.'
                }
              ],
              exercises: [
                {
                  question: 'Why don\'t planets fall into the sun?',
                  answer: 'Orbital velocity creates balance between gravity pulling inward and inertia trying to move straight'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Cosmology and astronomy',
                  url: 'https://www.khanacademy.org/science/cosmology-and-astronomy',
                  type: 'video',
                  description: 'Complete astronomy course'
                }
              ]
            }
          },
          {
            id: 'o-physics-practical',
            title: 'Practical Physics and Experiments',
            description: 'Learn experimental techniques, data analysis, and laboratory skills',
            difficulty: 'Beginner',
            duration: '40 minutes',
            content: {
              concepts: [
                {
                  title: 'Measurements and uncertainty',
                  explanation: 'All measurements have uncertainty. Use significant figures, calculate errors, propagate uncertainties in calculations.',
                  example: 'Length measured as 12.3 ± 0.1cm.\nPercentage uncertainty = (0.1/12.3) × 100% = 0.8%.'
                },
                {
                  title: 'Graphical analysis',
                  explanation: 'Plot data to find relationships. Straight line y = mx + c. Calculate gradient, intercept. Use logarithmic plots for power relationships.',
                  example: 'Distance vs time graph: gradient = velocity.\nVelocity vs time graph: gradient = acceleration.'
                },
                {
                  title: 'Common experiments',
                  explanation: 'Pendulum period, spring constant, refractive index, resistance measurements. Control variables, repeat measurements.',
                  example: 'Pendulum: T = 2π√(L/g).\nPlot T² vs L for straight line, gradient = 4π²/g.'
                }
              ],
              exercises: [
                {
                  question: 'Measurements: 5.2, 5.4, 5.1, 5.3, 5.2. Calculate mean and uncertainty',
                  answer: 'Mean = 5.24, uncertainty ≈ ±0.15 (range/2)'
                }
              ],
              onlineResources: [
                {
                  title: 'Practical physics experiments',
                  url: 'https://www.practicalphysics.org/',
                  type: 'article',
                  description: 'Comprehensive experimental physics resource'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'o-chemistry',
        name: 'Chemistry',
        icon: null,
        color: 'bg-purple-500',
        description: 'Explore chemical reactions and atomic structure',
        lessons: [
          {
            id: 'o-chem-atomic',
            title: 'Atomic Structure',
            description: 'Understanding atoms, elements, and the periodic table',
            difficulty: 'Beginner',
            duration: '45 minutes',
            content: {
              concepts: [
                {
                  title: 'Atomic structure and subatomic particles',
                  explanation: 'Atoms are the basic units of elements. They consist of three subatomic particles: protons (positively charged, in nucleus), neutrons (neutral, in nucleus), and electrons (negatively charged, orbiting nucleus). The number of protons determines the element.',
                  example: 'Carbon atom:\n- Protons: 6 (defines it as carbon)\n- Neutrons: 6 (most common isotope)\n- Electrons: 6 (balances the positive charge)\n\nThe 6 protons give carbon atomic number 6, making it uniquely carbon!'
                },
                {
                  title: 'The periodic table organization',
                  explanation: 'The periodic table organizes all elements by atomic number (number of protons). Elements in the same column (group) have similar properties. Rows (periods) show patterns in atomic structure. It\'s organized like a calendar of chemical behavior.',
                  example: 'Periodic table patterns:\n- Group 1: Alkali metals (very reactive, 1 valence electron)\n- Group 18: Noble gases (stable, full outer shell)\n- Period 2: Elements with 2 electron shells\n\nSodium (Na) and Potassium (K) are in the same group, so both react violently with water!'
                },
                {
                  title: 'Electron configurations',
                  explanation: 'Electrons orbit the nucleus in shells (energy levels). Each shell can hold a maximum number of electrons (2, 8, 18, 32). The arrangement of electrons determines chemical properties. We write electron configurations to show how electrons fill shells.',
                  example: 'Oxygen (atomic number 8):\nElectron configuration: 2,6\n- First shell: 2 electrons (full)\n- Second shell: 6 electrons (needs 2 more to be full)\n\nThis explains why oxygen readily forms O²⁻ ions - it wants 2 more electrons!'
                },
                {
                  title: 'Chemical bonding basics',
                  explanation: 'Atoms bond to achieve stable electron configurations (usually full outer shells). Ionic bonds: transfer electrons between atoms (metal + nonmetal). Covalent bonds: share electrons between atoms (nonmetals). The type of bond affects properties like melting point and solubility.',
                  example: 'Ionic bond: Na + Cl → NaCl\nSodium gives 1 electron to chlorine\nNa becomes Na⁺, Cl becomes Cl⁻\nOpposite charges attract → ionic bond\n\nCovalent bond: H + H → H₂\nTwo hydrogen atoms share their electrons\nBoth atoms feel like they have 2 electrons (full shell)'
                }
              ],
              examples: [
                {
                  title: 'Atomic Number',
                  solution: 'Example: Carbon has atomic number 6\nSolution: This means it has 6 protons and 6 electrons'
                },
                {
                  title: 'Electron Configuration',
                  solution: 'Example: Oxygen (atomic number 8)\nSolution: Electron configuration: 2,6 (2 in first shell, 6 in second)'
                }
              ],
              exercises: [
                {
                  question: 'How many protons does hydrogen have?',
                  answer: '1 proton'
                },
                {
                  question: 'What is the electron configuration of sodium (Na, atomic number 11)?',
                  answer: '2,8,1'
                },
                {
                  question: 'If an element has atomic number 8, what element is it?',
                  answer: 'Oxygen'
                },
                {
                  question: 'How many electrons can the second electron shell hold?',
                  answer: '8 electrons'
                },
                {
                  question: 'What is the charge of a sodium ion (Na)?',
                  answer: '+1 (it loses 1 electron)'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Atomic structure',
                  url: 'https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties',
                  type: 'video',
                  description: 'Complete series on atomic structure, electrons, and periodic table'
                },
                {
                  title: 'PhET: Build an Atom',
                  url: 'https://phet.colorado.edu/en/simulations/build-an-atom',
                  type: 'simulation',
                  description: 'Interactive simulation to build atoms and understand isotopes'
                },
                {
                  title: 'Periodic Table: Interactive version',
                  url: 'https://ptable.com/',
                  type: 'simulation',
                  description: 'Interactive periodic table with properties and trends'
                },
                {
                  title: 'Chemistry LibreTexts: Atomic Theory',
                  url: 'https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/02:_The_Atomic_Theory',
                  type: 'article',
                  description: 'Comprehensive textbook chapter on atomic theory'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'o-biology',
        name: 'Biology',
        icon: null,
        color: 'bg-emerald-500',
        description: 'Study living organisms and life processes',
        lessons: [
          {
            id: 'o-bio-cell',
            title: 'Cell Structure',
            description: 'Explore the basic unit of life - the cell',
            difficulty: 'Beginner',
            duration: '50 minutes',
            content: {
              concepts: [
                {
                  title: 'Cell theory and types of cells',
                  explanation: 'Cell theory states: all living things are made of cells, cells are the basic units of life, and all cells come from pre-existing cells. There are two main types: prokaryotic (no nucleus, like bacteria) and eukaryotic (with nucleus, like plant and animal cells).',
                  example: 'Prokaryotic cell (bacteria):\n- No nucleus\n- DNA floats in cytoplasm\n- Small and simple\n\nEukaryotic cell (human):\n- Has nucleus containing DNA\n- Many organelles with specific jobs\n- Larger and more complex'
                },
                {
                  title: 'Plant and animal cell structures',
                  explanation: 'Plant and animal cells share many structures but have key differences. Both have cell membrane, cytoplasm, nucleus, and mitochondria. Plant cells additionally have cell walls (for support), chloroplasts (for photosynthesis), and large vacuoles (for storage).',
                  example: 'Comparing plant and animal cells:\nPlant cell only:\n- Cell wall (rigid support)\n- Chloroplasts (photosynthesis)\n- Large vacuole (water storage)\n\nAnimal cell only:\n- Centrioles (cell division)\n- Small vacuoles\n- No cell wall (flexible shape)'
                },
                {
                  title: 'Cell organelles and their functions',
                  explanation: 'Organelles are specialized structures within cells that perform specific functions, like organs in a body. Each organelle has a particular job that helps the cell survive and function properly.',
                  example: 'Key organelles and their jobs:\n- Nucleus: Control center, contains DNA\n- Mitochondria: Powerhouse, produces energy (ATP)\n- Ribosomes: Protein factories\n- Endoplasmic reticulum: Transport network\n- Golgi apparatus: Package and ship proteins\n- Lysosomes: Recycling center (break down waste)'
                },
                {
                  title: 'Cell processes and division',
                  explanation: 'Cells perform essential processes like respiration (making energy), protein synthesis, and division. Cell division (mitosis) allows growth, repair, and reproduction. During mitosis, one cell divides to produce two identical daughter cells.',
                  example: 'Mitosis (cell division) stages:\n1. Prophase: Chromosomes condense\n2. Metaphase: Chromosomes line up in middle\n3. Anaphase: Chromosomes separate to opposite sides\n4. Telophase: Two nuclei form\n\nResult: One cell → Two identical cells\nThis is how you grow and heal wounds!'
                }
              ],
              examples: [
                {
                  title: 'Cell Organelles',
                  solution: 'Example: Mitochondria function\nSolution: Powerhouse of the cell, produces ATP through cellular respiration'
                },
                {
                  title: 'Plant vs Animal Cells',
                  solution: 'Example: Key differences\nSolution: Plant cells have cell walls and chloroplasts, animal cells do not'
                }
              ],
              exercises: [
                {
                  question: 'What is the function of the nucleus in a cell?',
                  answer: 'Controls cell activities and contains genetic material'
                },
                {
                  question: 'Name one organelle found in plant cells but not in animal cells',
                  answer: 'Chloroplast or Cell wall'
                },
                {
                  question: 'What is the main function of mitochondria?',
                  answer: 'Powerhouse of the cell - produces ATP energy through cellular respiration'
                },
                {
                  question: 'What is the difference between prokaryotic and eukaryotic cells?',
                  answer: 'Prokaryotic cells have no nucleus, eukaryotic cells have a nucleus and membrane-bound organelles'
                },
                {
                  question: 'What is the result of mitosis?',
                  answer: 'Two identical daughter cells'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Cell structure',
                  url: 'https://www.khanacademy.org/science/biology/structure-of-a-cell',
                  type: 'video',
                  description: 'Comprehensive introduction to cell structure and organelles'
                },
                {
                  title: 'PhET: Cell Explorer',
                  url: 'https://phet.colorado.edu/en/simulations/cell-structure',
                  type: 'simulation',
                  description: 'Interactive exploration of animal and plant cell structures'
                },
                {
                  title: 'BioNinja: Cell Biology',
                  url: 'https://ib.bioninja.com.au/standard-level/topic-1-cell-biology/',
                  type: 'article',
                  description: 'Clear, concise explanations with diagrams and quizzes'
                },
                {
                  title: 'Cells Alive! Cell Models',
                  url: 'https://www.cellsalive.com/cells/cell_model.htm',
                  type: 'simulation',
                  description: 'Interactive cell models with detailed organelle information'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'a-level',
    name: 'A Level',
    description: 'Cambridge A Level curriculum for students aged 16-19',
    ageRange: '16-19 years',
    subjects: [
      {
        id: 'a-math',
        name: 'Mathematics',
        icon: null,
        color: 'bg-indigo-500',
        description: 'Advanced mathematical concepts and applications',
        lessons: [
          {
            id: 'a-math-calculus',
            title: 'Calculus',
            description: 'Differential and integral calculus fundamentals',
            difficulty: 'Advanced',
            duration: '60 minutes',
            content: {
              concepts: [
                {
                  title: 'Derivatives and differentiation rules',
                  explanation: 'The derivative measures the rate of change of a function at any point - it\'s like finding the slope of a curve at a specific point. Differentiation rules help us find derivatives quickly without using the limit definition each time.',
                  example: 'Power rule: If f(x) = xⁿ, then f\'(x) = nxⁿ⁻¹\n\nExample: f(x) = 3x² + 2x - 1\nf\'(x) = 3(2x²⁻¹) + 2(1x¹⁻¹) - 0\nf\'(x) = 6x + 2\n\nThis tells us the slope at any point x!'
                },
                {
                  title: 'Integration techniques',
                  explanation: 'Integration is the reverse of differentiation - it finds the area under a curve. The indefinite integral gives us a family of functions, while the definite integral gives us a specific area value. We add "+ C" because constants disappear during differentiation.',
                  example: 'Basic integration: ∫xⁿ dx = (xⁿ⁺¹)/(n+1) + C\n\nIntegrate ∫(2x + 3)dx:\n= ∫2x dx + ∫3 dx\n= 2(x²/2) + 3x + C\n= x² + 3x + C\n\nCheck: derivative of x² + 3x + C = 2x + 3 ✓'
                },
                {
                  title: 'Applications of calculus',
                  explanation: 'Calculus helps us solve real-world problems involving rates of change and optimization. We can find maximum/minimum values, calculate areas and volumes, analyze motion, and solve problems in physics, economics, and engineering.',
                  example: 'Optimization problem:\nA farmer has 100m of fencing to make a rectangular pen. What dimensions give maximum area?\n\nLet length = x, width = (100-2x)/2 = 50-x\nArea = x(50-x) = 50x - x²\ndA/dx = 50 - 2x\nSet to 0: 50 - 2x = 0 → x = 25m\nSo: 25m × 25m square gives maximum area!'
                },
                {
                  title: 'Differential equations',
                  explanation: 'Differential equations contain derivatives and describe how quantities change over time. They model everything from population growth to radioactive decay. Solving them means finding the original function that produces the given rate of change.',
                  example: 'Simple differential equation:\ndy/dx = 2x\nThis means "the rate of change of y is 2x"\n\nIntegrate both sides:\ny = ∫2x dx = x² + C\n\nIf we know y(0) = 3, then 3 = 0 + C, so C = 3\nFinal solution: y = x² + 3'
                }
              ],
              examples: [
                {
                  title: 'Finding Derivatives',
                  solution: 'Example: Find derivative of f(x) = 3x² + 2x - 1\nSolution: f\'(x) = 6x + 2'
                },
                {
                  title: 'Integration',
                  solution: 'Example: Integrate ∫(2x + 3)dx\nSolution: x² + 3x + C'
                }
              ],
              exercises: [
                {
                  question: 'Find the derivative of f(x) = x³ - 2x² + 5',
                  answer: '3x² - 4x'
                },
                {
                  question: 'Integrate ∫4x³ dx',
                  answer: 'x⁴ + C'
                },
                {
                  question: 'Find the derivative of f(x) = 2√x',
                  answer: '1/√x (using power rule: 2x^(1/2) → x^(-1/2))'
                },
                {
                  question: 'Find the area under y = x² from x = 0 to x = 2',
                  answer: '∫₀² x² dx = [x³/3]₀² = 8/3 square units'
                },
                {
                  question: 'Find the maximum value of f(x) = -x² + 6x + 8',
                  answer: 'Maximum at x = -b/2a = -6/(-2) = 3. f(3) = -9 + 18 + 8 = 17'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Calculus 1',
                  url: 'https://www.khanacademy.org/math/calculus-1',
                  type: 'video',
                  description: 'Complete calculus course with limits, derivatives, and integrals'
                },
                {
                  title: 'Desmos Graphing Calculator',
                  url: 'https://www.desmos.com/calculator',
                  type: 'simulation',
                  description: 'Interactive graphing calculator for visualizing functions and derivatives'
                },
                {
                  title: 'MIT OpenCourseWare: Calculus',
                  url: 'https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/',
                  type: 'video',
                  description: 'University-level calculus lectures from MIT'
                },
                {
                  title: 'Paul\'s Online Math Notes: Calculus I',
                  url: 'https://tutorial.math.lamar.edu/classes/calci/calci.aspx',
                  type: 'article',
                  description: 'Comprehensive calculus notes with examples and practice problems'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'a-physics',
        name: 'Physics',
        icon: null,
        color: 'bg-cyan-500',
        description: 'Advanced physics concepts and applications',
        lessons: [
          {
            id: 'a-physics-quantum',
            title: 'Quantum Physics',
            description: 'Introduction to quantum mechanics and atomic physics',
            difficulty: 'Advanced',
            duration: '60 minutes',
            content: {
              concepts: [
                {
                  title: 'Wave-particle duality',
                  explanation: 'Quantum physics reveals that light and matter can behave as both waves AND particles, depending on how we observe them. This isn\'t a limitation - it\'s a fundamental property of nature. The famous double-slit experiment demonstrates this paradox.',
                  example: 'Double-slit experiment:\nShoot electrons at two slits:\n- If we watch which slit they go through → they act like particles\n- If we don\'t watch → they create an interference pattern (like waves)\n\nThe act of measuring changes the behavior! This shows quantum objects exist in multiple states until observed.'
                },
                {
                  title: 'Photoelectric effect',
                  explanation: 'When light hits certain metals, electrons can be ejected. This only happens if the light frequency is above a threshold, regardless of intensity. Einstein explained this by proposing light comes in discrete packets called photons with energy E = hf.',
                  example: 'Photoelectric effect calculation:\nBlue light (f = 6×10¹⁴ Hz) hits sodium:\nE_photon = hf = 6.63×10⁻³⁴ × 6×10¹⁴ = 3.98×10⁻¹⁹ J\n\nIf work function = 3.6×10⁻¹⁹ J:\nKinetic energy = 3.98×10⁻¹⁹ - 3.6×10⁻¹⁹ = 0.38×10⁻¹⁹ J\n\nRed light (lower frequency) wouldn\'t eject any electrons!'
                },
                {
                  title: 'Atomic models and energy levels',
                  explanation: 'Electrons in atoms can only exist at specific energy levels, not anywhere in between. When electrons jump between levels, they absorb or emit photons with exact energy differences. This explains why elements have unique spectral lines like fingerprints.',
                  example: 'Hydrogen energy levels:\nE_n = -13.6/n² eV\n\nGround state (n=1): E₁ = -13.6 eV\nFirst excited (n=2): E₂ = -3.4 eV\n\nElectron jumps from n=2 to n=1:\nEnergy difference = 13.6 - 3.4 = 10.2 eV\nEmitted photon has exactly 10.2 eV energy!'
                },
                {
                  title: 'Introduction to quantum numbers',
                  explanation: 'Quantum numbers describe electron states in atoms: principal (n, energy level), angular momentum (l, subshell), magnetic (m_l, orientation), and spin (m_s, electron spin). They follow strict rules and explain the periodic table structure.',
                  example: 'Quantum numbers for a 2p electron:\nn = 2 (second energy level)\nl = 1 (p subshell, since l = 0,1,...,n-1)\nm_l = -1, 0, or +1 (three p orbitals)\nm_s = +½ or -½ (electron spin)\n\nThese four numbers uniquely describe each electron\'s state!'
                }
              ],
              examples: [
                {
                  title: 'Photoelectric Effect',
                  solution: 'Example: Calculate photon energy\nE = hf = 6.63×10⁻³⁴ × 5×10¹⁴ = 3.315×10⁻¹⁹ J'
                },
                {
                  title: 'Energy Levels',
                  solution: 'Example: Hydrogen energy levels\nE_n = -13.6/n² eV\nFor n=2: E_2 = -13.6/4 = -3.4 eV'
                }
              ],
              exercises: [
                {
                  question: 'What is the de Broglie wavelength of an electron moving at 2×10⁶ m/s?',
                  answer: 'λ = h/mv = 6.63×10⁻³⁴/(9.1×10⁻³¹ × 2×10⁶) = 3.64×10⁻¹⁰ m'
                },
                {
                  question: 'Explain wave-particle duality in simple terms',
                  answer: 'Matter and energy can exhibit both wave-like and particle-like properties depending on how they are observed'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'us-high-school',
    name: 'US High School',
    description: 'US High School curriculum for Grades 9-12',
    ageRange: '14-18 years',
    subjects: [
      {
        id: 'us-algebra',
        name: 'Algebra',
        icon: null,
        color: 'bg-orange-500',
        description: 'Comprehensive algebra curriculum',
        lessons: [
          {
            id: 'us-algebra-i',
            title: 'Algebra I',
            description: 'Foundational algebra concepts and problem-solving',
            difficulty: 'Beginner',
            duration: '55 minutes',
            content: {
              concepts: [
                {
                  title: 'Linear equations and inequalities',
                  explanation: 'Linear equations have variables raised to the power of 1 and create straight lines when graphed. We solve them by isolating the variable using inverse operations. Inequalities are similar but use <, >, ≤, ≥ and the solution is a range of values.',
                  example: 'Solve 3x - 7 = 14:\nStep 1: Add 7 to both sides: 3x = 21\nStep 2: Divide by 3: x = 7\n\nSolve 2x + 5 ≤ 13:\nStep 1: Subtract 5: 2x ≤ 8\nStep 2: Divide by 2: x ≤ 4\nSolution: x can be any number 4 or smaller!'
                },
                {
                  title: 'Systems of equations',
                  explanation: 'A system of equations has multiple equations that must be true simultaneously. The solution is the point where the graphs intersect. We can solve using substitution (solve one equation, plug into the other) or elimination (add equations to eliminate variables).',
                  example: 'System: x + y = 10, x - y = 2\n\nMethod 1 - Elimination:\nAdd the equations:\n(x + y) + (x - y) = 10 + 2\n2x = 12 → x = 6\n\nPlug back: 6 + y = 10 → y = 4\nSolution: (6, 4)\nCheck: 6 - 4 = 2 ✓'
                },
                {
                  title: 'Exponents and radicals',
                  explanation: 'Exponents show repeated multiplication. Rules: x^m × x^n = x^(m+n), (x^m)^n = x^(mn), x^(-n) = 1/x^n. Radicals (roots) are the inverse of exponents. √x means "what number squared equals x?"',
                  example: 'Exponent rules:\n2³ × 2² = 2^(3+2) = 2⁵ = 32\n(3²)³ = 3^(2×3) = 3⁶ = 729\n\nRadicals:\n√16 = 4 because 4² = 16\n∛27 = 3 because 3³ = 27\n\nSimplify √18 = √(9×2) = 3√2'
                },
                {
                  title: 'Polynomials',
                  explanation: 'Polynomials are expressions with variables and coefficients using only addition, subtraction, and multiplication. We classify them by degree (highest exponent) and number of terms. We can add, subtract, and multiply polynomials using the distributive property.',
                  example: 'Classify polynomials:\n3x + 2: linear, binomial\nx² - 4x + 7: quadratic, trinomial\n2x³ - 5x² + x - 3: cubic, polynomial\n\nMultiply: (x + 2)(x - 3)\n= x(x - 3) + 2(x - 3)\n= x² - 3x + 2x - 6\n= x² - x - 6'
                }
              ],
              examples: [
                {
                  title: 'Solving Linear Equations',
                  solution: 'Example: Solve 2x + 5 = 13\nSolution: 2x = 8, x = 4'
                },
                {
                  title: 'System of Equations',
                  solution: 'Example: Solve x + y = 10, x - y = 2\nSolution: Adding: 2x = 12, x = 6, y = 4'
                }
              ],
              exercises: [
                {
                  question: 'Solve: 3x - 7 = 14',
                  answer: 'x = 7'
                },
                {
                  question: 'Simplify: (2x)³',
                  answer: '8x³'
                },
                {
                  question: 'Solve: 2(x + 3) = 18',
                  answer: 'x = 6'
                },
                {
                  question: 'Factorize: x² - 9',
                  answer: '(x - 3)(x + 3) (difference of squares)'
                },
                {
                  question: 'Solve inequality: 4x - 5 > 15',
                  answer: 'x > 5'
                }
              ],
              onlineResources: [
                {
                  title: 'Khan Academy: Algebra Basics',
                  url: 'https://www.khanacademy.org/math/algebra-basics',
                  type: 'video',
                  description: 'Complete algebra basics course with interactive exercises'
                },
                {
                  title: 'IXL: Algebra 1 Practice',
                  url: 'https://www.ixl.com/math/algebra-1',
                  type: 'practice',
                  description: 'Adaptive practice problems with detailed explanations'
                },
                {
                  title: 'Wolfram Alpha: Algebra Calculator',
                  url: 'https://www.wolframalpha.com/calculators/equation-solver/',
                  type: 'simulation',
                  description: 'Step-by-step equation solver and calculator'
                },
                {
                  title: 'Purplemath: Algebra Lessons',
                  url: 'https://www.purplemath.com/modules/index.htm',
                  type: 'article',
                  description: 'Practical algebra lessons with worked examples'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'us-geometry',
        name: 'Geometry',
        icon: null,
        color: 'bg-pink-500',
        description: 'Geometric principles and spatial reasoning',
        lessons: [
          {
            id: 'us-geo-basics',
            title: 'Geometric Foundations',
            description: 'Basic geometric concepts and proofs',
            difficulty: 'Beginner',
            duration: '45 minutes',
            content: {
              concepts: [
                {
                  title: 'Points, lines, and planes',
                  explanation: 'These are the basic building blocks of geometry. A point has no size, just location. A line extends infinitely in both directions. A plane extends infinitely in all directions. We use these undefined terms to define all other geometric concepts.',
                  example: 'Real-world examples:\nPoint: A dot on a map (specific location)\nLine: The edge of a ruler (straight path)\nPlane: A tabletop or wall (flat surface)\n\nNotation:\nPoint A: A\nLine AB: AB or ↔AB\nPlane ABC: △ABC'
                },
                {
                  title: 'Angles and angle relationships',
                  explanation: 'An angle is formed by two rays sharing a common endpoint. We measure angles in degrees. Special relationships include complementary (sum to 90°), supplementary (sum to 180°), vertical (opposite angles when lines cross), and corresponding angles when lines are cut by a transversal.',
                  example: 'Angle relationships:\nIf angle A = 35°, then:\n- Complementary angle = 90° - 35° = 55°\n- Supplementary angle = 180° - 35° = 145°\n- Vertical angle = 35° (equal)\n\nParallel lines cut by transversal create equal corresponding angles!'
                },
                {
                  title: 'Triangles and their properties',
                  explanation: 'Triangles have 3 sides and 3 angles summing to 180°. We classify by sides (equilateral, isosceles, scalene) and angles (right, acute, obtuse). The Triangle Inequality states any side must be shorter than the sum of the other two sides.',
                  example: 'Triangle properties:\nRight triangle 3-4-5:\n3² + 4² = 5² → 9 + 16 = 25 ✓\n\nIsosceles triangle with sides 5, 5, 8:\nBase angles are equal\nAngle sum: angle + angle + vertex = 180°\n2×angle + vertex = 180°'
                },
                {
                  title: 'Introduction to geometric proofs',
                  explanation: 'Proofs use logical reasoning to show statements are always true. We start with given information, use definitions, postulates, and previously proven theorems to reach a conclusion. Two-column proofs list statements and reasons separately.',
                  example: 'Two-column proof example:\nProve: Vertical angles are equal\n\nGiven: Lines AB and CD intersect at E\nProve: ∠AEC = ∠BED\n\nStatements:              Reasons:\n1. Lines AB, CD intersect   1. Given\n2. ∠AEC + ∠AED = 180°     2. Linear pair\n3. ∠BED + ∠AED = 180°     3. Linear pair\n4. ∠AEC = ∠BED            4. Subtraction'
                }
              ],
              examples: [
                {
                  title: 'Angle Sum in Triangle',
                  solution: 'Example: Prove sum of angles in triangle is 180°\nSolution: Draw parallel line and use alternate interior angles'
                },
                {
                  title: 'Pythagorean Theorem',
                  solution: 'Example: Right triangle with legs 3 and 4\nSolution: c² = 3² + 4² = 9 + 16 = 25, so c = 5'
                }
              ],
              exercises: [
                {
                  question: 'Find the missing angle in a triangle if two angles are 45° and 65°',
                  answer: '70°'
                },
                {
                  question: 'What is the hypotenuse of a right triangle with legs 5 and 12?',
                  answer: '13'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'us-biology',
        name: 'Biology',
        icon: null,
        color: 'bg-teal-500',
        description: 'Life sciences and biological processes',
        lessons: [
          {
            id: 'us-bio-ecology',
            title: 'Ecology and Ecosystems',
            description: 'Study of organisms and their environment',
            difficulty: 'Intermediate',
            duration: '50 minutes',
            content: {
              concepts: [
                {
                  title: 'Ecosystem components and structure',
                  explanation: 'An ecosystem consists of biotic (living) and abiotic (non-living) components that interact. Biotic components include producers (plants), consumers (animals), and decomposers (bacteria, fungi). Abiotic components include sunlight, water, temperature, soil, and nutrients.',
                  example: 'Forest ecosystem components:\nBiotic:\n- Producers: Trees, shrubs, grasses\n- Consumers: Deer, rabbits, birds, insects\n- Decomposers: Mushrooms, bacteria\n\nAbiotic:\n- Sunlight (energy source)\n- Water, soil, rocks\n- Temperature, humidity, wind'
                },
                {
                  title: 'Food chains and food webs',
                  explanation: 'Food chains show energy flow from one organism to another. Food webs show interconnected food chains in an ecosystem. Energy decreases at each level due to the 10% rule - only about 10% of energy transfers between trophic levels.',
                  example: 'Simple food chain:\nSun → Grass → Rabbit → Fox\n\nFood web (more realistic):\n- Grass eaten by rabbits, deer, insects\n- Rabbits eaten by foxes, hawks\n- Insects eaten by birds, frogs\n- Shows multiple feeding relationships\n\nEnergy loss: 1000 kcal grass → 100 kcal rabbit → 10 kcal fox'
                },
                {
                  title: 'Energy flow in ecosystems',
                  explanation: 'Energy enters ecosystems through photosynthesis, flows through food chains, and exits as heat. The 10% rule means only 10% of energy is transferred between trophic levels; 90% is lost as heat during metabolism, movement, and waste production.',
                  example: 'Energy pyramid calculation:\nStarting with 10,000 kcal from plants:\nPrimary consumers (herbivores): 1,000 kcal\nSecondary consumers: 100 kcal\nTertiary consumers: 10 kcal\nTop predators: 1 kcal\n\nThis explains why there are fewer predators than prey - not enough energy supports many top predators!'
                },
                {
                  title: 'Biogeochemical cycles',
                  explanation: 'Matter cycles through ecosystems in predictable patterns. Key cycles include carbon (photosynthesis/respiration), nitrogen (fixation/nitrification/denitrification), water (evaporation/condensation/precipitation), and phosphorus (weathering/absorption/decomposition).',
                  example: 'Carbon cycle steps:\n1. Plants absorb CO₂ for photosynthesis\n2. Animals eat plants, getting carbon\n3. Both release CO₂ through respiration\n4. Decomposers break down dead organisms\n5. Fossil fuels store carbon underground\n6. Burning releases CO₂ back to atmosphere\n\nThis cycle regulates Earth\'s temperature!'
                }
              ],
              examples: [
                {
                  title: 'Energy Pyramid',
                  solution: 'Example: Energy transfer efficiency\nOnly about 10% of energy transfers between trophic levels'
                },
                {
                  title: 'Carbon Cycle',
                  solution: 'Example: Carbon movement\nAtmosphere → Plants (photosynthesis) → Animals (eating) → Atmosphere (respiration)'
                }
              ],
              exercises: [
                {
                  question: 'What are the biotic components of an ecosystem?',
                  answer: 'Living organisms like plants, animals, fungi, and bacteria'
                },
                {
                  question: 'Explain the 10% rule in energy transfer',
                  answer: 'Only about 10% of energy is transferred from one trophic level to the next, 90% is lost as heat'
                }
              ]
            }
          }
        ]
      }
    ]
  }
]