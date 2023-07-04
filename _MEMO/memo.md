# メモ

ファイル名の先頭３文字を削除する
rename -n 's/^...//' *

ファイル名に含まれる　ja copy　を en に置き換える
rename -n 's/ja copy/en/' *

拡張子.mdを.mdxに置換する
rename -n 's/.md$/.mdx/' *.md

テキストファイルAの1行目の後ろにテキストファイルBの1行目を追加
paste -d "" fileA fileB > fileC

テキストファイルの
"line": "線分",　
を
- [線分](line)
に変換する
awk -F'[:"]' '{ print "- [" $5 "](" $2 ")" }' A.txt > B.txt

ファイル名（拡張子なし）　でリストアップする
ls | awk -F. '{print $1}'

" + ファイル名（拡張子なし） + ": "",　でリストアップ
ls | awk -F. '{print "\"" $1 "\": \"\","}'



ディレクトリ内の全ファイルに対して、拡張子の前に.jaを付け加える
rename -n 's/(\.[^.]+)$/.ja$1/' *


テキストファイルの単語の小文字を大文字にする
sed -r 's/\b([a-z])/\U\1/g' A.txt


