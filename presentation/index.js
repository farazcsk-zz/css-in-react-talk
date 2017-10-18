import React, { Component } from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
  Fill,
  Code,
  Notes,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import Terminal from 'spectacle-terminal';
import CodeSlide from 'spectacle-code-slide';

import CSSModulesBtn from '../components/CSSModulesBtn/CSSModulesBtn';
import StyledComponentsBtn from '../components/StyledComponentsBtn/StyledComponentsBtn';
import GlamorousBtn from '../components/GlamorousBtn/GlamorousBtn';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  faraz: require('../assets/faraz-cropped.png'),
  y: require('../assets/y-tho.jpg'),
  tweet: require('../assets/tweet.png'),
  ken: require('../assets/ken.png'),
  hedgehog: require('../assets/hedgehog.jpg'),
  gif: require('../assets/giphy.gif'),
};

preloader(images);

const theme = createTheme(
  {
    primary: '#FFFFFF',
    secondary: '#191919',
    tertiary: '#BAA082',
    quartenary: '#BAA082',
  },
  {
    primary: 'Avenir',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide transition={['zoom']} bgColor="primary" notes="You got this!">
          <h1 style={{ color: '#191919' }}>CSS in React: Spoilt for choice</h1>
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>Thank everyone for being here</li>
              <li>
                <i>pause</i>
              </li>
              <li>What I do, Where I work, What we do</li>
              <li>
                <i>pause</i>
              </li>
              <li>Follow me on twitter</li>
            </ul>
          </Notes>
          <Layout>
            <Fill>
              <Image
                src={images.faraz.replace('/', '')}
                margin="0px auto 40px"
                height="300px"
              />
            </Fill>
            <Fill>
              <h2 style={{ color: '#191919' }}>Faraz Khan</h2>
              <div
                style={{
                  color: '#191919',
                  whiteSpace: 'nowrap',
                  marginBottom: '2rem',
                }}
              >
                Front End Engineer @ Appear Here
              </div>
              <div style={{ color: '#191919' }}>@farazKhan404</div>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>Seriously though look at this hedgehog</li>
            </ul>
          </Notes>
          <Image src={images.hedgehog.replace('/', '')} width="100%" />
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>Everyoones favourite topic</li>
              <li>
                <i>pause</i>
              </li>
              <li>
                Dunno about everyone else but a I love CSS because it helps me
                build things that look cool
              </li>
              <li>
                <i>pause</i>
              </li>
            </ul>
          </Notes>
          <Fill>
            <h1 style={{ color: '#191919', fontSize: '6rem' }}>I ❤️ CSS</h1>
          </Fill>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Notes>
            <ul>
              <li>
                If you are new or even experienced with React chances are you
                are going to want to bulid a button similar to this one.
              </li>
              <li>
                <i>pause</i>
              </li>
              <li>This a button I would like to build</li>
              <li>
                <i>pause</i>
              </li>
              <li>
                It animates on hover, and has primary and disabled styles. React
                should be able to take care of this no problem
              </li>
            </ul>
          </Notes>
          <h1 style={{ color: '#FFFFFF' }}>
            So you want to build a button in react?
          </h1>
          <Layout>
            <Fill>
              <div style={{ margin: '2rem' }}>
                <CSSModulesBtn>Click me!</CSSModulesBtn>
              </div>
            </Fill>
            <Fill>
              <div style={{ margin: '2rem' }}>
                <CSSModulesBtn primary>Click me!</CSSModulesBtn>
              </div>
            </Fill>
            <Fill>
              <div style={{ margin: '2rem' }}>
                <CSSModulesBtn disabled>Click me!</CSSModulesBtn>
              </div>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Code
                style={{
                  backgroundColor: '#383838',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  padding: '11px 10px',
                  whiteSpace: 'nowrap',
                }}
              >
                {'<Btn />'}
              </Code>
            </Fill>
            <Fill>
              <Code
                style={{
                  backgroundColor: '#383838',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  padding: '11px 10px',
                  whiteSpace: 'nowrap',
                }}
              >
                {'<Btn primary />'}
              </Code>
            </Fill>
            <Fill>
              <Code
                style={{
                  backgroundColor: '#383838',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  padding: '11px 10px',
                  whiteSpace: 'nowrap',
                }}
              >
                {'<Btn disabled />'}
              </Code>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>
                So to build this button we are probably going to need to write
                some CSS right?
              </li>
              <li>
                <i>pause</i>
              </li>
            </ul>
          </Notes>
          <Code
            style={{
              padding: '1rem',
              border: '1px solid #BEBEBE',
            }}
          >
            {'.css{}'}
          </Code>
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>So yeah thats all folks!</li>
              <li>
                <i>pause</i>
              </li>
            </ul>
          </Notes>
          <Image src={images.gif.replace('/', '')} width="100%" />
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>We could write this in CSS</li>
              <li>
                <i>pause</i>
              </li>
              <li>But CSS has problems at scale</li>
              <li>
                <i>pause</i>
              </li>
              <li>One of them being the global namespace</li>
            </ul>
          </Notes>
          <h1 style={{ color: '#191919' }}>A problem with CSS at scale</h1>
          <div>Global namespace</div>
        </Slide>

        <CodeSlide
          notes="<ul><li>We know global variables are not ideal</li><li><i>pause</i></li><li>Naming conflicts suck</li><li><i>pause</i></li></ul>"
          transition={['slide']}
          lang="css"
          code={require('raw-loader!../assets/GlobalNamespace.example')}
          ranges={[{ loc: [0, 8] }]}
        />

        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Notes>
            <ul>
              <li>November 8, 2014</li>
              <li>
                <i>pause</i>
              </li>
              <li>
                Acknowledges issues with CSS and proposes potential a solution
              </li>
              <li>
                <i>pause</i>
              </li>
            </ul>
          </Notes>
          <BlockQuote style={{ textAlign: 'center' }}>
            <span
              style={{
                fontFamily: 'Georgia',
                fontSize: '8rem',
                color: '#DDDDDD',
              }}
            >
              ”
            </span>
            <Quote
              style={{ paddingLeft: '0', fontSize: '3rem' }}
              textColor="secondary"
            >
              CSS in JS
            </Quote>

            <Cite>Christopher Chedeau aka Vjeux</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>
                If we define our styles in the same file as our React components
                we avoid exposing them to the global scope
              </li>
              <li>
                <i>pause</i>
              </li>
            </ul>
          </Notes>
          <h1 style={{ color: '#191919' }}>A Solution</h1>
          <div>We could use inline styles!</div>
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>Not really a good Idea</li>
              <li>
                <i>pause</i>
              </li>
            </ul>
          </Notes>
          <h1 style={{ color: '#191919' }}>Well...</h1>
        </Slide>

        <CodeSlide
          notes="<ul><li>scoped to this file</li><li>We can conditionally render styles because we are in JS</li><li><i>pause</i></li><li>Psuedo elements and selectors are not supported by inline styles</li><li><i>pause</i></li></ul>"
          transition={['slide']}
          lang="jsx"
          code={require('raw-loader!../assets/inlineStyles.example')}
          ranges={[
            { loc: [3, 4], note: 'scopped to this file' },
            { loc: [4, 23] },
            { loc: [42, 55] },
            { loc: [44, 49] },
            { loc: [29, 33] },
          ]}
        />

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>
                Inline styles only partially solve the problem, so what are the
                alternatives
              </li>
              <li>
                <i>pause</i>
              </li>
            </ul>
          </Notes>
          <h1 style={{ color: '#191919' }}>Ok so what else can you use?</h1>
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>Luckily the JS community havs been hard at work</li>
              <li>
                <i>pause</i>
              </li>
            </ul>
          </Notes>
          <h1 style={{ color: '#191919' }}>Some options</h1>
          <div>CSS modules</div>
          <div>Styled components</div>
          <div>Glamorous</div>
        </Slide>

        <Slide transition={['fade']}>
          <h1 style={{ color: '#191919' }}>
            But which should you use? Let's figure this out
          </h1>
        </Slide>

        <Slide transition={['fade']}>
          <span
            style={{
              fontFamily: 'Georgia',
              fontSize: '8rem',
              color: '#DDDDDD',
            }}
          >
            ”
          </span>
          <BlockQuote style={{ textAlign: 'center' }}>
            <Quote
              style={{ paddingLeft: '0', fontSize: '3rem', lineHeight: '1.3' }}
              textColor="secondary"
            >
              A CSS Module is a CSS file in which all class names and animation
              names are scoped locally by default
            </Quote>
            <Cite>The Readme</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['slide', 'spin']}>
          <Terminal
            title="❯"
            output={[
              'yarn ???',
              <div style={{ color: '#D55444' }}>
                🚨 UPDATE YOUR WEBPACK CONFIG 🚨
              </div>,
              <div>😭</div>,
              ,
            ]}
          />
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang="js"
          code={require('raw-loader!../assets/webpackConfig.example')}
          ranges={[{ loc: [0, 16] }]}
        />

        <CodeSlide
          transition={['slide']}
          lang="jsx"
          code={require('raw-loader!../assets/CSSModulesBtnJS.example')}
          ranges={[
            { loc: [0, 24] },
            { loc: [2, 3], note: 'yarn add classnames' },
            { loc: [4, 5] },
            { loc: [6, 7] },
            { loc: [9, 10] },
            { loc: [11, 12] },
          ]}
        />

        <CodeSlide
          transition={['slide']}
          lang="css"
          code={require('raw-loader!../assets/CSSModulesBtnCSS.example')}
          ranges={[
            { loc: [0, 18] },
            { loc: [0, 1], note: 'Avoid dashes' },
            { loc: [26, 37] },
            { loc: [38, 41] },
            { loc: [47, 55] },
            { loc: [56, 64] },
          ]}
        />

        <Slide transition={['fade']}>
          <span
            style={{
              fontFamily: 'Georgia',
              fontSize: '8rem',
              color: '#DDDDDD',
            }}
          >
            ”
          </span>
          <BlockQuote style={{ textAlign: 'center' }}>
            <Quote
              style={{ paddingLeft: '0', fontSize: '3rem', lineHeight: '1.3' }}
              textColor="secondary"
            >
              Visual primitives for the component age. Use the best bits of ES6
              and CSS to style your apps without stress
            </Quote>
            <Cite>The Readme</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['slide', 'spin']}>
          <Terminal
            title="❯"
            output={[
              'yarn add styled-components',
              <div style={{ color: '#D55444' }}>🔥</div>,
            ]}
          />
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang="jsx"
          code={require('raw-loader!../assets/StyledComponentsBtn.example')}
          ranges={[
            { loc: [2, 3] },
            { loc: [4, 5], note: 'Tagged Template Literal' },
            { loc: [4, 22] },
            { loc: [42, 60] },
            { loc: [48, 49] },
            { loc: [62, 63] },
            { loc: [6, 7] },
          ]}
        />

        <Slide transition={['fade']}>
          <span
            style={{
              fontFamily: 'Georgia',
              fontSize: '8rem',
              color: '#DDDDDD',
            }}
          >
            ”
          </span>
          <BlockQuote style={{ textAlign: 'center' }}>
            <Quote
              style={{ paddingLeft: '0', fontSize: '4rem', lineHeight: '1.3' }}
              textColor="secondary"
            >
              Maintainable CSS with React
            </Quote>
            <Cite>The Readme</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['slide', 'spin']}>
          <Terminal
            title="❯"
            output={[
              'yarn add glamorous',
              <div style={{ color: '#33B969' }}>🔥</div>,
            ]}
          />
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang="jsx"
          code={require('raw-loader!../assets/GlamorousBtn.example')}
          ranges={[
            { loc: [2, 3] },
            { loc: [4, 5], note: 'A function which takes props' },
            { loc: [39, 56] },
            { loc: [44, 45] },
          ]}
        />

        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <h1 style={{ color: '#191919' }}>Winner?</h1>
          <div>CSS Modules</div>
          <div>Styled Components</div>
          <div>Glamorous</div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Notes>
            <ul>
              <li>Show each button one by one</li>
              <li>
                <i>pause</i>
              </li>
              <li>They are all the same</li>
              <li>
                <i>pause</i>
              </li>
            </ul>
          </Notes>
          <h1 style={{ color: '#FFFFFF' }}>All the buttons!</h1>
          <Layout>
            <Fill>
              <div style={{ margin: '2rem' }}>
                <CSSModulesBtn>Click me!</CSSModulesBtn>
              </div>
            </Fill>
            <Fill>
              <div style={{ margin: '2rem' }}>
                <StyledComponentsBtn>Click me!</StyledComponentsBtn>
              </div>
            </Fill>
            <Fill>
              <div style={{ margin: '2rem' }}>
                <GlamorousBtn>Click me!</GlamorousBtn>
              </div>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Code
                style={{
                  backgroundColor: '#383838',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  padding: '11px 10px',
                  whiteSpace: 'nowrap',
                }}
              >
                {'<CSSModulesBtn />'}
              </Code>
            </Fill>
            <Fill>
              <Code
                style={{
                  backgroundColor: '#383838',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  padding: '11px 10px',
                  whiteSpace: 'nowrap',
                }}
              >
                {'<StyledComponentsBtn />'}
              </Code>
            </Fill>
            <Fill>
              <Code
                style={{
                  backgroundColor: '#383838',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  padding: '11px 10px',
                  whiteSpace: 'nowrap',
                }}
              >
                {'<GlamorousBtn />'}
              </Code>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>
                Took everyone throught all the options, and they are all the
                same, what is up with that?
              </li>
              <li>
                <i>pause</i>
              </li>
            </ul>
          </Notes>
          <Image src={images.y.replace('/', '')} height="100%" />
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>It doesn't really matter what method you use!</li>
              <li>
                <i>pause</i>
              </li>
            </ul>
          </Notes>
          <h1 style={{ color: '#191919' }}>What have I learned?</h1>
          <div style={{ marginBottom: '2rem' }}>
            Try them and find out what works best for you
          </div>
          <div>
            The method you use does not matter too much, how you implement is
            does
          </div>
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>
                Think about that time you installed a module with all the bells
                and whistles but couldn't customise
              </li>
              <li>
                <i>pause</i>
              </li>
              <li>
                Think about that time you installed a module with all the bells
                and whistles but couldn't customise
              </li>
              <li>
                <i>pause</i>
              </li>
              <li>
                The likeyhood that your component meets the needs of everyone is
                very small
              </li>
            </ul>
          </Notes>
          <h1 style={{ color: '#191919' }}>Leave an escape hatch for others</h1>
          <Code
            style={{
              padding: '1rem',
              border: '1px solid #BEBEBE',
            }}
          >
            className
          </Code>
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>
                Take it from it, you don't wanna be the person who has to call
                his colleague over after delting all your node_modules in anger
              </li>
              <li>
                <i>pause</i>
              </li>
            </ul>
          </Notes>
          <h1 style={{ color: '#191919' }}>Be consistent</h1>
          <p>
            <Code
              style={{
                padding: '1rem',
                border: '1px solid #BEBEBE',
                display: 'inline-block',
                marginRight: '2rem',
              }}
            >
              margin-top
            </Code>
            vs.
            <Code
              style={{
                padding: '1rem',
                border: '1px solid #BEBEBE',
                display: 'inline-block',
                marginLeft: '2rem',
              }}
            >
              marginTop
            </Code>
          </p>
        </Slide>

        <Slide transition={['fade']}>
          <h1 style={{ color: '#191919' }}>You aren't done with gloabl CSS</h1>
          <Image
            src={images.tweet.replace('/', '')}
            margin="0px auto 40px"
            height="293px"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Notes>
            <ul>
              <li>
                Saw this tweet the other day and thought it was hillarious
              </li>
              <li>
                <i>pause</i>
              </li>
              <li>
                You are still going to need to use global css for things like
                fonts etc etc
              </li>
            </ul>
          </Notes>
          <div style={{ marginBottom: '2rem' }}>Leave an escape hatch</div>
          <div style={{ marginBottom: '2rem' }}>Be consistent</div>
          <div>You aren't done with gloabl CSS</div>
        </Slide>

        <Slide transition={['fade']}>
          <h1 style={{ color: '#191919' }}>Thank you</h1>
          <Image
            src={images.ken.replace('/', '')}
            margin="0px auto 40px"
            height="293px"
          />
        </Slide>
      </Deck>
    );
  }
}
