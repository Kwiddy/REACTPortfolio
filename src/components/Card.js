import { AnimatePresence } from "framer-motion";
import {motion} from 'framer-motion';

function Card(props) {
    return(
        <AnimatePresence>
            <motion.div
                key="modalf"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
            />
            <div className="card">
                <div className="card-title">
                    {props.title}
                </div>
                <div className="card-content">
                    {props.content}
                </div>
            </div>
        </AnimatePresence>
    );
}

export default Card;