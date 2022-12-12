import styled from "styled-components";
import { motion } from "framer-motion";

const Howitworks = () => {
  console.log("instr");

  const head = {
    initial:{opacity:0},
    animate:{opacity:1,
    transition:{
      staggerChildren:0.2,
      when:"beforeChildren",
      }
    },
  };

  const headingone = {
    initial:{
      opacity:0,
    },
    animate:{
      opacity:1,
      transition:{duration:0.7}
      }
  };

  const headingtwo = {
    initial:{
      opacity:0,
      y:-10
    },
    animate:{
      opacity:1,
      y:0,
      transition:{duration:0.5}
    }
  };

  const paraone = {
    initial:{
      opacity:0,
      y:10
    },
    animate:{
      opacity:1,
      y:0,
      transition:{duration:0.6}
    }
  };

  const steps = {

    initial:{
      opacity:0,
      y:10
    },
    animate:{
      opacity:1,
      y:0,
      transition:{duration:0.4},
    }
  };

  const stepshead ={
    initial:{
      opacity:0,
    },
    animate:{
      opacity:1,
      transition:{
        delay:0.7,
        when:"beforeChildren",
        staggerChildren:0.2,
      }
    }
  };

  return (
    <Wrapper>
      <motion.div variants={head} initial="initial" animate = "animate" className="meme-intro">
        <motion.h1 variants={headingone}   >What is Memed?</motion.h1>
        <motion.p variants={paraone}  >
          Memed is an interactive website concept that enables users to create
          memes from regular stock images.
          <br />
          The newly created memes can be saved to the website upon creation.
        </motion.p>
      </motion.div>
      <motion.div variants={stepshead} initial="initial" animate="animate" className="howitworks">
        <motion.h1 variants={headingtwo}  >How does it work?</motion.h1>
        <motion.div variants={steps}   className="steps">
          <span className="span">
            <span>1</span>
          </span>
          <div>
            <h3>Set up your account</h3>
            <p>Set-up your account by signing up on the website.</p>
          </div>
        </motion.div>
        <motion.div variants={steps}   className="steps">
          <span className="span">
            <span>2</span>
          </span>
          <div>
            <h3>Copy stock image from search engine</h3>
            <p>
              Search for an image of choice, open up the <br />
              image in your browser and copy.
            </p>
          </div>
        </motion.div>
        <motion.div variants={steps}   className="steps">
          <span className="span">
            <span>3</span>
          </span>
          <div>
            <h3>Paste and go</h3>
            <p>
              Paste the copied link in Memed,click on the image's face then
              hover on the animated emoji to pick a desired emoji.
            </p>
          </div>
        </motion.div>
        <motion.div variants={steps}   className="steps">
          <span className="span">
            <span>4</span>
          </span>
          <div>
            <h3>Adjust and save</h3>
            <p>
              You can make certain angular adjustments to the applied memes,then
              save.
              <br />
              Saved works can be revisited on the website.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Wrapper>
  );
};
export default Howitworks;

const Wrapper = styled.section`
  padding: 0 3.47vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2.5rem;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 300 bold;
    line-height: 30px;
    color: #ffff;
    width: 30vw;
  }
  .meme-intro p {
    // width: 30vw;
  }
  h1 {
    font-family: "Roboto", sans-serif;
    color: thistle;
    color: #f39a18;
    font-size: 48px;
    font-weight: 500;
    line-height: 55px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 1.5rem;
  }
  .howitworks {
    .steps {
      display: grid;
      grid-template-columns: 0.1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 1.5rem;

      div {
        h3 {
          font-size: 1rem;
          font-family: "Roboto", sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 28px;
          letter-spacing: 0em;
          color: #ecd689;
          text-align: left;
        }

        p {
          line-height: 23px;
          width: 45vw;
        }
      }

      .span {
        font-family: "Roboto", sans-serif;
        font-size: 36px;
        font-weight: 500;
        line-height: 41px;
        letter-spacing: 0em;
        text-align: center;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #332333;
        // padding: 20px;
        width: 75px;
        height: 75px;

        span {
          // transform: translatey(-50%);
        }
      }
      &:nth-of-type(3) .span {
        background: #ecd689;
      }
      &:nth-of-type(2) .span {
        background: #ec898f;
      }
      &:nth-of-type(1) .span {
        background: #b4ec89;
      }
      &:nth-of-type(4) .span {
        background: #9789ec;
      }
    }
  }
  @media screen and (max-width: 630px) {
    h1 {
      font-size: 35px;
    }
    p {
      width: 90vw;
    }

    .howitworks .steps div p {
      width: 100%;
    }
  }
`;
