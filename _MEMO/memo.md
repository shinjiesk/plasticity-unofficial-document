# メモ

ファイル名の先頭３文字を削除する

```bash
rename -n 's/^...//' *
```

ファイル名に含まれる　ja copy　を en に置き換える

```bash
rename -n 's/ja copy/en/' *
```

## 拡張子.mdを.mdxに置換する

```bash
rename -n 's/.md$/.mdx/' *.md
```

テキストファイルAの1行目の後ろにテキストファイルBの1行目を追加

```bash
paste -d "" fileA fileB > fileC
```

テキストファイルの
"line": "線分",　
を
- [線分](line)
に変換する

```bash
awk -F'[:"]' '{ print "- [" $5 "](" $2 ")" }' A.txt > B.txt
```


ファイル名（拡張子なし）　でリストアップする

```bash
ls | awk -F. '{print $1}'
```

" + ファイル名（拡張子なし） + ": "",　でリストアップ

```bash
ls | awk -F. '{print "\"" $1 "\": \"\","}'
```


ディレクトリ内の全ファイルに対して、拡張子の前に.jaを付け加える

```bash
rename -n 's/(\.[^.]+)$/.ja$1/' *
```