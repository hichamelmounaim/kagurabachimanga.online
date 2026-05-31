import fs from 'fs';
import path from 'path';
import https from 'https';

const url = 'https://graphql.anilist.co';

const query = `
query {
  Media(id: 169355, type: MANGA) {
    characters(sort: [ROLE, ID]) {
      edges {
        role
        node {
          id
          name {
            full
          }
          image {
            large
          }
          description
        }
      }
    }
  }
}
`;

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume(); // Consume response data to free up memory
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

const req = https.request(url, options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', async () => {
    const response = JSON.parse(data);
    const characters = response.data.Media.characters.edges;
    
    const charactersDir = path.join(process.cwd(), 'public', 'characters');
    if (!fs.existsSync(charactersDir)) {
      fs.mkdirSync(charactersDir, { recursive: true });
    }

    const charactersData = [];

    for (const char of characters) {
      const node = char.node;
      const imageUrl = node.image.large;
      const filename = `${node.id}.jpg`;
      const filepath = path.join(charactersDir, filename);
      
      console.log(`Downloading ${node.name.full}...`);
      try {
        await downloadImage(imageUrl, filepath);
        charactersData.push({
          id: node.id,
          name: node.name.full,
          role: char.role,
          description: node.description,
          imagePath: `/characters/${filename}`
        });
      } catch (err) {
        console.error(`Error downloading ${imageUrl}:`, err.message);
      }
    }

    fs.writeFileSync('characters.json', JSON.stringify(charactersData, null, 2));
    console.log('Finished downloading characters and created characters.json');
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(JSON.stringify({ query }));
req.end();
