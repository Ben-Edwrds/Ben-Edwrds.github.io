let counterLikes = 0;
let counterDislikes = 0;

const setup = () => {
    lijstInladen();
}

const updateLikeBar = () => {
    let likebar = document.getElementById("likebar");

    if(counterLikes > 0) {
        likebar.style.visibility = "visible";
    }
}

const lijstInladen = () => {
    let movielist = document.getElementById('movielist');

    for (let i = 0; i < movies.length; i++) {
        let film = movies[i];

        let filmDiv = document.createElement('div');
        filmDiv.classList.add('movie');

        let titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.textContent = film.title;

        let imageDiv = document.createElement('div');
        imageDiv.classList.add('image');
        let img = document.createElement('img');
        img.src = film.imageUrl;
        img.alt = film.title;
        imageDiv.appendChild(img);

        let descDiv = document.createElement('div');
        descDiv.classList.add('description');
        descDiv.textContent = film.description;

        let buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        let likeIcon = document.createElement('i');
        likeIcon.classList.add("fas", "fa-thumbs-up", "neutral");

        let dislikeIcon = document.createElement('i');
        dislikeIcon.classList.add("fas", "fa-thumbs-down", "neutral");

        let likeCounter = document.getElementById('like');
        let dislikeCounter = document.getElementById('dislike');
        let likebar = document.getElementById('likeBar');

        likeIcon.addEventListener('click', () => {
            let isLiked = likeIcon.classList.contains("liked");
            let isDisliked = dislikeIcon.classList.contains("disliked");

            if (!isLiked) {
                likeIcon.classList.add("liked");
                likeIcon.classList.remove("neutral");
                counterLikes++;


                if (isDisliked) {
                    dislikeIcon.classList.remove("disliked");
                    dislikeIcon.classList.add("neutral");
                    counterDislikes--;
                }
            } else {
                likeIcon.classList.remove("liked");
                likeIcon.classList.add("neutral");
                counterLikes--;
            }

            likeCounter.textContent = counterLikes;
            dislikeCounter.textContent = counterDislikes;

            updateLikeBar();
        });

        dislikeIcon.addEventListener('click', () => {
            const isDisliked = dislikeIcon.classList.contains("disliked");
            const isLiked = likeIcon.classList.contains("liked");

            if (!isDisliked) {
                dislikeIcon.classList.add("disliked");
                dislikeIcon.classList.remove("neutral");
                counterDislikes++;

                if (isLiked) {
                    likeIcon.classList.remove("liked");
                    likeIcon.classList.add("neutral");
                    counterLikes--;
                }
            } else {
                dislikeIcon.classList.remove("disliked");
                dislikeIcon.classList.add("neutral");
                counterDislikes--;
            }

            likeCounter.textContent = counterLikes;
            dislikeCounter.textContent = counterDislikes;

            updateLikeBar();
        });

        buttonsDiv.append(likeIcon, dislikeIcon);

        filmDiv.append(titleDiv, imageDiv, descDiv, buttonsDiv);
        movielist.appendChild(filmDiv);
    }
}


window.addEventListener('DOMContentLoaded', setup);
