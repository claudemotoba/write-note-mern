"use strict";
const NoteModel = require('../models/note.model');
const ErrorManagement = require('../utilities/error-management.utilitie');

class NoteController{

    static save(){
        return async (req, res) => {
            try {
                const note = await NoteModel.create(req.body);
                return res.status(200).json({ status: 200, description: "success", response: note });

            } catch (error) {

                const err = ErrorManagement(error, res);
                if(typeof err == 'string')
                    return res.status(500).json({ status: 500, description: err, response: null }) ;

               return res.status(400).json({ status: 400, description: err[Object.keys(err)[0]], response: null });
                
            } 
        }
    }

    static findAll(){
        return async (req, res)=>{
            try {
                const notes = await NoteModel.find()
                if(!notes){
                    return  res.status(200).json({ status: 200, description: "Aucune note trouvée", response: [] });
                }else{
                   
                    return  res.status(200).json({ status: 200, description: "success", response: notes });
                }
                    
            } catch (error) {
                const err = ErrorManagement(error, res);
                return res.status(500).json({ status: 500, description: err, response: null }) ;
            }
        }
    }

    static findOne(){
        return async (req, res) => {
            try {
                const { params: { id } } = req;
                const note = await NoteModel.findById(id);

                if(!note)
                    return res.status(200).json({ status: 200, description: "Aucune note trouvée", response: null });
                else 
                    return res.status(200).json({ status: 200, description: "success", response: note });

            } catch (error) {
                const err = ErrorManagement(error, res);
                return res.status(500).json({ status: 500, description: err, response: null }) ;
            }
        }
    }

    static updateOne(){
        return async (req, res) => {
            try {
                const { params: { id } } = req;
                const note = await NoteModel.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })

                if(!note)
                    return res.status(200).json({ status: 200, description: "Aucune note trouvée", response: null });
                else 
                    return res.status(200).json({ status: 200, description: "success", response: note });

            } catch (error) {

                const err = ErrorManagement(error, res);
                return res.status(500).json({ status: 500, description: err, response: null }) ;
            }
        }
    }

    static deleteOne(){
        return async (req, res) => {
            try {
                const { params: { id } } = req;
                const note = await NoteModel.findById(id)

                if(!note){
                    return res.status(200).json({ status: 200, description: "Aucune note trouvée", response: null });
                }
                
                await NoteModel.remove({ _id: id })
                
                return res.status(200).json({ status: 200, description: "success", response: null });


            } catch (error) {
                const err = ErrorManagement(error, res);
                return res.status(500).json({ status: 500, description: err, response: null }) ;
            }
        }
    }


}

module.exports = NoteController;