import useGetMessages from "../../../components/hooks/useGetMessages";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import Message from "./Message";
import { useEffect, useRef } from "react";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    if (messages.length > 0) {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length > 0 && messages.map((message, index) => (
        <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
          <Message message={message} />
        </div>
      ))}

      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-50">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
