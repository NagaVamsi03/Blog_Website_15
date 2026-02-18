function addPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please fill all fields");
        return;
    }

    const postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button class="delete-btn" onclick="deletePost(this)">Delete</button>
    `;

    document.getElementById("posts").appendChild(postDiv);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

function deletePost(button) {
    button.parentElement.remove();
}
