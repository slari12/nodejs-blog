const fs = require('fs');

//reading files
// fs.readFile('./blogs/blog12.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }console.log(data.toString());
// })

// console.log('last line');

//writing files
// fs.writeFile('./blogs/blog1.txt', 'hello, world', () => {
//     console.log('file was written');
// })


//directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err)=> {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
}else{
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

//deleteing files
if (fs.existsSync('./blogs/deleteme.txt')) {
    fs.unlink('./blogs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}
