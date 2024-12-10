const header = document.createElement('header');

//All Menu Links
const items = [
    { href: 'about.html', text: 'About Me' },
    { href: 'contact.html', text: 'Contact' },
    { href: 'previous-work.html', text: 'Previous Work' },
    { href: 'projects.html', text: 'Projects' },
  ];

const navList = document.createElement('ul');
navList.className = 'nav-list';

items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'nav-list-item';

    const link = document.createElement('a');
    link.href = item.href;
    link.className = 'nav-link hover-transition';
    link.textContent = item.text;

    listItem.appendChild(link);
    navList.appendChild(listItem);
});

const largeScreenNavbar = document.createElement('nav');
largeScreenNavbar.className = 'navbar large-screen-navbar';
largeScreenNavbar.appendChild(navList);

header.appendChild(largeScreenNavbar);
document.body.insertBefore(header, document.body.firstChild); //make header appear at the top

