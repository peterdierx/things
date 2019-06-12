// STATE
export default {

  categories: [
    { name: 'Inbox',     selected: true  },
    { name: 'Today',     selected: false },
    { name: 'Upcoming',  selected: false },
    { name: 'Someday',   selected: false },
    { name: 'Completed', selected: false },
    { name: 'Archive',   selected: false }
  ],
  things: [
    { id: 1, title: 'Wash the dishes', category: 'Inbox' },
    { id: 2, title: 'Maw the lawn',    category: 'Inbox' },
    { id: 3, title: 'Walk the dog',    category: 'Inbox' },
    { id: 4, title: 'Groceries',       category: 'Today' }
  ]
  
}
