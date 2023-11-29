import React from "react";

// creating context and assigning it to variable and then creating provider
// provider is nothing but which shares data with its nested components
// context is a global variable
// so we can use it as a wrapper
{/* <UserContext>
    <Login/>
    <Card/>
</UserContext> */}

const UserContext=React.createContext()

// exporting
export default UserContext