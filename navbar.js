const createNavList = (items) => {
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

    return navList;
};

const header = document.createElement('header');

// All Menu Links
const items = [
    { href: 'about.html', text: 'About Me' },
    { href: 'contact.html', text: 'Contact' },
    { href: 'previous-work.html', text: 'Previous Work' },
    { href: 'projects.html', text: 'Projects' },
];

const largeScreenNavbar = document.createElement('nav');
largeScreenNavbar.className = 'navbar large-screen-navbar';
largeScreenNavbar.appendChild(createNavList(items));

const smallScreenNavbar = document.createElement('nav');
smallScreenNavbar.className = 'navbar small-screen-navbar';

// Create the checkbox to toggle the navbar
const toggleTrigger = document.createElement('input');
toggleTrigger.type = 'checkbox';
toggleTrigger.className = 'navbar-toggle-trigger';
toggleTrigger.id = 'navbar-toggle-trigger';
smallScreenNavbar.appendChild(toggleTrigger);

// label the hamburger menu
const toggleExpandButton = document.createElement('label');
toggleExpandButton.setAttribute('for', 'navbar-toggle-trigger');
toggleExpandButton.className = 'navbar-circular-icon-button';
toggleExpandButton.setAttribute('aria-label', 'open navbar list'); // improve accessibility 
const icon = document.createElement('i');
icon.className = 'fa-solid fa-bars'; // Add icon for fontawesome
toggleExpandButton.appendChild(icon);
smallScreenNavbar.appendChild(toggleExpandButton);

// Create the collapsible menu container
const smallScreenNavContainer = document.createElement('div');
smallScreenNavContainer.id = 'small-screen-navbar-element-container';
smallScreenNavContainer.className = 'small-screen-navbar-element-container';
smallScreenNavbar.appendChild(smallScreenNavContainer);

smallScreenNavContainer.appendChild(createNavList(items));

// Add both menus to the header
header.appendChild(largeScreenNavbar);
header.appendChild(smallScreenNavbar);

// insert the header at the top of the page
document.body.insertBefore(header, document.body.firstChild);