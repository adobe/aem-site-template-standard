const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const regexp = /.*@label.*"(.+)".*@type.*"(.+)".*/;

module.exports = (opts = {}) => {

    const decls = {};

    return {
        postcssPlugin: 'style-parser',
        OnceExit(root) {
            const metadataPath = opts.metadataPath;
            fs.mkdirSync(path.dirname(metadataPath), { recursive: true });
            if (path.extname(metadataPath) === 'yml') {
                fs.writeFileSync(metadataPath, yaml.safeDump(decls), 'utf8');
            } else {
                fs.writeFileSync(metadataPath, JSON.stringify(decls, null, 2), 'utf8');
            }
        },
        Comment(comment) {
            const parent = comment.parent
            if (!parent || parent.selector !== ':root') {
                return;
            }
            const next = comment.next()
            if (next.type !== 'decl') {
                return;
            }
            const match = comment.text.match(regexp);
            if (!match) {
                return;
            }   
            decls[next.prop] = { label: match[1], type: match[2], value: next.value };                  
        }
    }
}
module.exports.postcss = true
