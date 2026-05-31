import { useEffect, useState } from "react";
import questions from "../data/questions";
import { getRecommendations } from "../services/recommendationApi";
import { useNavigate } from "react-router-dom";

function ChatBotPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    setMessages([
      {
        sender: "bot",
        text: questions[0].question,
      },
    ]);
  }, []);

  const handleSend = async() => {
    if (!input.trim()) return;

    const question = questions[currentQuestion];

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: input,
      },
    ]);

    const updatedAnswers = {
  ...answers,
  [question.id]: input,
};

    setAnswers(updatedAnswers);

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: questions[nextQuestion].question,
          },
        ]);

        setCurrentQuestion(nextQuestion);
      }, 500);
    } else {
  const updatedAnswers = {
    ...answers,
    [question.id]: input,
  };

  setAnswers(updatedAnswers);

  setTimeout(async () => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: "Thanks! Finding the best cars for you...",
      },
    ]);

    try {
      const recommendations =
        await getRecommendations(updatedAnswers);

      console.log(
        "recommendations>>",
        recommendations
      );

      navigate("/recommendations", {
        state: {
          recommendations,
        },
      });
    } catch (error) {
      console.error(
        "Failed to fetch recommendations",
        error
      );
    }
  }, 500);
}

    setInput("");
  };

  const progress = Math.round((currentQuestion / questions.length) * 100);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <span className="chat-header-icon">🚗</span>
        <div>
          <h2 className="chat-header-title">Car Match Assistant</h2>
          <p className="chat-header-status">Online</p>
        </div>
        <button className="all-cars-btn" onClick={() => navigate("/carslisting")}>All Cars</button>
      </div>

      <div className="chat-progress">
        <div className="chat-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="messages">
        {messages?.map((msg, index) => (
          <div key={index.toString()} className={`message-row ${msg.sender}`}>
            {msg.sender === "bot" && <span className="avatar bot-avatar">🤖</span>}
            <div className={`message ${msg.sender}`}>{msg?.text}</div>
          </div>
        ))}
      </div>

      <div className="input-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your answer..."
        />
        <button onClick={handleSend} className="send-btn">➤</button>
      </div>
    </div>
  );
}

export default ChatBotPage;