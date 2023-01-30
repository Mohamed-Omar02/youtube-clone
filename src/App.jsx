import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
//components
import {Feed, VideoDetail, ChannelDetail, SearchFeed} from "./components";
//layout
import RootLayout from "./layout/RootLayout";


const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Feed />} />
      <Route path="video/:id" element={<VideoDetail />} />
      <Route path="Channel/:id" element={<ChannelDetail />} />
      <Route path="search/:searchTerm" element={<SearchFeed />} />
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
