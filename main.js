var searchQuery = document.getElementById('searchQuery');
var output = document.querySelector("#output");

document.getElementById('search').addEventListener('click', getUser);

function getUser(e){
    e.preventDefault();
    fetch('https://api.github.com/users/'+searchQuery.value)
    .then(res => res.json())
    .then((user) => {
    	if (user.name) {
    		var card = `
    			<div class="card" style="width: 21rem;">
    				<img src="${user.avatar_url}" class="card-img-top img-fluid img" style="max-height: 21rem;">
    				<div class="card-body">
    					<h5 class="card-title">${user.name}</h5>
    					<p class="card-text">This user was gotten through github API using javascript fetchAPI</p>
    					<a href="${user.html_url}" class="btn btn-primary">View Profile</a>
    				</div>
    			</div>
    	`
    	output.innerHTML = card;
    	} else{
    		var card = `
    		<div class="card" style="width: 21rem;">
    			<div class="card-body">
    				<p class="card-text">User ${searchQuery.value} does not exist.</p>
    			</div>
    		</div>
    		`
    		output.innerHTML = card;
    	}
    });
};
