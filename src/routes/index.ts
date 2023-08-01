import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();


const cleanFileName = (fileName:string) => {
  return fileName.split('.')[1];
}

readdirSync(PATH_ROUTER).filter((fileName)=>{
  const cleanName = cleanFileName(fileName);
  if (cleanName !== 'ts'){
    import(`./route.${cleanName}`).then((moduleRouter) => {
      console.log(`Cargando la ruta... ${cleanName}`);
      
      router.use(`/${cleanName}`, moduleRouter.router);
    })
  }
});

export {router}