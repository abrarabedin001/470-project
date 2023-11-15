import React from 'react'
import { Input } from '@/components/ui/input'
import { MessageBox, MessageList, Button as button2 } from 'react-chat-elements'
import { Button } from './ui/button'
export default function Chat() {
  return (
    <div className="w-[600px]  border border-gray-700 p-5 rounded-lg m-6">
      {/* @ts-ignore */}
      <MessageBox
        position={'left'}
        type={'text'}
        title={'Message Box Title'}
        className="text-black "
        text="Here is a text type message box"
      />
      {/* @ts-ignore */}
      <MessageList
        className="message-list text-black "
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={[
          {
            position: 'left',
            type: 'text',
            title: 'Kursat',
            text: 'Give me a message list example !',
          },
          {
            position: 'right',
            type: 'text',
            title: 'Emre',
            text: "That's all.",
          },
        ]}
      />
      {/* @ts-ignore */}
      <div className="flex flex-row pt-5 justify-between">
        <Input placeholder="Type here..." />
        <Button
          className="ml-5"
          onClick={() => alert('Sending...')}
          title="Send"
        >
          Send
        </Button>
      </div>
    </div>
  )
}
