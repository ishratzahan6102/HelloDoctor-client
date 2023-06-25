import React, { useEffect, useState } from 'react';


// admin ashole admin kinc checkaitesi
//  voy pais na paira jamu keep going

const useAdmin = (email) => {
    const [isAdmin , setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        if(email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                        // console.log(data)
                        setIsAdmin(data.isAdmin)
                        setIsAdminLoading(false)
                  
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
};

export default useAdmin;