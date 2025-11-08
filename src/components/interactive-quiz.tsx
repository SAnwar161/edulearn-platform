'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft,
  Trophy,
  Target,
  Brain,
  Lightbulb
} from 'lucide-react'

interface Question {
  id: string
  question: string
  type: 'multiple-choice' | 'true-false' | 'fill-blank'
  options?: string[]
  correctAnswer: string | number
  explanation: string
  hint?: string
  difficulty: 'easy' | 'medium' | 'hard'
  points: number
}

interface QuizProps {
  title: string
  description: string
  questions: Question[]
  timeLimit?: number
  passingScore: number
  lessonId: string
  onComplete: (results: QuizResults) => void
}

interface QuizResults {
  score: number
  totalQuestions: number
  correctAnswers: number
  timeSpent: number
  passed: boolean
  answers: Array<{
    questionId: string
    userAnswer: string | number
    correct: boolean
    timeSpent: number
  }>
}

export default function InteractiveQuiz({ 
  title, 
  description, 
  questions, 
  timeLimit = 600, 
  passingScore,
  lessonId,
  onComplete 
}: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Array<{questionId: string, userAnswer: string | number, timeSpent: number}>>([])
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(timeLimit)
  const [questionStartTime, setQuestionStartTime] = useState(Date.now())
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>('')
  const [showHint, setShowHint] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !showResults) {
      handleSubmitQuiz()
    }
  }, [timeLeft, showResults])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handleNext = () => {
    if (selectedAnswer === '') return

    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000)
    const newAnswer = {
      questionId: questions[currentQuestion].id,
      userAnswer: selectedAnswer,
      timeSpent
    }

    setAnswers([...answers, newAnswer])
    setSelectedAnswer('')
    setShowHint(false)
    setIsSubmitted(false)
    setQuestionStartTime(Date.now())

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleSubmitQuiz()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      const previousAnswer = answers.find(a => a.questionId === questions[currentQuestion - 1].id)
      setSelectedAnswer(previousAnswer?.userAnswer || '')
    }
  }

  const handleSubmitQuiz = () => {
    const results = calculateResults()
    setShowResults(true)
    onComplete(results)
  }

  const calculateResults = (): QuizResults => {
    const correctAnswers = answers.filter(answer => {
      const question = questions.find(q => q.id === answer.questionId)
      return answer.userAnswer === question?.correctAnswer
    }).length

    const score = Math.round((correctAnswers / questions.length) * 100)
    const totalTimeSpent = answers.reduce((total, answer) => total + answer.timeSpent, 0)

    return {
      score,
      totalQuestions: questions.length,
      correctAnswers,
      timeSpent: totalTimeSpent,
      passed: score >= passingScore,
      answers: answers.map(answer => {
        const question = questions.find(q => q.id === answer.questionId)
        return {
          ...answer,
          correct: answer.userAnswer === question?.correctAnswer
        }
      })
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setTimeLeft(timeLimit)
    setSelectedAnswer('')
    setShowHint(false)
    setIsSubmitted(false)
    setQuestionStartTime(Date.now())
  }

  if (showResults) {
    const results = calculateResults()
    
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              {results.passed ? (
                <Trophy className="w-10 h-10 text-blue-600" />
              ) : (
                <Target className="w-10 h-10 text-orange-600" />
              )}
            </div>
            <CardTitle className="text-2xl">
              {results.passed ? 'Congratulations!' : 'Keep Learning!'}
            </CardTitle>
            <CardDescription>
              {results.passed 
                ? `You passed with a score of ${results.score}%` 
                : `You scored ${results.score}%. Keep practicing to reach ${passingScore}%`
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Score Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{results.score}%</div>
                <div className="text-sm text-gray-600">Score</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{results.correctAnswers}</div>
                <div className="text-sm text-gray-600">Correct</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{results.timeSpent}s</div>
                <div className="text-sm text-gray-600">Time</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {answers.reduce((sum, a) => sum + (questions.find(q => q.id === a.questionId)?.points || 0), 0)}
                </div>
                <div className="text-sm text-gray-600">Points</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Your Score</span>
                <span>{results.score}% / {passingScore}% required</span>
              </div>
              <Progress value={results.score} className="h-3" />
            </div>

            {/* Answer Review */}
            <div>
              <h3 className="font-semibold mb-4">Answer Review</h3>
              <div className="space-y-3">
                {questions.map((question, index) => {
                  const userAnswer = answers.find(a => a.questionId === question.id)
                  const isCorrect = userAnswer?.userAnswer === question.correctAnswer
                  
                  return (
                    <div key={question.id} className="p-4 border rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isCorrect ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {isCorrect ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium mb-2">{question.question}</p>
                          <div className="text-sm space-y-1">
                            <p><span className="font-medium">Your answer:</span> {userAnswer?.userAnswer}</p>
                            {!isCorrect && (
                              <p><span className="font-medium">Correct answer:</span> {question.correctAnswer}</p>
                            )}
                            <p className="text-gray-600 italic">{question.explanation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center space-x-4">
              <Button onClick={handleRestart} variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake Quiz
              </Button>
              <Button onClick={() => window.history.back()}>
                <ArrowRight className="w-4 h-4 mr-2" />
                Continue Learning
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Quiz Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex items-center space-x-4">
            <Badge className={getDifficultyColor(question.difficulty)}>
              {question.difficulty}
            </Badge>
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-1" />
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round((currentQuestion / questions.length) * 100)}% complete</span>
          </div>
          <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />
        </div>
      </div>

      {/* Question Card */}
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Question {currentQuestion + 1}</CardTitle>
            <div className="flex items-center space-x-2">
              <Badge variant="outline">{question.points} points</Badge>
              {question.hint && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowHint(!showHint)}
                  className="text-blue-600"
                >
                  <Lightbulb className="w-4 h-4 mr-1" />
                  Hint
                </Button>
              )}
            </div>
          </div>
          <CardDescription className="text-base">
            {question.question}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Hint */}
          {showHint && question.hint && (
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <Lightbulb className="w-4 h-4 inline mr-1" />
                {question.hint}
              </p>
            </div>
          )}

          {/* Answer Options */}
          <div className="space-y-3">
            {question.type === 'multiple-choice' && question.options?.map((option, index) => (
              <label
                key={index}
                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedAnswer === option
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  className="mr-3"
                />
                <span>{option}</span>
              </label>
            ))}

            {question.type === 'true-false' && (
              <div className="grid grid-cols-2 gap-4">
                {['True', 'False'].map((option) => (
                  <label
                    key={option}
                    className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedAnswer === option
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={(e) => setSelectedAnswer(e.target.value)}
                      className="mr-2"
                    />
                    <span className="font-medium">{option}</span>
                  </label>
                ))}
              </div>
            )}

            {question.type === 'fill-blank' && (
              <input
                type="text"
                value={selectedAnswer as string}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={selectedAnswer === ''}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}