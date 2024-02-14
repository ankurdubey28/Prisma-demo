import {PrismaClient} from "@prisma/client"

const prisma=new PrismaClient({
    log:[{emit:"event",level:"query"}]
})

async function main(){
    const users=await prisma.user.findMany({
        take:1,
        skip:0
    })
}

main()

prisma.$on("query" ,async (e)=>{
    console.log(`${e.query} ${e.params}`)
})