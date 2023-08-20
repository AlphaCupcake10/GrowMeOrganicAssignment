import Segment from "./Component2/Segment"

export default function Component2()
{

    const data = [
        {
            "department": "customer_service",
            "sub_departments": [
                "support",
                "customer_success"
            ]
        },
        {
            "department": "design",
            "sub_departments": [
                "graphic_design",
                "product_design",
                "web_design"
            ]
        }
    ]
    

    return(
        <>
            <Segment label="customer_service" subSections={["graphic_design",
                "product_design",
                "web_design"]}/>
            {
                data.map((value,index)=>{
                    return <Segment key={index} label={value.department} subSections={value.sub_departments}/>
                })   
            }
        </>
    )
}