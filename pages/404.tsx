import Image from 'next/image';
import Base from '../components/layout/base/base';
import JustifyBox from '../components/layout/container/justifybox/justifybox';
import PlainLink from '../components/layout/link/plainlink/plainlink';
import HeadInfo from '../components/headinfo/headinfo';
import styles from '../styles/404.module.css';

const Page404 = () => {
    return (
        <>
            <HeadInfo title="404 Not Found" subtitle="ページが見つかりません" />
            <Base>
                <JustifyBox type="center">
                    <h1>404 Not Found</h1>
                    <p>
                        お探しのページは見つかりませんでした。
                        <br />
                        <span className={styles.description}>
                            無効となったページにアクセスを試みたか、URLが間違っているようです。
                        </span>
                        <br />
                        <br />
                        <PlainLink href="/">
                            <button>ホームに戻る</button>
                        </PlainLink>
                        <br />
                    </p>
                    <Image
                        width={680}
                        height={462}
                        alt="not found"
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fperukun.jpeg?alt=media&token=971e9d7e-694f-4492-9f9d-33b847d147cf"
                    ></Image>
                </JustifyBox>
            </Base>
        </>
    );
};

export default Page404;
