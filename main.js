var searchQuery = document.getElementById("searchQuery")
var output = document.getElementById("output")

document.getElementById("search").addEventListener("click", getUser)

function getUser(e){
  e.preventDefault();
  fetch("https://api.github.com/users/"+searchQuery.value)
  .then(res => res.json())
  .then(user => {
    var card = `
    <div class="card" style="width: 21rem;">
      <img src="${user.avatar_url}" class="img card-img-top" style="max-height: 21rem;">
      <div class="card-body">
        <h5 class="card-heading">${user.name}</h5>
        <p class="card-text">This user was gotten from github API using JavaScript FetchAPI</p>
        <a href="${user.html_url}" class="btn btn-primary" target="_blank">View Profile</a>
      </div>
    </div>
    `
    output.innerHTML = card;
  });
};
