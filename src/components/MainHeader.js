
import profile_pic from '../img/profile_pic.jpg'
import ProfileCircle from './ProfileCircle';

function MainHeader() {
    return (
        <header className="App-header">
            <ProfileCircle profile_img={profile_pic} />
            Kai Widdeson
        </header>
    );
}

export default MainHeader;