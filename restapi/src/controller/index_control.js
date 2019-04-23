const index = (req, res, next) => {
    try{
        return res.json({
                message: "controller"
            })
    } catch(e){
        next(e)
    }
}

export {
    index
}