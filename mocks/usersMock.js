import ContenedorMemoria from "../contenedores/ContenedorMemoria.js"
import faker from "faker"
import {normalize,denormalize,schema} from "normalizr"

export default class UserMock extends ContenedorMemoria{
    constructor(){
        super();
    }

    popular = (cant=50)=>{
        const nuevos = []
        for(let i=0; i<cant;i++){
            nuevos.push({
                name:faker.name.firstName(),
                last_name:faker.name.lastName(),
                email:faker.internet.email(),
                id:faker.datatype.uuid()
            })
        }
        const usersSchema = new schema.Entity('name')

        const normalizedData = normalize(blog,usersSchema)
        console.log(JSON.stringify(normalizedData,null,'\t'));
        return nuevos;
    }
}