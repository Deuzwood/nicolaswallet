const postsFolder = 'src/assets/posts';
const fs = require('fs');

const data = [];

function getMetadata(fileName) {
    const fileContent = fs.readFileSync(postsFolder + '/' + fileName, 'utf8');
    const metadata = fileContent.split('---')[1].trim().split('\n');
    const metadataObject = { fileName };
    metadata.forEach((item) => {
        const [key, value] = item.split(':');
        metadataObject[key.trim()] = value.trim();
    });
    return metadataObject;
}

fs.readdirSync(postsFolder).forEach((file) => {
    if (file.endsWith('.md')) {
        try {
            data.push(getMetadata(file));
        } catch (err) {
            console.error(err);
        }
    }
});

try {
    fs.writeFileSync(postsFolder + '/posts.json', JSON.stringify(data));
    // fichier écrit avec succès
} catch (err) {
    console.error(err);
}
