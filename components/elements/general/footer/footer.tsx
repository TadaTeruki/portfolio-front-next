import IndentBox from '../../../layout/container/indentbox/indentbox';
import MainContainer from '../../../layout/container/maincontainer/maincontainer';
import StyledLink from '../../../layout/link/styledlink/styledlink';
import Banner from '../banner/banner';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.main}>
            <Banner image_src="/static/banners/sagi.webp" background_mode="white" height={'22em'}>
                <MainContainer>
                    <h1 className={styles.category}>Contact</h1>
                    <IndentBox>
                        <p>
                            Email : tadateruki.public@gmail.com
                            <br />X : <StyledLink href="https://twitter.com/PerukiFUN">@PerukiFUN</StyledLink>
                            <br />
                            GitHub : <StyledLink href="https://github.com/TadaTeruki">TadaTeruki</StyledLink>
                        </p>
                    </IndentBox>
                </MainContainer>
                <p className={styles.copyright}>Copyright © 2024 Teruki TADA All Rights Reserved.</p>
            </Banner>
        </footer>
    );
};

export default Footer;
