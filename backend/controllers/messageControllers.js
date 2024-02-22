
import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import { getReceiverSocketId } from "../socket/Socket.js";
import { io } from "../socket/Socket.js";

export const sentMessage = async (req,res) => {
    try{

        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id

       let conversation =  await Conversation.findOne({
            participants: { $all: [ senderId, receiverId ]},
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [ senderId, receiverId ]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        //this will not run parallerly
        // await conversation.save();
        // await newMessage.save();

        //this will run paralerly
        await Promise.all([ conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json(newMessage);

    } catch(error){
        console.log("Error in sendMessage controller:" , error.message)
        res.status(500).json({ message: 'internal server message'});
    }
}

export const getMessages = async(req,res) => {
    try{

        const { id: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [ senderId, userToChatId]}
        }).populate("messages");

        if(!conversation){
            return res.status(200).json([])
        }

        res.status(201).json(conversation.messages);

    } catch(error){
        console.log("Error in sendMessage controller:" , error.message)
        res.status(500).json({ message: 'internal server message'});
    }
}