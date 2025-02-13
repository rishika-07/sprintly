export function GET(
    req:Request,
    { prams }:{prams: {userId : string}}
)
{
    return Response.json({userId:prams.userId})
}