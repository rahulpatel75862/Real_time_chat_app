import MessageContainer from "./messages/MessageContainer"
import SideBar from "./sidebar/SideBar"



const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 p-4">
      <SideBar />
      <MessageContainer />
    </div>
  )
}

export default Home