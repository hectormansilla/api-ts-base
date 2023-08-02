import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

const hasRole = (user:string | JwtPayload, reqRole:Array<string>) => {

    return (req:Request, res:Response, next:NextFunction) => {

        if (!reqRole.includes(user)) {
            return res.status(401).json({
                msg: `One of the following roles is required: ${reqRole}`
            });
        };
        next();
    };

};

export { hasRole };