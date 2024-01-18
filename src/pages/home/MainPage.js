import React from 'react';

const MainPage = () => {
  // 버튼 클릭 핸들러 함수
  const handleButtonClick = (category) => {
    // 버튼 클릭 시 수행할 동작
    console.log(`${category} clicked`);
    // 예: navigation logic
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      {/* Navbar */}
      <div className="w-full max-w-4xl flex justify-between items-center px-6 py-2">
        <button
          onClick={() => handleButtonClick('Main Page')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Main Page
        </button>

        <div className="flex space-x-4">
          {['DevQuiz', 'Quiz', 'Rank', 'Board', 'Group'].map((text) => (
            <button
              key={text}
              onClick={() => handleButtonClick(text)}
              className="text-blue-500 hover:text-blue-700 font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              {text}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleButtonClick('Login')}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Login
        </button>
      </div>

      {/* Content Area */}
      <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        <button
          onClick={() => handleButtonClick('Java')}
          className="col-span-1 bg-gray-200 p-6 rounded shadow transition duration-300 ease-in-out"
        >
          Java
        </button>
        <button
          onClick={() => handleButtonClick('Computer Science')}
          className="col-span-1 md:col-span-2 bg-gray-200 p-6 rounded shadow transition duration-300 ease-in-out"
        >
          Computer Science
        </button>
        <button
          onClick={() => handleButtonClick('Design Pattern')}
          className="col-span-1 bg-gray-200 p-6 rounded shadow transition duration-300 ease-in-out"
        >
          Design Pattern
        </button>
        <button
          onClick={() => handleButtonClick('Spring Java')}
          className="col-span-1 bg-gray-200 p-6 rounded shadow transition duration-300 ease-in-out"
        >
          Spring Java
        </button>
        <button
          onClick={() => handleButtonClick('Database')}
          className="col-span-1 md:col-span-2 bg-gray-200 p-6 rounded shadow transition duration-300 ease-in-out"
        >
          Database
        </button>
        <button
          onClick={() => handleButtonClick('JPA')}
          className="col-span-1 bg-gray-200 p-6 rounded shadow transition duration-300 ease-in-out"
        >
          JPA
        </button>
      </div>
    </div>
  );
};

export default MainPage;
