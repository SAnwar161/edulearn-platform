import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const { message, context, lessonId, userId } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const zai = await ZAI.create()

    // Create a personalized AI tutor prompt based on context
    const systemPrompt = `You are an AI-powered learning assistant for EduLearn, a comprehensive educational platform. 

Your role is to help students understand concepts, answer questions, and provide personalized learning guidance.

Context: ${context || 'General learning assistance'}
Lesson ID: ${lessonId || 'Not specified'}
User ID: ${userId || 'Anonymous'}

Guidelines:
- Provide clear, concise explanations appropriate for the student's level
- Use examples and analogies to make complex concepts easier to understand
- Be encouraging and supportive
- If you don't know something, admit it and suggest where to find more information
- Keep responses focused on educational content
- For math problems, show step-by-step solutions
- For science concepts, explain the "why" behind the facts
- Always maintain a positive and motivating tone

Current user message: ${message}

Please provide a helpful, educational response that addresses the student's question or concern.`

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    })

    const aiResponse = completion.choices[0]?.message?.content

    if (!aiResponse) {
      throw new Error('No response from AI')
    }

    return NextResponse.json({
      success: true,
      response: aiResponse,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    console.error('AI Assistant Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process your request',
        details: error.message 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'EduLearn AI Assistant API',
    version: '2.0',
    endpoints: {
      POST: '/api/ai/assistant - Chat with AI learning assistant'
    }
  })
}