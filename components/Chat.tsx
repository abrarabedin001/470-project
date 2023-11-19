import React, { useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { MessageBox, MessageList, Button as button2 } from 'react-chat-elements'
import { Button } from './ui/button'
import { useUserStore } from '@/Store/userStore'
import { send } from 'process'
import { addMessage, getChatMessages } from '@/Database/firestore/firebaseDb'
export default function Chat() {
  let [message, setMessage] = React.useState('')
  let teamId: any = useUserStore((state) => state.currrentTeam?.value)
  let [messageList, setMessageList] = React.useState<any[]>([])
  let chatId = 'lufLNHlDAlaJqhVkkhar'
  let func = async () => {
    let list = await getChatMessages(chatId)
    setMessageList((prev) => list)
  }
  useEffect(() => {
    func()
  }, [])
  return (
    <div className="w-[600px]  border border-gray-700 p-5 rounded-lg m-6">
      {/* @ts-ignore */}
      {messageList.map((item) => (
        //  @ts-ignore
        <MessageBox
          key={item.id}
          position={'left'}
          type={'text'}
          title={'Message Box Title'}
          className="text-black "
          text={item.text}
        />
      ))}

      {/* @ts-ignore */}

      {/* @ts-ignore */}
      <div className="flex flex-row pt-5 justify-between">
        <Input
          placeholder="Type here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          className="ml-5"
          onClick={() =>
            addMessage(
              'lufLNHlDAlaJqhVkkhar',
              'XbQvclOgvBhcvX5WRrbuuB44j8j2',
              message
            ).then((res) => {
              func()
            })
          }
          title="Send"
        >
          Send
        </Button>
      </div>
    </div>
  )
}
