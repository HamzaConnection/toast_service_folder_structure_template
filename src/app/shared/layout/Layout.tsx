// import { ReactNode } from 'react';
// import { useUserContext } from '../../core/context/userContext';
// import { Environment } from '../enums/environment';
// import Footer from './Footer';
// import { ErrorToast } from '../components/ErrorToast';
// import Navigation from '../../core/router/Navigation';
// type Props = {
//     children?: ReactNode;
// };

// const Layout = ({ children }: Props): JSX.Element => {
//     const { user } = useUserContext();

//     return (
//         <>
//             <div className="layout">
//                 {user && <Navigation />}
//                 <div className='content'}>
//                     {children}
//                     <ErrorToast />
//                 </div>
//                 <Footer />
//             </div>
//         </>
//     );
// };

// export default Layout;

const Layout = () => {
    return (
        <div>Layout</div>
    )
}

export default Layout