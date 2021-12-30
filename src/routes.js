import Home from './components/page/Home';
import Posts from './components/page/Posts';
import PostDetail from './components/page/PostDetail'
import About from './components/page/About';
import PostSearch from './components/page/PostSearch';
import Card from './components/base/Card';

const routes = [
  {title:"Home", path:"/", element:Home, isNav: true},
  {title:"Posts", path:"posts", element:Posts, isNav: true},
  {title:"About", path:"about", element:About, isNav: true},
  {title:"PostDetail", path:"posts/:postId", element:PostDetail, isNav: false},
  {title:"PostSearch", path:"/search", element:PostSearch, isNav: false},
  {title:"Card", path:"/card", element:Card, isNav: false},
]

export default routes;