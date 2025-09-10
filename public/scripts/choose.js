const avatars = document.querySelectorAll(".avatar-choice")
const joinButton = document.querySelector("#join-button")
const createButton = document.querySelector("#create-button")


let selectedAvatar

// Add Event listeners to all avatars
avatars.forEach(avatar => {
    avatar.addEventListener('click', () => {
        setSelected(avatar.id)
    });
});

const setSelected = (avatarID) => {
    selectedAvatar = avatarID
    avatars.forEach(avatar => {
        if (avatar.id == avatarID)
            avatar.classList.add('selected-avatar');
        else
            avatar.classList.remove('selected-avatar');
    })
}

setSelected(avatars[0].id)

joinButton?.addEventListener('click', () => {
    console.log('Join Button Clicked')
});

createButton?.addEventListener('click', () => {
    console.log('Create Button Clicked')
});