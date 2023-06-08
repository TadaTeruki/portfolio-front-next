import PlainLink from '../../../layout/link/plainlink/plainlink';
import Panel from '../../general/panel/panel';
import TagBox from '../../general/tagbox/tagbox';
import styles from './productbox.module.css';

const ProductBox = (props: {
    name: string;
    description: string;
    skills: string[];
    link: string;
    image: string;
    awards: string[];
}) => {
    var skills_item: any = [];
    for (let i = 0; i < props.skills.length; i++) {
        if (props.skills[i] === '') continue;
        skills_item.push(
            <TagBox key={i} hover={false}>
                {props.skills[i]}
            </TagBox>
        );
    }

    var awards_item: any = [];
    for (let i = 0; i < props.awards.length; i++) {
        if (props.skills[i] === '') continue;
        awards_item.push(
            <div className={styles.award} key={i}>
                {props.awards[i]}
            </div>
        );
    }

    const info = (
        <>
            <h3>
                {props.name}&nbsp;&nbsp;
                {props.link.startsWith('https://github.com') ? (
                    <img
                        alt="github logo"
                        height={16}
                        width={16}
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Flogo%2Fgithub-mark.png?alt=media&token=606de0ae-46f7-47dc-8495-31717abfbe00&_gl=1*1puj20k*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NTg4MDc1My4zMy4xLjE2ODU4ODA4NjguMC4wLjA."
                    />
                ) : props.link.startsWith('https://tadateruki.itch.io') ? (
                    <img
                        alt="itch.io logo"
                        height={16}
                        width={16}
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Flogo%2Fitchio-logo-textless-black.png?alt=media&token=30f058db-5bc9-450e-8e97-56f532cf5900&_gl=1*vubull*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NTg4MDc1My4zMy4xLjE2ODU4ODA5OTMuMC4wLjA."
                    />
                ) : (
                    <></>
                )}
            </h3>
            <p>{props.description}</p>
            {awards_item.length !== 0 ? <>{awards_item}</> : <></>}
            <div className={styles.skilltable}>{skills_item.length !== 0 ? <>{skills_item}</> : <></>}</div>
            <br />
        </>
    );

    return (
        <PlainLink href={props.link}>
            <Panel mode="normal">
                <div className={styles.flex}>
                    <div className={styles.info}>
                        <div>{info}</div>
                    </div>
                    {props.image == '' ? (
                        <></>
                    ) : (
                        <div className={styles.thumbnail_container}>
                            <img
                                width={300}
                                height={300}
                                src={props.image}
                                alt={props.name}
                                className={styles.thumbnail}
                            />
                        </div>
                    )}
                </div>
            </Panel>
        </PlainLink>
    );
};

export default ProductBox;
