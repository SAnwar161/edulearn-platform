'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  MessageSquare, 
  ThumbsUp, 
  Send,
  Plus,
  Search,
  Filter,
  Clock,
  Pin,
  AlertCircle
} from 'lucide-react'

interface Discussion {
  id: string
  lessonId: string
  title: string
  content: string
  author: string
  authorAvatar?: string
  tags: string[]
  upvotes: number
  downvotes: number
  replies: number
  isPinned: boolean
  isLocked: boolean
  createdAt: string
  updatedAt: string
}

interface DiscussionReply {
  id: string
  discussionId: string
  content: string
  author: string
  authorAvatar?: string
  upvotes: number
  downvotes: number
  isAccepted: boolean
  createdAt: string
}

interface DiscussionForumProps {
  lessonId: string
  lessonTitle: string
  onDiscussionSelect?: (discussion: Discussion) => void
}

export default function DiscussionForum({ lessonId, lessonTitle, onDiscussionSelect }: DiscussionForumProps) {
  const [discussions, setDiscussions] = useState<Discussion[]>([
    {
      id: '1',
      lessonId: lessonId,
      title: `Help with ${lessonTitle} - Algebra Basics`,
      content: 'I\'m struggling with understanding variables and constants. Can someone explain the difference between them in simple terms?',
      author: 'Student A',
      authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=student1',
      tags: ['help', 'question'],
      upvotes: 5,
      downvotes: 0,
      replies: 3,
      isPinned: false,
      isLocked: false,
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
    }
  ])

  const [newDiscussion, setNewDiscussion] = useState({
    id: '',
    lessonId: lessonId,
    title: '',
    content: '',
    author: '',
    tags: [''],
    upvotes: 0,
    downvotes: 0,
    replies: 0,
    isPinned: false,
    isLocked: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesFilter = selectedFilter === 'all' || 
                         discussion.tags.includes(selectedFilter)
    
    return matchesSearch && matchesFilter
  })

  const handleCreateDiscussion = () => {
    if (!newDiscussion.title.trim() || !newDiscussion.content.trim()) {
      return
    }

    const discussion = {
      ...newDiscussion,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    setDiscussions([discussion, ...discussions])
    setNewDiscussion({
      id: '',
      lessonId: lessonId,
      title: '',
      content: '',
      author: 'Current User',
      tags: [],
      upvotes: 0,
      downvotes: 0,
      replies: 0,
      isPinned: false,
      isLocked: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })
  }

  const handleVote = (discussionId: string, voteType: 'up' | 'down') => {
    setDiscussions(discussions.map(discussion => 
      discussion.id === discussionId 
        ? { ...discussion, upvotes: voteType === 'up' ? discussion.upvotes + 1 : discussion.upvotes, downvotes: voteType === 'down' ? discussion.downvotes + 1 : discussion.downvotes }
        : discussion
    ))
  }

  const handleReply = (discussionId: string, replyContent: string) => {
    const reply: DiscussionReply = {
      id: Date.now().toString(),
      discussionId,
      content: replyContent,
      author: 'Current User',
      authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=currentuser',
      upvotes: 0,
      downvotes: 0,
      isAccepted: false,
      createdAt: new Date().toISOString()
    }

    setDiscussions(discussions.map(discussion => 
      discussion.id === discussionId 
        ? { ...discussion, replies: discussion.replies + 1, updatedAt: new Date().toISOString() }
        : discussion
    ))
  }

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      'help': 'bg-blue-100 text-blue-800',
      'question': 'bg-yellow-100 text-yellow-800',
      'study-group': 'bg-green-100 text-green-800',
      'collaboration': 'bg-purple-100 text-purple-800',
      'resources': 'bg-orange-100 text-orange-800',
      'youtube': 'bg-red-100 text-red-800',
      'summary': 'bg-indigo-100 text-indigo-800',
      'quiz': 'bg-pink-100 text-pink-800',
      'confused': 'bg-gray-100 text-gray-800'
    }
    return colors[tag] || 'bg-gray-100 text-gray-800'
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      return 'Today'
    } else if (diffDays === 1) {
      return 'Yesterday'
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
    } else {
      return date.toLocaleDateString()
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <span>Discussion Forum</span>
            </div>
            <Button variant="outline" size="sm">
              Close
            </Button>
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6">
          {/* Search and Filter */}
          <div className="mb-6 space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {/* Create New Discussion */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4">Start a New Discussion</h4>
            <div className="space-y-4">
              <div>
                <Input
                  placeholder="Discussion title..."
                  value={newDiscussion.title}
                  onChange={(e) => setNewDiscussion({...newDiscussion, title: e.target.value})}
                  className="w-full"
                />
              </div>
              <div>
                <textarea
                  placeholder="What's on your mind?"
                  value={newDiscussion.content}
                  onChange={(e) => setNewDiscussion({...newDiscussion, content: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-md resize-none"
                  rows={3}
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={handleCreateDiscussion} className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Discussion
                </Button>
              </div>
            </div>
          </div>

          {/* Discussions List */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Recent Discussions</h4>
            <ScrollArea className="h-[400px] border border-gray-200 rounded-lg">
              {discussions.length > 0 ? (
                discussions.map((discussion) => (
                  <Card key={discussion.id} className="cursor-pointer transition-all hover:shadow-md mb-4">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={discussion.authorAvatar} />
                            <AvatarFallback>
                              {discussion.author.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold text-gray-900">{discussion.author}</div>
                            <div className="text-sm text-gray-500 flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{formatDate(discussion.createdAt)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {discussion.isPinned && <Pin className="w-4 h-4 text-blue-600" />}
                          <div className="flex items-center space-x-1">
                            <Badge className={getTagColor(discussion.tags[0])}>
                              {discussion.tags[0]}
                            </Badge>
                            {discussion.tags.length > 1 && (
                              <span className="text-gray-400">+{discussion.tags.length - 1}</span>
                            )}
                          </div>
                          <div className="flex items-center space-x-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleVote(discussion.id, 'up')}
                              className="p-1 hover:bg-green-50"
                            >
                              <ThumbsUp className="w-4 h-4" />
                              {discussion.upvotes}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleVote(discussion.id, 'down')}
                              className="p-1 hover:bg-red-50"
                            >
                              <ThumbsUp className="w-4 h-4 rotate-180" />
                              {discussion.downvotes}
                            </Button>
                          </div>
                          {discussion.isLocked && <AlertCircle className="w-4 h-4 text-yellow-600" />}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        {discussion.replies} replies
                      </div>
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{discussion.title}</h4>
                        <p className="text-gray-700 mb-4 leading-relaxed">{discussion.content}</p>
                        
                        {discussion.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {discussion.tags.map((tag, index) => (
                              <Badge key={index} className={getTagColor(tag)}>
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between mt-4 pt-4 border-t">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleReply(discussion.id, 'This is a helpful discussion!')}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Reply
                          </Button>
                          <div className="text-sm text-gray-500">
                            Be the first to reply
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium mb-2">No discussions yet</p>
                  <p className="text-sm">Be the first to start a discussion!</p>
                </div>
              )}
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}