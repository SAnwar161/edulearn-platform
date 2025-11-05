'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  BookOpen, 
  Calculator, 
  Atom, 
  FlaskConical, 
  Dna, 
  ChevronRight, 
  Clock, 
  BarChart3, 
  User, 
  LogOut,
  Play,
  CheckCircle,
  Lock
} from 'lucide-react'
import { curriculumData, type Curriculum, type Subject, type Lesson } from '@/lib/curriculum-data'

// Icon mapping for subjects
const subjectIcons: Record<string, React.ReactNode> = {
  'o-math': <Calculator className="w-5 h-5" />,
  'a-math': <Calculator className="w-5 h-5" />,
  'us-algebra': <Calculator className="w-5 h-5" />,
  'o-physics': <Atom className="w-5 h-5" />,
  'a-physics': <Atom className="w-5 h-5" />,
  'o-chemistry': <FlaskConical className="w-5 h-5" />,
  'o-biology': <Dna className="w-5 h-5" />,
  'us-geometry': <BookOpen className="w-5 h-5" />,
  'us-biology': <Dna className="w-5 h-5" />,
}

export default function Home() {
  const [selectedCurriculum, setSelectedCurriculum] = useState<Curriculum>(curriculumData[0])
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [user, setUser] = useState<any>(null)
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push('/auth/signin')
    }
  }, [router])

  const handleSignOut = () => {
    localStorage.removeItem('user')
    router.push('/auth/signin')
  }

  const handleLessonClick = (lesson: Lesson) => {
    setSelectedLesson(lesson)
  }

  const handleMarkComplete = (lessonId: string) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]))
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getSubjectProgress = (subject: Subject) => {
    const totalLessons = subject.lessons.length
    const completedCount = subject.lessons.filter(lesson => completedLessons.has(lesson.id)).length
    return totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">EduLearn</h1>
                <p className="text-sm text-gray-500">Your Learning Journey</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">{user.name || user.email}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name || user.email.split('@')[0]}!
          </h2>
          <p className="text-gray-600">
            Continue your learning journey with {user.educationLevel || 'your selected'} curriculum
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Lessons</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {selectedCurriculum.subjects.reduce((acc, subject) => acc + subject.lessons.length, 0)}
                  </p>
                </div>
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600">{completedLessons.size}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Progress</p>
                  <p className="text-2xl font-bold text-indigo-600">
                    {completedLessons.size > 0 
                      ? Math.round((completedLessons.size / selectedCurriculum.subjects.reduce((acc, subject) => acc + subject.lessons.length, 0)) * 100)
                      : 0}%
                  </p>
                </div>
                <BarChart3 className="w-8 h-8 text-indigo-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Curriculum Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Curriculum</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {curriculumData.map((curriculum) => (
              <Card 
                key={curriculum.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedCurriculum.id === curriculum.id 
                    ? 'ring-2 ring-blue-500 bg-blue-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => {
                  setSelectedCurriculum(curriculum)
                  setSelectedSubject(null)
                  setSelectedLesson(null)
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {curriculum.name}
                    {selectedCurriculum.id === curriculum.id && (
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    )}
                  </CardTitle>
                  <CardDescription>{curriculum.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Age: {curriculum.ageRange}</span>
                    <span>{curriculum.subjects.length} subjects</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subjects List */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Subjects</h3>
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {selectedCurriculum.subjects.map((subject) => {
                  const Icon = subjectIcons[subject.id]
                  return (
                    <Card 
                      key={subject.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedSubject?.id === subject.id 
                          ? 'ring-2 ring-blue-500 bg-blue-50' 
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        setSelectedSubject(subject)
                        setSelectedLesson(null)
                      }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${subject.color} text-white`}>
                            {Icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{subject.name}</h4>
                            <p className="text-sm text-gray-600">{subject.description}</p>
                            <div className="mt-2">
                              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                                <span>{subject.lessons.filter(l => completedLessons.has(l.id)).length}/{subject.lessons.length} lessons</span>
                                <span>{Math.round(getSubjectProgress(subject))}%</span>
                              </div>
                              <Progress value={getSubjectProgress(subject)} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </ScrollArea>
          </div>

          {/* Lessons List */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {selectedSubject ? `${selectedSubject.name} Lessons` : 'Select a Subject'}
            </h3>
            <ScrollArea className="h-[600px]">
              {selectedSubject ? (
                <div className="space-y-4">
                  {selectedSubject.lessons.map((lesson) => (
                    <Card 
                      key={lesson.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedLesson?.id === lesson.id 
                          ? 'ring-2 ring-blue-500 bg-blue-50' 
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => handleLessonClick(lesson)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-gray-900">{lesson.title}</h4>
                              {completedLessons.has(lesson.id) && (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{lesson.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Badge className={getDifficultyColor(lesson.difficulty)}>
                                  {lesson.difficulty}
                                </Badge>
                                <div className="flex items-center text-xs text-gray-500">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {lesson.duration}
                                </div>
                              </div>
                              <Button size="sm" variant="ghost">
                                <Play className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Select a subject to view lessons</p>
                </div>
              )}
            </ScrollArea>
          </div>

          {/* Lesson Content */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {selectedLesson ? 'Lesson Content' : 'Select a Lesson'}
            </h3>
            {selectedLesson ? (
              <Card className="h-[600px] overflow-hidden">
                <CardContent className="p-6 h-full overflow-y-auto">
                  <div className="space-y-6">
                    {/* Lesson Header */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{selectedLesson.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{selectedLesson.description}</p>
                      <div className="flex items-center space-x-2">
                        <Badge className={getDifficultyColor(selectedLesson.difficulty)}>
                          {selectedLesson.difficulty}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {selectedLesson.duration}
                        </div>
                      </div>
                    </div>

                    {/* Concepts */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Key Concepts</h5>
                      <div className="space-y-4">
                        {selectedLesson.content.concepts.map((concept, index) => (
                          <Card key={index} className="bg-gray-50 border-gray-200">
                            <CardContent className="p-4">
                              <h6 className="font-medium text-gray-900 mb-2">{concept.title}</h6>
                              <p className="text-sm text-gray-700 mb-3 leading-relaxed">{concept.explanation}</p>
                              <div className="bg-white p-3 rounded border border-gray-300">
                                <p className="text-xs font-medium text-gray-600 mb-1">Example:</p>
                                <pre className="text-xs text-gray-800 whitespace-pre-wrap font-mono leading-relaxed">
                                  {concept.example}
                                </pre>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Examples */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Examples</h5>
                      <div className="space-y-3">
                        {selectedLesson.content.examples.map((example, index) => (
                          <Card key={index} className="bg-blue-50 border-blue-200">
                            <CardContent className="p-4">
                              <h6 className="font-medium text-blue-900 mb-2">{example.title}</h6>
                              <pre className="text-sm text-blue-800 whitespace-pre-wrap font-mono">
                                {example.solution}
                              </pre>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Exercises */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Practice Exercises</h5>
                      <div className="space-y-3">
                        {selectedLesson.content.exercises.map((exercise, index) => (
                          <Card key={index} className="bg-green-50 border-green-200">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-green-900 mb-2">
                                    Q{index + 1}: {exercise.question}
                                  </p>
                                  <details className="text-sm text-green-800">
                                    <summary className="cursor-pointer font-medium hover:text-green-700">
                                      Show Answer
                                    </summary>
                                    <p className="mt-2 p-2 bg-green-100 rounded font-mono">
                                      {exercise.answer}
                                    </p>
                                  </details>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t">
                      <Button 
                        className="w-full" 
                        onClick={() => handleMarkComplete(selectedLesson.id)}
                        disabled={completedLessons.has(selectedLesson.id)}
                      >
                        {completedLessons.has(selectedLesson.id) ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Completed
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Mark as Complete
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Online Resources */}
                    {selectedLesson.content.onlineResources && selectedLesson.content.onlineResources.length > 0 && (
                      <div className="pt-4 border-t">
                        <h5 className="font-semibold text-gray-900 mb-3">Online Resources</h5>
                        <div className="space-y-3">
                          {selectedLesson.content.onlineResources.map((resource, index) => (
                            <Card key={index} className="bg-blue-50 border-blue-200 hover:shadow-md transition-shadow">
                              <CardContent className="p-4">
                                <div className="flex items-start space-x-3">
                                  <div className="flex-shrink-0">
                                    {resource.type === 'video' && (
                                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                        <Play className="w-4 h-4 text-red-600" />
                                      </div>
                                    )}
                                    {resource.type === 'article' && (
                                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <BookOpen className="w-4 h-4 text-green-600" />
                                      </div>
                                    )}
                                    {resource.type === 'practice' && (
                                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <BarChart3 className="w-4 h-4 text-purple-600" />
                                      </div>
                                    )}
                                    {resource.type === 'simulation' && (
                                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                        <Atom className="w-4 h-4 text-orange-600" />
                                      </div>
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h6 className="font-medium text-blue-900 mb-1 truncate">{resource.title}</h6>
                                    <p className="text-sm text-blue-700 mb-2">{resource.description}</p>
                                    <a
                                      href={resource.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                      <span>Open Resource</span>
                                      <ChevronRight className="w-3 h-3 ml-1" />
                                    </a>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-[600px]">
                <CardContent className="p-6 h-full flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Select a lesson to view content</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}