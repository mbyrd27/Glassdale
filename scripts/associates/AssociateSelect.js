const eventHub = document.querySelector('.container');

eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.className === 'associate-btn') {
        const customEvent = new CustomEvent('alibiClicked', {
            detail: {
                chosenAlibi: parseInt(clickEvent.target.id)
            }
        });

        eventHub.dispatchEvent(customEvent);
    }
})
