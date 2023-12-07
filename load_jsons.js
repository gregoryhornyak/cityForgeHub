import fs from "fs"
import path from "path"

const dataDirectory = './World_01/';
const json_files = {}


function readJSONFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
}

function readJSONFilesInDirectory(directory) {
    
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);

        if (fs.statSync(filePath).isDirectory()) {
            // Recursively read files in subdirectories
            readJSONFilesInDirectory(filePath);
        } else if (file.endsWith('.json')) {
            // Read and process JSON file
            const jsonData = readJSONFile(filePath);
            //console.log(`${filePath}:`, jsonData);
            json_files[filePath]=jsonData
            // Perform additional processing as needed
        }
    }
    return json_files
}

// Start reading JSON files from the data directory
readJSONFilesInDirectory(dataDirectory);
//console.log(json_files)
fs.writeFile("./all_jsons.json", JSON.stringify(json_files),(error) => {
    // throwing the error
    // in case of a writing problem
    if (error) {
      // logging the error
      console.error(error);
  
      throw error;
    }
})
