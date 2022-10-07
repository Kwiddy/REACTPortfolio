import Button from '@mui/material/Button';

import {originalPortfolioLink} from '../contents';

function goHome() {
    window.location.href = originalPortfolioLink;
}

function NavBar() {
    return(
        <div className="navbar">
            <Button
                style={{
                    color: "white",
                    borderColor: "white"
                }}
                variant="outlined"
                onClick={goHome}
                >
                See Full Portfolio
            </Button>
        </div>
    )
}

export default NavBar;