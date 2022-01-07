import { Injectable, NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request, Response } from "express";

@Injectable() // nếu không thêm Injectable thì config JwtModule.register bên kia sẽ không được hiểu vì lớp này không được provide cho module chứa nó
export class AuthMiddleWare implements NestMiddleware{
    constructor(private jwtService: JwtService){}
    use(req : Request , res : Response , next : Function){
        if(req.headers.authorization){           
                try{
                    let token = req.headers.authorization.split(" ")[1]
                    let data =  this.jwtService.verify(token)
                    console.log(data);
                    
                    next()
                }
                catch (err){
                    res.status(200).json({
                        success: false ,
                        message : 'Token Invalid'
                    })
                }
        }
        else{
            res.status(401).json({
                success : false ,
                message : 'Token does not exist'
            })
        }
    }
}