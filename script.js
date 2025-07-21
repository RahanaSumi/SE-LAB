document.addEventListener('DOMContentLoaded', () => {
  const data = {
    "CSE Books": ["Operating Systems", "Computer Networks", "AI Basics", "Data Structures"],
    "BBA Books": ["Microeconomics", "Marketing Principles", "Business Law"],
    "MBA Books": ["Strategic Management", "Finance Essentials", "Organizational Behavior"],
    "Historical Books": ["World History", "Medieval Europe", "Freedom Struggle"],
    "English Literature": ["Hamlet", "Macbeth", "Pride and Prejudice"],
    "Mathematics": ["Algebra", "Calculus", "Statistics"],
    "Bangla Literature": ["শ্রীকান্ত", "চোখের বালি", "পদ্মা নদীর মাঝি"]
  };

  const bookCategories = document.getElementById('bookCategories');

  Object.entries(data).forEach(([category, books]) => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    const card = document.createElement('div');
    card.className = 'card h-100';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = category;

    const list = document.createElement('ul');
    list.className = 'list-group list-group-flush';

    books.forEach(book => {
      const item = document.createElement('li');
      item.className = 'list-group-item';
      item.textContent = book;
      list.appendChild(item);
    });

    cardBody.appendChild(title);
    card.appendChild(cardBody);
    card.appendChild(list);
    col.appendChild(card);
    bookCategories.appendChild(col);
  });
});
