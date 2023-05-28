const fs = require('fs/promises')
const path = require('path')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	const filepath = path.join(__dirname,fileName);
	fs.writeFile(filepath,fileContent,(err)=>{
		if(err != null){
			console.log(err);
		}
	})
}

const myFileReader = async (fileName) => {
	// write code here
	const filepath = path.join(__dirname,fileName);
	const data = await fs.readFile(filepath,"utf-8",(err)=>{
		if(err!=null){
			console.log(err);
		}
	});
	console.log(data);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	const filepath = path.join(__dirname,fileName);
	fs.appendFile(fileName,fileContent,(err)=>{
		if(err!=null){
			console.log(err);
		}
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	const filepath = path.join(__dirname,fileName);
	fs.unlink(filepath,(err)=>{
		if(err!=null){
			console.log(err);
		}
	})
}
myFileDeleter('doc.txt');


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter}