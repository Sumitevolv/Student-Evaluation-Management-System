// Theme toggle functionality
    function toggleMode() {
      document.body.classList.toggle('dark-mode');
      const modeToggle = document.querySelector('.mode-toggle');
      
      if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
      } else {
        modeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
      }
    }
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      document.querySelector('.mode-toggle').textContent = '☀️';
    }
    
    // Toggle FAQ items
    function toggleFaq(element) {
      element.classList.toggle('active');
    }
    
    // AI Assistant functionality
    function sendMessage() {
      const userInput = document.getElementById('userInput');
      const chatContainer = document.getElementById('chatContainer');
      
      if (userInput.value.trim() === '') return;
      
      // Add user message
      const userMessage = document.createElement('div');
      userMessage.className = 'message user-message';
      userMessage.textContent = userInput.value;
      chatContainer.appendChild(userMessage);
      
      // Generate AI response
      setTimeout(() => {
        const aiResponse = generateAIResponse(userInput.value.toLowerCase());
        const aiMessage = document.createElement('div');
        aiMessage.className = 'message ai-message';
        aiMessage.textContent = aiResponse;
        chatContainer.appendChild(aiMessage);
        
        // Scroll to bottom
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 1000);
      
      // Clear input
      userInput.value = '';
      
      // Scroll to bottom
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    // Generate AI responses
    function generateAIResponse(userInput) {
      if (userInput.includes('evaluation') || userInput.includes('grade') || userInput.includes('score')) {
        return "To evaluate a student, go to the Evaluation section and enter the student's scores. The system will calculate overall performance, generate insights, and provide recommendations for improvement.";
      } else if (userInput.includes('video') || userInput.includes('lecture') || userInput.includes('watch')) {
        return "All lecture videos are organized by subject and semester in the Lecture Videos section. You can search for specific topics or use the filters to find relevant content.";
      } else if (userInput.includes('login') || userInput.includes('password') || userInput.includes('account')) {
        return "If you're having trouble logging in, use the 'Forgot Password' feature on the login page. For other account issues, contact our support team at support@sems.com.";
      } else if (userInput.includes('help') || userInput.includes('support') || userInput.includes('contact')) {
        return "You can contact our support team via email at support@sems.com or by phone at +1 (800) 123-4567 during business hours. We're here to help!";
      } else if (userInput.includes('feature') || userInput.includes('suggestion') || userInput.includes('improve')) {
        return "Thanks for your interest in improving SEMS! Please use the feedback form on this page to share your suggestions with our development team.";
      } else {
        return "I'm sorry, I didn't quite understand that. Could you please rephrase your question? You can ask me about evaluations, lecture videos, or account issues.";
      }
    }
    
    // Allow pressing Enter to send message
    document.getElementById('userInput').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
    
    // Submit feedback
    function submitFeedback() {
      const feedbackType = document.getElementById('feedback-type').value;
      const feedbackMessage = document.getElementById('feedback-message').value;
      
      if (!feedbackType || !feedbackMessage) {
        alert('Please select a feedback type and provide your feedback message.');
        return;
      }
      
      // In a real application, this would be sent to a server
      alert('Thank you for your feedback! We appreciate your input and will use it to improve SEMS.');
      
      // Clear form
      document.getElementById('feedback-type').value = '';
      document.getElementById('feedback-message').value = '';
      document.getElementById('feedback-email').value = '';
    }
    
    // Initialize with some AI suggestions
    document.addEventListener('DOMContentLoaded', function() {
      // Add some suggested questions after a delay
      setTimeout(() => {
        const chatContainer = document.getElementById('chatContainer');
        const suggestion = document.createElement('div');
        suggestion.className = 'message ai-message';
        suggestion.innerHTML = "Try asking me: <br>• 'How do I evaluate a student?' <br>• 'Where can I find lecture videos?' <br>• 'I need help with my account'";
        chatContainer.appendChild(suggestion);
      }, 3000);
    });