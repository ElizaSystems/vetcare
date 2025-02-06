import { useState } from 'react'

export function VetCareBot() {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hello! I'm your VetCare assistant. How can I help you today?", isBot: true }
  ])
  const [input, setInput] = useState('')

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }])
    
    // Here you would typically make an API call to your chatbot service
    // For now, we'll just add a placeholder response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I'm here to help! Please note that I'm currently in development and will be fully functional soon.",
        isBot: true
      }])
    }, 1000)

    setInput('')
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="space-y-4 h-[400px] overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat ${msg.isBot ? 'chat-start' : 'chat-end'}`}
              >
                <div className={`chat-bubble ${msg.isBot ? 'chat-bubble-primary' : 'chat-bubble-secondary'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="flex gap-2 mt-4">
            <input
              type="text"
              placeholder="Type your message here..."
              className="input input-bordered flex-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
} 