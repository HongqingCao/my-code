# Html知识点


## 按默认分类

  1、块级元素`block`  
  2、行内`inline`  
  3、行内块元素 `inline-block`  



## 块级元素block

  1. 元素自己独占一行显示（块级元素有默认宽度)  
  2. 可以设置宽度和高度 
  3. 当两个块级元素发生嵌套关系的时候，子元素如果没有设置宽度，那么该子元素的宽度与父元素的宽度一致。
  4. 代表:  div , h1 , p , ul , li...  

After the `init` is complete, you can see the file list in the `./docs` subdirectory.

* `index.html` as the entry file
* `README.md` as the home page
* `.nojekyll` prevents GitHub Pages from ignoring files that begin with an underscore

You can easily update the documentation in `./docs/README.md`, of course you can add [more pages](more-pages.md).

## Preview your site

Run the local server with `docsify serve`. You can preview your site in your browser on `http://localhost:3000`.

```bash
docsify serve docs
```

?> For more use cases of `docsify-cli`, head over to the [docsify-cli documentation](https://github.com/docsifyjs/docsify-cli).

## Manual initialization

If you don't like `npm` or have trouble installing the tool, you can manually create `index.html`:

```html
xxx
```

If you installed python on your system, you can easily use it to run a static server to preview your site.

```bash
cd docs && python -m SimpleHTTPServer 3000
```



You should set the `data-app` attribute if you changed `el`:



Compare [el configuration](configuration.md#el).
