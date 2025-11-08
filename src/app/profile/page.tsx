'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  User, 
  Trophy, 
  Target, 
  Calendar,
  Clock,
  BookOpen,
  Flame,
  Star,
  Award,
  TrendingUp,
  BarChart3,
  Settings,
  Edit,
  Mail,
  MapPin,
  Globe,
  Zap,
  Brain,
  Users,
  MessageSquare,
  ThumbsUp,
  Eye
} from 'lucide-react'

export default function Profile() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [userStats, setUserStats] = useState({
    points: 1250,
    level: 5,
    streak: 7,
    weeklyMinutes: 180,
    rank: 'Advanced Learner',
    joinDate: '2024-01-15',
    totalLessons: 45,
    completedLessons: 32,
    quizScore: 85,
    studyHours: 120
  })

  const [achievements] = useState([
    { id: 1, title: 'Week Warrior', description: '7-day streak achieved', icon: Flame, color: 'bg-orange-500', unlocked: true },
    { id: 2, title: 'Math Master', description: 'Completed 10 math lessons', icon: BookOpen, color: 'bg-blue-500', unlocked: true },
    { id: 3, title: 'Quick Learner', description: 'Finished lesson in record time', icon: Zap, color: 'bg-yellow-500', unlocked: true },
    { id: 4, title: 'Perfect Score', description: 'Scored 100% on a quiz', icon: Star, color: 'bg-purple-500', unlocked: false },
    { id: 5, title: 'Social Butterfly', description: 'Helped 10 other students', icon: Users, color: 'bg-green-500', unlocked: false },
    { id: 6, title: 'Knowledge Seeker', description: 'Completed 50 lessons', icon: Brain, color: 'bg-indigo-500', unlocked: false }
  ])

  const [activity] = useState([
    { id: 1, type: 'lesson', title: 'Completed Algebra Basics', time: '2 hours ago', points: 50 },
    { id: 2, type: 'quiz', title: 'Scored 85% on Geometry Quiz', time: '5 hours ago', points: 30 },
    { id: 3, type: 'achievement', title: 'Unlocked Week Warrior', time: '1 day ago', points: 100 },
    { id: 4, type: 'discussion', title: 'Answered question in Physics forum', time: '2 days ago', points: 20 }
  ])

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push('/auth/signin')
    }
  }, [router])

  const getLevelColor = (level: number) => {
    if (level >= 10) return 'bg-purple-500'
    if (level >= 7) return 'bg-red-500'
    if (level >= 5) return 'bg-orange-500'
    if (level >= 3) return 'bg-blue-500'
    return 'bg-green-500'
  }

  const getLevelProgress = (level: number) => {
    return ((level % 5) / 5) * 100
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => router.back()} className="hover:bg-gray-100">
                ← Back
              </Button>
              <h1 className="text-xl font-bold text-gray-900">Profile</h1>
            </div>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <Avatar className="w-24 h-24">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-blue-100 text-blue-600 text-2xl font-semibold">
                  {user.name?.charAt(0)?.toUpperCase() || user.email?.charAt(0)?.toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">{userStats.level}</span>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900">{user.name || 'User'}</h2>
              <p className="text-gray-600 mb-2">{user.email}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {userStats.rank}
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {user.educationLevel || 'O Level'}
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  Level {userStats.level}
                </Badge>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Joined {new Date(userStats.joinDate).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  United States
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-1" />
                  English
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <Button variant="outline" className="flex items-center">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Total Points</p>
                  <p className="text-3xl font-bold">{userStats.points}</p>
                </div>
                <Trophy className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Learning Streak</p>
                  <p className="text-3xl font-bold">{userStats.streak} days</p>
                </div>
                <Flame className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Completed Lessons</p>
                  <p className="text-3xl font-bold">{userStats.completedLessons}</p>
                </div>
                <BookOpen className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Study Hours</p>
                  <p className="text-3xl font-bold">{userStats.studyHours}</p>
                </div>
                <Clock className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Level Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                    Level Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Level {userStats.level}</span>
                      <span className="text-sm text-gray-500">Level {userStats.level + 1}</span>
                    </div>
                    <Progress value={getLevelProgress(userStats.level)} className="h-3" />
                    <p className="text-sm text-gray-600">
                      {250 * (userStats.level + 1) - userStats.points} points to next level
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Weekly Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-500" />
                    Weekly Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Study Time</span>
                      <span className="text-sm font-semibold">{userStats.weeklyMinutes} min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Lessons Completed</span>
                      <span className="text-sm font-semibold">8</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Quiz Average</span>
                      <span className="text-sm font-semibold">{userStats.quizScore}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Points Earned</span>
                      <span className="text-sm font-semibold">320</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-purple-500" />
                  Achievements
                </CardTitle>
                <CardDescription>
                  Unlock achievements by completing lessons, quizzes, and challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg border ${
                        achievement.unlocked
                          ? 'bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200'
                          : 'bg-gray-50 border-gray-200 opacity-60'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-full ${achievement.color} flex items-center justify-center`}>
                          <achievement.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-500" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activity.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        {item.type === 'lesson' && <BookOpen className="w-5 h-5 text-blue-600" />}
                        {item.type === 'quiz' && <Target className="w-5 h-5 text-green-600" />}
                        {item.type === 'achievement' && <Award className="w-5 h-5 text-purple-600" />}
                        {item.type === 'discussion' && <MessageSquare className="w-5 h-5 text-orange-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-green-600">+{item.points} pts</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-indigo-500" />
                  Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm text-gray-600">
                        {userStats.completedLessons}/{userStats.totalLessons} lessons
                      </span>
                    </div>
                    <Progress value={(userStats.completedLessons / userStats.totalLessons) * 100} className="h-3" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Mathematics</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Physics</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>60%</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Chemistry</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>45%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                    </div>
                    
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">Biology</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>80%</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}