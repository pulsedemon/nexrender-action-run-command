# Action: Run Command

![npm](https://img.shields.io/npm/v/nexrender-action-run-command)
![npm](https://img.shields.io/npm/dw/nexrender-action-run-command)
[![install size](https://packagephobia.com/badge?p=nexrender-action-run-command)](https://packagephobia.com/result?p=nexrender-action-run-command)

Run shell commands

## Installation

```
npm i nexrender-action-run-command -g
```

## Usage

### Use aws cli to upload the output file to s3 - postrender

```js
// job.json
{
    "actions": {
        "postrender": [
            {
                "module": "nexrender-action-run-command",
                "command": "aws s3 cp {file} s3://bucket-name/ --profile profilename",
            }
        ]
    }
}
```

### list directory - prerender

```js
// job.json
{
    "actions": {
        "prerender": [
            {
                "module": "nexrender-action-run-command",
                "command": "ls -al /path/to/some/directory",
            }
        ]
    }
}
```

## Information

This should be able to run most commands, but it hasn't been heavily tested.  If you run into an issue, let me know.

* `command` required argument - file path of output file can be passed with `{file}`
