import Button from '@mui/material/Button';

function changeTheme() {
    console.log("hello");
}

function NavBar() {
    return(
        <div className="navbar">
            <Button variant="outlined" onClick={changeTheme}> Change Theme </Button>
        </div>
    )
}

export default NavBar;