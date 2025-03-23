"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaPaperclip, FaPaperPlane, FaTimes, FaRobot } from "react-icons/fa";

const AITextAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string; image?: string }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // API Key
  const apiKey = "AIzaSyD8GS4mSI8Ua2t3jJxa91Tnt52nb9H4myQ";

  const botImage = "https://cdn-icons-png.flaticon.com/512/4712/4712105.png"; // Bot image
  const userImage = "https://cdn-icons-png.flaticon.com/512/847/847969.png"; // User image

  useEffect(() => {
    if (isOpen) {
      setMessages([
        { role: "bot", text: "Welcome To Sellify! How can I help you?", image: botImage },
        { role: "bot", text: "Feel free to ask me any question.", image: botImage },
      ]);
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input, image: userImage };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `  text: 'You are an AI assistant specializing in eCommerce business growth.
                     Your responses should be professional, thorough, and focused only on helping sellers succeed
                      in areas like product optimization, pricing, marketing, inventory management, and customer retention.
                       Deny all unrelated inquiries.'


                    User's Question: ${input}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      let botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I didn't understand that.";
      botReply = botReply.split(" ").slice(0, 50).join(" ") + (botReply.split(" ").length > 50 ? "..." : "");

      setMessages(prev => [...prev, { role: "bot", text: botReply, image: botImage }]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages(prev => [...prev, { role: "bot", text: "Oops! Something went wrong. Try again later.", image: botImage }]);
    }

    setIsTyping(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files);
      setImages(prev => [...prev, ...newImages]);

      newImages.forEach(image => {
        setMessages(prev => [...prev, { role: "user", text: `Uploaded an image: ${image.name}`, image: userImage }]);
      });
    }
  };

  const handleAttachButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={handleToggle}
        className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 focus:outline-none flex items-center justify-center"
      >
        <FaRobot size={24} /> {/* Robot Icon */}
      </button>

      {isOpen && (
        <div className="w-96 h-[500px] bg-white text-black rounded-lg shadow-lg flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between bg-blue-600 text-white p-3 rounded-t-lg">
            <span className="text-lg font-bold">Expert</span>
            <FaTimes className="cursor-pointer text-white" onClick={handleToggle} />
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <img
                  src={msg.image || botImage}
                  alt={`${msg.role} avatar`}
                  className="w-8 h-8 rounded-full"
                />
                <div
                  className={`p-2 rounded-lg max-w-[70%] ${
                    msg.role === "user"
                      ? "bg-green-300 text-black"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {images.map((image, index) => (
              <div key={index} className="bg-green-300 text-black p-2 rounded-lg max-w-[70%] self-end">
                <span>Uploaded Image: {image.name}</span>
              </div>
            ))}

            {isTyping && <div className="text-gray-600">Expert is typing...</div>}
          </div>

          {/* Footer */}
          <div className="p-3 flex items-center space-x-2 bg-gray-200 rounded-b-lg">
            <button onClick={handleAttachButtonClick} className="p-2 bg-gray-500 text-white rounded-lg">
              <FaPaperclip />
            </button>
            <input type="file" multiple ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
            <input
              type="text"
              className="flex-1 p-2 rounded-lg bg-white text-black border border-gray-400 focus:outline-none"
              placeholder="Ask me anything..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="p-2 bg-blue-500 text-white rounded-lg">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AITextAssistant;
