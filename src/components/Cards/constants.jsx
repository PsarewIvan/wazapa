import styles from './Cards.module.scss';

export const CARDS = [
    {
        id: 1,
        title: 'Интеграции с 20 различными CRM',
        content: (
            <ul className={styles['content-list']}>
                <li className={styles['content-list__item']}>Медицина</li>
                <li className={styles['content-list__item']}>Стоматология</li>
                <li className={styles['content-list__item']}>Ветклиники</li>
                <li className={styles['content-list__item']}>Автобизнес</li>
                <li className={styles['content-list__item']}>Образование</li>
            </ul>
        ),
    },
    {
        id: 2,
        title: 'Экономия',
        content:
            'Нет ограничений на количество сообщений. Цена остается неизменной даже при отправке более 100 000 сообщений.',
    },
    {
        id: 3,
        title: 'Сервис',
        content:
            'Возможность отвечать клиенту на его сообщения. Использовать в сообщениях ссылки, картинки и Emoji',
    },
    {
        id: 4,
        title: 'Двойная интеграция',
        content:
            'Возможность отправлять единые сообщения одновременно из вашей CRM и AmoCRM или Битрикс 24',
    },
    {
        id: 5,
        title: 'Telegram',
        content: 'Подключение второго канала в телеграмм в подарок!',
    },
];
