import React from 'react'
import { useSelector } from 'react-redux'
import { withAuthRedirect } from '../HOC/withAuthRedirect'
import { setUserDataSelector } from '../selectors/authSelectors'
import styles from './common/Common.module.css'
import { Link } from 'react-router-dom'


const Home: React.FC = () => {
    const { name } = useSelector(setUserDataSelector)
    return <div className={styles.main}>
        <h2> Добро пожаловать на сайт, {name}! </h2>
        <p> Этот сайт был разработан для ознакомления модераторов с подробными инструкциями, которые подойдут как начинающему представителю команды волонтеров Wargaming, так более продвинутому модератору, который определенно познакомится с чем-то новым и улучшит свои навыки в этом деле. Ежегодно наша команда работает с десятками тысяч нарушений, поэтому поиск является неотъемлимой и не менее важной частью всего процесса. Если Вы пришли сюда, значит хотите (надеюсь) научиться более профессионально работать с нарушениями. Моя задача - с помощью инструкции в короткие сроки обучить начинающих представителей Legal Team и показать им важные нюансы поиска, а также помочь каждому модератору внести свой вклад по поддержанию порядка и соблюдения <a href='https://legal.ru.wargaming.net/ru/eula/' target="_blank" rel="noreferrer">Лицензионного Соглашения Wargaming в социальных сетях. </a></p>
        <p> На данный момент имеются 4 полные инструкции: <Link to='/network/search/vk'>Vk</Link>, <Link to='/network/search/telegram'>Telegram</Link>, <Link to='/network/search/discord'>Discord</Link>, <Link to='/network/search/instagram'>Instagram</Link>. Совсем скоро будут добавлены инструкции и по всем остальным сетям. В первую очередь рекомендую начать просмотр со cтраницы <Link to='/network/search/vk'>Vk</Link>, ведь именно там раскрываются основные приемы и хитрости при работе с поиском. Освоих их, можно с легкостью переключиться на любую другую сеть и использовать их повторно. Вот-вот мы научимся пользоваться таблицей, в которой я представил свои лучшие связки запросов, разработанные за все свое время нахождения в Legal Team. В процессе создания инструкций я попытался влить весь свой опыт, и, надеюсь, что не зря :) </p>
        <p> Если у Вас остались какие-то вопросы или пожелания по доработке, можно связаться со мной напрямую через контакты, либо же оставить комментарий, который я обязательно просмотрю. </p>
        <h4> С введением закончили - <Link to='/network/search/vk'>пора перейти к делу!</Link> </h4>
    </div>
}


export default withAuthRedirect(Home)