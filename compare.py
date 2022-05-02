import json
import webbrowser

import click

path = r"C:\Users\rahul\GitHub\skarfie123\rahulpaicreations.github.io\src\components\blender.json"


def main():
    with open(path, encoding="utf-8") as f:
        blender = json.loads(f.read())

    for project in blender["projects"]:
        print(project["name"])
        if not click.confirm("compare?", default=True):
            continue
        webbrowser.open(f"http://localhost:8080/blender/{project['name']}")
        webbrowser.open(f"http://localhost:8080/blenderold/{project['name']}")


if __name__ == "__main__":
    main()
