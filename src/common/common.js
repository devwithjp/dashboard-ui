
export const uName = () =>(
<div className='uNameContainer'>
    <span class='uName'>
    <div><label for="fName">First Name</label></div>
    <input type='text' id='fName' name="fName" required autocomplete="off"/>
    </span>
    <span class='uName'>
    <label for="lName">Last Name</label>
    <input type='text' id='lName' name="lName" required autocomplete="off"/>
    </span>
</div>);


export const confirmPw = () => (
    <>
        <label for="email">Email address</label>
        <input type='email' id='email' name="email" required autocomplete="off"/>
        <label for="pw">Password</label>
        <input type="password" id="pw" name="pw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 4 characters" required autocomplete="off"/>
        <label for="confirm">Confirm Password</label>
        <input type="password" id="confirm" name="confirmed" required autocomplete="off"/>
    </>
    
);

export const userInfo = () => (
    <>
        <label for="dob">Date of Birth</label>
        <input type='date' id='dob' name="dob" required autocomplete="off"/>
        <label for="phone">Phone Number</label>
        <input type="number" id="phone" name="phone" autocomplete="off"/>
        <label for="address">Address</label>
        <input type="text" id="address" name="address" autocomplete="off"/>
    </>
)