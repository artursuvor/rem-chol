import React from 'react';

const NeGoritIndikacia = () => {
  const indicatorStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    borderRadius: '5px',
    margin: '20px',
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
  };

  const listItemStyle = {
    marginBottom: '8px',
  };

  return (
    <div style={indicatorStyle}>
      <p>
        Если индикаторы на стиральной машине не светятся, это может быть вызвано несколькими причинами:
        <ul style={listStyle}>
          <li style={listItemStyle}>Проблемы с электропитанием: Проверьте, подключена ли стиральная машина к электросети, проверьте розетку и убедитесь, что нет перебоев в подаче электроэнергии. Также убедитесь, что выключатель питания стиральной машины включен.</li>
          <li style={listItemStyle}>Перегоревший предохранитель или автоматический выключатель: В случае короткого замыкания или перегрузки может сработать предохранитель или автоматический выключатель в электрической системе стиральной машины, что приводит к отключению индикации. Проверьте предохранители и автоматические выключатели на панели управления стиральной машины.</li>
          <li style={listItemStyle}>Неисправность электроники или платы управления: Если у вас нет индикации и при этом не работает ни одна из функций стиральной машины, возможно, есть проблемы с платой управления или электроникой. Это может потребовать профессионального ремонта или замены неисправной детали.</li>
          <li style={listItemStyle}>Проблемы с проводкой или соединениями: Проверьте проводку и соединения внутри стиральной машины на предмет повреждений или обрывов.</li>
          <li style={listItemStyle}>Неисправность дисплея или светодиодов: Если дисплей или светодиоды неисправны, это также может привести к отсутствию индикации. В этом случае потребуется замена дисплея или светодиодов.</li>
        </ul>
        Если проверка основных аспектов (электропитание, предохранители, проводка) не помогает восстановить индикацию на стиральной машине, рекомендуется обратиться к специалисту для более детальной диагностики и ремонта.
      </p>
    </div>
  );
};

export default NeGoritIndikacia;