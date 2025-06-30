import React from "react";

export default function productLayout({
    children
}:{
    children:React.ReactNode
}){
    return(
        <>
          <div>
            {children}
          </div>
        </>
    )
}