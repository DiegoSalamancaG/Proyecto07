import { Category } from "../models/category.js"

export const createCategory = async(req, res, next) => {
    try {
        const { name } = req.body;
        
        const existCategory = await Category.findOne({name})
        if(existCategory){
            return res.status(400).json({message:"Categoria existente!"})
        }
        const categoryData = {...req.body}
        const category = await Category.create(categoryData);

        res.status(201).json({
            message: "Categoría creada exitosamente",
            status:201,
            data: category,
        });
    } catch (error) {
        next(error)
    }
}

export const getAllCategory = async(req,res,next)=>{
    try {
        const categories = await Category.find().select('-__v')
        res.status(200).json({
            message: 'Categorias obtenidas con éxito',
            status: 200,
            data: categories,
        });
    } catch (error) {
        next(error)
    }
}

export const getCategoryByName = async(req,res,next) => {
    try {
        const { name } = req.params;
        const categories = await Category.findById(name).select('-__v')
        
        res.status(200).json({
            message: 'Categoria obtenida con éxito',
            status:200,
            data: categories,
        })
    } catch (error) {
        next(error)
    }
}

export const updateCategory = async(req,res,next) =>{
    try {
        const { id } = req.params;
        const category=await Category.findByIdAndUpdate(id, req.body,{
            new:true,
            runValidators:true,
        }).select('-__v');

        res.status(200).json({
            message:'Categoria actualizada con éxito',
            status:200,
            data:category,
        })
    } catch (error) {
        next(error)
    }
}

export const deleteCategory = async(req,res,next) => {
    try {
        const {id} = req.params;
        const category = await Category.findByIdAndDelete(id).select('-__v');

        res.status(200).json({
            message:'Categoria eliminada con éxito',
            status:200,
            data:category,
        })
    } catch (error) {
        next(error)
    }
}