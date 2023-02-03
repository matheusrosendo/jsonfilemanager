# jsonfilemanager
A simple package to deal with reading and writing json files

![GitHub repo file count](https://img.shields.io/github/directory-file-count/matheusrosendo/jsonfilemanager)
![npm](https://img.shields.io/npm/v/jsonfilemanager)

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
