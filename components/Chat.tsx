import React, { useEffect, useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import { useUserStore } from '@/Store/userStore'
import { addMessage, getChatMessages } from '@/Database/firestore/firebaseDb'
// import { MessageBox, MessageList, Button as button2 } from 'react-chat-elements'

export default function Chat() {
  const [message, setMessage] = React.useState('')
  const teamId = useUserStore((state) => state.currrentTeam?.value)
  const teamMembers = useUserStore((state) => state.teamMembers)
  const userId = useUserStore((state) => state.user?.uid)
  const [messageList, setMessageList] = React.useState<any[]>([])

  const chatContainerRef = useRef(null)

  const fetchMessages = async () => {
    if (teamId) {
      let list = await getChatMessages(teamId)
      setMessageList(list)
      console.log('MessageList:', list)
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  const retEmail = (id: string) => {
    let ret = teamMembers!.filter((member) => member.id == id)[0].email
    console.log('ret:', ret)
    return ret
  }

  useEffect(() => {
    // Scroll to the bottom whenever the messageList is updated
    scrollChatToBottom()
  }, [messageList])

  const handleSendMessage = () => {
    if (teamId && message != '') {
      addMessage(teamId, userId!, message).then(() => {
        fetchMessages()
      })
    }
    setMessage('')
  }

  const scrollChatToBottom = () => {
    if (chatContainerRef.current) {
      // @ts-ignore
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  return (
    <div className="w-[650px] border border-gray-700 px-5 rounded-lg mx-auto mb-6">
      <div
        className="flex flex-col h-[240px] overflow-y-auto"
        ref={chatContainerRef}
      >
        {messageList.map((item) => {
          const className = `chat-message ${
            item.userId === userId ? 'right text-right' : 'left text-left'
          }`
          console.log(className) // Log class name to check
          return (
            <div key={item.id} className={className + ' flex flex-col'}>
              <p className="text-[7px]">{retEmail(item.userId)}</p>
              <p className="text-white">{item.text}</p>
              <p className="text-[7px]">{String(item.createdAt)}</p>
            </div>
          )
        })}
      </div>

      <div className="flex flex-row pt-5 justify-between mb-2">
        <Input
          placeholder="Type here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button className="ml-5" onClick={handleSendMessage} title="Send">
          Send
        </Button>
      </div>
    </div>
  )
}
