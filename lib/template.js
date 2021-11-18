module.exports = {
    html:function(title, list, body, control){
        return `
        <!doctype html>
            <html>
                <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1><a href="/">WEB1</a></h1>
                    ${list}
                    ${control}
                    ${body}
                    </p>
                </body>
            </html>
        `
    },
    list:function(filelist){
        let list = '<ul>';
        let i = 0;
        while(i < filelist.length){
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
            i++;
        }
        list = list + '</ul>';
        return list;
    }
}