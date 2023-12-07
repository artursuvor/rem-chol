import React, { useEffect, useState } from 'react';

const Recenze: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://www.google.com/localservices/prolist?spp=Cg0vZy8xMWZrd2N3Yl9s&scp=Ch1nY2lkOmFwcGxpYW5jZV9yZXBhaXJfc2VydmljZRon0YDQtdC80L7QvdGCINGF0L7Qu9C-0LTQuNC70YzQvdC40LrQvtCyIjrRgNC10LzQvtC90YIg0YXQvtC70L7QtNC40LvRjNC90LjQutC-0LIg0YfQtdC70Y_QsdC40L3RgdC6KifRgNC10LzQvtC90YIg0YXQvtC70L7QtNC40LvRjNC90LjQutC-0LI%3D&src=2&slp=UhUIARIREg8iDS9nLzExZmt3Y3diX2w#ts=3'
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData);
      } catch (error: any) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);
console.log(data)
  return (
    <div className="recenze-page-container">
      <h1>Recenze</h1>
      {data && (
        <div>
          {/* Ваши действия с данными здесь, например, отображение данных */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Recenze;
