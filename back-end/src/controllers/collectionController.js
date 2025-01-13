import { CollectionProduct } from "../models/collection.js";

export const createCollection = async(req,res,next)=>{
    try {
        const { name } = req.body;

        const existCollection = await CollectionProduct.findOne({name})
        if(existCollection){
            return res.status(400).json({
                message:"Colección ya existente"
            })
        }
        const collectionData = {...req.body}
        const collectionProduct = await CollectionProduct.create(collectionData);
        res.status(200).json({
            message:"Colección creada con éxito",
            status:200,
            data:collectionProduct,
        })
    } catch (error) {
        next(error)
    }
}

export const getAllCollections = async(req,res,next)=>{
    try {
        const collectionsProduct = await CollectionProduct.find().select('-__v');
        res.status(200).json({
            message:'Colecciones obtenidas con éxito',
            status:200,
            data:collectionsProduct,
        })
    } catch (error) {
        next(error)
    }
}

export const getCollectionByName = async(req,res,next) => {
    try {
        const { name } = req.params;
        const collectionsProduct = await CollectionProduct.findById(name).select('-__v')
        
        res.status(200).json({
            message: 'Coleción obtenida con éxito',
            status:200,
            data: collectionsProduct,
        })
    } catch (error) {
        next(error)
    }
}

export const updateCollection = async(req,res,next) =>{
    try {
        const { id } = req.params;
        const collectionProduct = await CollectionProduct.findByIdAndUpdate(id, req.body,{
            new:true,
            runValidators:true,
        }).select('-__v');

        res.status(200).json({
            message:'Categoria actualizada con éxito',
            status:200,
            data:collectionProduct,
        })
    } catch (error) {
        next(error)
    }
}

export const deleteCollection = async(req,res,next) => {
    try {
        const {id} = req.params;
        const collectionProduct = await CollectionProduct.findByIdAndDelete(id).select('-__v');

        res.status(200).json({
            message:'Coleción eliminada con éxito',
            status:200,
            data:collectionProduct,
        })
    } catch (error) {
        next(error)
    }
}