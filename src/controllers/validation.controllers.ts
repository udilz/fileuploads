import express, { Request, Response } from "express";
import * as validationServices from "../services/validation.services";

export async function handleValidation(req: Request, res: Response) {
    const {title, body} = req.body;

    //bussines logic from services
    const result = await validationServices.handleCreateBlog(title, body);
    return res.json({message: "success", result});
}

export async function handleRegister(req: Request, res: Response) {
    const {name, email,password} =req.body;

    //bussines logic from services
    const result = await validationServices.handleRegister(name, email, password);
    return res.json({message: "success", result});
}
