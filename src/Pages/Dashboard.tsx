import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Paper } from "@mui/material";
import Component1 from "../Components/Component1";
import Component2 from "../Components/Component2";

export default function Dashboard()
{
    const navigator = useNavigate();

    const [data,setData] = useState<jsonPlaceholderModel[]>([]);

    useEffect(()=>{
        if(!localStorage.getItem("userdata"))
        {
            alert("You are not logged In.");//being called 2 times due to react strict mode
            navigator("/login");
            return;
        }

        fetchData();

    },[])

    const fetchData = async () => {
        let response:jsonPlaceholderModel[] = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
        setData(response);
    }

    return(
        <>
            <Container sx={{height:"100vh",p:4}}>
                <Paper
                    sx = {{
                        p:3,
                        height:"100%"                    
                    }}
                    elevation={3}
                >
                    <Component1 data={data}/>
                </Paper>
            </Container>
            <Container maxWidth="xs" sx={{height:"100vh",p:4}}>
                <Paper
                    sx = {{
                        p:3,
                        height:"100%"                    
                    }}
                    elevation={3}
                >
                    <Component2/>
                </Paper>
            </Container>
        </>
    )
}