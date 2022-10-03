
import profile_pic from '../img/profile_pic.jpg'
import ProfileCircle from './ProfileCircle';
import CircleRipple from './CircleRipple';

function MainHeader() {
    return (
        <header className="App-header">
            {/* <CircleRipple />  */}
            <ProfileCircle profile_img={profile_pic} />
            <br />
            <div>
                Kai Widdeson
            </div>
        </header>
    );
}

export default MainHeader;