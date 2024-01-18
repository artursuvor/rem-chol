import React, { useEffect, useState } from 'react';
import './Recenze.css'

const Recenze: React.FC = () => {
  const [vkLoaded, setVkLoaded] = useState(false);

  useEffect(() => {
    const loadVKScript = () => {
      const { VK } = window as any;

      if (!VK) {
        const vkScript = document.createElement('script');
        vkScript.src = 'https://vk.com/js/api/openapi.js?169';
        vkScript.async = true;
        document.body.appendChild(vkScript);

        vkScript.onload = () => {
          setVkLoaded(true);
        };
      } else {
        setVkLoaded(true);
      }
    };

    loadVKScript();
  }, []);

  useEffect(() => {
    if (vkLoaded) {
      (window as any).VK.Widgets.Post("vk_post_-219907410_19", -219907410, 19, 'FxeYOa5Hdu82Itb8vqw58eNhxMkM', {width:500});
      (window as any).VK.Widgets.Post("vk_post_-219907410_17", -219907410, 17, 'rF0gqmnFCvJ-jn0NHofuiGnmJFqt', {width:500});
      (window as any).VK.Widgets.Post("vk_post_-219907410_16", -219907410, 16, 'LoKMhBj9NoiK_NAmQCKpbo4rkzVc', {width:500});
      (window as any).VK.Widgets.Post("vk_post_-219907410_13", -219907410, 13, '9OAubCWpOxIgnVMSKAZCSj1xpAx7', {width:500});
    }
  }, [vkLoaded]);

  return (
    <div className='recenze-container'>
      <p>
        Все отзывы вы можете посмотреть в моей группе 
      </p>
      <a href="https://vk.com/remholodchel" target="_blank" rel="noreferrer">ВКОНТАКТЕ</a>
      <div id="vk_post_-219907410_19"></div>
      <div id="vk_post_-219907410_17"></div>
      <div id="vk_post_-219907410_16"></div>
      <div id="vk_post_-219907410_13"></div>
    </div>
  );
};

export default Recenze;
