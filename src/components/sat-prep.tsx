'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  BookOpen, 
  Calculator, 
  Target, 
  Award, 
  TrendingUp, 
  Clock, 
  Calendar, 
  BarChart3, 
  CheckCircle, 
  AlertCircle, 
  Play, 
  Download,
  Timer,
  Star,
  Brain,
  FileText,
  Trophy,
  Zap
} from 'lucide-react'

interface SATScore {
  readingWriting: number
  math: number
  total: number
  date: string
}

interface PracticeTest {
  id: string
  title: string
  type: 'diagnostic' | 'full' | 'section'
  duration: string
  questions: number
  completed: boolean
  score?: SATScore
}

interface StudyPlan {
  week: number
  focus: string[]
  tasks: string[]
  completed: boolean
}

interface WeeklyQuiz {
  id: string
  title: string
  subject: string
  questions: number
  duration: string
  completed: boolean
  score?: number
}

interface SATPrepProps {
  subjectId: string
  subjectName: string
}

export default function SATPrep({ subjectId, subjectName }: SATPrepProps) {
  const [activeTab, setActiveTab] = useState('overview')
  const [currentScore, setCurrentScore] = useState<SATScore>({
    readingWriting: 650,
    math: 680,
    total: 1330,
    date: new Date().toISOString()
  })
  
  const [targetScore, setTargetScore] = useState<SATScore>({
    readingWriting: 750,
    math: 780,
    total: 1530,
    date: ''
  })

  const [practiceTests] = useState<PracticeTest[]>([
    {
      id: 'diagnostic-1',
      title: 'Diagnostic Practice Test',
      type: 'diagnostic',
      duration: '2h 14m',
      questions: 98,
      completed: true,
      score: { readingWriting: 650, math: 680, total: 1330, date: '2024-01-15' }
    },
    {
      id: 'practice-1',
      title: 'Full-Length Practice Test 1',
      type: 'full',
      duration: '2h 14m',
      questions: 98,
      completed: false
    },
    {
      id: 'reading-1',
      title: 'Reading & Writing Section Practice',
      type: 'section',
      duration: '1h 4m',
      questions: 54,
      completed: true,
      score: { readingWriting: 680, math: 0, total: 680, date: '2024-01-20' }
    },
    {
      id: 'math-1',
      title: 'Math Section Practice',
      type: 'section',
      duration: '1h 10m',
      questions: 44,
      completed: false
    }
  ])

  const [studyPlan] = useState<StudyPlan[]>([
    {
      week: 1,
      focus: ['Reading Comprehension', 'Algebra Basics'],
      tasks: [
        'Complete Reading Comprehension Strategies lesson',
        'Practice 20 algebra problems',
        'Take vocabulary quiz',
        'Review error patterns'
      ],
      completed: true
    },
    {
      week: 2,
      focus: ['Grammar', 'Geometry'],
      tasks: [
        'Study grammar rules and punctuation',
        'Complete geometry practice set',
        'Take timed reading section',
        'Review weak areas'
      ],
      completed: false
    },
    {
      week: 3,
      focus: ['Advanced Math', 'Writing Analysis'],
      tasks: [
        'Practice quadratic equations',
        'Study rhetorical analysis',
        'Take full practice test',
        'Analyze mistakes'
      ],
      completed: false
    },
    {
      week: 4,
      focus: ['Test Strategy', 'Review'],
      tasks: [
        'Practice time management',
        'Review all concepts',
        'Take final practice test',
        'Prepare for test day'
      ],
      completed: false
    }
  ])

  const [weeklyQuizzes] = useState<WeeklyQuiz[]>([
    {
      id: 'quiz-1',
      title: 'Reading Comprehension Quiz',
      subject: 'Reading & Writing',
      questions: 10,
      duration: '15m',
      completed: true,
      score: 85
    },
    {
      id: 'quiz-2',
      title: 'Algebra Problem Solving',
      subject: 'Math',
      questions: 15,
      duration: '20m',
      completed: true,
      score: 92
    },
    {
      id: 'quiz-3',
      title: 'Grammar and Punctuation',
      subject: 'Reading & Writing',
      questions: 12,
      duration: '18m',
      completed: false
    },
    {
      id: 'quiz-4',
      title: 'Geometry and Trigonometry',
      subject: 'Math',
      questions: 10,
      duration: '25m',
      completed: false
    }
  ])

  const calculateProjectedScore = () => {
    const completedTests = practiceTests.filter(test => test.completed && test.score)
    if (completedTests.length === 0) return currentScore
    
    const avgReadingWriting = completedTests.reduce((sum, test) => sum + test.score!.readingWriting, 0) / completedTests.length
    const avgMath = completedTests.reduce((sum, test) => sum + test.score!.math, 0) / completedTests.length
    
    const improvementFactor = 1.1 // Assume 10% improvement with continued practice
    const projectedReadingWriting = Math.min(800, Math.round(avgReadingWriting * improvementFactor))
    const projectedMath = Math.min(800, Math.round(avgMath * improvementFactor))
    
    return {
      readingWriting: projectedReadingWriting,
      math: projectedMath,
      total: projectedReadingWriting + projectedMath,
      date: new Date().toISOString()
    }
  }

  const projectedScore = calculateProjectedScore()
  const progressPercentage = Math.round((currentScore.total / 1600) * 100)
  const targetProgressPercentage = Math.round((targetScore.total / 1600) * 100)

  const handleStartTest = (testId: string) => {
    // In a real app, this would navigate to the test interface
    console.log(`Starting test: ${testId}`)
  }

  const handleStartQuiz = (quizId: string) => {
    // In a real app, this would navigate to the quiz interface
    console.log(`Starting quiz: ${quizId}`)
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">SAT Preparation Center</h1>
        <p className="text-gray-600">Comprehensive SAT prep with practice tests, study plans, and progress tracking</p>
      </div>

      {/* Score Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Current Score</p>
                <p className="text-3xl font-bold">{currentScore.total}</p>
                <p className="text-blue-100 text-xs mt-1">
                  RW: {currentScore.readingWriting} | Math: {currentScore.math}
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <BarChart3 className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4">
              <Progress value={progressPercentage} className="h-2 bg-white/30" />
              <p className="text-blue-100 text-xs mt-1">{progressPercentage}% of perfect score</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Target Score</p>
                <p className="text-3xl font-bold">{targetScore.total}</p>
                <p className="text-green-100 text-xs mt-1">
                  RW: {targetScore.readingWriting} | Math: {targetScore.math}
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <Target className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4">
              <Progress value={targetProgressPercentage} className="h-2 bg-white/30" />
              <p className="text-green-100 text-xs mt-1">{targetProgressPercentage}% of perfect score</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Projected Score</p>
                <p className="text-3xl font-bold">{projectedScore.total}</p>
                <p className="text-purple-100 text-xs mt-1">
                  RW: {projectedScore.readingWriting} | Math: {projectedScore.math}
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-purple-100 text-xs">
                <Zap className="w-3 h-3 mr-1" />
                Based on practice test trends
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="practice">Practice Tests</TabsTrigger>
          <TabsTrigger value="study-plan">Study Plan</TabsTrigger>
          <TabsTrigger value="quizzes">Weekly Quizzes</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-blue-600" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Practice Tests Completed</span>
                  <Badge variant="secondary">{practiceTests.filter(t => t.completed).length}/{practiceTests.length}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Weekly Quizzes Completed</span>
                  <Badge variant="secondary">{weeklyQuizzes.filter(q => q.completed).length}/{weeklyQuizzes.length}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Study Plan Progress</span>
                  <Badge variant="secondary">{studyPlan.filter(w => w.completed).length}/{studyPlan.length} weeks</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Average Quiz Score</span>
                  <Badge variant="secondary">
                    {weeklyQuizzes.filter(q => q.completed && q.score).reduce((sum, q) => sum + q.score!, 0) / 
                     weeklyQuizzes.filter(q => q.completed && q.score).length || 0}%
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-green-600" />
                  Recommended Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Daily: 30-45 minutes of practice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Weekly: 1 practice test + 2 quizzes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Monthly: Full-length practice test</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Review: Analyze mistakes weekly</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="practice" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceTests.map((test) => (
              <Card key={test.id} className={`${test.completed ? 'border-green-200 bg-green-50' : ''}`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-blue-600" />
                      {test.title}
                    </div>
                    {test.completed && <CheckCircle className="w-5 h-5 text-green-600" />}
                  </CardTitle>
                  <CardDescription>
                    {test.type === 'diagnostic' && 'Initial assessment to identify strengths and weaknesses'}
                    {test.type === 'full' && 'Complete SAT simulation with all sections'}
                    {test.type === 'section' && 'Focused practice on specific sections'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {test.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {test.questions} questions
                    </div>
                  </div>
                  
                  {test.completed && test.score && (
                    <div className="bg-white p-3 rounded-lg border">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Score:</span>
                        <span className="text-lg font-bold text-blue-600">{test.score.total}</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        RW: {test.score.readingWriting} | Math: {test.score.math}
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    className="w-full" 
                    onClick={() => handleStartTest(test.id)}
                    disabled={test.completed}
                  >
                    {test.completed ? (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Review Results
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Start Test
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="study-plan" className="space-y-6">
          <ScrollArea className="h-[600px]">
            <div className="space-y-4">
              {studyPlan.map((week, index) => (
                <Card key={week.week} className={`${week.completed ? 'border-green-200 bg-green-50' : ''}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                        Week {week.week}
                      </div>
                      {week.completed && <CheckCircle className="w-5 h-5 text-green-600" />}
                    </CardTitle>
                    <CardDescription>
                      Focus: {week.focus.join(', ')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      {week.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${week.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span className="text-sm">{task}</span>
                        </div>
                      ))}
                    </div>
                    {!week.completed && (
                      <Button size="sm" className="w-full mt-4">
                        <Play className="w-4 h-4 mr-2" />
                        Start Week {week.week}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="quizzes" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeklyQuizzes.map((quiz) => (
              <Card key={quiz.id} className={`${quiz.completed ? 'border-green-200 bg-green-50' : ''}`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-purple-600" />
                      {quiz.title}
                    </div>
                    {quiz.completed && <Star className="w-5 h-5 text-yellow-500" />}
                  </CardTitle>
                  <CardDescription>
                    Subject: {quiz.subject}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Timer className="w-4 h-4 mr-1" />
                      {quiz.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {quiz.questions} questions
                    </div>
                  </div>
                  
                  {quiz.completed && quiz.score !== undefined && (
                    <div className="bg-white p-3 rounded-lg border">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Score:</span>
                        <span className={`text-lg font-bold ${quiz.score >= 80 ? 'text-green-600' : quiz.score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {quiz.score}%
                        </span>
                      </div>
                      <Progress value={quiz.score} className="h-2 mt-2" />
                    </div>
                  )}
                  
                  <Button 
                    className="w-full" 
                    onClick={() => handleStartQuiz(quiz.id)}
                    disabled={quiz.completed}
                  >
                    {quiz.completed ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Completed
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Start Quiz
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Score Improvement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Reading & Writing</span>
                      <span className="font-medium">{currentScore.readingWriting} → {projectedScore.readingWriting}</span>
                    </div>
                    <Progress value={(currentScore.readingWriting / 800) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Math</span>
                      <span className="font-medium">{currentScore.math} → {projectedScore.math}</span>
                    </div>
                    <Progress value={(currentScore.math / 800) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Total Score</span>
                      <span className="font-medium">{currentScore.total} → {projectedScore.total}</span>
                    </div>
                    <Progress value={(currentScore.total / 1600) * 100} className="h-2" />
                  </div>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center text-blue-800 text-sm">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Keep practicing to reach your target score!
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-600" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">First Practice Test</p>
                    <p className="text-xs text-gray-600">Completed diagnostic test</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Week Warrior</p>
                    <p className="text-xs text-gray-600">Completed first study week</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Star className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Quiz Master</p>
                    <p className="text-xs text-gray-600">Scored 85%+ on quizzes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}