# jsonfilemanager
A simple package to deal with reading and writing json files

## Writing example
`
const jsonObject = {simpleKey: "simpleValue"};
const result = JsonFiles.serializeObjectToJsonFile("simple.json", jsonObject);
`

## Reading example
`const response = JsonFiles.exists("simple.json");`

## Verify existance
`const response = JsonFiles.exists("simple.json");`

## List all files in a folder
`const allFiles = JsonFiles.listFiles("./");`
