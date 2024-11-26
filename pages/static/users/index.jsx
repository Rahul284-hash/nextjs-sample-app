
const StaticUserPage = (props) =>{
    return(
        <>
       <h1>This is STATIC SITE PAGE</h1> 
       {
        props.data.users.map((user)=> <li key={user.id}>{user.firstName}</li>)
       }
        </>
    )
}

export const  getStaticProps = async() =>{
    const data = await ((await fetch("https://dummyjson.com/users/")).json())

    return{
        props:{
            data
        }
    }

}

export default StaticUserPage