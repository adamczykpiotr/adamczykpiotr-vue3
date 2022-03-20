export default {
    me: {
        name: "Piotr",
        surname: "Adamczyk",
        fullName: "@:me.surname @:me.name",
        position: "Full-Stack Developer"
    },
    nav: {
        home: "Home",
        cv: "CV",
        about: "About"
    },
    404: {
        message: "The page you looking for is not found.",
        goHome: "Go to homepage"
    },
    footer: {
        copyright: "Copyright © {year} by {author}. All rights reserved."
    },
    terminal: {
        window: "Terminal",
        host: "adamczykpiotr",
        guest: "guest",
        loginAs: "Login as: {user}",
        lastLogin: "Last login: {date}",
        initialMessage: "Enter ‚help’ + <kbd>Enter</kbd> - in order to see list of available commands and tricks.",
        invalidCommand: "Incorrect command.",
        help: `Enter [command] + <kbd>Enter</kbd></br></br>
            ,help’ - Help page, you already know that</br>
            ,uname (-a)' - Get info about your machine</br>
            ‚su’ - Log in as root</br>
            ‚whoami’ - Display username</br>
            ,clear’ — Clear screen, duh!</br></br>
            <kbd>↑</kbd> - Restore command history, move one up'</br>
            <kbd>↓</kbd> - Restore command history, move one down'`,
        unknownBrowser: "Unknown",
        su: {
            already: "You are already a super user!",
            now: "You are now a super user!"
        }
    }
}