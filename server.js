const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
require('dotenv').config();

const DEEPSEEK_API_KEY = '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'

// Middleware
app.use(express.static(path.join(__dirname, '/public')));
// Или для GitHub Pages:
app.use(express.static(__dirname + '/public'));
app.use(express.json());

// API Routes
app.use('/api', require('./routes/volunteersRoutes'));
app.use('/api', require('./routes/ogranizersRoutes'));
app.use('/api', require('./routes/eventsRoutes'));

// AI Chat Support Route
app.post('/api/ai-chat', async (req, res) => {
    try {
        const { message } = req.body;

        const deepseekResponse = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: "deepseek/deepseek-r1",
                messages: [
                    {
                        role: "system",
                        content: `Ты русскоязычный ассистент системы управления событиями. 
                                 Отвечай только на русском языке. Сегодня ${new Date().toLocaleDateString('ru-RU')}. 
                                 Помогай с вопросами о мероприятиях, волонтерах и организаторах.`
                    },
                    { role: "user", content: message }
                ],
                temperature: 0.7,
                max_tokens: 500
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
                    'HTTP-Referer': 'http://localhost:3000', // Обязательно для OpenRouter
                    'X-Title': 'Event Management' // Обязательно для OpenRouter
                }
            }
        );

        const aiResponse = deepseekResponse.data.choices[0].message.content;
        res.json({ response: aiResponse });
    } catch (error) {
        console.error('Ошибка DeepSeek API:', error);
        
        // Резервные ответы на русском
        const localResponses = {
            "привет": "Здравствуйте! Чем могу помочь в управлении событиями?",
            "мероприятие": "Вы можете управлять мероприятиями во вкладке 'Мероприятия'.",
            "волонтер": "Работа с волонтерами доступна во вкладке 'Волонтеры'.",
            "организатор": "Управление организаторами находится во вкладке 'Организаторы'.",
            "default": "Извините, не могу обработать запрос. Пожалуйста, задайте вопрос о мероприятиях, волонтерах или организаторах."
        };
        
        const lowerMessage = (message || '').toLowerCase();
        const localResponse = localResponses[lowerMessage] || 
                             (lowerMessage.includes('привет') ? localResponses["привет"] :
                             (lowerMessage.includes('мероприяти') ? localResponses["мероприятие"] :
                             (lowerMessage.includes('волонтер') ? localResponses["волонтер"] :
                             (lowerMessage.includes('организатор') ? localResponses["организатор"] : 
                              localResponses["default"]))));
        
        res.json({ response: localResponse });
    }
});
// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('Not Found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
