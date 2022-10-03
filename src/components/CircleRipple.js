import { motion } from 'framer-motion';

function CircleRipple() {
    return (
        <div>
            <motion.div
            className='ripple'
            animate={{ height: 360, width: 360, opacity: 0}}
            transition={{ ease: "linear", duration: 4, repeat: Infinity }}
        />
        </div>
    );
}

export default CircleRipple;