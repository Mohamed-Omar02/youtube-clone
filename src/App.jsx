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
      <Route path="search/:searchTerm" element={<SearchFeed />} />
      <Route path="search/:searchTerm/channel/:id" element={<ChannelDetail />} />
      <Route path="channel/:id" element={<ChannelDetail />} />
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
