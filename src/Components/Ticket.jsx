import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Context1 from "./context/Context1";

function Ticket() {
  const context = useContext(Context1);
const [ticketDetails, setTicketDetails] = useState({show: "", noOfTickets : 0, price : "" , theater : "" })

  const { getDetails, data } = context;
  const { id } = useParams();
  const [view, setView] = useState(false);
  const [buyTrue, setBuyTrue] = useState(false);
  const datatemp = data.filter((element)=>element?.show?.id == id);
  const availableTickets = 13;
const data1 = datatemp[0]

const change =(e)=>{

  setTicketDetails({...ticketDetails, [e.target.name] : e.target.value})
}


  const handleClick = (e) => {

if(buyTrue)  setBuyTrue(false)

else setBuyTrue(true);

setTimeout(()=>{
  window.scrollTo(0,1000)
}
,500)



    e.preventDefault();
  };
  const removeHtml = (string) => {
    let el = document.createElement("div");
    el.innerHTML = string;
    return el.textContent || el.innerText || "";
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    getDetails();
  }, []);

  return (
    <>
    
    { data1?.show &&  <div className=" mt-3">
      {/* this is for mobile view only */}
      <div className=" w-screen  ">
        <div className="relative w-screen shadow-2xl  overflow-hidden">
          <img src={data1.show?.image?.original} alt="img"className="blur-sm  h-64 w-full " />
          <div className="absolute text-white bg-black top-0 bottom-0 right-0 left-0 bg-opacity-10 flex flex-col justify-center px-4 items-end h-full">
            <p className="text-xl font-thin rounded-md bg-black bg-opacity-50 py-3 px-2 ">
              {removeHtml(data1.show.summary)}
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-3 pt-4 pl-4 rounded-t-lg bg-white">


          <div className="flex flex-row gap-2">
<span className="text-3xl"> {data1.show.name} </span>
            <p
              className={`${
                data1.show.status == "Running"
                  ? "text-green-400 border m-1  outline-1 p-1 bg-green-100"
                  : "bg-red-100 text-red-400"
              }`}
            >
              {data1.show.status}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            {data1.show.premiered} | {data1.show.language}
          </div>
          <div className="flex flex-row gap-2">
            {data1.show.genres.map((element) => {
              return <p  className="outline text-slate-400 bg-blue-100" key={element} >{element}</p>;
            })}
          </div>
          <div></div>
        </div>
      </div>

      <div className="w-screen  bg-white">
        <div className="flex flex-row justify-center">
          <button
            onClick={() => {
             if( view) { setView(false) }
             else {  
               setView(true)
               setTimeout(()=>{

                 window.scrollTo(0,100000)

               },500)
              }
            }}
            className="shadow-xl px-3 rounded-md text-3xl font-thin bg-black text-center py-2  mt-3  text-white"
            >
          { !view ? "Book Tickets" : "X"}
          </button>
        </div>
        {(view  ) && (
          <> <form className=" flex flex-col ani-fade bg-white">
            <div className="flex mt-3 ml-3 gap-3 flex-row">
              <div>Shows</div>
              <select className="outline text-slate-500 bg-slate-100 p-1"
              value={ticketDetails.show} onChange={change}
              name="show" >
                <option>Select</option>
              
              
                {
                
                
                data1.show.schedule.days.map((element) => {






                  return <option key={element } value={`${element}  ${data1.show.schedule.time}`}>{element}
                  {" "} ({data1.show.schedule.time})
                  
                  </option>; })
                  
                  }
              </select>
             
            </div>

           
              <div className="mt-4 flex flex-col gap-3  ">
                <label className="text-2xl ml-5"> Theater </label>

                <div className="outline outline-1 w-3/4  rounded-lg  ml-6 px-2 bg-white flex">
                  <select
                    className="text-xl  outline-none w-full bg-white h-12"
                    
                    name="theater"
                    id="theater"
                    value={ticketDetails.theater}
                    onChange={change}
                    >
<option  >Select</option>
<option value="PVR, MBD Mall, Jalandhar" >PVR, MBD Mall, Jalandhar</option>
<option value="PVR, Curo Mall, Jalandhar" >PVR, Curo Mall, Jalandhar</option>
<option value="Sarb Multiplex, Jalandhar">Sarb Multiplex, Jalandhar</option>


                    </select>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3  ">
                <label className="text-2xl ml-5">Number of Tickets  </label>
                <div className="bg-white pl-2 outline outline-1 items-center justify-center flex-row   rounded-lg w-3/4 ml-5 flex">
                  <input
                    placeholder={`Tickets Available : ${availableTickets} `}
                    className="text-xl outline-none w-full h-12 bg-white "
                    type="number"
                    name="noOfTickets"
                    value={ticketDetails.noOfTickets}
                    onChange={change}
                    id="noOfTickets"
                    />
                </div>
              </div>
              
              <label className="text-2xl ml-5 my-2"> Ticket Type </label>

                <div className="outline outline-1 w-3/4 rounded-lg  ml-6 px-2 bg-white flex">
                  <select
                    className="text-xl  outline-none w-full bg-white h-12"
                    type="price"
                    name="price"
                    value={ticketDetails.price}
                    onChange={change}
                    id="price"
                    >
<option  >Select</option>
<option value={150} >Classic (Rs 150)</option>
<option value={200} >Prime (Rs 200)</option>
<option value={300}>Recliner (Rs 300)</option>


                    </select>
                </div>
              
              
              
              <div className="w-screen">

                <div className="flex pt-4 flex-row justify-end w-3/4 ml-5">
                 
                 
                 
             <button
                    onClick={handleClick}
                    className="  py-2 w-1/4 px-3 bg-black text-white rounded-xl "
                    >
                    Buy
                  </button>
                </div>
              </div>
            </form>

{ buyTrue &&  <div className="h-screen w-screen">
  
  <div className="flex flex-col ml-3 gap-3 text-3xl  border mt-3 py-12 pl-3 rounded ">

<h1 className="">Tickets booked !!</h1>
<h1> {data1.show.name} ({ticketDetails.show })</h1>
<h1>Tickets X {ticketDetails.noOfTickets}</h1>
<h1>Price :{ ticketDetails.noOfTickets != 0 &&( <> {ticketDetails.noOfTickets} X Rs {ticketDetails.price}= </>)}  {ticketDetails.price * ticketDetails.noOfTickets}</h1>
<h1>Theater : {ticketDetails.theater}</h1>


  </div>
  
  
  </div>}


          </>
        )}
      </div>
    </div>}
                    </>
  );
}

export default Ticket;
