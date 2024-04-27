import { useState } from 'react'
function Change(){
    let [color, setColor] = useState("olive")
    return (
        <div className="w-screen h-screen flex justify-center " style={{backgroundColor:color}}>
            <div className="bg-red-300 h-20 w-[80%] rounded-full  flex gap-2  p-5 bottom-12 absolute ">
                <button className="   rounded-full w-[90%] p-1 cursor-pointer " style = {{backgroundColor : "Red"}} onClick={() => setColor("red")}>Red</button>
                <button className="   rounded-full w-[90%] p-1 cursor-pointer " style = {{backgroundColor : "Green"}} onClick={() => setColor("green")}>Green</button>
                <button className="  rounded-full w-[90%] p-1  cursor-pointer text-black" style = {{backgroundColor : "Yellow"}} onClick={() => setColor("yellow")} >Yellow</button>
                <button className="  rounded-full w-[90%] p-1  cursor-pointer " style = {{backgroundColor : "Blue"}} onClick={() => setColor("blue")}>Blue</button>
                <button className="  rounded-full w-[90%] p-1  cursor-pointer " style = {{backgroundColor : "Teal"}} onClick={() => setColor("teal")}>Teal</button>
                <button className="  rounded-full w-[90%] p-1  cursor-pointer  " style = {{backgroundColor : "Grey"}} onClick={() => setColor("grey")}>Grey</button>
                <button className="  rounded-full w-[90%] p-1 " style = {{backgroundColor : "Orange"}} onClick={() => setColor("orange")}>Orange</button>
                <button className="  rounded-full w-[90%] p-1 " style = {{backgroundColor : "Black"}} onClick={() => setColor("black")}>Black</button>
            </div>
        </div>
    )
}

export default Change