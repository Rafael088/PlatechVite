import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Comunity from '../page/Comunity';
import Home from '../page/Home';
import Undertake from '../page/Undertake';

function Router() {
   
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<></>} />
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/emprende' element={<Undertake/>}/>
                    <Route exact path='/comunidad' element={<Comunity/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
} 
export default Router