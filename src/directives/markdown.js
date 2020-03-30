const marked = require('marked')

export default {
    bind(el) {
        let html = el.textContent;
        html = marked(html)
        el.innerHTML = html
    }
}