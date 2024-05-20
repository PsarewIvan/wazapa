import React from 'react';
import classNames from 'classnames';
import { PHONE } from '../../../constants';
import styles from './Phone.module.scss';

function Phone({ className }) {
    return (
        <a
            className={classNames(styles['link'], className)}
            href={`tel:${PHONE.replace(/[^\d+]/g, '')}`}
            target="_blank"
            rel="noreferrer"
        >
            {PHONE}
        </a>
    );
}

export default Phone;
