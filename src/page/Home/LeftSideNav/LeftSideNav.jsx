import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [cat, setCat] = useState([])

    useEffect(() =>{
        fetch("./categories.json")
        .then(res => res.json())
        .then(data => setCat(data))
    },[])
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">All Category</h2>
            {
                cat.map(category => 
                <Link 
                className="block ml-4 text-xl font-semibold bg-slate-200"
                to={`category/${category.id}`} 
                key={category.id} 
                >{category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;