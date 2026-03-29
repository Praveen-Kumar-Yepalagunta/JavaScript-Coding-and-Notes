let users = [
  { id: 1, username: "Bittu" },
  { id: 2, username: "Ankur" }
];

let posts = [
  { userId: 1, id: 1, title: "sunt aut" },
  { userId: 1, id: 2, title: "qui est esse" },
  { userId: 2, id: 3, title: "ea molestiut" }
];

let comments = [
  { postId: 1, id: 1 },
  { postId: 1, id: 2 },
  { postId: 2, id: 3 }
];



// output: 
[
  { username: "Bittu", content: "sunt aut", comments: 2 },
  { username: "Bittu", content: "qui est esse", comments: 1 },
  { username: "Ankur", content: "ea molestiut", comments: 0 }
]

function getPostDetails(users, posts, comments) {
  return posts.map(post => {
    let user = users.find(u => u.id === post.userId);

    let postComments = comments.filter(c => c.postId === post.id);

    return {
      username: user.username,
      content: post.title,
      comments: postComments.length
    };
  });
}

// call function
let result = getPostDetails(users, posts, comments);
console.log(result);

console.log(result);
