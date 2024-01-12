const express = require('express');
let fetch;
try {
  fetch = require('node-fetch');
} catch (err) {
  // Если require('node-fetch') не поддерживается, используем import
  fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
}

const app = express();

app.get('/vk-posts', async (req, res) => {
  try {
    const accessToken = 'vk1.a.cZJ5gHkxcZjF79QICX5akZ91Us9d-fLgKz5ve1EH8yPGPTYWiQan2l17fV7ztT9S5wmXd8Nk6MON2K8beM1zdIPsuiuGv4UgF6WoTrApEy-Dou1WrWx3fFLPuQ-fmsaL18JUhkoXJYC0stLnnd8RFDol9_pyUaX2y5C61W0IEtS7Bx2RlKaiMPxXpqimMe7Ujq-aEm_V4bCWdtPTCGOj4g'; // Ваш токен доступа ВКонтакте
    const groupId = 'remholodchel'; // ID или короткое имя сообщества

    const response = await fetch(`https://api.vk.com/method/wall.get?domain=${groupId}&access_token=${accessToken}&v=5.131`);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error('Ошибка:', error);
    res.status(500).json({ error: 'Произошла ошибка при получении данных из VK API' });
  }
});

const PORT = 3001; // Порт для вашего сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
