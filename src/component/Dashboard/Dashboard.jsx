import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (

        <>


            <div className="flex   gap-2">

                <div className="m-[20px] w-[20%] p-[10px] py-10  border shadow-lg rounded-lg">
                    <Link to='/dashboard'><h3 className="py-3">Dashboard</h3></Link>

                    <Link to='/dashboard/profile'><h3 className="py-3">Profile</h3></Link>

                    <Link to='/dashboard/editProfile'><h3 className="py-3">Edit Profile</h3></Link>
                </div>


                <div className="mt-5 ">
                    <Outlet></Outlet>
                </div>

            </div>
        </>

    );
};

export default Dashboard;