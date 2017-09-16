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
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

import CSSModulesBtn from '../components/CSSModulesBtn/CSSModulesBtn';
import StyledComponentsBtn from '../components/StyledComponentsBtn/StyledComponentsBtn';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
};

preloader(images);

const theme = createTheme(
  {
    primary: '#191919',
    secondary: '#FFFFFF',
    tertiary: '#BAA082',
    quartenary: '#CECECE',
  },
  {
    primary: 'Avenir Next',
    secondary: 'Helvectica',
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
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Faraz Khan
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Front End Engineer - Appear Here
          </Text>
        </Slide>
        <Slide transition={['slide']} bgColor="primary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            CSS Modules
          </Heading>
          <CSSModulesBtn>Click me!</CSSModulesBtn>
          <br />
          <br />
          <CSSModulesBtn primary>Click me!</CSSModulesBtn>
          <br />
          <br />
          <CSSModulesBtn disabled>Click me!</CSSModulesBtn>
        </Slide>
        <Slide
          transition={['zoom', 'fade']}
          bgColor="primary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/CSSModulesBtnJS.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide
          transition={['zoom', 'fade']}
          bgColor="primary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <CodePane
            lang="css"
            source={require('raw-loader!../assets/CSSModulesBtnCSS.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={['slide']} bgColor="primary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Styled Components
          </Heading>
          <StyledComponentsBtn>Click me!</StyledComponentsBtn>
          <br />
          <br />
          <StyledComponentsBtn primary>Click me!</StyledComponentsBtn>
          <br />
          <br />
          <StyledComponentsBtn disabled>Click me!</StyledComponentsBtn>
        </Slide>
        <Slide
          transition={['slide', 'spin']}
          bgColor="secondary"
          textColor="primary"
        >
          <BlockQuote>
            <Quote>CSS is...</Quote>
            <Cite>Vjeux</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
