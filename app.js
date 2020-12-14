const signupForm = document.querySelector('#signup-form');
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

function showErrorMessage(element) {
    const p = document.createElement('p')
    p.className += " error"

    let placeholderText = element.attributes.placeholder.textContent

    // set custom error message
    if (element === email) {
        p.textContent = "Looks like this is not an email"
        element.setAttribute("placeholder", "email@example.com")
    } else {
        p.textContent = `${placeholderText} cannot be empty`
        element.setAttribute("placeholder", "")
    }

    element.style.border = "2px solid hsl(0, 100%, 74%)"
    element.parentElement.appendChild(p)

    const { nextSibling } = element.nextSibling
    nextSibling.removeAttribute('hidden')
}

signupForm.addEventListener('submit', e => {
    e.preventDefault()  // prevent page reload

    const inputFields = [firstName, lastName, email, password]

    inputFields.forEach(field => {
        if (field.value === "") {
            showErrorMessage(field)
        }
    })

})