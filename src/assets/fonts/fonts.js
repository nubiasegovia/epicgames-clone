import { createGlobalStyle } from 'styled-components';
import OpenSansWoff from "./OpenSans.woff";
import OpenSansWoff2 from "./OpenSans.woff2";
import Hussar from "./Hussar.woff";

const FontSyles = createGlobalStyle`
    @font-face {
        font-family: 'Open Sans';
        src: url(${OpenSansWoff}) format('woof'),
        url(${OpenSansWoff2}) format('woff2');
    },
    @font-face {
        font-family: 'Hussar';
        src: url(${Hussar}) format('woff')
    }
`;

export default FontSyles;
