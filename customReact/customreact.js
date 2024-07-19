function customRender(reactElement, container) {

    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childeren
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)

    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childeren
    for (const prop in reactElement.props) {
        if (prop === 'childeren') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    childeren: 'Click me to visit google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)