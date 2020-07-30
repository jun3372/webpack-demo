import 'lodash';
import '../less/index.less'
import demoArt from '../html/demo.art'

let end = 'background: #fadfa3; padding: 5px 0;';
let start = 'color: #fadfa3; background: #030307; padding: 5px 0;'

/* global APP_NAME, APP_VERSION */
console.log(`${'\n'} %c 欢迎使用 ${APP_NAME} %c v${APP_VERSION}  ${'\n'}`, start, end);

let body = document.querySelector("div#art")
const html = demoArt()
body.innerHTML = html