import os


def check_files(directory):
    error_found = False

    # ディレクトリ内の全てのファイルとディレクトリを走査
    for root, dirs, files in os.walk(directory):
        # imgディレクトリ内のファイルはチェック対象から外す
        if "img" in root:
            continue
        for file in files:
            # _app.jsファイルはチェック対象から外す
            if file == "_app.js":
                continue

            # ファイルが適切な拡張子で終わっているかをチェック
            if file.endswith(".en.md"):
                ja_file = file.replace(".en.md", ".ja.md")
                if ja_file not in files:
                    print(
                        f"Error: File {os.path.join(root, file)} is missing its Japanese counterpart: {os.path.join(root, ja_file)}"
                    )
                    error_found = True
            elif file.endswith(".ja.md"):
                en_file = file.replace(".ja.md", ".en.md")
                if en_file not in files:
                    print(
                        f"Error: File {os.path.join(root, file)} is missing its English counterpart: {os.path.join(root, en_file)}"
                    )
                    error_found = True
            elif file.endswith(".en.mdx"):
                ja_file = file.replace(".en.mdx", ".ja.mdx")
                if ja_file not in files:
                    print(
                        f"Error: File {os.path.join(root, file)} is missing its Japanese counterpart: {os.path.join(root, ja_file)}"
                    )
                    error_found = True
            elif file.endswith(".ja.mdx"):
                en_file = file.replace(".ja.mdx", ".en.mdx")
                if en_file not in files:
                    print(
                        f"Error: File {os.path.join(root, file)} is missing its English counterpart: {os.path.join(root, en_file)}"
                    )
                    error_found = True
            elif file.endswith("_meta.en.json"):
                ja_file = file.replace("_meta.en.json", "_meta.ja.json")
                if ja_file not in files:
                    print(
                        f"Error: File {os.path.join(root, file)} is missing its Japanese counterpart: {os.path.join(root, ja_file)}"
                    )
                    error_found = True
            elif file.endswith("_meta.ja.json"):
                en_file = file.replace("_meta.ja.json", "_meta.en.json")
                if en_file not in files:
                    print(
                        f"Error: File {os.path.join(root, file)} is missing its English counterpart: {os.path.join(root, en_file)}"
                    )
                    error_found = True
            else:
                print(
                    f"Error: File {os.path.join(root, file)} has an incorrect extension."
                )
                error_found = True

    if not error_found:
        print("No errors found.")


# チェックを行うディレクトリを指定
check_files("./pages")
