import {
    Routes,
    Route,
} from "react-router-dom";
import BusinessPage from './app/pages/BusinessPage'
import HomePage from './app/pages/HomePage'

interface RoutesProps {
    isDataLoaded: boolean
}


function AppRoutes(props: RoutesProps) {
    return (
        <Routes>
            <Route index={false} path='/' element={<HomePage isDataLoaded={props.isDataLoaded} />} />
            <Route path="/business/:id" element={<BusinessPage {...props} />} />
        </Routes>
    )
}

export default AppRoutes