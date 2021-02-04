const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { promisify } = require('util');
const { resolve } = require('path');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const DOCS_PATH = 'src/pages/docs';

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async subdir => {
      const res = resolve(dir, subdir);
      return (await stat(res)).isDirectory() ? getFiles(res) : res;
    })
  );
  return files.reduce((a, f) => a.concat(f), []);
}

function getContent() {
  return getFiles(DOCS_PATH).then(files =>
    files.map(file => {
      const relativeFilePath = path.relative(
        `${process.cwd()}/${DOCS_PATH}`,
        file
      );
      const id = relativeFilePath.replace(/\.mdx$/, '');
      const fileContents = fs.readFileSync(file, 'utf8');
      const matterResult = matter(fileContents);

      const {
        data: { title },
        content,
      } = matterResult;

      return {
        id,
        title,
        content,
      };
    })
  );
}

async function getData() {
  const posts = await getContent();
  return `export const posts = ${JSON.stringify(posts)}`;
}

(async () => {
  try {
    fs.readdirSync('cache');
  } catch (error) {
    fs.mkdirSync('cache');
  }

  const data = await getData();
  fs.writeFile('cache/data.js', data, error => {
    if (error) {
      return console.log(error);
    }
    console.log('docs cached');
  });
})();
