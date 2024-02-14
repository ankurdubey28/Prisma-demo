import {PrismaClient} from "@prisma/client"

const prisma=new PrismaClient();

async function main(){
    await prisma.user.create({
        data:{
            name:"ankur",
            email:"onelll@lll.com"
        }
    })
}

main();