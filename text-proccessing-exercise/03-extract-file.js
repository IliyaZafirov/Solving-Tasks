// Extract File
// Write a function that receives a single string - the path to a file (the '\' character is escaped)
// Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak
// should be the file name, while pptx is the extension).

function solve(fileInfo) {

    fileInfo = fileInfo.split('\\').pop();
    let lastDotIdx = fileInfo.lastIndexOf('.');

    let fileName = fileInfo.slice(0, lastDotIdx);
    let fileExtension = fileInfo.slice(lastDotIdx + 1);


    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}
solve('C:\\Internal\\training-internal\\Template.exe.pptx')