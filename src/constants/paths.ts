export const PATHS = {
  HOME: {
    path: '/',
    name: 'Home',
    label: 'Home',
  },
  SIGNIN: {
    path: '/sign-in',
    name: 'Sign In',
    label: 'Sign In',
  },
  SIGNUP: {
    path: '/sign-up',
    name: 'Sign Up',
    label: 'Sign Up',
  },
  CREATE_SURVEY: {
    path: '/create-survey',
    name: 'Create Survey',
    label: 'Create Survey',
  },
  SURVEYS: {
    path: '/surveys',
    name: 'Surveys',
    label: 'Surveys',
  },
  TEAM_USERS: {
    path: '/team-users',
    name: 'Team Users',
    label: 'Team Users',
  },
  PROFILE: {
    path: '/profile',
    name: 'Profile',
    label: 'Profile',
  },
  SETTINGS: {
    path: '/settings',
    name: 'Settings',
    label: 'Settings',
  },
  LOGOUT: {
    path: '/logout',
    name: 'Logout',
    label: 'Logout',
  },
}

export const NAVBAR_PATHS_BASE = {
  HOME: PATHS.HOME,
  SURVEYS: PATHS.SURVEYS,
  TEAM_USERS: PATHS.TEAM_USERS,
  PROFILE: PATHS.PROFILE,
  SETTINGS: PATHS.SETTINGS,
  LOGOUT: PATHS.LOGOUT,
}

export const NAVBAR_PATHS = Object.values(NAVBAR_PATHS_BASE)