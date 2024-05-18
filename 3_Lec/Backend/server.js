import express from "express";

const app = express();
// express work : to serve and listen on route

app.get('/', (req, res) => {
    res.send('Server is ready')
})

// get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'My wife told me to stop impersonating a flamingo. I had to put my foot down'
        },
        {
            id: 2,
            title: 'A joke',
            content: 'The easiest time to add insult to injury is when you are signing someones cast'
        },
        {
            id: 3,
            title: 'A joke',
            content: 'Why shouldnt you marry a calendar? Its days are numbered'
        },
        {
            id: 4,
            title: 'A joke',
            content: 'What do you call a murderer with two butts? An assassin'
        },
        {
            id: 5,
            title: 'A joke',
            content: 'A computer once beat me at chess, but it was no match for me at kickboxing'
        }

    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})