//generate the table of content
const h1s = document.querySelectorAll("h1");
const h2s = document.querySelectorAll("h2");
const h3s = document.querySelectorAll("h3");
const hs = [...h1s, ...h2s, ...h3s];

hs.forEach(h => h.classList.add('headings'));
const toc = document.querySelector(".table-of-content");

h1s.forEach(h1 => h1.classList.add('h1'));
h2s.forEach(h2 => h2.classList.add('h2'));
h3s.forEach(h3 => h3.classList.add('h3'));
const headings = document.querySelectorAll('.headings');
headings.forEach(heading => {
    const tableElement = document.createElement('DIV');
    const anchor = document.createElement('A');
    if(heading.classList.contains('h1')) tableElement.classList.add('heading1');
    if(heading.classList.contains('h2')) tableElement.classList.add('heading2');
    if(heading.classList.contains('h3')) tableElement.classList.add('heading3');
    anchor.href = '#' + heading.id;
    anchor.textContent = heading.textContent;
    tableElement.appendChild(anchor);
    toc.appendChild(tableElement);
})


const dates = document.querySelector('.blog-body--time');
const formatDate = date => {
    const datee = new Date(date.textContent);
    const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
    // timeZone: 'America/Los_Angeles'
  }
    const newDate = new Intl.DateTimeFormat('en-GB', options).format(datee)
    date.textContent = `Published on: ${newDate}`;
};
formatDate(dates);
//generate the comment box;
const commentBox = document.querySelector('.blog-body--comment');
function generateComment(){
  const data = JSON.parse(localStorage.getItem("user")); 
  if(!data) {
    const noLoginEl = document.createElement("DIV");
    noLoginEl.textContent = 'please sign in to comment on this post!';
    commentBox.appendChild(noLoginEl);
  }else{
    const LoginEl = document.createElement("INPUT");
    LoginEl.type = 'text';
    commentBox.appendChild(LoginEl);
  }

}
generateComment();



