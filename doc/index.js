const fs = require('fs')
const path = require('path')
main()
async function main() {
  const [readEnBuf, readCnBuf, resultArr] = await Promise.all([readDoc(), readDoc('./README.zh-CN.md'), readJson()])
  const result = resultArr.join('\n')
  writeDoc(readEnBuf.toString() + result)
  writeDoc(readCnBuf.toString() + result, './README.zh-CN.md')
}
function readDoc(p = './README.md') {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, p), (err, data) => {
      if (err) {
        console.error(err)
        reject(err)
      }
      resolve(data)
    })
  })
}

function readJson() {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, "../snippets/naive-ui.json"), (err, data) => {
      if (err) {
        console.error(err)
        reject(err)
      }
      const obj = JSON.parse(data.toString())
      const values = []
      for (const item in obj) {
        const value = obj[item]
        values.push(value)
      }
      const results =  values.map((item, index) => {
        return  `|${index + 1}. | \`${item.prefix}\` | \`${item.description.replace('Naive UI ', '')}\` |`
      })
      resolve(results)
    })
  })
}

function writeDoc(data, path = './README.md') {
  fs.writeFile(path, data, (err) => {
    if (err) {
      console.error(err)
      return err
    }
    console.log('写入成功');
  })
}