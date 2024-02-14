import {PrismaClient} from "@prisma/client"

const prisma=new PrismaClient({log:['info','query']});

async function main(){
   const res= await prisma.post.findMany({
        take:1,
        skip:0
    })
   // console.log(res)
}

main()