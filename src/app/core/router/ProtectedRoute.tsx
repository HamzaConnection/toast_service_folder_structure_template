// import { Route, Redirect } from 'react-router-dom';
// import { LOGIN_ROUTE } from '../../constants/routes';
// import { useUserContext } from '../context/userContext';

// const ProtectedRoute = ({ children, ...rest }: any): JSX.Element => {
//     const { user } = useUserContext();

//     return (
//         <Route
//             {...rest}
//             render={() => {
//                 return user?.id ? children : <Redirect to={LOGIN_ROUTE} />;
//             }}
//         ></Route>
//     );
// };

// export default ProtectedRoute;


const ProtectedRoute = () => {
    return (
        <div>ProtectedRoute</div>
    )
}

export default ProtectedRoute