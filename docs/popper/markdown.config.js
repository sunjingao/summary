const slugify = require('transliteration').slugify;
const cheerio = require('cheerio');
const hljs = require('highlight.js');
const md = require('markdown-it')({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str, true).value;
            } catch (err) {
                console.log(err)
            }
        }

        return ''; // use external default escaping
    }
});
const striptags = {
    strip: function (str, tags) {
        var $ = cheerio.load(str, {decodeEntities: false});

        if (!tags || tags.length === 0) {
            return str;
        }

        tags = !Array.isArray(tags) ? [tags] : tags;
        var len = tags.length;

        while (len--) {
            $(tags[len]).remove();
        }

        return $.html();
    },
    fetch: function (str, tag) {
        var $ = cheerio.load(str, {decodeEntities: false});
        if (!tag) return str;

        return $(tag).html();
    }
};

var wrap = function (render) {
    return function () {
        return render.apply(this, arguments)
          .replace('<code v-pre class="', '<code v-pre class="hljs ')
          .replace('<code>', '<code class="hljs">');
    };
};

exports.getMarkDownSetting = function () {

    return {
        // markdown-it config
        raw: true,
        preset: 'default',
        breaks: true,
        preprocess: function (MarkdownIt, source) {

            MarkdownIt.renderer.rules.table_open = function () {
                return '<table class="example-table">';
            };

            MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);

            return source;
        },
        use: [
            /* markdown-it plugin */
            [require('markdown-it-anchor'), {
                level: 1,
                slugify: slugify,
                permalink: true,
                permalinkBefore: true,
                permalinkSymbol: ""
            }],
            [require('markdown-it-container'), 'demo', {
                validate: function (params) {

                    return params.trim().match(/^demo/);
                },


                render: function (tokens, idx) {

                    var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/),
                      showDemo = (m && m != 'demo,') ? true : false;


                    if (tokens[idx].nesting === 1) {

                        // opening tag
                        var content = tokens[idx + 1].content;

                        var effectHtml = content;

                        var codeDescription = '';

                        if (showDemo) { // 换行显示

                            var descArr = m[1].split('<br>');

                            descArr.forEach(item => {

                                codeDescription += md.render(item);
                            })
                        }

                        var script = striptags.fetch(content, 'script'),
                          style = striptags.fetch(content, 'style'),
                          code = {html: effectHtml, script: script, style: style};

                        code = md.utils.escapeHtml(JSON.stringify(code));

                        return `<demo-box
                                    :code="${code}"
                                    :showDemo="${showDemo}">
                                 <div slot="effectHtml">${effectHtml}</div>
                                 <div slot="codeDescription">${codeDescription}</div>
                                 <div slot="codeHighlight">
                                `

                    } else {
                        // closing tag
                        return '</div></demo-box>\n';
                    }
                }

            }]
        ]
    }
}


