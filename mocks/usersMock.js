import ContenedorMemoria from "../contenedores/ContenedorMemoria.js"
import faker from "faker"
import {normalize,denormalize,schema} from "normalizr"

export default class UserMock extends ContenedorMemoria{
    constructor(){
        super();
    }

    popular = (cant=50)=>{
        const nuevos = []
        let prefix
        for(let i=0; i<cant;i++){
            prefix = faker.name.prefix()
            nuevos.push({[`${prefix}`]:{
                name:faker.name.firstName(),
                last_name:faker.name.lastName(),
                email:faker.internet.email(),
                id:faker.datatype.uuid()
            }})
        }
        const usersSchema = new schema.Entity('users')
        const pageSchema = new schema.Entity('page',{
            "Miss": usersSchema,
            "Mrs.": usersSchema,
            "Mr.": usersSchema,
            "Ms.": usersSchema,
            "Dr.": usersSchema
        })

        const normalizedData = normalize(nuevos,pageSchema)
        console.log(JSON.stringify(normalizedData,null,'\t'));
        return nuevos;
    }
}