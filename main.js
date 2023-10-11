const fs=require('node:fs');
let c='';
fs.readFile("data.json",(err,data)=>{
    if (err === null) {
        let a,b;
        const objList = JSON.parse(data);
        for (let obj of objList) {
                if (obj.txt==='Доходи, усього') {
                    a=obj.txt+' : '+obj.value
                }
                if (obj.txt==='Витрати, усього') {
                    b=obj.txt+' : '+obj.value
                }                
        }
        c=a+'\n'+b
        console.log(c);
    }
    const dataToWrite = c;

fs.writeFile('output.txt', dataToWrite, (err) => {
  if (err) {
    console.error('Помилка запису в файл:', err);
  } else {
    console.log('Дані успішно записані в файл.');
  }
});
});