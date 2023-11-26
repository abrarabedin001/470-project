import React, { useEffect, useRef } from 'react'
import Avatar from 'react-avatar'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import { useUserStore } from '@/Store/userStore'
import { addMessage, getChatMessages } from '@/Database/firestore/firebaseDb'

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
    let ret = teamMembers!.filter((member) => member.id === id)[0]?.email
    console.log('ret:', ret)
    return ret
  }

  useEffect(() => {
    // Scroll to the bottom whenever the messageList is updated
    scrollChatToBottom()
  }, [messageList])

  const handleSendMessage = () => {
    if (teamId && message !== '') {
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

  // Function to format the timestamp
  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp)
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`
    const formattedTime = `${date.getHours()}:${String(
      date.getMinutes()
    ).padStart(2, '0')}`
    return `${formattedDate} ${formattedTime}`
  }

  return (
    <div className=" border border-gray-700 px-5 rounded-lg mx-auto mb-6">
      <div
        className="flex flex-col h-[240px] overflow-y-auto"
        ref={chatContainerRef}
      >
        {messageList.map((item) => {
          const isCurrentUser = item.userId === userId
          const messageContainerClass = `chat-message ${
            isCurrentUser ? 'right text-right' : 'left text-left'
          }`

          return (
            <div key={item.id} className={messageContainerClass}>
              <div className="flex flex-row justify-left">
                <Avatar
                  name={retEmail(item.userId)}
                  size="30"
                  round
                  style={{ marginRight: '10px' }}
                />
                <div>
                  <p
                    style={{
                      fontSize: '10px',
                      fontWeight: 'bold',
                      marginBottom: '2px',
                      color: 'white',
                    }}
                  >
                    {retEmail(item.userId) + ' '}
                  </p>
                  <p style={{ fontSize: '10px', color: 'white' }}>
                    {formatTimestamp(item.createdAt.toDate().getTime())}
                  </p>
                </div>
              </div>
              <div className="message-content">
                <p style={{ fontSize: '14px', color: '#ffffff' }}>
                  {item.text}
                </p>
              </div>
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
