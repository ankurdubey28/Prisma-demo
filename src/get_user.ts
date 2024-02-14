import {PrismaClient} from "@prisma/client"

const prisma= new PrismaClient()
async function main(){
    const users=await prisma.user.findMany({})
    console.log(users)
}

async function two(){
    const user=await prisma.user.findUnique({
        where:{
            id:1
        }
    })
    console.log(user)
}

main()
two();
