import React from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Image,
  Layout,
  Fill,
  Code,
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
};

preloader(images);

const theme = createTheme(
  {
    primary: '#FFFFFF',
    secondary: '#191919',
    tertiary: '#BAA082',
    quartenary: '#CECECE',
  },
  {
    primary: 'Avenir',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary" notes="You got this!">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            CSS in React: Spoilt For Choice
          </Heading>
        </Slide>
        <Slide transition={['fade']}>
          <Layout>
            <Fill>
              <Image
                src={images.faraz.replace('/', '')}
                margin="0px auto 40px"
                height="293px"
              />
            </Fill>
            <Fill>
              <Heading
                size={4}
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Faraz Khan
              </Heading>
              <br />
              <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
                Front End Engineer @ Appear Here
              </Text>
              <br />
              <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
                @farazcsk || faraz.khan@appearhere.co.uk
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']}>
          <Layout>
            <Fill>
              <Heading textColor="secondary" size={1}>
                I
              </Heading>
            </Fill>
            <Fill>
              <Heading textColor="secondary" size={1}>
                ❤️
              </Heading>
            </Fill>
            <Fill>
              <Heading textColor="secondary" size={1}>
                CSS
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Let's build a button in react
          </Heading>
          <br />
          <br />
          <br />
          <Layout>
            <Fill>
              <div style={{ margin: '2rem' }}>
                <CSSModulesBtn>Click me!</CSSModulesBtn>
              </div>
            </Fill>
            <Fill>
              <div style={{ margin: '2rem' }}>
                <CSSModulesBtn>Click me!</CSSModulesBtn>
              </div>
            </Fill>
            <Fill>
              <div style={{ margin: '2rem' }}>
                <CSSModulesBtn>Click me!</CSSModulesBtn>
              </div>
            </Fill>
          </Layout>
          <br />
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
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            THE END
          </Heading>
          <Code>
            {'.css{}'}
          </Code>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <BlockQuote>
            <Quote textColor="secondary">CSS in JS</Quote>
            <Cite>Christopher Chedeau aka Vjeux</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            A problem with CSS at scale
          </Heading>
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Global namespace
          </Heading>
          <List>
            <ListItem>We know global variables are not ideal</ListItem>
            <ListItem>Naming conflicts suck</ListItem>
            <ListItem>Making changes to your CSS should not be scary</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            The Solution
          </Heading>
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Write CSS in JS
          </Heading>
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Techniques we can use:
          </Heading>
          <List>
            <ListItem>Local vairables</ListItem>
            <ListItem>Modules</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Which one should you use?
          </Heading>
          <List>
            <ListItem>CSS modules</ListItem>
            <ListItem>Styled components</ListItem>
            <ListItem>Glamorous</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            CSS Modules
          </Heading>
          <BlockQuote>
            <Quote textColor="secondary">
              A CSS Module is a CSS file in which all class names and animation
              names are scoped locally by default
            </Quote>
            <Cite>The Readme</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']}>
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
            { loc: [0, 1], note: 'Must not use dashes' },
            { loc: [26, 37] },
            { loc: [38, 41] },
            { loc: [47, 55] },
            { loc: [56, 64] },
          ]}
        />
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Styled components
          </Heading>
          <BlockQuote>
            <Quote textColor="secondary">
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
              <div>
                <div style={{ color: '#297DB8' }}>yarn</div>add
                styled-components
              </div>,
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
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Glamorous
          </Heading>
          <BlockQuote>
            <Quote textColor="secondary">Maintainable CSS with React</Quote>
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
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why?
          </Heading>
          <Image
            src={images.y.replace('/', '')}
            margin="0px auto 40px"
            height="293px"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            All the buttons!
          </Heading>
          <br />
          <br />
          <br />
          <br />
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
          <br />
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
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What matters?
          </Heading>
          <List>
            <ListItem>Try them and find out what works best for you</ListItem>
            <ListItem>
              The method you use does not matter too much, how you implement is
              does
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Leave an escape hatch for others
          </Heading>
          <br />
          <br />
          <br />
          <br />
          <Code>className</Code>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Be consistent
          </Heading>
          <br />
          <br />
          <br />
          <br />
          <Code>margin-top vs. marginTop</Code>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            You are still going to need some global CSS
          </Heading>
          <br />
          <br />
          <br />
          <br />
          <Image
            src={images.tweet.replace('/', '')}
            margin="0px auto 40px"
            height="293px"
          />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Thank you
          </Heading>
          <br />
          <br />
          <br />
          <br />
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
