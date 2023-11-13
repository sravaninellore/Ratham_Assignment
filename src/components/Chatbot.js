import React from 'react';
import { Chatbot, MessageTypes, useChatContext } from 'react-chatbot-kit';
import { useDispatch, useSelector } from 'react-redux';
import { setAge, setName } from '../redux/studentInfoSlice';

function ChatbotComponent({ navigateToPage3 }) {
  const dispatch = useDispatch();
  const { messages, sendMessage } = useChatContext();
  const name = useSelector((state) => state.studentInfo.name);
  const age = useSelector((state) => state.studentInfo.age);

  const handleUserMessage = (message) => {
    if (message.content) {
      // Handle user input and dispatch Redux actions
      if (message.type === MessageTypes.TEXT) {
        if (message.content.toLowerCase() === 'got it!') {
          sendMessage({ content: 'Got it!', type: MessageTypes.TEXT });
        } else if (message.content.toLowerCase() === 'pick a slot !') {
          // Handle date and time selection logic here
          // Dispatch actions accordingly
        } else if (message.content.toLowerCase() === 'enter your name') {
          // Handle user's name input
          dispatch(setName(message.content));
          sendMessage({ content: 'Enter your Age', type: MessageTypes.TEXT });
        } else if (message.content.toLowerCase() === 'enter your age') {
          // Handle age input using a dropdown
          dispatch(setAge(message.content));
          sendMessage({ content: 'Thank you. In 5 seconds, bot will exit', type: MessageTypes.TEXT });
          setTimeout(() => {
            navigateToPage3();
          }, 5000);
        }
      }
    }
  };

  return (
    <Chatbot
      messageTypes={MessageTypes}
      messages={messages}
      onUserInput={handleUserMessage}
    />
  );
}

export default ChatbotComponent;
