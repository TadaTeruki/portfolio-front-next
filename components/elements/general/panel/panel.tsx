import styles from './panel.module.css';

const Panel = (props: { children: React.ReactNode; mode: 'normal' | 'left-wide' }) => {
    let border_radius_left = 2;
    switch (props.mode) {
        case 'left-wide':
            border_radius_left = 8;
            break;
        default:
            break;
    }
    return (
        <div className={styles.main} style={{ borderLeftWidth: border_radius_left }}>
            {props.children}
        </div>
    );
};

export default Panel;
