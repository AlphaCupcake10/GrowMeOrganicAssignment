import { DataGrid, GridColDef} from '@mui/x-data-grid';

interface Component1Props{
    data:jsonPlaceholderModel[]
}
export default function Component1(props:Component1Props)
{
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id' },
        { field: 'userId', headerName: 'User Id' },
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'body', headerName: 'Body', flex:1 },
    ];

    return(
        <DataGrid rows={props.data} columns={columns} />
    )
}