// noinspection SpellCheckingInspection
export default {
    me: {
        name: 'Piotr',
        surname: 'Adamczyk',
        fullName: '@:me.surname @:me.name',
        position: 'Full-Stack Developer'
    },
    nav: {
        home: 'Start',
        cv: 'CV',
        about: 'O mnie'
    },
    404: {
        message: 'Strona, ktorej szukasz nie istnieje.',
        goHome: 'Przejdź do strony głównej'
    },
    footer: {
        copyright: 'Copyright © {year} {author}. Wszelkie prawa zastrzeżone.'
    },
    terminal: {
        window: "Terminal",
        host: "adamczykpiotr",
        guest: "gość",
        loginAs: "Zalogowano jako: {user}",
        lastLogin: "Ostatnie logowanie: {date}",
        initialMessage: "Wpisz ‚help’ + <kbd>Enter</kbd> - by zobaczyć listę dostępnych poleceń i możliwości terminala.",
        invalidCommand: "Niepoprawne polecenie",
        help: `Wpisz [command] + <kbd>Enter</kbd></br></br>
            ,help’ - Strona pomocy ale to już wiesz ;)</br>
            ,uname (-a)' - Informacje o urządzeniu</br>
            ‚su’ - Zostań super userem</br>
            ‚whoami’ - Wyświetl nazwę użytkownika</br>
            ,clear’ — Wyczyść ekran</br></br>
            <kbd>↑</kbd> - Przywróć polecenie z historii, jedno do góry</br>
            <kbd>↓</kbd> - Przywróć polecenie z historii, jedno do dołu'`,
        unknownBrowser: "Unknown",
        su: {
            already: 'Już jesteś super userem!',
            now: 'Jesteś teraz super userem!'
        }
    }
}