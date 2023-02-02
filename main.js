
/**
 * Simple class with static methods to deal with common json file operations
 * @author Matheus Rosendo
 */

const fs = require("fs");

class Files {
      
    /**
     * Write a json file for the given object list
     * @param {String} _fileName 
     * @param {Object[]} _tokenList 
     * @returns 
     */
    static async serializeObjectListToJson(_fileName, _objectList){
        Util.assertValidInputs([_fileName, _objectList], "serializeObjectListToJson");
        console.log("###### Writing object list to JSON file:"+_fileName+" ######")
        
        let reservesPromise = new Promise((resolve, reject) =>{
            fs.writeFile(_fileName, JSON.stringify(_objectList, null, 2), 'utf8', (err)=>{
                if(err){
                    reject("Error saving file "+_fileName+": "+err)
                } else {
                    resolve();
                }
            });
        });
        let resolvedPromiseReserves = await Promise.resolve(reservesPromise);
        
        return resolvedPromiseReserves;
    }

    /**
     * Fill a object list from a json file 
     * @param {*} _file 
     * @returns object list (Object[])
     */
    static parseJSONtoOjectList(_file){
        let objList;
        try {
            let fileContent = fs.readFileSync(_file, 'utf8');
            objList  = JSON.parse(fileContent); 
        } catch (error) {
            console.log("Error trying to read "+_file+" | "+error);
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
            console.log("Error trying to read "+_file+" | "+error);
        }    
        return fileFound;
    }

    /**
     * Delete given file 
     */
    static delete(_fileName){
        if (fs.existsSync(_fileName)) {
            fs.unlinkSync(_fileName);
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