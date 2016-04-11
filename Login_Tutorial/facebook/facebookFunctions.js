function getFriendsLikes(){
	  var data = friendsList.data;
	  var length = data.length;
	  var friend;
	  
	  for(var i = 0; i < length; i++){
		  friend = data[i];

		  getLikes(friend.id);
	  }
	  
  }
  
  function getFriendslist(userId){
	FB.api(
		"/" + userId +  "/friends",
		function (response) {
			if (response && !response.error) {
				friendsList = response;
			}
		}
	);
	  
  }
  
  
  function getBooks(userId){
	FB.api(
		"/" + userId +  "/books.wants_to_read?limit=100",
		function (response) {
			if (response && !response.error) {
				console.log("Interests!");
				console.log(response);
			}
		}
	);
	  
  }
  
  function getLikes(userId){
	FB.api(
		"/" + userId +  "/likes?limit=100",
		function (response) {
			if (response && !response.error) {
				console.log("Likes!");
				console.log(response);
			}
		}
	);
	  
  }