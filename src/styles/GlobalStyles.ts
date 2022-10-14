import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Apercu Arabic Pro";
    src: local("Apercu Arabic Pro"),
     url("fonts/ApercuArabicPro-Regular.woff2") format("woff2");
    font-weight: 400;
  };

  * {
    box-sizing: border-box;
  };

  body {
    background-color: #ffffff;
    color: #3E3E3E;
  };
  
  body,
  input,
  textarea {
    font-family: "Apercu Arabic Pro","Roboto","Helvetica","Arial",sans-serif;
  };
  
  body,
  ul {
    margin: 0;
    padding: 0;
  };

  button,
  input[type="submit"],
  input[type="reset"] {
	  background: none;
	  color: inherit;
	  border: none;
	  padding: 0;
	  font: inherit;
	  cursor: pointer;
	  outline: inherit;
  }
`;

export default GlobalStyles;
