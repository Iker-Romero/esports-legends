export const insertNavbar = (title) => {
    document.body.innerHTML += `
    <header>
      <nav>
        <a>${title}</a>
      </nav>
    </header>
    `
}