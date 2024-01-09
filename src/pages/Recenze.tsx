import React, { useEffect, useState } from 'react';

const Recenze: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const accessToken = 'vk1.a.cZJ5gHkxcZjF79QICX5akZ91Us9d-fLgKz5ve1EH8yPGPTYWiQan2l17fV7ztT9S5wmXd8Nk6MON2K8beM1zdIPsuiuGv4UgF6WoTrApEy-Dou1WrWx3fFLPuQ-fmsaL18JUhkoXJYC0stLnnd8RFDol9_pyUaX2y5C61W0IEtS7Bx2RlKaiMPxXpqimMe7Ujq-aEm_V4bCWdtPTCGOj4g'; // Замените на ваш токен доступа ВКонтакте
    const groupId = 'remholodchel'; // ID или короткое имя сообщества

    fetch(`https://api.vk.com/method/wall.get?domain=${groupId}&access_token=${accessToken}&v=5.131`)
      .then(response => response.json())
      .then(data => {
        if (data && data.response && data.response.items) {
          setPosts(data.response.items);
        }
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  }, []);

  return (
    <div className="recenze-page-container">
      {posts.map((post: any) => (
        <div key={post.id}>
          <h3>{post.text}</h3>
          {/* Другая информация о посте, которую можно отобразить */}
        </div>
      ))}
    </div>
  );
};

export default Recenze;
