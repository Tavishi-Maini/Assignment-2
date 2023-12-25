import {motion} from "framer-motion"

const Test = () => {

    const variants={
        visible:{opacity:1},
        hidden:{opacity:0},
    }
    return(
        <div className="course">
            <motion.div 
            className="box" 
            initial={{opacity:0, scale:0.5}} 
            animate={open ? "visible" :"hidden"} 
            transition={{duration: 2}}
            whileInView={{opacity:1, scale:2}}
            drag
            ></motion.div>
            <button onClick={()=>setOpen(prev=>!prev)}>Click</button>
        </div>
    )
};

export default Test;