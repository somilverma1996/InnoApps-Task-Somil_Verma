import { createGlobalStyle } from "styled-components";
import HelveticaNeueRegular from "./Helvetica Neue Regular.ttf";
import ImprintMtShadow from "./Imprint MT Shadow.ttf";
// import NameOfYourFontWoff2 from './nameOfYourFont.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Helvetica Neue Regular';
        src: local('Font Name'), local('FontName'),
        url(${HelveticaNeueRegular}) format('ttf'),
            font-weight: 400;
        font-style: normal;
    },
    @font-face {
        font-family: 'Imprint mt shadow';
        src: local('Font Name'), local('FontName'),
        url(${ImprintMtShadow}) format('ttf'),
            font-weight: 400;
        font-style: normal;
    }
`;
