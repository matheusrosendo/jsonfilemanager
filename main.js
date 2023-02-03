
/**
 * Simple class with static methods to deal with common json file operations
 * @author Matheus Rosendo
 */

const fs = require("fs");

class Files {
      
    
    /**
     * Write a json file with the given JSON object 
     * @param {String} _fileName 
     * @param {Object[]} _tokenList 
     * @returns true if file was created with success
     */
    static serializeObjectToJsonFile(_fileName, _objectList){
        if (!_fileName){
            throw new Error("Filename is empty");
        }
        try {
            fs.writeFileSync(_fileName, JSON.stringify(_objectList, null, 2), {encoding: 'utf8'});
            return true;
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Fill an object from a json file 
     * @param {*} _file 
     * @returns JSON object 
     */
    static parseJsonFileToObject(_file){
        let objList;
        try {
            let fileContent = fs.readFileSync(_file, 'utf8');
            objList  = JSON.parse(fileContent); 
        } catch (error) {
            throw new Error("Error trying to read "+_file+" | "+error);
        }    
        return objList;
    }

    /**
     * Verifies if _file exists
     * @param {*} _file 
     * @returns bool
     */
     static exists(_file){
        let fileFound = false;
        try {
            if (fs.existsSync(_file)) {
                fileFound = true;
            }
        } catch (error) {
            throw new Error("Error trying to read "+_file+" | "+error);
        }    
        return fileFound;
    }

    /**
     * Delete given _fileName 
     */
    static delete(_fileName){
        if (fs.existsSync(_fileName)) {
            fs.unlinkSync(_fileName);
            return true
        } else {
            console.log('Error: file not found = '+_fileName);
        }        
    }

    /**
     * Search for files on the given folder name passed as parameter
     * @param {*} _folderPath 
     * @returns file names list (String[])
     */
     static listFiles(_folderPath){
        let filesNames;
        try {
            let dirents = fs.readdirSync(_folderPath, { withFileTypes: true });
            filesNames = dirents
            .filter(dirent => dirent.isFile())
            .map(dirent => dirent.name);
        } catch (error) {
            console.log("Error trying to list files in "+_folderPath+" | "+error);
        }        
        return filesNames
    }
        
}
module.exports = Files;