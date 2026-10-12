import redis from "../../shared/redis/redis.js"

const protect=async(req, res, next)=>{
    try{
        const sessionId = req.cookies?.session
        if(!sessionId){
            return res.status(401).json({message:"unauthorized"})
        }
        const session = await redis.get(`session-${sessionId}`)
        if(!session){
            return res.status(400).json({message:"session expired"})
        }
        req.user = JSON.parser(session)
        next()
    } catch(error){
        console.log("protect middleware error: ", error)
        return res.status(500).json({message:`protect error ${error}`})
    }
}

export default protect