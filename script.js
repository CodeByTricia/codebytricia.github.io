const modal = document.getElementById("modal")
const showModal = document.getElementById("show-modal")
const closeModal = document.getElementById("close-modal")

const profileContainer = document.getElementById("profile-container")
const projectsContainer = document.getElementById("projects-container")
const profileContent = document.getElementById("profile-content")
const projectsContent = document.getElementById("projects-content")
const profileHeader = document.getElementById("prof-header")
const projectHeader = document.getElementById("proj-header")

const topNav = document.getElementById("top-nav")


showModal.addEventListener("click", () => {
    modal.classList.add("show-modal")
    modal.classList.remove("hidden")
    console.log("open modal")
})

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden")
    modal.classList.remove("show-modal")
    console.log("exit modal")
})


profileContainer.addEventListener("click", () => {

    if(profileContainer.classList.contains("profile-container-shrink")){

        profileContent.classList.remove("hidden")
        profileContainer.classList.remove("profile-container-shrink")
        profileContainer.classList.add("profile-grid")
        topNav.classList.remove("hidden")

        projectsContainer.classList.remove("projects-container-expand")
        projectsContent.classList.add("hidden")

        projectHeader.classList.remove("hidden")
        profileHeader.classList.add("hidden")

    }

})

projectsContainer.addEventListener("click", () => {

    profileContent.classList.add("hidden")
    profileContainer.classList.remove("profile-grid")
    profileContainer.classList.add("profile-container-shrink")
    topNav.classList.add("hidden")
    
    projectsContainer.classList.add("projects-container-expand")
    projectsContent.classList.remove("hidden")
    
    projectHeader.classList.add("hidden")
    profileHeader.classList.remove("hidden")
})



