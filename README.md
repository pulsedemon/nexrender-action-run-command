# Action: Run Command

Run shell commands

## Installation

```
npm i nexrender-action-run-command -g
```

## Usage

### Use aws cli to upload the output file to s3

```js
// job.json
{
    "actions": {
        "postrender": [
            {
                "module": "nexrender-action-run-command",
                "command": "aws s3 cp {file} s3://bucket-name/ --profile dv",
            }
        ]
    }
}
```

## Information

* `command` required argument - file path out output file can be passed with `{file}`
