import os

""" 

Confirmation of the existence of en and ja files in the Pages directory.
  .md, .mdx, .json
  
"""

def check_files(directory):
    error_found = False

    # Traverse all files and directories in the specified directory.
    for root, dirs, files in os.walk(directory):
        # Exclude files in the img directory from the check.
        if "img" in root:
            continue
        for file in files:
            # Exclude the _app.js file from the check.
            if file == "_app.js":
                continue
            # Exclude the 404.js file from the check.
            if file == "404.js":
                continue

            # Check if the file has the appropriate extension.
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

# Specify the directory to check.
check_files("./pages")
