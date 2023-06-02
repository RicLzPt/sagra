import fs from 'fs';

export default cachedEventHandler(async () => {
    console.log(new Date().toLocaleString());
    fs.writeFileSync('cache.txt', new Date().toLocaleString());
    return `Response generated att ${new Date().toLocaleString()}`;
  }, {
    swr: true, 
    maxAge: 10
  });
  