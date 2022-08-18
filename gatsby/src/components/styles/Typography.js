import { createGlobalStyle } from 'styled-components';

import quawoff from '../../assets/fonts/Inter-ExtraBold.woff';
import quaeot from '../../assets/fonts/Inter-ExtraBold.eot';
import quattf from '../../assets/fonts/Inter-ExtraBold.ttf';
import quawoff2 from '../../assets/fonts/Inter-ExtraBold.woff2';

import quaiteot from '../../assets/fonts/Inter-Regular.eot';
import quaitttf from '../../assets/fonts/Inter-Regular.ttf';
import quaitwoff from '../../assets/fonts/Inter-Regular.woff';
import quaitwoff2 from '../../assets/fonts/Inter-Regular.woff2';

export const Typography = createGlobalStyle`
@font-face {
    font-family: 'Inter Extra Bold';
    src: url('${quaeot}');
    src: url('${quaeot}?#iefix') format('embedded-opentype'),
        url('${quawoff2}') format('woff2'),
        url('${quawoff}') format('woff'),
        url('${quattf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Inter';
    src: url('${quaiteot}');
    src: url('${quaiteot}?#iefix') format('embedded-opentype'),
        url('${quaitwoff2}') format('woff2'),
        url('${quaitwoff}') format('woff'),
        url('${quaitttf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
:root {
    --bold: 'Times New Roman', serif;
    --regular: 'Times New Roman', serif;
}
`