
import profile_pic from '../img/profile_pic.jpg'
import ProfileCircle from './ProfileCircle';
import CircleRipple from './CircleRipple';
import FootButton from './FootButton';

import '../App.scss';

import Typewriter from 'typewriter-effect';

import {headliners} from '../contents'

function MainHeader() {
    return (
        <header className="App-header">
            {/* <CircleRipple />  */}
            <ProfileCircle profile_img={profile_pic} />
            <div id="name-header">
                Kai Widdeson
            </div>

            <Typewriter
                options={{
                    strings: headliners,
                    cursor: ">",
                    autoStart: true,
                    loop: true,
                    }}
            />
            
            <FootButton />
        </header>
    );
}

export default MainHeader;