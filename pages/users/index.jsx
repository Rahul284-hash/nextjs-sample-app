import { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from 'swr';
import styles from '../../styles/Users.module.css'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const UserPage = () => {
    const {data,error} = useSWR("https://dummyjson.com/users",fetcher)
    console.log(data,"data")

    if(error){
        return <h1>
            Error happend
        </h1>
    }

    if(!data){
        return<h1>Loading....</h1>
    }
    return (
        <>
            <h1>Users</h1>

            {data.users && data.users.map(user => <Link  href={`users/${user.id}`} key={user.id}>
                    <div className={styles.text}>{user.firstName}</div>
                    </Link>)
            }
        </>
    )
}

export default UserPage;