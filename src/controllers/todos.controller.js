import { asyncHandler } from '../utils/asyncHandler.js'
import {Card} from '../models/card.model.js'

const add = asyncHandler(async (req, res)=>{

    if(!req.body.title){
        res.status(401).json({
            error: {
                statusCode: 401,
                text: "Title not found in the request!"
            }
        });
    }
    const responseFromDatabase = await Card.create({
        title: req.body.title
    })

    if (responseFromDatabase._id) {
        res.status(201).json({
            response: {
                statusCode: 201,
                text: "User Created Successfully!"
            }
        });
    }

    
})


export { add }