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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
  Lock,
  Trophy,
  Target,
  Zap,
  Star,
  Flame,
  Calendar,
  TrendingUp,
  Award,
  Brain,
  Users,
  MessageSquare,
  ThumbsUp,
  Eye,
  Monitor,
  DollarSign,
  Microscope,
  Beaker,
  Laptop,
  Database,
  Heart
} from 'lucide-react'
import { curriculumData, type Curriculum, type Subject, type Lesson } from '@/lib/curriculum-data'
import AIAssistant from '@/components/ai-assistant'
import DiscussionModal from '@/components/discussion-modal'
import DiscussionForum from '@/components/discussion-forum'
import SATPrep from '@/components/sat-prep'

// Icon mapping for subjects
const subjectIcons: Record<string, React.ReactNode> = {
  // O Level Subjects
  'o-accounting': <DollarSign className="w-5 h-5" />,
  'o-biology': <Microscope className="w-5 h-5" />,
  'o-mathematics': <Calculator className="w-5 h-5" />,
  'o-chemistry': <Beaker className="w-5 h-5" />,
  'o-computer-science': <Laptop className="w-5 h-5" />,
  'o-economics': <TrendingUp className="w-5 h-5" />,
  'o-physics': <Atom className="w-5 h-5" />,
  'o-science': <FlaskConical className="w-5 h-5" />,
  'o-statistics': <BarChart3 className="w-5 h-5" />,
  
  // A Level Subjects
  'a-accounting': <DollarSign className="w-5 h-5" />,
  'a-information-technology': <Monitor className="w-5 h-5" />,
  'a-biology': <Microscope className="w-5 h-5" />,
  'a-mathematics': <Calculator className="w-5 h-5" />,
  'a-chemistry': <Beaker className="w-5 h-5" />,
  'a-computer-science': <Laptop className="w-5 h-5" />,
  'a-economics': <TrendingUp className="w-5 h-5" />,
  'a-physics': <Atom className="w-5 h-5" />,
  'a-science': <FlaskConical className="w-5 h-5" />,
  'a-statistics': <Database className="w-5 h-5" />,
  
  // US High School Subjects
  'us-mathematics': <Calculator className="w-5 h-5" />,
  'us-biology': <Microscope className="w-5 h-5" />,
  'us-physics': <Atom className="w-5 h-5" />,
  'us-chemistry': <Beaker className="w-5 h-5" />,
  'us-electrical-engineering': <Zap className="w-5 h-5" />,
  'us-health-medicine': <Heart className="w-5 h-5" />,
  'us-computer': <Laptop className="w-5 h-5" />,
  'us-economics': <TrendingUp className="w-5 h-5" />,
  
  // SAT Prep Subjects
  'sat-reading-writing': <BookOpen className="w-5 h-5" />,
  'sat-math': <Calculator className="w-5 h-5" />,
  'sat-practice-tests': <Target className="w-5 h-5" />,
  'sat-study-skills': <Award className="w-5 h-5" />,
  
  // Legacy mappings for backward compatibility
  'o-math': <Calculator className="w-5 h-5" />,
  'a-math': <Calculator className="w-5 h-5" />,
  'us-algebra': <Calculator className="w-5 h-5" />,
  'o-biology-expanded': <Dna className="w-5 h-5" />,
  'us-geometry': <BookOpen className="w-5 h-5" />,
  'us-biology': <Dna className="w-5 h-5" />,
  'o-compsci': <Brain className="w-5 h-5" />,
}

export default function Home() {
  const [selectedCurriculum, setSelectedCurriculum] = useState<Curriculum>(curriculumData[0])
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [user, setUser] = useState<any>(null)
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())
  const [userStats, setUserStats] = useState({
    points: 1250,
    level: 5,
    streak: 7,
    weeklyMinutes: 180,
    rank: 'Advanced Learner'
  })
  const [recentAchievements] = useState([
    { id: 1, title: 'Week Warrior', description: '7-day streak achieved', icon: Flame, color: 'text-orange-500' },
    { id: 2, title: 'Math Master', description: 'Completed 10 math lessons', icon: Calculator, color: 'text-blue-500' },
    { id: 3, title: 'Quick Learner', description: 'Finished lesson in record time', icon: Zap, color: 'text-yellow-500' }
  ])
  const [isDiscussionModalOpen, setIsDiscussionModalOpen] = useState(false)
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
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getSubjectProgress = (subject: Subject) => {
    const totalLessons = subject.lessons.length
    const completedCount = subject.lessons.filter(lesson => completedLessons.has(lesson.id)).length
    return totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0
  }

  const getLevelColor = (level: number) => {
    if (level >= 10) return 'bg-purple-500'
    if (level >= 7) return 'bg-red-500'
    if (level >= 5) return 'bg-orange-500'
    if (level >= 3) return 'bg-blue-500'
    return 'bg-green-500'
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your learning journey...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Enhanced Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">EduLearn</h1>
                <p className="text-xs text-gray-500">Version 2.0 - AI-Powered Learning</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* User Stats */}
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-semibold text-gray-700">{userStats.streak}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-700">{userStats.points}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className={`w-2 h-2 rounded-full ${getLevelColor(userStats.level)}`}></div>
                  <span className="text-sm font-semibold text-gray-700">Lv.{userStats.level}</span>
                </div>
              </div>
              
              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => router.push('/profile')}
                  className="hover:bg-blue-50"
                >
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
                <Avatar className="w-8 h-8">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-sm font-semibold">
                    {user.name?.charAt(0)?.toUpperCase() || user.email?.charAt(0)?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-700">{user.name || user.email.split('@')[0]}</p>
                  <p className="text-xs text-gray-500">{userStats.rank}</p>
                </div>
                <Button variant="outline" size="sm" onClick={handleSignOut} className="hover:bg-red-50 hover:border-red-200">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                Welcome back, {user.name || user.email.split('@')[0]}! 
                <span className="ml-3 text-lg font-normal text-gray-600">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </span>
              </h2>
              <p className="text-gray-600">
                Continue your {user.educationLevel || 'learning'} journey with personalized AI-powered insights
              </p>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <Button variant="outline" size="sm" className="bg-white/50 backdrop-blur-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Target className="w-4 h-4 mr-2" />
                Daily Goals
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Lessons</p>
                  <p className="text-3xl font-bold">
                    {selectedCurriculum.subjects.reduce((acc, subject) => acc + subject.lessons.length, 0)}
                  </p>
                  <p className="text-blue-100 text-xs mt-1 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12% this week
                  </p>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                  <BookOpen className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Completed</p>
                  <p className="text-3xl font-bold">{completedLessons.size}</p>
                  <p className="text-green-100 text-xs mt-1 flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {Math.round((completedLessons.size / selectedCurriculum.subjects.reduce((acc, subject) => acc + subject.lessons.length, 0)) * 100)}% complete
                  </p>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                  <CheckCircle className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Learning Streak</p>
                  <p className="text-3xl font-bold">{userStats.streak} days</p>
                  <p className="text-purple-100 text-xs mt-1 flex items-center">
                    <Flame className="w-3 h-3 mr-1" />
                    Keep it going!
                  </p>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                  <Flame className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">XP Points</p>
                  <p className="text-3xl font-bold">{userStats.points}</p>
                  <p className="text-orange-100 text-xs mt-1 flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Level {userStats.level}
                  </p>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                  <Trophy className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Achievements */}
        <Card className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Award className="w-5 h-5 mr-2 text-indigo-600" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentAchievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
                  <div className={`p-2 rounded-full bg-gray-50 ${achievement.color}`}>
                    <achievement.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">{achievement.title}</p>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Curriculum Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Brain className="w-5 h-5 mr-2 text-blue-600" />
            Choose Your Learning Path
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {curriculumData.map((curriculum) => (
              <Card 
                key={curriculum.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  selectedCurriculum.id === curriculum.id 
                    ? 'ring-2 ring-blue-500 bg-blue-50 shadow-lg' 
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
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Age: {curriculum.ageRange}
                    </span>
                    <span className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {curriculum.subjects.length} subjects
                    </span>
                  </div>
                  <Progress 
                    value={selectedCurriculum.id === curriculum.id ? 75 : 0} 
                    className="h-2"
                  />
                  {selectedCurriculum.id === curriculum.id && (
                    <p className="text-xs text-gray-500 mt-2">75% complete</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Subjects List */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              Subjects
            </h3>
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {selectedCurriculum.subjects.map((subject) => {
                  const Icon = subjectIcons[subject.id]
                  const progress = getSubjectProgress(subject)
                  return (
                    <Card 
                      key={subject.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                        selectedSubject?.id === subject.id 
                          ? 'ring-2 ring-blue-500 bg-blue-50 shadow-lg' 
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        setSelectedSubject(subject)
                        setSelectedLesson(null)
                      }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-lg ${subject.color} text-white shadow-md`}>
                            {Icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{subject.name}</h4>
                            <p className="text-sm text-gray-600 mb-2">{subject.description}</p>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-xs text-gray-500">
                                <span className="flex items-center">
                                  <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                                  {subject.lessons.filter(l => completedLessons.has(l.id)).length}/{subject.lessons.length} lessons
                                </span>
                                <span className="font-semibold">{Math.round(progress)}%</span>
                              </div>
                              <Progress value={progress} className="h-2" />
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

          {/* Enhanced Lessons List */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-blue-600" />
              {selectedSubject ? `${selectedSubject.name} Lessons` : 'Select a Subject'}
            </h3>
            <ScrollArea className="h-[700px]">
              {selectedSubject ? (
                <div className="space-y-4">
                  {selectedSubject.lessons.map((lesson) => (
                    <Card 
                      key={lesson.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                        selectedLesson?.id === lesson.id 
                          ? 'ring-2 ring-blue-500 bg-blue-50 shadow-lg' 
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
                              {lesson.difficulty === 'Advanced' && !completedLessons.has(lesson.id) && (
                                <Lock className="w-4 h-4 text-gray-400" />
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{lesson.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Badge className={`text-xs ${getDifficultyColor(lesson.difficulty)}`}>
                                  {lesson.difficulty}
                                </Badge>
                                <div className="flex items-center text-xs text-gray-500">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {lesson.duration}
                                </div>
                              </div>
                              <Button size="sm" variant="ghost" className="hover:bg-blue-50">
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
                  <p className="text-lg font-medium mb-2">Select a subject to view lessons</p>
                  <p className="text-sm">Choose from Mathematics, Physics, Chemistry, or Biology</p>
                </div>
              )}
            </ScrollArea>
          </div>

          {/* Enhanced Lesson Content */}
        <div className="lg:col-span-2 mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Eye className="w-5 h-5 mr-2 text-blue-600" />
            {selectedLesson ? 'Lesson Content' : 'Select a Lesson'}
          </h3>
            {selectedLesson ? (
              selectedCurriculum.id === 'sat-prep' ? (
                <SATPrep 
                  subjectId={selectedSubject?.id || ''} 
                  subjectName={selectedSubject?.name || ''} 
                />
              ) : (
                <Card className="h-[700px] overflow-hidden shadow-lg">
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
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2 text-blue-600" />
                        Key Concepts
                      </h5>
                      <div className="space-y-4">
                        {selectedLesson.content.concepts.map((concept, index) => (
                          <Card key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                            <CardContent className="p-4">
                              <h6 className="font-medium text-gray-900 mb-2">{concept.title}</h6>
                              <p className="text-sm text-gray-700 mb-3 leading-relaxed">{concept.explanation}</p>
                              <div className="bg-white p-3 rounded border border-blue-200">
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

                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-4">
                      <Button 
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleMarkComplete(selectedLesson.id)}
                      >
                        {completedLessons.has(selectedLesson.id) ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Completed
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Start Lesson
                          </>
                        )}
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setIsDiscussionModalOpen(true)}>
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Discuss
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
            ) : (
              <div className="text-center py-12 text-gray-500 h-[700px] flex items-center justify-center">
                <div>
                  <Eye className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium mb-2">Select a lesson to view content</p>
                  <p className="text-sm">Explore concepts, examples, and exercises</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* AI Assistant */}
      {selectedLesson && (
        <AIAssistant
          lessonId={selectedLesson.id}
          lessonTitle={selectedLesson.title}
          subject={selectedSubject?.name}
          context={`${selectedCurriculum.name} - ${selectedSubject?.name} - ${selectedLesson.title}`}
        />
      )}

      {/* Discussion Forum */}
      {selectedLesson && (
        <div className="mt-6">
          <DiscussionForum 
            lessonId={selectedLesson.id}
            lessonTitle={selectedLesson.title}
            onDiscussionSelect={(discussion) => {
              if (discussion) {
                setSelectedLesson(null)
                setSelectedSubject(null)
              }
            }}
          />
        </div>
      )}
    </div>
  )
}