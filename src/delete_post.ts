import {PrismaClient} from  "@prisma/client"

const prisma=new PrismaClient();

async function main(){
    await prisma.post.delete({
        where:{id:1}
    })
}
main()