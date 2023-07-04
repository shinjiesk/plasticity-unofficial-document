# shortcut=の後ろの引用符内の`を削除

import os
import re

directory = "."

# ディレクトリ内の.mdxファイルを取得
mdx_files = [
    filename for filename in os.listdir(directory) if filename.endswith(".mdx")
]

# 各ファイルを処理
for filename in mdx_files:
    filepath = os.path.join(directory, filename)

    with open(filepath, "r+") as file:
        content = file.read()

        # 正規表現でshortcut=の後ろの引用符内の`を削除
        content = re.sub(
            r'shortcut=(["\'])(.*?)\1',
            lambda match: f'shortcut={match.group(1)}{match.group(2).replace("`", "")}{match.group(1)}',
            content,
        )

        # ファイルの先頭に移動し、新しい内容を書き込む
        file.seek(0)
        file.write(content)
        file.truncate()
