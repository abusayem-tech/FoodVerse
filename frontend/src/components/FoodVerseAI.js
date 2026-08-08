import React, { useState, useRef, useEffect } from 'react';
import './FoodVerseAI.css';

const FoodVerseAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMoreModal, setShowMoreModal] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! 👋 আমি FoodVerse AI। আজ আপনার কী খেতে ইচ্ছে করছে?' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // সব সাজেস্টেড প্রম্পট তালিকা
  const allPrompts = [
    { label: "🍗 Kacchi Biryani", query: "কাচ্চি বিরিয়ানি দেখাও" },
    { label: "💰 500 Tk Combo", query: "৫০০ টাকার মধ্যে দুইজনের খাবার" },
    { label: "🏷️ Promo Offers", query: "আজকের সেরা অফার কী?" },
    { label: "🥗 Non-Spicy Food", query: "স্বাস্থ্যকর ও কম ঝাল খাবার" },
    { label: "🍔 Best Burgers", query: "সেরা বার্গারের অপশন দেখাও" },
    { label: "🍕 PizzaBurg vs Chillox", query: "PizzaBurg না Chillox—কোনটা ভালো?" },
    { label: "⚡ 30 Min Delivery", query: "৩০ মিনিটের মধ্যে কোন restaurant deliver করবে?" },
    { label: "🍦 Ice Cream & Dessert", query: "ভালো কোনো ডেজার্ট বা আইসক্রিম সাজেস্ট করো" },
    { label: "☕ Cold Coffee & Drinks", query: "কফি বা জুসের ভালো রেস্টুরেন্ট কোনটা?" },
    { label: "🍚 Khichuri & Deshi", query: "দেশি খাবার বা ভুনা খিচুড়ি দেখাও" },
  ];

  const generateAIResponse = (userText) => {
    const text = userText.toLowerCase().trim();

    if (text.includes("hi") || text.includes("hello") || text.includes("হাই") || text.includes("হ্যালো") || text.includes("salam") || text.includes("hey")) {
      return "Hello! 😊 আশা করি ভালো আছেন! বলুন, আজ আপনার জন্য কোন খাবারের সন্ধান নিয়ে আসব?";
    }
    if (text.includes("dhonnobad") || text.includes("thanks") || text.includes("thank you") || text.includes("ধন্যবাদ")) {
      return "You're welcome! স্বাদের দুনিয়ায় আপনাকে স্বাগতম! 🍔✨";
    }

    if (text.includes("biryani") || text.includes("kacchi") || text.includes("tehari") || text.includes("বিরিয়ানি") || text.includes("কাচ্চি") || text.includes("তেহারি")) {
      return "Biryani or Kacchi lover? 🔥\n• Kacchi: Sultan's Dine or Kacchi Bhai (Rating 4.8⭐)\n• Tehari: Try Puran Dhaka style Tehari from Chef's Special!";
    }
    if (text.includes("vhat") || text.includes("rice") || text.includes("khichuri") || text.includes("deshi") || text.includes("vorta") || text.includes("ভাত") || text.includes("খিচুড়ি") || text.includes("দেশি")) {
      return "ঘরোয়া দেশি খাবারের জন্য 'মায়ের হাড়ি' বা 'Local Kitchen' থেকে সরিষার তেলে ভুনা খিচুড়ি অথবা ইলিশ-ভর্তা অর্ডার করতে পারেন।";
    }

    if (text.includes("burger") || text.includes("bargai") || text.includes("বার্গার")) {
      return "Best Juicy Burgers for you:\n1. Chillox - Smoky Beef Cheese Burger 🍔\n2. Takeout - Beef Cheese Deluxe\n3. Khanas - Chicken Patty Burger";
    }
    if (text.includes("pizza") || text.includes("pasta") || text.includes("পিজ্জা") || text.includes("পাস্তা")) {
      return "Top Italian choices 🍕:\n• PizzaBurg - Oven Baked Pasta or Cheese Pizza\n• Domino's / Pizza Hut for classic pizza lovers!";
    }

    if (text.includes("sweet") || text.includes("cake") || text.includes("ice cream") || text.includes("dessert") || text.includes("মিষ্টি") || text.includes("আইসক্রিম")) {
      return "Sweet tooth? 🍦🍰\nTry Secret Recipe's Chocolate Cake or Za'Nee's special ice cream desserts!";
    }
    if (text.includes("coffee") || text.includes("tea") || text.includes("juice") || text.includes("কফি") || text.includes("চা") || text.includes("জুস")) {
      return "Refreshment options ☕🥤:\n• North End Cold Coffee\n• Fresh Mango Shake from Juice Bar!";
    }

    if (text.includes("100") || text.includes("200") || text.includes("১০০") || text.includes("২০০") || text.includes("sosta") || text.includes("cheap") || text.includes("dam kom") || text.includes("কম দাম")) {
      return "200 Tk budget options 💰:\n• Chicken Shawarma (120৳)\n• French Fries + Cold Drinks (150৳)\n• Egg Roll / Fried Chicken (180৳)";
    }
    if (text.includes("300") || text.includes("500") || text.includes("৩০০") || text.includes("৫০০") || text.includes("budget")) {
      return "300-500 Tk best deals 🍔🍕:\n1. 1:2 Cheese Pizza from PizzaBurg\n2. Beef Burger + Fries Combo from Chillox\n3. 1 Plate Kacchi + Borhani combo!";
    }

    if (text.includes("no chilli") || text.includes("mild") || text.includes("less spicy") || text.includes("jhal chara") || text.includes("diet") || text.includes("healthy") || text.includes("soup") || text.includes("salad") || text.includes("ঝাল ছাড়া") || text.includes("কম ঝাল") || text.includes("স্যুপ")) {
      return "Non-spicy & Healthy options 🥗:\n• Cream of Mushroom Soup\n• Grilled Chicken Salad\n• White Sauce Steamed Pasta";
    }

    if (text.includes("fast") || text.includes("30 min") || text.includes("30 minute") || text.includes("তাড়াতাড়ি") || text.includes("৩০ মিনিট") || text.includes("taratari")) {
      return "Fastest delivery (within 20-30 mins) ⚡:\nExpress Kitchens, Khanas, and Takeout!";
    }
    if (text.includes("offer") || text.includes("discount") || text.includes("promo") || text.includes("coupon") || text.includes("অফার") || text.includes("ডিসকাউন্ট")) {
      return "🎉 Special Offer Today: Use promo code 'FOOD20' to get 20% Cashback! Check the Offers page.";
    }

    if (text.includes("pizzaburg") || text.includes("chillox")) {
      return "PizzaBurg is best for budget pizzas & baked pasta 🍕. Chillox is the king of juicy beef burgers! 🍔";
    }

    return `Looking for '${userText}'? 🔍\nYou can ask about Biryani, Burgers, Pizza, 200/500 Tk budget meals, or non-spicy options in Bangla, English or Banglish! ✨`;
  };

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const updatedMessages = [...messages, { sender: 'user', text: query }];
    setMessages(updatedMessages);
    if (!textToSend) setInput('');
    setShowMoreModal(false);

    setTimeout(() => {
      const aiReply = generateAIResponse(query);
      setMessages((prev) => [...prev, { sender: 'ai', text: aiReply }]);
    }, 500);
  };

  return (
    <div className="foodverse-ai-wrapper">
      <button className="ai-float-btn" onClick={() => setIsOpen(!isOpen)}>
        ✨ FoodVerse AI
      </button>

      {isOpen && (
        <div className="ai-chat-box">
          <div className="ai-chat-header">
            <div className="ai-title">
              <span className="sparkle">✨</span>
              <strong>FoodVerse AI Assistant</strong>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="ai-chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.sender}`} style={{ whiteSpace: 'pre-line' }}>
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* কুইক প্রম্পট বার (ডানে স্ক্রলও করা যাবে + মোর বাটনও থাকবে) */}
          <div className="quick-prompts">
            <button className="more-btn" onClick={() => setShowMoreModal(true)}>➕ More Prompts</button>
            {allPrompts.map((prompt, i) => (
              <button key={i} onClick={() => handleSend(prompt.query)}>{prompt.label}</button>
            ))}
          </div>

          {/* অল সাজেস্টিভ প্রম্পটস পপ-আপ মোডাল */}
          {showMoreModal && (
            <div className="prompt-modal-overlay" onClick={() => setShowMoreModal(false)}>
              <div className="prompt-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                  <strong>All Suggested Topics 💡</strong>
                  <button className="close-btn" onClick={() => setShowMoreModal(false)}>✕</button>
                </div>
                <div className="modal-body">
                  {allPrompts.map((item, idx) => (
                    <button key={idx} className="modal-prompt-item" onClick={() => handleSend(item.query)}>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="ai-chat-footer">
            <input 
              type="text" 
              placeholder="Ask anything..." 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="send-btn" onClick={() => handleSend()}>
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodVerseAI;