
import prisma from '@/utils/connect';
import { NextResponse } from 'next/server'

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page")) || 1;
    const cat = searchParams.get("cat");

    const POST_PER_PAGE = 4;

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && { catSlug: cat }),
        },
        orderBy: {
            createdAt: 'desc'
        }
    };

    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where }),
        ]);
        return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
    } catch (err) {
        console.error("Error in GET request:", err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};