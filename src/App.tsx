import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router";
import {BrowserRouter as Router } from "react-router-dom";

import {Login} from "./views/auth/Login";
import {Register} from "./views/auth/Register";
import {BlogApp} from "./BlogApp";
import {Home} from "./views/Home";
import {CategoryView} from "./views/CategoryView";
import {TagView} from "./views/TagView";
import {ArchiveView} from "./views/ArchiveView";
import {ArticlesView} from "./views/ArticlesView";
import {ArticleView} from "./views/ArticleView";
import {CreateView} from "./views/CreateView";
import {useAuth} from "./utils/authUtils";
import {UnauthenticatedView} from "./views/UnauthenticatedView";
import {setAuthToken} from "./interceptor/authInterceptor";

function App() {
    const {user, appInit} = useAuth();
    setAuthToken(user?.token || '')

    useEffect(() => {
        appInit()
    }, [appInit])


    return (
        <div className="App">
            <Router>
                <Routes>
                    {user?.id ? null : <Route path="/login" element={<Login/>} />}
                    {user?.id ? null : <Route path="/register" element={<Register/>} />}
                    <Route path="/" element={<BlogApp/>}>
                        <Route path="" element={<Home/>} />
                        <Route path="category" element={<CategoryView />} />
                        <Route path="tag" element={<TagView />} />
                        <Route path="archive" element={<ArchiveView />} />
                        <Route path="archive/:year/:month" element={<ArchiveView />} />
                        <Route path="articles" element={<ArticlesView />} />
                        <Route path="article/:id" element={<ArticleView />} />
                        <Route path="new" element={user?.id ? <CreateView /> : <UnauthenticatedView />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
