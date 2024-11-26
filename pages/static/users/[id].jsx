const UserPage = (props) =>{
console.log(props.data,"data2")
    return(
        <>
        <h1>Profile Page Of </h1>
        <h1>{props.data.firstName}</h1>
        </>
    )
}

export const getStaticPaths = async() =>{

    const data = await (await fetch(`https://dummyjson.com/users/`)).json();
    const allUserIds = data.users.map(user => user.id);

    console.log(allUserIds,"allUserIds")

    return{
        paths:allUserIds.map((userId) => ({params:{id:`${userId}`}})),
        fallback:false
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.id;
    const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();

    return{
        props:{
            data,
        }
    }

}
export default UserPage;