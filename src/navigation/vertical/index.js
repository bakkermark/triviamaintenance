export default [
  {
    title: 'Dashboard',
    to: { name: 'root' },
    icon: { icon: 'tabler-dashboard' },
  },
  {
    title: 'Trivia Questions',
    to: { name: 'questions' },
    icon: { icon: 'tabler-database-edit' },
  },
  {
    title: 'Trivia Categories',
    icon: { icon: 'tabler-note' },
    children: [
      { title: 'Overview', to: 'categories', },
      { title: 'Add', to: 'category-add', },
    ],
  },
  {
    title: 'Trivia Languages',
    to: { name: 'languages' },
    icon: { icon: 'tabler-message-language' },
  },
  {
    title: 'About',
    to: { name: 'about' },
    icon: { icon: 'tabler-device-imac-question' },
  },
]
