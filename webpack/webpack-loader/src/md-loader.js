
module.exports = function (source) {
    console.log(source);
    // md -> html 状态机
    
    return `
        import React from 'react';
        import MarkDown from 'markdown-to-jsx';
        export default function Post() {
            return React.createElement(MarkDown, {}, \`${source}\`)
        }
    `;
}