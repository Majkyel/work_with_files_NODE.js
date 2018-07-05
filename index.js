var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');

fs.stat('./images/cat.jpg', function (err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
    console.log('\nData before saved in tekst.txt!'.yellow);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nSaved text!', function (err) {
        if (err) throw err;
        console.log('Data saved in tekst.txt!!'.yellow);
        fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
            console.log('\nData after saved in tekst.txt!!'.yellow);
            console.log(data);
        });
    });
});

fs.readdir('../13_7', 'utf-8', function (err, files) {
    console.log('\nContent folder:'.yellow);
    console.log(files);
    fs.writeFile('./folderContent.txt', files, function (err) {
        if (err) throw err;
        console.log('\nData content folder in folderContent.txt saved!'.yellow);
    });
});
