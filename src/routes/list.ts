import Profile from '../pages/profile/Profile'
import Auth from '../layout/auth/Auth'
import Resources from '../pages/resources/Resources'
import Info from '../pages/info/Info'
import Message from '../pages/messages/Message'
import Education from '../pages/education/Education'
import News from '../pages/news/News'

export const routes = [
    {
        path: '/',
        exact: true,
        component: Profile,
        auth: true,
    },
    {
        path: '/profile',
        exact: false,
        component: Profile,
        auth: true,
    },
    {
        path: '/message',
        exact: true,
        component: Message,
        auth: true,
    },
    {
        path: '/news',
        exact: true,
        component: News,
        auth: true,
    },
    {
        path: '/education',
        exact: true,
        component: Education,
        auth: true,
    },
    {
        path: '/sources',
        exact: false,
        component: Resources,
        auth: true,
    },
    {
        path: '/auth',
        exact: true,
        component: Auth,
        auth: false,
    },
    {
        path: '/help',
        exact: true,
        component: Info,
        auth: false,
    },
]