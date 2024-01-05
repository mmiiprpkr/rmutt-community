import { getCurrentuser } from "@/lib/currentUser";
import { Navbar } from "./_components/navbar";

const HomePage = async () => {
  const user = await getCurrentuser();
  return ( 
    <>
      <Navbar 
        user={user!}
      />
    </>
   );
}
 
export default HomePage;