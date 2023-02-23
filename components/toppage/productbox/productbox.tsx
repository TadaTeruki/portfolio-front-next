import ContentBox from "../../all/contentbox/contentbox";
import ImageBox from "../../all/imagebox/imagebox";
import IndentBox from "../../all/indentbox/indentbox";
import PlainLink from "../../all/link/plainlink/plainlink";
import styles from "./productbox.module.css";

const Container = (props: { children: React.ReactNode, link: string }) => {
  return(
    <PlainLink href={props.link}>
      <div className={styles.main}>
        {props.children}
      </div>
    </PlainLink>
  );
}

const ProductBox = (props: { name: string, description: string, skills: string[], link: string, content: any, image: string, awards: string[] }) => {
  var skills_item: any = [];
  for (let i = 0; i < props.skills.length; i++) {
    if (props.skills[i] === "") continue;
    skills_item.push(
      <div className={styles.skill} key={i}>
        {props.skills[i]}
      </div>
    );
  }

  var awards_item: any = [];
  for (let i = 0; i < props.awards.length; i++) {
    if (props.skills[i] === "") continue;
    awards_item.push(
      <div className={styles.award} key={i}>
        🏅&nbsp;{props.awards[i]}
      </div>
    );
  }

  const info = (
    <>
      <h3>
        {props.name}&nbsp;&nbsp;
        {
        props.link.startsWith("https://github.com") ? 
          <img alt="github logo" height="20em" width="auto" className={styles.fadeImage}
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Flogo%2Fgithub-mark.svg?alt=media&token=9d486992-c57e-49a7-bccc-1bb5c408d252"></img>:
        props.link.startsWith("https://tadateruki.itch.io") ? 
          <img alt="itch.io logo" height="20em" width="auto" className={styles.fadeImage}
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Flogo%2Fitchio-logo-textless-black.svg?alt=media&token=55435718-a659-4f0c-917c-3e286c01a558"></img>:
            <></>}
      </h3>
      <p>{props.description}</p>
      {awards_item.length !== 0 ? <>{awards_item}</> : <></>}
      <div className={styles.skilltable}>
        {skills_item.length !== 0 ? <>{skills_item}</> : <></>}
      </div>
      <br />
    </>
  )

  if(props.content != null) {
    return(
      <Container link={props.link}>
        <IndentBox>
          <ContentBox height="auto" content={props.content}>
            {info}
          </ContentBox>
        </IndentBox>
      </Container>
    );
  } else if (props.image != "") {
    return(
      <Container link={props.link}>
        <ImageBox height="50mm" image={props.image}>
          <IndentBox>
            {info}
          </IndentBox>
        </ImageBox>
        
      </Container>
    );
  }
  
  return(
    <Container link={props.link}>
      {info}
    </Container>
  );
};

export default ProductBox;
