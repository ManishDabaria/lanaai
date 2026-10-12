export const createConverstion = async(req, res) =>{
    try{
        const userId = req.header["x-user-id"];
        console.log("userId ",userId);
        const converstion = await Converstion.create({
            userId:userId
        })

        return res.status(200).json(converstion)
    }
    catch(error){
        return res.status(500).json({message:`create converstion error ${error}`})
    }   
}


export const getConverstions = async(req, res) =>{
    try{
        const userId = req.header["x-user-id"];
        console.log("userId ",userId);
        const converstion = await Converstion.find({
            userId:userId
        }).sort({updateAt:-1})

        return res.status(200).json(converstions)
    }
    catch(error){
        return res.status(500).json({message:`get converstion error ${error}`})
    }   
}

export const saveMessage = async(req, res)=>{
    try{
        const {converstion, role, content} = req.body
        const message = await Message.create({
            converstionId,
            content,
            role
        })
        return res.status(200).json(converstions)
    }catch(error){

    }
}