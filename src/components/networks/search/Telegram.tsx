import React from 'react'
import { Link } from 'react-router-dom'
import styles from './../../common/Common.module.css'
import img1 from './../../../images/telegram/part.png'
import img2 from './../../../images/telegram/window.png'
import img3 from './../../../images/telegram/full.png'
import img4 from './../../../images/telegram/tgstat.png'
import img5 from './../../../images/telegram/telegros.png'
import img6 from './../../../images/telegram/popsters.png'
import img7 from './../../../images/telegram/search_messages.png'


const TelegramSearch: React.FC = () => {
    return <div className={styles.main}>
        <h2>Инструкция по поиску - Telegram:</h2>
        <p> Несмотря на то, что в остальных социальных платформах не так много нарушений, как, например, в <Link to='/network/search/vk'>Vk</Link>, я все равно решил сделать отдельные инструкции, в которых расскажу про нюансы поиска и особенности каждой сети. Надеюсь, что Вы уже ознакомились с предыдущей страницей, ведь тут и во всех остальных сетях мы будем использовать похожие методы и приемы. </p>
        <p> Точный запрос при поиске в телеграме можно осуществить тогда, когда мы обернем его в кавычки - так мы получим результат, в котором обязательно будут показаны слова и символы, которые оказались в кавычках. </p>
        <h3>Поиск каналов и чатов</h3>
        <p> В телеграме поиск несколько отличается от других сетей: алгоритмы при запросе в поисковике позволяют увидеть всего от 3 до 10 нарушений за раз, которые телеграм считает найболее полезными, остальные же просто скрывает, из-за чего поиск не может получиться свободным и расширенным. Но разве собирать по несколько нарушений не будет достаточно для нашей команды, правда ведь? Какими способами лучше искать? На эти вопросы я сейчас постараюсь ответить. Я выделяю для себя 2 основных способа: </p>
        <h4>Первый способ</h4>
        <p> Многие недооценивают возможности поиска в браузерах или вообще не подозревают о наличии такой функции. Чтобы получить более, чем несколько нарушений, мы воспользуемся поиском в гугле, а не самим внутренним поиском телеграма. Наш запрос будет состоять из нескольких необходимых частей: </p>
        <ul>
            <li>site:t.me</li>
            <li>сам запрос(символы или несколько слов)</li>
            <li>-joinchat</li>
        </ul>
        <p> После введенного запроса, гугл покажет нам столько же нарушений, сколько и телеграм. Но разве это нам нужно? Это легко обойти, ведь под запросом будет ссылка "показать скрытые результаты", которая и покажет все запросы, которые нас интересовали, причем закрытые каналы также будут попадаться. Так вместо нескольких мы увидим сотни, а то и тысячи, хоть иногда и повторяющихся нарушений. Этот способ я считаю найболее эффективным. </p>
        <div><img width='453' height='494' src={img1} alt='' /></div>
        <div><img width='800' height='104' src={img2} alt='' /></div>
        <div><img width='451' height='637' src={img3} alt='' /></div>
        <h4>Второй способ</h4>
        <p> Этот способ связан с использованием сторонних сайтов и программ. В интернете есть много различных каталогов и сервисов аналитики, которые упрощают поиск, а также дают дополнительные возможности, что может сильно облегчить работу с поиском. Среди таких я могу выделить следующие аналитические сайты: <a href='https://tgstat.ru/search' target="_blank" rel="noreferrer">Tgstat</a>, <a href='https://telegros.ru/' target="_blank" rel="noreferrer">Telegros</a> и <a href='https://popsters.ru/' target="_blank" rel="noreferrer">Popsters</a> - можно попробовать каждый и выбрать для себя найболее подходящий инструмент. Они дадут приятную возможность настроить запрос и выбрать необходимые параметры, благодаря чему поиск станет более продуктивным. </p>
        <div><img width='753' height='377' src={img4} alt='' /></div>
        <div><img width='769' height='242' src={img5} alt='' /></div>
        <div><img width='758' height='361' src={img6} alt='' /></div>
        <h3>Поиск сообщений</h3>
        <p> "А для поиска сообщений в телеграме также нужно использовать сторонние программы и сервисы?" Нет, тут все несколько проще. Поиск в телеграме похож на поиск сообщений в <Link to='/network/search/vk'>VK</Link>, где мы подбираем слова из 1, 2 и 3 группы имеющейся уже <Link to='/network/search/vk#table'>таблицы</Link>. Однако, есть кое-какая важная и приятная особенность, которая отличает телеграм от остальных сетей - войдя в чат, мы можем сразу просмотреть всю историю, благодаря чему появляется возможность отыскать и убрать немало дополнительных нарушений. </p>
        <div><img width='836' height='640' src={img7} alt='' /></div>
        <p> Надеюсь, данная инструкция окажется крайне полезной для тех, кому нравится собирать и оформлять нарушения в телеграме. Ну а мы идем дальше. </p>
        <h4>Следующая инструкция: <Link to='/network/search/discord'>Discord</Link></h4>
    </div>
}

export default TelegramSearch