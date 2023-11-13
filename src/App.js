import React, { useState } from 'react';
import { Provider } from 'react-redux';
import ChatbotComponent from './components/Chatbot';
import Page1 from './components/Page1';
import Page3 from './components/Page3';
import { store } from './redux/store';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const navigateToChatbot = () => {
    setCurrentPage(2);
  };

  const navigateToPage3 = () => {
    setCurrentPage(3);
  };

  return (
    <Provider store={store}>
      <div className="App">
        {currentPage === 1 && <Page1 navigateToChatbot={navigateToChatbot} />}
        {currentPage === 2 && <ChatbotComponent navigateToPage3={navigateToPage3} />}
        {currentPage === 3 && <Page3 />}
      </div>
    </Provider>
  );
}

export default App;
