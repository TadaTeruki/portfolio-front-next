import Image from 'next/image';
import React from 'react';
import MainContainer from '../../../layout/container/maincontainer/maincontainer';
import styles from './banner.module.css';

const Banner = (props: {
    image_src: string;
    height: string;
    background_mode: 'black' | 'white';
    children: React.ReactNode;
}) => {
    let background_color: string;
    switch (props.background_mode) {
        case 'black':
            background_color = 'rgb(45, 45, 45)';
            break;
        case 'white':
            background_color = 'rgb(245, 245, 245)';
            break;
        default:
            background_color = 'rgb(100, 0, 100)';
            break;
    }

    return (
        <>
            <div className={styles.image_container} style={{ height: props.height, backgroundColor: background_color }}>
                <Image src={props.image_src} alt={'banner'} width={1500} height={250} className={styles.image} />
                <div className={styles.info}>
                    <MainContainer>{props.children}</MainContainer>
                </div>
            </div>
        </>
    );
};

export default Banner;
