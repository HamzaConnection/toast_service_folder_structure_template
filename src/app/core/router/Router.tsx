// const Router = (): JSX.Element => {
//     const { user } = useUserContext();

//     return (
//         <Layout>
//             <Switch>
//                 {user && <Redirect exact from="/" to={path.STATUS_ROUTE}></Redirect>}
//                 {user && (
//                     <Redirect exact from="/login" to={path.STATUS_ROUTE}></Redirect>
//                 )}
//                 <Redirect exact from="/" to={path.LOGIN_ROUTE}></Redirect>

//                 <Route exact path={path.LOGIN_ROUTE}>
//                     <LoginPage />
//                 </Route>
//                 <ProtectedRoute exact path={path.STATUS_ROUTE}>
//                     <StatusPage />
//                 </ProtectedRoute>
//                 <Route path={path.ANY_ROUTE}>
//                     <NotFoundPage />
//                 </Route>
//             </Switch>
//         </Layout>
//     );
// };
// export default Router;


const Router = () => {
    return (
        <div>Router</div>
    )
}

export default Router