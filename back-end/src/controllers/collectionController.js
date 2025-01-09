import { Collection } from "../models/collection.js";

export const createCollection = async(req,res,next)=>{
    try {
        const { name } = req.body;

        const existCollection = await Collection.findOne({name})
        if(existCollection){
            return res.status(400).json({
                message:"Colección ya existente"
            })
        }
        const collectionData = {...req.body}
        const collection = await Collection.create(collectionData);
        res.status(200).json({
            message:"Colección creada con éxito",
            status:200,
            data:collection,
        })
    } catch (error) {
        next(error)
    }
}

export const getAllCollections = async(req,res,next)=>{
    try {
        const collections = await Collection.find().select('-__v');
        res.status(200).json({
            message:'Colecciones obtenidas con éxito',
            status:200,
            data:collections,
        })
    } catch (error) {
        next(error)
    }
}

export const getCollectionByName = async(req,res,next) => {
    try {
        const { name } = req.params;
        const collections = await Collection.findById(name).select('-__v')
        
        res.status(200).json({
            message: 'Coleción obtenida con éxito',
            status:200,
            data: collections,
        })
    } catch (error) {
        next(error)
    }
}

export const updateCollection = async(req,res,next) =>{
    try {
        const { id } = req.params;
        const collection=await Collection.findByIdAndUpdate(id, req.body,{
            new:true,
            runValidators:true,
        }).select('-__v');

        res.status(200).json({
            message:'Categoria actualizada con éxito',
            status:200,
            data:collection,
        })
    } catch (error) {
        next(error)
    }
}

export const deleteCollection = async(req,res,next) => {
    try {
        const {id} = req.params;
        const collection = await Collection.findByIdAndDelete(id).select('-__v');

        res.status(200).json({
            message:'Coleción eliminada con éxito',
            status:200,
            data:collection,
        })
    } catch (error) {
        next(error)
    }
}