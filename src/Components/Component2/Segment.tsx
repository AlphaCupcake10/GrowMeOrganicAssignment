// import { CheckBox } from "@mui/material";
import { Box, Button, FormControlLabel, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

interface SegmentProps
{
    label:string,
    subSections?:string[]
}
export default function Segment(props:SegmentProps)
{
    const [isOpen , setIsOpen] = useState(true);
    const [isCheckedChildren,setIsCheckedChildren] = useState<boolean[]>(Array(props.subSections?.length).fill(false));

    const toggleOpenState = ()=>
    {
        setIsOpen(prev=>!prev);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>
    {
        setIsCheckedChildren((child)=>{
            return child.map(()=>event.target.checked)
        })
    }
    const handleChangeChildren = (index:number)=>
    {
        setIsCheckedChildren((prev)=>{
            prev[index] = !prev[index];
            return [...prev];
        })
    }

    return(
        <>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <FormControlLabel control=
                {
                    <Checkbox
                        checked={isCheckedChildren.every(val => val === true)}
                        indeterminate={isCheckedChildren.some((val)=>val !== isCheckedChildren[0])}
                        onChange={handleChange}
                    />
                }
                label={props.label} />
                {
                    props.subSections && (
                        <Box sx={{display:"flex",alignItems:"center"}}>
                            <Typography variant='caption'>({props.subSections.length})</Typography>
                            <Button onClick={toggleOpenState} >{isOpen?"-":"+"}</Button>
                        </Box>
                    )
                }
            </Box>

            <Box sx={{pl:3,display:"flex",flexDirection:"column"}}>
                {
                    isOpen && props.subSections?.map((value,index)=>{
                        return (
                            <FormControlLabel key={index} control=
                            {
                                <Checkbox
                                    onClick={()=>handleChangeChildren(index)}
                                    checked={isCheckedChildren[index]}
                                />
                            } 
                            label={value} />
                        )
                    })
                }
            </Box>
        </>
    )
}