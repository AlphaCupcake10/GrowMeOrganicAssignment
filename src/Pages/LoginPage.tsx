import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage()
{
    interface InputState
    {
        value:string,
        hasError:boolean
    }

    const navigator = useNavigate();
    const [name,setName] = useState<InputState>({value:"",hasError:false});
    const [phoneNumber,setPhoneNumber] = useState<InputState>({value:"",hasError:false});
    const [email,setEmail] = useState<InputState>({value:"",hasError:false});

    const handleSubmit = async (event:FormEvent)=>{
        event.preventDefault();
        
        let hasError = false;

        //Pattern matching
        if(!name.value.match(/[\S\s]+[\S]+/))
        {
            setName((prev)=>({...prev,hasError:true}));
            hasError = true;
        }
        if(!(phoneNumber.value.match((/^[0-9]+$/)) && phoneNumber.value.length == 10))
        {
            setPhoneNumber((prev)=>({...prev,hasError:true}));
            hasError = true;
        }
        if(!email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        {
            setEmail((prev)=>({...prev,hasError:true}));
            hasError = true;
        }

        if(hasError)return;

        const userdata:userdataInterface = {name:name.value,phoneNumber:phoneNumber.value,email:email.value};

        localStorage.setItem("userdata",JSON.stringify(userdata));
        navigator("/")
    }

    return (
        <Container maxWidth='xs'>
            <Paper
                component="form"    
                onSubmit={handleSubmit}
                sx = {{
                    p:3,mt:3,
                    display:"flex",flexDirection:"column",gap:4
                }}
                elevation={3}
            >
                <Typography variant="h5">Login</Typography>

                <TextField 
                    fullWidth required variant="outlined"
                    label='Name' value={name.value} error={name.hasError}
                    onChange={(e)=>setName({value:e.target.value,hasError:false})}
                    helperText={(name.hasError?"Invalid Name":"")}
                />
                <TextField
                    fullWidth required variant="outlined"
                    label='Phone Number' value={phoneNumber.value} error={phoneNumber.hasError}
                    onChange={(e)=>setPhoneNumber({value:e.target.value,hasError:false})}
                    helperText={(phoneNumber.hasError?"Invalid Phone Number":"")}
                />
                <TextField
                    fullWidth required variant="outlined"
                    label='Email Address' value={email.value} error={email.hasError}
                    onChange={(e)=>setEmail({value:e.target.value,hasError:false})}
                    helperText={(email.hasError?"Invalid Email":"")}
                />

                <Button type="submit" variant="contained">Submit</Button>
            </Paper>
        </Container>
    )
}