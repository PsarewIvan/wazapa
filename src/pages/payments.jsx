import React from 'react';
import Link from 'next/link';

function Payments() {
    return (
        <div>
            <div>
                <Link href="/">На главную</Link>
                <span>/</span>
                <span>Реквизиты</span>
            </div>
            <h1>Реквизиты</h1>
            <p>ИП Галиев Тимур Камилевич</p>
            <p>ИНН: 027405480897</p>
            <p>ОГРНИП: 323774600615019</p>
            <p>Расчетный счет № 40802810302740006268 в АО «АЛЬФА-БАНК»,</p>
            <p>БИК 044525593,</p>
            <p>к/с 30101810200000000593 в ГУ Банка России по ЦФО.</p>
            <p>Адрес: г. Москва, Береговой проезд, д. 5а, корп. 5</p>
        </div>
    );
}

export default Payments;
