import React from 'react';
import Link from 'next/link';
import { EMAIL, EMAIL_HELLO } from '@/constants';
import styles from '../styles/Pages.module.scss';

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default function Policy() {
    return (
        <div className={styles['main']}>
            <div className={styles['nav']}>
                <Link href="/">На главную</Link>
                <span>/</span>
                <span>Политика конфиденциальности</span>
            </div>
            <h1>Политика конфиденциальности</h1>
            <h2>Определения</h2>
            <p>
                Для целей настоящей Политики конфиденциальности следующие
                термины имеют значения, указанные ниже: «GDPR» означает Общий
                регламент по защите данных (Регламент (ЕС) 2016/679), включая
                поправки и внесенные в законодательство Великобритании после
                того, как GDPR перестает применяться в Великобритании.
                «Контроллер», «Обработчик», «Субъект данных», «Персональные
                данные», «Нарушение персональных данных» и «Обработка» имеют те
                же значения, что и в GDPR, а «Обрабатываемый» и «Обрабатывать»
                должны толковаться в соответствии с с определением «Обработка».
                Настоящая Политика конфиденциальности устанавливает порядок
                сбора и обработки вашей личной информации через веб-сайт{' '}
                <a href="https://wazapa.pro" target="_blank">
                    https://wazapa.pro
                </a>
                , сервис WAZAPA, а также продукты, услуги и приложения,
                ссылающиеся на настоящую Политику конфиденциальности (совместно
                именуемые «Сервис»), которую администрация сервиса WAZAPA и ее
                аффилированные лица получают в ходе использования вами Сервиса.
                Используя WAZAPA, вы соглашаетесь с условиями, описанными в
                настоящей Политике конфиденциальности.
            </p>
            <h2>Перечень собираемой нами информации</h2>
            <p>
                Сбор и обработка Персональной информации (персональных данных)
                осуществляется при использовании вами Сервиса. Данную информацию
                можно разделить на две общие категории: Информация, которую вы
                предоставляете самостоятельно и Информация, которая собирается
                автоматически.
            </p>
            <h2>Информация, которую вы предоставляете самостоятельно</h2>
            <p>
                При использовании Сервиса мы запрашиваем и собираем приведенную
                ниже личную информацию. Данная информация необходима для
                надлежащего выполнения любого заключенного между нами договора,
                включая, но не ограничиваясь Пользовательское соглашение. Без
                данной информации мы не сможем предоставить вам все
                запрашиваемые услуги и функции Сервиса.
            </p>
            <p>К такой информации относится:</p>
            <h3>Информация о вашем профиле:</h3>
            <ul>
                <li>ваши фамилия, имя, отчество;</li>
                <li>контактный телефон;</li>
                <li>email (электронная почта).</li>
            </ul>
            <h3>Ваши сообщения</h3>
            <p>
                При работе Сервиса в обычном режиме мы храним ваши сообщения на
                наших серверах в течение неопределенного срока. Мы обеспечиваем
                сквозное шифрование для нашего Сервиса, которое включено по
                умолчанию. Сквозное шифрования означает, что ваши сообщения
                шифруются для того, чтобы оградить их от чтения третьими лицами
                или нас.
            </p>
            <h3>Ваши контакты</h3>
            <p>
                Чтобы помочь вам организовать общение с другими людьми, мы можем
                создавать списки избранных контактов, и вы сами можете
                регистрировать группы или списки рассылки, вступать и
                добавляться в них, при этом эти группы и списки будут
                прикрепляться к информации вашего аккаунта.
            </p>
            <h2>Информация, которая собирается автоматически</h2>
            <p>
                Существует определенная информация, которую мы собираем
                автоматически в результате использования вами Сервиса или с
                помощью файлов cookie. Эта информация, как правило, включает
                информацию об устройстве.
            </p>
            <p>
                Информация об устройстве — мы собираем информацию от и об
                устройствах, которые вы используете, в том числе о том, как вы
                взаимодействуете с Сервисом, и информацию о самом устройстве,
                такую как модель оборудования, операционная система, информация
                о cookie, настройки устройства, тип браузера, язык, уровень
                батареи.
            </p>
            <h2>Цели использования персональной информации</h2>
            <p>
                Мы используем Вашу личную информацию для работы, предоставления,
                разработки и улучшения продуктов и услуг, которые мы предлагаем
                нашим клиентам. Эти цели включают:
            </p>
            <ul>
                <li>идентификацию Пользователя;</li>
                <li>
                    связь с Пользователем, в том числе направление уведомлений,
                    запросов и информации, касающихся использования Сервиса,
                    оказания услуг, а также обработки запросов и заявок от
                    Пользователя;
                </li>
                <li>
                    проведение статистических и иных исследований, на основе
                    обезличенных данных;
                </li>
                <li>
                    проведение маркетинговых акций для Пользователей, в том
                    числе в целях распространения предложений об участии в акции
                    и получения предусмотренных акцией призов/вознаграждений;
                </li>
                <li>для разрешения спорных ситуаций и выявления неполадок;</li>
                <li>
                    для предотвращения потенциально запрещенных и незаконных
                    действий.
                </li>
            </ul>
            <h2>Использование cookie и других идентификаторов</h2>
            <p>
                Чтобы наши системы могли распознавать ваш браузер или
                устройство, а также предоставлять службы Wazapa, мы используем
                файлы cookie и другие идентификаторы.
            </p>
            <p>
                Мы используем cookie, пиксели и другие технологии (совместно
                именуемые «cookie»), чтобы узнать больше о ваших интересах, а
                также предоставить вам функции и услуги Сервиса, включая:
            </p>
            <ul>
                <li>
                    Распознавание при входе в систему. Это необходимо для
                    возможности использования Сервиса.
                </li>
                <li>
                    Проведение исследований и диагностики для улучшения
                    содержания, продуктов и услуг Wazapa.
                </li>
                <li>Предотвращение мошеннических действий.</li>
                <li>Усиление безопасности при использовании Сервиса.</li>
                <li>
                    Формирование статистики. Это позволяет измерять и
                    анализировать работу наших сервисов.
                </li>
            </ul>
            <h2>Передача информации пользователей третьим лицам</h2>
            <p>
                WAZAPA не осуществляет продажу и передачу персональной
                информации пользователей третьим лицам.
            </p>
            <h2>Заключительные положения</h2>
            <p>
                Пользователь может в любой момент изменить (обновить, дополнить)
                предоставленную им персональную информацию или её часть, а также
                параметры её конфиденциальности, написав запрос на{' '}
                <a href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
                    {EMAIL}
                </a>
                .
            </p>
            <p>
                Персональные данные хранятся на Сервисе до момента прекращения
                вами использования Сервиса. В случае удаления данных с Сервиса
                по инициативе одной из сторон, персональные данные пользователя
                хранятся в базах данных Сервиса не более шести месяцев.
            </p>
            <p>
                По истечении вышеуказанного срока хранения персональных данных
                пользователя, персональные данные пользователя уничтожаются.
            </p>
            <p>
                Пользователь вправе в любой момент отозвать предоставленное
                согласие на обработку персональных данных при условии
                письменного уведомления об этом Сервиса по каналам связи,
                указанным ниже, не менее чем за 90 дней до предполагаемой даты
                прекращения обработки и использования предоставленных им
                персональных данных.
            </p>
            <h2>Контактная информация</h2>
            <p>
                По вопросам и предложениям, связанным с настоящей Политикой,
                просим связываться с нами по адресу эл.почты{' '}
                <a
                    href={`mailto:${EMAIL_HELLO}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {EMAIL_HELLO}
                </a>
                .
            </p>
            <div className={styles['contact']}>
                <p>По всем вопросам свяжитесь с нами:</p>
                <a
                    href={`mailto:${EMAIL_HELLO}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {EMAIL_HELLO}
                </a>
            </div>
        </div>
    );
}
