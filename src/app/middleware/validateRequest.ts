import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"

const validateRequest = (schema: AnyZodObject) => {

    return async (req: Request, res: Response, next: NextFunction) => {
        //  validation
        //  if everything alright  next() ->
        try {
            await schema.parseAsync({
                body: req.body  // important
            })

            next()

        } catch (err) {
            next(err)
        }


    }
}

export default validateRequest;
