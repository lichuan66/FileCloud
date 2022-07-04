import FirstPage from "../component/Layer/Aside/FirstPage";
import Transform from "../component/Layer/Aside/Transform";
import MyFile from "../component/Content/MyFile";
import { Navigate } from 'react-router-dom'

const routes = [
    {
        path: '/firstpage',
        element: <FirstPage />,
        children: [
            {
                path: 'myfile',
                element: <MyFile />
            }
        ]
    },
    {
        path: '/transform',
        element: <Transform />
    },
    {
        path: '/',
        element: <Navigate to='/firstpage' />
    }
]

export default routes