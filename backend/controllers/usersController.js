import User from "../models/UserModel.js";

export const getUsersForSidebar = async(req,res) => {
    try{

        const loggedInUsers = req.user._id;
        const filteredUsers = await User.find( { _id: { $ne: loggedInUsers}}).select("-password");

        res.status(200).json(filteredUsers)

    } catch(error) {
        console.error("Error in getting userRoutes:", error.message)
        res.status(500).json({error: "internal server error"})
    }
}