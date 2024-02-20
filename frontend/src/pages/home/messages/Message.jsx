

const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=ais" alt="chat bubble" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! whats up??</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-200">12:42</div>
    </div>
  )
}

export default Message