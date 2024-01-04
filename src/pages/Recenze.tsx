import React, { useEffect, useState } from 'react';

const Recenze: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]); // Здесь будут храниться записи

  useEffect(() => {
    const accessToken = 'YOUR_ACCESS_TOKEN'; // Ваш токен доступа ВКонтакте
    const groupId = 'remholodchel'; // ID или короткое имя сообщества

    fetch(`https://api.vk.com/method/wall.get?domain=${groupId}&access_token=${accessToken}&v=5.131`)
      .then(response => response.json())
      .then(data => {
        // Устанавливаем полученные записи в состояние
        setPosts(data.response.items);
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  }, []); // Пустой массив зависимостей, чтобы useEffect выполнялся только один раз при монтировании компонента

  return (
    <div className="recenze-page-container">
      {/* Выводим записи на странице */}
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.text}</h3>
          {/* Другая информация о посте, которую можно отобразить */}
        </div>
      ))}
    </div>
  );
};

export default Recenze;
