
const userServerPage = (props) => {
    console.log(props,"props")
    return (
        <>
            <h1>This is USER SSR</h1>
            {
                props.data.users.map((user => <li>{user.firstName}</li>))
            }

        </>
    )
}

export const getServerSideProps = async () => {

    const data = await ((await fetch('https://dummyjson.com/users')).json())

    return {
        props: {
            data,
        }
    }
}



export default userServerPage;