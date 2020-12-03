import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline; 
    box-sizing: border-box;
    font-family: "sans-serif, Roboto";
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
  }

  /* HTML5 display-role reset for older browsers */

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block; }

  body {
    line-height: 1; }

  ol, ul {
    list-style: none; }

  blockquote, q {
    quotes: none; }

  blockquote {
    &:before, &:after {
      content: '';
      content: none; } }

  q {
    &:before, &:after {
      content: '';
      content: none; } }

  table {
    border-collapse: collapse;
    border-spacing: 0; }

  button {
    cursor: pointer;
    border: none;
    padding: 0;
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  @media screen and (max-width: 768px) {
    #_next {
      &::before {
        content: 'Visualização disponível somente em desktop';
        width: 100vw;
        height: 100vh;
        display: flex;
        position: absolute;
        z-index: 9999;
        background-color: #1A1A1A;
        color: #FFF;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
      }
    }
  }
`