
const fs = require('fs');
const writer = fs.createWriteStream('test.txt');

module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'style-parser',
        Once(root) {
//            writer.write("root");
//            console.log(root);
        },
        OnceExit(root) {
            writer.close();
        },
        Comment(comment) {
            if (comment.text.indexOf('@property') != -1) {
                writer.write(comment.text);
                writer.write('\n');
                const next = comment.next()
                writer.write(next.prop);
                writer.write('=');
                writer.write(next.value);
                writer.write('\n');
                const parent = comment.parent
                writer.write(parent.selector);
                // writer.write('\n');
                // writer.write(parent.value);
                writer.write('\n');
            }
        },
        Rule(rule) {
//            writer.write(rule.toString());
        },
        Declaration(decl) {
//            writer.write(decl.toString());
        }
    }
}
module.exports.postcss = true
