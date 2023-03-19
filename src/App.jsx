import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {NavBar} from "./components/NavBar";
import {Footer} from "./components/Footer";
import {AllPost} from "./components/AllPost";
import {AboutMe} from "./components/AboutMe";
import {Gallery} from "./components/Gallery";
import {ContactMe} from "./components/ContactMe";
import {BlogPost} from "./components/BlogPost";
import { WordList } from "./components/WordList";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/allPost" element={<AllPost />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route
                        path="/post"
                        element={
                            <BlogPost
                                title="Example of Title"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod quam ac nulla sagittis, a venenatis eros consequat. Fusce pellentesque quam at bibendum molestie. Donec eget aliquet velit."
                                photoUrl="https://source.unsplash.com/random/800x600"
                            />
                        }
                    />
                    <Route path="/contactMe" element={<ContactMe />} />
                    <Route path="/wordlist" element={<WordList />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
