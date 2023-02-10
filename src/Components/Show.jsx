import React from "react";
import { Link } from "react-router-dom";

function Show({ data }) {
  return (
    <>
   
    {

data.show.image !== null



      && (

      
    <div className="     group" >
      <div className=" shadow-xl p-2 pb-3 rounded-xl card "  >
        <div className=" flex flex-col md:flex-row justify-center   ">
          <div className="p-1 relative w-auto md:h-64 overflow-hidden ">
           
              <img
              src={data.show.status !== "in Developoment" ? data.show.image.original : "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"}
              className=" md:h-64 rounded-start rounded-lg peer group-hover:blur-sm card-img-flex"
              alt="image"
            />

            {
              <div className="absolute group-hover:flex  bg-black  top-0 right-0 left-0 bottom-0 bg-opacity-50 hidden text-white ani-fade">
                <div className="flex flex-col justify-center items-center gap-3 w-full">
                  <div className=""></div>
                  <Link to={`/book-ticket/${data.show.id}`} className="flex flex-row justify-center outline outline-white rounded-full px-4  bg-white bg-opacity-10 py-2">
                    Get Details
                  </Link>
                 { data.show.status == 'Running' && <Link to={`/book-ticket/${data.show.id}`} className="flex flex-row justify-center outline outline-white rounded-full px-4  bg-white bg-opacity-10 py-2">
                    Book Tickets
                  </Link>}
                </div>
              </div>
            }
          </div>
        </div>
        <div className="  flex flex-col mt-1 pl-4">
          <div className=" flex flex-col gap-2 ">
            <div className=" text-4xl font-thin  flex flex-row items-center  ">
              {data.show.name}
             <div >

              <p
                className={`mx-3 text-xs px-1 inline outline outline-1 ${
                  data.show.status == "Running"
                  ? "outline-green-600  bg-green-100 text-green-600"
                  : "outline-red-700 text-red-700"
                } `}
                >
                {data.show.status}
              </p>
                </div>

              
            </div>
            <div className="flex flex-row w-3/4 justify-between">

            <h5 className="text-xl">
                Rating : {data.show.rating.average != null  ? data.show.rating.average : "5"}/10
              </h5>
              
            </div>
            <div className="card-text flex flex-row flex-wrap gap-1">
              {data.show.genres.map((element) => {
                return (
                  <span className=" bg-blue-100 outline outline-slate-500 outline-1 text-xs px-1">
                    {element}{" "}
                  </span>
                );
              })}
            </div>
           
            <p className=" flex flex-row  gap-5 items-center">
              <small className="text-xs text-slate-500">{data.show.premiered}</small>
             
            </p>
          </div>
        </div>
      </div>
    </div>
    )
    
    }</>
  );
}

export default Show;
