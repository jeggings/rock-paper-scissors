const avatars = document.querySelectorAll(".avatar-choice")
const joinButton = document.querySelector("#join-button")
const createButton = document.querySelector("#create-button")
const nameInput = document.querySelector("#name-input")
const roomCodeInput = document.querySelector("#room-code-input")

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
    window.location.href = `/game?name=${nameInput?.value}&avatar=${selectedAvatar}&room=${roomCodeInput?.value}`;
});

createButton?.addEventListener('click', () => {
    console.log(nameInput?.value)
    console.log('Create Button Clicked')
});