
import { motion, AnimatePresence } from "framer-motion"

function ProfileCircle(props) {
    return (
        <div>
            <AnimatePresence>
                <motion.img
                key={props.profile_img}
                src={props.profile_img}
                className="profile-circle-large"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                />
            </AnimatePresence>
        </div>
    );
}

export default ProfileCircle;