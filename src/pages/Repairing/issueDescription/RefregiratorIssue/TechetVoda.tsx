import React from 'react';

const TechetVoda = () => {
    return (
        <div className='selected-issue-description'>
            <p>
                Появление воды в холодильнике или под ним – явление крайне неприятное, но это не значит, что потребуется ремонт. Одна из возможных причин – засорение сливной системы испарителя. Рассмотрим основные причины протечки.
            </p>
            <p>
                Откуда течет вода?
            </p>
            <p>
                Установление точной причины протекания холодильника поможет ускорить решение проблемы. Если вода собирается под агрегатом, следует проверить:
            </p>
            <ul>
                <li>Обстановку внутри холодильника: если везде сухо, отсутствует лужа под ящиком для овощей и фруктов, возможно, сместилась трубка дренажного слива, вследствие чего жидкость направляется мимо специального стока – следует поправить водоотводный шланг.</li>
                <li>Есть ли трещина в емкости для сбора воды, это часто происходит при транспортировке холодильника или его перемещении внутри помещения, надо отодвинуть агрегат и проверить состояние резервуара.</li>
                <li>Состояние стен морозильной камеры, если на них образуется значительное количество льда и снега, не исключена поломка нагревателя испарителя. Тогда модель с системой No Frost функционирует как обычная, а при открытии морозилки под воздействием теплого воздуха снежная «шуба» тает, образуется много воды, резервуар для ее сбора чрезмерно быстро наполняется. «Лечение» - следует заменить нагреватель испарителя.</li>
            </ul>
            <br />
            <img src="./photos/problem.jpg" alt="problem-photo" width="450" height="350" />
            <br />
            <p>
                Часто вода собирается и снаружи, и внутри холодильника. Это может возникать из-за ряда причин:
            </p>
            <ul>
                <li>Засорения дренажного отверстия морозильной камеры. Признаки: в морозилке образуется сильная наледь, присутствует незамерзшая вода, вытекающая в расположенный ниже отсек. Чистка дренажной трубы, расположенной внутри холодильника, требует определенного опыта и навыков, такую работу целесообразно доверить мастеру.</li>
                <li>Засорилось дренажное отверстие холодильной камеры. Признаки: вода протекает по лицевой части, собирается под нижним ящиком. Причина: попадание крошек и частиц продуктов. Очистка слива осуществляется при помощи спринцовки с теплой водой, впрыскиваемой в отверстие. Если это не помогает, придется воспользоваться трубочкой для коктейля или ватной палочкой.</li>
                <li>Износ уплотнителя дверки. Продукты перемораживаются, в нижней части холодильника накапливается вода со льдом, образуется лужица под холодильником. В этом случае потребуется замена уплотнителя.</li>
                <li>Неправильное расположение холодильника. Если он установлен неровно, дверца может плохо прилегать к корпусу, из-за чего внутрь попадет теплый воздух. Это приводит к интенсивной работе компрессора и перемораживанию продуктов, образуется значительное количество льда и воды, переполняющей резервуар. Проблема решается выставлением холодильника по уровню. Это можно сделать самостоятельно, не прибегая к услугам мастера.</li>
            </ul>
            <p>
                Не получилось справиться с проблемой самостоятельно?
            </p>
            <a href="tel:+79823435703">8 (982) 343-57-03</a>
        </div>
    );
};

export default TechetVoda;
