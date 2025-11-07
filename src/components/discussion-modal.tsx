'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  MessageSquare, 
  ThumbsUp, 
  Users, 
  Send,
  Plus,
  Search,
  Filter,
  Clock,
  Pin,
  Star,
  AlertCircle
  X
  MessageCircle
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

interface DiscussionModalProps {
  isOpen: boolean
  onClose: () => void
  lessonId: string
  lessonTitle: string
  discussions: Discussion[]
  onCreateDiscussion: (discussion: Discussion) => void
  onReply: (discussionId: string, content: string) => void
  onVote: (discussionId: string, voteType: 'up' | 'down') => void
}

export default function DiscussionModal({ isOpen, onClose, lessonId, lessonTitle, discussions, onCreateDiscussion, onReply, onVote }: DiscussionModalProps) {
  const [newDiscussion, setNewDiscussion] = useState({
    id: '',
    lessonId: lessonId,
    title: '',
    content: '',
    author: 'Current User',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=currentuser',
    tags: [],
    upvotes: 0,
    downvotes: 0,
    replies: 0,
    isPinned: false,
    isLocked: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
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

    setNewDiscussion(discussion)
    onCreateDiscussion(discussion)
    setNewDiscussion({
      id: '',
      lessonId: lessonId,
      title: '',
      content: '',
      author: 'Current User',
      authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=currentuser',
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

  const handleReply = (discussionId: string, content: string) => {
    const reply: DiscussionReply = {
      id: Date.now().toString(),
      discussionId,
      content,
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

  const handleVote = (discussionId: string, voteType: 'up' | 'down') => {
    setDiscussions(discussions.map(discussion => 
      discussion.id === discussionId 
        ? { ...discussion, upvotes: voteType === 'up' ? discussion.upvotes + 1 : discussion.upvotes, downvotes: voteType === 'down' ? discussion.downvotes + 1 : discussion.downvotes }
        : discussion
    ))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Discussion Forum
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Create New Discussion */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4">Start a New Discussion</h4>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <Input
                  id="title"
                  placeholder="What's your discussion about?"
                  value={newDiscussion.title}
                  onChange={(e) => setNewDiscussion(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  id="content"
                  placeholder="Share your thoughts, questions, or helpful resources..."
                  value={newDiscussion.content}
                  onChange={(e) => setNewDiscussion(prev => ({ ...prev, content: e.target.value }))}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma separated)
                </label>
                <Input
                  id="tags"
                  placeholder="e.g., algebra, help, study-group"
                  value={newDiscussion.tags.join(', ')}
                  onChange={(e) => setNewDiscussion(prev => ({ ...prev, tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag) }))}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <Button
                onClick={handleCreateDiscussion}
                disabled={!newDiscussion.title.trim() || !newDiscussion.content.trim()}
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
              >
                <Send className="w-4 h-4 mr-2" />
                Post Discussion
              </Button>
            </div>
          </div>

          {/* Discussions List */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4">Recent Discussions</h4>
            <ScrollArea className="h-[400px] border border-gray-200 rounded-lg">
              {discussions.length > 0 ? (
                discussions.map((discussion) => (
                  <Card key={discussion.id} className="cursor-pointer transition-all hover:shadow-md">
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
                          <div className="text-right">
                            {discussion.isPinned && <Pin className="w-4 h-4 text-blue-600" />}
                            <div className="flex items-center space-x-1">
                              <Badge className="bg-blue-100 text-blue-800">
                                {discussion.tags[0]}
                              </Badge>
                              {discussion.tags.length > 1 && (
                                <span className="text-blue-400">+{discussion.tags.length - 1}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {discussion.content}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-2">
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
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setNewDiscussion({
                            id: discussion.id,
                            lessonId: discussion.lessonId,
                            title: discussion.title,
                            content: discussion.content,
                            author: discussion.author,
                            authorAvatar: discussion.authorAvatar,
                            tags: discussion.tags,
                            upvotes: discussion.upvotes,
                            downvotes: discussion.downvotes,
                            replies: discussion.replies,
                            isPinned: discussion.isPinned,
                            isLocked: discussion.isLocked,
                            createdAt: discussion.createdAt,
                            updatedAt: discussion.updatedAt
                          })
                        }}
                        className="p-1 hover:bg-gray-50"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Reply
                      </Button>
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

export default DiscussionModal